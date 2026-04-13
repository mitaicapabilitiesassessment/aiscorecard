const CONFIG = {
    // Replace with your Google Apps Script Web App URL
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw7AtjsHjgHyX91GdvJMcpnQJ2_yXiDj-LXz8UTit8BQ2yD04ZnqgmUYanMiZo6vS_c/exec',
    LEVELS: [
        { min: 0, max: 10, name: 'AI Beginner', desc: 'Chưa sử dụng AI' },
        { min: 11, max: 20, name: 'AI Explorer', desc: 'Bắt đầu sử dụng' },
        { min: 21, max: 35, name: 'AI Practitioner', desc: 'Sử dụng thường xuyên' },
        { min: 36, max: 50, name: 'AI Advanced', desc: 'Sử dụng nâng cao' },
        { min: 51, max: 60, name: 'Leading AI', desc: 'Dẫn dắt AI' }
    ]
};

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
        text: "Bạn sử dụng AI bao lâu?",
        type: "single",
        options: [
            { text: "Chưa từng", points: 0 },
            { text: "< 3 tháng", points: 1 },
            { text: "3–6 tháng", points: 2 },
            { text: "6–12 tháng", points: 3 },
            { text: "> 1 năm", points: 5 }
        ]
    },
    {
        id: 4,
        group: "Nhóm 2 — Mức độ thành thạo AI",
        text: "Bạn đánh giá mức độ thành thạo AI (Thang 1–5)?",
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
            { text: "Tự động hóa", points: 3 },
            { text: "Viết prompt nâng cao", points: 3 },
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
            { text: "0–20%", points: 1 },
            { text: "20–40%", points: 2 },
            { text: "40–60%", points: 3 },
            { text: "60–80%", points: 4 },
            { text: "80–100%", points: 5 }
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
            { text: "1–2h/ngày", points: 3 },
            { text: "2–3h/ngày", points: 4 },
            { text: "> 3h/ngày", points: 5 }
        ]
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
        text: "Bạn có đề xuất ứng dụng AI?",
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
            { text: "Copilot", points: 1 },
            { text: "Claude", points: 1 },
            { text: "Gemini", points: 1 },
            { text: "Notion AI", points: 1 },
            { text: "Perplexity", points: 1 },
            { text: "Zapier AI", points: 1 },
            { text: "Make AI", points: 1 }
        ]
    },
    {
        id: 12,
        group: "Nhóm 5 — AI nâng cao",
        text: "Bạn đã làm gì với AI? (Mỗi cái 2 điểm)",
        type: "multiple",
        options: [
            { text: "Automation", points: 2 },
            { text: "Chatbot nội bộ", points: 2 },
            { text: "AI workflow", points: 2 },
            { text: "AI dashboard", points: 2 },
            { text: "AI training", points: 2 }
        ]
    }
];

let state = {
    step: 'intro', // intro, info, question, result
    currentQuestionIndex: 0,
    user: {
        name: '',
        email: '',
        position: ''
    },
    answers: {} // { questionId: value }
};

const dom = {
    main: document.getElementById('main-content'),
    progressBar: document.getElementById('progress-bar'),
    progressWrapper: document.getElementById('progress-bar-wrapper')
};

function setState(newState) {
    state = { ...state, ...newState };
    render();
}

function render() {
    if (state.step === 'intro') {
        renderIntro();
    } else if (state.step === 'info') {
        renderInfoForm();
    } else if (state.step === 'question') {
        renderQuestion();
    } else if (state.step === 'result') {
        renderResult();
    }
}

function renderIntro() {
    dom.progressWrapper.style.display = 'none';
    dom.main.innerHTML = `
        <div class="screen intro-screen text-center">
            <div class="card">
                <h1>AI Capability Scorecard</h1>
                <p class="description">Đo lường năng lực sử dụng AI của bạn để tối ưu hiệu quả công việc và định hướng tương lai.</p>
                <div class="benefits" style="text-align: left; margin-bottom: 2rem;">
                    <p style="margin-bottom: 0.5rem;">✅ Đánh giá mức độ thành thạo AI</p>
                    <p style="margin-bottom: 0.5rem;">✅ Xác định các kỹ năng cần cải thiện</p>
                    <p>✅ Nhận lộ trình phát triển phù hợp</p>
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

    if (!name || !email || !position) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    setState({
        step: 'question',
        user: { name, email, position }
    });
}

function renderQuestion() {
    const q = QUESTIONS[state.currentQuestionIndex];
    const progress = ((state.currentQuestionIndex) / QUESTIONS.length) * 100;
    
    dom.progressWrapper.style.display = 'block';
    dom.progressBar.style.width = `${progress}%`;

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
                    <button class="btn btn-primary" onclick="nextQuestion()" ${currentAnswer === undefined ? 'disabled' : ''}>${state.currentQuestionIndex === QUESTIONS.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}</button>
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
    
    // Fallback for scores higher than 60
    if (!level && score > 60) {
        level = CONFIG.LEVELS[CONFIG.LEVELS.length - 1];
    }
    if (!level) level = CONFIG.LEVELS[0];
    
    dom.progressBar.style.width = `100%`;
    dom.main.innerHTML = `
        <div class="screen result-screen text-center">
            <div class="card">
                <h2>Kết quả của bạn</h2>
                <p class="description">Chúc mừng bạn đã hoàn thành khảo sát!</p>
                <div class="score-circle">
                    <span class="score-value">${score}</span>
                    <span style="font-size: 0.8rem; font-weight: 500;">/ 60 ĐIỂM</span>
                </div>
                <div class="level-badge">${level.name}</div>
                <p style="margin-top: 1.5rem; font-size: 1.1rem;">${level.desc}</p>
                <hr style="margin: 2rem 0; opacity: 0.1;">
                <p class="description">Dữ liệu của bạn đã được lưu trữ an toàn. Chúng tôi sẽ liên hệ sớm nếu có lộ trình đào tạo phù hợp.</p>
                <button class="btn btn-primary" onclick="location.reload()">Làm lại khảo sát</button>
            </div>
        </div>
    `;
}

async function submitToSheets() {
    const score = calculateScore();
    const level = CONFIG.LEVELS.find(l => score >= l.min && score <= l.max)?.name || '';
    
    const data = {
        timestamp: new Date().toISOString(),
        name: state.user.name,
        email: state.user.email,
        position: state.user.position,
        score: score,
        level: level,
        answers: JSON.stringify(state.answers)
    };

    if (CONFIG.SCRIPT_URL === 'https://script.google.com/macros/library/d/1mmy8_IgdJd2s1I9PzXP1385ZlWV6_xvkHOiHnCKliCA2hYDGKytV5-xL/1') {
        console.log('Sheet URL not set, data:', data);
        return;
    }

    try {
        await fetch(CONFIG.SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // standard for Apps Script web apps
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log('Submitted successfully');
    } catch (e) {
        console.error('Error submitting:', e);
    }
}

// Initial render
render();
