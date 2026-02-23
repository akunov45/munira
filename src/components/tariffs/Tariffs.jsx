import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommonButton from "../UI/Button.jsx";


const pricingData = [
  {
    title: "Стандарт",
    price: "$500",
    description: "Базовый тариф для небольших грузов.",
    features: ["Доставка за 7-10 дней", "Страхование груза", "Поддержка 24/7"],
    popular: false,
  },
  {
    title: "Экспресс",
    price: "$800",
    description: "Быстрая доставка для срочных заказов.",
    features: ["Доставка за 3-5 дней", "Приоритетная обработка", "Страхование груза", "Поддержка 24/7"],
    popular: true,
  },
  {
    title: "Премиум",
    price: "$1200",
    description: "Полный пакет услуг для крупных грузов.",
    features: ["Доставка за 1-3 дня", "Индивидуальный менеджер", "Страхование груза", "Поддержка 24/7", "Таможенное оформление"],
    popular: false,
  },
];

const Tariffs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>

      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold',  }}>
        Цены и тарифы
      </Typography>


      <Grid container spacing={4}>
        {pricingData.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                border: plan.popular ? '2px solid #1976d2' : 'none',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CardContent>

                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {plan.title}
                </Typography>


                <Typography variant="h4" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
                  {plan.price}
                </Typography>


                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {plan.description}
                </Typography>

                
                <List>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ p: 0 }}>
                      <ListItemIcon sx={{ minWidth: '30px', color: 'primary.main' }}>
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="body2">{feature}</Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              <Box sx={{ p: 2 }}>
                <CommonButton
                  variant={plan.popular ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{ fontWeight: 'bold' }}
                >
                  Выбрать тариф
                </CommonButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tariffs;