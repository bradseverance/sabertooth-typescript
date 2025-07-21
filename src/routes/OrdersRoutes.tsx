import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="orders">
    <Route index element={<GroupIndexPage group="orders" />} />
  </Route>
)