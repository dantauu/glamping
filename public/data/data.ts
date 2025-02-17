import { ComplexCategory, ReviewsProps } from "@/app/types/global"


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

const questText = [
	{ id: 1, 
		text: '1) На главной странице в поиске введите куда вы хотите поехать, укажите даты поездки и кто поедет.' },
	{ id: 2,
		 text: '2) Нажмите кнопку «Найти», чтобы посмотреть список предложений. Вы можете отфильтровать список удобным способом, а также посмотреть расположение объектов на карте.' },
	{ id: 3,
		 text: '3) После выбора варианта изучите правила отмены и нажмите «Забронировать». Укажите ваши данные.' },
	{ id: 4, 
		text: '4) Оплатите заказ банковской картой или через СБП. После этого на указанную электронную почту придёт письмо с подтверждением бронирования и отдельное письмо с чеком. Чек, УПД на сервисный сбор и статус заказа вы сможете посмотреть в личном кабинете на сайте.' }
]

const reviewsItems: ReviewsProps[] = [
	{
		id: 1,
		special: './assets/img/star.svg',
		specialText: 'Выбор гостей',
		likeIcon: './assets/img/heart.svg',
		backImg: './assets/img/lagunaSecond.jpg',
		title: 'Глэмпинг «Лагуна»',
		descrptionOne: 'Краснодарский край, Елизовский район',
		descrptionSecond: '27 км до Краснодара',
		descrptionTherd: 'Глэмпинг',
		iconMount: './assets/img/mount.svg',
		iconWifi: './assets/img/wi-fi.svg',
		iconChill: './assets/img/chill.svg',
		iconMangal: './assets/img/mangal.svg',
		iconEat: './assets/img/eat.svg',
		iconFamily: './assets/img/family.svg',
		iconPet: './assets/img/pets.svg',
		iconCutlery: './assets/img/cutlery.svg',
		iconStop: './assets/img/stop.svg',
		stopText: 'Бесплатная отмена',
		cutleryText: 'Завтрак включён',
		raitingText: 'Превосходно',
		reviewsText: '27 отзывов',
		iconFlag: './assets/img/flag.svg',
		textFlag: '9,8',
		priceNumber: '6 000 р.',
		hisoryText: 'за 5 ночей, 2 гостя',
		buttonText: 'Наличие мест',
	},
	{
		id: 2,
		likeIcon: './assets/img/heart.svg',
		backImg: './assets/img/lagunaOne.jpg',
		title: 'Глэмпинг «Лагуна»',
		descrptionOne: 'Краснодарский край, Елизовский район',
		descrptionSecond: '27 км до Краснодара',
		descrptionTherd: 'Глэмпинг',
		iconMount: './assets/img/mount.svg',
		iconWifi: './assets/img/wi-fi.svg',
		iconChill: './assets/img/chill.svg',
		iconMangal: './assets/img/mangal.svg',
		iconEat: './assets/img/eat.svg',
		iconFamily: './assets/img/family.svg',
		iconPet: './assets/img/pets.svg',
		iconCutlery: './assets/img/cutlery.svg',
		iconStop: './assets/img/stop.svg',
		stopText: 'Бесплатная отмена',
		cutleryText: 'Завтрак включён',
		raitingText: 'Выликолепно',
		reviewsText: '3 отзыва',
		iconFlag: './assets/img/flag.svg',
		textFlag: '10',
		priceNumber: '6 000 р.',
		hisoryText: 'за 5 ночей, 2 гостя',
		buttonText: 'Наличие мест',
	},
	{
		id: 3,
		special: './assets/img/fire.svg',
		specialText: 'Акция до 01.08.24',
		likeIcon: './assets/img/heart.svg',
		backImg: './assets/img/lagunaTherd.jpg',
		title: 'Глэмпинг «Лагуна»',
		descrptionOne: 'Краснодарский край, Елизовский район',
		descrptionSecond: '27 км до Краснодара',
		descrptionTherd: 'Глэмпинг',
		iconMount: './assets/img/mount.svg',
		iconWifi: './assets/img/wi-fi.svg',
		iconChill: './assets/img/chill.svg',
		iconMangal: './assets/img/mangal.svg',
		iconEat: './assets/img/eat.svg',
		iconFamily: './assets/img/family.svg',
		iconPet: './assets/img/pets.svg',
		iconCutlery: './assets/img/cutlery.svg',
		iconStop: './assets/img/stop.svg',
		stopText: 'Бесплатная отмена',
		cutleryText: 'Завтрак включён',
		raitingText: 'Отлично',
		reviewsText: '27 отзывов',
		iconFlag: './assets/img/flag.svg',
		textFlag: '8,8',
		priceNumber: '6 000 р.',
		hisoryText: 'за 5 ночей, 2 гостя',
		buttonText: 'Наличие мест',
	},
]




const ModalSearchSizesItems = [
	{ id: 1, text: 'Глэмпинги' },
	{ id: 2, text: 'Эко-отель' },
	{ id: 3, text: 'Кемпинг' },
	{ id: 4, text: 'Купольный отель' },
]

const ModalSearchRaitingItems = [
	{ id: 1, text: 'Любой рейтинг' },
	{ id: 2, text: 'Превосходно: 9+' },
	{ id: 3, text: 'Отлично: 8+' },
	{ id: 4, text: 'Очень хорошо: 7+' },
	{ id: 5, text: 'Достаточно хорошо: 6+' },
]

const ModalSearchDownItems = [
	{ id: 1, text: 'Бесплатная отмена' },
	{ id: 2, text: 'Завтрак включён' },
	{ id: 3, text: 'Можно с животными' },
	{ id: 4, text: 'Отдых с детьми' },
]

const ModalSearchNumberItems = [
	{ id: 1, text: 'Wi-Fi в номере', number: 47 },
	{ id: 2, text: 'Кондиционер', number: 32 },
	{ id: 3, text: 'Ванная комната', number: 56 },
	{ id: 4, text: 'Фен', number: 23 },
	{ id: 5, text: 'Кухня/ мини-кухня', number: 417 },
	{ id: 6, text: 'Холодильник', number: 56 },
	{ id: 7, text: 'Телевизор', number: 98 },
	{ id: 8, text: 'Проектор', number: 12 },
	{ id: 9, text: 'Кофе/чай', number: 234 },
	{ id: 10, text: 'Обеденная зона на улице', number: 62 },
]

const ModalSearchLocateItems = [
	{ id: 1, text: 'Вблизи озеро/ водоём / река', number: 47 },
	{ id: 2, text: 'Лес', number: 47 },
	{ id: 3, text: 'Вид на горы', number: 47 },
]

const ModalSearchServicesItems = [
	{ id: 1, text: 'Прокат велосипедов', number: 47 },
	{ id: 2, text: 'Сауна/ баня/ банный чан', number: 32 },
	{ id: 3, text: 'Массаж', number: 56 },
	{ id: 4, text: 'Пляж', number: 23 },
	{ id: 5, text: 'Бассейн', number: 417 },
	{ id: 6, text: 'Спортивный инвентарь', number: 56 },
	{ id: 7, text: 'Йога', number: 98 },
	{ id: 8, text: 'Рыбалка', number: 12 },
	{ id: 9, text: 'Треккинг/пеший туризм', number: 234 },
	{ id: 10, text: 'Верховая езда', number: 62 },
	{ id: 11, text: 'Катание на сап/бордах', number: 48 },
	{ id: 12, text: 'SPA услуги', number: 112 },
	{ id: 13, text: 'Детская площадка', number: 89 },
	{ id: 14, text: 'Сплавы', number: 55 },
	{ id: 15, text: 'Кинопоказы', number: 33 },
	{ id: 16, text: 'Мастер-классы', number: 42 },
	{ id: 17, text: 'Термальные источники', number: 15 },
	{ id: 18, text: 'Места для курения', number: 32 },
]

const comfortItems = [
	{ id: 1, img: './assets/img/mount-green.svg', text: 'Вид на горы' },
	{ id: 2, img: './assets/img/eat-green.svg', text: 'Кафе/рестораны' },
	{ id: 3, img: './assets/img/yoga-green.svg', text: 'Йога' },
	{ id: 4, img: './assets/img/chill-green.svg', text: 'Баня' },
	{ id: 5, img: './assets/img/wi-fi-green.svg', text: 'Wi-Fi' },
	{ id: 6, img: './assets/img/condition-green.svg', text: 'Кондиционер' },
	{ id: 7, img: './assets/img/car-green.svg', text: 'Беспатная парковка' },
	{ id: 8, img: './assets/img/family-green.svg', text: 'Семейный' },
	{ id: 9, img: './assets/img/pet-green.svg', text: 'Можно с животными' },
]

const searchCardItems = [
	{
		id: 1,
		img: './assets/img/search-card-1.jpg',
		titleCard: 'Эко-домик',
		iconMashtab: './assets/img/mashtab-icon.svg',
		iconMan: './assets/img/man.svg',
		iconBed: './assets/img/bed.svg',
		textMashtab: '32м',
		textMan: '×3 (Один ребёнок до 14 лет — можно без отдельного спального места)',
		textBed: '1 двуспальная кровать',
		wifiText: 'Wi-Fi',
		mountText: 'Вид на горную реку',
		bassText: 'Ванная комната',
		phenText: 'Фен',
		mangalText: 'Мангал',
		conditionText: 'Кондиционер',
		petText: 'Можно с животными',
		tarifTextOne: 'БЕЗВОЗВРАТНЫЙ ТАРИФ',
		noEatIcon: './assets/img/nocutlery.svg',
		stoprIcon: './assets/img/block.svg',
		creditCardIcon: './assets/img/credit-card.svg',
		noEatText: 'Питание не включено',
		stoprText: 'Стоимость не возвращается',
		creditCardText: 'Оплата онлайн 100%',
		alertText: 'Лучшая цена',
		priceOne: '6 000 р.',
		guestText: 'за 5 ночей, 2 гостя',
		tarifTextTwo: 'ТАРИФ С ЗАВТРАКОМ',
		priceTwo: '7 200 р.',
		shareIcon: './assets/img/share.svg',
		shareText: 'Бесплатная отмена брони до 18 июля',
		eatText: 'Завтрак включён',
		eatIcon: './assets/img/eat-black.svg'
	},
	{
		id: 2,
		img: './assets/img/search-card-2.jpg',
		titleCard: 'Эко-домик 2',
		iconMashtab: './assets/img/mashtab-icon.svg',
		iconMan: './assets/img/man.svg',
		iconBed: './assets/img/bed.svg',
		textMashtab: '32м',
		textMan: '×3 (Один ребёнок до 14 лет — можно без отдельного спального места)',
		textBed: '1 двуспальная кровать',
		wifiText: 'Wi-Fi',
		mountText: 'Вид на горную реку',
		bassText: 'Ванная комната',
		phenText: 'Фен',
		mangalText: 'Мангал',
		conditionText: 'Кондиционер',
		petText: 'Можно с животными',
		tarifTextOne: 'БЕЗВОЗВРАТНЫЙ ТАРИФ',
		noEatIcon: './assets/img/nocutlery.svg',
		stoprIcon: './assets/img/block.svg',
		creditCardIcon: './assets/img/credit-card.svg',
		noEatText: 'Питание не включено',
		stoprText: 'Стоимость не возвращается',
		creditCardText: 'Оплата онлайн 100%',
		alertText: 'Сезонное предложение',
		alertIcon: './assets/img/alert.svg',
		priceOne: '6 500 р.',
		priceDelete: '8 000 р.',
		guestText: 'за 5 ночей, 2 гостя',
		tarifTextTwo: 'ТАРИФ С ЗАВТРАКОМ',
		priceTwo: '7 200 р.',
		shareIcon: './assets/img/share.svg',
		shareText: 'Бесплатная отмена брони до 18 июля',
		eatText: 'Завтрак включён',
		eatIcon: './assets/img/eat-black.svg'
	},
]

const searchCardItemsBlock = [
	{
		id: 3,
		img: './assets/img/search-card-3.jpg',
		titleCard: 'Эко-домик 3',
		iconMashtab: './assets/img/mashtab-icon.svg',
		iconMan: './assets/img/man.svg',
		iconBed: './assets/img/bed.svg',
		textMashtab: '32м',
		textMan: '×3 (Один ребёнок до 14 лет — можно без отдельного спального места)',
		textBed: '1 двуспальная кровать',
		wifiText: 'Wi-Fi',
		mountText: 'Вид на горную реку',
		bassText: 'Ванная комната',
		phenText: 'Фен',
		mangalText: 'Мангал',
		conditionText: 'Кондиционер',
		petText: 'Можно с животными',
	},
]

const complexComfortItems: ComplexCategory[] = [
	{
		id: 1,
		icon: './assets/img/fire-green.svg',
		title: 'На территории',
		itemsText: [
			'Детская площадка',
			'Костровая зона',
			'Шезлонги',
			'Пляжная зона',
			'Обеденная зона на улице',
			'Гамаки и качели',
		],
	},
	{
		id: 2,
		icon: './assets/img/eat-green.svg',
		title: 'Питание',
		itemsText: [
			'Завтрак включён',
			'Чай/кофе в номере',
			'Кафе/ресторан',
			{ name: 'Доставка еды в номер', details: '(оплачивается отдельно)' },
			'Детское меню',
			'Площадка для пикника',
			'Мангал',
		],
	},
	{
		id: 3,
		icon: './assets/img/party.svg',
		title: 'Развлечения и спорт',
		itemsText: [
			'Кинотеатр под открытым небом',
			'Бассейн',
			'Настольные игры',
			'Спортивный инвентарь',
			'Мастер-классы',
			'Вечерняя программа',
			'Медитации',
			'Йога',
			'Книги и журналы',
			'Рыбалка',
		],
	},
	{
		id: 4,
		icon: './assets/img/tag.svg',
		title: 'Оплачиваются на месте',
		itemsText: [
			{ name: 'Баня', price: '(2 часа — 4 000р.)' },
			'Комфортная еврораскладушка для 3 гостя',
			{ name: 'Чан с пихтовым лапником', price: '(2 часа — 4 500р.)' },
			'Тренкинг/пеший туризм',
			{ name: 'Сал-борды', details: '(возраст: 16+,', price: '1 час — 800р.)' },
			'Прокат велосипеда',
			'Рыбалка (аренда снастей)',
			'Массаж',
			'Набор для шашлыка (Решетка, шампуры, уголь и жидкость для розжига)',
			'Верховая езда',
			'Экскурсии',
			'Трансфер',
			'Фотосессия',
			'Катание на лодках',
			'Праздничное украшение домика',
		],
	},
	{
		id: 5,
		icon: './assets/img/life.svg',
		title: 'Окружение',
		itemsText: ['Вид на горы', 'Озеро'],
	},
	{
		id: 6,
		icon: './assets/img/wi-fi-green.svg',
		title: 'Интернет',
		itemsText: ['Бесплатный Wi-Fi'],
	},
	{
		id: 7,
		icon: './assets/img/family-green.svg',
		title: 'Отдых с детьми',
		itemsText: [
			'Детская площадка',
			'Детское меню',
			'Детская кроватка/люлька (по запросу)',
		],
	},
	{
		id: 8,
		icon: './assets/img/app.svg',
		title: 'Прочее',
		itemsText: [
			'Можно с домашники животными',
			'Частота уборки: ежедневно',
			'Круглосуточная регистрация',
			'Бесплатная парковка',
			'Курение запрещено',
		],
	},
]

const homeComfortItems = [
	{
		id: 1,
		icon: './assets/img/kitchen.svg',
		title: 'Кухня',
		itemsText: [
			'Холодильник',
			'Варочная поверхность',
			'Микроволновая печь',
			'Чай / кофе',
			'Электрический чайник',
			'Набор посуды',
			'Обеденные стол и стулья',
		],
	},
	{
		id: 2,
		icon: './assets/img/bath.svg',
		title: 'Ванная комната',
		itemsText: [
			'Раковина',
			'Санузел',
			'Душевая кабина',
			'Полотенце, мыло, туалетная бумага',
			'Гель для душа, шампунь',
			'Фен',
		],
	},
	{
		id: 3,
		icon: './assets/img/bed-green.svg',
		iconDot: './assets/img/dot.svg',
		title: 'Спальня',
		itemsText: [
			'Двуспальная кровать',
			'Тапочки 2 шт.',
			'Халаты 2 шт.',
			'Постельное белье',
		],
	},
	{
		id: 4,
		icon: './assets/img/terrace.svg',
		iconDot: './assets/img/dot.svg',
		title: 'На улице',
		itemsText: [
			'Терраса',
			'Обеденная зона',
			'Мангал',
			'Гамак',
			'Закрытая беседка на 8 человек',
		],
	},
	{
		id: 5,
		icon: './assets/img/app.svg',
		iconDot: './assets/img/dot.svg',
		title: 'Прочее',
		itemsText: [
			'Обогреватель',
			'Камин',
			'Проектор',
			'Детская кроватка по запросу',
		],
	},
]

const guestImgsItems = [
	{ id: 1, img: './assets/img/guest-1.jpg' },
	{ id: 2, img: './assets/img/guest-2.jpg' },
	{ id: 3, img: './assets/img/guest-3.jpg' },
	{ id: 4, img: './assets/img/guest-4.jpg' },
	{ id: 5, img: './assets/img/guest-5.jpg' },
	{ id: 6, img: './assets/img/guest-6.jpg' },
]

const reviewsCardObjectItems = [
	{
		id: 1,
		avatar: './assets/img/avatar-ann.png',
		name: 'Анна П.',
		date: '25.07.2024',
		iconDouble: './assets/img/double.svg',
		textDouble: 'Пара',
		ecoHomeIcon: './assets/img/eco-house.svg',
		ecoHouseText: 'Эко-домик',
		calendarIcon: './assets/img/calendar-black.svg',
		calendarIconText: '1 ночь, июль 2024',
		countBox: 9,
		raitingText: 'Превосходно',
		responseGet: 'Ответ полезен:',
		likeImg: './assets/img/like.svg',
		likeCount: 3,
		title: 'Прекрасный дом с вкусным завтраком!',
		commentTitle: 'Комментарий:',
		comment:
			'С мужем уехали отмечать годовщину и это было невероятно))) расположение невероятно красивое в тисо-самшитовой роще национального парка. Номер комфортный, красивый, уютный. По вечерам нам удалось увидеть светлячков, так романтично ) с радостью приедем ещё',
		imgs: [
			'./assets/img/card-img-1.jpg',
			'./assets/img/card-img-2.jpg',
			'./assets/img/card-img-3.jpg',
			'./assets/img/card-img-4.jpg',
		],
		iconWorld: './assets/img/world.svg',
		worldTitle: 'Глэмпинг «Лагуна»',
		worldOfficial: '(Официальный представитель)',
		worldDate: '25.07.2024',
		response: 'Ответ:',
		responseInner: 'Благодарим за отзыв! Ждём Вас ещё',
	},
	{
		id: 2,
		avatar: './assets/img/avatar-ann.png',
		name: 'Сергей П.',
		date: '25.07.2024',
		iconDouble: './assets/img/solo.svg',
		textDouble: 'В одиночку',
		ecoHomeIcon: './assets/img/eco-house.svg',
		ecoHouseText: 'Глэмп',
		calendarIcon: './assets/img/calendar-black.svg',
		calendarIconText: '1 ночь, июль 2024',
		countBox: 10,
		raitingText: 'Великолепно',
		responseGet: 'Ответ полезен:',
		likeImg: './assets/img/like-full.svg',
		likeCount: 14,
		title: 'Прекрасный дом с вкусным завтраком!',
		commentTitle: 'Комментарий:',
		comment:
			'С мужем уехали отмечать годовщину и это было невероятно))) расположение невероятно красивое в тисо-самшитовой роще национального парка. Номер комфортный, красивый, уютный. По вечерам нам удалось увидеть светлячков, так романтично ) с радостью приедем ещё',
	},
	{
		id: 3,
		avatar: './assets/img/avatar-ann.png',
		name: 'Мария П.',
		date: '25.07.2024',
		iconDouble: './assets/img/family.svg',
		textDouble: 'Семьёй',
		ecoHomeIcon: './assets/img/eco-house.svg',
		ecoHouseText: 'Эко-домик',
		calendarIcon: './assets/img/calendar-black.svg',
		calendarIconText: '3 дня, май 2024',
		countBox: 8,
		raitingText: 'Очень хорошо',
		responseGet: 'Ответ полезен:',
		likeImg: './assets/img/like.svg',
		likeCount: 8,
		title: 'Прекрасный дом с вкусным завтраком!',
		commentTitle: 'Комментарий:',
		comment:
			'С мужем уехали отмечать годовщину и это было невероятно))) расположение невероятно красивое в тисо-самшитовой роще национального парка. Номер комфортный, красивый, уютный. По вечерам нам удалось увидеть светлячков, так романтично ) с радостью приедем ещё',
		iconWorld: './assets/img/world.svg',
		worldTitle: 'Глэмпинг «Лагуна»',
		worldOfficial: '(Официальный представитель)',
		worldDate: '25.07.2024',
		response: 'Ответ:',
		responseInner: 'Благодарим за отзыв! Ждём Вас ещё',
	},
]

const sliderCardObjectItems = [
	{
		id: 1,
		img: './assets/img/event-1.jpg',
		iconCalendar: './assets/img/calendar.svg',
		dateText: '14.08.2024',
		title: 'Ретрит в Лагуне',
		description: 'Волшебный день в окружении сосен на берегу озера в кругу единомышленниц. Отдых среди красивой природы в тандеме с практиками, медитациями'
	},
	{
		id: 2,
		img: './assets/img/event-2.jpg',
		iconCalendar: './assets/img/calendar.svg',
		dateText: 'Каждое воскресение',
		title: 'Утренняя йога каждое воскресение',
		description: 'Вдохновляющая йога-практика на свежем воздухе;— идеальное начало выходного дня. Живая природа в лучах утреннего солнца, утренняя...'
	},
	{
		id: 3,
		img: './assets/img/event-3.jpg',
		iconCalendar: './assets/img/calendar.svg',
		dateText: 'Июль-август',
		title: 'Отправится в плавание на сап-борде',
		description: 'Любоваться живописным пейзажем и созерцать водную гладь, отвлечься от суеты и получить новые впечатления. Природный ко...'
	},
	{
		id: 4,
		img: './assets/img/event-2.jpg',
		iconCalendar: './assets/img/calendar.svg',
		dateText: '14.08.2024',
		title: 'Ретрит в Лагуне',
		description: 'Волшебный день в окружении сосен на берегу озера в кругу единомышленниц. Отдых среди красивой природы в тандеме с практиками, медитациями'
	},
]

const runLineItems = [
	{ id: 1, img: './assets/img/run-1.svg' },
	{ id: 2, img: './assets/img/run-2.svg' },
	{ id: 3, img: './assets/img/run-3.svg' },
	{ id: 4, img: './assets/img/run-4.svg' },
]

const takeMoneyItems = [
	{
		id: 1,
		title: 'Оплата от гостей при заселении',
		text: 'Вы получаете оплату напрямую от гостей. В течение 3 рабочих дней после выезда гостей перечисляете нам комиссию.',
	},
	{
		id: 2,
		title: 'Оплата на сайте или при заселении',
		text: 'Гости сами выбирают удобный способ оплаты, а вы получаете максимум бронирований. По итогам месяца проводится взаимозачёт.',
	},
	{
		id: 3,
		title: 'Оплата на сайте',
		text: 'Гости оплачивают бронирования онлайн. В течение 3 рабочих дней после выезда гостей мы перечисляем вам сумму за вычетом комиссии.',
	},
]

const questTextExtraNet = [
	{
		id: 1,
		text: 'После завершения регистрации вы сможете открыть ваш объект для бронирования на нашем сайте. Мы можем запросить верификацию объекта, прежде чем вы начнете получать бронирования. Пока мы будем проверять информацию, вы можете познакомиться с Экстранетом и подготовиться к встрече первых гостей.',
	},
]

export {
	headerBackNav,
	cardLikeItems,
	kidsCardItems,
	romanceItems,
	popularItemsFirst,
	popularItemsSecond,
	blogItems,
	questText,
	reviewsItems,

	ModalSearchSizesItems,
	ModalSearchRaitingItems,
	ModalSearchDownItems,
	ModalSearchNumberItems,
	ModalSearchLocateItems,
	ModalSearchServicesItems,

	comfortItems,
	searchCardItems,
	searchCardItemsBlock,

	complexComfortItems,
	homeComfortItems,

	guestImgsItems,
	reviewsCardObjectItems,
	sliderCardObjectItems,
	runLineItems,
	takeMoneyItems,
	questTextExtraNet
}