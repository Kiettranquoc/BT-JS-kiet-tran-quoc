1. Singleton Pattern

Mô tả

Singleton đảm bảo một lớp chỉ có một thể hiện duy nhất và cung cấp điểm truy cập toàn cục đến thể hiện đó. Pattern này rất phổ biến trong các ứng dụng cần quản lý tài nguyên duy nhất, như cấu hình ứng dụng hoặc kết nối cơ sở dữ liệu.

Giải Thích

Một ứng dụng web cần một đối tượng Logger để ghi log lỗi hoặc sự kiện. Chỉ một thể hiện của Logger được phép tồn tại để đảm bảo log được ghi nhất quán.

1. Factory Pattern

Mô tả

Factory Pattern cung cấp một giao diện để tạo các đối tượng mà không cần chỉ định lớp cụ thể của chúng. Nó giúp tách biệt logic tạo đối tượng, làm cho mã dễ bảo trì và mở rộng.

Giải Thích

Một ứng dụng thương mại điện tử cần tạo các loại sản phẩm (Electronics, Clothing) dựa trên danh mục, mà không muốn mã nguồn phụ thuộc trực tiếp vào các lớp cụ thể.

3. Observer Pattern

Mô tả

Observer Pattern định nghĩa mối quan hệ một-nhiều giữa các đối tượng. Khi trạng thái của một đối tượng thay đổi, tất cả các đối tượng phụ thuộc (observers) sẽ được thông báo và cập nhật. Pattern này rất phổ biến trong các ứng dụng giao diện người dùng (UI).

Giải Thích

Một ứng dụng quản lý nhiệm vụ (Task Manager) cần thông báo cho các thành phần giao diện (như danh sách nhiệm vụ hoặc thông báo) khi một nhiệm vụ được thêm vào.

4. Module Pattern

Mô tả

Module Pattern tổ chức mã thành các module độc lập, ẩn đi các chi tiết triển khai (private) và chỉ công khai các phương thức cần thiết (public). Đây là một trong những pattern phổ biến nhất trong JavaScript để quản lý mã nguồn và tránh ô nhiễm không gian tên toàn cục.

Giải Thích

Một ứng dụng cần một module Counter để quản lý số đếm, với các phương thức công khai như tăng, giảm, và lấy giá trị, nhưng ẩn đi biến trạng thái nội bộ.

5. Strategy Pattern

Mô tả

Strategy Pattern cho phép thay đổi thuật toán hoặc hành vi của một đối tượng tại thời điểm chạy bằng cách sử dụng các chiến lược khác nhau. Pattern này rất phổ biến khi cần hỗ trợ nhiều cách xử lý cho cùng một tác vụ.

Giải Thích
Một ứng dụng vận chuyển cần tính chi phí vận chuyển dựa trên các phương thức khác nhau (Standard, Express, Overnight) và có thể dễ dàng thay đổi phương thức.