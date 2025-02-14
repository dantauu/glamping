import { UrlObject } from "url"

type InputInfoProps = {
	title: string
	onClick: () => void
	inputInfoWrapper: string
	inputInfoTitle: string
	inputInfoTitleInner: string
	inputInfoTextWrapper: string
	inputInfo: string
	inputInfoText: string
	text: string
	inputInfoImg: string
	inputInfoImgInner: string
	img: string
}

type ReviewsProps = {
	id: number
	special?: string
	specialText?: string
	likeIcon: string
	backImg: string
	title: string
	descrptionOne: string
	descrptionSecond: string
	descrptionTherd: string
	iconMount: string
	iconWifi: string
	iconChill: string
	iconMangal: string
	iconEat: string
	iconFamily: string
	iconPet: string
	iconCutlery: string
	iconStop: string
	stopText: string
	cutleryText: string
	raitingText: string
	reviewsText: string
	iconFlag: string
	textFlag: string
	priceNumber: string
	hisoryText: string
	buttonText: string
}

type ComplexCategory = {
	id: number
	icon: string
	iconDot: string
	title: string
	itemsText: ComplexItem[]
}

interface ButtonCardObject {
	text: string
	buttonItem?: string
	link: string | UrlObject
}

export {InputInfoProps, ReviewsProps, ComplexCategory, ButtonCardObject}