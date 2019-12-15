<template>
	<ui-app>
		<ui-toolbar>
			<div class="row flex-center">
				<span class="logo">Nando Monja</span>
			</div>
		</ui-toolbar>
		<nuxt-child />
	</ui-app>
</template>

<script>
import Vue from 'vue'

export default {
	head() {
		return {
			htmlAttrs: {
				lang: 'en',
			},
			title: 'Nando Monja - Mejorar el mundo es aprender, crear y compartir',
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap' },
				{ rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/4.5.95/css/materialdesignicons.min.css' },
				{ rel: 'icon', href: '/favicon.png' }
			],
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0'},
				{ name: 'description', content: 'I am a Peruvian who loves its culture and gastronomy, I am passionate about how technology makes life easier if it is used correctly and I am determined to contribute to the development of a better world.' },
				{ name: 'og:title', content: 'Nando Monja - Mejorar el mundo es aprender, crear y compartir' },
				{ name: 'og:description', content: 'I am a Peruvian who loves its culture and gastronomy, I am passionate about how technology makes life easier if it is used correctly and I am determined to contribute to the development of a better world.'},
				{ name: 'og:url', content: 'https://nandomonja.com' },
				{ name: 'og:image', content: '/logo.png' },
				{ name: 'og:site_name', content: 'Nando Monja' },
				{ name: 'og:type', content: 'website' }
			]
		}
	}
}
</script>
