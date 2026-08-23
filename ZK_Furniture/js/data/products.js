/*
================================================
产品数据库
使用页面: products.html 商品卡片、搜索；detail.html 产品详情
修改内容: model/name/description/specification/images 会影响对应产品展示
修改频率: 高频运营数据
================================================
*/
// =====================================
// Furniture Product Database
// =====================================

const products = [
    {
        id: 1001,
        model: "ZK-SF-1001",
        categoryId: 121,
        name: "Modern Luxury Sofa Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.",
        image: "images/sofa.jpg",
        description: "Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.Premium leather sofa with modern design and comfortable seating. Perfect for luxury living rooms.",
        specification: `
Material: Genuine Leather

Color: Gray / Black

Size: 2800mm × 950mm

Style: Modern Luxury

Room: Living Room
`,
        whatsapp: "8615817078236",
        images: [
            "images/sofa.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/desk.jpg",
            "images/bed.jpg"
        ]
    },
    {
        id: 1002,
        model: "ZK-BD-1002",
        categoryId: 112,
        name: "Nordic Wooden Bed",
        image: "images/bed.jpg",
        description: "Natural wooden bed with elegant Scandinavian design. Built for comfort and durability.",
        specification: `
Material: Solid Wood

Color: Natural Wood

Size: 1800mm × 2000mm

Style: Nordic

Room: Bedroom
`,
        whatsapp: "8615817078236",
        images: [
            "images/bed.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/desk.jpg",
            "images/bed.jpg"
        ]
    },
    {
        id: 1003,
        model: "ZK-DSK-1003",
        categoryId: 221,
        name: "Executive Office Desk",
        image: "images/desk.jpg",
        description: "Premium executive desk designed for modern business offices.",
        specification: `
Material: Wood + Metal

Color: Walnut

Size: 2400mm

Style: Business Modern

Room: Office
`,
        whatsapp: "8615817078236",
        images: [
            "images/desk.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/sofa.jpg",
            "images/bed.jpg"
        ]
    },
    {
        id: 1004,
        model: "ZK-NS-1004",
        categoryId: 114,
        name: "Minimalist Nightstand",
        image: "images/nightstand.jpg",
        description: "Compact wooden nightstand matching modern bedroom furniture.",
        specification: `
Material: Solid Wood

Color: Natural

Size: 500mm

Style: Minimalist
`,
        whatsapp: "8615817078236",
        images: [
            "images/nightstand.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/desk.jpg",
            "images/bed.jpg"
        ]
    },
    {
        id: 1005,
        model: "ZK-TB-1005",
        categoryId: 122,
        name: "Modern Coffee Table",
        image: "images/table.jpg",
        description: "Modern coffee table with premium surface and elegant structure.",
        specification: `
Material: Rock Plate + Metal

Color: Black / White

Size: 1200mm

Style: Modern Luxury
`,
        whatsapp: "8615817078236",
        images: [
            "images/table.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/desk.jpg",
            "images/bed.jpg"
        ]
    },
    {
        id: 1006,
        categoryId: 212,
        name: "Ergonomic Office Chair",
        image: "images/chair.jpg",
        description: "Ergonomic office chair designed for long working hours.",
        specification: `
Material: Mesh Fabric

Color: Black

Function: Ergonomic Support

Room: Office
`,
        whatsapp: "8615817078236",
        images: [
            "images/chair.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/desk.jpg",
            "images/bed.jpg"
        ]
    }
];
