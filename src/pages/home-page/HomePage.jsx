import { Container } from "@mui/material";
import AdvantageSection from "../../components/AdvantageSection/AdvantageSection.jsx";
import Hero from "../../components/hero/Hero.jsx";
import HomeService from "../../components/home-service/HomeService.jsx";
import Reviews from "../../components/reviews/Reviews.jsx";
import TextilePage from "../news-page/NewsPage.jsx";

function HomePage() {

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




