
import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import {pushMessage} from '../firebase'

const MessageField = ({ name, setText, text }) => {
    const [isComposed, setIsComposed] = useState()
    return (
        <TextField
            fullWidth={true}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                const text = e.target.value
                    if (text === '') return
                    if (isComposed) return 
                    pushMessage({name: 'にのさん', text})
                    setText('')
                e.preventDefault()
                }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
        />

    )
}

export default MessageField