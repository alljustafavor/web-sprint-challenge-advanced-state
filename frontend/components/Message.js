import React from 'react'
import { useSelector } from 'react-redux'

export default function Message() {
  const infoMessage = useSelector(state => state.infoMessage)

  { return(infoMessage && <div id="message">{infoMessage}</div>)}
}