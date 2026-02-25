import AboutPage from "../pages/about-page/AboutPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ContactPage from "../pages/contacts/ContactPage";
import EstimatePage from "../pages/estimate/EstimatePage";
import NewsPage from "../pages/news-page/NewsPage";
import ServicesPage from "../pages/services-page/ServicesPage";

export const headerRoutes = [
  {
    name: "Каталог",
    linkTo: "/catalog",
    element: <CatalogPage />,
    disabled: false
  },
  {
    name: "Новости и события",
    linkTo: "/news",
    element: <NewsPage />,
    disabled: false
  },
  {
    name: "Услуги",
    linkTo: "/service",
    element: <ServicesPage />,
    disabled: true
  },
  {
    name: "Расчет стоимости",
    linkTo: "/estimate",
    element: <EstimatePage />,
    disabled: true
  },
  {
    name: "О Нас",
    linkTo: "/about-us",
    element: <AboutPage />,
    disabled: false
  },
  {
    name: "Контакты",
    linkTo: "/contacts",
    element: <ContactPage />,
    disabled: true
  },
];
