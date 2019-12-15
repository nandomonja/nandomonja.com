<template>
	<div>
		<!-- main -->
		<div class="section row col-res">
			<div class="section col flex-center">
				<h1 class="text text-h1 text-center">Mejorar el mundo es aprender, crear y compartir</h1>
				<p class="text text-p text-center">Web developer</p>
				<div class="row flex-center">
					<ui-button type="fill" color="default" href="https://twitter.com/nando_monja" target="_blank">
						<ui-icon icon="twitter" />
					</ui-button>
					<ui-button type="fill" color="default" href="https://github.com/nandomonja" target="_blank">
						<ui-icon icon="github-circle" />
					</ui-button>
				</div>
			</div>
			<div class="section col flex-center">
				<i-code-review class="fig" />
			</div>
		</div>
		<!-- about -->
		<div class="section row col-res">
			<div class="section col flex-center">
				<h2 class="text text-h1 text-center">About me</h2>
				<p class="text text-p text-justify">I am a Peruvian who loves its culture and gastronomy, I am passionate about how technology makes life easier if it is used correctly and I am determined to contribute to the development of a better world.</p>
			</div>
			<div class="section col flex-center">
				<i-about-me class="fig" />
			</div>
		</div>
		<!-- footer -->
		<footer class="footer row col-res">
			<div class="col">
				<span class="text text-title p-10">Social networks</span>
				<ui-button href="https://twitter.com/nando_monja" target="_blank">
					<ui-icon icon="twitter" />
					<span class="ml-5">Twitter</span>
				</ui-button>
				<ui-button href="https://github.com/nandomonja" target="_blank">
					<ui-icon icon="github-circle" />
					<span class="ml-5">GitHub</span>
				</ui-button>
				<ui-button href="https://www.linkedin.com/in/nandomonja/" target="_blank">
					<ui-icon icon="linkedin-box" />
					<span class="ml-5">LinkedIn</span>
				</ui-button>
			</div>
		</footer>
	</div>
</template>

<script>
import Vue from 'vue'

import iCodeReview from '@/components/svg/code-review.vue';
import iAboutMe from '@/components/svg/about-me.vue';

export default {
	components: {
		iCodeReview,
		iAboutMe
	}
}
</script>
