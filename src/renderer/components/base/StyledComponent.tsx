import React, { Component, CSSProperties } from 'react';

export interface StyledComponentProps extends CSSProperties {
    shadow?: boolean
}

export default abstract class StyledComponent<P extends StyledComponentProps = {}, S = {}> extends Component<P, S> {
    constructor(props: P) {
        super(props)
        this.state = {} as S
    }

    protected parseStyle(): React.CSSProperties {
        const { shadow } = this.props

        let style = new Map()

        if (shadow) {
            style.set('boxShadow', this.props.shadow ? '0px 0px 3px black' : '')
        }

        return Object.assign({}, this.props, Object.fromEntries(style))
    }
}