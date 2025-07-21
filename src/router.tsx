import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';

import rootRoutes from './routes/RootRoutes.tsx';
import scheduleRoutes from './routes/SchedulesRoute.tsx';
import extrusionRoutes from './routes/ExtrusionRoutes.tsx';
import ordersRoutes from './routes/OrdersRoutes.tsx';
import physicalInventoryRoutes from './routes/PhysicalInventoryRoutes.tsx';
import shippingRoutes from './routes/ShippingRoutes.tsx';
import materialsRoutes from './routes/MaterialsRoutes.tsx';
import returnsRoutes from './routes/ReturnsRoutes.tsx';
import labelsRoutes from './routes/LabelsRoutes.tsx';
import pwDevicesRoutes from './routes/PwDevicesRoutes.tsx';
import settingsRoutes from './routes/SettingsRoutes.tsx';
import dashboardRoutes from './routes/DashboardRoutes.tsx';
import warehouseRoutes from './routes/WarehouseRoutes.tsx';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {rootRoutes}
            {scheduleRoutes}
            {extrusionRoutes}
            {ordersRoutes}
            {warehouseRoutes}
            {physicalInventoryRoutes}
            {shippingRoutes}
            {materialsRoutes}
            {returnsRoutes}
            {labelsRoutes}
            {pwDevicesRoutes}
            {settingsRoutes}
            {dashboardRoutes}
        </Route>
    )
);
