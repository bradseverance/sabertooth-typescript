import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'

import rootRoutes from './routes/RootRoutes.tsx'
import scheduleRoutes from './routes/scheduleRoutes.tsx'
import settingsRoutes from './routes/SettingsRoutes.tsx'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {rootRoutes}
            {scheduleRoutes}
            {settingsRoutes}
            {/* other groups */}
        </Route>
    )
)
