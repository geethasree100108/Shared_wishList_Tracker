```markdown
# 📊 Smart Budget & Wishlist Tracker (Premium Dashboard)

A sleek, premium, scalable client-side **Vanilla JavaScript** web application designed to help users intelligently organize personal finances, establish financial boundaries, and prioritize target wishlists using automated, chronological threshold evaluation logic.

---

## 🚀 Project Overview

The **Smart Budget & Wishlist Tracker** bridges the gap between passive wish-making and active financial planning. Unlike static spreadsheets, this platform introduces an automated **Chronological Priority Matrix**. 

When items are entered into the stream, the algorithm dynamically calculates sequential cumulative costs. Items are automatically cataloged as **Affordable** as long as the cumulative tally remains under the Total Budget limit. The exact moment an item breaches that boundary, the system shifts its execution pipeline, branding that item—and all subsequent lower-priority items—as **Over Budget**.

### 🌟 Implemented Premium Features
* **Live Financial Analytics Scorecard:** Instant real-time calculations tracking the primary financial metrics (`Total Budget` vs. `Remaining Balance`).
* **Multi-Currency Localization Core:** Native switch engine allowing seamless toggling between global currencies (USD `$`, INR `₹`, EUR `€`) across the layout structure on the fly.
* **Granular Status Filter Pipeline:** Live active taxonomy tabs allowing real-time segmentation of the wishlist by priority tiers (`All`, `Affordable Only`, `Over Budget Only`).
* **Micro-Interaction System:** Fluid state animations and slide-on-hover treatments matching modern high-fidelity production SaaS platforms.
* **Persistent Local Cache Engine:** Robust data mapping that strings data structures cleanly inside browser memory storage across cache cycles and page refreshes.
* **Defensive XSS Protection:** Native DOM sanitization routines protecting input nodes against common injection patterns.

---

## 📂 Project Architecture & Contents

The repository maintains strict adherence to clean architecture principles through an absolute separation of concerns across a 3-layer decoupled ecosystem:

```text
├── index.html          # Structural Semantics Layer
├── style.css           # Premium Layout & Motion System Core
├── storage.js          # Direct-Access Storage Abstraction Layer
├── logic.js            # Business Rules, Models, & Computation Engine
└── ui.js               # Reactive DOM Presentation Layer

```

### Deep Dive File Breakdown

#### 1. `index.html`

Establishes the dashboard workspace framework via semantic structural markup elements (`<header>`, `<main>`, `<section>`). Houses the input control parameters inside a balanced 2-column spatial grid framework while natively preparing target bindings for JavaScript interpolation.

#### 2. `style.css`

A customized web design system orchestrated completely with cascading global variables (`:root`). Highlights include:

* Multi-layered soft drop shadows using smooth ambient coefficients.
* Dynamic state changes that shift item properties conditionally depending on the application of injected classes (`.affordable`, `.expensive`).
* Non-blocking transform optimizations (`translateX`) executing on separate GPU rendering tracks for crisp responsive interaction profiles.

#### 3. `storage.js`

A unified data engine class abstraction layer (`StorageController`). Handles standard operational primitives (`get`, `save`) for variables, manages payload conversions via `JSON.parse` and `JSON.stringify`, and isolates local hardware browser storage interactions from raw logic routines.

#### 4. `logic.js`

The centralized mathematical and data state core (`AppState`). Operates variables cleanly inside memory runtimes and manages operational matrices—such as computing absolute spend aggregates using iterative JavaScript functional reductions (`.reduce()`).

#### 5. `ui.js`

The user interface controller module executing immediately on the `DOMContentLoaded` loop cycle. Serves as the central event router that intercepts submit hooks, handles data mapping parameters between the logic layer and markup blocks, and forces visual re-paints cleanly whenever deep values are altered.

---

## 🛠️ Local Installation & Environment Setup

Run this standalone dashboard completely offline or host it easily on server environments.

### System Prerequisites

No compilers, runtime bundles (`Node.js`), or external packages (`npm`) are required. You only need:

* A web browser supporting ES6 specification standards (Chrome, Edge, Safari, Firefox).
* A source code editor (e.g., VS Code).

### Step-by-Step Clone Guide

#### 1. Clone the Source Repository

Initialize a terminal shell inside your active working workspace and execute the clone process:

```bash
git clone [https://github.com/YOUR_USERNAME/smart-budget-tracker.git](https://github.com/YOUR_USERNAME/smart-budget-tracker.git)

```

*(Ensure you substitute `YOUR_USERNAME` with your native target GitHub distribution handles).*

#### 2. Change Directory Location

Traverse into the newly materialized file tree location:

```bash
cd smart-budget-tracker

```

#### 3. Execution Strategies

* **Standard Desktop Environment (Manual Launch):** Double-click on `index.html` within your system workspace file manager to run it instantly in your native web browser environment.
* **Developer Workspace Environment (Automated Dev Server):** Open the directory within VS Code, deploy the **Live Server** extension workspace package, and launch the site at its virtual port address:
```text
[http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)

```



---

## 📊 Algorithmic Workflow Execution

The underlying logic tracks user decisions deterministically through a reliable sequence:

1. **Setup Core Capacity:** The user sets their primary liquidity value via the Total Budget framework.
2. **Sequential Stack Generation:** New elements append sequentially to the tail end of the wishlist array (`Date.now()` serves as the unique identifier key).
3. **Array Interrogation Process:**

$$\text{Cumulative Cost}_n = \sum_{i=1}^{n} \text{Price}_i$$



If $\text{Cumulative Cost}_n \le \text{Total Budget}$, the current node object is branded with an `affordable` classification. Otherwise, it is assigned an `expensive` signature tag.
4. **Reactive Render Phase:** The template engine wipes the active display container nodes and dynamically mounts updated card items formatted cleanly to the current currency location settings.

```

```
