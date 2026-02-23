import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { FaTiktok } from 'react-icons/fa';
import cls from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={cls.footer} style={{
       color: '#fff', paddingTop: '40px', paddingBottom: '20px' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>


          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold',  textTransform:"uppercase" , color:"white"}}>
              aqvela Home Textile
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#379fab', mt: 0.5 }} fontSize="small" />
                <Typography variant="body2">
                  <Link
                    sx={{ color: "#fff", textDecoration: "none", '&:hover': { color: '#379fab' } }}
                    target="_blank"
                    href="https://google.com/maps?q=Бишкек+ул+Льва+Толстого"
                  >
                    г. Бишкек, ул. Льва Толстого, 126
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#379fab' }} fontSize="small" />
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  +996 (555) 123 456
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#379fab' }} fontSize="small" />
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  +996 (700) 987 654
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#379fab' }} fontSize="small" />
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  info@aqvela.kg
                </Typography>
              </Box>
            </Box>
          </Grid>


          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Меню
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
              <Link href="/catalog" color="inherit" underline="none" sx={{ '&:hover': { color: '#379fab' } }} variant="body2">
                Каталог текстиля
              </Link>
              <Link href="/about" color="inherit" underline="none" sx={{ '&:hover': { color: '#379fab' } }} variant="body2">
                О компании
              </Link>
              <Link href="/delivery" color="inherit" underline="none" sx={{ '&:hover': { color: '#379fab' } }} variant="body2">
                Доставка и оплата
              </Link>
              <Link href="/contacts" color="inherit" underline="none" sx={{ '&:hover': { color: '#379fab' } }} variant="body2">
                Контакты
              </Link>
            </Box>
          </Grid>

          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Мы в соцсетях
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
              Подпишитесь, чтобы первыми узнавать о новинках и скидках.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#fff', '&:hover': { color: '#379fab' } }} href="#" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: '#fff', '&:hover': { color: '#379fab' } }} href="#" target="_blank">
                <FaTiktok fontSize="1.2rem" />
              </IconButton>
              <IconButton sx={{ color: '#fff', '&:hover': { color: '#379fab' } }} href="#" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#fff', '&:hover': { color: '#379fab' } }} href="#" target="_blank">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box textAlign="center" sx={{ opacity: 0.6 }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Aqvela Home Textile. Производство и продажа текстиля в Кыргызстане.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;