// Câu bổ sung theo số của tên (Việt Phan biên soạn). Tham khảo, giải trí.
// Mỗi số: [điểm mạnh tên mang lại, học, nghề gợi thêm, tình cảm, tiền bạc, lời khuyên]
const NAME_NUANCE = {
1:["thêm phần tự tin, dám đứng ra nhận việc","con học nhanh khi được tự mình thử","làm chủ, dẫn dắt nhóm","con thích được tôn trọng ý riêng","con dám tự kiếm tiền từ sớm","cho con cơ hội tự quyết việc nhỏ"],
2:["thêm phần mềm mỏng, biết nhường nhịn","con học tốt khi có bạn cùng học","tư vấn, chăm sóc khách hàng","con rất cần được bố mẹ ôm và hỏi han","con chi tiêu cẩn thận, ít khi phung phí","nói chuyện nhẹ nhàng với con"],
3:["thêm phần vui vẻ, nói chuyện có duyên","con nhớ bài nhanh khi được hát, vẽ, kể chuyện","viết, thiết kế, truyền thông","con bày tỏ tình cảm rất tự nhiên","con thích tiêu cho niềm vui, cần học để dành","khen con khi con sáng tạo"],
4:["thêm phần chăm chỉ, đáng tin","con học chắc từng bước, ít bỏ dở","kỹ sư, kế toán, quản lý dự án","con thương ai là thương lâu","con biết để dành từng chút","giữ nếp sinh hoạt đều đặn cho con"],
5:["thêm phần lanh lợi, thích khám phá","con mê môn có thực hành, đi tham quan","du lịch, bán hàng, báo chí","con cần bạn đồng hành vui vẻ, cởi mở","con kiếm được nhưng cũng dễ tiêu","cho con trải nghiệm mới nhưng có giới hạn rõ"],
6:["thêm phần chu đáo, biết lo cho người khác","con học hăng hơn khi được thầy cô quý","giáo viên, thiết kế nhà cửa, ẩm thực","con coi gia đình là trên hết","con hay dành tiền lo cho người thân","dạy con biết thương cả chính mình"],
7:["thêm phần sâu sắc, thích suy nghĩ","con tự đọc, tự tìm hiểu rất giỏi","nghiên cứu, công nghệ, phân tích","con chậm mở lòng nhưng chân thành","con tiêu tiền có tính toán","để con có góc riêng yên tĩnh"],
8:["thêm phần mạnh mẽ, có chí","con thích thi đua và đặt mục tiêu","kinh doanh, quản lý, luật","con thể hiện tình cảm bằng việc làm","con có đầu óc tính toán chuyện tiền","dạy con thắng thua đều vui"],
9:["thêm phần rộng lượng, giàu lòng thương","con thích văn, sử, nghệ thuật","giáo dục, nghệ thuật, việc thiện nguyện","con bao dung, dễ tha thứ","con rộng rãi, cần học giữ lại cho mình","dạy con biết nói không đúng lúc"],
11:["thêm phần nhạy cảm, giàu trực giác","con cảm thụ văn, nhạc rất tốt","dạy học, tư vấn, nghệ thuật","con cần người thật sự hiểu mình","con cần người lớn hướng dẫn cách giữ tiền","giúp con gọi tên cảm xúc"],
22:["thêm phần chín chắn, nghĩ xa","con giỏi các dự án, mô hình","xây dựng, tổ chức, công nghệ","con nghiêm túc trong tình cảm","con biết lo xa chuyện tiền bạc","chia mục tiêu lớn thành bước nhỏ cùng con"],
33:["thêm phần ấm áp, hay an ủi người khác","con học tốt khi được giúp bạn","chăm sóc, dạy học, công tác xã hội","con yêu thương hết lòng","con hay chia sẻ cho người khác","nhắc con nghỉ ngơi, đừng ôm việc"]
};
function buildReadings(dateStr, fullName) {
  const L = Calc.reduce(Calc.chuDao(dateStr));
  const S = Calc.suMenh(fullName), H = Calc.linhHon(fullName), N = Calc.nhanCach(fullName);
  const b = READINGS[L] || READINGS[1], s = NAME_NUANCE[S] || NAME_NUANCE[1], h = NAME_NUANCE[H] || NAME_NUANCE[1], n = NAME_NUANCE[N] || NAME_NUANCE[1];
  return {
    chuDao: L, suMenh: S, linhHon: H, nhanCach: N,
    nguoi: `Theo ngày sinh (số chủ đạo ${L}): ${b.nguoi} Tên con (linh hồn ${H}) cho con ${h[0]}; người ngoài nhìn con (nhân cách ${N}) thấy con ${n[0].replace('thêm phần ','')}.`,
    hocHanh: `${b.hocHanh} Nhờ tên mang số sứ mệnh ${S}, ${s[1]}.`,
    ngheNghiep: `${b.ngheNghiep} Theo tên (sứ mệnh ${S}), con cũng hợp với: ${s[2]}.`,
    tinhCam: `${b.tinhCam} Theo tên (linh hồn ${H}), ${h[3]}.`,
    tienBac: `${b.tienBac} Theo tên (sứ mệnh ${S}), ${s[4]}.`,
    loiKhuyen: `${b.loiKhuyen} Thêm nữa, bố mẹ nên ${s[5]}.`
  };
}
