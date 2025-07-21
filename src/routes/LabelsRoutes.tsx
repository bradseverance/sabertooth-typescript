import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="labels">
    <Route index element={<GroupIndexPage group="labels" />} />
  </Route>
)