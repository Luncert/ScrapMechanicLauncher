import React, { Component } from 'react';
import AnimatedElement from './AnimatedElement';
import { names } from './util';
import '@assets/icon/iconfont.css';
import './Sidebar.css';

interface SideBarProps {
  children?: string | JSX.Element | JSX.Element[]
}

export default class Sidebar extends Component<SideBarProps> {

  render() {
    return (
      <div className='sidebar'>
        { this.props.children }
      </div>
    )
  }
}

interface SidebarItemProps {
  iconName: string
}

export class SidebarItem extends Component<SidebarItemProps> {

  render() {
    return (
      <AnimatedElement className='item'
        animation={{
          base: {color: 'rgb(95, 95, 95)', backgroundColor: 'rgb(56, 56, 56)'},
          active: {color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(82, 82, 82)'},
          hover: {color: 'rgb(190, 190, 190)'}
        }}>
        <i className={names('iconfont', this.props.iconName)}></i>
      </AnimatedElement>
    )
  }
}