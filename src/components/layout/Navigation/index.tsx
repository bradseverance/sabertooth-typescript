import { Link } from 'react-router-dom'
import css from './Navigation.module.css'
import { routeRegistry } from '../../../routes/routeRegistry';

export default function Navigation() {
  return (
    <div>
        <nav className={css.navigation}>
            <ul className={css['level-0']}>
                {Object.values(routeRegistry).map(({ label, basePath, routes }) => (
                    <li key={basePath}>
                        <Link to={`/${basePath}`}>
                            <span>{label}</span>
                        </Link>
                        <ul className={css['level-1']}>
                            {routes.map(({ path, label }) => (
                                <li key={path}>
                                    <Link to={`/${basePath}/${path}`}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}