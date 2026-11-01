# SPEC – Tên Đẹp Cho Bé (THUẦN thần số học, KHÔNG có ngũ hành/tử vi)

## Chuẩn hoá chữ
Bỏ dấu tiếng Việt (NFD, xoá dấu kết hợp), đ/Đ → D, viết hoa, bỏ ký tự không phải A–Z.

## Bảng chữ → số (Pythagoras)
1: A J S · 2: B K T · 3: C L U · 4: D M V · 5: E N W · 6: F O X · 7: G P Y · 8: H Q Z · 9: I R

## Rút gọn (reduce)
Cộng các chữ số lặp lại đến khi ≤ 9, NHƯNG dừng lại nếu gặp 11, 22, 33 (số chủ/master).

## Số chủ đạo (từ ngày sinh dd/mm/yyyy)
Cộng TẤT CẢ chữ số của ngày, tháng, năm rồi reduce. Ví dụ 15/12/2026: 1+5+1+2+2+0+2+6 = 19 → 10 → 1.
Ví dụ 29/09/1992: 2+9+0+9+1+9+9+2 = 41 → 5.

## Số linh hồn (nguyên âm)
Nguyên âm: A E I O U, và Y khi Y là nguyên âm (trong tiếng Việt coi Y luôn là nguyên âm). Cộng giá trị các nguyên âm của họ tên đầy đủ, reduce.
Ví dụ "Nguyễn Bảo An" → NGUYEN BAO AN: nguyên âm U3 Y7 E5 A1 O6 A1 = 23 → 5.

## Số sứ mệnh (biểu đạt)
Cộng giá trị tất cả chữ cái họ tên đầy đủ, reduce.
Ví dụ "Nguyễn Bảo An": N5 G7 U3 Y7 E5 N5 =32; B2 A1 O6 =9; A1 N5 =6 → 47 → 11 (giữ 11).

## Số nhân cách (phụ âm)
Cộng giá trị các phụ âm (không phải A E I O U Y), reduce. "Nguyễn Bảo An": N5 G7 N5 B2 N5 = 24 → 6.

## 6 tiêu chí (0–100) và điểm tổng (deterministic, không Math.random)
- Hợp số chủ đạo: so sứ mệnh (rút về 1 chữ số, 11→2, 22→4, 33→6) với số chủ đạo (cũng rút): bằng nhau 95; cùng nhóm (1-5-7), (2-4-8), (3-6-9) 90; lệch 1–2 → 78; còn lại 65.
- Linh hồn: 1,3,5,6,9 → 88; 11,22,33 → 95; 2,4,7,8 → 75.
- Sứ mệnh: như linh hồn.
- Nhân cách: như linh hồn.
- Âm điệu: 3 âm tiết 85, 4 âm tiết 80; nếu các âm tiết không cùng thanh điệu +10; nếu tên chính và đệm không cùng chữ cái đầu +5; tối đa 100.
- Ý nghĩa: 85 + min(10, số từ trong meaning).
Điểm tổng = 0.3*HopChuDao + 0.15*LinhHon + 0.15*SuMenh + 0.1*NhanCach + 0.15*AmDieu + 0.15*YNghia, làm tròn.

## Gợi ý
Họ = họ bố. Đệm lọc theo giới tính (nam/nu/both). Tên lọc theo giới tính. Lấy top 20, mỗi tên chính tối đa 1 lần (chọn đệm tốt nhất) để đa dạng. Thêm 1 tuỳ chọn "ghép họ mẹ" không bắt buộc.

## Lời giải thích (tiếng Việt đời thường, ngắn, thân thiện)
- Số linh hồn = "điều con mong muốn trong lòng". Số sứ mệnh = "điều con dễ làm tốt". Số chủ đạo = "tính cách chính của con theo ngày sinh".
- Nghĩa ngắn cho từng số:
1 tự lập, dám nghĩ dám làm · 2 hiền hòa, biết lắng nghe · 3 vui vẻ, nói chuyện có duyên · 4 chăm chỉ, đáng tin · 5 ham khám phá, thích tự do · 6 yêu thương gia đình, hay giúp người · 7 thông minh, thích tìm hiểu · 8 có chí, giỏi lo liệu · 9 tốt bụng, rộng lượng · 11 nhạy cảm, có trực giác tốt · 22 giỏi biến ước mơ thành thật · 33 giàu lòng yêu thương.
- Số nhân cách = "ấn tượng con để lại cho người khác". Tránh từ học thuật như "nguyên âm", "tổng giá trị", "biểu đạt".
- Câu nhắc: "Nội dung mang tính tham khảo, giải trí."

## Lỗi cần tránh
reduce(29)=11, reduce(38)=11 (3+8=11 dừng), reduce(47)=11, reduce(22)=22, reduce(19)=1. Chỉ dừng khi kết quả TRUNG GIAN hoặc ban đầu là 11/22/33.

## Luận giải theo số (readings.js)
Global `const READINGS = { 1:{tinhYeu, suNghiep, taiLoc}, ..., 9, 11, 22, 33 }` theo SỐ SỨ MỆNH của tên. Mỗi mục 2–3 câu, giọng bói vui thân thiện, cụ thể, đời thường, khiến người đọc thấy "sao đúng vậy ta" (vd số 1 Tình yêu: "Thích chủ động, thương ai là nói thẳng, nhưng hay giận dỗi khi bị lơ."). Tài lộc: chỉ nói thói quen tiêu tiền/tiết kiệm, KHÔNG hứa giàu có, không lời khuyên đầu tư. Không nói về sức khỏe.
`const MONTH_TEXT = {1..9,11,22,33: "1 câu ngắn năng lượng tháng"}`; `const YEAR_TEXT = {..: "2 câu năm cá nhân"}`.

## Năm 2027 của bạn
Năm cá nhân 2027 = reduce(tổng chữ số ngày sinh + tháng sinh + 2+0+2+7). Tháng cá nhân m = reduce(năm cá nhân (rút về 1 chữ số) + m). Vẽ Chart.js line (hoặc bar) 12 tháng, trục y 1–9 (11→2, 22→4, 33→6 để vẽ), tooltip là MONTH_TEXT. Ví dụ ngày sinh 15/12: 1+5+1+2+2+0+2+7=20 → 2; tháng 1 → 3, tháng 7 → 9.
Trong modal chi tiết: các mục "💕 Tình yêu", "💼 Sự nghiệp", "💰 Tài lộc", "📅 Năm 2027 của bạn" (YEAR_TEXT + biểu đồ #year-chart).

## (THAY THẾ "Năm 2027") Hành trình cuộc đời – 4 đỉnh cao
Bỏ hẳn mục Năm 2027 và biểu đồ year-chart. Rút gọn riêng tháng M, ngày D, năm Y (reduce, giữ 11/22/33 rồi dùng giá trị 1 chữ số khi cộng: 11→2, 22→4, 33→6).
P1 = reduce(M + D); P2 = reduce(D + Y); P3 = reduce(P1 + P2); P4 = reduce(M + Y).
Số chủ đạo L rút về 1 chữ số; P1 kết thúc ở tuổi 36 − L; P2 thêm 9 năm; P3 thêm 9 năm; P4 đến hết đời.
Ví dụ 15/12/2026: M=3, D=6, Y=1 (2+0+2+6=10→1); P1=9, P2=7, P3=reduce(16)=7, P4=4; L=1 → P1 0–35, P2 36–44, P3 45–53, P4 54+.
5 giai đoạn hiển thị: Tuổi thơ (0–12, tuổi giữa 6), Tuổi học trò (13–22, 17), Lập nghiệp (23–35, 29), Trưởng thành (36–50, 43), An nhàn (51+, 60). Số của giai đoạn = đỉnh cao đang chạy ở tuổi giữa.
Calc.dinhCao(dateStr) → {P:[P1..P4], ends:[e1,e2,e3]}; Calc.hanhTrinh(dateStr) → mảng 5 {stage, ages, number}.
Biểu đồ: Chart.js line có fill gradient, nhãn 5 giai đoạn, giá trị = số (vẽ 11/22/33 là 2/4/6), tooltip là câu ngắn.
Lời giải mỗi giai đoạn lấy từ LIFE_TEXT[số][key] với key: tuoiTho (tính cách lúc nhỏ), hocTro (học hành), lapNghiep (sự nghiệp), truongThanh (tình yêu & gia đình), anNhan (tài lộc & cuộc sống về già, chỉ thói quen, không hứa giàu). Áp dụng cho cả tên gợi ý và tên tự nhập.

## Hành trình chi tiết
- Thử thách: m,d,y rút về 1 chữ số; C1=|m−d|, C2=|d−y|, C3=|C1−C2|, C4=|m−y| (0–8). Cùng chặng với đỉnh cao.
- 5 giai đoạn x 12 số: nội dung riêng trong journey.js (STAGE_TEXT, CHALLENGE_TEXT), kèm lời khuyên cho bố mẹ.
- Biểu đồ 2 đường: đỉnh cao, thử thách.
