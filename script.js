const products = [
    { id: 1, name: "Banarasi Silk Saree", category: "women", fabric: "Silk", priceRange: "₹4,500 – ₹8,200", shop: "Tradition Silk", phone: "919000000001", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0h2bddL3L_fRWxXXnavV6VTUxgt59_yKwJx7MkFRxHJWDU9cnCI-Vl1M3BUepYpK7hjSHzqee-fD3K5LXwYpQMVHeHt6akFvNerK9LiImxJVyg9jmBpe-sg", sizes: "Free Size", colors: "Red, Gold" },
    { id: 2, name: "Floral Summer Dress", category: "women", fabric: "Cotton", priceRange: "₹1,100 – ₹1,500", shop: "Aura Boutique", phone: "919000000002", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600", sizes: "S, M, L", colors: "Floral" },
    { id: 3, name: "Embroidered Silk Kurti", category: "women", fabric: "Silk", priceRange: "₹1,500 – ₹2,500", shop: "Grace Boutique", phone: "919000000003", img: "images/ESK.webp", sizes: "M, L, XL", colors: "Navy Blue" },
    { id: 4, name: "Linen Tunic Top", category: "women", fabric: "Linen", priceRange: "₹1,100 – ₹1,500", shop: "Natural Fibers", phone: "919000000004", img: "images/LTT.jpg", sizes: "M, L", colors: "Off-White" },
    { id: 5, name: "Cotton Chikankari Kurta", category: "women", fabric: "Cotton", priceRange: "₹1,800 – ₹2,400", shop: "The Lucknow Store", phone: "919000000005", img: "images/CCK.jpg", sizes: "M, L, XL", colors: "Pastel Pink" },
    { id: 6, name: "Premium Linen Shirt", category: "men", fabric: "Linen", priceRange: "₹1,200 – ₹1,600", shop: "Vogue Menswear", phone: "919000000006", img: "images/LS.jpg", sizes: "M, L, XL", colors: "White, Sky Blue" },
    { id: 7, name: "Indigo Denim Jacket", category: "men", fabric: "Denim", priceRange: "₹2,200 – ₹3,000", shop: "Street Style", phone: "919000000007", img: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600", sizes: "L, XL", colors: "Dark Indigo" },
    { id: 8, name: "Handloom Cotton Kurta", category: "men", fabric: "Cotton", priceRange: "₹850 – ₹1,200", shop: "Ethnic Hub", phone: "919000000008", img: "images/HCK.jpg", sizes: "L, XL, XXL", colors: "Beige, Mustard" },
    { id: 9, name: "Slim Fit Linen Trousers", category: "men", fabric: "Linen", priceRange: "₹1,600 – ₹2,200", shop: "Modern Menswear", phone: "919000000009", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600", sizes: "32, 34, 36", colors: "Khaki" },
    { id: 10, name: "Checked Cotton Shirt", category: "men", fabric: "Cotton", priceRange: "₹950 – ₹1,400", shop: "City Fab", phone: "919000000010", img: "images/CCS.jpg", sizes: "M, L, XL", colors: "Green Check" },
    { id: 11, name: "Kids Cotton Romper", category: "kids", fabric: "Cotton", priceRange: "₹500 – ₹800", shop: "Little Stars", phone: "919000000011", img: "idk", sizes: "2T, 3T, 4T", colors: "Yellow" },
    { id: 12, name: "Toddler Denim Overalls", category: "kids", fabric: "Denim", priceRange: "₹900 – ₹1,300", shop: "Junior Style", phone: "919000000012", img: "images/TDO.jpg", sizes: "4, 6, 8", colors: "Classic Blue" },
    { id: 13, name: "Girls Silk Frock", category: "kids", fabric: "Silk", priceRange: "₹1,500 – ₹2,200", shop: "Princess Wear", phone: "919000000013", img: "", sizes: "6, 8, 10", colors: "Purple" },
    { id: 14, name: "Boys Linen Vest", category: "kids", fabric: "Linen", priceRange: "₹700 – ₹1,100", shop: "Tiny Trends", phone: "919000000014", img: "https://ibb.co/1S6j5BS", sizes: "8, 10", colors: "Grey" },
    { id: 15, name: "Mandarin Collar Shirt", category: "men", fabric: "Cotton", priceRange: "₹800 – ₹1,200", shop: "Vogue Menswear", phone: "919000000006", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600", sizes: "M, L", colors: "White" },
    { id: 16, name: "Silk Wrap Blouse", category: "women", fabric: "Silk", priceRange: "₹1,800 – ₹2,600", shop: "Grace Boutique", phone: "919000000003", img: "images/SWB.jpg", sizes: "S, M", colors: "Champagne" },
    { id: 19, name: "Casual Linen Blazer", category: "men", fabric: "Linen", priceRange: "₹3,500 – ₹5,500", shop: "Modern Menswear", phone: "919000000009", img: "", sizes: "L, XL", colors: "Charcoal" },
    { id: 20, name: "Hand-Printed Cotton Skirt", category: "women", fabric: "Cotton", priceRange: "₹1,200 – ₹1,800", shop: "Aura Boutique", phone: "919000000002", img: "images/HCS.jpg", sizes: "M, L", colors: "Blue" }
];


const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const fabricFilter = document.getElementById('fabricFilter');
const sortPrice = document.getElementById('sortPrice');


// --- THEME SWITCH ---
document.getElementById('themeCheckbox').addEventListener('change', function (e) {
    document.body.className = e.target.checked ? 'light-theme' : 'dark-theme';
    document.getElementById('theme-icon').innerText = e.target.checked ? '☀️' : '🌙';
});


// --- RENDER GRID ---
function render(data) {
    grid.innerHTML = "";
    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px;"><h3>No products found.</h3></div>`;
        return;
    }
    data.forEach(p => {
        const hasImg = p.img && p.img.length > 5 && p.img !== "idk";
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => openDetailModal(p);

        card.innerHTML = `
            ${hasImg
                ? `<img src="${p.img}" class="card-img" alt="${p.name}" onerror="this.outerHTML='<div class=\'coming-soon-placeholder\'><span>Image<br>Coming Soon</span></div>'">`
                : `<div class="coming-soon-placeholder"><span>Image<br>Coming Soon</span></div>`}
           
            <div class="card-info">
                <span class="fabric-tag">${p.fabric}</span>
                <span class="card-price">${p.priceRange}</span>
                <h3 class="card-title">${p.name}</h3>
                <p style="color:var(--text-dim); font-size:12px;">📍 ${p.shop}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}


// --- DETAIL MODAL ---
function openDetailModal(p) {
    const hasImg = p.img && p.img.length > 5 && p.img !== "idk";
    const waUrl = `https://wa.me/${p.phone}?text=Hi, I want to try the ${p.name}`;


    const modalHtml = `
        <div id="detailModal" class="modal">
            <div class="modal-content">
                <span class="close-modal" onclick="closeModal()">×</span>
                <div class="modal-left">
                    ${hasImg ? `<img src="${p.img}" onerror="this.outerHTML='<div class=\'coming-soon-placeholder\' style=\'height:100%\'><span>Coming Soon</span></div>'">` : `<div class="coming-soon-placeholder" style="height:100%"><span>Coming Soon</span></div>`}
                </div>
                <div class="modal-right">
                    <span class="fabric-tag">${p.fabric}</span>
                    <h2 style="margin: 10px 0;">${p.name}</h2>
                    <p class="card-price" style="font-size:24px; color:var(--primary-orange);">${p.priceRange}</p>
                   
                    <p style="font-size:14px; color:var(--text-dim); line-height:1.6; margin: 20px 0;">
                        <b>Sizes:</b> ${p.sizes} <br>
                        <b>Colors:</b> ${p.colors} <br>
                        <b>Shop:</b> ${p.shop}
                    </p>


                    <button class="btn-main" onclick="confirmLock(this)">🔒 Lock-in Trial</button>
                    <a href="${waUrl}" target="_blank" class="btn-whatsapp">WhatsApp Seller</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.shop + " textile shop")}" target="_blank" class="btn-locate">📍 Locate Shop</a>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}


function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) modal.remove();
}


function confirmLock(btn) {
    btn.innerHTML = "✅ Item Reserved!";
    btn.style.background = "#25d366";
    setTimeout(() => { alert("Success! Visit the store within 24 hours."); closeModal(); }, 800);
}


// --- QUICK FILTER CHIPS ---
function setQuickFilter(fabric) {
    fabricFilter.value = fabric;
    // Update active UI
    document.querySelectorAll('.tag-chip').forEach(chip => chip.classList.remove('active'));
    document.getElementById(`chip-${fabric}`).classList.add('active');
    filter();
}


// --- FILTERING & SORTING ---
function filter() {
    const term = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;
    const fab = fabricFilter.value;
    const sortVal = sortPrice.value;


    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(term) || p.shop.toLowerCase().includes(term);
        const matchesCategory = (cat === 'all' || p.category === cat);
        const matchesFabric = (fab === 'all' || p.fabric === fab);
        return matchesSearch && matchesCategory && matchesFabric;
    });


    // Sort by price
    if (sortVal !== 'none') {
        filtered.sort((a, b) => {
            const priceA = parseInt(a.priceRange.replace(/\D/g, ""));
            const priceB = parseInt(b.priceRange.replace(/\D/g, ""));
            return sortVal === 'low' ? priceA - priceB : priceB - priceA;
        });
    }


    render(filtered);
}


// Event Listeners
searchInput.oninput = filter;
categoryFilter.onchange = filter;
fabricFilter.onchange = filter;
sortPrice.onchange = filter;


// --- DASHBOARD LOGIC ---
const recentLocks = [
    { item: "Banarasi Silk Saree", user: "Sarah J.", time: "2 mins ago", status: "Active" },
    { item: "Linen Tunic Top", user: "Arun K.", time: "15 mins ago", status: "Active" },
    { item: "Mens Denim Jacket", user: "Mike R.", time: "1 hour ago", status: "Purchased" },
    { item: "Cotton Kurta", user: "Priya M.", time: "3 hours ago", status: "Expired" }
];

function openDashboard() {
    const modal = document.getElementById('dashboardModal');
    modal.classList.remove('hidden');
    renderDashboard();
}

function closeDashboard() {
    document.getElementById('dashboardModal').classList.add('hidden');
}

function renderDashboard() {
    // 1. Render Stats
    const statsContainer = document.querySelector('.stats-grid');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card">
                <h3>142</h3>
                <p>Profile Visits</p>
            </div>
            <div class="stat-card">
                <h3>12</h3>
                <p>Active Locks</p>
            </div>
             <div class="stat-card">
                <h3>8</h3>
                <p>Confirmed Sales</p>
            </div>
        `;
    }

    // 2. Render Activity Feed
    const feedContainer = document.querySelector('.activity-list');
    if (feedContainer) {
        feedContainer.innerHTML = recentLocks.map(act => `
            <div class="activity-item">
                <div class="activity-icon">🔒</div>
                <div class="activity-details">
                    <p class="activity-text"><b>${act.user}</b> locked <b>${act.item}</b></p>
                    <p class="activity-time">${act.time}</p>
                </div>
                <span class="status-badge" style="
                    background:${act.status === 'Active' ? '#25d36620' : '#ffffff10'}; 
                    color:${act.status === 'Active' ? '#25d366' : 'var(--text-dim)'}">
                    ${act.status}
                </span>
            </div>
        `).join('');
    }
}


// Initial Render
// --- AI STYLIST LOGIC ---
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const tooltip = document.querySelector('.ai-tooltip');
    chatWindow.classList.toggle('hidden');
    // Hide tooltip
    if (tooltip) tooltip.style.display = 'none';
}

function handleOptionClick(category) {
    // 1. Show User Selection
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML = `<div class="message user-msg">I'm looking for <b>${category}</b> outfits.</div>`;

    // 2. Show Thinking
    const loadingId = 'loading-' + Date.now();
    chatBody.insertAdjacentHTML('beforeend', `<div id="${loadingId}" class="message bot-msg" style="opacity:0.7">Checking local inventory...</div>`);

    // 3. Simulate Network Delay
    setTimeout(() => {
        document.getElementById(loadingId).remove();
        showResults(category);
    }, 1000);
}

function showResults(category) {
    let responseText = "";
    let matchingProducts = [];

    // Category Logic
    if (category === 'Wedding') {
        responseText = "Great choice! Here are some verified <b>Silk & Traditional</b> options nearby:";
        matchingProducts = products.filter(p => p.fabric === 'Silk');
    }
    else if (category === 'Summer') {
        responseText = "Stay cool! These <b>Cotton & Linen</b> picks are trending now:";
        matchingProducts = products.filter(p => p.fabric === 'Cotton' || p.fabric === 'Linen');
    }
    else if (category === 'Office') {
        responseText = "Sharp & Professional. Check out these formal styles:";
        matchingProducts = products.filter(p => p.category === 'men' || (p.category === 'women' && p.fabric === 'Cotton'));
    }
    else if (category === 'Kids') {
        responseText = "Cute & Comfortable! Top picks for the little ones:";
        matchingProducts = products.filter(p => p.category === 'kids');
    }

    // Render Response
    const chatBody = document.getElementById('chatBody');
    chatBody.insertAdjacentHTML('beforeend', `<div class="message bot-msg">${responseText}</div>`);

    // Render Cards
    matchingProducts.slice(0, 3).forEach(p => {
        const hasImg = p.img && p.img.length > 5 && p.img !== "idk";
        const cardHtml = `
            <div class="chat-product" onclick="toggleChat(); openDetailModal(products.find(x => x.id === ${p.id}))">
                 ${hasImg
                ? `<img src="${p.img}" alt="${p.name}">`
                : `<div style="height:100px; background:#222; margin-bottom:5px; display:flex; align-items:center; justify-content:center; color:#555; font-size:10px;">IMG N/A</div>`
            }
                <h4>${p.name}</h4>
                <span>${p.priceRange}</span>
            </div>
        `;
        chatBody.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Add Restart Button
    chatBody.insertAdjacentHTML('beforeend', `<button class="restart-btn" onclick="resetChat()">↺ Start Over</button>`);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function resetChat() {
    document.getElementById('chatBody').innerHTML = `
        <div class="message bot-msg">
            Hi! I'm your local fashion expert. Tap an occasion below to see verified local stock!
        </div>
    `;
}

function getAIResponse(text) {
    const lower = text.toLowerCase();
    let responseText = "I can help with that! Let me check what our local shops have in stock.";
    let matchingProducts = [];

    // Simple Rule-Based AI
    if (lower.includes('wedding') || lower.includes('party') || lower.includes('silk')) {
        responseText = "For a wedding, I highly recommend our premium Silk collection. Here are some verified local options:";
        matchingProducts = products.filter(p => p.fabric === 'Silk').slice(0, 2);
    }
    else if (lower.includes('summer') || lower.includes('hot') || lower.includes('cotton') || lower.includes('casual')) {
        responseText = "For the heat, Cotton or Linen is perfect. Check out these breathable fabrics nearby:";
        matchingProducts = products.filter(p => p.fabric === 'Cotton' || p.fabric === 'Linen').slice(0, 2);
    }
    else if (lower.includes('kids') || lower.includes('boy') || lower.includes('girl')) {
        responseText = "We have some lovely outfits for the little ones! These shops are highly rated:";
        matchingProducts = products.filter(p => p.category === 'kids').slice(0, 2);
    }
    else if (lower.includes('men') || lower.includes('shirt') || lower.includes('trouser')) {
        responseText = "Here are some top picks for men from our partner boutiques:";
        matchingProducts = products.filter(p => p.category === 'men').slice(0, 2);
    }

    // Add Bot Text
    addMessage(responseText, 'bot-msg');

    // Add Product Recommendation Cards
    if (matchingProducts.length > 0) {
        const chatBody = document.getElementById('chatBody');
        matchingProducts.forEach(p => {
            const hasImg = p.img && p.img.length > 5 && p.img !== "idk";
            const card = document.createElement('div');
            card.className = 'chat-product';
            card.onclick = () => { toggleChat(); openDetailModal(p); }; // Close chat and open modal
            card.innerHTML = `
                 ${hasImg
                    ? `<img src="${p.img}" alt="${p.name}">`
                    : `<div style="height:100px; background:#222; margin-bottom:5px; display:flex; align-items:center; justify-content:center; color:#555; font-size:10px;">IMG N/A</div>`
                }
                <h4>${p.name}</h4>
                <span>${p.priceRange}</span>
            `;
            chatBody.appendChild(card);
        });
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// --- SCROLL VISIBILITY ---
window.addEventListener('scroll', () => {
    const fabContainer = document.querySelector('.ai-fab-container');
    if (fabContainer) {
        if (window.scrollY > 100) {
            fabContainer.classList.add('scroll-hidden');
        } else {
            fabContainer.classList.remove('scroll-hidden');
        }
    }
});

// --- SHOPS MODAL LOGIC ---
function openShopsModal() {
    const modal = document.getElementById('shopsModal');
    const list = document.getElementById('shopsList');
    modal.classList.remove('hidden');

    // Extract unique shops
    const uniqueShops = [];
    const seen = new Set();

    products.forEach(p => {
        if (!seen.has(p.shop)) {
            seen.add(p.shop);
            uniqueShops.push({ name: p.shop, phone: p.phone });
        }
    });

    // Render list
    list.innerHTML = uniqueShops.map(s => `
        <div class="shop-item">
            <div class="shop-icon">🏪</div>
            <div class="shop-details">
                <h4>${s.name}</h4>
                <p>📍 Near Main Road, Angamaly, Kerala</p> 
                <a href="tel:${s.phone}" class="shop-phone">📞 ${s.phone.replace('91', '+91 ')}</a>
            </div>
        </div>
    `).join('');
}

function closeShopsModal() {
    document.getElementById('shopsModal').classList.add('hidden');
}

// --- INSIGHTS MODAL LOGIC ---
function openInsightsModal() {
    document.getElementById('insightsModal').classList.remove('hidden');
}

function closeInsightsModal() {
    document.getElementById('insightsModal').classList.add('hidden');
}


render(products);

