// Hành trình cuộc đời – nội dung do Việt Phan biên soạn. Tham khảo, giải trí.
const STAGE_TEXT = {
tuoiTho: {
1:["Lúc nhỏ con thích tự làm lấy mọi việc, từ xúc cơm đến chọn đồ chơi. Con hay đi đầu khi chơi cùng anh chị em, đôi khi hơi bướng. Trong nhà, con muốn được nghe ý kiến của mình.","Cho con tự chọn những việc nhỏ để con thấy mình được tin."],
2:["Con là em bé tình cảm, thích được ôm và ở gần bố mẹ. Con chơi hợp với một hai bạn thân hơn là chỗ đông người. Con rất nhạy với không khí gia đình, bố mẹ vui thì con cũng vui.","Giữ nhà êm ấm, nói chuyện nhẹ nhàng trước mặt con."],
3:["Con hay hát, hay kể chuyện và làm cả nhà bật cười. Con mê vẽ, tô màu, đóng vai. Con cần được khen để thêm tự tin, nhưng cũng dễ chán nếu trò chơi lặp lại.","Cho con giấy bút, sân chơi và lắng nghe con kể chuyện mỗi ngày."],
4:["Con thích nề nếp, ăn ngủ đúng giờ thì con vui. Con mê xếp hình, lắp ghép, làm gì cũng tỉ mỉ. Con quý những lời hứa của bố mẹ và nhớ rất lâu.","Giữ lời hứa với con và tạo giờ giấc đều đặn trong nhà."],
5:["Con hiếu động, tò mò, chỗ nào cũng muốn sờ thử, đi thử. Con thích ra ngoài, gặp người mới, đi chơi xa. Ở nhà lâu con dễ bứt rứt.","Cho con chạy nhảy ngoài trời và trải nghiệm nhiều thứ mới, an toàn."],
6:["Con biết thương người từ sớm, hay chia quà cho em, hỏi han ông bà. Con thích chơi đồ hàng, chăm búp bê, chăm thú cưng. Gia đình là cả thế giới của con.","Dạy con biết thương mình nữa, không phải lúc nào cũng nhường."],
7:["Con hay hỏi vì sao, thích ngồi một mình với sách tranh hoặc đồ chơi. Con ít nói với người lạ nhưng quan sát rất kỹ. Con cần góc riêng yên tĩnh trong nhà.","Kiên nhẫn trả lời câu hỏi của con, đừng ép con phải dạn dĩ ngay."],
8:["Con có dáng một thủ lĩnh nhỏ, thích chỉ huy khi chơi. Con thích được giao việc và làm cho xong. Con muốn thắng nên đôi khi khóc khi thua.","Dạy con thắng thua đều vui, và khen khi con cố gắng."],
9:["Con rộng rãi, dễ cho đồ chơi, hay thương bạn yếu hơn mình. Con thích nghe chuyện cổ tích và cảm động với nhân vật. Con dễ hòa đồng với mọi người trong họ hàng.","Kể cho con nhiều câu chuyện đẹp về lòng tốt."],
11:["Con nhạy cảm, mơ mộng, đôi khi nói ra những điều làm người lớn bất ngờ. Con dễ lo khi nhà có chuyện buồn. Con thích âm nhạc, tranh vẽ và những câu chuyện kỳ diệu.","Ôm con nhiều, giúp con gọi tên cảm xúc của mình."],
22:["Con chín chắn sớm, thích xây những mô hình lớn từ đồ chơi. Con làm gì cũng muốn làm thật to, thật đẹp. Con nghe lời khi hiểu lý do.","Giải thích cho con vì sao, thay vì chỉ bảo con phải làm."],
33:["Con rất giàu tình thương, hay dỗ em, an ủi bạn. Con thích giúp bố mẹ việc nhà và vui khi được khen ngoan. Con dễ buồn khi thấy ai bị mắng.","Để con được làm trẻ con, đừng giao cho con quá nhiều trách nhiệm."]
},
hocTro: {
1:["Ở trường con hay xung phong, thích làm lớp trưởng hoặc dẫn nhóm. Con học tốt khi được tự tìm cách giải. Con có bạn bè nhưng không thích bị ai sai khiến.","Cho con thử sức ở các cuộc thi và hoạt động tự chủ."],
2:["Con học tốt khi có bạn học cùng và thầy cô gần gũi. Con giỏi lắng nghe, hợp với văn, nhạc, làm việc nhóm. Con dễ buồn vì chuyện bạn bè giận nhau.","Lắng nghe chuyện trường lớp của con mà không phán xét."],
3:["Con nổi bật ở văn nghệ, thuyết trình, viết văn. Con đông bạn, vui tính, nhưng dễ ham chơi hơn ham học. Năng khiếu nghệ thuật của con nở rộ ở tuổi này.","Giúp con giữ thời gian biểu, nhưng đừng tắt niềm vui sáng tạo."],
4:["Con học chắc, chăm chỉ, giỏi các môn cần từng bước như toán, khoa học. Con ít bạn nhưng chơi lâu bền. Con đôi khi cứng nhắc, sợ sai.","Khen sự chăm chỉ của con và dạy con rằng sai cũng không sao."],
5:["Con học nhanh, thích ngoại ngữ, thể thao, du lịch, thử nhiều câu lạc bộ. Con dễ chán môn khô khan. Bạn bè của con rất đa dạng.","Cho con đi đây đó, nhưng cùng con đặt vài mục tiêu rõ ràng."],
6:["Con chu đáo, hay giúp bạn học yếu, được thầy cô tin cậy. Con hợp với các môn nghệ thuật, văn, sinh học. Con coi trọng tình bạn và gia đình.","Nhắc con lo cho việc học của mình trước khi lo cho người khác."],
7:["Con thích đọc sâu, tự tìm hiểu, có thể rất giỏi một môn mình mê. Con ít bạn, chọn bạn kỹ. Con cần không gian riêng để suy nghĩ.","Mua sách theo sở thích của con và tôn trọng sự riêng tư của con."],
8:["Con có ý chí, thích thi đua, muốn đứng đầu. Con hợp với toán, kinh tế, tổ chức sự kiện ở trường. Con có thể áp lực vì muốn thành công sớm.","Nhắc con rằng bố mẹ thương con dù điểm số thế nào."],
9:["Con có nhiều bạn từ nhiều nơi, hay tham gia việc thiện ở trường. Con thích văn, sử, nghệ thuật. Con dễ mủi lòng nên đôi khi bị bạn lợi dụng.","Dạy con biết nói không đúng lúc."],
11:["Con có trực giác tốt, giỏi các môn cần cảm thụ như văn, nhạc, vẽ. Con dễ căng thẳng trước kỳ thi. Con hay có những ý tưởng khác người.","Giúp con có giờ nghỉ ngơi và tin vào ý tưởng của con."],
22:["Con có đầu óc lớn, thích dự án, mô hình, khoa học, kỹ thuật. Con có thể là người tổ chức giỏi trong lớp. Con đặt mục tiêu cao cho mình.","Chia mục tiêu lớn thành bước nhỏ cùng con."],
33:["Con là người bạn mà ai cũng tìm đến khi buồn. Con hợp với các hoạt động giúp đỡ, dạy kèm, văn nghệ. Con dễ ôm việc của người khác.","Nhắc con nghỉ ngơi và dành thời gian cho chính mình."]
},
lapNghiep: {
1:["Đây là lúc con muốn tự đứng trên đôi chân mình, có thể tự mở việc riêng. Con hợp với vai trò dẫn dắt, sáng lập, quản lý. Trong tình cảm, con cần người tôn trọng sự độc lập của con.","Ủng hộ con tự quyết, chỉ góp ý khi con hỏi."],
2:["Con làm tốt ở vị trí phối hợp, hỗ trợ, tư vấn, chăm sóc khách hàng. Con thành công nhờ quan hệ tốt hơn là bon chen. Chuyện tình cảm rất quan trọng với con ở giai đoạn này.","Tôn trọng người con chọn và giữ lời khuyên thật nhẹ nhàng."],
3:["Con tỏa sáng với công việc sáng tạo: viết, thiết kế, truyền thông, dạy học. Con dễ có nhiều mối quan hệ, vui vẻ yêu đời. Con cần học cách theo đuổi một việc đến cùng.","Khuyến khích con chọn một hướng và kiên trì với nó."],
4:["Con xây sự nghiệp từng bước chắc chắn: kỹ sư, kế toán, xây dựng, quản lý dự án. Con làm nhiều, đôi khi quên nghỉ. Trong tình cảm, con chung thủy và nghiêm túc.","Nhắc con cân bằng giữa làm việc và nghỉ ngơi."],
5:["Con hợp với nghề hay đi lại, gặp gỡ: du lịch, bán hàng, báo chí, ngoại giao. Con có thể đổi việc vài lần trước khi tìm được chỗ hợp. Tình cảm của con sôi nổi, cần thời gian để ổn định.","Đừng lo khi con đổi hướng, hãy hỏi con đã học được gì."],
6:["Con hợp với nghề chăm sóc, giáo dục, thiết kế nhà cửa, ẩm thực. Con có thể lập gia đình sớm và rất lo cho tổ ấm. Con được đồng nghiệp tin cậy.","Giúp con khi con nhờ, nhưng để con tự lo tổ ấm riêng."],
7:["Con hợp với nghiên cứu, công nghệ, phân tích, viết lách chuyên sâu. Con chọn việc theo đam mê hơn theo lương. Trong tình cảm, con chậm mở lòng nhưng đã yêu thì sâu sắc.","Đừng giục con lập gia đình, con sẽ tự biết lúc nào phù hợp."],
8:["Con có tham vọng, hợp với kinh doanh, quản lý, luật, tài chính. Con làm việc rất hăng để khẳng định mình. Con cần nhớ dành thời gian cho người mình thương.","Nhắc con rằng gia đình mới là chỗ dựa lâu dài."],
9:["Con hợp với nghề giúp người: y tế cộng đồng, giáo dục, nghệ thuật, tổ chức thiện nguyện. Con có thể làm việc ở nhiều nơi. Tình cảm của con bao dung, nhiều cảm xúc.","Ủng hộ con làm việc có ý nghĩa, dù không phải nghề quen thuộc."],
11:["Con hợp với nghề truyền cảm hứng: dạy học, tư vấn, nghệ thuật, viết. Con có thể thành người được nhiều người lắng nghe. Con cần người bạn đời hiểu sự nhạy cảm của con.","Tin vào con khi con chọn con đường khác lạ."],
22:["Con có khả năng làm những việc lớn: xây dựng, quản lý dự án lớn, công nghệ, tổ chức. Con đặt nền móng cho sự nghiệp lâu dài. Con dễ bận rộn đến quên chuyện tình cảm.","Nhắc con rằng thành công cũng cần có người cùng chia sẻ."],
33:["Con hợp với dạy học, chăm sóc, tư vấn, làm việc cộng đồng. Con được yêu quý vì tấm lòng tốt. Con dễ hy sinh quá nhiều cho người mình yêu.","Dạy con biết giữ cho mình một phần."]
},
truongThanh: {
1:["Con đứng vững trong sự nghiệp, có thể làm chủ hoặc giữ vai trò quan trọng. Con tự lo được cuộc sống của mình. Trong gia đình, con là người đưa ra quyết định.","Mừng cho con và nhắc con lắng nghe người nhà nhiều hơn."],
2:["Đây là giai đoạn con sống hài hòa, chú trọng gia đình và các mối quan hệ. Con thành công nhờ hợp tác và lòng tin. Con biết giữ gìn tiền bạc cẩn thận.","Là người lắng nghe khi con cần tâm sự."],
3:["Con vẫn trẻ trung, sáng tạo, có thể nổi tiếng trong nghề của mình. Con có nhiều bạn bè, nhà cửa vui vẻ. Con cần chi tiêu có kế hoạch hơn.","Cùng con vui những thành quả nhỏ."],
4:["Con xây được nền nếp vững chắc cho gia đình. Công việc ổn định nhờ sự chăm chỉ nhiều năm. Con quản lý tiền bạc cẩn thận, biết để dành.","Ghi nhận công sức của con, dù con ít khi kể."],
5:["Con có thể có một bước ngoặt: đổi nghề, chuyển nhà, đi xa. Cuộc sống nhiều đổi mới và trải nghiệm. Con cần giữ cho gia đình một chỗ dựa ổn định.","Ủng hộ con thay đổi nhưng nhắc con nghĩ kỹ."],
6:["Gia đình là trung tâm của con lúc này. Con lo cho con cái, bố mẹ, cả họ hàng. Công việc của con gắn với sự tận tâm và uy tín.","Đỡ cho con một phần việc nhà khi có thể."],
7:["Con có thể trở thành chuyên gia trong lĩnh vực của mình. Con thích sống chậm, suy ngẫm về cuộc đời. Con cần dành thời gian chia sẻ với người thân hơn.","Tôn trọng thời gian riêng của con."],
8:["Con có cơ hội lớn trong sự nghiệp, được giao việc quan trọng. Con quản lý giỏi và có tầm nhìn. Con cần cân bằng giữa công việc và gia đình.","Nhắc con nghỉ ngơi, sum họp gia đình."],
9:["Con đã trải qua nhiều, sống rộng lượng và biết buông những chuyện cũ. Con hay giúp đỡ người khác và được quý mến. Con có thể khép lại một việc để mở ra hướng mới.","Ủng hộ con khi con muốn làm việc có ý nghĩa hơn."],
11:["Con trở thành người truyền cảm hứng cho đồng nghiệp và con cái. Con có cái nhìn sâu sắc về cuộc sống. Con cần giữ tinh thần thư thái giữa nhiều trách nhiệm.","Ở bên con những lúc con mệt mỏi."],
22:["Đây là lúc con làm được những việc lớn để lại lâu dài. Con có thể dẫn dắt một tập thể. Gia đình tự hào về con.","Tự hào cùng con và nhắc con đừng ôm hết mọi việc."],
33:["Con là chỗ dựa tinh thần của cả nhà. Con hay chăm lo, dạy dỗ, khuyên bảo người khác. Con được kính trọng vì tấm lòng.","Nhắc con cũng cần được chăm lo."]
},
anNhan: {
1:["Con vẫn năng động, thích tự làm và tự quyết. Con có thể bắt đầu một sở thích mới. Con cháu học được từ con sự tự lập.","Mong con giữ tinh thần vui, sống chậm lại một chút."],
2:["Con sống êm ả, gần gũi người thân. Con là người hòa giải trong gia đình. Con cháu thích tâm sự với con.","Mong con có nhiều thời gian bên người mình thương."],
3:["Con vui vẻ, hay kể chuyện, có thể quay lại với sở thích nghệ thuật. Nhà con luôn đông vui. Con cháu quý con vì sự hài hước.","Mong con luôn giữ được tiếng cười."],
4:["Con sống nền nếp, ngăn nắp, có của để dành. Con thích làm vườn, sửa nhà, chăm chút từng việc nhỏ. Con cháu học được từ con sự chăm chỉ.","Mong con biết cho mình nghỉ ngơi."],
5:["Con thích đi đây đi đó, khám phá những nơi mới. Tinh thần con trẻ trung, cởi mở. Con cháu thích nghe con kể chuyện đi xa.","Mong con có những chuyến đi vui cùng người thân."],
6:["Con quây quần bên con cháu, là trung tâm của gia đình. Con hay chăm lo, nấu nướng cho cả nhà. Con thấy hạnh phúc khi mọi người hòa thuận.","Mong con được con cháu chăm lo lại."],
7:["Con thích yên tĩnh, đọc sách, suy ngẫm. Con trở thành người có lời khuyên sâu sắc. Con cháu tìm đến con khi cần ý kiến.","Mong con có bạn bè để trò chuyện."],
8:["Con vẫn có tiếng nói trong gia đình và cộng đồng. Con biết giữ gìn những gì mình đã xây. Con có thể truyền kinh nghiệm cho con cháu.","Mong con buông bớt công việc để tận hưởng."],
9:["Con sống bao dung, hay làm việc thiện. Con nhìn lại cuộc đời với lòng biết ơn. Con cháu học được từ con lòng tốt.","Mong con luôn thấy thanh thản."],
11:["Con có đời sống tinh thần phong phú, hay chia sẻ những điều sâu sắc. Con là nguồn cảm hứng cho con cháu. Con thích thiền, nhạc, đọc sách.","Mong con giữ được sự bình yên trong lòng."],
22:["Con nhìn thấy những gì mình xây dựng được tiếp nối. Con hướng dẫn con cháu làm việc lớn. Con có thể làm cố vấn cho nhiều người.","Mong con thấy tự hào về hành trình của mình."],
33:["Con là người ông, người bà được thương nhất nhà. Con hay chăm lo, dạy dỗ con cháu. Tấm lòng của con là món quà lớn cho gia đình.","Mong con nhận lại nhiều yêu thương."]
}
};
const CHALLENGE_TEXT = {
0:"Không có thử thách rõ ràng. Con được tự chọn bài học cho mình, nên cần bố mẹ giúp định hướng.",
1:"Học cách tự tin và dám nói lên ý mình, không quá phụ thuộc người khác.",
2:"Học cách bớt nhạy cảm, không để lời người khác làm mình buồn lâu.",
3:"Học cách bày tỏ cảm xúc và giữ sự tập trung, không tản mạn.",
4:"Học tính kiên nhẫn, làm việc có kế hoạch, không nản giữa chừng.",
5:"Học cách giữ cân bằng giữa tự do và trách nhiệm, không quá vội vàng.",
6:"Học cách không ôm đồm, không bắt mọi người phải theo ý mình.",
7:"Học cách mở lòng, tin người hơn, không thu mình quá nhiều.",
8:"Học cách dùng tiền bạc và quyền hạn khéo léo, không chạy theo hơn thua."
};
