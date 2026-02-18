// Write your code here
import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {matchLatest, matchRecent} = props
  console.log(matchRecent)
  const {
    matchStatus,
    secondInnings,
    firstInnings,
    competingTeamLogo,
    competingTeam,
    venue,
    date,
    manOfTheMatch,
    result,
    umpires,
  } = matchLatest
  return (
    <div>
      <div className="latest-match-card">
        <div className="sub-latest-match-card">
          <div>
            <h3 className="competingTeam">{competingTeam}</h3>
            <p className="text">{date}</p>
            <p className="text">{venue}</p>
            <p className="text">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latest-match-team-logo"
          />
        </div>
        <div>
          <hr className="hor-line" />
          <p className="text text-color">First Innings</p>
          <p className="text">{firstInnings}</p>
          <p className="text text-color">Second Innings</p>
          <p className="text">{secondInnings}</p>
          <p className="text text-color">Man Of The Match</p>
          <p className="text">{manOfTheMatch}</p>
          <p className="text text-color">Umpires</p>
          <p className="text">{umpires}</p>
        </div>
      </div>
      <ul className="other-team-cards">
        {matchRecent.map(eachItem => (
          <MatchCard eachCards={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default LatestMatch
