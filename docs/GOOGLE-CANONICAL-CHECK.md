# Hướng dẫn kiểm tra "Trang trùng lặp, chưa chọn trang chính tắc" (Google)

## Đã làm gì trong code

1. **Thêm thẻ canonical** trong `public/index.html`:
   - `<link rel="canonical" href="https://garageviet.vn/" id="canonical-link" />`

2. **Cập nhật canonical theo từng trang** trong `src/App.js`:
   - Mỗi URL (/, /garageviet-privacy-policy, /garageviet-operation-policy, /account-deletion) tự trỏ canonical về chính nó.
   - Google sẽ biết đâu là trang chính tắc → giảm báo duplicate.

3. **Sitemap** đã có đủ 4 trang (kể cả /account-deletion).

---

## Cách check sau khi deploy

### 1. Kiểm tra canonical trên từng trang (trên web thật)

- Mở từng URL (đã deploy):
  - `https://garageviet.vn/`
  - `https://garageviet.vn/garageviet-privacy-policy`
  - `https://garageviet.vn/garageviet-operation-policy`
  - `https://garageviet.vn/account-deletion`
- Chuột phải → **Xem nguồn trang** (View Page Source).
- Tìm thẻ `<link rel="canonical"`:
  - Trang chủ: `href="https://garageviet.vn/"`
  - Các trang con: `href` phải trùng đúng URL trang đó (ví dụ `https://garageviet.vn/garageviet-privacy-policy`).

Nếu dùng React, canonical được cập nhật bằng JS nên trong “View source” có thể vẫn thấy giá trị mặc định; **Inspect (F12) → tab Elements** và xem thẻ `<link id="canonical-link">` sau khi trang load xong — `href` phải đúng với URL hiện tại.

### 2. Google Search Console

- Vào [Search Console](https://search.google.com/search-console) → chọn property **garageviet.vn**.
- **Trạng thái xác thực:**
  - Vào **Vấn đề (Issues)** hoặc **Lập chỉ mục → Trang**.
  - Tìm mục **“Trang trùng lặp, người dùng chưa chọn trang chính tắc”**.
  - Nếu bạn đã gửi yêu cầu xác thực bản sửa lỗi, sẽ thấy trạng thái dạng “Đang xác thực” hoặc “Đã xác thực” (vài ngày đến vài tuần).
- **Kiểm tra URL:**
  - **Kiểm tra URL (URL Inspection):** dán từng URL (4 trang trên) → **Yêu cầu lập chỉ mục (Request indexing)** một lần cho mỗi URL sau khi đã có canonical đúng.

### 3. Công cụ Rich Results / SEO (tùy chọn)

- [Google Rich Results Test](https://search.google.com/test/rich-results): dán URL → xem có lỗi cấu trúc không.
- Các extension SEO (ví dụ “SEO Meta in 1 Click”) trên Chrome: mở từng trang → xem meta và canonical có đúng không.

### 4. Đợi Google hoàn tất xác thực

- Thông báo “Google đã bắt đầu xác thực bản sửa lỗi…” nghĩa là Google đang thu thập lại và kiểm tra.
- Thường **vài ngày đến vài tuần** mới hết báo lỗi.
- Khi xác thực xong, Search Console sẽ gửi thông báo (email / trong GSC).

---

## Tóm tắt

| Việc cần làm | Cách làm |
|--------------|----------|
| Xem canonical đúng chưa | View source hoặc F12 → Elements → `<link id="canonical-link">` trên từng URL. |
| Theo dõi trạng thái sửa lỗi | Search Console → Vấn đề / Lập chỉ mục → xem trạng thái “Trang trùng lặp…”. |
| Đẩy nhanh lập chỉ mục | URL Inspection → Yêu cầu lập chỉ mục cho 4 URL. |
| Đợi kết quả | Đợi thông báo từ Google sau vài ngày / vài tuần. |

Nếu domain thật không phải `https://garageviet.vn`, nhớ đổi `BASE_URL` trong `App.js` và `canonical` trong `index.html` cho đúng domain.
