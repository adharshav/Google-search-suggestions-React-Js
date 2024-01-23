import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickArrow = () => {
    const {searchDetails, updateSearchInput} = this.props
    const {suggestion} = searchDetails
    updateSearchInput(suggestion)
  }

  render() {
    const {searchDetails} = this.props
    const {suggestion} = searchDetails
    return (
      <li className="suggestions-list">
        <p className="suggestions">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow-image"
          onClick={this.onClickArrow}
        />
      </li>
    )
  }
}

export default SuggestionItem
