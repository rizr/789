import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initDefaultText, setText, setSelectionRanges, resetSelectedWord } from '../../store/actions/text';
import { getSynonimAction } from '../../store/actions/synonim';
import './FileZone.css';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initDefaultText());
    }, []);

    const handleChange = e => {
        dispatch(setText(e.target.value));
    };

    const handleClick = () => {
        const selection = window.getSelection();
        const selectedWord = selection.toString();

        if (selectedWord.length) {
            const {startOffset, endOffset} = selection.getRangeAt(0);
            dispatch(getSynonimAction(selectedWord));
            dispatch(setSelectionRanges(startOffset, endOffset));
        } else {
            dispatch(resetSelectedWord());
        }
    };
    const text = useSelector(state => state.text.currentText);
    return (
        <div id="file-zone">
            <div
                id="file"
                contentEditable
                onClick={handleClick}
                onChange={handleChange}
                dangerouslySetInnerHTML={{__html: text}}
            />
        </div>
    );
}


