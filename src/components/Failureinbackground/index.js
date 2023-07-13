import './index.css'

const Failureinbackground = props => {
  const {clickonbackground} = props

  const tryagain = () => {
    clickonbackground()
  }

  return (
    <div className="failureview">
      <img
        src="https://res.cloudinary.com/dsxljhpge/image/upload/v1688396580/alert-triangle_fta4au.png"
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
