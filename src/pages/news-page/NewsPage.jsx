import { Box, Container, Pagination, Paper, Typography, Chip, Stack } from '@mui/material';
import { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Не забудьте установить @mui/icons-material
// import EventsCard from '../../components/events-card/EventsCard.jsx';

function NewsPage() {
  const [pageNumber, setPageNumber] = useState(1);

  // ДАННЫЕ ДЛЯ НОВОСТЕЙ (Жизнь компании)
  const newsData = [
    {
      id: 1,
      title: "Открытие нового цеха в Бишкеке",
      date: "15.10.2023",
      image: "https://cdn-1.aki.kg/st_runews/.storage/limon3/images/JUNE2023/59c1ce73e034f74b94b9c2f68217704e.JPG",
      category: "Производство",
      description: "Мы увеличили производственные мощности на 30%, установив 12 новых станков для махрового полотна."
    },
    {
      id: 2,
      title: "Выставка TextileExpo 2023",
      date: "02.09.2023",
      image: "https://intertkan.ru/upload/medialibrary/1c7/vystavka-textile-salon.jpg",
      category: "Выставки",
      description: "Команда AQVELA представила новую коллекцию велюровых халатов на международном форуме."
    },
    {
      id: 3,
      title: "Видео: Как мы проверяем качество",
      date: "20.08.2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      category: "Контроль качества",
      description: "Сняли для вас небольшой ролик о том, как проходит ОТК каждого изделия перед упаковкой."
    },
    {
      id: 4,
      title: "Обновление складских запасов",
      date: "10.08.2023",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
      category: "Склад",
      description: "На склад поступило более 10 тонн отборного хлопка. Готовимся к высокому сезону!"
    }
  ];

  const handlePageChange = (_, page) => {
    setPageNumber(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Заголовок */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#333' }}>
          НОВОСТИ И СОБЫТИЯ
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
          Следите за жизнью нашей фабрики и важными обновлениями
        </Typography>
      </Box>

      {/* Сетка постов */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            lg: '1fr 1fr' // Для новостей 2 в ряд смотрятся лучше (больше места тексту)
          },
          gap: 4,
          mb: 6
        }}
      >
        {newsData.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid #eee',
              transition: '0.3s',
              '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }
            }}
          >
            {/* Картинка или Видео */}
            <Box sx={{ height: 280, position: 'relative', overflow: 'hidden' }}>
              <Box
                component="img"
                src={item.image}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Chip
                label={<span style={{ color: "white" }}>{item.category}</span>}
                sx={{ position: 'absolute', top: 16, left: 16, bgcolor: '#379fab',  fontWeight: 600 }}
              />
            </Box>

            {/* Контент */}
            <Box sx={{ p: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.disabled', mb: 1 }}>
                <CalendarTodayIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption">{item.date}</Typography>
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
                {item.title}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                {item.description}
              </Typography>

              <Typography
                variant="button"
                sx={{ color: '#379fab', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
              >
                Читать далее →
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Пагинация */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={3}
          page={pageNumber}
          onChange={handlePageChange}
          sx={{
            '& .Mui-selected': { bgcolor: '#379fab !important' }
          }}
        />
      </Box>
    </Container>
  );
}

export default NewsPage;