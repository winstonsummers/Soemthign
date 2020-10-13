import React from 'react'

type TDirection = 'horizontal' | 'vertical' | 'both' | 'auto' | 'hidden'

interface IScrollContainer {
    direction?: TDirection
    height?: string | number
    width?: string | number
    className?: string
}

// tslint:disable-next-line: variable-name
const ScrollContainer: React.FC<IScrollContainer> = ({
    children,
    className,
    direction = 'auto',
    height = 'auto',
    width = 'auto',
}) => {
    const scrollStyling: any = {
        scrollBehavior: 'smooth',
        height,
        width,
    }

    switch (direction) {
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

    // TODO: add logic for scroll to bottom and such

    return (
        <div style={scrollStyling} className={className}>
            {children}
        </div>
    )
}

export default ScrollContainer
