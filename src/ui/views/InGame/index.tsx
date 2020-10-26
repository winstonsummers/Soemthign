import React, { useState } from 'react'
import Button from '../../shared/Button'
import ScrollContainer from '../../shared/ScrollContainer'
import './index.css'

interface IInGame {
    something: boolean
}

const InGame: React.FC<IInGame> = () => {
    const [items, addItem] = useState([<span>left</span>])
    const item = <span>item</span>

    return (
        <>
            <ScrollContainer className='left panel'>{items}</ScrollContainer>
            <ScrollContainer className='right panel'>
                <Button
                    disabled={false}
                    text='add item'
                    onClick={() => {
                        addItem([item, ...items])
                    }}
                />
                <span>right</span>
            </ScrollContainer>
        </>
    )
}

export default InGame
