import { useState, useMemo } from 'react';
import {
  Box, Grid, List, ListItem, ListItemButton,
  ListItemText, Typography, MenuItem, Select, FormControl, InputLabel,
  Card, CardMedia, CardContent, Chip, Stack, Paper, Divider, Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// 1. БОЛЬШОЙ МАССИВ ТОВАРОВ (Пример для разных категорий)
const productsData = [
  // ХАЛАТЫ
  { id: 1, title: 'Халат Double Touch (Синий)', category: 'bathrobes', subcategory: 'Мужские халаты', fabric: 'Махровые (Double touch)', size: 'L', density: '400 г/м²', price: '3500', image: 'https://i.pinimg.com/1200x/6c/d1/ba/6cd1baa074be21cef84a80b91976647b.jpg' },
  { id: 2, title: 'Халат вафельный "Кимоно"', category: 'bathrobes', subcategory: 'Унисекс модели', fabric: 'Вафельные халаты', size: 'XL', density: '250 г/м²', price: '2100', image: 'https://i.pinimg.com/1200x/32/a1/cd/32a1cd0f79a1f167c4eef5b0e79892bf.jpg' },
  { id: 3, title: 'Женский велюровый халат', category: 'bathrobes', subcategory: 'Женские халаты', fabric: 'Велюровые', size: 'S', density: '320 г/м²', price: '3800', image: 'https://i.pinimg.com/1200x/aa/f3/85/aaf38567178a6a24004da8d32c7db143.jpg' },
  { id: 4, title: 'Детский халат с капюшоном', category: 'bathrobes', subcategory: 'Детские и подростковые', fabric: 'Махровые (Double touch)', size: 'M', density: '380 г/м²', price: '1800', image: 'https://i.pinimg.com/736x/26/3e/cb/263ecb920ab1d1efa76eb431f3160e69.jpg' },

  // ПОЛОТЕНЦА
  { id: 5, title: 'Набор полотенец HoReCa 5шт', category: 'towels', subcategory: 'Белые полотенца для HoReCa', fabric: 'Хлопок 100%', size: '70x140', density: '500 г/м²', price: '2500', image: 'https://i.pinimg.com/1200x/f7/86/ad/f786adfaa8b7847c8f3e96937ccbfbe0.jpg' },
  { id: 6, title: 'Полотенце для лица Soft', category: 'towels', subcategory: 'Для лица и рук (50x90)', fabric: 'Бамбук', size: '50x90', density: '450 г/м²', price: '450', image: 'https://i.pinimg.com/1200x/4a/aa/ab/4aaaaba33b379b3168069f88e7718647.jpg' },
  { id: 7, title: 'Коврик для ног махровый', category: 'towels', subcategory: 'Коврики для ног (50x70)', fabric: 'Хлопок 100%', size: '50x70', density: '700 г/м²', price: '650', image: 'https://i.pinimg.com/1200x/61/fb/12/61fb12a75fb9fced3bc0e4c2c5019307.jpg' },

  // ПОСТЕЛЬНОЕ
  { id: 8, title: 'КПБ Страйп-Сатин White', category: 'bedding', subcategory: 'Страйп-сатин (для отелей)', fabric: 'Сатин', size: 'Евро', density: '145 г/м²', price: '5200', image: 'https://i.pinimg.com/736x/78/5b/3b/785b3b00a4961f6dda848e005bc1f00f.jpg' },
];

// 2. ДАННЫЕ МЕНЮ С ПОДКАТЕГОРИЯМИ
const menuData = [
  {
    id: 'bathrobes',
    label: 'Халаты',
    subs: ['Мужские халаты', 'Женские халаты', 'Детские и подростковые', 'Унисекс модели', 'Для гостиниц и отелей']
  },
  {
    id: 'towels',
    label: 'Полотенца',
    subs: ['Банные (70x140)', 'Для лица и рук (50x90)', 'Белые полотенца для HoReCa', 'Коврики для ног (50x70)']
  },
  {
    id: 'bedding',
    label: 'Постельное белье',
    subs: ['Страйп-сатин (для отелей)', 'Сатин люкс', 'Евро комплект']
  },
  { id: 'blankets_pillows', label: 'Подушки и одеяла', subs: ['Анатомические', 'Бамбук'] },
  { id: 'kitchen_living', label: 'Кухня и декор', subs: ['Скатерти', 'Пледы'] }
];

const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState('bathrobes');
  const [activeSub, setActiveSub] = useState('Все'); // Состояние подкатегории

  // Фильтры
  const [fabricFilter, setFabricFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [densityFilter, setDensityFilter] = useState('');

  // ЛОГИКА ФИЛЬТРАЦИИ
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchTab = product.category === activeTab;
      const matchSub = activeSub === 'Все' || product.subcategory === activeSub;
      const matchFabric = fabricFilter === '' || product.fabric === fabricFilter;
      const matchSize = sizeFilter === '' || product.size === sizeFilter;
      const matchDensity = densityFilter === '' || product.density === densityFilter;

      return matchTab && matchSub && matchFabric && matchSize && matchDensity;
    });
  }, [activeTab, activeSub, fabricFilter, sizeFilter, densityFilter]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setActiveSub('Все');
    setFabricFilter('');
    setSizeFilter('');
    setDensityFilter('');
  };

  const currentCategoryData = menuData.find(m => m.id === activeTab);

  return (
    <Box sx={{ display: 'flex', minHeight: "100vh", bgcolor: '#f9f9f9' }}>

      {/* ЛЕВАЯ КОЛОНКА */}
      <Box sx={{ width: 280, bgcolor: 'white', borderRight: '1px solid #eee', py: 2, position: 'sticky', top: 0, height: '100vh' }}>
        <Typography variant="h6" sx={{ px: 3, mb: 3, fontWeight: 800, color: '#379fab', letterSpacing: 1 }}>
          AQVELA КАТАЛОГ
        </Typography>
        <List sx={{ px: 1 }}>
          {menuData.map((cat) => (
            <ListItem key={cat.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={activeTab === cat.id}
                onClick={() => handleTabChange(cat.id)}
                sx={{
                  borderRadius: 2,
                  '&.Mui-selected': { bgcolor: '#379fab15', color: '#379fab' },
                  '&:hover': { bgcolor: '#379fab08' }
                }}
              >
                <ListItemText primary={cat.label} primaryTypographyProps={{ fontWeight: activeTab === cat.id ? 700 : 500 }} />
                <ChevronRightIcon sx={{ fontSize: 18, opacity: 0.3 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ПРАВАЯ ЧАСТЬ */}
      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>

        {/* 1. ПОДКАТЕГОРИИ (Верхний ряд) */}
        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button
            variant={activeSub === 'Все' ? 'contained' : 'outlined'}
            onClick={() => setActiveSub('Все')}
            sx={{ borderRadius: 5, textTransform: 'none', bgcolor: activeSub === 'Все' ? '#379fab' : '' }}
          >
            Все
          </Button>
          {currentCategoryData?.subs.map(sub => (
            <Button
              key={sub}
              variant={activeSub === sub ? 'contained' : 'outlined'}
              onClick={() => setActiveSub(sub)}
              sx={{ borderRadius: 5, textTransform: 'none', bgcolor: activeSub === sub ? '#379fab' : '', color: activeSub === sub ? 'white' : '#666', borderColor: '#ddd' }}
            >
              {sub}
            </Button>
          ))}
        </Box>

        {/* 2. ПАНЕЛЬ ФИЛЬТРОВ */}
        <Paper elevation={0} sx={{ p: 2, mb: 4, borderRadius: 3, border: '1px solid #eee', display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', bgcolor: 'white' }}>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Тип ткани</InputLabel>
            <Select value={fabricFilter} label="Тип ткани" onChange={(e) => setFabricFilter(e.target.value)}>
              <MenuItem value="">Любая</MenuItem>
              <MenuItem value="Махровые (Double touch)">Махра</MenuItem>
              <MenuItem value="Вафельные халаты">Вафельная</MenuItem>
              <MenuItem value="Велюровые">Велюр</MenuItem>
              <MenuItem value="Сатин">Сатин</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Размер</InputLabel>
            <Select value={sizeFilter} label="Размер" onChange={(e) => setSizeFilter(e.target.value)}>
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="70x140">70x140</MenuItem>
              <MenuItem value="Евро">Евро</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel>Плотность</InputLabel>
            <Select value={densityFilter} label="Плотность" onChange={(e) => setDensityFilter(e.target.value)}>
              <MenuItem value="">Все gsm</MenuItem>
              <MenuItem value="250 г/м²">250 г/м²</MenuItem>
              <MenuItem value="400 г/м²">400 г/м²</MenuItem>
              <MenuItem value="500 г/м²">500 г/м²</MenuItem>
              <MenuItem value="700 г/м²">700 г/м²</MenuItem>
            </Select>
          </FormControl>

          <Typography
            onClick={() => { setFabricFilter(''); setSizeFilter(''); setDensityFilter(''); setActiveSub('Все'); }}
            sx={{ cursor: 'pointer', color: '#999', fontSize: '0.85rem', '&:hover': { color: '#379fab' } }}
          >
            Сбросить всё
          </Typography>
        </Paper>

        {/* 3. СЕТКА ТОВАРОВ */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: '#222' }}>
          {activeSub === 'Все' ? currentCategoryData?.label : activeSub}
          <Typography component="span" sx={{ ml: 2, color: '#999', fontSize: '1rem', fontWeight: 400 }}>
            ({filteredProducts.length} товаров)
          </Typography>
        </Typography>

        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} lg={4} key={product.id}>
              <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid #eee', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia component="img" height="280" image={product.image} alt={product.title} />
                  <Chip label={product.subcategory} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'rgba(255,255,255,0.9)', fontWeight: 600 }} />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>{product.title}</Typography>

                  <Stack spacing={1} sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">Ткань: <b>{product.fabric}</b></Typography>
                    <Typography variant="body2" color="text.secondary">Размер: <b>{product.size}</b></Typography>
                    <Typography variant="body2" color="text.secondary">Плотность: <b>{product.density}</b></Typography>
                  </Stack>

                  <Divider sx={{ my: 1.5 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#379fab', fontWeight: 800 }}>
                      {product.price} сом
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#999' }}>В наличии</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CatalogPage;