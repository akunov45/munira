import {Children, cloneElement} from 'react';
import {Formik, useField, useFormikContext} from 'formik';
import CircularProgress from '@mui/material/CircularProgress';

export default function Form({initialValues = {}, validation, onSubmit, children, ...rest}) {
  return (
    <Formik {...{
      initialValues,
      validationSchema: validation,
      onSubmit,
    }}>
      {({handleSubmit}) => (
        <form onSubmit={handleSubmit} {...rest}>
          {children}
        </form>
      )}
    </Formik>
  )
}

export function FormField({children}) {
  let field = Children.only(children);
  let name = field.props.name;

  const [props, {error}] = useField(name);

  return cloneElement(field, {
    ...props,
    value: props.value || '',
    error: !!error,
    helperText: error || field.props.helperText,
  });
}

export function FormSubmit({children}) {
  let field = Children.only(children);
  let ctx = useFormikContext();
  let isBusy = ctx.isSubmitting;

  return cloneElement(field, {
    disabled: isBusy,
    startIcon: isBusy && <CircularProgress size="1.1rem"/>
  });
}