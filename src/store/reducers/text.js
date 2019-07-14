import * as actionsTypes from '../actions/actionTypes'

const initState = {
    currentText: '',
    selectionStartAt: null,
    selectionEndAt: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionsTypes.SET_SELECTION_RANGE: return {
            ...state,
            selectionStartAt: action.payload.start,
            selectionEndAt: action.payload.end
        };

        case actionsTypes.SET_TEXT: return {
            ...state,
            currentText: action.payload.text
        };

        case actionsTypes.REPLACE_WORD: return {
            ...state,
            currentText: state.currentText.slice(0, state.selectionStartAt) + action.payload.word + state.currentText.slice(state.selectionEndAt)
        }

        default: return { ...state }
    }
}