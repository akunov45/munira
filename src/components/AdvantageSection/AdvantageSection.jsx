import React from 'react';
import { Box, Container, Stack, Typography, useTheme, Avatar, useMediaQuery } from '@mui/material';
// Иконки под нишу текстиля
import FactoryIcon from '@mui/icons-material/Factory';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StorefrontIcon from '@mui/icons-material/Storefront';

const AdvantageSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Твои цвета из :root
  const COLORS = {
    green: '#4A707A',
    greenHover: '#426B69',
    body: '#F7F9FA',
    whiteCloud: '#F2F5F7',
    grey: '#D1D9E0',
    footer: '#2C4B72'
  };

  const advantages = [
    {
      icon: <FactoryIcon />,
      title: "Свое производство",
      description: "Собственный цех в Бишкеке: контролируем каждый шов и качество ткани."
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: "Премиум ткани",
      description: "Микрофибра и хлопок высшего сорта: не линяют, не скатываются, гипоаллергенны."
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Быстрая отгрузка",
      description: "Складская программа: отправка готовой продукции в течение 24 часов."
    },
    {
      icon: <CurrencyExchangeIcon />,
      title: "Выгодный опт",
      description: "Цены напрямую от производителя. Специальные условия для крупных партий."
    },
    {
      icon: <InventoryIcon />,
      title: "Проверка на брак",
      description: "Двойной контроль ОТК перед упаковкой каждой единицы товара."
    },
    {
      icon: <LocalShippingIcon />,
      title: "Доставка по СНГ",
      description: "Налаженная логистика фурами и карго в Россию, Казахстан и другие страны."
    },
    {
      icon: <DoneAllIcon />,
      title: "Для Маркетплейсов",
      description: "Готовим товар под требования WB и Ozon: правильная упаковка и маркировка."
    },
    {
      icon: <WhatsAppIcon />,
      title: "Связь 24/7",
      description: "Персональный менеджер в WhatsApp поможет с выбором и оформлением заказа."
    },
    {
      icon: <StorefrontIcon />,
      title: "Широкий выбор",
      description: "От полотенец до халатов — всё для наполнения вашего магазина в одном месте."
    }
  ];

  return (
    <Box sx={{
      py: isMobile ? 6 : 10,
      background: COLORS.body,
      position: 'relative',
    }}>
      <Container maxWidth="xl">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          textAlign="center"
          sx={{
            mb: 2,
            fontWeight: 800,
            color: COLORS.footer,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          Преимущества Munira Home
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: isMobile ? 6 : 8,
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto',
            color: "text.secondary",
            px: 2
          }}
        >
          Мы создаем текстиль, который приносит прибыль вашему бизнесу и уют вашим клиентам
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={isMobile ? 3 : 4}
        >
          {advantages.map((advantage, index) => (
            <Box
              key={index}
              sx={{
                width: isMobile ? '100%' : isTablet ? '45%' : '30%',
                p: 4,
                borderRadius: 4,
                background: '#ffffff',
                border: `1px solid ${COLORS.grey}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: COLORS.green,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  '& .advantage-avatar': {
                    bgcolor: COLORS.greenHover,
                    transform: 'rotateY(360deg)'
                  }
                }
              }}
            >
              <Avatar
                className="advantage-avatar"
                sx={{
                  mb: 3,
                  width: 70,
                  height: 70,
                  bgcolor: COLORS.green,
                  transition: 'all 0.6s ease',
                  boxShadow: `0 8px 16px rgba(74, 112, 122, 0.2)`
                }}
              >
                {React.cloneElement(advantage.icon, { sx: { fontSize: 32 } })}
              </Avatar>

              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  textAlign: 'center',
                  color: COLORS.footer,
                  textTransform: 'uppercase',
                  fontSize: '1.1rem'
                }}
              >
                {advantage.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                {advantage.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AdvantageSection;