import Vue from 'vue';
import Vuex from 'vuex';
import { UPDATE_CARDS, SET_SELECTED_CARD_ID, UPDATE_CARD } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		columns: {
			col1: { id: "col1", name: "Column 1", cardIds: ["card1", "card2"] },
			col2: { id: "col2", name: "Column 2", cardIds: [] }
		},
		columnIds: ["col1", "col2"],
		cards: {
			card1: {
				id: "card1",
				name: "Card 1",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			},
			card2: {
				id: "card2",
				name: "Card 2",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				taskIds: ["task1", "task2"]
			},
		},
		tasks: {
			task1: { id: "task1", name: "task 1", isCompleted: false },
			task2: { id: "task2", name: "task 2", isCompleted: false },
		},
		selectedCardId: null
	},
	mutations: {
		[UPDATE_CARDS](state, { columnId, cardIds }) {
			const col = state.columns[columnId];
			state.columns[columnId] = { ...col, cardIds };
		},
		[SET_SELECTED_CARD_ID](state, id) {
			state.selectedCardId = id;
		},
		[UPDATE_CARD](state, update) {
			const card = state.cards[update.id];
			card.name = update.name;
			card.description = update.description;
		}
	},
	actions: {
		updateCards({ commit }, { cards, column }) {
			commit(UPDATE_CARDS, {
				cardIds: cards.map(c => c.id),
				columnId: column.id
			});
		},
		setSelectedCardId({ commit }, id) {
			commit(SET_SELECTED_CARD_ID, id);
		},
		updateCard({ commit }, card) {
			commit(UPDATE_CARD, card);
		}
	},
	getters: {
		allColumns(state) {
			return state.columnIds.reduce((columns, id) => {
				const column = state.columns[id];
				column.cards = column.cardIds.map(cardId => state.cards[cardId]);
				columns.push(column);
				return columns;
			}, []);
		},
		selectedCard(state) {
			return state.cards[state.selectedCardId];
		}
	}
});
