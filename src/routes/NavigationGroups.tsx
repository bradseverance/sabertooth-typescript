import { Route } from 'react-router-dom'
import GroupIndexPage from '../components/navigation/GroupIndexPage'
import { navRegistry } from '../components/navigation/Registry'

export const NavigationGroups = Object.entries(navRegistry).map(([groupKey, group]) => (
    <Route path={group.basePath} key={groupKey}>
        <Route index element={<GroupIndexPage group={groupKey as keyof typeof navRegistry} />} />
    </Route>
))