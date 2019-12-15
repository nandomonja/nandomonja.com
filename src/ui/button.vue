<template>
	<nuxt-link v-if="to" :to="to" :class="customClass" :style="customStyle" @click="onClick">
		<slot />
	</nuxt-link>
	<a v-else-if="href" :href="href" :target="target" :class="customClass" :style="customStyle" @click="onClick">
		<slot />
	</a>
	<button v-else :class="customClass" :style="customStyle" @click="onClick">
		<slot />
	</button>
</template>

<script>
import Vue from 'vue'

export default {
	props: {
		to: {
			type: String,
			required: false
		},
		href: {
			type: String,
			required: false
		},
		target: {
			type: String,
			required: false
		},
		type: {
			type: String,
			required: false,
			default: 'flat'
		},
		color: {
			type: String,
			required: false,
			default: 'inherit'
		},
		className: {
			type: String,
			required: false
		},
		styles: {
			type: Object,
			required: false
		}
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	},
	computed: {
		customClass() {
			return [
				'button',
				`button-${this.type}`,
				`button-${this.color}`,
				this.className
			]
		},
		customStyle() {
			return {
				...this.styles
			}
		}
	}
}
</script>

<style scoped>
.button {
	width: auto;
	height: 2.5rem;
	padding: 0px 15px;
	margin: 5px;
	font-size: 14px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	text-decoration: none;
	border-radius: 1.5em;
	border: none;
	outline: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s;
}


/* button flat inherit */
.button.button-flat.button-inherit {
	color: #343843;
	background-color: #e0e0e0ff;
}
.button.button-flat.button-inherit:hover {
	background-color: #e0e0e0e6;
}
.button.button-flat.button-inherit:active {
	background-color: #e0e0e0cc;
}

/* button fill inherit */
.button-fill {
	color: #ffffff;
}
.button.button-fill.button-inherit {
	background-color: #9e9e9eff;
}
.button.button-fill.button-inherit:hover {
	background-color: #9e9e9ee6;
}
.button.button-fill.button-inherit:active {
	background-color: #9e9e9ecc;
}

.button.button-fill.button-default {
	background-color: #0088ffFF;
}
.button.button-fill.button-default:hover {
	background-color: #0088ffE6;
}
.button.button-fill.button-default:active {
	background-color: #0088ffCC;
}

.button.button-flat.button-default {
	color: #0088ffFF;
	background-color: #0088ff00;
}
.button.button-flat.button-default:hover {
	background-color: #0088ff1A;
}
.button.button-flat.button-default:active {
	background-color: #0088ff33;
}

.button.button-outline.button-default {
	border: 1.5px solid #0088ffFF;
	color: #0088ffFF;
	background-color: #0088ff00;
}
.button.button-outline.button-default:hover {
	background-color: #0088ff1A;
}
.button.button-outline.button-default:active {
	background-color: #0088ff33;
}
</style>
