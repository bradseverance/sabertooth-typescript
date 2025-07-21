import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="dashboard">
    <Route index element={<GroupIndexPage group="dashboard" />} />
  </Route>
)