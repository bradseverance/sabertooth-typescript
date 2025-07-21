import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="physical-inventory">
    <Route index element={<GroupIndexPage group="physicalInventory" />} />
  </Route>
)