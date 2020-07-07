<template>
	<div id="app">
		<Home />
	</div>
</template>

<script>
import Home from "./views/Home";
export default {
	name: "App",
	components: { Home }
};
</script>

<style>
:root {
	--primary-color: #00adb5;
	--background-primary-color: #1c1e23;
	--background-lighter-color: #33363f;
	--background-lightest-color: #3e424e;
	--font-color: #babbbf;
}

body {
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--font-color);
}
.unicon {
	cursor: pointer;
}
</style>
