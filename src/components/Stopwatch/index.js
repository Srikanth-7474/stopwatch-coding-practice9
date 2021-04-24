// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {NoOfSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({NoOfSeconds: 0})
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({NoOfSeconds: prevState.NoOfSeconds + 1}))
  }

  renderSeconds = () => {
    const {NoOfSeconds} = this.state
    const seconds = Math.floor(NoOfSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {NoOfSeconds} = this.state
    const minutes = Math.floor(NoOfSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div className="img-text-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
                className="timer-img"
              />
              <p>Timer</p>
            </div>
            <h1>
              {this.renderMinutes()}:{this.renderSeconds()}
            </h1>
            <div className="btn-container">
              <button
                type="button"
                className="button start-btn"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-btn"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button restart-btn"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
