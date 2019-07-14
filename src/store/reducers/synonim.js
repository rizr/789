import * as actionsTypes from '../actions/actionTypes'

const initState = {
    word: '',
    possibleWords: [],
    isLoading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionsTypes.GET_SYNONIM_START: return {
            ...state,
            word: action.payload.word,
            isLoading: true
        };

        case actionsTypes.GET_SYNONIM_SUCCESS: return {
            ...state,
            possibleWords: action.payload.words,
            isLoading: false
        };

        case actionsTypes.RESET_SYNONIM_WORD: return {
            ...initState
        };

        default: return { ...state }
    }
}