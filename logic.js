// ==========================================================================
// BUSINESS LOGIC & STATE MANAGEMENT
// ==========================================================================

const AppState = {
    totalBudget: 0,
    wishlist: [],

    // Initialize application state from localStorage
    init() {
        this.totalBudget = StorageController.getBudget();
        this.wishlist = StorageController.getItems();
    },

    // Set a new total budget
    setTotalBudget(amount) {
        this.totalBudget = Math.max(0, Number(amount));
        StorageController.saveBudget(this.totalBudget);
    },

    // Append an item to the chronological list
    addWishlistItem(name, price) {
        const newItem = {
            id: Date.now().toString(), // Unique timestamp ID
            name: name.trim(),
            price: Math.max(0, Number(price))
        };
        this.wishlist.push(newItem);
        StorageController.saveItems(this.wishlist);
        return newItem;
    },

    // Remove an item by its unique ID
    removeItem(id) {
        this.wishlist = this.wishlist.filter(item => item.id !== id);
        StorageController.saveItems(this.wishlist);
    },

    // Calculate core metrics synchronously
    calculateMetrics() {
        let cumulativeCost = 0;
        
        // Chronological reduction evaluation
        const evaluatedItems = this.wishlist.map(item => {
            cumulativeCost += item.price;
            // Item is affordable if total accumulated cost fits inside the budget
            const isAffordable = cumulativeCost <= this.totalBudget;
            
            return {
                ...item,
                status: isAffordable ? 'affordable' : 'expensive'
            };
        });

        const totalSpent = this.wishlist.reduce((sum, item) => sum + item.price, 0);
        const remainingBalance = this.totalBudget - totalSpent;

        return {
            evaluatedItems,
            remainingBalance
        };
    }
};
