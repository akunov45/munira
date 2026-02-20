import { Box, Container, Typography, Grid, Paper, Stack, ImageList, ImageListItem } from '@mui/material';
import {
  FaIndustry,
  FaCloud,
  FaGlobeAmericas,
  FaUsers,
  FaWarehouse, // Иконка склада
  FaCheckCircle,
  FaTruckLoading
} from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { label: 'Лет на рынке', value: '10+', icon: <FaIndustry /> },
    { label: 'Счастливых клиентов', value: '5000+', icon: <FaUsers /> },
    { label: 'Тонн хлопка в год', value: '200+', icon: <FaCloud /> },
    { label: 'Экспорт в страны', value: '15+', icon: <FaGlobeAmericas /> },
  ];

  // Данные для секции складов
  const warehousePhotos = [
    { img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000', title: 'Склад готовой продукции' },
    { img: 'https://i.pinimg.com/1200x/fe/f2/5d/fef25dca6b00baa199d444e1c91de011.jpg', title: 'Запасы сырья' },
    { img: 'https://i.pinimg.com/736x/fe/c1/cf/fec1cffc0852fbe8ae6ca195578cbe7b.jpg', title: 'Зона отгрузки' },
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* 1. Header */}
      <Box sx={{ bgcolor: '#379fab', color: '#fff', py: { xs: 6, md: 10 }, mb: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{ textTransform: 'uppercase' }}>
            О КОМПАНИИ AQVELA
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            Собственное производство полного цикла в сердце Центральной Азии.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl">
        {/* 2. Основная инфо-секция */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: '#379fab', fontWeight: 700, letterSpacing: 2 }}>
              Наше наследие
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, my: 2 }}>
              Производство Aqvela: От нити до полки
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Наша фабрика в Бишкеке оснащена современным оборудованием, позволяющим выпускать до 200 тонн продукции в год.
              Мы не просто перепродаем — мы **создаем**. Это позволяет нам гарантировать стабильность качества и лучшие цены для оптовых партнеров.
            </Typography>

            <Stack spacing={2} sx={{ mt: 3 }}>
              {[
                'Площадь цехов более 2000 м²',
                'Контроль качества на 3-х этапах (ОТК)',
                'Собственная дизайн-студия лекал'
              ].map((text, i) => (
                <Stack direction="row" spacing={2} key={i} alignItems="center">
                  <FaCheckCircle color="#379fab" />
                  <Typography variant="body1" fontWeight={500}>{text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://i.pinimg.com/736x/1a/36/b5/1a36b5ba30667fe3ad98b4c647e484d0.jpg"
              alt="Aqvela Production"
              sx={{ width: '100%', borderRadius: 4, boxShadow: '20px 20px 0px #379fab20' }}
            />
          </Grid>
        </Grid>

        {/* 3. Цифры (из вашего кода) */}
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper variant="outlined" sx={{ p: 4, textAlign: 'center', borderRadius: 3, transition: '0.3s', '&:hover': { borderColor: '#379fab', transform: 'translateY(-5px)' } }}>
                  <Box sx={{ color: '#379fab', fontSize: '2rem', mb: 1 }}>{stat.icon}</Box>
                  <Typography variant="h4" fontWeight={800}>{stat.value}</Typography>
                  <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. НОВАЯ СЕКЦИЯ: СКЛАДЫ И ЗАПАСЫ */}
        <Box sx={{ mt: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, bgcolor: '#f0f7f8', borderRadius: 4 }}>
                <FaWarehouse size={40} color="#379fab" />
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 2, mb: 2 }}>
                  Мощности и Склады
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Мы поддерживаем постоянный складской запас более 50 000 единиц продукции.
                  Это гарантирует нашим оптовым клиентам бесперебойные поставки и возможность быстрой отгрузки в день заказа.
                  Склады категории "А" обеспечивают идеальные условия хранения для текстиля (влажность и температура).
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom >
               Фото наших складов
              </Typography>
              <ImageList cols={3} gap={16} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                {warehousePhotos.map((item) => (
                  <ImageListItem key={item.img}>
                    <img src={item.img} alt={item.title} loading="lazy" style={{ height: '250px', objectFit: 'cover' }} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Box>

        {/* 5. Ценности (Восстановленные 3 карточки) */}
        <Box sx={{ mt: 15, bgcolor: '#f9f9f9', p: { xs: 4, md: 8 }, borderRadius: 4 }}>
          <Typography variant="h4" textAlign="center" sx={{ fontWeight: 700, mb: 6 }}>
            Наши главные ценности
          </Typography>
          <Grid container spacing={4}>
            {/* 1. Экологичность */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" fontWeight={700} color="#379fab" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <FaCloud size={20} /> Экологичность
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Мы используем только безопасные швейцарские красители и 100% натуральный хлопок. Наша продукция гипоаллергенна и безопасна даже для самой чувствительной кожи.
                </Typography>
              </Stack>
            </Grid>

            {/* 2. Инновации */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" fontWeight={700} color="#379fab" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <FaIndustry size={20} /> Инновации
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Постоянно обновляем парк оборудования (Германия, Турция). Это позволяет сохранять мягкость ворса и плотность ткани даже после 100 циклов промышленной стирки.
                </Typography>
              </Stack>
            </Grid>

            {/* 3. Партнерство */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" fontWeight={700} color="#379fab" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <FaUsers size={20} /> Партнерство
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Для нас важен каждый заказчик: от небольшой уютной кофейни до крупнейших сетей отелей. Мы предлагаем гибкие условия оплаты и индивидуальный пошив под ваш бренд.
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