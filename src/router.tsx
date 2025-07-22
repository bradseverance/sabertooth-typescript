import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'

import RootRoutes from './routes/RootRoutes.tsx'
import { NavigationGroups } from './routes/NavigationGroups.tsx'
import Error404 from './pages/error/Error404'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            {RootRoutes}
            {NavigationGroups}
            <Route path='*' element={<Error404 />} />
        </Route>
    )
)
