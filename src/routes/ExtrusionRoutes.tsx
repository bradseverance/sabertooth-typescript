import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';

export default (
  <Route path="extrusion">
    <Route index element={<GroupIndexPage group="extrusion" />} />
  </Route>
);