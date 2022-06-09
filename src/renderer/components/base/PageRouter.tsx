import React, { Component } from 'react';

const styles = require('./PageRouter.css') as any;

interface PageRouterProps {
  children?: React.ReactNode
}

export default class PageRouter extends Component<PageRouterProps> {

  render() {
    return (
      <div className={styles.pageRouter}>
        {this.props.children}
      </div>
    )
  }
}