import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import "./config/i18n.js"
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {StyledEngineProvider} from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter
		future={{
			v7_relativeSplatPath: true,
			v7_startTransition: true
		}}>
		<Provider store={store}>
			<React.StrictMode>
				<StyledEngineProvider injectFirst>
					<App/>
				</StyledEngineProvider>
			</React.StrictMode>
		</Provider>
	</BrowserRouter>
)
