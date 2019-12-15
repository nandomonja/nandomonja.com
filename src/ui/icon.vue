<template>
	<span :class="customClass"></span>
</template>

<script>
import Vue from 'vue'

export default {
	props: {
		type: {
			type: String,
			required: false,
			default: 'mdi'
		},
		icon: {
			type: String,
			required: true
		},
		className: {
			type: String,
			required: false
		}
	},
	computed: {
		customClass() {
			return [
				'icon',
				this.type,
				`${this.type}-${this.icon}`,
				this.className
			]
		}
	}
}
</script>

<style scoped>
.icon {
	font-size: 24px;
}
</style>