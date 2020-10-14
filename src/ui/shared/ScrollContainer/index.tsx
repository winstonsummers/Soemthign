import React, { useLayoutEffect, useRef } from 'react'
import ScrollItem from './ScollItem'

type TFlowDirection = 'top' | 'bottom'

interface IScrollContainer {
    children: React.ReactNode[]
    height?: string | number
    width?: string | number
    className?: string
    flowDirection?: TFlowDirection
    scrollToBottom?: boolean
}

const ScrollContainer: React.FC<IScrollContainer> = ({
    children,
    className,
    height = 'auto',
    width = 'auto',
    flowDirection = 'bottom',
    scrollToBottom = true
}) => {
    const scrollStyling: any = {
        scrollBehavior: 'smooth',
        height,
        width,
        overflowX: 'hidden',
        overflowY: 'scroll'
    }

    const endOfContainer = useRef<HTMLDivElement>(null)
    const numberOfChildren = children.length

    useLayoutEffect(() => {
        if (scrollToBottom && endOfContainer.current !== null) {
            endOfContainer.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [numberOfChildren, scrollToBottom])

    const content = children.map(
        (item, index) => {
            return (
                <ScrollItem
                    key={index + 'of' + numberOfChildren}
                    item={item}
                />
            )
        },
    )

    const endOfContainerElement = <ScrollItem key={'endof' + numberOfChildren} item={<div ref={endOfContainer} /> } />

    if (flowDirection === 'bottom') {
        content.push(endOfContainerElement)
    } else {
        content.unshift(endOfContainerElement)
    }

    return (
        <div style={scrollStyling} className={className}>
            {content}
        </div>
    )
}

export default ScrollContainer
