import './index.css'

const Failureinbackground = props => {
  const {clickonpopular} = props

  const tryagain = () => {
    clickonpopular()
  }

  return (
    <div className="failureview">
      <img
        src="https://res.cloudinary.com/dsxljhpge/image/upload/v1688857573/Background-Complete_sr1ccd.png"
        className="Failview"
      />
      <p>Something Went wrong Please try again</p>
      <button onClick={tryagain} className="trybutton">
        Try Again
      </button>
    </div>
  )
}

export default Failureinbackground
