<template>
	<nav class="toolbar">
		<slot />
	</nav>
</template>

<script>
import Vue from 'vue'

export default {}
</script>

<style scoped>
.toolbar {
	width: 100%;
	height: 50px;
	position: sticky;
	top: 0;
	box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.25);
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
}
</style>