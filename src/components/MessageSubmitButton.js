import React, { useState } from 'react'
import { IconButton } from '@material-ui/core/';
import {pushMessage} from '../firebase'
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({ setText, text, name }) => {
    
    return (
        <IconButton disabled={text === ''} onClick={() => {
            pushMessage({ name: 'にのさん', text })
            setText('')
        }}>
            <SendIcon />
        </IconButton>
    )
}

export default MessageSubmitButton