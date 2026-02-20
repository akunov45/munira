import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import {
  FaIndustry,      // Вместо FaFactory (Завод)
  FaCloud,         // Вместо FaCottonBureau (Похоже на хлопок/мягкость)
  FaGlobeAmericas, // Вместо FaGlobeCentralAsia (Глобус)
  FaUsers          // Эта обычно работает
} from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { label: 'Лет на рынке', value: '10+', icon: <FaIndustry /> },
    { label: 'Счастливых клиентов', value: '5000+', icon: <FaUsers /> },
    { label: 'Тонн хлопка в год', value: '200+', icon: <FaCloud /> },
    { label: 'Экспорт в страны', value: '15+', icon: <FaGlobeAmericas /> },
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Заголовок секции */}
      <Box
        sx={{
          bgcolor: '#379fab',
          color: '#fff',
          py: { xs: 6, md: 10 },
          mb: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{
            textTransform:'uppercase'
          }}>
            О КОМПАНИИ aqvela
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            Мы создаем домашний текстиль, который превращает обычный дом в пространство исключительного комфорта.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Текстовый блок */}
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: '#379fab', fontWeight: 700, letterSpacing: 2 }}>
              Наше наследие
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, my: 2 }}>
              Качество, проверенное временем и тысячами семей
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Компания **MUNITEXT** начала свой путь в Бишкеке как небольшое семейное производство.
              Сегодня мы — один из ведущих производителей домашнего текстиля в Центральной Азии.
              Наш секрет прост: мы используем только отборный хлопок и контролируем каждый этап —
              от выбора нити до упаковки готового халата.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Мы специализируемся на производстве махровых изделий, вафельных полотенец и
              эксклюзивных линеек домашней одежды для ритейла и гостиничного бизнеса.
            </Typography>
          </Grid>

          {/* Изображение (замени на свое или используй плейсхолдер) */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://i.pinimg.com/736x/1a/36/b5/1a36b5ba30667fe3ad98b4c647e484d0.jpg"
              alt="Munitext Production"
              sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: '20px 20px 0px #379fab20'
              }}
            />
          </Grid>
        </Grid>

        {/* Секция цифр */}
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: '0.3s',
                    '&:hover': { borderColor: '#379fab', transform: 'translateY(-5px)' }
                  }}
                >
                  <Box sx={{ color: '#379fab', fontSize: '2rem', mb: 1 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" fontWeight={800}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Принципы */}
        <Box sx={{ mt: 10, bgcolor: '#f9f9f9', p: { xs: 4, md: 8 }, borderRadius: 4 }}>
          <Typography variant="h4" textAlign="center" sx={{ fontWeight: 700, mb: 6 }}>
            Наши главные ценности
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight={700} color="#379fab">Экологичность</Typography>
                <Typography variant="body2" color="text.secondary">
                  Мы используем только безопасные красители и натуральное сырье, которое не вызывает аллергии.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight={700} color="#379fab">Инновации</Typography>
                <Typography variant="body2" color="text.secondary">
                  Постоянно обновляем парк оборудования, чтобы наши полотенца оставались мягкими даже после 100 стирок.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight={700} color="#379fab">Партнерство</Typography>
                <Typography variant="body2" color="text.secondary">
                  Мы ценим каждого клиента, будь то розничный покупатель или крупная сеть отелей.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;