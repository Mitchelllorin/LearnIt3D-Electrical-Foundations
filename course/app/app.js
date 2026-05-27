/* LearnIt3D — Electrical Foundations App Engine */
(function () {
  'use strict';

  // ─── State ─────────────────────────────────────────────────────────────────
  const STORAGE_KEY = 'learnit3d_progress';
  let state = loadState();
  let currentView = 'dashboard';   // dashboard | module | quiz | midterm | final | certificate
  let currentId = null;            // module id (1-12) or 'midterm'/'final'
  let quizSession = null;          // active quiz/exam session data

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      moduleDone: {},   // {1: true, ...}
      quizScores: {},   // {1: {score, total, pct}, ...}
      midterm: null,    // {score, total, pct}
      final: null       // {score, total, pct}
    };
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ─── Routing helpers ───────────────────────────────────────────────────────
  function navigate(view, id) {
    currentView = view;
    currentId = id || null;
    quizSession = null;
    render();
    window.scrollTo(0, 0);
  }

  // ─── Markdown-like mini-renderer ──────────────────────────────────────────
  function renderMD(text) {
    if (!text) return '';
    let html = text
      // Headers
      .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      // Bold/italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Unordered list items
      .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
      // Numbered list items
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      // Horizontal rule
      .replace(/^---$/gm, '<hr>')
      // Code blocks
      .replace(/```[\s\S]*?```/g, m => '<pre><code>' + m.replace(/```\w*/g,'').replace(/```/g,'').trim() + '</code></pre>');
    
    // Wrap consecutive <li> in <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>(\n|$))+/g, m => '<ul>' + m + '</ul>');
    
    // Paragraphs: lines not starting with HTML tags
    html = html.split('\n').map(line => {
      if (line.match(/^<[hul\/]|^$/)) return line;
      return '<p>' + line + '</p>';
    }).join('\n');

    return html;
  }

  // ─── Dashboard ─────────────────────────────────────────────────────────────
  function renderDashboard() {
    const modules = window.MODULES || [];
    const quizzes = window.QUIZZES || [];

    let cards = modules.map(m => {
      const done = state.moduleDone[m.id];
      const qs = state.quizScores[m.id];
      const pct = qs ? Math.round(qs.pct) : null;
      const statusClass = done ? 'card-done' : 'card-todo';
      const badge = done ? `<span class="badge badge-done">✓ Complete</span>` : '';
      const quizBadge = pct !== null
        ? `<span class="badge ${pct >= 70 ? 'badge-pass' : 'badge-fail'}">Quiz ${pct}%</span>`
        : '';
      return `
        <div class="module-card ${statusClass}" onclick="app.goto('module', ${m.id})">
          <div class="card-number">${String(m.id).padStart(2,'0')}</div>
          <div class="card-info">
            <div class="card-title">${m.title}</div>
            <div class="card-badges">${badge}${quizBadge}</div>
          </div>
        </div>`;
    }).join('');

    const midBadge = state.midterm
      ? `<span class="badge ${state.midterm.pct >= 70 ? 'badge-pass' : 'badge-fail'}">${Math.round(state.midterm.pct)}%</span>`
      : '';
    const finBadge = state.final
      ? `<span class="badge ${state.final.pct >= 70 ? 'badge-pass' : 'badge-fail'}">${Math.round(state.final.pct)}%</span>`
      : '';

    const allDone = modules.every(m => state.moduleDone[m.id]);
    const certBtn = allDone && state.final && state.final.pct >= 70
      ? `<button class="btn btn-gold" onclick="app.goto('certificate')">🏆 View Certificate</button>`
      : '';

    return `
      <div class="dashboard">
        <div class="dash-header">
          <h1>LearnIt3D — Electrical Foundations</h1>
          <p class="tagline">STEM · SIMULATED · 3D — Apprentice Prep Course</p>
          ${certBtn}
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-label">Overall Progress: ${Object.values(state.moduleDone).filter(Boolean).length} / ${modules.length} modules complete</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(Object.values(state.moduleDone).filter(Boolean).length / modules.length * 100)}%"></div></div>
        </div>
        <h2 class="section-title">📚 Modules</h2>
        <div class="module-grid">${cards}</div>
        <h2 class="section-title">📝 Assessments</h2>
        <div class="exam-row">
          <div class="exam-card" onclick="app.goto('midterm')">
            <div class="exam-title">MIDTERM EXAM ${midBadge}</div>
            <div class="exam-sub">Modules 1–6 · 25 Questions</div>
          </div>
          <div class="exam-card" onclick="app.goto('final')">
            <div class="exam-title">FINAL EXAM ${finBadge}</div>
            <div class="exam-sub">Modules 7–12 · 40 Questions</div>
          </div>
        </div>
        <div class="reset-row">
          <button class="btn btn-sm btn-danger" onclick="app.resetProgress()">↺ Reset All Progress</button>
        </div>
      </div>`;
  }

  // ─── Module lesson view ────────────────────────────────────────────────────
  function renderModule(id) {
    const m = (window.MODULES || []).find(x => x.id === id);
    if (!m) return '<p>Module not found.</p>';
    const q = (window.QUIZZES || []).find(x => x.id === id);
    const done = state.moduleDone[id];

    return `
      <div class="module-view">
        <div class="module-nav-bar">
          <button class="btn btn-sm" onclick="app.goto('dashboard')">← Dashboard</button>
          <span class="module-nav-title">Module ${id} — ${m.title}</span>
          ${done ? '<span class="badge badge-done">✓ Complete</span>' : ''}
        </div>
        <div class="tab-bar" id="module-tabs">
          <button class="tab active" data-tab="lesson" onclick="app.switchTab(this,'lesson')">📖 Lesson</button>
          <button class="tab" data-tab="practice" onclick="app.switchTab(this,'practice')">🔧 Practice</button>
          ${q ? `<button class="tab" data-tab="quiz" onclick="app.switchTab(this,'quiz')">✅ Module Quiz</button>` : ''}
        </div>

        <div id="tab-lesson" class="tab-content active">
          <div class="lesson-body">
            <h2>Module ${id}: ${m.title}</h2>
            <div class="objectives-box">
              <h3>🎯 Learning Objectives</h3>
              <ul>${m.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
            </div>
            <div class="lesson-text">${renderMD(m.lesson)}</div>
            ${m.examples ? `<div class="examples-box"><h3>🌍 Real-World Examples</h3>${renderMD(m.examples)}</div>` : ''}
            ${m.sceneFile ? `
            <div class="sim-inline">
              <h3>🧊 Interactive 3D Simulation</h3>
              <div class="sim-controls-note">
                <span>🖱 Drag to rotate &nbsp;·&nbsp; 🔍 Scroll to zoom &nbsp;·&nbsp; ⬜ Right-click to pan</span>
              </div>
              <div class="scene-frame-wrap">
                <iframe src="${m.sceneFile}" class="scene-frame" allowfullscreen loading="lazy"></iframe>
              </div>
            </div>` : ''}
            ${m.diagrams ? `<div class="diagram-box"><h3>📐 Diagrams</h3><pre>${m.diagrams.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre></div>` : ''}
            <div class="lesson-actions">
              <button class="btn btn-primary" onclick="app.markDone(${id})">
                ${done ? '✓ Marked Complete — Review Again' : '✔ Mark as Complete'}
              </button>
              ${q ? `<button class="btn btn-secondary" onclick="app.switchTabById('quiz')">Take Module Quiz →</button>` : ''}
            </div>
          </div>
        </div>

        <div id="tab-practice" class="tab-content">
          <div class="practice-body">
            <h3>🔧 Practice Problems</h3>
            <div class="practice-text">${renderMD(m.practice)}</div>
          </div>
        </div>

        ${q ? `
        <div id="tab-quiz" class="tab-content">
          <div id="quiz-container">${renderQuizUI(q, 'module')}</div>
        </div>` : ''}
      </div>`;
  }

  // ─── Quiz engine ──────────────────────────────────────────────────────────
  function renderQuizUI(quizData, mode) {
    // mode: 'module' | 'midterm' | 'final'
    const questions = quizData.questions || flattenExamQuestions(quizData);
    const session = {
      data: quizData,
      mode: mode,
      questions: questions,
      answers: new Array(questions.length).fill(null),
      submitted: false,
      score: 0
    };
    quizSession = session;

    return buildQuizHTML(session);
  }

  function flattenExamQuestions(examData) {
    let qs = [];
    (examData.sections || []).forEach(s => qs = qs.concat(s.questions));
    return qs;
  }

  function buildQuizHTML(session) {
    const { questions, submitted, mode } = session;
    let html = `<div class="quiz-wrap">
      <div class="quiz-header">
        <h2>${session.data.title}</h2>
        ${session.data.subtitle ? `<p>${session.data.subtitle}</p>` : ''}
        <p class="quiz-count">${questions.length} questions</p>
      </div>
      <form id="quiz-form" onsubmit="return false;">`;

    questions.forEach((q, i) => {
      html += buildQuestionHTML(q, i, session);
    });

    html += `</form>
      <div class="quiz-actions">
        ${!submitted
          ? `<button class="btn btn-primary btn-lg" onclick="app.submitQuiz()">📤 Submit All Answers</button>`
          : `<div class="score-card">
              <div class="score-num">${session.score} / ${questions.length}</div>
              <div class="score-pct">${Math.round(session.score / questions.length * 100)}%</div>
              <div class="score-label">${session.score / questions.length >= 0.7 ? '✅ PASS' : '❌ Needs Review'}</div>
             </div>
             <button class="btn btn-secondary" onclick="app.retakeQuiz()">↺ Retake</button>
             <button class="btn btn-sm" onclick="app.goto('dashboard')">← Dashboard</button>`
        }
      </div>
    </div>`;
    return html;
  }

  function buildQuestionHTML(q, i, session) {
    const { submitted } = session;
    const userAns = session.answers[i];
    const correct = submitted ? isCorrect(q, userAns) : null;
    const borderClass = submitted ? (correct ? 'q-correct' : 'q-wrong') : '';

    let inputHTML = '';
    if (q.type === 'mc') {
      inputHTML = (q.opts || []).map((opt, j) => {
        const letter = ['A','B','C','D'][j];
        const isUserPick = userAns === letter;
        const isAnswerKey = submitted && q.ans === letter;
        const cls = submitted ? (isAnswerKey ? 'opt-correct' : (isUserPick ? 'opt-wrong' : '')) : '';
        return `<label class="opt-label ${cls}">
          <input type="radio" name="q${i}" value="${letter}" ${isUserPick ? 'checked' : ''} ${submitted ? 'disabled' : ''} onchange="app.answerQ(${i}, this.value)">
          <span class="opt-letter">${letter}</span> ${opt}
        </label>`;
      }).join('');
    } else if (q.type === 'tf') {
      ['True','False'].forEach((opt, j) => {
        const val = opt === 'True';
        const isUserPick = userAns === val;
        const isAnswerKey = submitted && q.ans === val;
        const cls = submitted ? (isAnswerKey ? 'opt-correct' : (isUserPick ? 'opt-wrong' : '')) : '';
        inputHTML += `<label class="opt-label ${cls}">
          <input type="radio" name="q${i}" value="${opt}" ${isUserPick ? 'checked' : ''} ${submitted ? 'disabled' : ''} onchange="app.answerQ(${i}, this.value === 'True')">
          ${opt}
        </label>`;
      });
    } else if (q.type === 'fill') {
      inputHTML = `<input type="text" class="fill-input ${submitted ? (correct ? 'fill-correct' : 'fill-wrong') : ''}"
        id="fill-${i}" value="${userAns !== null ? userAns : ''}"
        ${submitted ? 'disabled' : ''}
        onchange="app.answerQ(${i}, this.value)"
        placeholder="Type your answer…">`;
    } else if (q.type === 'calc') {
      inputHTML = `<div class="calc-wrap">
        <input type="number" step="any" class="fill-input ${submitted ? (correct ? 'fill-correct' : 'fill-wrong') : ''}"
          id="calc-${i}" value="${userAns !== null ? userAns : ''}"
          ${submitted ? 'disabled' : ''}
          onchange="app.answerQ(${i}, parseFloat(this.value))"
          placeholder="Enter numerical answer…">
        ${q.work ? `<div class="calc-hint">Formula hint available after submit.</div>` : ''}
      </div>`;
    }

    const feedback = submitted && !correct
      ? `<div class="feedback-box feedback-wrong">
          <strong>Correct answer:</strong> ${formatAns(q)}<br>
          ${q.work ? `<strong>Working:</strong> ${q.work}<br>` : ''}
          ${q.exp ? `<strong>Explanation:</strong> ${q.exp}` : ''}
        </div>`
      : submitted
      ? `<div class="feedback-box feedback-right">✓ ${q.exp || 'Correct!'}</div>`
      : '';

    return `<div class="question-block ${borderClass}" id="qblock-${i}">
      <div class="q-number">Q${i + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-input">${inputHTML}</div>
      ${feedback}
    </div>`;
  }

  function formatAns(q) {
    if (q.type === 'tf') return q.ans ? 'True' : 'False';
    return String(q.ans);
  }

  function isCorrect(q, userAns) {
    if (userAns === null || userAns === undefined || userAns === '') return false;
    if (q.type === 'mc') return String(userAns).toUpperCase() === String(q.ans).toUpperCase();
    if (q.type === 'tf') return Boolean(userAns) === Boolean(q.ans);
    if (q.type === 'fill') {
      const u = String(userAns).trim().toLowerCase();
      const a = String(q.ans).trim().toLowerCase();
      return u === a || u.includes(a) || a.includes(u);
    }
    if (q.type === 'calc') {
      const u = parseFloat(userAns);
      const a = parseFloat(q.ans);
      const tol = q.tol !== undefined ? q.tol : Math.abs(a) * 0.05;
      return !isNaN(u) && Math.abs(u - a) <= tol;
    }
    return false;
  }

  // ─── Exam view ────────────────────────────────────────────────────────────
  function renderExamView(examKey) {
    const examData = (window.EXAMS || {})[examKey];
    if (!examData) return '<p>Exam not found.</p>';
    const prevResult = state[examKey];

    return `
      <div class="module-view">
        <div class="module-nav-bar">
          <button class="btn btn-sm" onclick="app.goto('dashboard')">← Dashboard</button>
          <span class="module-nav-title">${examData.title}</span>
          ${prevResult ? `<span class="badge ${prevResult.pct >= 70 ? 'badge-pass' : 'badge-fail'}">${Math.round(prevResult.pct)}%</span>` : ''}
        </div>
        <div id="quiz-container">${renderQuizUI(examData, examKey)}</div>
      </div>`;
  }

  // ─── Certificate ──────────────────────────────────────────────────────────
  function renderCertificate() {
    const d = new Date().toLocaleDateString('en-CA', {year:'numeric',month:'long',day:'numeric'});
    const finalPct = state.final ? Math.round(state.final.pct) : '—';
    return `
      <div class="certificate-view">
        <div class="cert-box">
          <div class="cert-logo">⚡ LearnIt3D</div>
          <div class="cert-title">Certificate of Completion</div>
          <div class="cert-subtitle">Electrical Foundations — Apprentice Prep</div>
          <div class="cert-body">
            <p>This certifies successful completion of all 12 modules,<br>
            the Midterm Exam, and the Final Exam.</p>
            <p class="cert-date">Completed: ${d}</p>
            <p class="cert-score">Final Exam Score: ${finalPct}%</p>
          </div>
          <div class="cert-seal">🏆</div>
          <button class="btn btn-gold" onclick="window.print()">🖨 Print / Save PDF</button>
          <button class="btn btn-sm" onclick="app.goto('dashboard')" style="margin-top:1rem;">← Dashboard</button>
        </div>
      </div>`;
  }

  // ─── Render router ─────────────────────────────────────────────────────────
  function render() {
    const main = document.getElementById('main-content');
    if (!main) return;

    switch (currentView) {
      case 'dashboard':   main.innerHTML = renderDashboard(); break;
      case 'module':      main.innerHTML = renderModule(currentId); break;
      case 'midterm':     main.innerHTML = renderExamView('midterm'); break;
      case 'final':       main.innerHTML = renderExamView('final'); break;
      case 'certificate': main.innerHTML = renderCertificate(); break;
      default:            main.innerHTML = renderDashboard();
    }

    updateSidebar();
  }

  function updateSidebar() {
    const links = document.querySelectorAll('.sidebar-link');
    links.forEach(a => {
      a.classList.remove('active');
      const view = a.dataset.view;
      const id = a.dataset.id ? parseInt(a.dataset.id) : null;
      if (view === currentView && (!id || id === currentId)) a.classList.add('active');
    });
  }

  // ─── Public API (called from HTML) ─────────────────────────────────────────
  window.app = {
    goto(view, id) {
      if (view === 'module' && id) navigate('module', id);
      else if (view === 'midterm') navigate('midterm');
      else if (view === 'final') navigate('final');
      else if (view === 'certificate') navigate('certificate');
      else navigate('dashboard');
    },

    switchTab(btn, tabId) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      const tc = document.getElementById('tab-' + tabId);
      if (tc) tc.classList.add('active');
    },

    switchTabById(tabId) {
      const btn = document.querySelector(`.tab[data-tab="${tabId}"]`);
      if (btn) this.switchTab(btn, tabId);
    },

    markDone(id) {
      state.moduleDone[id] = true;
      saveState();
      const badge = document.querySelector('.module-nav-title + .badge');
      const btn = document.querySelector('.lesson-actions .btn-primary');
      if (btn) btn.textContent = '✓ Marked Complete — Review Again';
    },

    answerQ(i, val) {
      if (quizSession) {
        quizSession.answers[i] = val;
      }
    },

    submitQuiz() {
      if (!quizSession) return;
      const { questions, answers, mode } = quizSession;

      // Collect any fill/calc that wasn't captured by onchange
      questions.forEach((q, i) => {
        if (q.type === 'fill') {
          const el = document.getElementById('fill-' + i);
          if (el) quizSession.answers[i] = el.value;
        } else if (q.type === 'calc') {
          const el = document.getElementById('calc-' + i);
          if (el) quizSession.answers[i] = parseFloat(el.value);
        }
      });

      let score = 0;
      questions.forEach((q, i) => {
        if (isCorrect(q, quizSession.answers[i])) score++;
      });

      quizSession.score = score;
      quizSession.submitted = true;

      const pct = (score / questions.length) * 100;
      const result = { score, total: questions.length, pct };

      if (mode === 'module') {
        const moduleId = quizSession.data.id;
        state.quizScores[moduleId] = result;
        if (pct >= 70) state.moduleDone[moduleId] = true;
      } else if (mode === 'midterm') {
        state.midterm = result;
      } else if (mode === 'final') {
        state.final = result;
      }
      saveState();

      const container = document.getElementById('quiz-container');
      if (container) container.innerHTML = buildQuizHTML(quizSession);
    },

    retakeQuiz() {
      if (!quizSession) return;
      const { data, mode } = quizSession;
      const container = document.getElementById('quiz-container');
      if (container) container.innerHTML = renderQuizUI(data, mode);
    },

    resetProgress() {
      if (!confirm('Reset all progress? This cannot be undone.')) return;
      state = { moduleDone: {}, quizScores: {}, midterm: null, final: null };
      saveState();
      navigate('dashboard');
    }
  };

  // ─── Sidebar toggle (mobile) ──────────────────────────────────────────────
  window.toggleSidebar = function () {
    document.getElementById('sidebar').classList.toggle('open');
  };

  // ─── Boot ─────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    render();
  });

  function buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;
    const modules = window.MODULES || [];
    let html = `
      <a class="sidebar-link" data-view="dashboard" onclick="app.goto('dashboard')">🏠 Dashboard</a>
      <div class="sidebar-section">MODULES</div>
      ${modules.map(m => `
        <a class="sidebar-link" data-view="module" data-id="${m.id}" onclick="app.goto('module', ${m.id})">
          <span class="sidebar-num">${String(m.id).padStart(2,'0')}</span> ${m.title}
          ${state.moduleDone[m.id] ? '<span class="sidebar-done">✓</span>' : ''}
        </a>`).join('')}
      <div class="sidebar-section">ASSESSMENTS</div>
      <a class="sidebar-link" data-view="midterm" onclick="app.goto('midterm')">📝 Midterm Exam</a>
      <a class="sidebar-link" data-view="final" onclick="app.goto('final')">📋 Final Exam</a>`;
    nav.innerHTML = html;
    updateSidebar();
  }
})();
