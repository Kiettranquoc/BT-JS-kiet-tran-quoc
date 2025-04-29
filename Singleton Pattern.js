// Singleton Pattern: Đảm bảo chỉ có một instance duy nhất của một lớp
// Sử dụng: Quản lý tài nguyên duy nhất như logger, cấu hình, hoặc kết nối DB
const Logger = (function () {
    let instance; // Biến lưu trữ instance duy nhất

    function createInstance() {
        // Tạo instance với các phương thức để ghi và lấy log
        return {
            logs: [],
            log(message) {
                this.logs.push(message);
                console.log(`Log: ${message}`);
            },
            getLogs() {
                return this.logs;
            }
        };
    }

    return {
        getInstance: function () {
            // Kiểm tra nếu chưa có instance thì tạo mới, nếu có thì trả về instance cũ
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Cách chạy:
// - Gọi Logger.getInstance() để lấy instance duy nhất
// - Các lần gọi getInstance() luôn trả về cùng một instance
// - Gọi phương thức log() để ghi log, tất cả log được lưu trong mảng logs
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Error occurred"); // Log: Error occurred
logger2.log("User logged in"); // Log: User logged in
console.log(logger1.getLogs()); // ["Error occurred", "User logged in"]
console.log(logger1 === logger2); // true (cùng instance)