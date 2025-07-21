// src/components/GroupIndexPage.tsx
import { Link } from 'react-router-dom';
import { routeRegistry } from '../../routes/routeRegistry.ts';
import type { RouteGroupKey } from '../../routes/routeRegistry.ts';

interface Props {
  group: RouteGroupKey;
}

export default function GroupIndexPage({ group }: Props) {
  const groupDef = routeRegistry[group];

  if (!groupDef) {
    return <div>Unknown group: {group}</div>;
  }

  return (
    <div>
      <h1>{groupDef.label}</h1>
      <p>Quick Links</p>
      <ul className="bulleted-list">
        {groupDef.routes.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}