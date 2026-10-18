// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages: https://brightforge-bv.github.io/brightforge-plugins/
const SITE = 'https://brightforge-bv.github.io';
const BASE = '/brightforge-plugins';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [
		starlight({
			title: 'Brightforge Plugins',
			description: 'Support and documentation for Brightforge Stream Deck plugins.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Energy Prices NL',
					items: [
						{ label: 'Overview', slug: 'energy-prices' },
						{ label: 'Getting started', slug: 'energy-prices/getting-started' },
						{ label: 'Keys and dials', slug: 'energy-prices/keys-and-dials' },
						{ label: 'Price settings', slug: 'energy-prices/price-settings' },
						{ label: 'FAQ', slug: 'energy-prices/faq' },
						{ label: 'Privacy', slug: 'energy-prices/privacy' },
						{ label: 'Changelog', slug: 'energy-prices/changelog' },
					],
				},
				{ label: 'Support', slug: 'support' },
			],
		}),
	],
});
