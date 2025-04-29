// Factory Pattern: Tạo đối tượng mà không cần chỉ định lớp cụ thể
// Sử dụng: Tạo các đối tượng thuộc nhiều loại (VD: sản phẩm, phương tiện) trong e-commerce hoặc game
function Electronics() {
    this.type = "Electronics";
    this.getInfo = function () {
        return `${this.type} product`;
    };
}

function Clothing() {
    this.type = "Clothing";
    this.getInfo = function () {
        return `${this.type} product`;
    };
}

const ProductFactory = {
    createProduct: function (category) {
        // Dựa trên category, trả về instance của lớp tương ứng
        switch (category) {
            case "electronics":
                return new Electronics();
            case "clothing":
                return new Clothing();
            default:
                throw new Error("Unknown product category");
        }
    }
};

// Cách chạy:
// - Gọi ProductFactory.createProduct(category) với category là "electronics" hoặc "clothing"
// - Factory sẽ tạo và trả về instance của Electronics hoặc Clothing
// - Gọi getInfo() trên instance để lấy thông tin sản phẩm
const electronic = ProductFactory.createProduct("electronics");
const clothing = ProductFactory.createProduct("clothing");
console.log(electronic.getInfo()); // Electronics product
console.log(clothing.getInfo()); // Clothing product