// src/components/FruitsCounter/index.js
import React, {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mangoCount: 0,
      bananaCount: 0,
    }
  }

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    const message = `Bob ate ${mangoCount} mangoes ${bananaCount} bananas`
    return (
      <div className="fruits-counter-container">
        <h1 className="counter-heading">{message}</h1>
        <div className="fruit-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
            className="mango-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
            className="banana-img"
          />
        </div>
        <div className="count-container">
          <button
            className="fruit-button"
            type="button"
            onClick={this.eatMango}
          >
            Eat Mango
          </button>
          <button
            className="fruit-button"
            type="button"
            onClick={this.eatBanana}
          >
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
