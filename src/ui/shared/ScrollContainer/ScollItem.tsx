import React from 'react'

interface IScrollItem {
    item: React.ReactNode
}

const ScrollItem: React.FC<IScrollItem> = ({ item }) => {
    return <div style={{display: 'inline-block'}}>{item}</div>
}

export default ScrollItem
