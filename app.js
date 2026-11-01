const Calc = {
    // Normalize Vietnamese name (remove diacritics, replace Đ/đ with D, uppercase)
    normalize: function(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[Đđ]/g, 'D')
            .toUpperCase();
    },

    // Get letter value (Pythagoras table)
    letterValue: function(char) {
        const values = {
            'A': 1, 'J': 1, 'S': 1,
            'B': 2, 'K': 2, 'T': 2,
            'C': 3, 'L': 3, 'U': 3,
            'D': 4, 'M': 4, 'V': 4,
            'E': 5, 'N': 5, 'W': 5,
            'F': 6, 'O': 6, 'X': 6,
            'G': 7, 'P': 7, 'Y': 7,
            'H': 8, 'Q': 8, 'Z': 8,
            'I': 9, 'R': 9
        };
        return values[char] || 0;
    },

    // Reduce number (stop at 11, 22, 33)
    reduce: function(num) {
        if (num === 11 || num === 22 || num === 33) return num;
        while (num > 9) {
            num = String(num).split('').reduce((a, b) => a + Number(b), 0);
            if (num === 11 || num === 22 || num === 33) return num;
        }
        return num;
    },

    // Calculate chủ đạo number from date string (yyyy-mm-dd)
    chuDao: function(dateStr) {
        const [year, month, day] = dateStr.split('-').map(Number);
        const sum = day.toString().split('').reduce((a, b) => a + Number(b), 0) +
                   month.toString().split('').reduce((a, b) => a + Number(b), 0) +
                   year.toString().split('').reduce((a, b) => a + Number(b), 0);
        return this.reduce(sum);
    },

    // Calculate linh hồn number (vowel sum)
    linhHon: function(fullName) {
        const normalized = this.normalize(fullName);
        const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
        let sum = 0;

        for (const char of normalized) {
            if (vowels.includes(char)) {
                sum += this.letterValue(char);
            }
        }

        return this.reduce(sum);
    },

    // Calculate sứ mệnh number (all letters sum)
    suMenh: function(fullName) {
        const normalized = this.normalize(fullName);
        let sum = 0;

        for (const char of normalized) {
            if (/[A-Z]/.test(char)) {
                sum += this.letterValue(char);
            }
        }

        return this.reduce(sum);
    },

    // Calculate nhân cách number (consonant sum)
    nhanCach: function(fullName) {
        const normalized = this.normalize(fullName);
        const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
        let sum = 0;

        for (const char of normalized) {
            if (/[A-Z]/.test(char) && !vowels.includes(char)) {
                sum += this.letterValue(char);
            }
        }

        return this.reduce(sum);
    },

    // Calculate criteria score (0-100)
    criteria: function(item, chuDao) {
        // Hợp số chủ đạo
        const suMenhReduced = this.reduce(this.suMenh(item.fullName));
        const chuDaoReduced = this.reduce(chuDao);
        let hopChuDaoScore;

        if (suMenhReduced === chuDaoReduced) {
            hopChuDaoScore = 95;
        } else if (
            (suMenhReduced === 1 || suMenhReduced === 5 || suMenhReduced === 7) &&
            (chuDaoReduced === 1 || chuDaoReduced === 5 || chuDaoReduced === 7)
        ) {
            hopChuDaoScore = 90;
        } else if (
            (suMenhReduced === 2 || suMenhReduced === 4 || suMenhReduced === 8) &&
            (chuDaoReduced === 2 || chuDaoReduced === 4 || chuDaoReduced === 8)
        ) {
            hopChuDaoScore = 90;
        } else if (
            (suMenhReduced === 3 || suMenhReduced === 6 || suMenhReduced === 9) &&
            (chuDaoReduced === 3 || chuDaoReduced === 6 || chuDaoReduced === 9)
        ) {
            hopChuDaoScore = 90;
        } else if (Math.abs(suMenhReduced - chuDaoReduced) <= 2) {
            hopChuDaoScore = 78;
        } else {
            hopChuDaoScore = 65;
        }

        // Linh hồn
        const linhHon = this.linhHon(item.fullName);
        let linhHonScore;
        if ([1, 3, 5, 6, 9].includes(linhHon)) {
            linhHonScore = 88;
        } else if ([11, 22, 33].includes(linhHon)) {
            linhHonScore = 95;
        } else {
            linhHonScore = 75;
        }

        // Sứ mệnh
        const suMenh = this.suMenh(item.fullName);
        let suMenhScore;
        if ([1, 3, 5, 6, 9].includes(suMenh)) {
            suMenhScore = 88;
        } else if ([11, 22, 33].includes(suMenh)) {
            suMenhScore = 95;
        } else {
            suMenhScore = 75;
        }

        // Nhân cách
        const nhanCach = this.nhanCach(item.fullName);
        let nhanCachScore;
        if ([1, 3, 5, 6, 9].includes(nhanCach)) {
            nhanCachScore = 88;
        } else if ([11, 22, 33].includes(nhanCach)) {
            nhanCachScore = 95;
        } else {
            nhanCachScore = 75;
        }

        // Âm điệu
        const syllables = item.fullName.split(' ').length;
        let amDieuScore = syllables === 3 ? 85 : syllables === 4 ? 80 : 75;

        // Ý nghĩa
        const yNghiaScore = 85 + Math.min(10, item.meaning.split(' ').length);

        return {
            hopChuDao: hopChuDaoScore,
            linhHon: linhHonScore,
            suMenh: suMenhScore,
            nhanCach: nhanCachScore,
            amDieu: amDieuScore,
            yNghia: yNghiaScore
        };
    },

    // Calculate total score (weighted sum)
    total: function(criteria) {
        const total = Math.round(
            0.3 * criteria.hopChuDao +
            0.15 * criteria.linhHon +
            0.15 * criteria.suMenh +
            0.1 * criteria.nhanCach +
            0.15 * criteria.amDieu +
            0.15 * criteria.yNghia
        );
        return Math.max(55, Math.min(100, total));
    },

    // Calculate đỉnh cao cuộc đời
    dinhCao: function(dateStr) {
        const [year, month, day] = dateStr.split('-').map(Number);
        const M = this.reduce(month);
        const D = this.reduce(day);
        const Y = this.reduce(year);

        const P1 = this.reduce(M + D);
        const P2 = this.reduce(D + Y);
        const P3 = this.reduce(P1 + P2);
        const P4 = this.reduce(M + Y);

        const L = this.reduce(this.chuDao(dateStr));
        const L1 = L === 11 ? 2 : L === 22 ? 4 : L === 33 ? 6 : L; const e1 = 36 - L1;
        const e2 = e1 + 9;
        const e3 = e2 + 9;

        const one = n => { while (n > 9) n = String(n).split('').reduce((a, b) => a + +b, 0); return n; };
        const m = one(month), d = one(day), y = one(year);
        const C1 = Math.abs(m - d), C2 = Math.abs(d - y), C3 = Math.abs(C1 - C2), C4 = Math.abs(m - y);
        return {
            P: [P1, P2, P3, P4],
            C: [C1, C2, C3, C4],
            ends: [e1, e2, e3]
        };
    },

    // Calculate hành trình cuộc đời
    hanhTrinh: function(dateStr) {
        const { P, C, ends } = this.dinhCao(dateStr);
        const stages = typeof STAGES !== 'undefined' ? STAGES : [
            { key: 'tuoiTho', label: 'Tuổi thơ', ages: '0–12', mid: 6, focus: 'tinhYeu' },
            { key: 'hocTro', label: 'Tuổi học trò', ages: '13–22', mid: 17, focus: 'suNghiep' },
            { key: 'lapNghiep', label: 'Lập nghiệp', ages: '23–35', mid: 29, focus: 'taiLoc' },
            { key: 'truongThanh', label: 'Trưởng thành', ages: '36–50', mid: 43, focus: 'tinhYeu' },
            { key: 'anNhan', label: 'An nhàn', ages: '51+', mid: 60, focus: 'taiLoc' }
        ];

        const res = stages.map((stage, index) => {
            const n = stage.mid <= ends[0] ? 0 : stage.mid <= ends[1] ? 1 : stage.mid <= ends[2] ? 2 : 3;
            const number = P[n];

            return {
                key: stage.key,
                label: stage.label,
                ages: stage.ages,
                period: n + 1,
                challenge: C[n],
                focus: stage.focus,
                number: number
            };
        });
        res.e1 = ends[0];
        return res;
    }
};

// Number explanations
const numberExplanations = {
    1: "Con luôn tự lập, dám nghĩ dám làm",
    2: "Con hiền hòa, biết lắng nghe người khác",
    3: "Con vui vẻ, nói chuyện có duyên",
    4: "Con chăm chỉ, đáng tin cậy",
    5: "Con ham khám phá, thích tự do",
    6: "Con yêu thương gia đình, hay giúp người",
    7: "Con thông minh, thích tìm hiểu",
    8: "Con có chí, giỏi lo liệu",
    9: "Con tốt bụng, rộng lượng",
    11: "Con nhạy cảm, có trực giác tốt",
    22: "Con giỏi biến ước mơ thành thật",
    33: "Con giàu lòng yêu thương"
};

// DOM code (only runs in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Set global chart defaults
        Chart.defaults.color = '#e9e4ff';
        Chart.defaults.font.family = "'Be Vietnam Pro', sans-serif";
        Chart.defaults.borderColor = 'rgba(255,255,255,0.12)';

        // DOM Elements
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const btnGoiy = document.getElementById('btn-goiy');
        const btnMau = document.getElementById('btn-mau');
        const btnCompare = document.getElementById('btn-compare');
        const btnPhanTich = document.getElementById('btn-phantich');
        const resultsContainer = document.getElementById('results');
        const favoritesContainer = document.getElementById('favorites');
        const noFavorites = document.getElementById('no-favorites');
        const modal = document.getElementById('detail-modal');
        const closeModal = document.querySelector('.close');
        const saveImgBtn = document.querySelector('.save-img');
        const radarChartCanvas = document.getElementById('radar-chart');
        const compareChartCanvas = document.getElementById('compare-chart');
        const lifeChartCanvas = document.createElement('canvas');
        lifeChartCanvas.id = 'life-chart';
        lifeChartCanvas.style.height = '240px';

        // Chart instances
        let radarChart = null;
        let compareChart = null;
        let lifeChart = null;

        // Initialize app
        init();

        function init() {
            // Set up event listeners
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => switchTab(btn.dataset.tab));
            });

            btnGoiy.addEventListener('click', generateSuggestions);
            btnMau.addEventListener('click', fillSampleData);
            btnCompare.addEventListener('click', compareNames);
            btnPhanTich.addEventListener('click', analyzeNames);
            closeModal.addEventListener('click', closeDetailModal);
            saveImgBtn.addEventListener('click', saveImage);

            // Load favorites
            loadFavorites();

            // Initialize with first tab
            switchTab('goiy');
        }

        // Tab switching
        function switchTab(tabId) {
            tabBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.tab === tabId);
            });

            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === `tab-${tabId}`);
            });

            if (tabId === 'yeuthich') {
                loadFavorites();
            }
        }

        // Fill sample data
        function fillSampleData() {
            document.getElementById('ho-bo').value = 'Nguyễn';
            document.getElementById('ho-me').value = 'Trần';
            document.getElementById('dob').value = '2026-12-15';
            document.getElementById('gender').value = 'nu';
        }

        // Generate name suggestions
        function generateSuggestions() {
            const hoBo = document.getElementById('ho-bo').value.trim();
            const hoMe = document.getElementById('ho-me').value.trim();
            const dob = document.getElementById('dob').value;
            const gender = document.getElementById('gender').value;

            if (!hoBo || !hoMe || !dob) {
                alert('Vui lòng nhập đầy đủ thông tin');
                return;
            }

            // Get all possible combinations
            const suggestions = generateNameCombinations(hoBo, hoMe, gender, dob);

            // Sort by score
            suggestions.sort((a, b) => b.score - a.score);

            // Display top 20 results
            const seen = new Set(); displayResults(suggestions.filter(s => !seen.has(s.name) && seen.add(s.name)).slice(0, 20));
        }

        // Generate all possible name combinations
        function generateNameCombinations(hoBo, hoMe, gender, dob) {
            const suggestions = [];
            const chuDao = Calc.chuDao(dob);

            // Filter middle names by gender
            const dems = DEMS.filter(dem =>
                dem.gender === gender || dem.gender === 'both'
            );

            // Use father's surname for the full name
            const ho = hoBo;

            // Filter names by gender
            const filteredNames = NAMES.filter(name =>
                name.gender === gender || name.gender === 'both'
            );

            // Generate combinations
            filteredNames.forEach(name => {
                dems.forEach(dem => {
                    const fullName = `${ho} ${dem.name} ${name.name}`;
                    const criteria = Calc.criteria({
                        fullName,
                        meaning: name.meaning
                    }, chuDao);
                    const score = Calc.total(criteria);

                    suggestions.push({
                        fullName,
                        name: name.name,
                        dem: dem.name,
                        ho,
                        meaning: name.meaning,
                        score,
                        criteria,
                        isFavorite: isFavorite(fullName)
                    });
                });
            });

            return suggestions;
        }

        // Analyze custom names
        function analyzeNames() {
            const namesInput = document.getElementById('ten-rieng').value.trim();
            const dob = document.getElementById('dob').value;

            if (!dob) {
                alert('Vui lòng nhập ngày sinh/dự sinh của bé');
                return;
            }

            if (!namesInput) {
                alert('Vui lòng nhập tên bạn muốn phân tích');
                return;
            }

            const names = namesInput.split(/[,\n]/)
                .map(name => name.trim())
                .filter(name => name.length > 0)
                .slice(0, 3);

            if (names.length === 0) {
                alert('Vui lòng nhập ít nhất một tên');
                return;
            }

            const chuDao = Calc.chuDao(dob);
            const results = [];

            names.forEach(name => {
                // Capitalize each word
                const fullName = name.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ');

                // Get parts
                const parts = fullName.split(' ');
                const ho = parts[0];
                const dem = parts.length > 2 ? parts.slice(1, -1).join(' ') : '';
                const ten = parts[parts.length - 1];

                // Find meaning
                const nameObj = NAMES.find(n => n.name === ten);
                const meaning = nameObj ? nameObj.meaning : 'Tên do bố mẹ chọn, gửi gắm mong ước riêng của gia đình';

                // Calculate criteria
                const criteria = Calc.criteria({
                    fullName,
                    meaning
                }, chuDao);
                const score = Calc.total(criteria);

                results.push({
                    fullName,
                    name: ten,
                    dem,
                    ho,
                    meaning,
                    score,
                    criteria,
                    isFavorite: isFavorite(fullName),
                    custom: true
                });
            });

            displayResults(results, document.getElementById('ten-rieng-results'));

            // Auto-open first name
            if (results.length > 0) {
                showDetailModal(results[0]);
            }
        }

        // Display results
        function displayResults(suggestions, container = document.getElementById('results')) {
            container.innerHTML = '';

            if (suggestions.length === 0) {
                container.innerHTML = '<p class="empty-state">Không tìm thấy tên phù hợp.</p>';
                return;
            }

            suggestions.forEach(suggestion => {
                const card = document.createElement('div');
                card.className = 'result-card';
                card.dataset.name = suggestion.fullName;

                card.innerHTML = `
                    <div class="card-header">
                        <h3>${suggestion.fullName}</h3>
                        ${suggestion.custom ? '<span class="badge">Tên bạn chọn</span>' : ''}
                    </div>
                    <div class="card-body">
                        <p class="meaning">${suggestion.meaning}</p>
                        <div class="numerology">
                            <span>Linh hồn: ${Calc.linhHon(suggestion.fullName)}</span>
                            <span>Sứ mệnh: ${Calc.suMenh(suggestion.fullName)}</span>
                            <span>Nhân cách: ${Calc.nhanCach(suggestion.fullName)}</span>
                        </div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${suggestion.score}%"></div>
                            <span>${suggestion.score}/100</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <label class="favorite-toggle">
                            <input type="checkbox" ${suggestion.isFavorite ? 'checked' : ''}>
                            <span class="heart-icon">♥</span>
                        </label>
                        <label class="compare-checkbox">
                            <input type="checkbox" class="compare-check">
                            So sánh
                        </label>
                    </div>
                `;

                card.addEventListener('click', (e) => {
                    if (!e.target.closest('.favorite-toggle') && !e.target.closest('.compare-checkbox')) {
                        showDetailModal(suggestion);
                    }
                });

                const favoriteToggle = card.querySelector('.favorite-toggle input');
                favoriteToggle.addEventListener('change', (e) => {
                    e.stopPropagation();
                    toggleFavorite(suggestion.fullName, e.target.checked);
                });

                const compareCheck = card.querySelector('.compare-check');
                compareCheck.addEventListener('change', (e) => {
                    e.stopPropagation();
                    updateCompareButton();
                });

                container.appendChild(card);
            });
        }

        // Show detail modal
        function showDetailModal(suggestion) {
            // Set modal content
            document.getElementById('modal-name').textContent = suggestion.fullName;

            // Generate explanation text
            const explanation = generateExplanation(suggestion);
            document.getElementById('modal-explanation').textContent = explanation;

            // Animate gauge
            animateGauge(suggestion.score);

            // Create radar chart
            createRadarChart(suggestion);

            // Add readings sections
            const readings = buildReadings(document.getElementById('dob').value, suggestion.fullName);

            // Create readings container if not exists
            let readingsContainer = document.getElementById('modal-readings');
            if (!readingsContainer) {
                readingsContainer = document.createElement('div');
                readingsContainer.id = 'modal-readings';
                document.getElementById('modal-content').appendChild(readingsContainer);
            }

            // Get life journey data
            const dob = document.getElementById('dob').value;
            const journey = Calc.hanhTrinh(dob);

            readingsContainer.innerHTML = `
                <div class="reading-section">
                    <h4>🌱 Bé là người thế nào</h4>
                    <p>${readings.nguoi}</p>
                </div>
                <div class="reading-section">
                    <h4>📚 Học hành & năng khiếu</h4>
                    <p>${readings.hocHanh}</p>
                </div>
                <div class="reading-section">
                    <h4>💼 Nghề nghiệp hợp</h4>
                    <p>${readings.ngheNghiep}</p>
                </div>
                <div class="reading-section">
                    <h4>💕 Tình cảm</h4>
                    <p>${readings.tinhCam}</p>
                </div>
                <div class="reading-section">
                    <h4>💰 Tiền bạc</h4>
                    <p>${readings.tienBac}</p>
                </div>
                <div class="reading-section">
                    <h4>👨‍👩‍👧 Lời khuyên cho bố mẹ</h4>
                    <p>${readings.loiKhuyen}</p>
                </div>
                <div class="reading-section">
                    <h4>🛤️ Hành trình cuộc đời</h4>
                    <div class="chart-container">
                        <div style="position:relative;height:260px">${lifeChartCanvas.outerHTML}</div>
                    </div>
                    <p class="journey-note" style="font-size:.85rem">Trục ngang là độ tuổi. Số 11, 22, 33 được vẽ thành 2, 4, 6. Thần số học chia đời người thành 4 chặng đỉnh cao. Chặng 1 kéo dài từ lúc sinh đến ${journey.e1} tuổi (36 trừ số chủ đạo), chặng 2 và 3 mỗi chặng 9 năm, chặng 4 đến cuối đời. Mỗi chặng có một số đỉnh cao (điều thuận lợi) và một số thử thách (bài học cần vượt qua). Dưới đây là 5 giai đoạn của con, ứng với chặng đang diễn ra ở giữa giai đoạn đó.</p>
                    <div class="journey-stages">
                        ${journey.map(st => { const t = (STAGE_TEXT[st.key] || {})[st.number] || ['', '']; return `
                            <div class="journey-stage">
                                <h5>${st.label} (${st.ages} tuổi) · chặng ${st.period}</h5>
                                <div class="journey-nums"><span class="jn-peak">Đỉnh cao: ${st.number}</span><span class="jn-chal">Thử thách: ${st.challenge}</span></div>
                                <p>${t[0]}</p>
                                <p><b>Bài học:</b> ${CHALLENGE_TEXT[st.challenge]}</p>
                                <p class="journey-advice">💡 Lời khuyên cho bố mẹ: ${t[1]}</p>
                            </div>`; }).join('')}
                    </div>
                </div>
            `;

            // Create life chart
            createLifeChart(suggestion);

            // Show modal
            modal.style.display = 'block';
        }

        // Generate explanation text
        function generateExplanation(suggestion) {
            const chuDao = Calc.chuDao(document.getElementById('dob').value);
            const linhHon = Calc.linhHon(suggestion.fullName);
            const suMenh = Calc.suMenh(suggestion.fullName);
            const nhanCach = Calc.nhanCach(suggestion.fullName);

            return `Tên ${suggestion.fullName} mang ý nghĩa "${suggestion.meaning}".
            Số chủ đạo là ${chuDao} (tính cách chính của con theo ngày sinh).
            Số linh hồn là ${linhHon} (${numberExplanations[linhHon] || 'điều con mong muốn bên trong'}).
            Số sứ mệnh là ${suMenh} (${numberExplanations[suMenh] || 'điều con dễ làm tốt'}).
            Số nhân cách là ${nhanCach} (${numberExplanations[nhanCach] || 'ấn tượng con để lại cho người khác'}).
            Nội dung mang tính tham khảo, giải trí.`;
        }

        // Animate gauge
        function animateGauge(score) {
            const gaugeFill = document.querySelector('.gauge-fill');
            const gaugeText = document.querySelector('.gauge-text');

            // Reset animation
            gaugeFill.style.strokeDasharray = '0, 251.3';
            gaugeText.textContent = '0';

            // Calculate dasharray for score (0-100)
            const dasharray = (score / 100) * 251.3;

            // Animate
            let current = 0;
            const interval = setInterval(() => {
                current += 2;
                if (current >= score) {
                    current = score;
                    clearInterval(interval);
                }

                gaugeFill.style.strokeDasharray = `${(current / 100) * 251.3}, 251.3`;
                gaugeText.textContent = Math.round(current);
            }, 20);

            // Apply gradient
            gaugeFill.style.stroke = 'url(#gauge-gradient)';
        }

        // Create radar chart
        function createRadarChart(suggestion) {
            // Destroy previous chart if exists
            if (radarChart) {
                radarChart.destroy();
            }

            const ctx = radarChartCanvas.getContext('2d');
            radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Hợp số chủ đạo', 'Linh hồn', 'Sứ mệnh', 'Nhân cách', 'Âm điệu', 'Ý nghĩa'],
                    datasets: [{
                        label: 'Điểm số',
                        data: [
                            suggestion.criteria.hopChuDao,
                            suggestion.criteria.linhHon,
                            suggestion.criteria.suMenh,
                            suggestion.criteria.nhanCach,
                            suggestion.criteria.amDieu,
                            suggestion.criteria.yNghia
                        ],
                        backgroundColor: 'rgba(255, 216, 111, 0.25)',
                        borderColor: '#ffd86f',
                        borderWidth: 2,
                        pointBackgroundColor: '#ff6fd8',
                        pointRadius: 4
                    }]
                },
                options: {
                    animation: {
                        duration: 1200
                    },
                    scales: {
                        r: {
                            angleLines: {
                                color: 'rgba(255,255,255,0.2)'
                            },
                            grid: {
                                color: 'rgba(255,255,255,0.2)'
                            },
                            pointLabels: {
                                color: '#fff',
                                font: {
                                    size: 12,
                                    weight: 600
                                }
                            },
                            ticks: {
                                display: false,
                                backdropColor: 'rgba(255,255,255,0.5)',
                                showLabelBackdrop: false
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        // Create life chart
        function createLifeChart(suggestion) {
            // Destroy previous chart if exists
            if (lifeChart) {
                lifeChart.destroy();
            }

            const dob = document.getElementById('dob').value;
            const journey = Calc.hanhTrinh(dob);

            // Convert 11→2, 22→4, 33→6 for chart display
            const chartData = journey.map(stage => {
                if (stage.number === 11) return 2;
                if (stage.number === 22) return 4;
                if (stage.number === 33) return 6;
                return stage.number;
            });

            const ctx = document.getElementById('life-chart').getContext('2d');
            lifeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: journey.map(stage => stage.ages),
                    datasets: [{
                        label: 'Đỉnh cao',
                        data: chartData,
                        borderColor: '#ffd86f',
                        backgroundColor: (context) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                            gradient.addColorStop(0, 'rgba(255, 215, 0, 0.5)');
                            gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
                            return gradient;
                        },
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 5
                    }, {
                        label: 'Thử thách',
                        data: journey.map(st => st.challenge),
                        borderColor: '#ff8fa3',
                        borderDash: [6, 4],
                        borderWidth: 2,
                        fill: false,
                        tension: 0.3,
                        pointRadius: 5
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 10,
                            stepSize: 1,
                            ticks: {
                                color: '#fff'
                            }
                        },
                        x: {
                            ticks: {
                                color: '#fff', maxRotation: 0, minRotation: 0, autoSkip: false, font: { size: 10 }
                            }
                        }
                    },
                    plugins: {
                        legend: { labels: { color: '#fff' } },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const stage = journey[context.dataIndex];
                                    return context.datasetIndex === 0 ? `Đỉnh cao: ${stage.number}` : `Thử thách: ${stage.challenge}`;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Close detail modal
        function closeDetailModal() {
            modal.style.display = 'none';
            if (lifeChart) {
                lifeChart.destroy();
                lifeChart = null;
            }
        }

        // Save image
        function saveImage() {
            const shareCard = document.getElementById('share-card');

            // Add short love reading to share card
            const readings = buildReadings(document.getElementById('dob').value, document.getElementById('modal-name').textContent);
            const loveLine = document.createElement('p');
            loveLine.className = 'love-line';
            loveLine.textContent = `💕 ${readings.tinhCam}`;
            shareCard.appendChild(loveLine);

            html2canvas(shareCard, {
                backgroundColor: null,
                scale: 2
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'ten-dep-cho-be.png';
                link.href = canvas.toDataURL('image/png');
                link.click();

                // Remove the temporary love line
                shareCard.removeChild(loveLine);
            });
        }

        // Toggle favorite
        function toggleFavorite(fullName, isFavorite) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (isFavorite) {
                if (!favorites.some(fav => fav.fullName === fullName)) {
                    const suggestion = NAMES.find(name => fullName.includes(name.name));
                    if (suggestion) {
                        const dob = document.getElementById('dob').value;
                        const chuDao = Calc.chuDao(dob);
                        const criteria = Calc.criteria({
                            fullName,
                            meaning: suggestion.meaning
                        }, chuDao);
                        const score = Calc.total(criteria);

                        favorites.push({
                            fullName,
                            name: suggestion.name,
                            dem: fullName.split(' ')[1],
                            ho: fullName.split(' ')[0],
                            meaning: suggestion.meaning,
                            score,
                            criteria
                        });
                    }
                }
            } else {
                favorites = favorites.filter(fav => fav.fullName !== fullName);
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
            loadFavorites();
        }

        // Check if name is favorite
        function isFavorite(fullName) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            return favorites.some(fav => fav.fullName === fullName);
        }

        // Load favorites
        function loadFavorites() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            if (favorites.length === 0) {
                noFavorites.style.display = 'block';
                favoritesContainer.innerHTML = '';
                return;
            }

            noFavorites.style.display = 'none';
            favoritesContainer.innerHTML = '';

            favorites.forEach(favorite => {
                const card = document.createElement('div');
                card.className = 'result-card';
                card.dataset.name = favorite.fullName;

                card.innerHTML = `
                    <div class="card-header">
                        <h3>${favorite.fullName}</h3>
                    </div>
                    <div class="card-body">
                        <p class="meaning">${favorite.meaning}</p>
                        <div class="numerology">
                            <span>Linh hồn: ${Calc.linhHon(favorite.fullName)}</span>
                            <span>Sứ mệnh: ${Calc.suMenh(favorite.fullName)}</span>
                            <span>Nhân cách: ${Calc.nhanCach(favorite.fullName)}</span>
                        </div>
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${favorite.score}%"></div>
                            <span>${favorite.score}/100</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <label class="favorite-toggle">
                            <input type="checkbox" checked>
                            <span class="heart-icon">♥</span>
                        </label>
                    </div>
                `;

                card.addEventListener('click', (e) => {
                    if (!e.target.closest('.favorite-toggle')) {
                        showDetailModal(favorite);
                    }
                });

                const favoriteToggle = card.querySelector('.favorite-toggle input');
                favoriteToggle.addEventListener('change', (e) => {
                    e.stopPropagation();
                    toggleFavorite(favorite.fullName, e.target.checked);
                });

                favoritesContainer.appendChild(card);
            });
        }

        // Compare names
        function compareNames() {
            const checkedCards = document.querySelectorAll('.compare-check:checked');
            const namesToCompare = [];

            checkedCards.forEach(card => {
                const fullName = card.closest('.result-card').dataset.name;
                const suggestion = NAMES.find(name => fullName.includes(name.name));
                if (suggestion) {
                    const dob = document.getElementById('dob').value;
                    const chuDao = Calc.chuDao(dob);
                    const criteria = Calc.criteria({
                        fullName,
                        meaning: suggestion.meaning
                    }, chuDao);
                    const score = Calc.total(criteria);

                    namesToCompare.push({
                        fullName,
                        name: suggestion.name,
                        score,
                        criteria
                    });
                }
            });

            if (namesToCompare.length < 2) {
                alert('Vui lòng chọn ít nhất 2 tên để so sánh');
                return;
            }

            createCompareChart(namesToCompare);
        }

        // Create compare chart
        function createCompareChart(names) {
            // Destroy previous chart if exists
            if (compareChart) {
                compareChart.destroy();
            }

            // Set canvas parent height
            compareChartCanvas.parentElement.style.height = '320px';

            const colors = ['#ffd86f', '#ff6fd8', '#6fd3ff'];
            const datasets = names.map((name, index) => ({
                label: name.fullName,
                data: [
                    name.criteria.hopChuDao,
                    name.criteria.linhHon,
                    name.criteria.suMenh,
                    name.criteria.nhanCach,
                    name.criteria.amDieu,
                    name.criteria.yNghia
                ],
                backgroundColor: colors[index % colors.length],
                borderColor: colors[index % colors.length],
                borderWidth: 2,
                borderRadius: 8
            }));

            const ctx = compareChartCanvas.getContext('2d');
            compareChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Hợp số chủ đạo', 'Linh hồn', 'Sứ mệnh', 'Nhân cách', 'Âm điệu', 'Ý nghĩa'],
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: false,
                        },
                        y: {
                            stacked: false,
                            beginAtZero: true,
                            min: 40,
                            max: 100
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#fff'
                            }
                        }
                    }
                }
            });

            // Show compare tab
            switchTab('sosanh');
        }

        // Update compare button state
        function updateCompareButton() {
            const checkedCount = document.querySelectorAll('.compare-check:checked').length;
            btnCompare.disabled = checkedCount < 2;
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDetailModal();
            }
        });
    });
}

// Export Calc for Node.js
if (typeof module !== 'undefined') {
    module.exports = Calc;
}
