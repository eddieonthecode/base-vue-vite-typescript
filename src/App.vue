<script setup lang="ts">
	import { EmployeeAPI } from "@/apis/components";
	import { BButton } from "@/components";
	import Header from "@/layouts/header.vue";

	if (false) EmployeeAPI.GetAll();
</script>

<template>
	<Header></Header>
	<router-link to="/">Home</router-link> |
	<router-link to="/about">About</router-link> |
	<router-link to="/employee">Employee</router-link>
	<h1>{{ $t("i18nCommon.Hello") }}</h1>
	<h1>Store vuex {{$store.state.message}}</h1>
	<router-view />
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
