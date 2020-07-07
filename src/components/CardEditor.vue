<template>
	<div class="cardEditor" @mousedown.self="close">
		<div class="content">
			<label class="label">Title</label>
			<input class="text-input" type="text" v-model="name" />

			<label class="label">Description</label>
			<textarea class="text-input text-area" v-model="description" />
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "CardEditor",
	props: {
		card: Object
	},
	computed: {
		name: {
			get() {
				return this.card.name;
			},
			set(name) {
				this.updateCard({ ...this.card, name });
			}
		},
		description: {
			get() {
				return this.card.description;
			},
			set(description) {
				this.updateCard({ ...this.card, description });
			}
		}
	},
	methods: {
		...mapActions(["setSelectedCardId", "updateCard"]),
		close() {
			this.setSelectedCardId(null);
		}
	}
};
</script>

<style scoped>
.cardEditor {
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(62, 66, 78, 0.8);
}
.content {
	background-color: var(--background-lighter-color);
	margin: 15% auto;
	padding: 0 20px 20px 20px;
	width: 80%;
	height: 50%;
}

.text-input {
	background-color: var(--background-lightest-color);
	outline: none;
	border: 1px solid var(--font-color);
	padding: 4px;
	width: 100%;
	box-sizing: border-box;
	resize: none;
}

.text-area {
	height: 100px;
}

.text-input,
.label {
	color: var(--font-color);
}

.label {
	margin-top: 20px;
	float: left;
	font-size: 1.2rem;
}
</style>
