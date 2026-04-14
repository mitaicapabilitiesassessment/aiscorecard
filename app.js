const CONFIG = {
    // Replace with your Google Apps Script Web App URL
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz3n2T_1f-jAifp3-tInZp8Or2BdcDu-bHaGHApXtzM-521xQwvDI011mzGcH4uVdsX_g/exec',
    LEVELS: [
    { 
        min: 0, max: 10, name: 'AI Beginner', 
        desc: 'Chưa sử dụng AI',
        assessment: 'Bạn đang ở vạch xuất phát. Bạn có thể chưa từng tương tác với các mô hình ngôn ngữ lớn hoặc mới chỉ nghe nói về AI mà chưa thực hành. Tiềm năng tăng năng suất của bạn còn rất lớn.',
        advice: 'Bạn mới bắt đầu hành trình khám phá AI. Hãy thử nghiệm các câu hỏi cơ bản trên trên các công cụ AI phổ biến hiện nay như ChatGPT, Gemini hoặc Claude để thấy khả năng của chúng.',
        actionPlan: 'Tạo tài khoản miễn phí trên ChatGPT hoặc Claude.ai. Dành 10 phút mỗi ngày để hỏi bất kỳ điều gì bạn thắc mắc. Hãy bắt đầu bằng câu lệnh: "Giải thích cho tôi về [chủ đề công việc] một cách đơn giản".'
    },
    { 
        min: 11, max: 20, name: 'AI Explorer', 
        desc: 'Bắt đầu khám phá AI',
        assessment: 'Bạn đã vượt qua rào cản tâm lý ban đầu. Bạn biết cách đặt câu hỏi cho AI nhưng phong cách sử dụng còn ngẫu hứng, kết quả đôi khi chưa nhất quán. Bạn đang dùng AI như một công cụ tìm kiếm thay thế.',
        advice: 'Bạn đã bước đầu làm quen với AI. Hãy thử ứng dụng AI vào việc soạn thảo email hoặc tóm tắt tài liệu để tiết kiệm thời gian hàng ngày.',
        actionPlan: 'Biến AI thành trợ lý cá nhân. Khi cần viết email, hãy dùng prompt: "Soạn giúp tôi một email lịch sự về [nội dung], giọng văn chuyên nghiệp". Thực hành tóm tắt các bài báo dài thành 3 gạch đầu dòng.'
    },
    { 
        min: 21, max: 35, name: 'AI Practitioner', 
        desc: 'Sử dụng AI thường xuyên',
        assessment: 'Bạn đã tích hợp AI vào guồng quay công việc hàng ngày. Bạn hiểu rằng AI không phải lúc nào cũng đúng và bắt đầu chỉnh sửa câu trả lời. Tuy nhiên, bạn vẫn đang sử dụng các prompt đơn giản, chưa khai thác hết chiều sâu.',
        advice: 'Bạn sử dụng AI khá thành thạo. Hãy tìm hiểu sâu về kỹ thuật viết Prompt (Prompt Engineering) để nâng cao chất lượng đầu ra.',
        actionPlan: 'Học cấu trúc prompt: "Vai trò - Ngữ cảnh - Yêu cầu - Định dạng đầu ra". Ví dụ: "Bạn là chuyên viên phân tích dữ liệu cấp cao. Hãy phân tích ưu nhược điểm của dự án A (dữ liệu đính kèm). Trình bày dưới dạng bảng SWOT và đề xuất 3 hành động tiếp theo".'
    },
    { 
        min: 36, max: 50, name: 'AI Advanced', 
        desc: 'Sử dụng AI chuyên sâu',
        assessment: 'Bạn không chỉ đặt câu hỏi hay mà còn biết cách cung cấp dữ liệu và ngữ cảnh phức tạp cho AI. Bạn có tư duy phản biện tốt với câu trả lời của AI. Bạn là người giải quyết vấn đề hiệu quả trong tập thể.',
        advice: 'Bạn có kỹ năng AI chuyên sâu. Hãy bắt đầu xây dựng các quy trình tự động hóa (Workflow) để tối ưu các tác vụ phức tạp.',
        actionPlan: 'Kết hợp AI với các công cụ tự động hóa khác (Zapier, Make.com, n8n). Thử thách: Tạo một workflow tự động đọc file báo cáo hàng tuần, yêu cầu AI tóm tắt nội dung và gửi trực tiếp nhận định qua Email cho Quản lý.'
    },
    { 
        min: 51, max: 60, name: 'AI Leader', 
        desc: 'Dẫn đầu xu hướng ứng dụng AI',
        assessment: 'Bạn là người tiên phong trong tổ chức. Bạn hiểu rõ giới hạn và rủi ro của AI cũng như cách tối ưu nó cho từng vị trí công việc cụ thể. Bạn nhìn AI như một đối tác chiến lược thay vì một công cụ đơn thuần.',
        advice: 'Chúc mừng chuyên gia! Bạn nên dẫn dắt đội nhóm, chia sẻ kinh nghiệm và thiết kế chiến lược ứng dụng AI toàn diện cho doanh nghiệp.',
        actionPlan: 'Xây dựng "Thư viện Prompt Mẫu" cho phòng ban. Tổ chức các buổi "AI Office Hour" hàng tuần để giải đáp thắc mắc cho đồng nghiệp. Nghiên cứu các mô hình AI tùy chỉnh (Custom GPTs) phục vụ nhu cầu đặc thù của công ty.'
    }
];

// Question IDs and content
const QUESTIONS = [
    {
        id: 1,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        text: "Bạn sử dụng AI trong công việc với mức độ nào?",
        type: "single",
        options: [
            { text: "Không bao giờ", points: 0 },
            { text: "Thỉnh thoảng", points: 2 },
            { text: "Thường xuyên", points: 4 },
            { text: "Luôn luôn", points: 5 }
        ]
    },
    {
        id: 2,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        text: "Bạn sử dụng AI cho bao nhiêu loại công việc?",
        type: "single",
        options: [
            { text: "Không sử dụng", points: 0 },
            { text: "1-2 công việc", points: 2 },
            { text: "3-5 công việc", points: 3 },
            { text: "> 5 công việc", points: 5 }
        ]
    },
    {
        id: 3,
        group: "Nhóm 1 — Mức độ sử dụng AI",
        text: "Bạn đã sử dụng AI bao lâu?",
        type: "single",
        options: [
            { text: "Chưa từng", points: 0 },
            { text: "< 3 tháng", points: 1 },
            { text: "3-6 tháng", points: 2 },
            { text: "6-12 tháng", points: 3 },
            { text: "> 1 năm", points: 5 }
        ]
    },
    {
        id: 4,
        group: "Nhóm 2 — Mức độ thành thạo AI",
        text: "Bạn đánh giá mức độ thành thạo AI (Level 1: Mới bắt đầu; Level 2: Cơ bản; Level 3: Trung bình; Level 4: Thành thạo; Level 5: Chuyên gia)?",
        type: "scale",
        min: 1,
        max: 5,
        pointsPerScale: 1
    },
    {
        id: 5,
        group: "Nhóm 2 — Mức độ thành thạo AI",
        text: "Bạn có thể làm gì với AI? (Chọn nhiều)",
        type: "multiple",
        options: [
            { text: "Viết email", points: 1 },
            { text: "Tạo nội dung", points: 1 },
            { text: "Phân tích dữ liệu", points: 2 },
            { text: "Viết prompt nâng cao", points: 2 },
            { text: "Tự động hóa", points: 3 },
            { text: "Tạo workflow AI", points: 4 }
        ],
        maxPoints: 10
    },
    {
        id: 6,
        group: "Nhóm 3 — Tác động đến hiệu suất",
        text: "AI giúp tăng hiệu suất bao nhiêu?",
        type: "single",
        options: [
            { text: "0-20%", points: 1 },
            { text: "20-40%", points: 2 },
            { text: "40-60%", points: 3 },
            { text: "60-80%", points: 4 },
            { text: "80-100%", points: 5 }
        ]
    },
    {
        id: 7,
        group: "Nhóm 3 — Tác động đến hiệu suất",
        text: "Bạn tiết kiệm bao nhiêu thời gian?",
        type: "single",
        options: [
            { text: "Không tiết kiệm", points: 0 },
            { text: "< 1h/ngày", points: 2 },
            { text: "1-2h/ngày", points: 3 },
            { text: "2-3h/ngày", points: 4 },
            { text: "> 3h/ngày", points: 5 }
        ],
        hint: "💡 Mức tiết kiệm trung bình của người dùng AI là 40-60 phút/ngày."
    },
    {
        id: 8,
        group: "Nhóm 4 — AI mindset & innovation",
        text: "Bạn chủ động tìm hiểu AI?",
        type: "single",
        options: [
            { text: "Không", points: 0 },
            { text: "Thỉnh thoảng", points: 2 },
            { text: "Thường xuyên", points: 4 },
            { text: "Luôn luôn", points: 5 }
        ]
    },
    {
        id: 9,
        group: "Nhóm 4 — AI mindset & innovation",
        text: "Bạn có chia sẻ AI cho đồng nghiệp?",
        type: "single",
        options: [
            { text: "Không", points: 0 },
            { text: "Thỉnh thoảng", points: 2 },
            { text: "Thường xuyên", points: 4 },
            { text: "Luôn luôn", points: 5 }
        ]
    },
    {
        id: 10,
        group: "Nhóm 4 — AI mindset & innovation",
        text: "Bạn có đề xuất ứng dụng AI trong công việc?",
        type: "single",
        options: [
            { text: "Không", points: 0 },
            { text: "Ít", points: 2 },
            { text: "Thỉnh thoảng", points: 3 },
            { text: "Thường xuyên", points: 5 }
        ]
    },
    {
        id: 11,
        group: "Nhóm 5 — AI nâng cao",
        text: "Bạn đã sử dụng AI nào? (Mỗi công cụ 1 điểm)",
        type: "multiple",
        options: [
            { text: "ChatGPT", points: 1 },
            { text: "Claude", points: 1 },
            { text: "Gemini", points: 1 },
            { text: "DeepSeek", points: 1 },
            { text: "Copilot", points: 1 },
            { text: "Perplexity", points: 1 },
            { text: "Midjourney / DALL-E 3", points: 1 },
            { text: "Runway / Descript", points: 1 },
            { text: "ElevenLabs / Suno", points: 1 },
            { text: "Notion AI", points: 1 },
            { text: "Grammarly / Wordtune", points: 1 },
            { text: "Zapier AI", points: 1 },
            { text: "Make AI", points: 1 },
            { text: "Cursor / Claude Code", points: 1 }
        ]
    },
    {
        id: 12,
        group: "Nhóm 5 — AI nâng cao",
        text: "Bạn đã làm gì với AI? (Mỗi hoạt động 2 điểm)",
        type: "multiple",
        options: [
            { text: "Automation (tự động hóa tác vụ đơn lẻ)", points: 2 },
            { text: "Chatbot nội bộ", points: 2 },
            { text: "AI workflow (chuỗi tự động hóa)", points: 2 },
            { text: "AI dashboard (báo cáo thông minh)", points: 2 },
            { text: "AI training (đào tạo nội bộ về AI)", points: 2 },
            { text: "AI Agent / Trợ lý tự hành", points: 2 },
            { text: "RAG / Tìm kiếm tài liệu nội bộ", points: 2 },
            { text: "Fine-tuning / Huấn luyện mô hình riêng", points: 2 },
            { text: "Multimodal AI (kết hợp văn bản, ảnh, âm thanh)", points: 2 },
            { text: "Phân tích dữ liệu / Dự báo bằng AI", points: 2 }
        ]
    }
];

let state = {
    step: 'intro',
    currentQuestionIndex: 0,
    user: { name: '', email: '', position: '' },
    answers: {}
};

// DOM references will be populated after DOM level
let dom = {
    main: null,
    progressBar: null,
    progressWrapper: null
};

function setState(newState) {
    state = { ...state, ...newState };
    render();
}

function render() {
    if (!dom.main) return;
    
    try {
        if (state.step === 'intro') {
            renderIntro();
        } else if (state.step === 'info') {
            renderInfoForm();
        } else if (state.step === 'question') {
            renderQuestion();
        } else if (state.step === 'result') {
            renderResult();
        }
    } catch (error) {
        console.error("Render error:", error);
        dom.main.innerHTML = `<div class="card"><p>Có lỗi xảy ra khi tải nội dung. Vui lòng tải lại trang.</p></div>`;
    }
}

function renderIntro() {
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'none';
    dom.main.innerHTML = `
        <div class="screen intro-screen text-center">
            <div class="card">
                <h1>AI Capability Scorecard</h1>
                <p class="description">Đo lường năng lực sử dụng AI của bạn để tối ưu hiệu quả công việc và định hướng tương lai.</p>
                <div class="benefits" style="text-align: left; margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫Đánh giá được xây dựng bởi Massachusetts Institute of Technology</p>
                    <p style="margin-bottom: 0.5rem;">🧑‍🏫Bộ câu hỏi khảo sát thuộc nghiên cứu khoa học đăng trên tập chí MDPI</p>
                    <p>🧑‍🏫Thuộc nghiên cứu đánh giá tác động của AI được thực hiện bởi 3 nhà nghiên cứu Sabina-Cristiana Necula, Doina Fotache và Emanuel Rieder</p>
                </div>
                <button class="btn btn-primary w-100" onclick="setState({ step: 'info' })">Bắt đầu khảo sát</button>
            </div>
        </div>
    `;
}

function renderInfoForm() {
    dom.main.innerHTML = `
        <div class="screen info-screen">
            <div class="card">
                <h2>Thông tin cá nhân</h2>
                <p class="description">Vui lòng cung cấp thông tin để chúng tôi lưu trữ kết quả của bạn.</p>
                <div class="form-group">
                    <label>Họ và tên</label>
                    <input type="text" id="user-name" placeholder="Nguyễn Văn A" value="${state.user.name}">
                </div>
                <div class="form-group">
                    <label>Email công ty</label>
                    <input type="email" id="user-email" placeholder="example@izion24.com.vn" value="${state.user.email}">
                </div>
                <div class="form-group">
                    <label>Chức vụ / Phòng ban</label>
                    <input type="text" id="user-position" placeholder="Marketing / Sales..." value="${state.user.position}">
                </div>
                <button class="btn btn-primary w-100" id="start-btn" onclick="handleInfoSubmit()">Tiếp tục</button>
            </div>
        </div>
    `;
}

function handleInfoSubmit() {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const position = document.getElementById('user-position').value;

    if (!name || !email) {
        alert('Vui lòng điền thông tin Họ tên và Email!');
        return;
    }

    setState({
        step: 'question',
        user: { name, email, position }
    });
}

function renderQuestion() {
    const q = QUESTIONS[state.currentQuestionIndex];
    if (!q) return;

    const progress = (state.currentQuestionIndex / QUESTIONS.length) * 100;
    
    if (dom.progressWrapper) dom.progressWrapper.style.display = 'block';
    if (dom.progressBar) dom.progressBar.style.width = `${progress}%`;

    let optionsHtml = '';
    const currentAnswer = state.answers[q.id];

    if (q.type === 'single') {
        optionsHtml = `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item ${currentAnswer === i ? 'selected' : ''}" onclick="selectOption(${q.id}, ${i})">
                    ${opt.text}
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'multiple') {
        const selectedIndices = currentAnswer || [];
        optionsHtml = `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item ${selectedIndices.includes(i) ? 'selected' : ''}" onclick="toggleOption(${q.id}, ${i})">
                    <div style="margin-right: 15px;">${selectedIndices.includes(i) ? '✅' : '⬜'}</div>
                    ${opt.text}
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'scale') {
        optionsHtml = `<div class="options-list" style="grid-template-columns: repeat(${q.max}, 1fr);">
            ${Array.from({length: q.max}, (_, i) => i + 1).map(val => `
                <div class="option-item text-center ${currentAnswer === val ? 'selected' : ''}" onclick="selectOption(${q.id}, ${val})" style="justify-content: center;">
                    ${val}
                </div>
            `).join('')}
        </div>`;
    }

    if (q.hint) {
        optionsHtml += `<div style="margin-top: 1.5rem; padding: 0.75rem 1rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 8px; font-size: 0.9rem; color: #EEE;">
            ${q.hint}
        </div>`;
    }

    dom.main.innerHTML = `
        <div class="screen question-screen">
            <div class="group-label" style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                ${q.group} (${state.currentQuestionIndex + 1}/${QUESTIONS.length})
            </div>
            <div class="card">
                <h2>${q.text}</h2>
                ${optionsHtml}
                <div class="button-group">
                    <button class="btn" style="background: #333; color: white;" onclick="prevQuestion()">Quay lại</button>
                    <button class="btn btn-primary" onclick="nextQuestion()" ${currentAnswer === undefined || (q.type === 'multiple' && currentAnswer.length === 0) ? 'disabled' : ''}>${state.currentQuestionIndex === QUESTIONS.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}</button>
                </div>
            </div>
        </div>
    `;
}

function selectOption(qId, value) {
    const newAnswers = { ...state.answers, [qId]: value };
    setState({ answers: newAnswers });
}

function toggleOption(qId, index) {
    let current = state.answers[qId] || [];
    if (current.includes(index)) {
        current = current.filter(i => i !== index);
    } else {
        current = [...current, index];
    }
    const newAnswers = { ...state.answers, [qId]: current };
    setState({ answers: newAnswers });
}

function nextQuestion() {
    if (state.currentQuestionIndex < QUESTIONS.length - 1) {
        setState({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
        setState({ step: 'result' });
        submitToSheets();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        setState({ currentQuestionIndex: state.currentQuestionIndex - 1 });
    } else {
        setState({ step: 'info' });
    }
}

function calculateScore() {
    let total = 0;
    QUESTIONS.forEach(q => {
        const ans = state.answers[q.id];
        if (ans === undefined) return;

        if (q.type === 'single') {
            total += q.options[ans].points;
        } else if (q.type === 'multiple') {
            let qPoints = ans.reduce((sum, idx) => sum + q.options[idx].points, 0);
            if (q.maxPoints) qPoints = Math.min(qPoints, q.maxPoints);
            total += qPoints;
        } else if (q.type === 'scale') {
            total += (ans * q.pointsPerScale);
        }
    });
    return total;
}

function renderResult() {
    const score = calculateScore();
    let level = CONFIG.LEVELS.find(l => score >= l.min && score <= l.max);
    
    if (!level && score > 60) level = CONFIG.LEVELS[CONFIG.LEVELS.length - 1];
    if (!level) level = CONFIG.LEVELS[0];
    
    if (dom.progressBar) dom.progressBar.style.width = `100%`;
    dom.main.innerHTML = `
        <div class="screen result-screen text-center">
            <div class="card">
                <h2>Kết quả của bạn</h2>
                <div class="score-circle">
                    <span class="score-value">${score}</span>
                    <span style="font-size: 0.8rem; font-weight: 500;">/ 60 ĐIỂM</span>
                </div>
                <div class="level-badge">${level.name}</div>
                <p style="margin-top: 1.5rem; font-size: 1.1rem; font-weight: 700; color: var(--primary-color);">${level.desc}</p>
                
                <div class="result-details" style="text-align: left; margin-top: 2rem;">
                    <div class="result-section" style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.5rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">📊</span> Đánh giá năng lực
                        </h3>
                        <p style="font-size: 0.95rem; color: #BBB; line-height: 1.6;">${level.assessment}</p>
                    </div>

                    <div class="result-section" style="margin-bottom: 1.5rem; padding: 1.2rem; background: rgba(241, 110, 46, 0.1); border-left: 4px solid var(--primary-color); border-radius: 0 12px 12px 0;">
                        <h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 0.5rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">💡</span> Lời khuyên
                        </h3>
                        <p style="font-size: 0.95rem; color: #EEE; font-style: italic;">${level.advice}</p>
                    </div>

                    <div class="result-section" style="padding: 1.2rem; background: rgba(255, 255, 255, 0.05); border: 1px dashed rgba(255,255,255,0.2); border-radius: 12px;">
                        <h3 style="font-size: 1rem; color: #FFF; margin-bottom: 0.8rem; display: flex; align-items: center;">
                            <span style="margin-right: 8px;">🚀</span> Kế hoạch hành động
                        </h3>
                        <p style="font-size: 0.95rem; color: #FFF; line-height: 1.6;">${level.actionPlan}</p>
                    </div>
                </div>

                <hr style="margin: 2.5rem 0; opacity: 0.1;">
                <p class="description">Dữ liệu của bạn đã được lưu trữ an toàn.</p>
                <button class="btn btn-primary" onclick="location.reload()">Làm lại khảo sát</button>
            </div>
        </div>
    `;
}

async function submitToSheets() {
    const score = calculateScore();
    const level = CONFIG.LEVELS.find(l => score >= l.min && score <= l.max)?.name || 'N/A';
    
    const data = {
        timestamp: new Date().toISOString(),
        name: state.user.name,
        email: state.user.email,
        position: state.user.position || 'N/A',
        score: score,
        level: level
    };

    QUESTIONS.forEach(q => {
        const ans = state.answers[q.id];
        let displayAns = '';
        if (q.type === 'single') {
            displayAns = q.options[ans]?.text || '';
        } else if (q.type === 'multiple') {
            displayAns = (ans || []).map(idx => q.options[idx].text).join(', ');
        } else if (q.type === 'scale') {
            displayAns = ans || '';
        }
        data[`Q${q.id}`] = displayAns;
    });

    try {
        await fetch(CONFIG.SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log('Submitted successfully');
    } catch (e) {
        console.error('Error submitting:', e);
    }
}

// Ensure the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    dom.main = document.getElementById('main-content');
    dom.progressBar = document.getElementById('progress-bar');
    dom.progressWrapper = document.getElementById('progress-bar-wrapper');

    // Run the initial render
    if (dom.main) {
        render();
    } else {
        console.error("Critical Error: Main content container not found.");
    }
});