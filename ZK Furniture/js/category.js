// =====================================
// Furniture Category Database
// =====================================

const categories = [
    {
        id: 1,
        name: "Home Furniture",
        children: [
            {
                id: 11,
                name: "Entryway & Hallway Furniture",
                children: [
                    { id: 111, name: "Entryway Cabinets" },
                    { id: 112, name: "Console Tables" },
                    { id: 113, name: "Entryway Benches" },
                    { id: 114, name: "Coat Racks & Hooks" },
                    { id: 115, name: "Entryway Mirrors" }
                ]
            },
            {
                id: 12,
                name: "Living Room Furniture",
                children: [
                    { id: 121, name: "Sofas & Sofa Beds" },
                    { id: 122, name: "Coffee Tables & Side Tables" },
                    { id: 123, name: "TV Stands & TV Units" },
                    { id: 124, name: "Armchairs & Lounge Chairs" },
                    { id: 125, name: "Recliners" },
                    { id: 126, name: "Display & Storage Cabinets" }
                ]
            },
            {
                id: 13,
                name: "Dining Room Furniture",
                children: [
                    { id: 131, name: "Dining Tables" },
                    { id: 132, name: "Dining Chairs" },
                    { id: 133, name: "Dining Sets" },
                    { id: 134, name: "Sideboards & Buffet Cabinets" },
                    { id: 135, name: "Bar Tables & Bar Stools" }
                ]
            },
            {
                id: 14,
                name: "Bedroom Furniture",
                children: [
                    { id: 141, name: "Beds" },
                    { id: 142, name: "Bedside Tables" },
                    { id: 143, name: "Wardrobes" },
                    { id: 144, name: "Dressers & Dressing Tables" },
                    { id: 145, name: "Bedroom Sets" }
                ]
            },
            {
                id: 15,
                name: "Kitchen Furniture",
                children: [
                    { id: 151, name: "Kitchen Cabinets" },
                    { id: 152, name: "Kitchen Islands" },
                    { id: 153, name: "Kitchen Storage Cabinets" }
                ]
            },
            {
                id: 16,
                name: "Bathroom Furniture",
                children: [
                    { id: 161, name: "Bathroom Cabinets" },
                    { id: 162, name: "Bathroom Shelves" },
                    { id: 163, name: "Bathroom Mirrors" }
                ]
            }
        ]
    },

    {
        id: 2,
        name: "Office Furniture",
        children: [
            {
                id: 21,
                name: "Office Desks",
                children: [
                    { id: 211, name: "Executive Desks" },
                    { id: 212, name: "Manager Desks" },
                    { id: 213, name: "Staff Desks" },
                    { id: 214, name: "L-Shaped Desks" }
                ]
            },
            {
                id: 22,
                name: "Office Chairs",
                children: [
                    { id: 221, name: "Executive Chairs" },
                    { id: 222, name: "Ergonomic Office Chairs" },
                    { id: 223, name: "Conference Chairs" },
                    { id: 224, name: "Visitor Chairs" }
                ]
            },
            {
                id: 23,
                name: "Meeting Room Furniture",
                children: [
                    { id: 231, name: "Conference Tables" },
                    { id: 232, name: "Meeting Room Cabinets" }
                ]
            },
            {
                id: 24,
                name: "Office Storage",
                children: [
                    { id: 241, name: "Office Storage Cabinets" },
                    { id: 242, name: "Mobile Pedestals" },
                    { id: 243, name: "Shelving Units" }
                ]
            },
            {
                id: 25,
                name: "Reception Area Furniture",
                children: [
                    { id: 251, name: "Reception Desks" },
                    { id: 252, name: "Reception Tables" },
                    { id: 253, name: "Reception Chairs" }
                ]
            },
            {
                id: 26,
                name: "Office Lounge Furniture",
                children: [
                    { id: 261, name: "Office Sofas" },
                    { id: 262, name: "Lounge Chairs" },
                    { id: 263, name: "Coffee Tables & Side Tables" }
                ]
            },
            {
                id: 27,
                name: "Office Workstations",
                children: [
                    { id: 271, name: "Single Workstations" },
                    { id: 272, name: "Multi-Person Workstations" }
                ]
            }
        ]
    }
];
