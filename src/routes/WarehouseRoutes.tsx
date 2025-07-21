import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="warehouse">
    <Route index element={<GroupIndexPage group="warehouse" />} />
  </Route>
)