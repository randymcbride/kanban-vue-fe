<template>
	<div class="board">
		<Column v-for="column of allColumns" :column="column" :key="column.id" />
	</div>
</template>

<script>
import Column from "./Column";
import { mapGetters } from "vuex";

export default {
	name: "Board",
	components: { Column },
	computed: mapGetters(["allColumns"])
};
</script>

<style scoped>
.board {
	background: var(--background-primary-color);
	height: 100vh;
	box-sizing: border-box;
	display: flex;
	padding: 20px;
}
</style>
