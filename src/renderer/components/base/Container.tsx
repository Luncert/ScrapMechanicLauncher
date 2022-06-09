  
import React, { Component } from 'react';

const styles = require('./Container.css') as any

interface ContainerProps {
  children?: React.ReactNode
}

export default class Container extends Component<ContainerProps> {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {this.props.children}
        </div>
      </div>
    )
  }
}