// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {allTeams: [], isLoading: true}

  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formatData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({allTeams: formatData, isLoading: false})
  }

  render() {
    const {allTeams, isLoading} = this.state
    return (
      <div className="bgContainer">
        <div className="logo-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-image"
          />
          <h1 className="ipl-board-heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-ipl-cards-container">
              {allTeams.map(eachItem => (
                <TeamCard allTeamNames={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
