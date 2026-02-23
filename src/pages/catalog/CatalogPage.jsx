import { useState, useMemo } from 'react';
import {
  Box, Grid, List, ListItem, ListItemButton,
  ListItemText, Typography, MenuItem, Select, FormControl, InputLabel,
  Card, CardMedia, CardContent, Chip, Stack, Paper, Divider, Button,
  Drawer, IconButton, useMediaQuery, useTheme
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';


const productsData = [

  { id: 1, title: 'Халат Double Touch (Синий)', category: 'bathrobes', subcategory: 'Мужские халаты', fabric: 'Махровые (Double touch)', size: 'L', density: '400 г/м²', price: '3500', image: 'https://i.pinimg.com/1200x/6c/d1/ba/6cd1baa074be21cef84a80b91976647b.jpg' },
  { id: 2, title: 'Халат вафельный "Кимоно"', category: 'bathrobes', subcategory: 'Унисекс модели', fabric: 'Вафельные халаты', size: 'XL', density: '250 г/м²', price: '2100', image: 'https://i.pinimg.com/1200x/32/a1/cd/32a1cd0f79a1f167c4eef5b0e79892bf.jpg' },
  { id: 3, title: 'Женский велюровый халат', category: 'bathrobes', subcategory: 'Женские халаты', fabric: 'Велюровые', size: 'S', density: '320 г/м²', price: '3800', image: 'https://i.pinimg.com/1200x/aa/f3/85/aaf38567178a6a24004da8d32c7db143.jpg' },
  { id: 4, title: 'Детский халат с капюшоном', category: 'bathrobes', subcategory: 'Детские и подростковые', fabric: 'Махровые (Double touch)', size: 'M', density: '380 г/м²', price: '1800', image: 'https://i.pinimg.com/736x/26/3e/cb/263ecb920ab1d1efa76eb431f3160e69.jpg' },


  { id: 5, title: 'Набор полотенец HoReCa 5шт', category: 'towels', subcategory: 'Белые полотенца для HoReCa', fabric: 'Хлопок 100%', size: '70x140', density: '500 г/м²', price: '2500', image: 'https://i.pinimg.com/1200x/f7/86/ad/f786adfaa8b7847c8f3e96937ccbfbe0.jpg' },
  { id: 6, title: 'Полотенце для лица Soft', category: 'towels', subcategory: 'Для лица и рук (50x90)', fabric: 'Бамбук', size: '50x90', density: '450 г/м²', price: '450', image: 'https://i.pinimg.com/1200x/4a/aa/ab/4aaaaba33b379b3168069f88e7718647.jpg' },
  { id: 7, title: 'Коврик для ног махровый', category: 'towels', subcategory: 'Коврики для ног (50x70)', fabric: 'Хлопок 100%', size: '50x70', density: '700 г/м²', price: '650', image: 'https://i.pinimg.com/1200x/61/fb/12/61fb12a75fb9fced3bc0e4c2c5019307.jpg' },


  { id: 8, title: 'КПБ Страйп-Сатин White', category: 'bedding', subcategory: 'Страйп-сатин (для отелей)', fabric: 'Сатин', size: 'Евро', density: '145 г/м²', price: '5200', image: 'https://i.pinimg.com/736x/78/5b/3b/785b3b00a4961f6dda848e005bc1f00f.jpg' },
];


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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [activeTab, setActiveTab] = useState('bathrobes');
  const [activeSub, setActiveSub] = useState('Все');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const [fabricFilter, setFabricFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [densityFilter, setDensityFilter] = useState('');

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
    setMobileMenuOpen(false);
  };

  const currentCategoryData = menuData.find(m => m.id === activeTab);


  const sidebarContent = (
    <Box sx={{ width: 280, py: 2 }}>
      <Typography variant="h6" sx={{ px: 3, mb: 3, fontWeight: 800, color: '#379fab' }}>
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
              }}
            >
              <ListItemText primary={cat.label} primaryTypographyProps={{ fontWeight: activeTab === cat.id ? 700 : 500 }} />
              <ChevronRightIcon sx={{ fontSize: 18, opacity: 0.3 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: "100vh", bgcolor: '#f9f9f9', flexDirection: { xs: 'column', md: 'row' } }}>

      {!isMobile && (
        <Box sx={{ width: 280, bgcolor: 'white', borderRight: '1px solid #eee', position: 'sticky', top: 0, height: '100vh' }}>
          {sidebarContent}
        </Box>
      )}

      {isMobile && (
        <Paper square elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, position: 'sticky', top: 0, zIndex: 1000 }}>
          <IconButton onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon color="primary" />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#379fab', flexGrow: 1 }}>
            AQVELA
          </Typography>
        </Paper>
      )}

      <Drawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        {sidebarContent}
      </Drawer>

      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>

        <Box sx={{
          mb: 3,
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}>
          <Button
            variant={activeSub === 'Все' ? 'contained' : 'outlined'}
            onClick={() => setActiveSub('Все')}
            sx={{ borderRadius: 5, textTransform: 'none', whiteSpace: 'nowrap', minWidth: 'fit-content' }}
          >
            Все
          </Button>
          {currentCategoryData?.subs.map(sub => (
            <Button
              key={sub}
              variant={activeSub === sub ? 'contained' : 'outlined'}
              onClick={() => setActiveSub(sub)}
              sx={{
                borderRadius: 5,
                textTransform: 'none',
                whiteSpace: 'nowrap',
                minWidth: 'fit-content',
                bgcolor: activeSub === sub ? '#379fab' : 'white'
              }}
            >
              {sub}
            </Button>
          ))}
        </Box>

        <Paper elevation={0} sx={{ p: 2, mb: 4, borderRadius: 3, border: '1px solid #eee', bgcolor: 'white' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Ткань</InputLabel>
                <Select value={fabricFilter} label="Ткань" onChange={(e) => setFabricFilter(e.target.value)}>
                  <MenuItem value="">Любая</MenuItem>
                  <MenuItem value="Махровые (Double touch)">Махра</MenuItem>
                  <MenuItem value="Вафельные халаты">Вафельная</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Размер</InputLabel>
                <Select value={sizeFilter} label="Размер" onChange={(e) => setSizeFilter(e.target.value)}>
                  <MenuItem value="">Все</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Плотность</InputLabel>
                <Select value={densityFilter} label="Плотность" onChange={(e) => setDensityFilter(e.target.value)}>
                  <MenuItem value="">Все gsm</MenuItem>
                  <MenuItem value="400 г/м²">400 г/м²</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ textAlign: 'center' }}>
              <Typography
                onClick={() => { setFabricFilter(''); setSizeFilter(''); setDensityFilter(''); }}
                sx={{ cursor: 'pointer', color: '#999', fontSize: '0.85rem', '&:hover': { color: '#379fab' } }}
              >
                Сбросить
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          {activeSub === 'Все' ? currentCategoryData?.label : activeSub}
          <Typography component="span" sx={{ ml: 2, color: '#999', fontSize: '0.9rem' }}>
            ({filteredProducts.length})
          </Typography>
        </Typography>

        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} lg={4} key={product.id}>
              <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid #eee' }}>
                <CardMedia component="img" height={isMobile ? "200" : "280"} image={product.image} alt={product.title} />
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>{product.title}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2, overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Chip label={product.size} size="small" variant="outlined" />
                    <Chip label={product.density} size="small" />
                  </Stack>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="h6" color="#379fab" sx={{ fontWeight: 800 }}>
                    {product.price} сом
                  </Typography>
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