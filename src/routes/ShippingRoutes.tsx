import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="shipping">
    <Route index element={<GroupIndexPage group="shipping" />} />
  </Route>
)