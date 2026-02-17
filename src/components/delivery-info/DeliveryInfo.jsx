import React from 'react';
import { Container, Typography,} from '@mui/material';
import Table from "../Table/Table.jsx";

// Данные о маршрутах и сроках доставки
const deliveryData = [
  { route: "Лос-Анжелес - Алматы", duration: "от 40 до 60 дней", cost: "$9" },
  { route: "Лос-Анжелес - Бишкек", duration: "от 40 до 60 дней", cost: "$9" },
  { route: "Лос-Анжелес - Ташкент", duration: "от 40 до 60 дней", cost: "$10" },
  { route: "Лос-Анжелес - Душанбе", duration: "от 40 до 60 дней", cost: "$10" },
  { route: "Лос-Анжелес - Дагестан", duration: "от 40 до 60 дней", cost: "$12" },
  { route: "Лос-Анжелес - Грозный", duration: "от 40 до 60 дней", cost: "$12" },
  { route: "Лос-Анжелес - Москва", duration: "от 40 до 60 дней", cost: "$12" },
];

const DeliveryInfoSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold', }}>
        Информация о маршрутах и сроках доставки
      </Typography>
      <Table
        headers={["Маршрут", "Срок доставки", "Стоимость"]}
        data={deliveryData}
      />
    </Container>
  );
};

export default DeliveryInfoSection;