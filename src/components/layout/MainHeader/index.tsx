import { Link } from 'react-router-dom'
import css from './MainHeader.module.css'

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
        {/* nav and other items will go here */}
      </div>
    </header>
  )
}
