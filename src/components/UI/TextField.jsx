import { TextField as MuiTextField } from '@mui/material';
import { forwardRef } from 'react';

const TextField = forwardRef(({
	                              fullWidth,
	                              name = "text",
	                              type = "text",
	                              label = "Label",
	                              id,
	                              helperText,
	                              error,
	                              ...rest 
                              }, ref) => {
	return (
		<MuiTextField
			error={error}
			helperText={helperText}
			size="small"
			margin="normal"
			fullWidth={fullWidth}
			name={name}
			label={
				<>
					{label}
					<span style={{ color: 'red', marginLeft: 4 }} aria-hidden="true">*</span>
				</>
			}
			type={type}
			id={id}
			inputRef={ref}
			{...rest}
			sx={{
				mb: 3,
				'& .MuiOutlinedInput-root': {
					borderRadius: '8px',
				},
			}}
		/>
	);
});

export default TextField;