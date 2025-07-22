// src/components/GroupIndexPage.tsx
import { Link } from 'react-router-dom';
import { navRegistry } from './Registry.ts';
import type { NavGroupKey } from './Registry.ts';

interface Props {
  group: NavGroupKey;
}

export default function GroupIndexPage({ group }: Props) {
  const groupDef = navRegistry[group];

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