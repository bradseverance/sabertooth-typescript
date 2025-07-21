// src/routes/settingsRoutes.tsx
import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="schedule">
    <Route index element={<GroupIndexPage group="schedule" />} />
  </Route>
);