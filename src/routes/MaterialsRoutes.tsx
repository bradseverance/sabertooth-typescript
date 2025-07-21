import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="materials">
    <Route index element={<GroupIndexPage group="materials" />} />
  </Route>
)