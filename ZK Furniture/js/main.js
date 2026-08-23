// =====================================
// Product Page Main JS
// Single source for category/search/recent-view/mobile-category behavior.
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    const productPage = document.querySelector(".product-page");
    const categoryMenu = document.getElementById("categoryMenu");
    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const clearSearch = document.getElementById("clearSearch");
    const searchResultInfo = document.getElementById("searchResultInfo");
    const recentProductNotice = document.getElementById("recentProductNotice");
    const mobileCategoryToggle = document.getElementById("mobileCategoryToggle");
    const mobileCategoryArrow = document.getElementById("mobileCategoryArrow");
    const mobileCategoryText = document.getElementById("mobileCategoryText");

    let currentCategoryIds = null;

    const setMobileCategoryName = name => {
        if (mobileCategoryText) mobileCategoryText.textContent = name || siteText.products.categories;
    };

    if (mobileCategoryToggle && categoryMenu) {
        mobileCategoryToggle.addEventListener("click", () => {
            const opened = categoryMenu.classList.toggle("mobile-category-open");
            mobileCategoryToggle.classList.toggle("active", opened);
            mobileCategoryArrow.textContent = opened ? "⌃" : "⌄";
        });
    }

    const getLeafIds = category => {
        if (!Array.isArray(category.children) || category.children.length === 0) return [category.id];
        return category.children.flatMap(getLeafIds);
    };

    const findCategoryById = (list, id) => {
        for (const category of list) {
            if (String(category.id) === String(id)) return category;
            if (category.children?.length) {
                const found = findCategoryById(category.children, id);
                if (found) return found;
            }
        }
        return null;
    };

    const getCategoryPath = (categoryId, list = categories, path = []) => {
        for (const category of list) {
            const nextPath = [...path, category.name];
            if (String(category.id) === String(categoryId)) return nextPath;
            if (category.children?.length) {
                const found = getCategoryPath(categoryId, category.children, nextPath);
                if (found) return found;
            }
        }
        return [];
    };

    const escapeHtml = text => String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const getRecentProduct = () => {
        const raw = sessionStorage.getItem("recentProduct");
        if (!raw) return null;
        try { return JSON.parse(raw); }
        catch { sessionStorage.removeItem("recentProduct"); return null; }
    };

    const saveRecentProduct = product => {
        sessionStorage.setItem("recentProduct", JSON.stringify({
            id: product.id,
            model: product.model || "",
            name: product.name,
            url: new URL(window.location.href).href,
            scrollY: window.scrollY
        }));
    };

    const renderRecentProduct = () => {
        if (!recentProductNotice) return;
        const recent = getRecentProduct();
        if (!recent) {
            recentProductNotice.innerHTML = "";
            return;
        }
        recentProductNotice.innerHTML = `<div class="recent-product-inner"><span>${escapeHtml(siteText.products.recentlyViewed)}:</span><strong>${escapeHtml(recent.model || "")}</strong></div>`;
    };

    const setActiveCategory = element => {
        document.querySelectorAll(".category-node").forEach(node => node.classList.remove("active-category"));
        document.querySelector(".all-products-item")?.classList.remove("active-all-products");
        element.classList.add("active-category");

        let parent = element.parentElement;
        while (parent && parent !== categoryMenu) {
            if (parent.classList?.contains("category-node")) {
                parent.classList.remove("collapsed");
                parent.querySelector(":scope > .category-row .category-arrow")?.replaceChildren();
                const arrow = parent.querySelector(":scope > .category-row .category-arrow");
                if (arrow) arrow.textContent = "⌄";
            }
            parent = parent.parentElement;
        }
    };

    const setActiveAllProducts = () => {
        document.querySelectorAll(".category-node").forEach(node => node.classList.remove("active-category"));
        document.querySelector(".all-products-item")?.classList.add("active-all-products");
    };

    const renderProducts = result => {
        productList.innerHTML = "";
        if (!result?.length) {
            productList.innerHTML = `<div class="no-products"><h2>${escapeHtml(siteText.products.noProducts)}</h2><p>${escapeHtml(siteText.products.noProductsText)}</p></div>`;
            return;
        }

        const recent = getRecentProduct();

        result.forEach(item => {
            const card = document.createElement("div");
            card.className = "product-card";
            if (recent && String(recent.id) === String(item.id)) card.classList.add("recent-product-card");

            const primaryImage = item.image || item.images?.[0] || "";
            const hoverImage = item.images?.[1] || primaryImage;

            card.innerHTML = `
                <div class="product-card-image" aria-hidden="true">
                    <img class="product-image product-image-primary" src="${escapeHtml(primaryImage)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
                    <img class="product-image product-image-hover" src="${escapeHtml(hoverImage)}" alt="" loading="lazy" decoding="async">
                </div>
                <h3 class="product-title">${escapeHtml(item.name)}</h3>
                ${item.model ? `<div class="product-model">Model: ${escapeHtml(item.model)}</div>` : ""}
                <p class="product-description">${escapeHtml(item.description)}</p>
                <a href="detail.html?id=${encodeURIComponent(item.id)}">${escapeHtml(siteText.products.viewDetails)}</a>
            `;

            const openDetail = event => {
                if (event) event.stopPropagation();
                saveRecentProduct(item);
                window.location.href = `detail.html?id=${encodeURIComponent(item.id)}`;
            };

            card.addEventListener("click", openDetail);
            card.querySelector("a").addEventListener("click", openDetail);
            productList.appendChild(card);
        });
    };

    const showAllProducts = () => {
        currentCategoryIds = null;
        renderProducts(products);
    };

    const showProductsByCategoryIds = ids => {
        const idSet = new Set(ids.map(String));
        renderProducts(products.filter(product => idSet.has(String(product.categoryId))));
    };

    const updateSearchInfo = (keyword = "", count = null) => {
        if (!searchResultInfo) return;
        if (!keyword) {
            searchResultInfo.textContent = "";
            return;
        }
        if (count === 0) {
            searchResultInfo.textContent = siteText.products.noSearchResults;
            return;
        }
        const found = count === 1 ? siteText.products.productFound : siteText.products.productsFound;
        searchResultInfo.textContent = `${count} ${found} ${siteText.products.searchFor} "${keyword}"`;
    };

    const searchProducts = (suppliedKeyword = null, updateUrl = true) => {
        const keyword = String(
            suppliedKeyword !== null
                ? suppliedKeyword
                : (searchInput?.value || "")
        ).trim().toLowerCase();

        if (searchInput && suppliedKeyword !== null) searchInput.value = suppliedKeyword;

        if (!keyword) {
            currentCategoryIds?.length ? showProductsByCategoryIds(currentCategoryIds) : showAllProducts();
            updateSearchInfo();
            if (updateUrl) {
                const url = new URL(window.location.href);
                url.searchParams.delete("search");
                window.history.replaceState({}, "", url);
            }
            return;
        }

        const terms = keyword.split(/\s+/).filter(Boolean);
        const source = currentCategoryIds?.length
            ? products.filter(product => new Set(currentCategoryIds.map(String)).has(String(product.categoryId)))
            : products;

        const result = source.filter(product => {
            const text = [
                product.name,
                product.description,
                product.model,
                product.specification,
                getCategoryPath(product.categoryId).join(" ")
            ].join(" ").toLowerCase();
            return terms.every(term => text.includes(term));
        });

        renderProducts(result);
        updateSearchInfo(keyword, result.length);

        if (updateUrl) {
            const url = new URL(window.location.href);
            url.searchParams.set("search", keyword);
            window.history.replaceState({}, "", url);
        }
    };

    const createCategoryElement = (category, level) => {
        const wrapper = document.createElement("div");
        wrapper.className = `category-node category-level-${level}`;

        const row = document.createElement("div");
        row.className = "category-row";

        let arrow;
        if (category.children?.length) {
            arrow = document.createElement("button");
            arrow.type = "button";
            arrow.className = "category-arrow";
            arrow.textContent = "⌄";
        } else {
            arrow = document.createElement("span");
            arrow.className = "category-arrow-placeholder";
        }

        const title = document.createElement("div");
        title.className = "category-title";
        title.textContent = category.name;
        title.addEventListener("click", () => {
            currentCategoryIds = getLeafIds(category);
            if (searchInput) searchInput.value = "";
            showProductsByCategoryIds(currentCategoryIds);
            setActiveCategory(wrapper);
            setMobileCategoryName(category.name);
            updateSearchInfo();
            if (window.innerWidth <= 768 && categoryMenu) {
                categoryMenu.classList.remove("mobile-category-open");
                mobileCategoryToggle?.classList.remove("active");
                if (mobileCategoryArrow) mobileCategoryArrow.textContent = "⌄";
            }
            const url = new URL(window.location.href);
            url.searchParams.set("category", category.id);
            url.searchParams.delete("search");
            window.history.replaceState({}, "", url);
        });

        row.append(arrow, title);
        wrapper.appendChild(row);

        if (category.children?.length) {
            const children = document.createElement("div");
            children.className = "category-children";
            category.children.forEach(child => children.appendChild(createCategoryElement(child, level + 1)));
            wrapper.appendChild(children);

            arrow.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                const collapsed = wrapper.classList.toggle("collapsed");
                arrow.textContent = collapsed ? "›" : "⌄";
            });
        }

        return wrapper;
    };

    const createCategoryMenu = () => {
        categoryMenu.innerHTML = "";
        const all = document.createElement("div");
        all.className = "all-products-item";
        all.innerHTML = `<div class="all-products-title">${escapeHtml(siteText.products.allProducts)}</div>`;
        all.querySelector(".all-products-title").addEventListener("click", () => {
            currentCategoryIds = null;
            if (searchInput) searchInput.value = "";
            showAllProducts();
            setActiveAllProducts();
            setMobileCategoryName(siteText.products.allProducts);
            updateSearchInfo();
            const url = new URL(window.location.href);
            url.searchParams.delete("category");
            url.searchParams.delete("search");
            window.history.replaceState({}, "", url);
            if (window.innerWidth <= 768) {
                categoryMenu.classList.remove("mobile-category-open");
                mobileCategoryToggle?.classList.remove("active");
                if (mobileCategoryArrow) mobileCategoryArrow.textContent = "⌄";
            }
        });
        categoryMenu.appendChild(all);
        categories.forEach(category => categoryMenu.appendChild(createCategoryElement(category, 0)));
    };

    if (searchButton) searchButton.addEventListener("click", () => searchProducts());
    if (searchInput) searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") searchProducts();
        if (searchInput.value.trim() === "") searchProducts("", true);
    });
    if (clearSearch) clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        searchProducts("", true);
        searchInput.focus();
    });

    createCategoryMenu();
    renderRecentProduct();

    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("category");
    const savedSearch = params.get("search");

    if (categoryId) {
        const category = findCategoryById(categories, categoryId);
        if (category) {
            currentCategoryIds = getLeafIds(category);
            showProductsByCategoryIds(currentCategoryIds);
            const node = [...document.querySelectorAll(".category-node")].find(el => el.querySelector(":scope > .category-row .category-title")?.textContent.trim() === category.name);
            if (node) setActiveCategory(node);
            setMobileCategoryName(category.name);
        } else {
            showAllProducts();
            setActiveAllProducts();
            setMobileCategoryName(siteText.products.allProducts);
        }
    } else {
        showAllProducts();
        setActiveAllProducts();
        setMobileCategoryName(siteText.products.categories);
    }

    if (savedSearch) searchProducts(savedSearch, false);

    const recent = getRecentProduct();
    if (recent && recent.url === window.location.href) {
        setTimeout(() => window.scrollTo(0, recent.scrollY || 0), 80);
    }

    requestAnimationFrame(() => requestAnimationFrame(() => productPage?.classList.add("page-ready")));
});
