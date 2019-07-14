import * as actionTypes from './actionTypes';
import getMockText from '../../text.service';

export function applyDecors(type) {
    return (dispatch, getState, api) => {
        dispatch({ type: actionTypes.APPLY_DECORS, payload: { type} });
        document.execCommand(type);
    }
}

export function initDefaultText() {
    return async (dispatch, getState, api) => {
        const text = await getMockText();
        dispatch(setText(text));
    }
}

export function setText(text) {
    return (dispatch, getState, api) => {
        dispatch({ type: actionTypes.SET_TEXT, payload: { text} });
    }
}

export function setSelectionRanges (start, end) {
    return (dispatch, getState, api) => {
        dispatch({ type: actionTypes.SET_SELECTION_RANGE, payload: { start, end } });
    }
}

export function replaceWord (word) {
    return (dispatch, getState, api) => {
        dispatch({ type: actionTypes.REPLACE_WORD, payload: { word} });
    }
}

export function resetSelectedWord() {
    return (dispatch, getState, api) => {
        dispatch({ type: actionTypes.RESET_SYNONIM_WORD });
    }
}