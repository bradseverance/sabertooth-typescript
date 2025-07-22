import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import RootRoutes from './routes/RootRoutes.tsx';
import { NavGroups } from './routes/NavGroups.tsx';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {RootRoutes}
            {NavGroups}
        </Route>
    )
);
