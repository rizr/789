import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initDefaultText, setText, setSelectionRanges, resetSelectedWord } from '../../store/actions/text';
import { getSynonimAction } from '../../store/actions/synonim';
import './FileZone.css';

export default () => {
    const dispatch = useDispatch();
    let fileRef;

    useEffect(() => {
        dispatch(initDefaultText());
    }, []);

    function placeCaretAtEnd(el) {
        el.focus();
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    const handleChange = e => {
        dispatch(setText(fileRef.innerText));
        placeCaretAtEnd(fileRef);
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
                ref={(ref) => fileRef = ref}
                contentEditable
                onClick={handleClick}
                onInput={handleChange}
            >{text}</div>
        </div>
    );
}


