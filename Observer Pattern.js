// Observer Pattern: Thông báo các đối tượng phụ thuộc khi trạng thái thay đổi
// Sử dụng: Cập nhật UI (VD: giỏ hàng, danh sách nhiệm vụ) hoặc hệ thống publish-subscribe
function TaskManager() {
    this.observers = []; // Lưu danh sách các observer
    this.tasks = []; // Lưu danh sách nhiệm vụ

    this.addObserver = function (observer) {
        // Thêm observer vào danh sách
        this.observers.push(observer);
    };

    this.notify = function (task) {
        // Gọi phương thức update của từng observer với task mới
        this.observers.forEach(observer => observer.update(task));
    };

    this.addTask = function (task) {
        // Thêm task vào danh sách và thông báo cho các observer
        this.tasks.push(task);
        this.notify(task);
    };
}

function Observer(name) {
    this.name = name;
    this.update = function (task) {
        // Xử lý thông báo khi nhận được task mới
        console.log(`${this.name} notified: New task - ${task}`);
    };
}

// Cách chạy:
// - Tạo TaskManager và các Observer
// - Đăng ký observer bằng addObserver()
// - Gọi addTask() để thêm task, sẽ tự động kích hoạt notify() để thông báo
const taskManager = new TaskManager();
const uiObserver = new Observer("UI_Display");
const notificationObserver = new Observer("Notification");
taskManager.addObserver(uiObserver);
taskManager.addObserver(notificationObserver);
taskManager.addTask("Complete report"); 
// UI_Display notified: New task - Complete report
// Notification notified: New task - Complete report