<template>
	<div class="column">
		<div class="title">{{ column.name }}</div>
		<Draggable v-model="cards" class="cards" ghost-class="ghost" group="cards">
			<Card v-for="card of column.cards" :key="card.id" :card="card" />
		</Draggable>
	</div>
</template>

<script>
import Card from "./Card";
import Draggable from "vuedraggable";
import { mapActions } from "vuex";

export default {
	name: "Column",
	props: {
		column: Object
	},
	components: { Card, Draggable },
	computed: {
		cards: {
			get() {
				return this.column.cards.slice();
			},
			set(cards) {
				this.updateCards({ cards, column: this.column });
			}
		}
	},
	methods: {
		...mapActions(["updateCards"])
	}
};
</script>

<style scoped>
.column {
	background: var(--background-lightest-color);
	margin-left: 20px;
	border-radius: 8px;
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	font-size: 1.5rem;
	padding: 4px;
}

.cards {
	min-height: 152px;
	min-width: 280px;
}

.ghost {
	opacity: 0.2;
	background: var(--font-color);
}
</style>
