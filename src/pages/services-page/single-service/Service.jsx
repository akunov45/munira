import { Box, Button, Container, Paper, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import CommonButton from "../../../components/UI/Button.jsx";
import {useTranslation} from "react-i18next";

const Service = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {t} = useTranslation()
  
  return (
    <Box>
      <Container maxWidth="xl" sx={{
        my: 2
      }}>
        <Paper elevation={0} sx={{
          border: '0.1px solid #379fab',
          p: 1,
        }}>
          <Typography variant="caption">Создано: 29 сент. 2023</Typography>
          <Box p={5}>
            <Typography variant="h6" textAlign={'center'}>Event Title lorem ipsum</Typography>
            <Typography sx={{
              textIndent: 50
            }}
              textAlign={'justify'}>
              В честь 18-летия со дня образования Службы регулирования и надзора за финансовым рынком при Министерстве экономики и коммерции Кыргызской Республики (Финнадзор), учитывая высокие показатели и вносимый вклад в развитие финансового рынка Кыргызской Республики, представителям бизнес-сообществ и сотрудникам Финнадзора присвоены почетное звание «Отличник финансового рынка» Финнадзора, награждены Почетной грамотой Финнадзора, а также Благодарственным письмом Финнадзора (Приказ Финнадзора № 79-л от 25 сентября 2023 года).
            </Typography>
            <br />
            <br />
            <Typography sx={{
              textIndent: 50
            }} textAlign={'justify'}>
              Справочно: В соответствии с Указом Президента Кыргызской Республики от 30 сентября 2005 года УП №419 было образовано Государственное агентство по финансовому надзору и отчетности при Правительстве Кыргызской Республики. Агентство было образовано на базе 3 ведомств: Государственной комиссии при Правительстве Кыргызской Республики по рынку ценных бумаг, Государственной комиссии при Правительстве Кыргызской Республики по стандартам финансовой отчетности и аудиту и Агентства по развитию небанковского финансового сектора Министерства финансов  Кыргызской Республики.
            </Typography>

          </Box>
          <Box textAlign={'right'}>
            <CommonButton onClick={() => navigate(-1)} variant="contained" size="small" color="primary">{t("go_back")}</CommonButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Service