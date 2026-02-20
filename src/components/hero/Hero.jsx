import { Box, Container, Typography, Stack } from "@mui/material";
import CommonButton from "../UI/Button.jsx";
// import HeroBg from "../../assets/hero2.webp";
import cls from "./Hero.module.scss";
import { useNavigate } from "react-router-dom"

const HeroBg = 'https://i.pinimg.com/1200x/27/ce/02/27ce0232df3e16219c3e9c6d40b63345.jpg'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <Box
      className={cls.wrap}
      sx={{
        position: 'relative',
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // Убираем отступ сверху, если хедер прозрачный
        mt: { xs: "-58px", sm: "-65px", md: "-65px", lg: "-74px" },
        height: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {/* Легкий градиент вместо сплошного синего цвета */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '800px' } }}>

          {/* Маленький штрих над заголовком */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Box sx={{ width: '40px', height: '2px', bgcolor: '#379fab' }} />
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: 4,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.8)'
              }}
            >
              Aqvela Home Collection
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '32px', sm: '3rem', md: '4rem', lg: '4.5rem' },
              lineHeight: 1.1,
              textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            <span style={{ color: '#fff' }}>Искусство уюта </span>  <br />
            <span style={{ color: '#379fab' }}>в вашем доме</span>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontWeight: 300,
              maxWidth: '550px',
              fontSize: { xs: '16px', md: '1.25rem' },
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Откройте для себя коллекцию премиальных халатов и полотенец,
            созданных для тех, кто ценит исключительный комфорт.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <CommonButton
              onClick={() => {
                navigate('/catalog')
               }}
              sx={{
                bgcolor: "#379fab",
                color: "#fff",
                px: 6,
                py: 2,
                fontSize: '1rem',
                borderRadius: '0px', // Квадратные кнопки выглядят более "фэшн"
                '&:hover': { bgcolor: '#2e8691' }
              }}
            >
              Перейти в каталог
            </CommonButton>

            <CommonButton
              sx={{
                border: "1px solid #fff",
                color: "#fff",
                px: 6,
                py: 2,
                fontSize: '1rem',
                borderRadius: '0px',
                backdropFilter: 'blur(5px)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Узнать больше
            </CommonButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;