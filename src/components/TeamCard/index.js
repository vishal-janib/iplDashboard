// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {allTeamNames} = this.props
    const {id, name, teamImageUrl} = allTeamNames
    return (
      <Link className="linkEl" to={`/team-matches/${id}`}>
        <li className="team-names-logo-card">
          <img src={teamImageUrl} alt={name} className="logo-images" />
          <p className="team-names">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
