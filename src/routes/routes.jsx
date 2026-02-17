import AboutPage from "../pages/about-page/AboutPage";
import ContactPage from "../pages/contacts/ContactPage";
import EstimatePage from "../pages/estimate/EstimatePage";
import EventsPage from "../pages/events-page/EventsPage";
import ServicesPage from "../pages/services-page/ServicesPage";

export const headerRoutes = [
  {
    name: "Новости и события",
    linkTo: "/news",
    element: <EventsPage />,
    disabled: false
  },
  {
    name: "Услуги",
    linkTo: "/service",
    element: <ServicesPage />,
    disabled: false
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
    disabled: true
  },
  {
    name: "Контакты",
    linkTo: "/contacts",
    element: <ContactPage />,
    disabled: false
  },
];
