// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    latestDetailsMatch: {},
    recentDetailsMatch: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getPerticularTeam()
  }

  getPerticularTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails} = formatData
    const formatlatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const {recentMatches} = formatData
    const formatRecentMatch = recentMatches.map(recentMatch => ({
      umpires: recentMatch.umpires,
      result: recentMatch.result,
      manOfTheMatch: recentMatch.man_of_the_match,
      id: recentMatch.id,
      date: recentMatch.date,
      venue: recentMatch.venue,
      competingTeam: recentMatch.competing_team,
      competingTeamLogo: recentMatch.competing_team_logo,
      firstInnings: recentMatch.first_innings,
      secondInnings: recentMatch.second_innings,
      matchStatus: recentMatch.match_status,
    }))

    this.setState({
      teamDetails: formatData,
      latestDetailsMatch: formatlatestMatch,
      recentDetailsMatch: formatRecentMatch,
      isLoader: false,
    })
  }

  render() {
    const {
      teamDetails,
      latestDetailsMatch,
      recentDetailsMatch,
      isLoader,
    } = this.state
    const {teamBannerUrl} = teamDetails
    return (
      <div className="individual-team-details">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              className="team-imageEl"
              src={teamBannerUrl}
              alt="team banner"
            />
            <p className="latest-matches">latest Matches</p>
            <div>
              <LatestMatch
                matchLatest={latestDetailsMatch}
                matchRecent={recentDetailsMatch}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
