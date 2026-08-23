// =====================================
// Multilingual Website Copy
// =====================================
const currentLanguage = localStorage.getItem("zkLanguage") || "en";
const translations = {
 en: {
  nav:{home:"Home",products:"Products",collections:"Collections",about:"About"},
  home:{hero1Title:"Luxury Furniture<br>For Modern Living",hero1Text:"Create Your Perfect Space",hero1Button:"Explore Products",hero2Title:"Elegant Design<br>Timeless Comfort",hero2Text:"Premium Furniture Collection",hero2Button:"View Collection",hero3Title:"Furniture<br>Made For Life",hero3Text:"Quality Meets Design",hero3Button:"Discover More",collectionsTitle:"Furniture Collections",collectionsText:"Explore Our Premium Furniture",cards:{card1:"Bedroom Furniture",card2:"Bathroom Furniture",card3:"Office Furniture"},aboutTitle:"Design Your Dream Space",aboutText:"We create furniture that combines beauty, comfort and quality."},
  products:{pageTitle:"Furniture Collection",searchPlaceholder:"Search products...",searchButton:"Search",clearButton:"Clear",allProducts:"All Products",categories:"Categories",recentlyViewed:"Recently Viewed",viewDetails:"View Details",noProducts:"No Products",noProductsText:"No products available.",noSearchResults:"No products found.",productFound:"product found",productsFound:"products found",searchFor:"for"},
  detail:{backToProducts:"Back to Products",introduction:"Introduction",specifications:"Specifications",whatsapp:"Contact on WhatsApp"},
  footer:{copyright:"© 2026 Luxury Furniture",whatsapp:"WhatsApp: +8615817078236"},
  whatsapp:{number:"8615817078236",messagePrefix:"Hello, I am interested in"}
 },
 fr: {nav:{home:"Accueil",products:"Produits",collections:"Collections",about:"À propos"},products:{pageTitle:"Collection de meubles",searchPlaceholder:"Rechercher des produits...",searchButton:"Rechercher",clearButton:"Effacer",allProducts:"Tous les produits",categories:"Catégories",recentlyViewed:"Vu récemment",viewDetails:"Voir les détails"},detail:{backToProducts:"Retour aux produits",introduction:"Introduction",specifications:"Spécifications",whatsapp:"Contacter sur WhatsApp"},footer:{copyright:"© 2026 Luxury Furniture",whatsapp:"WhatsApp: +8615817078236"},whatsapp:{number:"8615817078236",messagePrefix:"Bonjour, je suis intéressé par"}},
 es: {nav:{home:"Inicio",products:"Productos",collections:"Colecciones",about:"Acerca de"},products:{pageTitle:"Colección de muebles",searchPlaceholder:"Buscar productos...",searchButton:"Buscar",clearButton:"Limpiar",allProducts:"Todos los productos",categories:"Categorías",recentlyViewed:"Visto recientemente",viewDetails:"Ver detalles"},detail:{backToProducts:"Volver a productos",introduction:"Introducción",specifications:"Especificaciones",whatsapp:"Contactar por WhatsApp"},footer:{copyright:"© 2026 Luxury Furniture",whatsapp:"WhatsApp: +8615817078236"},whatsapp:{number:"8615817078236",messagePrefix:"Hola, estoy interesado en"}}
};
function deepMerge(base, extra){const o=JSON.parse(JSON.stringify(base)); for(const k in extra){if(extra[k]&&typeof extra[k]==='object')o[k]=deepMerge(o[k]||{},extra[k]);else o[k]=extra[k];}return o;}
const siteText = deepMerge(translations.en, translations[currentLanguage]||{});
