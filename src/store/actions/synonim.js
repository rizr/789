import * as actionTypes from './actionTypes';
import { getSynonim } from '../../utils/http';

export function getSynonimAction(word) {
    return async (dispatch, getState, api) => {
        dispatch({ type: actionTypes.GET_SYNONIM_START, payload: { word } });
        const { data } = await getSynonim(word.trim());
        dispatch({ type: actionTypes.GET_SYNONIM_SUCCESS, payload: { words: data.map(v => v.word) }});
    }
}