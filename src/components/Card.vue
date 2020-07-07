<template>
	<div class="card">
		<div class="header">
			<div class="title">{{ card.name }}</div>
			<div class="action">
				<unicon
					name="edit"
					fill="#00adb5"
					width="16"
					@click="handleEditClick"
				></unicon>
			</div>
		</div>
		<div class="description">{{ card.description }}</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Card",
	props: { card: Object },
	methods: {
		...mapActions(["setSelectedCardId"]),
		handleEditClick() {
			this.setSelectedCardId(this.card.id);
		}
	}
};
</script>

<style scoped>
.card {
	background: var(--background-secondary-color);
	height: 140px;
	overflow: hidden;
	width: 280px;
	text-align: left;
	margin-bottom: 10px;
	border-radius: 8px;
	padding: 12px;
	box-sizing: border-box;
	border: 1px solid var(--font-color);
	cursor: grab;
}
.title {
	font-size: 1.2rem;
	margin-bottom: 12px;
}
.description {
	font-size: 0.8rem;
	height: 75px;
	overflow: hidden;
}
.header {
	display: flex;
	justify-content: space-between;
}
</style>
