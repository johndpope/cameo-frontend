module.exports = {
	plugins: [
		"tailwindcss",
		[
			"@fullhuman/postcss-purgecss",
			// process.env.NODE_ENV === "production"
			//   ? {
			//       content: [
			//         "./pages/**/*.{js,jsx,ts,tsx}",
			//         "./components/**/*.{js,jsx,ts,tsx}",
			//         "./layouts/**/*.{js,jsx,ts,tsx}",
			//         "./modals/**/*.{js,jsx,ts,tsx}",
			//       ],            
			//       defaultExtractor: (content) =>
			//         content.match(/[\w-/:]+(?<!:)/g) || [],
			//     }
			//   : false,
			false
		],
	],
};