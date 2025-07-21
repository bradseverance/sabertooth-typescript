// src/routes/settingsRoutes.tsx
import { Route } from 'react-router-dom';
import GroupIndexPage from '../components/routes/GroupIndexPage';
import PalletTypes from '../pages/settings/pallet-types/Index.tsx';

export default (
  <Route path="settings">
    <Route index element={<GroupIndexPage group="settings" />} />
    <Route path="pallet-types">
      <Route index element={<PalletTypes />} />
    </Route>
  </Route>
);