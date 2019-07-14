import React from 'react';
import { SynonymBar } from '../';
import { useDispatch } from 'react-redux';
import { applyDecors } from '../../store/actions/text';
import './ControlPanel.css';

export default () => {
    const dispatch = useDispatch();

    const handleClick = type => {
        dispatch(applyDecors(type));
    }

    return (
        <div id="control-panel">
            <div id="format-actions">
                <button className="format-action" type="button" onClick={() => handleClick('bold')}><b>B</b>
                </button>
                <button className="format-action" type="button" onClick={() => handleClick('italic')}><i>I</i>
                </button>
                <button className="format-action" type="button" onClick={() => handleClick('underline')}><u>U</u>
                </button>
            </div>
            <SynonymBar />
        </div>
    );
}
