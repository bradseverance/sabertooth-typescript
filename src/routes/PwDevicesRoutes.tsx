import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="pw-devices">
    <Route index element={<GroupIndexPage group="pwDevices" />} />
  </Route>
)