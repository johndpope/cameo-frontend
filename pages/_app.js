import App from "next/app";
import Head from "next/head";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "services/shared/MaterialUI";
import "services/browser/Tailwind.css";

class CustomApp extends App {
    
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<>
				<Head>
					<title>Fanmelt</title>
				</Head>
				<ThemeProvider theme={theme}>
					<StylesProvider injectFirst>
						<CssBaseline />
						<Component {...pageProps} />
					</StylesProvider>
				</ThemeProvider>
			</>
		);
	}
}

export default CustomApp;
