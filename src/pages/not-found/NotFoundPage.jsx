import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CommonButton from "../../components/UI/Button.jsx";

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
			<ErrorOutlineIcon sx={{ fontSize: 100, color: 'error.main' }} />

			<Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'text.primary' }}>
				404
			</Typography>

			<Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
				Страница не найдена
			</Typography>

			<Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
				Извините, запрашиваемая страница не существует или была перемещена.
			</Typography>

			<CommonButton
				variant="contained"
				size="large"
				onClick={() => navigate('/')}
			>
				Вернуться на главную
			</CommonButton>
		</Container>
	);
};

export default NotFoundPage;