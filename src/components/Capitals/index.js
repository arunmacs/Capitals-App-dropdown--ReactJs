import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedOption: countryAndCapitalsList[0].id}

  updateResult = event => {
    this.setState({selectedOption: event.target.value})
  }

  renderOptions = optionsData => (
    <option key={optionsData.id} value={optionsData.id}>
      {optionsData.capitalDisplayText}
    </option>
  )

  getCountry = selectValue => {
    const countryName = countryAndCapitalsList.find(
      countryObj => countryObj.id === selectValue,
    )
    return countryName
  }

  render() {
    const {selectedOption} = this.state
    const result = this.getCountry(selectedOption)

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            name="capital-cities"
            value={selectedOption}
            onChange={this.updateResult}
          >
            {countryAndCapitalsList.map(optionItem =>
              this.renderOptions(optionItem),
            )}
          </select>
          <span> is capital of which country?</span>
          <p className="result">{result.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
