import React, { useState } from "react";
import {
  Box, Container, Typography, TextField, MenuItem,
  FormControlLabel, Checkbox, Grid, Divider, Fade, Paper,
  Stack
} from "@mui/material";
import CommonButton from "../../components/UI/Button.jsx";

// Имитация данных, которые раньше шли с бекенда
const productCategories = [
  { id: 1, name: "Халаты махровые (Премиум)", price: 2800 },
  { id: 2, name: "Халаты вафельные", price: 1500 },
  { id: 3, name: "Набор полотенец (3 шт)", price: 1200 },
  { id: 4, name: "Полотенца банные (70x140)", price: 650 },
  { id: 5, name: "Полотенца для лица", price: 250 },
  { id: 6, name: "Тапочки для отелей", price: 120 },
];

const EstimatePage = () => {
  const [form, setForm] = useState({
    quantity: "",
    categoryId: "",
    branding: false, // Вышивка логотипа
    express: false,  // Срочный пошив
  });

  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    // Находим выбранный товар
    const selectedProduct = productCategories.find(p => p.id === form.categoryId);

    if (selectedProduct && form.quantity) {
      let base = Number(form.quantity) * selectedProduct.price;

      // Добавочная стоимость
      if (form.branding) base += (base * 0.10); // +10% за логотип
      if (form.express) base += (base * 0.15);  // +15% за срочность

      setCalculatedPrice(base);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 10 } }}>
      <Grid container spacing={0} sx={{ boxShadow: '0 20px 60px rgba(0,0,0,0.07)', borderRadius: 4, overflow: 'hidden' }}>

        {/* Левая панель: Форма */}
        <Grid item xs={12} md={7} sx={{ bgcolor: '#fff', p: { xs: 3, md: 6 } }}>
          <Typography variant="overline" sx={{ color: '#379fab', fontWeight: 700, letterSpacing: 2 }}>
            Aqvela Home Textile
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#2c3e50' }}>
            Калькулятор заказа
          </Typography>

          <Box component="form" onSubmit={handleCalculate} sx={{ display: 'grid', gap: 4 }}>
            <TextField
              select
              fullWidth
              label="Выберите изделие"
              name="categoryId"
              variant="standard"
              value={form.categoryId}
              onChange={handleChange}
              required
            >
              {productCategories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name} — {option.price} сом/шт
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Количество (шт)"
              name="quantity"
              type="number"
              variant="standard"
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#7f8c8d' }}>Дополнительные опции:</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <FormControlLabel
                  control={<Checkbox checked={form.branding} onChange={handleChange} name="branding" sx={{ color: '#379fab', '&.Mui-checked': { color: '#379fab' } }} />}
                  label={<Typography variant="body2">Вышивка логотипа (+10%)</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox checked={form.express} onChange={handleChange} name="express" sx={{ color: '#379fab', '&.Mui-checked': { color: '#379fab' } }} />}
                  label={<Typography variant="body2">Срочный пошив (+15%)</Typography>}
                />
              </Stack>
            </Box>

            <CommonButton
              type="submit"
              sx={{
                mt: 2,
                bgcolor: '#379fab',
                color: '#fff',
                py: 2,
                borderRadius: '8px',
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(55, 159, 171, 0.4)'
              }}
            >
              Рассчитать итог
            </CommonButton>
          </Box>
        </Grid>

        {/* Правая панель: Итог */}
        <Grid item xs={12} md={5} sx={{ bgcolor: '#f1f8f9', p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 600, mb: 1 }}>
            Итоговая стоимость
          </Typography>
          <Divider sx={{ width: '40px', height: '3px', bgcolor: '#379fab', mb: 4, border: 'none' }} />

          {calculatedPrice !== null ? (
            <Fade in={true} timeout={600}>
              <Box>
                <Typography variant="h2" sx={{ fontWeight: 800, color: '#379fab', mb: 1 }}>
                  {calculatedPrice.toLocaleString()}
                  <span style={{ fontSize: '1.5rem', marginLeft: '8px' }}>сом</span>
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 4, maxWidth: '250px', mx: 'auto' }}>
                  Предварительная цена за партию с учетом выбранных опций.
                </Typography>
                <CommonButton
                  variant="outlined"
                  fullWidth
                  sx={{ borderColor: '#379fab', color: '#379fab', borderRadius: '8px', py: 1.5 }}
                  onClick={() => window.location.href = '/contacts'}
                >
                  Оформить заявку
                </CommonButton>
              </Box>
            </Fade>
          ) : (
            <Box sx={{ opacity: 0.5 }}>
              <Typography variant="body1">Введите параметры для <br /> получения цены</Typography>
            </Box>
          )}
        </Grid>
      </Grid>

      <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 4, color: '#bdc3c7' }}>
        * Расчет является ознакомительным. Для крупных оптовых партий действуют спеццены.
      </Typography>
    </Container>
  );
};

export default EstimatePage;