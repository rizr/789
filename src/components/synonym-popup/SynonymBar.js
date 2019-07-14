import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replaceWord } from '../../store/actions/text';
import './SynonymBar.css';

export default () => {
    const dispatch = useDispatch();
    const handleChooseSynonym = e => {
        dispatch(replaceWord(e.target.innerHTML));
    }
    const possibleWords = useSelector(state => state.synonim.possibleWords);
    const selectedWord = useSelector(state => state.synonim.word);

    return (
        <div id="synonym-bar">
            {!!selectedWord.length && possibleWords && !!possibleWords.length && (
                <div>
                    Synonyms:
                    <div id="synonym-scroll">
                        {possibleWords.map(w => (
                            <span onClick={handleChooseSynonym} key={`${selectedWord}${w}`}>{w}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
