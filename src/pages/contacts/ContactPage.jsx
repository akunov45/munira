import { useTranslation } from "react-i18next";
import CommonButton from "../../components/UI/Button.jsx";
import React from "react";
import {
  Container, Typography, Grid, Box, TextField,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import Table from "../../components/Table/Table.jsx";

// Обновленные данные под текстиль (филиалы/склады)
const branchData = [
  { country: "Кыргызстан", city: "Бишкек (Офис/Склад)", street: "ул. Льва Толстого", number: "126", phone: "+996 (555) 123 456" },
  { country: "Кыргызстан", city: "Бишкек (Магазин)", street: "ТЦ Азия Молл, 2 этаж", number: "-", phone: "+996 (700) 112 233" },
  { country: "Казахстан", city: "Алматы", street: "ул. Розыбакиева", number: "247", phone: "+7 (707) 333 44 55" },
  { country: "Россия", city: "Москва (Опт)", street: "ТК Садовод", number: "линия 15", phone: "+7 (926) 000 11 22" },
  { country: "Узбекистан", city: "Ташкент", street: "ул. Бабура", number: "40", phone: "+998 (90) 123 45 67" },
];

function ContactPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{ color: '#379fab' }}>
        {t("contact.title", "Контакты")}
      </Typography>

      <Grid container mb={6} spacing={4}>
        {/* Инфо-карточка */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              borderTop: '5px solid #379fab',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight="bold" color="#379fab" gutterBottom>
                ГЛАВНЫЙ ОФИС MUNITEXT
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">Адрес:</Typography>
                <Typography variant="body1">г. Бишкек, ул. Льва Толстого, 126</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary">Телефоны:</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                  +996 (555) 123 456 (Опт)
                  <br />
                  +996 (700) 987 654 (Розница)
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">Электронная почта:</Typography>
                <Typography variant="body1">info@aqvela.kg</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Форма обратной связи */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t("contact.formTitle", "Напишите нам")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Есть вопросы по оптовым закупкам или сотрудничеству? Оставьте заявку.
              </Typography>

              <TextField fullWidth label="Ваше имя" variant="outlined" sx={{ mb: 2 }} required />
              <TextField fullWidth label="Номер телефона" variant="outlined" sx={{ mb: 2 }} required />
              <TextField
                fullWidth
                label="Сообщение"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
                placeholder="Интересует оптовый прайс на халаты..."
                required
              />
              <CommonButton
                fullWidth
                variant="contained"
                sx={{ bgcolor: '#379fab', py: 1.5, '&:hover': { bgcolor: '#2e8691' } }}
              >
                {t("contact.submit", "Отправить заявку")}
              </CommonButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Карта */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" mb={3} textAlign="center">
            Мы на карте
          </Typography>
          <Box sx={{ overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.95156475659!2d74.5828131!3d42.8527264!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x389ec81648a9775f%3A0x868d613e16f73a5a!2z0YPQuy4g0JvRjNCy0LAg0KLQvtC70YHRgtC-0LPQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      {/* Таблица филиалов */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 'bold',
            color: '#2c3e50', // Темно-серый вместо черного
            position: 'relative',
            pl: 2,
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '15%',
              height: '70%',
              width: '4px',
              bgcolor: '#379fab', // Твой фирменный бирюзовый
              borderRadius: '2px'
            }
          }}
        >
          Наши представительства
        </Typography>

        <Paper
          elevation={0}
          sx={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            '& thead th': {
              bgcolor: '#f8f9fa', // Светлый фон шапки
              color: '#379fab',    // Бирюзовый текст в заголовках
              fontWeight: 'bold',
              borderBottom: '2px solid #379fab'
            },
            '& tbody tr:nth-of-type(odd)': {
              bgcolor: '#fafafa' // Полоски (striped) стали почти незаметными и мягкими
            },
            '& tbody tr:hover': {
              bgcolor: '#f1f8f9 !important', // Очень нежный бирюзовый при наведении
              transition: '0.2s'
            }
          }}
        >
          <Table
            headers={["Страна", "Город / Тип", "Адрес", "№", "Телефон"]}
            data={branchData}
            striped={true}
            hover={true}
            stickyHeader={true}
          />
        </Paper>
      </Box>
    </Container>
  );
}

export default ContactPage;