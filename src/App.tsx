import React, { MouseEvent, useState } from 'react'
import './App.css'
import Button from './ui/shared/Button'
import ScrollContainer from './ui/shared/ScrollContainer'

function App() {
    const [disabled, setDisabled] = useState(false)
    const onClick = (evt: MouseEvent) => {
        console.log(evt)
        setDisabled(!disabled)
    }
    return (
        <div className='App'>
            <ScrollContainer height={50} width={150} scrollDirection='vertical'>
                <Button text='hello' onClick={onClick} disabled={disabled} />
                <Button text='reset' onClick={onClick} disabled={!disabled} />
            </ScrollContainer>
        </div>
    )
}

export default App
