
const LocalStorageManager = {
    KEYS: {
        BUDGET: 'smart_budget_total',
        WISHLIST: 'smart_budget_wishlist'
    },

    saveBudget(budget) {
        localStorage.setItem(this.KEYS.BUDGET, JSON.stringify(Number(budget)));
    },

    loadBudget() {
        const saved = localStorage.getItem(this.KEYS.BUDGET);
        return saved ? JSON.parse(saved) : 0;
    },

    saveWishlist(items) {
        localStorage.setItem(this.KEYS.WISHLIST, JSON.stringify(items));
    },

    loadWishlist() {
        const saved = localStorage.getItem(this.KEYS.WISHLIST);
        return saved ? JSON.parse(saved) : [];
    }
};

window.AppState = {
    totalBudget: 0,
    wishlist: [],

    init() {
        this.totalBudget = LocalStorageManager.loadBudget();
        this.wishlist = LocalStorageManager.loadWishlist();
    },

    setTotalBudget(amount) {
        const parsedAmount = Math.max(0, Number(amount));
        this.totalBudget = parsedAmount;
        LocalStorageManager.saveBudget(parsedAmount);
    },

    addWishlistItem(name, price) {
        const newItem = {
            id: Date.now().toString(), // Reliable, chronological string ID
            name: name.trim(),
            price: Math.max(1, Number(price))
        };
        this.wishlist.push(newItem);
        LocalStorageManager.saveWishlist(this.wishlist);
    },

    removeItem(id) {
        this.wishlist = this.wishlist.filter(item => item.id !== id);
        LocalStorageManager.saveWishlist(this.wishlist);
    },

    calculateMetrics() {
        if (typeof calculateMetricsLogic === 'function') {
            return calculateMetricsLogic(this.totalBudget, this.wishlist);
        }
        
        return {
            remainingBalance: this.totalBudget,
            evaluatedItems: this.wishlist.map(item => ({ ...item, status: 'affordable' }))
        };
    }
};