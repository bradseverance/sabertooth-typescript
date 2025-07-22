import { Link } from 'react-router-dom';
import { navRegistry } from './Registry';

export default function MainRouteGroupsList() {
  return (
    <>
        <p>Quick Links</p>
        <ul className="bulleted-list">
            {Object.values(navRegistry).map(({ label, basePath }) => (
                <li key={basePath}>
                    <Link to={`/${basePath}`}>{label}</Link>
                </li>
            ))}
        </ul>
    </>
  );
}
