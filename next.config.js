require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const envConfig = {
	//   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,  
};

const settings = {
	env: envConfig,
	devIndicators: {
		autoPrerender: false,
	},
	pwa: {
		dest: "public",
	},
	images: {
		// loader: 'cloudinary',
		// path: 'https://res.cloudinary.com/djetned9h/image/upload/',    
		domains: ['res.cloudinary.com']
	}
};

module.exports =
	process.env.NODE_ENV === "development"
		? withPlugins([], settings)
		: withPlugins([withPWA], settings);
