import React from 'react'
import mojs from 'mo-js'
import PropTypes from 'prop-types'

export default class Burst extends React.Component {  
  shouldComponentUpdate (nextProps) {
    const { isActive } = this.props
    if (nextProps.isActive !== isActive && isActive) this._burst.replay()
    return false
  }

  componentDidMount () {
    this._burst = new mojs.Burst({
      top: 16,
      left: 12,
      parent: this.props.parent,
      radius: { 4: 30 },
      angle: 45,
      count: 6,
      isShowEnd: false,
      children: {
        radius: 5,
        fill: 'red',
        scale: { 1: 0, easing: 'sin.in' },
        pathScale: [0.7, null],
        degreeShift: [13, null],
        duration: [500, 700],
        isForce3d: true
      }
    })
  }

  render () {
    return (<div></div>)
  }
}

Burst.propTypes = {
  isActive: PropTypes.bool,
  parent: PropTypes.string.isRequired
}
