/**
 * Seguiwats Frontend Hub - Core Interactions
 * Theme Management, Mobile Navigation & Live Pipeline Simulator
 */

// 1. Theme Management (Default Dark, Persisted in localStorage)
const initTheme = () => {
  const savedTheme = localStorage.getItem('seguiwats-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : true; // Default dark

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  updateThemeIcons(isDark);
};

const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('seguiwats-theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
};

const updateThemeIcons = (isDark) => {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach((btn) => {
    const sunIcon = btn.querySelector('.sun-icon');
    const moonIcon = btn.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }
  });
};

// 2. Mobile Navigation Toggle
const initMobileNav = () => {
  const navBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navBtn && mobileMenu) {
    navBtn.addEventListener('click', () => {
      const isExpanded = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        navBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
};

// 3. Interactive Live Demo Simulator
const initDemoSimulator = () => {
  const playAudioBtn = document.getElementById('demo-btn-audio');
  const sendTextBtn = document.getElementById('demo-btn-text');
  const resetBtn = document.getElementById('demo-btn-reset');
  const chatMessages = document.getElementById('demo-chat-messages');
  const calendarEvent = document.getElementById('demo-calendar-event');
  const pipelineSteps = document.querySelectorAll('.pipeline-step');
  const emptyCalendarNotice = document.getElementById('demo-calendar-empty');

  if (!playAudioBtn || !chatMessages) return;

  let isSimulating = false;

  const setPipelineStep = (stepIndex) => {
    pipelineSteps.forEach((step, idx) => {
      if (idx <= stepIndex) {
        step.classList.add('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');
        step.classList.remove('border-white/10', 'text-slate-400');
        const badge = step.querySelector('.step-badge');
        if (badge) badge.classList.add('bg-emerald-500', 'text-slate-950');
      } else {
        step.classList.remove('border-emerald-500', 'text-emerald-400', 'bg-emerald-500/10');
        step.classList.add('border-white/10', 'text-slate-400');
        const badge = step.querySelector('.step-badge');
        if (badge) badge.classList.remove('bg-emerald-500', 'text-slate-950');
      }
    });
  };

  const resetDemo = () => {
    isSimulating = false;
    chatMessages.innerHTML = `
      <div class="text-center py-4 text-xs text-slate-500 dark:text-slate-400">
        Haz clic en <strong class="text-emerald-500">"Simular Nota de Voz"</strong> para ver el flujo en tiempo real.
      </div>
    `;
    if (calendarEvent) calendarEvent.classList.add('hidden');
    if (emptyCalendarNotice) emptyCalendarNotice.classList.remove('hidden');
    setPipelineStep(-1);
  };

  const runSimulation = (mode = 'audio') => {
    if (isSimulating) return;
    isSimulating = true;

    // Clear initial state
    chatMessages.innerHTML = '';
    if (calendarEvent) calendarEvent.classList.add('hidden');
    if (emptyCalendarNotice) emptyCalendarNotice.classList.remove('hidden');
    setPipelineStep(0); // WhatsApp Webhook Inbound

    // Step 1: User message (Outgoing from sales rep)
    const userMsgHtml = mode === 'audio' ? `
      <div class="flex items-end justify-end space-x-2 animate-fade-in mb-3">
        <div class="bubble-whatsapp-out p-3 max-w-[85%] sm:max-w-[75%] shadow-sm">
          <div class="flex items-center space-x-3">
            <button type="button" class="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition">
              <svg class="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <div class="flex-1">
              <div class="flex items-center space-x-1 h-4">
                <span class="w-1 h-3 bg-emerald-700 dark:bg-emerald-300 rounded-full animate-pulse"></span>
                <span class="w-1 h-4 bg-emerald-700 dark:bg-emerald-300 rounded-full animate-pulse delay-75"></span>
                <span class="w-1 h-2 bg-emerald-700 dark:bg-emerald-300 rounded-full animate-pulse"></span>
                <span class="w-1 h-5 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
                <span class="w-1 h-3 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
                <span class="w-1 h-6 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
                <span class="w-1 h-2 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
                <span class="w-1 h-4 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
                <span class="w-1 h-2 bg-emerald-700 dark:bg-emerald-300 rounded-full"></span>
              </div>
              <div class="flex justify-between text-[11px] text-slate-700 dark:text-emerald-200 mt-1">
                <span>0:07</span>
                <span>🎙️ Nota de voz</span>
              </div>
            </div>
          </div>
          <div class="text-[11px] text-right text-slate-500 dark:text-emerald-300/80 mt-1">10:14 AM ✓✓</div>
        </div>
      </div>
    ` : `
      <div class="flex items-end justify-end space-x-2 animate-fade-in mb-3">
        <div class="bubble-whatsapp-out p-3 max-w-[85%] shadow-sm text-sm">
          <p>Agendame seguimiento con Carlos Gómez al +5491122334455 para el próximo jueves a las 10:00 hs por el presupuesto de Docker.</p>
          <div class="text-[11px] text-right text-slate-500 dark:text-emerald-300/80 mt-1">10:14 AM ✓✓</div>
        </div>
      </div>
    `;

    chatMessages.insertAdjacentHTML('beforeend', userMsgHtml);

    // Step 2: Processing loader
    setTimeout(() => {
      setPipelineStep(1); // Whisper / n8n
      const processingId = 'demo-processing-indicator';
      chatMessages.insertAdjacentHTML('beforeend', `
        <div id="${processingId}" class="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 py-2 italic animate-pulse">
          <svg class="animate-spin h-3.5 w-3.5 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>${mode === 'audio' ? 'Whisper transcribiendo audio...' : 'Analizando mensaje...'}</span>
        </div>
      `);

      setTimeout(() => {
        setPipelineStep(2); // LLM Entity Extraction
        const procElem = document.getElementById(processingId);
        if (procElem) {
          procElem.innerHTML = `
            <svg class="animate-spin h-3.5 w-3.5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            <span>Extrayendo fecha, cliente y teléfono con GPT-4o-mini...</span>
          `;
        }

        setTimeout(() => {
          setPipelineStep(3); // Google Calendar API Insertion
          const proc = document.getElementById(processingId);
          if (proc) proc.remove();

          // Bot response
          const botResponseHtml = `
            <div class="flex items-start space-x-2 animate-fade-in mb-3">
              <div class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold shrink-0">
                SW
              </div>
              <div class="bubble-whatsapp-in p-3.5 max-w-[90%] shadow-sm text-xs sm:text-sm space-y-1.5">
                <div class="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>Seguimiento agendado en Google Calendar</span>
                </div>
                <div class="bg-slate-100 dark:bg-slate-800/80 rounded p-2 text-xs space-y-1 font-mono">
                  <p><strong class="text-slate-700 dark:text-slate-300">Contacto:</strong> Carlos Gómez</p>
                  <p><strong class="text-slate-700 dark:text-slate-300">Tel:</strong> +54 9 11 2233-4455</p>
                  <p><strong class="text-slate-700 dark:text-slate-300">Fecha:</strong> Jueves 10:00 - 10:30 hs</p>
                  <p><strong class="text-slate-700 dark:text-slate-300">Nota:</strong> Presupuesto de Docker</p>
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">
                  🔔 Te enviaré el recordatorio con botón directo a WhatsApp el jueves a las 9:00 AM.
                </p>
                <div class="text-[10px] text-right text-slate-400">10:14 AM</div>
              </div>
            </div>
          `;
          chatMessages.insertAdjacentHTML('beforeend', botResponseHtml);

          // Update Calendar View
          if (emptyCalendarNotice) emptyCalendarNotice.classList.add('hidden');
          if (calendarEvent) {
            calendarEvent.classList.remove('hidden');
            calendarEvent.classList.add('animate-fade-in');
          }

          isSimulating = false;
        }, 850);
      }, 950);
    }, 800);
  };

  playAudioBtn.addEventListener('click', () => runSimulation('audio'));
  if (sendTextBtn) sendTextBtn.addEventListener('click', () => runSimulation('text'));
  if (resetBtn) resetBtn.addEventListener('click', resetDemo);
};

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initDemoSimulator();

  // Attach theme toggle buttons
  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });
});
