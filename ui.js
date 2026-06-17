// ==========================================================================
// USER INTERFACE & DOM MANIPULATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const budgetForm = document.getElementById('budget-form');
    const budgetInput = document.getElementById('budget-input');
    const displayTotal = document.getElementById('display-total');
    const displayRemaining = document.getElementById('display-remaining');

    const itemForm = document.getElementById('item-form');
    const itemNameInput = document.getElementById('item-name');
    const itemPriceInput = document.getElementById('item-price');
    const wishlistContainer = document.getElementById('wishlist-container');

    // --- Core Render Engine ---
    function renderApp() {
        const metrics = AppState.calculateMetrics();

        // Update top scoreboard numbers
        displayTotal.textContent = `$${AppState.totalBudget.toLocaleString()}`;
        displayRemaining.textContent = `$${metrics.remainingBalance.toLocaleString()}`;

        // Dynamic Text Color Adjustment for Balance metric
        if (metrics.remainingBalance < 0) {
            displayRemaining.style.color = 'var(--color-danger)';
        } else {
            displayRemaining.style.color = '#38bdf8'; // Base CSS variable highlight
        }

        // Clear dynamic elements list container
        wishlistContainer.innerHTML = '';

        // Empty state conditional handler
        if (metrics.evaluatedItems.length === 0) {
            wishlistContainer.innerHTML = '<p class="empty-state">No items added to your wishlist yet.</p>';
            return;
        }

        // Generate dynamic DOM list rows
        metrics.evaluatedItems.forEach(item => {
            const li = document.createElement('li');
            li.className = `wishlist-item ${item.status}`;

            li.innerHTML = `
                <div class="item-details">
                    <span class="item-title">${escapeHTML(item.name)}</span>
                    <span class="item-cost">$${item.price.toLocaleString()}</span>
                </div>
                <button class="delete-btn" data-id="${item.id}">Delete</button>
            `;

            wishlistContainer.appendChild(li);
        });
    }

    // --- Event Listeners ---

    // 1. Budget Form Processing
    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const initialValue = budgetInput.value;
        AppState.setTotalBudget(initialValue);
        budgetInput.value = '';
        renderApp();
    });

    // 2. Wishlist Form Processing
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = itemNameInput.value;
        const price = itemPriceInput.value;

        AppState.addWishlistItem(name, price);
        
        // Reset inputs cleanly
        itemNameInput.value = '';
        itemPriceInput.value = '';
        
        renderApp();
    });

    // 3. Event Delegation for Delete Buttons
    wishlistContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const idToDelete = e.target.getAttribute('data-id');
            AppState.removeItem(idToDelete);
            renderApp();
        }
    });

    // --- Helper Utility Functions ---
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // --- Startup Application Boot ---
    AppState.init();
    renderApp();
});
