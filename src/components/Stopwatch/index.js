import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    istimerRunning: false,
    timeElapsedInSecond: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({istimerRunning: false, timeElapsedInSecond: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({istimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSecond: prevState.timeElapsedInSecond + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({istimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSecond} = this.state
    const second = Math.floor(timeElapsedInSecond % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinutes = () => {
    const {timeElapsedInSecond} = this.state
    const minutes = Math.floor(timeElapsedInSecond / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {istimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              <p className="heading-timer">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="btn start-button"
                onClick={this.onStartTimer}
                disabled={istimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset-button"
                onClick={this.onResetTimer}
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
