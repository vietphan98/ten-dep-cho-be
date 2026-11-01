const READINGS = {
  1: {
    tinhYeu: "Yêu là phải đi trước, nhắn tin trước, rủ đi chơi trước, chuyện gì cũng muốn tự lo từ A đến Z. Có khi đang cãi nhau vẫn tự nói luôn phần của cả hai, đến lúc đối phương mới kịp nói 'được thôi' thì mình đã chuyển sang chủ đề khác rồi.",
    suNghiep: "Làm việc kiểu 'nghe là làm liền', sếp bảo gì chưa kịp nghe xong đã hình dung ra 3 cách làm khác nhanh hơn. Ghét nhất là phải ngồi họp dài dòng, thích tự xách việc về làm một mình cho xong sớm rồi đi cà phê. Đôi khi sếp khen thì vui, khen quá cũng sợ bị giao thêm việc.",
    taiLoc: "Tiền đến tay là phải xài cho 'chất lượng cuộc sống': mua máy móc mới, đăng ký khóa học, hay tự tặng mình một chuyến đi một mình. Tiết kiệm kiểu 'tích lũy để bùng nổ', chứ không bao giờ chịu đựng việc ăn uống kém chất lượng hay dùng đồ cũ kỹ quá lâu."
  },
  2: {
    tinhYeu: "Yêu bằng cách nhớ đối phương thích ăn gì, sợ gì, chu kỳ nguyệt san là bao nhiêu, mà quên hẳn mình thích gì. Hay ngồi đọc lại tin nhắn cũ xem có lỡ làm buồn ai không, một câu nói nhẹ của người yêu cũng đủ khiến mình suy nghĩ cả buổi tối.",
    suNghiep: "Là 'chân đít' đắc lực của tập thể: ai cãi nhau thì ra hòa giải, ai chậm thì lôi kéo cùng lên. Làm việc cần không gian yên ổn, sợ áp lực deadline dí chếtlines kiểu 'chạy máu'. Khéo léo nói 'vâng' với sếp nhưng lách lồng làm theo cách mình thấy ổn.",
    taiLoc: "Ví tiền thường chia thành hai phần: một phần 'dành cho mọi người' (mừng sinh nhật, mừng tết, chia quà), một phần 'dự phòng khi ai đó khẩn cấp'. Mua sắm hay mang theo bạn bè/người yêu đi cùng để hỏi ý kiến, một mình đi siêu thị thường lési hoặc mua thiếu đồ."
  },
  3: {
    tinhYeu: "Tỏ tình bằng meme, voice note 5 phút, hoặc đăng story tag đối phương kèm caption thơ mộng. Yêu say sưa thì toàn thế giới phải biết, nhưng chỉ cần đối phương phản ứng hơi lạnh một chút là mình viết bài status buồn 3 trang giấy, xong quên hết sau 1 tiếng.",
    suNghiep: "Ý tưởng nảy ra như nước ngầm, buổi họp 1 tiếng có 50 phút là mình đang nói chuyện lung tung, 10 phút còn lại mới nói đến việc chính. Ghét làm việc lặp lại, bàn phím dính bụi bể là lúc muốn nghỉ việc nhất. Cần deadline 'chết người' mới code/chạy báo cáo cho xong.",
    taiLoc: "Tiền về như gió, đi như bão. Mua sắm theo cảm xúc: thấy đẹp là mua, thấy vui là ăn, thấy bạn bè mời là đi. Ví thường trống vào giữa tháng, nhưng may mắn luôn có 'cứu tinh' xuất hiện (thưởng, cho vay, làm thêm) để tiếp tục chuỗi 'sống trong ngày'."
  },
  4: {
    tinhYeu: "Yêu là xây dựng 'hệ thống': sinh nhật phải có quà thực tế, kỷ niệm phải có kế hoạch chi tiết, chuỗi khóa nhà/cửa xe phải sao chép cho nhau. Cãi nhau không la hét mà đưa ra 'bảng dữ liệu' lỗi sai của đối phương kèm giải pháp sửa chữa.",
    suNghiep: "Bàn làm việc sạch sẽ, file đelben chuẩn convention, Excel có pivot table, macro tự động. Làm việc chậm mà chắc, sợ nhất là thay đổi quy trình giữa chừng. Sếp giao việc 'linh tinh' là sẽ ngồi viết quy trình chuẩn hóa cho xong việc đó rồi mới làm.",
    taiLoc: "Quản lý chi tiêu bằng app ghi nợ, có sheet Excel dự báo dòng tiền 12 tháng tới. Mua đồ so sánh giá 3 chỗ, đọc review kỹ lưỡng, chỉ mua khi thực sự hỏng hoặc cần thiết. Tiết kiệm là niềm vui, nhìn số dư tăng đều đều mỗi tháng mới ngủ ngon."
  },
  5: {
    tinhYeu: "Hẹn hò kiểu ngẫu hứng: hôm nay đi biển, mai leo núi, cuối tuần rủ nhau đi ăn quán lạ. Yêu cần có không gian riêng, cứ hỏi dồn 'đang ở đâu, làm gì' là dễ bị im lặng luôn. Đối phương phải là bạn đồng hành, không phải người trông coi.",
    suNghiep: "Công việc thay đổi như đổi áo: vừa làm marketing, vừa bán hàng online, vừa học code, vừa dẫn tour. Họp online thường mở camera đi dạo quanh phòng, hoặc ngồi cafe làm việc. Sợ nhất nghe từ 'văn hóa doanh nghiệp', 'quy trình', 'kỷ luật'.",
    taiLoc: "Tiền dành cho 'trải nghiệm': vé máy bay, vé ca nhạc, khóa học lạ, đồ đi phượt. Ít khi để tiền nằm yên trong ngân hàng, thấy tiền là phải xài ngay cho vui. Có lúc quá tay mua vé máy bay rẻ mà quên không có ngày nghỉ, phải xin nghỉ không lương."
  },
  6: {
    tinhYeu: "Yêu là 'quản lý': nhắc uống thuốc, đặt lịch khám, mua bảo hiểm, lo đồ ăn uống, lo tâm trạng. Đôi khi quá lo đến mức biến thành 'mẹ thứ hai', khiến đối phương ngại. Cãi nhau thường vì 'mình làm hết rồi mà cậu không biết trân trọng'.",
    suNghiep: "Là người 'gác lại việc mình để giúp đồng nghiệp', sếp giao việc thêm không nói không ra miệng. Làm việc có trách nhiệm đến mức đau dạ khi thấy đồng nghiệp làm sai quy trình. Muốn nghỉ việc nhưng nghĩ đến 'ai lo team này' nên ở lại.",
    taiLoc: "Chi tiêu xoay quanh 'nhà cửa, gia đình, an toàn': mua máy lọc không khí, đổi ổ cắm an toàn, đóng bảo hiểm cả nhà, mua đồ ăn bổ cho ba mẹ. Tiền cá nhân thì chăm chút, nhưng tiền cho người thân thì xuất thủ thoáng mái, không bao giờ tính toán."
  },
  7: {
    tinhYeu: "Yêu trong im lặng: quan tâm bằng cách quan sát, nhớ sở thích, gửi link bài viết/bài hát phù hợp tâm trạng đối phương. Không thích nói 'yêu' nhiều, mà thể hiện qua việc lắng nghe sâu, phân tích tâm lý đối phương chính xác đến mức khiến người kia sợ.",
    suNghiep: "Chuyên gia 'tìm lỗ hổng': đọc hợp đồng thấy 10 lỗi sai, nghe trình bày dự án thấy 5 rủi ro. Làm việc tốt nhất khi độc lập, yên tĩnh, không ai ngồi chém gió bên tai. Họp online thường tắt mic, tắt cam, ngồi research chăm chăm mà mọi người nghĩ đã ngủ gật.",
    taiLoc: "Tiền dành cho 'trí tuệ và yên bình': mua sách, đăng ký app thiền, khóa học tâm lý, sửa chữa góc làm việc cho êm ái. Không bao giờ mua sắm giải trí, không hiểu tại sao người ta xếp hàng mua trà sữa. Ví tiền thường ổn định, nhưng hay quên thanh toán hóa đơn mạng/điện vì bận suy nghĩ."
  },
  8: {
    tinhYeu: "Yêu kiểu 'đối tác kinh doanh': thảo luận kế hoạch 5 năm, phân chia tài chính, việc nhà chia rõ ai làm gì. Tặng quà thì chọn đồ thực dụng như nồi chiên, máy hút bụi. Cãi nhau xong là ngồi lại tính chuyện cho rõ ràng, xong bắt tay nhau tiếp tục 'chạy dự án'.",
    suNghiep: "Có tư duy 'chủ sở hữu' dù mới là nhân viên: thấy chỗ nào lộn xộn là tự tay sắp xếp, thấy quy trình tồi mình viết đề xuất cải tiến. Thích dẫn dắt, phân quyền, ngày nào cũng tự đặt chỉ tiêu. Sợ nhất là làm việc không có mục tiêu rõ ràng, không có thưởng phạt.",
    taiLoc: "Giữ tiền như người quản lý: chia sẵn bao nhiêu để dành, bao nhiêu để tiêu. Mua đồ thích chọn hàng tốt, dùng bền. Trước khi mua món lớn hay tự hỏi 'cái này có thật sự đáng không?'."
  },
  9: {
    tinhYeu: "Yêu kiểu 'muốn che chở cả thế giới': thu hút những người cần giúp đỡ, cần chữa lành, cần chỗ trú ẩn. Dễ bỏ qua nhu cầu của mình để chiều người yêu, đến khi kiệt sức thì bỗng dưng biến mất để 'tự chữa lành', để người kia hoang mang không hiểu.",
    suNghiep: "Muốn làm việc có 'ý nghĩa xã hội', giúp người, lan tỏa giá trị. Hay nắm lấy việc của đồng nghiệp lo vì sợ họ làm sai, làm chậm. Ghét cạnh tranh, thích hòa hợp. Thường bị giao thêm việc 'vì anh/chị giỏi nhất, làm nhanh nhất'.",
    taiLoc: "Tiền như nước, chảy đến đâu tưới tắm đấy: cho người nghèo, quyên góp, giúp bạn bè vay mượn, mua quà cho cả team. Tự mình thì ăn cơm bình dân, mặc áo cũ, nhưng tiền trong túi luôn sẵn sàng cho ai 'khó khăn'. Cuối năm đối soát thấy tài sản không tăng mà vui vì 'đã giúp được nhiều người'."
  },
  11: {
    tinhYeu: "Cảm nhận đối phương như đọc được suy nghĩ: biết hôm nay buồn vui vì sao trước khi họ mở miệng. Sợ sự gần gũi quá mức vì dễ bị 'ngấm' cảm xúc tiêu cực, cần một góc nhỏ hoàn toàn yên tĩnh để 'xả' năng lượng sau khi về nhà.",
    suNghiep: "Nhận ra xu hướng/thời cơ trước khi nó xảy ra (đôi khi chính mình cũng không giải thích được tại sao). Làm việc theo cảm hứng, ghét bị ép buộc theo khung sườn. Hay thấy 'hình ảnh' giải pháp hiện ra trong đầu khi đang ngủ gật hoặc tắm rửa.",
    taiLoc: "Tiền đến nhờ 'đồng bộ năng lượng': làm việc yêu thích, đúng người đúng chỗ thì tiền tự chảy về. Chi tiêu theo trực giác: thấy 'đúng' thì mua ngay, thấy 'sái' thì bỏ mặc dù rẻ măt. Hay quên kiểm tra số dư, nhưng khi cần tiền gấp thường 'may mắn' có tiền mặt trong túi."
  },
  22: {
    tinhYeu: "Yêu là xây dựng 'đế quốc' chung: từ việc quy hoạch tài chính, giáo dục con cái, đến xây dựng thương hiệu gia đình. Ép bản thân và đối phương phải 'đỉnh cao', đôi khi quên rằng người thường cũng cần được nghỉ ngơi và được sai lầm.",
    suNghiep: "Không làm việc 'nhỏ', chỉ làm việc 'lớn' có tác động hệ thống. Thấy đồng nghiệp làm việc lẻ tẻ thì muốn xây dựng quy trình tự động hóa cho toàn bộ phòng ban. Áp lực tự đặt ra cao đến mức hay mất ngủ suy nghĩ chiến lược 10 năm tới.",
    taiLoc: "Tiêu tiền có kế hoạch dài hơi: món nào mua cũng nghĩ đến chuyện dùng lâu năm. Có thể nhịn ăn tiêu vặt cả năm trời chỉ để dành cho một mục tiêu lớn của gia đình."
  },
  33: {
    tinhYeu: "Yêu là 'chữa lành' cho nhau: ôm nhau khóc cùng nhau, lắng nghe những vết thương cũ nhất, biến nhà thành chốn bình yên để cả hai trút bầu tâm sự. Nguy hiểm là nhận quá nhiều nỗi đau của người khác mà quên bảo vệ ranh giới của mình, dẫn đến kiệt sức thầm lặng.",
    suNghiep: "Làm việc nơi nào cũng biến thành 'gia đình thứ hai': lo bữa trưa cho đồng nghiệp, lo tâm sự cho sếp, lo điều hòa không khí. Người ta nhờ vả, nhờ che chở, nhờ giải quyết xung đột. Thương hiệu cá nhân là 'người tốt', nhưng lương thường không xứng tầm 'trách nhiệm'.",
    taiLoc: "Tiền dành cho 'yêu thương': đóng học cho em họ, giúp người quen lúc khó khăn, quyên góp dự án cộng đồng. Ví tiền như 'quỹ từ thiện cá nhân', ai xin khó khăn là cho. Bản thân thì sống tối giản, đồ dùng giản dị, ăn uống đơn sơ nhưng tâm an vì 'đã làm được điều tốt đẹp'."
  }
};

const MONTH_TEXT = {
  1: "Tháng khởi đầu mới, dũng cảm đặt mục tiêu và thực hiện ngay ý định dang dở.",
  2: "Tháng kiên nhẫn kết nối, lắng nghe nhiều hơn nói để mối quan hệ bền vững.",
  3: "Tháng vui vẻ giao lưu, nói nhiều, chơi nhiều, ý tưởng nảy ra như nồi áp suất.",
  4: "Tháng làm việc chăm chỉ, xây dựng nền tảng, quy trình hóa mọi thứ lộn xộn.",
  5: "Tháng thay đổi bùng nổ, chán chường là dấu hiệu để xách balo đi chơi hoặc đổi việc.",
  6: "Tháng gia đình và trách nhiệm, lo ăn lo ngủ cho người thân, sửa chữa nhà cửa.",
  7: "Tháng nghỉ ngơi suy ngẫm, tắt thông báo, đọc sách, tự hỏi 'mình thực sự muốn gì'.",
  8: "Tháng công việc và tiền bạc cần tính toán tỉ mỉ, sắp xếp chi tiêu cho gọn gàng.",
  9: "Tháng dọn dẹp khép lại, xóa app vô dụng, chia tay quan hệ tiêu cực, thanh lý đồ đạc.",
  11: "Tháng trực giác nhạy bén, tin vào cảm giác thứ 6 để quyết định lớn thay vì logic.",
  22: "Tháng kiến tạo thăng hoa, biến ý tưởng lớn thành kế hoạch hành động cụ thể, bền vững.",
  33: "Tháng phục vụ và chữa lành, lan tỏa yêu thương, làm điều nhỏ bé nhưng ý nghĩa."
};

const YEAR_TEXT = {
  1: "Năm cá nhân 1 mở màn một chu kỳ 9 năm mới. Đây là lúc bạn phải dũng cảm bước ra khỏi vùng an toàn, tự quyết định đường đi của mình thay vì chờ đợi người khác chỉ dẫn.",
  2: "Năm cá nhân 2 yêu cầu sự kiên nhẫn và hợp tác. Thay vì lao tới như một chiến binh, hãy học cách lắng nghe, ngoại giao, và xây dựng những liên minh bền vững để đi xa hơn.",
  3: "Năm cá nhân 3 bùng nổ với năng lượng sáng tạo và giao tiếp. Hãy tận hưởng niềm vui, biểu đạt bản thân, mở rộng vòng tròn bạn bè, nhưng nhớ tập trung để không bị phân tán.",
  4: "Năm cá nhân 4 là năm của kỷ luật và xây dựng nền móng vững chắc. Công việc sẽ nhiều và chi tiết, hãy sắp xếp mọi thứ thành hệ thống, kiên trì làm việc chăm chỉ để thu hoạch sau này.",
  5: "Năm cá nhân 5 mang gió thay đổi và tự do. Sẽ có nhiều cơ hội bất ngờ, du lịch, chuyển việc hoặc chia tay. Hãy linh hoạt thích ứng, tận hưởng trải nghiệm mới mà không sợ hãi.",
  6: "Năm cá nhân 6 tập trung vào gia đình, trách nhiệm và cân bằng. Bạn sẽ bận rộn lo toan cho người thân, nhà cửa, và những việc chung của gia đình. Hãy yêu thương nhưng đừng quên yêu bản thân.",
  7: "Năm cá nhân 7 là năm để lùi lại, suy ngẫm và nghiên cứu. Giảm bớt hoạt động xã hội, dành thời gian đọc sách, học hỏi và sống chậm lại. Những câu trả lời quan trọng sẽ đến trong im lặng.",
  8: "Năm cá nhân 8 là năm thu hoạch và quyền lực về tài chính, sự nghiệp. Công việc có nhiều việc lớn cần bạn đứng ra lo. Hãy tính toán chi tiêu khéo léo, công bằng và có tầm nhìn xa.",
  9: "Năm cá nhân 9 là năm kết thúc chu kỳ, dọn dẹp và tha thứ. Hãy buông bỏ những gì không còn phù hợp: nợ nần, thói quen xấu, mối quan hệ độc hại. Kết thúc đẹp đẽ để chào đón chu kỳ mới.",
  11: "Năm chủ đạo 11 (cao hơn 2) đánh thức trực giác và sứ mệnh linh hồn. Bạn nhạy cảm hơn thường lệ, dễ bị stress nhưng cũng dễ nhận được hướng dẫn nội tại. Hãy tin tưởng giọng nói trong lòng và chia sẻ cảm hứng.",
  22: "Năm chủ đạo 22 (cao hơn 4) là năm kiến tạo vĩ mô. Bạn có khả năng biến giấc mơ lớn thành hiện thực nếu kết hợp tầm nhìn xa với kỷ luật sắt. Gánh nặng trách nhiệm lớn, nhưng kết quả sẽ thay đổi cuộc sống nhiều người.",
  33: "Năm chủ đạo 33 (cao hơn 6) là năm của sự yêu thương và chăm lo cho người khác. Năng lượng yêu thương vô điều kiện tràn trề, bạn là chỗ dựa cho mọi người. Hãy nhớ bảo vệ năng lượng của mình, cho đi vừa sức để mình không bị kiệt sức."
};
