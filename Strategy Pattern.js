// Strategy Pattern: Thay đổi thuật toán/hành vi tại runtime
// Sử dụng: Xử lý nhiều cách thực hiện (VD: thanh toán, vận chuyển) trong e-commerce hoặc logistics
const StandardShipping = {
    calculate: function (weight) {
        // Tính chi phí theo chiến lược Standard: $2/kg
        return weight * 2;
    }
};

const ExpressShipping = {
    calculate: function (weight) {
        // Tính chi phí theo chiến lược Express: $5/kg
        return weight * 5;
    }
};

function ShippingContext(strategy) {
    this.strategy = strategy; // Lưu chiến lược hiện tại

    this.setStrategy = function (strategy) {
        // Thay đổi chiến lược tại runtime
        this.strategy = strategy;
    };

    this.calculateCost = function (weight) {
        // Gọi phương thức calculate của chiến lược hiện tại
        return this.strategy.calculate(weight);
    };
}

// Cách chạy:
// - Tạo ShippingContext với một chiến lược ban đầu (VD: StandardShipping)
// - Gọi calculateCost(weight) để tính chi phí
// - Gọi setStrategy() để thay đổi chiến lược (VD: sang ExpressShipping)
const shipping = new ShippingContext(StandardShipping);
console.log(shipping.calculateCost(10)); // 20
shipping.setStrategy(ExpressShipping);
console.log(shipping.calculateCost(10)); // 50