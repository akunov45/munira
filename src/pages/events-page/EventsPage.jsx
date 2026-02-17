import { Box, Container, Pagination, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import EventsCard from '../../components/events-card/EventsCard.jsx';

function TextilePage() {
  const [pageNumber, setPageNumber] = useState(1);

  // Статичные данные на чистом JS
  const data = [
    {
      id: 1,
      title_ru: "Халат махровый 'Уют'",
      image: "https://i.pinimg.com/736x/95/93/33/9593333bbc104870695d7f74cd135717.jpg",
      price: 2500,
      material: "100% Хлопок",
      category: "Халаты"
    },
    {
      id: 2,
      title_ru: "Полотенце банное Soft",
      image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400",
      price: 850,
      material: "Бамбук",
      category: "Полотенца"
    },
    {
      id: 3,
      title_ru: "Набор полотенец (3 шт)",
      image: "https://i.pinimg.com/1200x/d5/d3/71/d5d3715bb60900464ef2311cc4d4dc5b.jpg",
      price: 1800,
      material: "Микрофибра",
      category: "Наборы"
    },
    {
      id: 4,
      title_ru: "Халат велюровый Premium",
      image: "https://i.pinimg.com/1200x/32/a1/cd/32a1cd0f79a1f167c4eef5b0e79892bf.jpg",
      price: 4200,
      material: "Велюр/Хлопок",
      category: "Халаты"
    }
  ];

  const handlePageChange = (_, page) => {
    setPageNumber(page);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        Наш Текстиль
      </Typography>

      <Paper variant="outlined" sx={{ p: 3, borderTop: '4px solid #379fab', borderRadius: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 колонка на мобилках
              sm: '1fr 1fr', // 2 на планшетах
              md: '1fr 1fr 1fr', // 3 на средних экранах
              lg: '1fr 1fr 1fr 1fr' // 4 на десктопах
            },
            gap: 3,
            mb: 4
          }}
        >
          {data.map((item) => (
            <EventsCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title_ru}
              price={item.price}
              material={item.material}
              category={item.category}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={5}
            page={pageNumber}
            onChange={handlePageChange}
            color='primary'
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default TextilePage;