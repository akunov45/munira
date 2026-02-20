import { Box, Container, Paper, Typography } from "@mui/material";
import EventsCard from "../../components/events-card/EventsCard";
import cls from './HomePage.module.scss';
import Hero from "../../components/hero/Hero.jsx";
import HomeService from "../../components/home-service/HomeService.jsx";
import { useGetNewsQuery } from "../../redux/api/newsApi.js";
import Spinner from "../../components/spinner/Spinner.jsx";
import Reviews from "../../components/reviews/Reviews.jsx";
import CommonButton from "../../components/UI/Button.jsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AdvantageSection from "../../components/AdvantageSection/AdvantageSection.jsx";
import TextilePage from "../news-page/NewsPage.jsx";

function HomePage() {
  const { data: news, isLoading } = useGetNewsQuery()
  const { t } = useTranslation()
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <HomeService />
      <AdvantageSection />
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <TextilePage />
      </Container>
      <Reviews />
    </>
  );
}

export default HomePage;




