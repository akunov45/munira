import { Box, Container, Typography, Card, CardContent, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
// Иконки подходящие для текстиля
import {
  FaCut,
  FaCheckDouble,
  FaBoxOpen,
  FaAward,
  FaHandshake,
  FaShippingFast
} from "react-icons/fa";

const services = [
  {
    title: "Собственное производство",
    description: "Полный цикл изготовления: от выбора пряжи до финальной отделки изделий.",
    icon: <FaCut size={24} />,
    color: "#379fab" // Ваш основной цвет
  },
  {
    title: "Контроль качества",
    description: "Тщательная проверка каждого шва и плотности ткани на соответствие стандартам.",
    icon: <FaCheckDouble size={24} />,
    color: "#4ECDC4"
  },
  {
    title: "Премиальные материалы",
    description: "Используем только натуральный хлопок, бамбук и высококачественный велюр.",
    icon: <FaAward size={24} />,
    color: "#45B7D1"
  },
  {
    title: "Индивидуальный пошив",
    description: "Брендирование продукции: вышивка логотипов для отелей и SPA-центров.",
    icon: <FaBoxOpen size={24} />,
    color: "#FFA07A"
  },
  {
    title: "Оптовые поставки",
    description: "Выгодные условия для партнеров и гибкая система скидок на крупные партии.",
    icon: <FaHandshake size={24} />,
    color: "#A78BFA"
  },
  {
    title: "Оперативная доставка",
    description: "Быстрая отгрузка со склада в Бишкеке и доставка по всему СНГ.",
    icon: <FaShippingFast size={24} />,
    color: "#68D391"
  },
];

function HomeService() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#fbfbfb', py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: '#379fab', fontWeight: 600, letterSpacing: 2 }}
          >
            Почему выбирают нас
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mt: 1, textTransform: 'uppercase' }}
          >
            {t("service.title", "Преимущества Munitext")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: theme.palette.background.paper,
                p: 1,
                borderRadius: 0, // Квадратные формы выглядят более стильно для бренда текстиля
                border: '1px solid #eee',
                boxShadow: 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  borderColor: service.color,
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
                  '& .service-icon': {
                    bgcolor: service.color,
                    color: '#fff'
                  }
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box
                  className="service-icon"
                  sx={{
                    width: 70,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: `#f0f0f0`,
                    color: '#444',
                    borderRadius: '50%', // Круглые иконки смягчают дизайн
                    mb: 3,
                    mx: 'auto',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  sx={{ fontSize: '1.1rem', mb: 1.5 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    px: 1
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HomeService;