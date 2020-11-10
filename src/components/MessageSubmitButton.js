import React, { useState } from 'react'
import { IconButton } from '@material-ui/core/';
import {pushMessage} from '../firebase'
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({ inputEl, setText, text, name }) => {
    
    return (
        <IconButton disabled={text === ''} onClick={() => {
            pushMessage({ name, text })
            setText('')
            inputEl.current.focus()
        }}>
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButton