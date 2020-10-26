import React, { useState } from 'react'
import Button from '../../shared/Button'

const UserInput: React.FC = () => {
    const [textInput, updateText] = useState('')
    const updateWrap = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateText(e.target.value)
    }

    const isDisabled = textInput.length > 0

    const onSubmit = (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<Element, MouseEvent>,
    ) => {
        e.preventDefault()
        if (isDisabled) {
            return null
        }
        // this is where we will validate/sanatize the input
        return textInput
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={textInput} onChange={updateWrap} type='text'></input>
            <Button text='submit' onClick={onSubmit} disabled={isDisabled} />
        </form>
    )
}

export default UserInput
