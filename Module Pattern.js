// Module Pattern: Tổ chức mã thành module, ẩn dữ liệu private
// Sử dụng: Quản lý trạng thái (VD: counter, auth) trong ứng dụng web hoặc Node.js
const Counter = (function () {
    let count = 0; // Biến private, không thể truy cập từ bên ngoài

    return {
        increment: function () {
            // Tăng count và trả về giá trị mới
            count++;
            return count;
        },
        decrement: function () {
            // Giảm count và trả về giá trị mới
            count--;
            return count;
        },
        getCount: function () {
            // Trả về giá trị count hiện tại
            return count;
        }
    };
})();

// Cách chạy:
// - Gọi Counter.increment() hoặc Counter.decrement() để thay đổi count
// - Gọi Counter.getCount() để lấy giá trị count
// - Không thể truy cập trực tiếp vào biến count (private)
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.decrement()); // 1
console.log(Counter.getCount()); // 1
console.log(Counter.count); // undefined