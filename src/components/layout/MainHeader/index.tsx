import { Link } from 'react-router-dom'
import css from './MainHeader.module.css'
import Navigation from '../Navigation'

export default function MainHeader() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <div>
          <Link to="/">
            <img
              id={css['logo-image']}
              src="/images/logo.png" // or wherever your logo lives
              alt="POLYWOOD Scheduler"
            />
          </Link>
        </div>
      </div>
      <div id={css['header-right-container']}>
        <Navigation />
      </div>
    </header>
  )
}
