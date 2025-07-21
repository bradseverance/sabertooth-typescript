import { Link } from 'react-router-dom';
import { routeRegistry } from '../../routes/routeRegistry';

export default function MainRouteGroupsList() {
  return (
    <>
        <p>Quick Links</p>
        <ul className="bulleted-list">
            {Object.values(routeRegistry).map(({ label, basePath }) => (
                <li key={basePath}>
                    <Link to={`/${basePath}`}>{label}</Link>
                </li>
            ))}
        </ul>
    </>
  );
}
