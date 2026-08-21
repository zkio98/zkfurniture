// =====================================
// Furniture Category Database
// =====================================

const categories = [
    {
        id: 1,
        name: "家庭家具",
        children: [
            {
                id: 11,
                name: "卧室",
                children: [
                    { id: 111, name: "床套装" },
                    { id: 112, name: "床" },
                    { id: 113, name: "梳妆台" },
                    { id: 114, name: "床头柜" }
                ]
            },
            {
                id: 12,
                name: "客厅",
                children: [
                    { id: 121, name: "沙发" },
                    { id: 122, name: "茶几 & 电视台" },
                    { id: 123, name: "抽柜" },
                    { id: 124, name: "储物柜" }
                ]
            },
            {
                id: 13,
                name: "厨房",
                children: [
                    { id: 131, name: "橱柜" }
                ]
            },
            {
                id: 14,
                name: "餐厅",
                children: [
                    { id: 141, name: "餐厅桌子 & 椅子" }
                ]
            },
            {
                id: 15,
                name: "浴室",
                children: [
                    { id: 151, name: "浴室柜" },
                    { id: 152, name: "智能马桶" },
                    {
                        id: 153,
                        name: "浴室五金",
                        children: [
                            { id: 1531, name: "水龙头" },
                            { id: 1532, name: "花洒" },
                            { id: 1533, name: "喷射器" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "办公室家具",
        children: [
            {
                id: 21,
                name: "接待处",
                children: [
                    { id: 211, name: "接待台" },
                    { id: 212, name: "三人等候椅" }
                ]
            },
            {
                id: 22,
                name: "高管办公室",
                children: [
                    { id: 221, name: "高管工作台" },
                    { id: 222, name: "文件柜" }
                ]
            },
            {
                id: 23,
                name: "员工办公室",
                children: [
                    { id: 231, name: "工作台" },
                    { id: 232, name: "文件柜" }
                ]
            },
            {
                id: 24,
                name: "会议室",
                children: [
                    { id: 241, name: "会议桌子" }
                ]
            }
        ]
    }
];
