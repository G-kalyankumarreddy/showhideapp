import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstNameButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastNameButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <div className="align">
              <button
                className="button"
                type="button"
                onClick={this.onFirstNameButton}
              >
                Show/Hide Firstname
              </button>
            </div>

            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <div className="align">
              <button
                className="button"
                type="button"
                onClick={this.onLastNameButton}
              >
                Show/Hide Lastname
              </button>
            </div>

            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
