<template>
	<div class="app">
		<slot />
	</div>
</template>

<script>
import Vue from 'vue'

export default {}
</script>

<style>
* {
	box-sizing: border-box;
}

body {
	padding: 0px;
	margin: 0px;
	font-size: 14px;
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
	overflow-x: hidden;
	overflow-y: scroll;
}

.app {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-flow: row wrap;
}

.section {
	width: 100%;
	padding: 1rem;
}

.section .fig {
	max-width: 640px;
	width: 100%;
	height: auto;
	padding: 1rem;
}

.footer {
	width: 100%;
	background-color: #f5f5f5;
	padding: 1rem;
}

.row, .col {
	display: flex;
}
.row {
	flex-direction: row;
}
.col {
	flex-direction: column;
}

.flex-wrap {
	flex-wrap: wrap;
}
.flex-center {
	justify-content: center;
	align-items: center;
}
.flex-avatar {
	flex: 0 0 auto;
}
.flex-content {
	flex: 1 1 auto;
}

.j-c-start {
	justify-content: flex-start;
}
.j-c-center {
	justify-content: center;
}
.j-c-end {
	justify-content: flex-end;
}
.j-c-between {
	justify-content: space-between;
}
.j-c-around {
	justify-content: space-around;
}

.a-i-start {
	align-items: flex-start;
}
.a-i-center {
	align-items: center;
}
.a-i-end {
	align-items: flex-end;
}

.text {
	text-decoration: none;
	color: #343843;
	display: block;
}

.text.text-h1 {
	margin: 0.5em 0.25em;
	font-size: 28px;
	font-weight: 500;
}

.text.text-h2 {
	margin: 0.5em 0.25em;
	font-size: 24px;
	font-weight: 500;
}

.text.text-p {
	margin: 0.5em 0.25em;
	font-size: 20px;
	font-weight: 400;
}

.text.text-title {
	font-size: 16px;
	font-weight: 500;
}

.text.text-subtitle {
	font-size: 14px;
	font-weight: 400;
}

.text.text-center {
	text-align: center;
}

.text.text-justify {
	text-align: justify;
}

.o-hidden {
	overflow: hidden;
}

.m-5 {
	margin: 5px;
}
.m-10 {
	margin: 10px;
}
.m-20 {
	margin: 20px;
}

.ml-5 {
	margin-left: 5px;
}
.ml-10 {
	margin-left: 10px;
}
.ml-20 {
	margin-left: 20px;
}

.mr-5 {
	margin-right: 5px;
}
.mr-10 {
	margin-right: 10px;
}
.mr-20 {
	margin-right: 20px;
}

.p-5 {
	padding: 5px;
}
.p-10 {
	padding: 10px;
}
.p-20 {
	padding: 20px;
}

.logo {
	margin-left: 10px;
	font-size: 14px;
	font-weight: bold;
	font-family: 'Montserrat';
	color: #343843;
}

@media screen and (max-width: 1080px) {
	.row.col-res {
		flex-flow: row wrap;
	}
	
	.section .fig {
		max-width: 480px;
	}
}

@media screen and (max-width: 512px) {
	.section .fig {
		max-width: 320px;
	}
}
</style>