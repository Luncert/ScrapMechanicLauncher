import React from 'react';
import AnimatedElement, { AnimationProps } from './AnimatedElement';
import StyledComponent, { StyledComponentProps } from './StyledComponent';
import './Tab.scss';
import { names } from './util';

interface TabProps extends StyledComponentProps {
    onSelect: (tabName: string) => void
    children?: JSX.Element | JSX.Element[]
}

interface TabItemProps extends StyledComponentProps, AnimationProps {
    name: string
    children?: string | JSX.Element | JSX.Element[]
}

interface TabState {
    selected: string
}

export class Tab extends StyledComponent<TabProps, TabState> {

    constructor(props: TabProps) {
        super(props)
        this.state = {
            selected: null
        }
    }

    handleSelect(tabName: string) {
        this.setState({selected: tabName})
        this.props.onSelect(tabName)
    }

    render() {
        const { selected } = this.state
        const children: JSX.Element[] = this.props.children.constructor.name == 'Array' ? (this.props.children as JSX.Element[]) : [this.props.children as JSX.Element]

        return (
            <div className='tab' style={this.parseStyle()}>
                {children.map((child, i) =>
                    (<div key={'tab-item-wrapper' + i} className={selected == child.props.name || selected == null && i == 0 ? 'selected-tab-item' : ''} onClick={() => this.handleSelect(child.props.name)}>{child}</div>))}
            </div>
        )
    }
}

export class TabItem extends StyledComponent<TabItemProps> {

    render() {
        return (
            <AnimatedElement
                className='tab-item'
                style={this.parseStyle()}
                animation={this.props}>
                {this.props.children}
            </AnimatedElement>
        )
    }
}