<template>
	<div class="home">
		<Board />
		<CardEditor v-if="selectedCard" :card="selectedCard" />
	</div>
</template>

<script>
import Board from "../components/Board";
import CardEditor from "../components/CardEditor";
import { mapGetters } from "vuex";

export default {
	name: "Home",
	components: { Board, CardEditor },
	computed: {
		...mapGetters(["selectedCard"])
	}
};
</script>

<style scoped>
.home {
	height: 100vh;
}
</style>
