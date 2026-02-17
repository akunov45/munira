import { Card, CardMedia, CardContent, Typography, Button, Box, Chip } from '@mui/material';

const EventsCard = ({ id, image, title, price, material, category }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <Chip
          label={category}
          size="small"
          sx={{ position: 'absolute', top: 10, left: 10, bgcolor: 'white' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Материал: {material}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: '#379fab', fontWeight: 'bold' }}>
          {price} сом
        </Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button fullWidth variant="contained" sx={{ bgcolor: '#379fab', textTransform: 'none' }}>
          Подробнее
        </Button>
      </Box>
    </Card>
  );
};

export default EventsCard;