import React from 'react'
import { TScrollDirection } from './'

interface IScrollItem {
    scrollDirection: TScrollDirection
    item: React.ReactNode
}

const ScrollItem: React.FC<IScrollItem> = ({ scrollDirection, item }) => {
    return scrollDirection === 'vertical' ? (
        <div>{item}</div>
    ) : (
        <span>{item}</span>
    )
}

export default ScrollItem
