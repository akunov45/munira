export const formatDate = (dateStr, lang = 'ru') => {
	const date = new Date(dateStr);
	
	if (isNaN(date.getTime())) {
		console.warn('Invalid date string, using current date');
		return formatDate(new Date(), lang);
	}
	
	const options = {
		en: {
			monthNames: [
				'January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'
			],
			format: '{month} {day}, {year}'
		},
		ru: {
			monthNames: [
				'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
				'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
			],
			format: '{day} {month} {year}'
		},
		ky: {
			monthNames: [
				'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
				'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
			],
			format: '{day}-{month} {year}'
		}
	};
	
	const config = options[lang] || options.en;
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	
	let formattedDate = config.format
		.replace('{day}', day)
		.replace('{month}', config.monthNames[monthIndex])
		.replace('{year}', year);
	
	return formattedDate;
};
// formatDate('2025-04-01T12:30:00', 'en') => "April 1, 2025 12:30"
// formatDate('2025-04-01T12:30:00', 'ru') => "1 апреля 2025 12:30"