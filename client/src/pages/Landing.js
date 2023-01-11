import main from '../assets/images/main.svg'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Looking for a job? You came to the right place! We have over <b>1.0000.000 </b>
            jobs waiting for you! Just register an account and start searching! You can also upload your CV and let recruiters <b>come to you. </b>
            Search for remote jobs from anywhere in the world.
          </p>
          <Link to='/register' className="btn btn-hero">
              Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  )
}

export default Landing