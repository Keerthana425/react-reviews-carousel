// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeLsit: 0}

  leftClick = () => {
    const {activeLsit} = this.state
    if (activeLsit > 0) {
      this.setState(PrevState => ({
        activeLsit: PrevState.activeLsit - 1,
      }))
    }
  }

  rightClick = () => {
    const {activeLsit} = this.state
    const {reviewsList} = this.props
    if (activeLsit < reviewsList.length - 1) {
      this.setState(PrevState => ({
        activeLsit: PrevState.activeLsit + 1,
      }))
    }
  }

  render() {
    const {activeLsit} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[activeLsit]
    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="imag-ele" />
        <div className="three-container">
          <button
            type="button"
            className="butttons"
            onClick={this.leftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-side"
              alt="left arrow"
            />
          </button>
          <p className="para">{username}</p>
          <button
            type="button"
            className="butttons"
            onClick={this.rightClick}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-side"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="last-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
