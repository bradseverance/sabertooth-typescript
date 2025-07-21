import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import MainLayout from './layout/MainLayout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import SettingsIndex from './pages/settings/Index.tsx'
import PalletTypes from './pages/settings/pallet-types/Index.tsx';
import PalletTypeDetail from './pages/settings/pallet-types/Detail.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='settings'>
        <Route index element={<SettingsIndex />} />
        <Route path="pallet-types" >
            <Route index element={<PalletTypes />} />
            <Route path=":idx" element={<PalletTypeDetail />} />
        </Route>
    </Route>
    </Route>

  )
);

