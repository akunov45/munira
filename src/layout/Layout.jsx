import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import {Box, Container, IconButton} from '@mui/material';
import tiktok from "../assets/tiktok.jpg"
import instagram from "../assets/instagram.jpg"
import facebook from "../assets/facebook.jpg"
import youtube from "../assets/youtube.jpg"

const socialIcons = [
	{
		icon: tiktok,
		link: "https://www.tiktok.com/",
	},
	{
		icon: instagram,
    link: "https://www.instagram.com/munira_home_textile_/",
	},
	{
		icon: facebook,
		link: "#",
	},
	{
		icon: youtube,
		link: "#",
	}
]

const Layout = () => {
	return (
		<>
			<SocialMediaIcons/>
			<Header/>
			<div style={{minHeight: `calc(100vh - 290px)`}}>
				<Outlet/>
			</div>
			<Footer/>
		</>
	)
}

export default Layout

const SocialMediaIcons = () => {
	return (
	<Container maxWidth="xl" >
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				gap: 1,
			}}
		>
			{socialIcons.map((el, i) => (
				<IconButton
					key={i}
					href={el.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img width={24} src={el.icon} alt=""/>
				</IconButton>
			))}
		</Box>
	</Container>
	);
};

