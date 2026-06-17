// ==========================================================================
// STORAGE CONTROLLER
// ==========================================================================

const STORAGE_KEYS = {
    BUDGET: 'smart_budget_total',
    ITEMS: 'smart_budget_items'
};

const StorageController = {
    // Save the total budget number
    saveBudget(budget) {
        localStorage.setItem(STORAGE_KEYS.BUDGET, JSON.stringify(Number(budget)));
    },

    // Retrieve the total budget number
    getBudget() {
        const saved = localStorage.getItem(STORAGE_KEYS.BUDGET);
        return saved ? JSON.parse(saved) : 0;
    },

    // Save the array of wishlist items
    saveItems(items) {
        localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
    },

    // Retrieve the array of wishlist items
    getItems() {
        const saved = localStorage.getItem(STORAGE_KEYS.ITEMS);
        return saved ? JSON.parse(saved) : [];
    },

    // Wipe storage values if needed
    clearAll() {
        localStorage.removeItem(STORAGE_KEYS.BUDGET);
        localStorage.removeItem(STORAGE_KEYS.ITEMS);
    }
};
