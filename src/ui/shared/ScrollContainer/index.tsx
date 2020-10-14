import React, { useLayoutEffect, useRef } from 'react'
import ScrollItem from './ScollItem'

export type TScrollDirection = 'horizontal' | 'vertical'
type TFlowDirection = 'top' | 'bottom'

interface IScrollContainer {
    scrollDirection?: TScrollDirection
    height?: string | number
    width?: string | number
    className?: string
    flowDirection?: TFlowDirection
}

const ScrollContainer: React.FC<IScrollContainer> = ({
    children,
    className,
    scrollDirection = 'vertical',
    height = 'auto',
    width = 'auto',
    flowDirection = 'bottom',
}) => {
    const scrollStyling: any = {
        scrollBehavior: 'smooth',
        height,
        width,
    }

    switch (scrollDirection) {
        case 'horizontal':
            scrollStyling['overflowX'] = 'scroll'
            scrollStyling['overflowY'] = 'hidden'
            break
        case 'vertical':
            scrollStyling['overflowY'] = 'scroll'
            scrollStyling['overflowX'] = 'hidden'
            break
    }

    const endOfContainer = useRef<HTMLDivElement>(null)
    const numberOfChildren = [children as []].length

    useLayoutEffect(() => {
        if (endOfContainer.current !== null) {
            endOfContainer.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [numberOfChildren])

    const content: Element | React.ReactNode[] = [children as []].map(
        (item) => {
            return <ScrollItem scrollDirection={scrollDirection} item={item} />
        },
    )
    const endOfContainerElement =
        scrollDirection === 'vertical' ? (
            <div ref={endOfContainer} />
        ) : (
            <span ref={endOfContainer} />
        )

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
