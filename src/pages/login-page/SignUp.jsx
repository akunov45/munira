import {Box, Typography, Container, Paper, Grid, Divider} from '@mui/material';
import {useForm} from 'react-hook-form';
import CommonButton from "../../components/UI/Button.jsx";
import {Link} from "react-router-dom";
import TextField from "../../components/UI/TextField.jsx";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {useState} from 'react';
import {IconButton, InputAdornment} from '@mui/material';
import {useTranslation} from "react-i18next";

const SignUp = () => {
	const { t } = useTranslation();
	const [showPassword, setShowPassword] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);
	const {register, handleSubmit, formState: {errors}, watch} = useForm();
	
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	
	const handleClickShowPassword2 = () => {
		setShowPassword2(!showPassword2);
	};
	
	const onSubmit = (data) => {
		console.log(data);
	};
	
	return (
		<Container component="main" maxWidth="sm">
			<Paper
				elevation={3}
				sx={{
					my: 8,
					p: {xs: 3, md: 4},
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderRadius: '16px',
					boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
				}}
			>
				<Typography component="h1" variant="h4" sx={{fontWeight: 'bold', mb: 2, textAlign: {xs: "center"}}}>
					{t("registration.title")}
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
					{t("registration.subtitle")}
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{mt: 1, width: '100%'}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								id="firstName"
								label={t(`registration.first_name`)}
								name="firstName"
								error={!!errors.firstName}
								helperText={errors.firstName?.message}
								{...register('firstName', {
									required: t("errors.required_name")
								})}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								id="lastName"
								label={t(`registration.last_name`)}
								name="lastName"
								error={!!errors.lastName}
								helperText={errors.lastName?.message}
								{...register('lastName', {
									required:  t("errors.required_fio")
								})}
							/>
						</Grid>
					</Grid>
					
					<TextField
						fullWidth
						id="phone"
						label={t(`registration.phone`)}
						name="phone"
						type="tel"
						error={!!errors.phone}
						helperText={errors.phone?.message}
						{...register('phone', {
							
							required: t("errors.required_phone"),
							pattern: {
								value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
								message: 'Некорректный номер телефона'
							}
						})}
					/>
					
					<TextField
						fullWidth
						id="email"
						label="Email"
						name="email"
						error={!!errors.email}
						helperText={errors.email?.message}
						{...register('email', {
							required: 'Email обязателен',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t("errors.invalid_email")
							}
						})}
					/>
					
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								name="password"
								label={t(`registration.password`)}
								type={showPassword ? 'text' : 'password'}
								id="password"
								error={!!errors.password}
								helperText={errors.password?.message}
								{...register('password', {
									required: t("errors.required_password"),
									minLength: {
										value: 6,
										message: 'Минимум 6 символов'
									},
									validate: {
										hasNumber: value => /\d/.test(value) || 'Должна быть хотя бы одна цифра',
										hasLetter: value => /[a-zA-Z]/.test(value) || 'Должна быть хотя бы одна буква'
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
											>
												{showPassword ? <VisibilityOff/> : <Visibility/>}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								name="confirmPassword"
								label={t(`registration.confirm_password`)}
								type={showPassword2 ? 'text' : 'password'}
								id="confirmPassword"
								error={!!errors.confirmPassword}
								helperText={errors.confirmPassword?.message}
								{...register('confirmPassword', {
									required: t("errors.required_pass_confirmation"),
									validate: (val) => {
										if (watch('password') !== val) {
											return t("errors.password_match");
										}
									}
								})}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												size={"small"}
												aria-label={showPassword2 ? 'Скрыть пароль' : 'Показать пароль'}
												onClick={handleClickShowPassword2}
												edge="end"
												sx={{
													color: 'action.active'
												}}
											>
												{showPassword2 ? <VisibilityOff/> : <Visibility/>}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					
					<CommonButton
						type="submit"
						fullWidth
					>
						{t("registration.submit")}
					</CommonButton>
					<Divider sx={{my: 2}}>{t("registration.divider_or")}</Divider>
					<Grid container justifyContent="center" spacing={2}>
						<Grid item>
							<Typography variant="body2">
								{t("registration.existing_account")}
								<Link to="/login" style={{textDecoration: 'underline'}}>
									{t("login.login")}
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Paper>
		</Container>
	);
};

export default SignUp;