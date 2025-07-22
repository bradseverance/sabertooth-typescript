// src/routes/routeRegistry.ts
export type NavRouteItem = {
  path: string
  label: string
}

export type NavGroup = {
  label: string;
  basePath: string;
  routes: NavRouteItem[]
}

export const navRegistry: Record<string, NavGroup> = {
    schedule: {
        label: 'Schedule',
        basePath: 'schedule',
        routes: [
            { path: 'cell-schedule', label: 'Cell Schedule'},
            { path: 'scheduled-item-production-recording', label: 'Scheduled Item Production Recording'},
            { path: 'takt-reports', label: 'Takt Reports'},
            { path: 'employee-sewing-productivity', label: 'Employee Sewing Productivity'},
            { path: 'schedule-editor', label: 'Schedule Editor'},
            { path: 'incomplete-scheduled-items', label: 'Incomplete Scheduled Items Report'},
            { path: 'cushion-boxing-schedule', label: 'Cushion Boxing Schedule'},
            { path: 'material-picking-management', label: 'Material Picking Management'},
            { path: 'material-pick-list-status', label: 'Material Pick List Status'},
            { path: 'material-cart-status', label: 'Material Cart Status'},
            { path: 'material-picking-report', label: 'Material Picking Report'},
            { path: 'missing-line-items', label: 'Missing Line Items Report'},
            { path: 'items-scheduled-beyond-due-date', label: 'Items scheduled beyond due date'},
            { path: 'estimated-total-shifts', label: 'Estimated Total Shifts'},
            { path: 'serial-number-status', label: 'Serial Number Status'},
            { path: 'delivered-auxiliary-items', label: 'Delivered Auxiliary Items Management'}
        ],
    },
    extrusion: {
        label: 'Extrusion',
        basePath: 'extrusion',
        routes: [
            { path: 'scan-finished-skid', label: 'Scan Finished Skid'},
            { path: 'scan-skid-for-status', label: 'Scan Skid For Status'},
            { path: 'schedule-editor', label: 'Extrusion Schedule Editor'},
            { path: 'manage-lines', label: 'Manage All Extrusion Lines'},
            { path: 'shop-floor-monitors', label: 'Shop Floor Monitors'},
            { path: 'view-line', label: 'View Extrusion Line'},
            { path: 'import-legacy-scan', label: 'Import Legacy Skid By Scan'},
            { path: 'import-legacy-manual', label: 'Import Legacy Skid By Manual Entry'},
            { path: 'view-production-records', label: 'View Production Records'},
            { path: 'line-efficiencies-report', label: 'Line Efficiencies Report'},
            { path: 'line-specific-efficiencies-report', label: 'Line Specific Efficiencies Report'},
        ],
    },
    orders: {
        label: 'Orders',
        basePath: 'orders',
        routes: [
            { path: 'sales-order-search', label: 'Sales Order Search'},
            { path: 'check-order-status', label: 'Check Order Status'},
            { path: 'sales-order-editor', label: 'Sales Order Editor'},
            { path: 'inventory-order-editor', label: 'Inventory Order Editor'},
            { path: 'add-restock-order', label: 'Add Restock Order'},
            { path: 'international-orders', label: 'International Orders'},
            { path: 'warranty-service-parts-box-orders', label: 'Warranty, Service Parts, & Box Orders'},
            { path: 'large-takt-time-orders', label: 'Large Takt Time Orders'},
            { path: 'on-hold-orders', label: 'On Hold Orders'},
            { path: 'scheduled-inventory-orders', label: 'Scheduled Inventory Orders'},
            { path: 'unrouted-orders-report', label: 'Un-Routed Orders Report'},
            { path: 'production-orders', label: 'Production Orders'},
            { path: 'split-order-report', label: 'Split Order Report'},
            { path: 'create-bulk-transfer', label: 'Create Bulk Transfer'},
            { path: 'bulk-transfer-history', label: 'Bulk Transfer History'},
        ],
    },
    warehouse: {
        label: 'Warehouse',
        basePath: 'warehouse',
        routes: [
            { path: 'bin-management', label: 'Bin Management'},
            { path: 'product-to-warehouse-management', label: 'Product to Warehouse Management'},
            { path: 'warehouse-physical-inventory', label: 'Warehouse Physical Inventory'},
            { path: 'bin-physical-inventory', label: 'Bin Physical Inventory'},
            { path: 'lumber-physical-inventory', label: 'Lumber Physical Inventory'},
            { path: 'lumber-bins-report', label: 'Lumber Bins Report'},
            { path: 'empty-lumber-bins-report', label: 'Empty Lumber Bins Report'},
            { path: 'warehouse-inventory-report', label: 'Warehouse Inventory Report'},
            { path: 'move-product-to-bin', label: 'Move Product to Bin'},
            { path: 'warehouse-bin-movement-schedule', label: 'Warehouse Bin Movement Schedule'},
            { path: 'view-unwarehoused-products', label: 'View Unwarehoused Products'},
            { path: 'view-damaged-products', label: 'View Damaged Products'},
            { path: 'manage-transfer-orders', label: 'Manage Transfer Orders'},
            { path: 'scan-material-skid-to-bin', label: 'Scan Material Skid To Bin'},
            { path: 'scan-skid-to-bin-and-adjust-quantity', label: 'Scan Skid To Bin & Adjust Quantity'},
            { path: 'deplete-material-skid', label: 'Deplete Material Skid'},
            { path: 'unwarehoused-skids-report', label: 'Unwarehoused Skids Report'},
            { path: 'miswarehoused-skids-report', label: 'Miswarehoused Skids Report'},
            { path: 'view-bin-report', label: 'View Bin Report'},
            { path: 'warehouse-inventory-schedule', label: 'Warehouse Inventory Schedule'},
            { path: 'warehouse-sales-order-schedule', label: 'Warehouse Sales Order Schedule'},
            { path: 'orphaned-sales-order-items', label: 'Orphaned Sales Order Items'},
            { path: 'skid-group-entry', label: 'Skid Group Entry'},
            { path: 'skid-group-status', label: 'Skid Group Status'},
            { path: 'picking-issues-report', label: 'Picking Issues Report'},
            { path: 'erp-warehouse-transfer-console', label: 'ERP Warehouse Transfer Console'},
            { path: 'stocked-out-items-report', label: 'Stocked-Out Items Report'},
            { path: 'bin-audits', label: 'Bin Audits'},
            { path: 'add-unwarehoused-eligible-item', label: 'Add Unwarehoused Eligible Item'},
            { path: 'negative-quantity-report', label: 'Negative Quantity Report'},
            { path: 'warehouse-item-movement-management', label: 'Warehouse Item Movement Management'},
            { path: 'product-to-skid-group-consolidation', label: 'Product to Skid Group Consolidation'},
            { path: 'scan-skid-to-bin-cycle-count', label: 'Scan Material Skid To Bin (Cycle Count)'},
            { path: 'mostly-consumed-lumber-skids-report', label: 'Mostly Consumed Lumber Skids Report'},
            { path: 'recently-depleted-lumber-skids-report', label: 'Recently Depleted Lumber Skids Report'}
        ],
    },
    physicalInventory: {
        label: 'Physical Inventory',
        basePath: 'physical-inventory',
        routes: [
            { path: 'manage-events', label: 'Manage Physical Inventory Events'},
            { path: 'designated-roles', label: 'Manage Physical Inventory Designated Roles'},
            { path: 'print-tags', label: 'Print Physical Inventory Tags'},
            { path: 'tag-entry', label: 'Physical Inventory Tag Entry'},
            { path: 'audit-tag', label: 'Audit Physical Inventory Tag'},
            { path: 'open-help-requests', label: 'Open Help Requests'},
            { path: 'tag-list', label: 'Physical Inventory Tag List'},
            { path: 'scan-mark-unused', label: 'Scan Tag to Mark Unused'},
            { path: 'scan-to-void', label: 'Scan Tag to Void'},
            { path: 'scan-to-get-help', label: 'Scan Tag to Get Help'},
            { path: 'tag-status', label: 'Physical Inventory Tag Status'},
            { path: 'location-review', label: 'Location Review Report'}
        ],
    },
    shipping: {
        label: 'Shipping',
        basePath: 'shipping',
        routes: [
            { path: 'orders-to-ship', label: 'Orders To Ship'},
            { path: 'pick-order', label: 'Pick Order'},
            { path: 'manage-picking-orders', label: 'Manage Picking Orders'},
            { path: 'ship-order', label: 'Ship Order'},
            { path: 'boxes-shipped', label: 'Boxes Shipped'},
            { path: 'warehouse-actions-report', label: 'Warehouse Actions Report'},
            { path: 'shipped-orders-report', label: 'Shipped Orders Report'},
            { path: 'final-check-status-report', label: 'Open Orders Final Check Status Report'},
            { path: 'shipping-management', label: 'Shipping Management'},
            { path: 'ship-via-management', label: 'Ship Via Change Request Management'},
            { path: 'penalty-freight-report', label: 'Penalty Third Party Freight Report'},
            { path: 'bulk-planning-report', label: 'Bulk Planning Report'},
            { path: 'aging-printed-orders', label: 'Aging Printed Orders'},
            { path: 'order-volume-report', label: 'Distribution Center Order Volume Report'},
            { path: 'campus-balance-report', label: 'Campus Balance Report'},
            { path: 'pooling-management', label: 'Sales Order Pooling Management'},
            { path: 'scheduled-pick-up-report', label: 'Scheduled Pick Up Date Report'}
        ],
    },
    materials: {
        label: 'Materials',
        basePath: 'materials',
        routes: [
            { path: 'bom-viewer', label: 'Bill of Materials Viewer'},
            { path: 'mrp-viewer', label: 'MRP Viewer'},
            { path: 'managed-materials-mrp', label: 'Managed Materials MRP'},
            { path: 'where-used-viewer', label: 'Where Used Viewer'}
        ],
    },
    returns: {
        label: 'Returns',
        basePath: 'returns',
        routes: [
            { path: 'returns-management', label: 'Returns Management'},
            { path: 'receive-returns', label: 'Receive Returns'},
            { path: 'restock-returns', label: 'Restock Returns'}
        ],
    },
    labels: {
        label: 'Labels',
        basePath: 'labels',
        routes: [
            { path: 'print-labels', label: 'Print Labels'},
            { path: 'reprint-finished-label', label: 'Reprint Finished Goods Labels'},
            { path: 'reprint-lumber-skid', label: 'Reprint Lumber Skid Label'},
            { path: 'reprint-material-delivery', label: 'Reprint Material Delivery Label'},
            { path: 'reprint-assembly-instructions', label: 'Reprint Assembly Instructions'}
        ],
    },
    pwDevices: {
        label: 'PW Devices',
        basePath: 'pw-devices',
        routes: [
            { path: 'device-management', label: 'Device Management'},
            { path: 'device-usage-report', label: 'Device Usage Report'}
        ],
    },
    settings: {
        label: 'Settings',
        basePath: 'settings',
        routes: [
            { path: 'aging-printed-orders', label: 'Aging Printed Orders'},
            { path: 'areas', label: 'Areas'},
            { path: 'buildings', label: 'Buildings'},
            { path: 'campuses', label: 'Campuses'},
            { path: 'cells', label: 'Cells'},
            { path: 'changeover-groups', label: 'Changeover Groups'},
            { path: 'color-types', label: 'Color Types'},
            { path: 'color-groups', label: 'Color Groups'},
            { path: 'colors', label: 'Colors'},
            { path: 'customers', label: 'Customers'},
            { path: 'customer-groups', label: 'Customer Groups'},
            { path: 'distribution-centers', label: 'Distribution Centers'},
            { path: 'generate-incremental-set-sku', label: 'Generate Incremental Set Sku'},
            { path: 'inventory-sources', label: 'Inventory Sources'},
            { path: 'pallet-types', label: 'Pallet Types'},
            { path: 'physical-locations', label: 'Physical Locations'},
            { path: 'printers', label: 'Printers'},
            { path: 'production-groups', label: 'Production Groups'},
            { path: 'products', label: 'Products'},
            { path: 'product-types', label: 'Product Types'},
            { path: 'satellite-campus-buildable-skus', label: 'Satellite Campus Buildable Skus'},
            { path: 'shifts', label: 'Shifts'},
            { path: 'site-settings', label: 'Site Settings'},
            { path: 'swap-a-printer', label: 'Swap a Printer'},
            { path: 'teams', label: 'Teams'},
            { path: 'user-roles', label: 'User Roles'},
            { path: 'users', label: 'Users'},
            { path: 'warehouses', label: 'Warehouses'},
            { path: 'zones', label: 'Zones'}
        ],
    },
    dashboard: {
        label: 'Dashboard',
        basePath: 'dashboard',
        routes: [
            { path: 'acumatica-status', label: 'Acumatica Status'},
            { path: 'indexed-priority-queue', label: 'Indexed Priority Queue'},
            { path: 'queue-groups', label: 'Queue Groups'},
            { path: 'shipment-tools', label: 'Shipment Management Tools'},
            { path: 'hardware-pack-status', label: 'Hardware Pack Print Server Status'},
            { path: 'search-pending-logs', label: 'Search Pending Logs'}
        ],
    },
} as const

export type NavGroupKey = keyof typeof navRegistry