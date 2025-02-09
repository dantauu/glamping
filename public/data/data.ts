

const headerBackNav = [
    { id: 1, img: './assets/img/tent.svg', text: 'Загородные отели' },
    { id: 2, img: './assets/img/airplane.svg', text: 'Авиабилеты' },
    { id: 3, img: './assets/img/bus.svg', text: 'Ж/д' },
    { id: 4, img: './assets/img/pin.svg', text: 'Туры' },
]

const cardLikeItems = [
	{
		id: 1,
		img: './assets/img/laguna.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \«Лагуна\»',
		description: 'Камчатский край, Елизовский район',
		price: '6 000',
		timePrice: '/за 1 ночь',
	},
	{
		id: 2,
		img: './assets/img/fitch.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \«Причал рыбака\»',
		description: 'Астраханская область, Харабалинский район',
		price: '5 800',
		timePrice: '/за 1 ночь',
	},
	{
		id: 3,
		img: './assets/img/laguna-2.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \"Лагуна\"',
		description: 'Камчатский край, Елизовский район',
		price: '6 000',
		timePrice: '/за 1 ночь',
	},
	{
		id: 4,
		img: './assets/img/laguna.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \«Лагуна\»',
		description: 'Камчатский край, Елизовский район',
		price: '6000',
		timePrice: '/за 1 ночь',
	},
	{
		id: 5,
		img: './assets/img/fitch.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \«Причал рыбака\»',
		description: 'Астраханская область, Харабалинский район',
		price: '5 800',
		timePrice: '/за 1 ночь',
	},
	{
		id: 6,
		img: './assets/img/laguna-2.jpg',
		absoluteImg: './assets/img/heart.svg',
		title: 'Глэмпинг \«Лагуна\»',
		description: 'Камчатский край, Елизовский район',
		price: '6 000',
		timePrice: '/за 1 ночь',
	},
]

const kidsCardItems = [
	{
		id: 1,
		img: './assets/img/park.jpg',
		absoluteText: '42 варианта',
		text: 'Здесь дети не будут скучать',
	},
	{
		id: 2,
		img: './assets/img/bed.jpg',
		absoluteText: '24 варианта',
		text: 'С малышами 0+',
	},
	{
		id: 3,
		img: './assets/img/kids.jpg',
		absoluteText: '15 вариантов',
		text: 'Здесь проводят мастер-классы',
	},
	{
		id: 4,
		img: './assets/img/holl.jpg',
		absoluteText: '20 вариантов',
		text: 'Для больших семей',
	},
]

const romanceItems = [
	{
		id: 1,
		img: './assets/img/mount.jpg',
		absoluteText: '32 варианта',
		text: 'Для любителей активного отдыха',
	},
	{
		id: 2,
		img: './assets/img/forest.jpg',
		absoluteText: '18 вариантов',
		text: 'Насладиться тишиной и природой',
	},
	{
		id: 3,
		img: './assets/img/bath.jpg',
		absoluteText: '23 варианта',
		text: 'Отдохнуть душой и телом',
	},
	{
		id: 4,
		img: './assets/img/lake.jpg',
		absoluteText: '20 вариантов',
		text: 'Сделать красивые фото',
	},
]

const popularItemsFirst = [
	{
		id: 1,
		img: './assets/img/carpet.jpg',
		absoluteText: '42 варианта',
		text: 'Краснодарский край',
	},
	{
		id: 2,
		img: './assets/img/home-lake.jpg',
		absoluteText: '22 варианта',
		text: 'Ленинградская область',
	},
]

const popularItemsSecond = [
	{
		id: 1,
		img: './assets/img/forest-home.jpg',
		absoluteText: '14 вариантов',
		text: 'Республика Карелия',
	},
	{
		id: 2,
		img: './assets/img/home-forest-2.jpg',
		absoluteText: '12 вариантов',
		text: 'Свердловская область',
	},
]

const blogItems = [
	{
		id: 1,
		title:
			'Советы по выбору глэмпинга/эко-отеля,  по сбору вещей,  по отдыху на природе',
		name: 'Сидоров Илья',
		special: 'эксперт по туризму',
		countLike: 14,
		countComment: 2,
		comment: 'комментария',
		imgBack: './assets/img/travel.jpg',
		imgLike: './assets/img/like.svg',
		imgComment: './assets/img/comment.svg',
		imgAvatar: './assets/img/avatar.jpg',
	},
	{
		id: 1,
		title: 'Новинки в сфере эко-туризма',
		name: 'Сидоров Илья',
		special: 'эксперт по туризму',
		countLike: 3,
		countComment: 1,
		comment: 'комментарий',
		imgBack: './assets/img/girl.jpg',
		imgLike: './assets/img/like.svg',
		imgComment: './assets/img/comment.svg',
		imgAvatar: './assets/img/avatar.jpg',
	},
	{
		id: 1,
		title: '20 самых интересных глэмпингов и эко-отелей',
		name: 'Сидоров Илья',
		special: 'эксперт по туризму',
		countLike: 158,
		countComment: 22,
		comment: 'комментария',
		imgBack: './assets/img/forest-man.jpg',
		imgLike: './assets/img/like.svg',
		imgComment: './assets/img/comment.svg',
		imgAvatar: './assets/img/avatar.jpg',
	},
]

export {
	headerBackNav,
	cardLikeItems,
	kidsCardItems,
	romanceItems,
	popularItemsFirst,
	popularItemsSecond,
	blogItems
}