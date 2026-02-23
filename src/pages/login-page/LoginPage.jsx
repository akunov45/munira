import {Box, Typography, Container, Paper, Grid, InputAdornment, IconButton} from '@mui/material';
import CommonButton from "../../components/UI/Button.jsx";
import {Link} from "react-router-dom";
import TextField from "../../components/UI/TextField.jsx";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, formState: {errors}, watch} = useForm();
  const {t} = useTranslation();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '12px',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: {xs:"center"} }}>
          {t("login.welcome")}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {t("login.text")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, width: '100%' }}>
          <TextField
            fullWidth
            id="email"
            label={t("login.email")}
            name="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("login.email_error_text")
              }
            })}
          />
          <TextField
            fullWidth
            name="password"
            label={t("login.password")}
            type={showPassword ? 'text' : 'password'}
            id="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', {
              required: t("login.password_error_text"),
              minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size={"small"}
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      color: 'action.active'
                    }}
                  >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CommonButton
            type="submit"
            fullWidth
            variant="contained"
          >
            {t("login.login")}
          </CommonButton>
          <Grid container sx={{my:"20px"}}>
            <Grid item xs>
            
            </Grid>
            <Grid item>
              <Link to="/sign-up" style={{ textDecoration: 'underline' }} >
                {t("login.registration")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;