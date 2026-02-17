import React, { useRef } from 'react';
import { Container, Typography, Box, Avatar, Paper, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Reviews = () => {
  const swiperRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Твои брендовые цвета
  const COLORS = {
    green: '#4A707A',
    footer: '#2C4B72',
    grey: '#D1D9E0'
  };

  // Используем статические данные
  const reviews = [
    {
      id: 1,
      first_name: "Айгуль",
      last_name: "С",
      image: "https://yoga-antiage.kz/wp-content/uploads/2024/01/5519595806_03c7cc72de_b.jpg",
      message: "Заказывала партию полотенец из микрофибры для своего магазина. Качество потрясающее, клиенты в восторге!"
    },
    {
      id: 2,
      first_name: "Дмитрий",
      last_name: "И",
      image: "https://i.pravatar.cc/150?u=2",
      message: "Для гостиницы искали надежного поставщика. Халаты плотные, выдерживают многократные стирки. Очень довольны."
    },
    {
      id: 3,
      first_name: "Нурбек",
      last_name: "А",
      image: "https://data.vb.kg/image/big/2021-07-28_17-26-39_254955.jpg",
      message: "Быстро ответили в WhatsApp, помогли подобрать ассортимент для Wildberries. Отличный сервис для оптовиков."
    }
  ];

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  return (
    <Container maxWidth="xl" sx={{ py: 10, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: 800,
          color: COLORS.footer,
          textTransform: 'uppercase'
        }}
      >
        Отзывы наших партнеров
      </Typography>

      <Box sx={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', px: isMobile ? 0 : 6 }}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ paddingBottom: '50px' }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} style={{ height: 'auto' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '24px',
                  bgcolor: '#F2F5F7', // Твой --color-white-cloud
                  border: `1px solid ${COLORS.grey}`,
                  transition: '0.3s',
                  '&:hover': {
                    borderColor: COLORS.green,
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src={review.image}
                    sx={{
                      width: 90,
                      height: 90,
                      mb: 2,
                      border: `3px solid ${COLORS.green}`,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    {review.first_name[0]}
                  </Avatar>

                  <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.footer, mb: 2 }}>
                    {review.first_name} {review.last_name}.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      position: 'relative',
                    }}
                  >
                    "{review.message}"
                  </Typography>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные кнопки навигации */}
        {!isMobile && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute', left: 0, top: '45%', zIndex: 10,
                bgcolor: COLORS.green, color: 'white',
                '&:hover': { bgcolor: '#426B69' }
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute', right: 0, top: '45%', zIndex: 10,
                bgcolor: COLORS.green, color: 'white',
                '&:hover': { bgcolor: '#426B69' }
              }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Reviews;