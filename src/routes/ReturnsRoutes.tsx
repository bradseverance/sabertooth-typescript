import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="returns">
    <Route index element={<GroupIndexPage group="returns" />} />
  </Route>
)