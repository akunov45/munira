import { useState } from 'react';
import {
  Box, Grid, List, ListItem, ListItemButton,
  ListItemText, Typography, Divider
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const menuData = [
  {
    id: 'bathrobes',
    label: 'Халаты',
    subsections: [
      {
        title: 'По категориям',
        items: ['Мужские халаты', 'Женские халаты', 'Детские и подростковые', 'Унисекс модели']
      },
      {
        title: 'По типу ткани',
        items: ['Махровые (Double touch)', 'Вафельные халаты', 'Велюровые', 'Трикотажные', 'Микрофибра']
      },
      {
        title: 'Специальные серии',
        items: ['Для гостиниц и отелей', 'Для SPA и фитнес-центров', 'Кимоно для саун', 'Халаты с капюшоном']
      }
    ]
  },
  {
    id: 'towels',
    label: 'Полотенца',
    subsections: [
      {
        title: 'Назначение',
        items: ['Банные (70x140)', 'Для лица и рук (50x90)', 'Салфетки (30x30)', 'Кухонные полотенца', 'Коврики для ног (50x70)']
      },
      {
        title: 'Профессиональный текстиль',
        items: ['Белые полотенца для HoReCa', 'Полотенца для бассейнов (большие)', 'Спортивные полотенца', 'Махровые простыни']
      },
      {
        title: 'Опции',
        items: ['Подарочные наборы', 'Полотенца под нанесение логотипа', 'Наборы для венчания/крещения']
      }
    ]
  },
  {
    id: 'bedding',
    label: 'Постельное белье',
    subsections: [
      {
        title: 'Комплекты (КПБ)',
        items: ['Полуторные', 'Двуспальные', 'Евро комплект', 'Семейный (с двумя пододеяльниками)']
      },
      {
        title: 'Ткани',
        items: ['Страйп-сатин (для отелей)', 'Сатин люкс', 'Перкаль', 'Ранфорс', 'Бязь']
      },
      {
        title: 'Отдельные предметы',
        items: ['Простыни на резинке', 'Наволочки (50x70, 70x70)', 'Пододеяльники']
      }
    ]
  },
  {
    id: 'blankets_pillows',
    label: 'Подушки и одеяла',
    subsections: [
      {
        title: 'Подушки',
        items: ['Анатомические', 'Гипоаллергенные', 'Пух-перо', 'Бамбуковое волокно', 'Лебяжий пух']
      },
      {
        title: 'Одеяла',
        items: ['Всесезонные', 'Летние (облегченные)', 'Зимние (шерсть)', 'Силиконизированное волокно']
      }
    ]
  },
  {
    id: 'kitchen_living',
    label: 'Кухня и декор',
    subsections: [
      {
        title: 'Столовый текстиль',
        items: ['Скатерти (водоотталкивающие)', 'Салфетки для сервировки', 'Раннеры (дорожки)', 'Фартуки']
      },
      {
        title: 'Для гостиной',
        items: ['Пледы (шерсть/акрил)', 'Декоративные наволочки', 'Покрывала на кровать']
      }
    ]
  }
];

const CatalogMenu = () => {
  const [activeTab, setActiveTab] = useState('bathrobes');

  const currentCategory = menuData.find(cat => cat.id === activeTab);

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      bgcolor: 'white',
      border: '1px solid',
      borderColor: 'divider',
      minHeight: "100vh"
    }}>
      {/* Левая колонка: Основные категории */}
      <Box sx={{ width: 280, borderRight: '1px solid', borderColor: 'divider', py: 2 }}>
        <List disablePadding>
          {menuData.map((cat) => (
            <ListItem key={cat.id} disablePadding>
              <ListItemButton
                selected={activeTab === cat.id}
                onMouseEnter={() => setActiveTab(cat.id)}
                sx={{
                  py: 1.5,
                  '&.Mui-selected': {
                    bgcolor: 'var(--color-white-cloud)',
                    color: 'var(--color-green)',
                    '&:hover': { bgcolor: 'var(--color-white-cloud)' }
                  }
                }}
              >
                <ListItemText primary={cat.label} primaryTypographyProps={{ fontWeight: 500 }} />
                <ChevronRightIcon sx={{ fontSize: 18, opacity: 0.5 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Правая колонка: Подкатегории (Сетка) */}
      <Box sx={{ flexGrow: 1, p: 4, bgcolor: 'white' }}>
        <Typography variant="h4" sx={{
          color: 'var(--color-bg-footer)',
          fontWeight: 700,
          mb: 4,
          fontSize: '1.5rem',
          borderBottom: '2px solid var(--color-green)',
          display: 'inline-block'
        }}>
          {currentCategory?.label}
        </Typography>

        <Grid container spacing={4}>
          {currentCategory?.subsections.map((section, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              {/* Заголовок подсекции */}
              <Typography variant="subtitle1" sx={{
                fontWeight: 700,
                mb: 2,
                color: 'var(--color-bg-footer)',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'var(--color-grey)'
              }}>
                {section.title}
              </Typography>

              {/* Список ссылок */}
              <List disablePadding>
                {section.items.map((item) => (
                  <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                    <ListItemButton sx={{
                      p: 0,
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: 'var(--color-green)',
                        '& span': { textDecoration: 'underline' }
                      }
                    }}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                          transition: '0.2s'
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CatalogMenu;