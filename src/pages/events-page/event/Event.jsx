import { Box, Button, Container, Paper, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import CommonButton from "../../../components/UI/Button.jsx";
import {useTranslation} from "react-i18next";
import {useGetNewsQuery} from "../../../redux/api/newsApi.js";
import {formatDate} from "../../../helpers/formatDate.js";
import Spinner from "../../../components/spinner/Spinner.jsx";

const Event = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {t} = useTranslation()
  const {data , isLoading} = useGetNewsQuery(id)
  
  if(isLoading){
    return <Spinner />
  }
  const {title, description_ru, date} = data[0]
  
  return (
    <Box>
      <Container maxWidth="xl" sx={{
        my: 2
      }}>
        <Paper elevation={0} sx={{
          border: '0.1px solid #379fab',
          p: 1,
        }}>
          <Typography variant="body2">дата публикации: {formatDate(date)} </Typography>
          <Box p={5}>
            <Typography variant="h6" textAlign={'center'}>{title}</Typography>
            <Typography sx={{
              textIndent: 50,
              my:'10px'
            }}
              textAlign={'justify'}>
              {description_ru}
            </Typography>
          </Box>
          <Box textAlign={'right'}>
            <CommonButton  onClick={() => navigate(-1)}  >{t("go_back")}</CommonButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Event