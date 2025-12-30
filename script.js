// 理想L9 Ultra参数信息
const idealL9Specs = {
    overview: {
        price: "40.98万起",
        range: "280公里",
        seats: "6座",
        acceleration: "5.18秒"
    },
    performance: {
        power: "330 kW",
        torque: "620 N·m",
        acceleration: "5.18 秒",
        topSpeed: "180 km/h"
    },
    design: {
        dimensions: "5218×1998×1800 mm",
        wheelbase: "3105 mm",
        seats: "6座 (2-2-2布局)",
        dragCoefficient: "0.3 Cd"
    },
    technology: {
        centralScreen: "15.7英寸 OLED",
        rearEntertainment: "21.4英寸 LCD",
        chip: "高通骁龙8295P",
        adSystem: "理想AD Max"
    },
    safety: {
        airbags: "主/副驾驶座+前后排侧气囊+前后排头部气囊",
        drivingAssistance: "全速自适应巡航+360度全景影像",
        braking: "前后通风盘式制动",
        tirePressure: "胎压显示"
    },
    specifications: {
        basic: {
            price: "40.98万-43.98万",
            manufacturer: "理想汽车",
            level: "大型SUV",
            energyType: "增程式",
            launchDate: "2025.05"
        },
        powertrain: {
            motorPower: "330 kW",
            motorTorque: "620 N·m",
            engine: "1.5L 涡轮增压",
            transmission: "电动车单速变速箱",
            driveMode: "双电机四驱"
        },
        battery: {
            type: "三元锂电池",
            capacity: "52.3 kWh",
            range: "280 km",
            combinedRange: "1176 km",
            chargingTime: "0.42 小时 (20-80%)"
        },
        dimensions: {
            length: "5218 mm",
            width: "1998 mm",
            height: "1800 mm",
            wheelbase: "3105 mm",
            seats: "6座"
        }
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 更新概览部分
    updateOverviewSection();
    
    // 更新性能部分
    updatePerformanceSection();
    
    // 更新设计部分
    updateDesignSection();
    
    // 更新科技部分
    updateTechnologySection();
    
    // 更新安全部分
    updateSafetySection();
    
    // 更新详细参数部分
    updateSpecificationsSection();
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 更新概览部分
function updateOverviewSection() {
    // 这部分数据是静态的，已经在HTML中定义
}

// 更新性能部分
function updatePerformanceSection() {
    document.querySelector('.performance-text .spec-item:nth-child(1) .spec-value').textContent = idealL9Specs.performance.power;
    document.querySelector('.performance-text .spec-item:nth-child(2) .spec-value').textContent = idealL9Specs.performance.torque;
    document.querySelector('.performance-text .spec-item:nth-child(3) .spec-value').textContent = idealL9Specs.performance.acceleration;
    document.querySelector('.performance-text .spec-item:nth-child(4) .spec-value').textContent = idealL9Specs.performance.topSpeed;
}

// 更新设计部分
function updateDesignSection() {
    document.querySelector('.design-text .spec-item:nth-child(1) .spec-value').textContent = idealL9Specs.design.dimensions;
    document.querySelector('.design-text .spec-item:nth-child(2) .spec-value').textContent = idealL9Specs.design.wheelbase;
    document.querySelector('.design-text .spec-item:nth-child(3) .spec-value').textContent = idealL9Specs.design.seats;
    document.querySelector('.design-text .spec-item:nth-child(4) .spec-value').textContent = idealL9Specs.design.dragCoefficient;
}

// 更新科技部分
function updateTechnologySection() {
    document.querySelector('.technology-text .spec-item:nth-child(1) .spec-value').textContent = idealL9Specs.technology.centralScreen;
    document.querySelector('.technology-text .spec-item:nth-child(2) .spec-value').textContent = idealL9Specs.technology.rearEntertainment;
    document.querySelector('.technology-text .spec-item:nth-child(3) .spec-value').textContent = idealL9Specs.technology.chip;
    document.querySelector('.technology-text .spec-item:nth-child(4) .spec-value').textContent = idealL9Specs.technology.adSystem;
}

// 更新安全部分
function updateSafetySection() {
    document.querySelector('.safety-text .spec-item:nth-child(1) .spec-value').textContent = idealL9Specs.safety.airbags;
    document.querySelector('.safety-text .spec-item:nth-child(2) .spec-value').textContent = idealL9Specs.safety.drivingAssistance;
    document.querySelector('.safety-text .spec-item:nth-child(3) .spec-value').textContent = idealL9Specs.safety.braking;
    document.querySelector('.safety-text .spec-item:nth-child(4) .spec-value').textContent = idealL9Specs.safety.tirePressure;
}

// 更新详细参数部分
function updateSpecificationsSection() {
    // 基本参数
    const basicSpecs = document.querySelectorAll('.spec-category:nth-child(1) .specs-table td:nth-child(2)');
    basicSpecs[0].textContent = idealL9Specs.specifications.basic.price;
    basicSpecs[1].textContent = idealL9Specs.specifications.basic.manufacturer;
    basicSpecs[2].textContent = idealL9Specs.specifications.basic.level;
    basicSpecs[3].textContent = idealL9Specs.specifications.basic.energyType;
    basicSpecs[4].textContent = idealL9Specs.specifications.basic.launchDate;
    
    // 动力系统
    const powertrainSpecs = document.querySelectorAll('.spec-category:nth-child(2) .specs-table td:nth-child(2)');
    powertrainSpecs[0].textContent = idealL9Specs.specifications.powertrain.motorPower;
    powertrainSpecs[1].textContent = idealL9Specs.specifications.powertrain.motorTorque;
    powertrainSpecs[2].textContent = idealL9Specs.specifications.powertrain.engine;
    powertrainSpecs[3].textContent = idealL9Specs.specifications.powertrain.transmission;
    powertrainSpecs[4].textContent = idealL9Specs.specifications.powertrain.driveMode;
    
    // 电池与续航
    const batterySpecs = document.querySelectorAll('.spec-category:nth-child(3) .specs-table td:nth-child(2)');
    batterySpecs[0].textContent = idealL9Specs.specifications.battery.type;
    batterySpecs[1].textContent = idealL9Specs.specifications.battery.capacity;
    batterySpecs[2].textContent = idealL9Specs.specifications.battery.range;
    batterySpecs[3].textContent = idealL9Specs.specifications.battery.combinedRange;
    batterySpecs[4].textContent = idealL9Specs.specifications.battery.chargingTime;
    
    // 车身尺寸
    const dimensionSpecs = document.querySelectorAll('.spec-category:nth-child(4) .specs-table td:nth-child(2)');
    dimensionSpecs[0].textContent = idealL9Specs.specifications.dimensions.length;
    dimensionSpecs[1].textContent = idealL9Specs.specifications.dimensions.width;
    dimensionSpecs[2].textContent = idealL9Specs.specifications.dimensions.height;
    dimensionSpecs[3].textContent = idealL9Specs.specifications.dimensions.wheelbase;
    dimensionSpecs[4].textContent = idealL9Specs.specifications.dimensions.seats;
}
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 悬停效果增强
    const overviewItems = document.querySelectorAll('.overview-item');
    overviewItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });

    // 按钮悬停效果
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 页眉滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // 动态加载参数数据
    loadSpecsData();
});

// 模拟从Excel文件加载数据
function loadSpecsData() {
    // 这里应该是从Excel文件读取数据的逻辑
    // 由于浏览器环境限制，我们使用模拟数据
    
    // 实际项目中，可以使用SheetJS等库来读取Excel文件
    // 例如：https://github.com/SheetJS/sheetjs
    
    // 模拟数据
    const specsData = {
        "基本参数": [
            {"参数名称": "厂商指导价", "参数值": "40.98万-43.98万"},
            {"参数名称": "厂商", "参数值": "理想汽车"},
            {"参数名称": "级别", "参数值": "大型SUV"},
            {"参数名称": "能源类型", "参数值": "增程式"},
            {"参数名称": "上市时间", "参数值": "2025.05"}
        ],
        "动力系统": [
            {"参数名称": "电动机总功率", "参数值": "330 kW"},
            {"参数名称": "电动机总扭矩", "参数值": "620 N·m"},
            {"参数名称": "发动机", "参数值": "1.5L 涡轮增压"},
            {"参数名称": "变速箱", "参数值": "电动车单速变速箱"},
            {"参数名称": "驱动方式", "参数值": "双电机四驱"}
        ],
        "电池与续航": [
            {"参数名称": "电池类型", "参数值": "三元锂电池"},
            {"参数名称": "电池能量", "参数值": "52.3 kWh"},
            {"参数名称": "CLTC纯电续航", "参数值": "280 km"},
            {"参数名称": "WLTC综合续航", "参数值": "1176 km"},
            {"参数名称": "快充时间", "参数值": "0.42 小时 (20-80%)"}
        ],
        "车身尺寸": [
            {"参数名称": "长度", "参数值": "5218 mm"},
            {"参数名称": "宽度", "参数值": "1998 mm"},
            {"参数名称": "高度", "参数值": "1800 mm"},
            {"参数名称": "轴距", "参数值": "3105 mm"},
            {"参数名称": "座位数", "参数值": "6座"}
        ]
    };
    
    // 更新页面上的参数数据
    updateSpecsData(specsData);
}

// 更新页面上的参数数据
function updateSpecsData(data) {
    // 基本参数
    if (data["基本参数"]) {
        const basicSpecsTable = document.querySelector('.spec-category:nth-child(1) .specs-table');
        if (basicSpecsTable) {
            basicSpecsTable.innerHTML = '';
            data["基本参数"].forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.参数名称}</td><td>${item.参数值}</td>`;
                basicSpecsTable.appendChild(row);
            });
        }
    }
    
    // 动力系统
    if (data["动力系统"]) {
        const powerSpecsTable = document.querySelector('.spec-category:nth-child(2) .specs-table');
        if (powerSpecsTable) {
            powerSpecsTable.innerHTML = '';
            data["动力系统"].forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.参数名称}</td><td>${item.参数值}</td>`;
                powerSpecsTable.appendChild(row);
            });
        }
    }
    
    // 电池与续航
    if (data["电池与续航"]) {
        const batterySpecsTable = document.querySelector('.spec-category:nth-child(3) .specs-table');
        if (batterySpecsTable) {
            batterySpecsTable.innerHTML = '';
            data["电池与续航"].forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.参数名称}</td><td>${item.参数值}</td>`;
                batterySpecsTable.appendChild(row);
            });
        }
    }
    
    // 车身尺寸
    if (data["车身尺寸"]) {
        const sizeSpecsTable = document.querySelector('.spec-category:nth-child(4) .specs-table');
        if (sizeSpecsTable) {
            sizeSpecsTable.innerHTML = '';
            data["车身尺寸"].forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.参数名称}</td><td>${item.参数值}</td>`;
                sizeSpecsTable.appendChild(row);
            });
        }
    }
}

// 添加动画效果
function animateOnScroll() {
    const elements = document.querySelectorAll('.overview-item, .spec-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// 滚动事件监听
window.addEventListener('scroll', animateOnScroll);

// 初始化动画
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.overview-item, .spec-category');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 触发动画
    setTimeout(animateOnScroll, 100);
});