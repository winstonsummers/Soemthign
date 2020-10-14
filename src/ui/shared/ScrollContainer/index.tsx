import React, { useLayoutEffect, useRef } from 'react'

type TScrollDirection = 'horizontal' | 'vertical' | 'both' | 'auto' | 'hidden'
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
    scrollDirection = 'auto',
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
        case 'both':
            scrollStyling['overflow'] = 'scroll'
            break
        case 'auto':
            scrollStyling['overflow'] = 'auto'
            break
        case 'hidden':
            scrollStyling['overflow'] = 'hidden'
            break
    }

    const endOfContainer = useRef<HTMLDivElement>(null)
    const numberOfChildren = [children as []].length

    useLayoutEffect(() => {
        if (endOfContainer.current !== null) {
            endOfContainer.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [numberOfChildren])

    const content: Element | React.ReactNode[] = [children]
    const endOfContainerDiv = <div ref={endOfContainer} />

    if (flowDirection === 'bottom') {
        content.push(endOfContainerDiv)
    } else {
        content.unshift(endOfContainerDiv)
    }

    return (
        <div style={scrollStyling} className={className}>
            {content}
        </div>
    )
}

export default ScrollContainer
