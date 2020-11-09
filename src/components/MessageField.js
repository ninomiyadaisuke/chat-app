
import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const MessageField = ({ name, setText, text }) => {
    const [isComposed, setIsComposed] = useState()
    console.log({text});
    return (
        <TextField
            fullWidth={true}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                const text = e.target.value
                    if (text === '') return
                    if (isComposed) return 
                    console.log('push message to firebase');
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