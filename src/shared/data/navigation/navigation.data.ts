import { MdOutlinePerson, MdOutlineShoppingCart } from 'react-icons/md'

import {
	BiLogoFacebook,
	BiLogoGithub,
	BiLogoInstagram,
	BiLogoXing
} from 'react-icons/bi'

export const headerNavigation = [
	{
		href: '/categories/summer-24',
		title: 'summer 24'
	},
	{
		href: '/categories/entrste',
		title: 'entrste'
	},
	{
		href: '/women',
		title: 'women'
	},
	{
		href: '/men',
		title: 'men'
	}
]

export const headerActionButtons = [
	{
		href: '/profile',
		alternativeText: 'account icon',
		icon: MdOutlinePerson
	},
	{
		href: '/cart',
		alternativeText: 'cart icon',
		icon: MdOutlineShoppingCart
	}
]

export const footerNavigation = [
	{
		href: '/contact',
		title: 'contact us'
	},
	{
		href: '/information/client-care',
		title: 'client care'
	},
	{
		href: '/information/legal',
		title: 'legal area'
	},
	{
		href: 'https://github.com/sozureke',
		title: 'project'
	}
]

export const footerActionButtons = [
	{
		href: 'https://www.instagram.com',
		alternativeText: 'instagram icon',
		icon: BiLogoInstagram
	},
	{
		href: 'https://x.com',
		alternativeText: 'x icon',
		icon: BiLogoXing
	},
	{
		href: 'https://facebook.com',
		alternativeText: 'facebook icon',
		icon: BiLogoFacebook
	},
	{
		href: 'https://github.com',
		alternativeText: 'github icon',
		icon: BiLogoGithub
	}
]
