# Session 1: Initial Project

    Project dùng để học BE và NestJS

# Session 2: Install packages cần thiết

    1. Morgan
    Dùng để generate và theo dõi status code của request
    2. Hermet
    Dùng để chặn thăm dò công nghệ sử dụng.
    3. Compression
    Dùng để nén dữ liệu được gửi đến client nhằm giảm lượng băng thông tiêu tốn

# Session 3: Connect MongoDB

    ....

# Session 4: Add configs file

    1. Env
    File env dùng để lưu trữ các biến môi trường có thể chứa thông tin nhạy cảm. Khi sử dụng, nên được thêm vào gitnore để không được đẩy lên cùng với sources
    2. Tệp configs
    Configs cũng dùng để lưu các biến môi trường và các biến mặc định dùng để lưu trong dự án. Với các configs nên chia thành các môi trường như development, production, release và reRelease,...

# Session 5: Viết api sign up store

    Flow cơ bản khi sign up dùng RSA và JWT:
    1. Kiểm tra có store có tồn tại hay chưa
    2. Hash password để lưu store
    3. Tạo cặp khóa private và public cho việc sign và verify JWT
    4. Generate cặp khóa accessToken và refreshToken ( private dùng cho sign và public dùng cho verify)
    5. Return về dữ liệu trả về
