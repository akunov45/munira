import {Route, Routes} from "react-router-dom";
import './App.css';
import Layout from './layout/Layout';
import Event from "./pages/events-page/event/Event";
import HomePage from "./pages/home-page/HomePage.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import Service from "./pages/services-page/single-service/Service";
import {headerRoutes} from "./routes/routes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AboutPage from "./pages/about-page/AboutPage.jsx";
import NotFoundPage from "./pages/not-found/NotFoundPage.jsx";
import SignUp from "./pages/login-page/SignUp.jsx";
import CatalogPage from "./pages/catalog/CatalogPage.jsx";

function App() {

	return (
		<>
			<ScrollToTop/>
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					<Route index element={<HomePage/>}/>
					{headerRoutes.map((r, i) => (
						<Route path={r.linkTo} key={i} element={r.element}/>
					))}
					<Route path={'login'} element={<LoginPage/>}/>
					<Route path={'sign-up'} element={<SignUp/>}/>
					<Route path={'service/:id'} element={<Service/>}/>
					<Route path={'event/:id'} element={<Event/>}/>
					<Route path={'about'} element={<AboutPage/>}/>
          <Route path={'catalog'} element={<CatalogPage />}/>
					<Route path={'*'} element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App
