import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'


function Wheel(props) {
  const { position, moveClockwise, moveCounterClockwise } = props

  return (
    <div id="wrapper">
      <div id="wheel">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`cog ${position === i ? 'active' : ''}`} 
            style={{ "--i": i }}
          >
            {position === i ? 'B' : ''}
          </div>
        ))}
      </div>
      <div id="keypad">
        <button onClick={moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={moveClockwise} id="clockwiseBtn" >Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    position: state.wheel
  }
}

const mapDispatchToProps = {
  moveClockwise,
  moveCounterClockwise
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheel)
