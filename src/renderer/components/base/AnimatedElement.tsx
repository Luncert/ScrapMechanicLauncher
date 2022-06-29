import React, { Component, CSSProperties, DOMAttributes } from 'react'
import { parseRgb, adjustBrightness } from './util'
import anime from 'animejs'

interface AnimatedElementProps extends DOMAttributes<HTMLDivElement> {
  animationBase?: AnimationConfig
  focusAnimation?: AnimationConfig | boolean
  activeAnimation?: AnimationConfig | boolean
  hoverAnimation?: AnimationConfig | boolean
  /**
   * Highest priority as animation config.
   */
  animation?: AnimationProps
  
  className?: string
  getRef?: (ref: React.RefObject<HTMLDivElement>) => void
  style?: CSSProperties | undefined
}

export interface AnimationProps {
  animationBase?: AnimationConfig
  focusAnimation?: AnimationConfig | boolean
  activeAnimation?: AnimationConfig | boolean
  hoverAnimation?: AnimationConfig | boolean
}

interface AnimationConfig {
  color?: string
  backgroundColor?: string
}

export default class AnimatedElement extends Component<AnimatedElementProps> {

  protected ref: React.RefObject<HTMLDivElement>
  private color: string
  private backgroundColor: string
  private hovered: boolean
  private focused: boolean

  private animationProps: AnimationProps
  private onMouseEnter: () => void
  private onMouseLeave: () => void
  private onMouseDown: () => void
  private onMouseUp: () => void
  private onFocus: () => void
  private onBlur: () => void

  constructor(props: AnimatedElementProps) {
    super(props)
    this.ref = React.createRef()

    if (this.props.getRef) {
      this.props.getRef(this.ref)
    }

    this.animationProps = Object.assign({},
      {focus: props.focusAnimation, active: props.activeAnimation, hover: props.hoverAnimation} as AnimationProps,
      props.animation, props.style)

    this.detectInputColor()

    if (this.animationProps.hoverAnimation) {
      this.onMouseEnter = this.startHoverAnimation.bind(this)
      this.onMouseLeave = this.stopHoverAnimation.bind(this)
    }

    if (this.animationProps.activeAnimation) {
      this.onMouseDown = this.startActiveAnimation.bind(this)
      this.onMouseUp = this.stopActiveAnimation.bind(this)
    }

    if (this.animationProps.focusAnimation) {
      this.onFocus = this.startFocusAnimation.bind(this)
      this.onBlur = this.stopFocusAnimation.bind(this)
    }

    // if (!this.background) {
    //   this.background = 'rgb(56, 56, 56)'
    // }

    // if (!this.hover) {
    //   this.hover = 'rgb(80, 80, 80)'
    // }

    // if (!this.active) {
    //   this.active = 'rgb(100, 100, 100)'
    // }
  }

  private detectInputColor() {
    let base = this.animationProps.animationBase
    let style = this.props.style
    if (base) {
      this.color = base.color
      this.backgroundColor = base.backgroundColor
    } else if (style) {
      this.color = style.color
      this.backgroundColor = style.backgroundColor
    }
  }

  componentDidMount() {
    const style = getComputedStyle(this.ref.current)
    // TODO if target is selected and has selected style, what we record there is not the original style of target
    // this.color = style.color
    this.backgroundColor = style.backgroundColor
  }

  protected startFocusAnimation() {
    this.focused = true
    this.ref.current.style.backgroundColor = this.getFocusBackgroundColor()
  }

  protected stopFocusAnimation() {
    this.focused = false
    this.ref.current.style.backgroundColor = this.backgroundColor
  }

  protected startHoverAnimation() {
    this.hovered = true
    anime({
      targets: this.ref.current,
      color: this.getConfiguredOrDefaultColor(this.props.hoverAnimation),
      backgroundColor: this.getHoverBackgroundColor(),
      easing: 'easeInOutSine',
      duration: 150
    })
  }

  protected stopHoverAnimation() {
    let color = this.getConfiguredOrDefaultColor(this.props.focusAnimation)
    let backgroundColor = this.focused && this.animationProps.focusAnimation ? this.getFocusBackgroundColor() : this.backgroundColor
    this.hovered = false
    anime({
      targets: this.ref.current,
      color: color,
      backgroundColor: backgroundColor,
      easing: 'easeInOutSine',
      duration: 150
    })
  }

  protected startActiveAnimation() {
    anime({
      targets: this.ref.current,
      color: this.hovered ? this.getConfiguredOrDefaultColor(this.props.activeAnimation) : this.color,
      backgroundColor: this.getActiveBackgroundColor(),
      easing: 'easeInOutSine',
      duration: 100
    })
  }

  protected stopActiveAnimation() {
    let color = this.getConfiguredOrDefaultColor(this.props.hoverAnimation)
    let backgroundColor = this.hovered && this.animationProps.hoverAnimation ? this.getHoverBackgroundColor() : this.backgroundColor
    anime({
      targets: this.ref.current,
      color: color,
      backgroundColor: backgroundColor,
      easing: 'easeInOutSine',
      duration: 100
    })
  }

  private getConfiguredOrDefaultColor(config: boolean | AnimationConfig) {
    return  config && typeof(config) != 'boolean' && config.color ? config.color: this.color
  }

  private getHoverBackgroundColor() {
    return this.getBackgroundColor(this.animationProps.hoverAnimation, 10)
  }

  private getFocusBackgroundColor() {
    return this.getBackgroundColor(this.animationProps.focusAnimation, 20)
  }

  private getActiveBackgroundColor() {
    return this.getBackgroundColor(this.animationProps.activeAnimation, 30)
  }

  private getBackgroundColor(config: boolean | AnimationConfig, percentage: number) {
    if (typeof(config) != 'boolean' && config.backgroundColor) {
      return config.backgroundColor
    }
    return adjustBrightness(parseRgb(this.backgroundColor), percentage)
  }

  render() {
    let props: any = Object.assign({}, this.props)
    delete props['activeAnimation']
    delete props['hoverAnimation']
    delete props['focusAimation']
    delete props['animationBase']
    delete props['animation']
    delete props['getRef']
    props.ref = this.ref
    props.onMouseEnter = this.onMouseEnter
    props.onMouseLeave = this.onMouseLeave
    props.onMouseDown = this.onMouseDown
    props.onMouseUp = this.onMouseUp
    props.onFocus = this.onFocus
    props.onBlur = this.onBlur
    props.style = Object.assign(props.style || {}, {color: this.color, backgroundColor: this.backgroundColor})
    return React.createElement('div', props, this.props.children)
  }
}