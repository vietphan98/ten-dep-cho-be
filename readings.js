// Luận giải theo số sứ mệnh của tên – viết cho bố mẹ, mang tính tham khảo, giải trí
const READINGS = {
  1: {
    nguoi: "Bé có chính kiến từ sớm, thích tự làm, hay nói \"để con tự làm\". Bé không thích bị ép, nhưng được giao việc là làm tới nơi tới chốn.",
    hocHanh: "Học nhanh khi được làm trước, làm đầu. Thường mạnh môn Toán và thích các cuộc thi, có thưởng là càng hăng.",
    ngheNghiep: "Hợp làm chủ kinh doanh, quản lý, kỹ sư, luật sư, vận động viên.",
    tinhCam: "Thương bố mẹ nhưng ít nói ra, hay thể hiện bằng việc làm. Lớn lên yêu ai thì chủ động, thẳng thắn.",
    tienBac: "Thích tự kiếm tiền từ sớm, có tiền là muốn tự quyết cách tiêu. Cần tập cho bé thói quen để dành.",
    loiKhuyen: "Cho bé được chọn trong vài lựa chọn bố mẹ đặt ra. Khen khi bé cố gắng, đừng chỉ khen khi bé thắng."
  },
  2: {
    nguoi: "Bé hiền, tình cảm, rất để ý cảm xúc người khác. Bố mẹ buồn là bé biết ngay, hay ôm và hỏi han.",
    hocHanh: "Học tốt khi có bạn học cùng và thầy cô gần gũi. Thường giỏi Văn, Âm nhạc, các môn cần sự tỉ mỉ.",
    ngheNghiep: "Hợp làm giáo viên, điều dưỡng, tư vấn tâm lý, ngoại giao, nhân sự.",
    tinhCam: "Rất gắn bó với gia đình, có vài người bạn thân lâu năm. Lớn lên yêu ai là chung thủy, chu đáo.",
    tienBac: "Tiêu tiền cẩn thận, hay để dành mua quà cho người thân. Đôi khi ngại từ chối khi bạn bè hỏi mượn.",
    loiKhuyen: "Nói chuyện nhẹ nhàng, tránh la mắng trước mặt người khác. Dạy bé dám nói \"không\" khi cần."
  },
  3: {
    nguoi: "Bé vui vẻ, nói nhiều, đi đâu cũng làm mọi người cười. Thích hát, vẽ, kể chuyện, nhưng nhanh chán.",
    hocHanh: "Học giỏi khi bài học vui và có hình ảnh. Mạnh môn Văn, Mỹ thuật, Âm nhạc, Ngoại ngữ.",
    ngheNghiep: "Hợp làm họa sĩ, ca sĩ, nhà văn, người dẫn chương trình, thiết kế, giáo viên mầm non.",
    tinhCam: "Đông bạn bè, ở đâu cũng được quý. Lớn lên yêu thì lãng mạn, hay tạo bất ngờ cho người mình thương.",
    tienBac: "Dễ tiêu tiền vào đồ chơi, đồ đẹp, đi chơi. Cần tập cho bé có ống heo và mục tiêu tiết kiệm rõ ràng.",
    loiKhuyen: "Cho bé học năng khiếu bé thích. Giúp bé làm xong việc này rồi mới chuyển sang việc khác."
  },
  4: {
    nguoi: "Bé ngoan, nề nếp, thích mọi thứ đâu ra đó. Đồ chơi chơi xong hay tự cất, không thích bị đổi kế hoạch bất ngờ.",
    hocHanh: "Chăm chỉ, học chắc từng bài. Mạnh môn Toán, Vật lý, Tin học và các môn cần làm theo các bước.",
    ngheNghiep: "Hợp làm kỹ sư, kế toán, kiến trúc sư, bác sĩ, công an, quân đội.",
    tinhCam: "Ít nói lời ngọt nhưng rất đáng tin, hứa gì làm nấy. Lớn lên yêu chậm mà chắc, lo cho gia đình chu đáo.",
    tienBac: "Biết giữ tiền từ nhỏ, tiền lì xì thường còn nguyên. Thích mua đồ bền, dùng lâu.",
    loiKhuyen: "Báo trước cho bé khi có thay đổi. Khuyến khích bé thử cái mới để bớt cứng nhắc."
  },
  5: {
    nguoi: "Bé hiếu động, tò mò, cái gì cũng muốn sờ, muốn hỏi \"tại sao\". Ngồi yên một chỗ lâu là bé không chịu.",
    hocHanh: "Học nhanh nhưng dễ mất tập trung. Mạnh Ngoại ngữ, Địa lý, Thể dục và những môn được ra ngoài trải nghiệm.",
    ngheNghiep: "Hợp làm hướng dẫn viên du lịch, phóng viên, tiếp viên hàng không, kinh doanh, vận động viên.",
    tinhCam: "Dễ làm quen, bạn bè khắp nơi. Lớn lên yêu thì cần người hiểu và cho mình không gian riêng.",
    tienBac: "Thích tiêu tiền cho trải nghiệm: đi chơi, học cái mới. Cần nhắc bé để dành một phần trước khi tiêu.",
    loiKhuyen: "Cho bé vận động, đi đây đó nhiều. Đặt ít luật nhưng rõ ràng, giải thích lý do thay vì cấm."
  },
  6: {
    nguoi: "Bé biết thương người, hay chăm em, chia đồ ăn cho bạn. Rất thích được khen là ngoan, là giỏi.",
    hocHanh: "Học đều các môn, thích Sinh học, Văn, Mỹ thuật. Học tốt hơn khi được cô giáo quý.",
    ngheNghiep: "Hợp làm bác sĩ, giáo viên, đầu bếp, thiết kế nội thất, công tác xã hội.",
    tinhCam: "Rất gắn bó gia đình, lớn rồi vẫn hay về nhà. Yêu ai là lo cho người đó từng bữa ăn giấc ngủ.",
    tienBac: "Tiêu tiền vì người thân nhiều hơn cho mình. Cần dạy bé biết lo cho bản thân nữa.",
    loiKhuyen: "Ghi nhận khi bé giúp đỡ người khác. Nhắc bé không cần làm vừa lòng tất cả mọi người."
  },
  7: {
    nguoi: "Bé trầm, hay suy nghĩ, thích chơi một mình hoặc đọc sách. Hỏi nhiều câu khó khiến bố mẹ phải tra cứu.",
    hocHanh: "Ham hiểu biết, thích tự tìm tòi. Mạnh môn Khoa học, Toán, Lịch sử, rất hợp học đến nơi đến chốn.",
    ngheNghiep: "Hợp làm nhà khoa học, bác sĩ, lập trình viên, nhà nghiên cứu, nhà văn.",
    tinhCam: "Ít bạn nhưng chơi rất thân. Lớn lên yêu chậm, cần thời gian mới mở lòng.",
    tienBac: "Tiêu tiền cho sách vở, đồ học, sở thích riêng. Ít mua sắm linh tinh.",
    loiKhuyen: "Cho bé thời gian ở một mình, đừng ép bé phải hòa đồng. Trả lời câu hỏi của bé thật lòng."
  },
  8: {
    nguoi: "Bé có chí, thích làm \"trưởng nhóm\", không chịu thua. Biết đặt mục tiêu và cố đạt bằng được.",
    hocHanh: "Học vì muốn đứng đầu. Mạnh Toán, Kinh tế và các hoạt động cần tổ chức, lãnh đạo.",
    ngheNghiep: "Hợp làm doanh nhân, giám đốc, ngân hàng, luật sư, quản lý dự án.",
    tinhCam: "Thể hiện tình thương bằng cách lo cho người thân. Lớn lên yêu thì nghiêm túc, muốn xây tổ ấm vững vàng.",
    tienBac: "Hiểu giá trị đồng tiền từ sớm, thích tự buôn bán nhỏ. Cần dạy bé tiền không phải là tất cả.",
    loiKhuyen: "Giao cho bé việc có trách nhiệm. Dạy bé biết thua và biết chia sẻ thành quả."
  },
  9: {
    nguoi: "Bé rộng lượng, dễ thương người, thấy con vật bị đau là rưng rưng. Hay mơ ước những điều lớn lao.",
    hocHanh: "Học đa dạng, thích Văn, Lịch sử, Nghệ thuật, Ngoại ngữ. Học tốt khi hiểu bài học có ích cho ai.",
    ngheNghiep: "Hợp làm bác sĩ, giáo viên, nghệ sĩ, nhà báo, làm việc cho các tổ chức thiện nguyện.",
    tinhCam: "Thương cả nhà, thương bạn bè, sẵn lòng giúp người. Lớn lên yêu bằng cả trái tim, dễ tha thứ.",
    tienBac: "Hào phóng, hay cho đi. Cần dạy bé giúp người vừa sức và biết giữ phần cho mình.",
    loiKhuyen: "Cho bé tham gia việc tốt cùng bố mẹ. Giúp bé biết đặt giới hạn để không bị lợi dụng."
  },
  11: {
    nguoi: "Bé nhạy cảm, tinh ý, hay \"đoán trúng\" suy nghĩ người lớn. Dễ xúc động, cần được vỗ về nhiều.",
    hocHanh: "Giỏi các môn cần cảm nhận như Văn, Âm nhạc, Mỹ thuật. Học tốt khi không khí lớp học dễ chịu.",
    ngheNghiep: "Hợp làm nghệ sĩ, nhà tâm lý, giáo viên, nhà văn, người dẫn dắt tinh thần cho người khác.",
    tinhCam: "Rất quấn bố mẹ, dễ buồn khi bị hiểu lầm. Lớn lên yêu sâu sắc, cần người biết lắng nghe.",
    tienBac: "Không quá để ý chuyện tiền, dễ tiêu theo cảm xúc. Cần tập cho bé ghi lại chi tiêu.",
    loiKhuyen: "Lắng nghe cảm xúc của bé, đừng bảo \"có gì đâu mà khóc\". Giữ nếp sinh hoạt đều đặn để bé yên tâm."
  },
  22: {
    nguoi: "Bé chín chắn hơn tuổi, thích xếp hình, xây nhà bằng đồ chơi. Có ước mơ lớn và kiên trì theo đuổi.",
    hocHanh: "Học chắc, giỏi cả tư duy lẫn thực hành. Mạnh Toán, Vật lý, Công nghệ.",
    ngheNghiep: "Hợp làm kiến trúc sư, kỹ sư xây dựng, doanh nhân, nhà quản lý, nhà hoạch định.",
    tinhCam: "Là chỗ dựa cho anh chị em và bạn bè. Lớn lên yêu nghiêm túc, muốn cùng nhau gây dựng tổ ấm.",
    tienBac: "Biết tính toán từ nhỏ, để dành cho mục tiêu lớn. Cần nhắc bé đôi khi tiêu cho niềm vui cũng được.",
    loiKhuyen: "Tin vào ước mơ của bé và giúp bé chia nhỏ từng bước. Đừng đặt áp lực quá lớn."
  },
  33: {
    nguoi: "Bé rất giàu tình thương, hay dỗ em, an ủi bạn. Thấy ai buồn là muốn giúp ngay.",
    hocHanh: "Học tốt các môn về con người như Văn, Sinh học, Giáo dục công dân. Thích giúp bạn học cùng.",
    ngheNghiep: "Hợp làm bác sĩ, giáo viên, điều dưỡng, công tác xã hội, nghệ sĩ.",
    tinhCam: "Là \"cục vàng\" gắn kết cả nhà. Lớn lên yêu thì hết lòng, luôn đặt gia đình lên trước.",
    tienBac: "Hay dùng tiền để giúp người khác. Cần dạy bé lo cho mình trước rồi mới lo cho người.",
    loiKhuyen: "Dạy bé thương mình như thương người. Cho bé nghỉ ngơi khi bé ôm việc của người khác."
  }
};

// Năng lượng một chặng đời theo số đỉnh cao (dùng cho "Hành trình cuộc đời")
const PIN_TEXT = {
  1: "Chặng tự lập: con học cách tự đứng trên đôi chân mình, dám làm theo ý mình.",
  2: "Chặng kết nối: con có nhiều bạn tốt, học cách nhường nhịn và làm việc cùng người khác.",
  3: "Chặng vui tươi: con sáng tạo, hay nói hay cười, dễ được mọi người yêu quý.",
  4: "Chặng chăm chỉ: con xây nền móng bằng sự cần cù, làm đâu chắc đó.",
  5: "Chặng thay đổi: con đi nhiều, thử nhiều, có nhiều trải nghiệm mới.",
  6: "Chặng gia đình: con gắn bó với người thân, biết lo cho mọi người.",
  7: "Chặng hiểu biết: con ham học, hay suy nghĩ, tìm câu trả lời cho riêng mình.",
  8: "Chặng gặt hái: con có chí, công việc dần vững vàng, biết lo liệu.",
  9: "Chặng bao dung: con sống rộng lượng, hay giúp đỡ người xung quanh.",
  11: "Chặng cảm nhận: con nhạy bén, hay có linh cảm đúng, truyền cảm hứng cho người khác.",
  22: "Chặng xây dựng: con biến những ước mơ lớn thành việc làm cụ thể.",
  33: "Chặng yêu thương: con là chỗ dựa tinh thần, luôn chăm lo cho người khác."
};

const STAGES = [
  { key: "tuoiTho", label: "Tuổi thơ", ages: "0–12", mid: 6, focus: "Tính cách lúc nhỏ" },
  { key: "hocTro", label: "Tuổi học trò", ages: "13–22", mid: 17, focus: "Học hành, bạn bè" },
  { key: "lapNghiep", label: "Lập nghiệp", ages: "23–35", mid: 29, focus: "Công việc" },
  { key: "truongThanh", label: "Trưởng thành", ages: "36–50", mid: 43, focus: "Tình cảm, gia đình" },
  { key: "anNhan", label: "An nhàn", ages: "51+", mid: 60, focus: "Cuộc sống về già" }
];
