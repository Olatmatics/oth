import $ from 'jquery';
import * as THREE from 'three';

/* ==========================================================================
   THEME SYSTEM
   ========================================================================== */
function initTheme() {
  const saved = localStorage.getItem('oth-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('oth-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark'
      ? '☀️ <span>Light</span>'
      : '🌙 <span>Dark</span>';
  }
}

window.toggleTheme = toggleTheme;

/* ==========================================================================
   PRELOADER (3 seconds)
   ========================================================================== */
$(window).on('load', () => {
  setTimeout(() => {
    $('.preloader').addClass('fade-out');
    initScrollAnimations();
  }, 3000);
});

$(document).ready(() => {
  setTimeout(() => {
    if (!$('.preloader').hasClass('fade-out')) {
      $('.preloader').addClass('fade-out');
      initScrollAnimations();
    }
  }, 4000);
});

/* ==========================================================================
   HERO SLIDER — 10 Nigerian-context engineering images (5s interval)
   ========================================================================== */
const sliderImages = [
  // Solar panel field installation
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
  // Industrial control panel / switchgear
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
  // Fuel station / forecourt ATG
  'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1600&auto=format&fit=crop',
  // Engineer inspecting industrial machine
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop',
  // Solar inverter / battery storage
  'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop',
  // Electrical wiring / power distribution
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop',
  // Industrial automation / PLC systems
  'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1600&auto=format&fit=crop',
  // Smart building / BMS control room
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
  // CCTV security cameras
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop',
  // Engineer working on IoT / instrumentation
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
];

function initHeroSlider() {
  const $slider = $('#hero-slider');
  sliderImages.forEach((imgUrl, idx) => {
    const $slide = $('<div></div>')
      .addClass('slide')
      .css('background-image', `url('${imgUrl}')`);
    if (idx === 0) $slide.addClass('active');
    $slider.append($slide);
  });

  let currentSlide = 0;
  setInterval(() => {
    const $slides = $('.slide');
    $slides.eq(currentSlide).removeClass('active');
    currentSlide = (currentSlide + 1) % sliderImages.length;
    $slides.eq(currentSlide).addClass('active');
  }, 5000); // 5 seconds
}

/* ==========================================================================
   THREE.JS CONSTELLATION BACKGROUND
   ========================================================================== */
function initThreeJS() {
  const container = document.getElementById('webgl-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const particleCount = 120;
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  const boundary = { x: 35, y: 25, z: 20 };

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * boundary.x * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * boundary.y * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * boundary.z * 2;
    velocities.push({
      x: (Math.random() - 0.5) * 0.05,
      y: (Math.random() - 0.5) * 0.05,
      z: (Math.random() - 0.5) * 0.03,
    });
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMaterial = new THREE.PointsMaterial({ color: 0xf5a623, size: 0.45, transparent: true, opacity: 0.85, sizeAttenuation: true });
  const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x1dbe8a, transparent: true, opacity: 0.15 });
  let lineSegments;
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / 100;
    mouseY = (e.clientY - window.innerHeight / 2) / 100;
  });

  const animate = () => {
    requestAnimationFrame(animate);
    const pos = particleSystem.geometry.attributes.position.array;
    const linePositions = [];

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      if (Math.abs(pos[i * 3]) > boundary.x) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > boundary.y) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > boundary.z) velocities[i].z *= -1;

      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 8) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    particleSystem.geometry.attributes.position.needsUpdate = true;
    if (lineSegments) scene.remove(lineSegments);
    if (linePositions.length > 0) {
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);
    }

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    camera.position.x = targetX;
    camera.position.y = -targetY;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

/* ==========================================================================
   SCROLL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('animated');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  $('.scroll-animate').each(function () { observer.observe(this); });
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 60) {
      $('#main-nav').css('box-shadow', '0 2px 20px rgba(0,0,0,0.06)');
    } else {
      $('#main-nav').css('box-shadow', 'none');
    }
  });

  $('#hamburger').on('click', () => {
    const $menu = $('#mobile-menu');
    $menu.css('display', $menu.css('display') === 'flex' ? 'none' : 'flex');
  });

  $('#mobile-menu a').on('click', () => {
    $('#mobile-menu').css('display', 'none');
  });

  window.scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   PORTFOLIO FILTERS
   ========================================================================== */
function initPortfolioFilters() {
  $('.proj-filter').on('click', function () {
    $('.proj-filter').removeClass('active');
    $(this).addClass('active');
    const cat = $(this).data('cat');
    $('.proj-card').each(function () {
      $(this)[cat === 'all' || $(this).data('cat') === cat ? 'fadeIn' : 'fadeOut'](250);
    });
  });
}

/* ==========================================================================
   CHATBOT
   ========================================================================== */
const chatResponses = {
  'services': 'We offer 8 engineering divisions: ⚡ Power & Solar, 📷 CCTV & Security, ⚙️ Automation & PLC, 🔧 Control Panels, 🏗️ Elevators, ⛽ Fuel Station Automation, 🏢 Building Management (BMS), and 📐 Engineering Consultancy. Which area interests you?',
  'solar': 'Our solar team designs hybrid solar & inverter systems from 5 kW to 1 MW+. We serve Abuja, Lagos and all major cities. We handle site survey, installation, and maintenance contracts. Ready for a quote?',
  'emergency': 'For emergencies call 📞 08039790207 or 08074591971. Our engineers are on standby 24/7. You can also use the emergency dispatch button above to connect directly with a specialist.',
  'contact': 'Head Office: Federal Housing Lugbe, Abuja, Nigeria\n📞 08039790207 | 08074591971\n📧 olatmatics.tech@gmail.com\n💬 WhatsApp: https://wa.link/uxd689',
  'quote': 'We\'d love to work with you! Scroll to the "Request a Quote" section above and fill in your project details. Our minimum engagement is ₦200,000. We respond within 24 hours.',
  'elevator': 'Our elevator division handles installation, modernisation, preventive maintenance and emergency repairs for passenger and goods lifts across Nigeria. Call 08039790207 for an assessment.',
  'cctv': 'Our security team installs IP CCTV, access control, biometric systems and electric fencing. We support Hikvision, Dahua and ZKTeco brands. Call us for a free site survey!',
  'fuel': 'We install and maintain fuel dispensers, ATG underground tank monitoring, forecourt automation and fuel management systems. DPR certified. Call us on 08039790207.',
  'automation': 'We program and commission PLC & SCADA systems using Siemens TIA Portal and Allen-Bradley platforms. Industrial IoT, remote monitoring, and process control are our specialties.',
  'bms': 'Our Building Management Systems integrate HVAC, lighting automation, fire alarm, and energy monitoring for commercial buildings across Nigeria.',
  'default': "👋 I'm here to help! Ask me about our solar, CCTV, automation, elevator, fuel station, or BMS services. You can also request a quote or get emergency support. How can I assist?"
};

function getChatResponse(msg) {
  const m = msg.toLowerCase();
  for (const key in chatResponses) {
    if (key !== 'default' && m.includes(key)) return chatResponses[key];
  }
  return chatResponses['default'];
}

function addChatMessage(text, role) {
  const $body = $('#chat-body');
  const $div = $('<div></div>').addClass('chat-msg ' + role).text(text);
  $body.append($div);
  $body.scrollTop($body[0].scrollHeight);
}

function addTypingIndicator() {
  const $body = $('#chat-body');
  const $typing = $('<div></div>').addClass('chat-msg bot').attr('id', 'typing-indicator').text('...');
  $body.append($typing);
  $body.scrollTop($body[0].scrollHeight);
}

function removeTypingIndicator() {
  $('#typing-indicator').remove();
}

function initChatbot() {
  window.toggleChat = () => $('#chat-window').toggleClass('open');

  window.sendChat = () => {
    const $inp = $('#chat-input');
    const msg = $inp.val().trim();
    if (!msg) return;
    addChatMessage(msg, 'user');
    $inp.val('');
    $('#chat-quick').hide();
    addTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addChatMessage(getChatResponse(msg), 'bot');
    }, 800);
  };

  window.chatReply = (text) => {
    addChatMessage(text, 'user');
    $('#chat-quick').hide();
    addTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addChatMessage(getChatResponse(text), 'bot');
    }, 800);
  };
}

/* ==========================================================================
   EMERGENCY DISPATCH MODAL
   ========================================================================== */
const engineers = [
  {
    name: 'Engr. Bilal',
    title: 'Automation & Instrumentation Engineer',
    desc: 'Highly skilled automation engineer with 9+ years of experience in industrial PLC programming, SCADA system design, and field instrumentation across oil & gas and manufacturing sectors in Nigeria.',
    tech: 'Siemens S7 | Allen-Bradley | SCADA | HMI | Industrial IoT | Process Control',
    phone: '08039790207',
    whatsapp: 'https://wa.link/uxd689',
    email: 'olatmatics.tech@gmail.com',
  },
  {
    name: 'Engr. Adewale',
    title: 'Senior Pump & Petroleum Systems Engineer',
    desc: 'Seasoned petroleum infrastructure specialist with 11+ years managing fuel dispenser installations, ATG tank monitoring systems, and forecourt automation for major fuel stations across Abuja and Lagos. DPR certified.',
    tech: 'ATG Systems | Fuel Dispensers | Forecourt Automation | Gilbarco | Wayne | DPR Compliance',
    phone: '08074591971',
    whatsapp: 'https://wa.link/uxd689',
    email: 'olatmatics.tech@gmail.com',
  },
  {
    name: 'Engr. Kehinde',
    title: 'Solar & Renewable Energy Expert',
    desc: 'Renewable energy engineer with 8+ years specialising in hybrid solar PV design, lithium battery storage, and inverter systems for residential, commercial and industrial clients. Certified PVsyst and off-grid system designer.',
    tech: 'PVsyst | Hybrid Solar | MPPT Controllers | Inverters | Battery Storage | Load Balancing',
    phone: '08039790207',
    whatsapp: 'https://wa.link/uxd689',
    email: 'olatmatics.tech@gmail.com',
  },
];

function renderEngineerCards() {
  const avatars = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format',
  ];

  return engineers.map((eng, i) => `
    <div class="engineer-card">
      <img class="engineer-avatar" src="${avatars[i]}" alt="${eng.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22><circle cx=%2232%22 cy=%2232%22 r=%2232%22 fill=%22%23f5a623%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22white%22>${eng.name.charAt(5)}</text></svg>'" />
      <div class="engineer-info">
        <div class="engineer-name">${eng.name}</div>
        <div class="engineer-title">${eng.title}</div>
        <div class="engineer-desc">${eng.desc}</div>
        <div class="engineer-tech">${eng.tech}</div>
        <div class="engineer-contacts">
          <a class="engineer-contact-btn phone" href="tel:${eng.phone}">📞 ${eng.phone}</a>
          <a class="engineer-contact-btn whatsapp" href="${eng.whatsapp}" target="_blank">💬 WhatsApp</a>
          <a class="engineer-contact-btn email" href="mailto:${eng.email}">✉️ Email</a>
        </div>
      </div>
    </div>
  `).join('');
}

function initEmergencyDispatch() {
  window.triggerEmergency = () => {
    const $overlay = $('#emergency-modal');
    $overlay.find('.engineer-cards').html(renderEngineerCards());
    $overlay.addClass('open');
    notifyEmail('🚨 Emergency call-out triggered on website. Response required immediately.');
  };

  window.closeEmergencyModal = () => {
    $('#emergency-modal').removeClass('open');
  };

  $('#emergency-modal').on('click', function (e) {
    if (e.target === this) closeEmergencyModal();
  });
}

/* ==========================================================================
   CLIENT PORTAL LOGIN / DASHBOARD
   ========================================================================== */
const demoClients = {
  'client@olatmatics.com': { password: 'client123', name: 'Engr. Demo Client', company: 'Demo Industries' },
  'admin@olatmatics.com': { password: 'admin123', name: 'Admin User', company: 'OTH Internal' },
};

let currentUser = null;

function renderPortalLogin() {
  return `
    <div class="portal-login-box scroll-animate fade-in animated">
      <div class="portal-login-logo">
        <img src="./src/logo.png" alt="OTH Logo" style="height:40px;width:auto;">
        <div class="portal-login-logo-text">Client Portal</div>
      </div>
      <h3>Sign in to your dashboard</h3>
      <p>Enter your credentials provided after your project kickoff. Contact us to get access.</p>
      <div class="fg" style="text-align:left;">
        <label for="portal-email">Email Address</label>
        <input type="email" id="portal-email" placeholder="you@company.com">
      </div>
      <div class="fg" style="text-align:left;">
        <label for="portal-pass">Password</label>
        <input type="password" id="portal-pass" placeholder="••••••••">
      </div>
      <button class="submit-btn" onclick="portalLogin()" style="margin-top:0.5rem;">Sign In →</button>
      <p style="margin-top:1rem;font-size:12px;color:var(--muted);">Don't have an account? <a href="#contact" style="color:var(--accent);" onclick="closePortalIfOpen()">Contact us</a> to request access.</p>
      <p style="margin-top:0.5rem;font-size:11px;color:var(--muted);">Demo: client@olatmatics.com / client123</p>
    </div>
  `;
}

function renderPortalDashboard(user) {
  return `
    <div class="portal-layout scroll-animate fade-in animated">
      <div class="portal-sidebar">
        <div class="portal-logo">
          <img class="portal-logo-mark" src="./src/logo.png" alt="OTH Logo">
          <div><div class="portal-logo-text">Client Portal</div><div style="font-size:10px;color:var(--muted);">${user.company}</div></div>
        </div>
        <div class="p-nav-item active"><span class="p-nav-icon">📊</span> Dashboard</div>
        <div class="p-nav-item"><span class="p-nav-icon">📁</span> My Projects</div>
        <div class="p-nav-item"><span class="p-nav-icon">🔧</span> Service Requests</div>
        <div class="p-nav-item"><span class="p-nav-icon">🧾</span> Invoices</div>
        <div class="p-nav-item"><span class="p-nav-icon">📄</span> Documents</div>
        <div class="p-nav-item"><span class="p-nav-icon">💬</span> Messages</div>
        <div class="p-nav-item" onclick="portalLogout()" style="color:var(--red);margin-top:auto;"><span class="p-nav-icon">🚪</span> Logout</div>
      </div>
      <div class="portal-main">
        <div class="portal-topbar">
          <div class="portal-welcome">Welcome back, <strong>${user.name}</strong></div>
          <div class="portal-actions">
            <button class="p-btn" onclick="showToast('Service request form sent to olatmatics.tech@gmail.com!')">+ New Request</button>
            <button class="p-btn accent" onclick="triggerEmergency()">Emergency Call-Out</button>
          </div>
        </div>
        <div class="portal-cards">
          <div class="p-metric"><div class="p-metric-val">3</div><div class="p-metric-label">Active Projects</div></div>
          <div class="p-metric"><div class="p-metric-val">7</div><div class="p-metric-label">Open Tickets</div></div>
          <div class="p-metric"><div class="p-metric-val">2</div><div class="p-metric-label">Pending Actions</div></div>
          <div class="p-metric"><div class="p-metric-val">₦12M</div><div class="p-metric-label">Outstanding</div></div>
        </div>
        <div class="portal-table-wrap">
          <div class="portal-table-head"><h4>Active Projects</h4><span class="pt-label">Updated: Today</span></div>
          <table class="portal-tbl">
            <thead><tr><th>Project</th><th>Division</th><th>Progress</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Solar Installation — Facility B</td><td>Power Systems</td><td>72%</td><td><span class="status-pill status-active">In Progress</span></td></tr>
              <tr><td>CCTV Upgrade — Gate 1–4</td><td>Security</td><td>45%</td><td><span class="status-pill status-active">In Progress</span></td></tr>
              <tr><td>MCC Panel Replacement</td><td>Control Panels</td><td>100%</td><td><span class="status-pill status-complete">Complete</span></td></tr>
              <tr><td>Generator PM Contract Q2</td><td>Power Systems</td><td>—</td><td><span class="status-pill status-pending">Scheduled</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="margin-top:1.5rem;padding:1.25rem;background:var(--dark3);border:1px solid var(--border);border-radius:12px;text-align:center;">
      <p style="font-size:13px;color:var(--muted);">Your project data is live. For real-time updates, contact your project manager. <a href="#contact" style="color:var(--accent);">Contact us</a>.</p>
    </div>
  `;
}

function portalLogin() {
  const email = $('#portal-email').val().trim();
  const pass = $('#portal-pass').val();
  const found = demoClients[email];
  if (!found || found.password !== pass) {
    showToast('❌ Invalid credentials. Try: client@olatmatics.com / client123');
    return;
  }
  currentUser = { ...found, email };
  $('#portal-section-content').html(renderPortalDashboard(currentUser));
  showToast('✅ Welcome back, ' + currentUser.name + '!');
}

function portalLogout() {
  currentUser = null;
  $('#portal-section-content').html(renderPortalLogin());
  showToast('You have been signed out.');
}

window.portalLogin = portalLogin;
window.portalLogout = portalLogout;
window.closePortalIfOpen = () => {};

function initPortal() {
  const $content = $('#portal-section-content');
  if ($content.length) {
    $content.html(renderPortalLogin());
  }
}

/* ==========================================================================
   KNOWLEDGE CENTER ARTICLES (Full Text)
   ========================================================================== */
const articles = {
  solar: {
    title: 'How We Cut a Factory\'s Energy Bill by 65% with Hybrid Solar',
    category: 'Case Study',
    date: 'June 2025',
    readTime: '8 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Project Overview</h3>
      <p>In early 2024, a Lagos manufacturing facility approached OTH Ltd with an average monthly electricity bill of ₦4.2 million from diesel generators — running 18–20 hours daily due to grid instability.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">The Challenge</h4>
      <p>The factory required uninterrupted 3-phase power for CNC machinery, injection moulding equipment, and quality-control lighting. Any power interruption caused product defects and machine errors costing hundreds of thousands of naira per incident.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Our Solution</h4>
      <p><strong>System Size:</strong> 100 kW Hybrid Solar Array with 480 kWh Lithium Battery Bank</p>
      <ul style="margin-left:1.5rem;margin-top:0.5rem;color:var(--muted);">
        <li>200 × 500W monocrystalline solar panels installed on factory roof</li>
        <li>8 × 15 kW Deye hybrid inverters with seamless grid/generator switching</li>
        <li>48V lithium iron phosphate battery bank — 10-year design life</li>
        <li>Real-time energy monitoring dashboard (accessible from phone/PC)</li>
        <li>Generator integration as tertiary backup only</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Results After 6 Months</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>65% reduction in diesel consumption</li>
        <li>Monthly energy savings: ₦2.8M</li>
        <li>Carbon emissions reduced by 38 tonnes/year</li>
        <li>Full ROI projected in 18–22 months</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">Contact us today to get a similar system designed for your facility. Call: <strong>08039790207</strong></p>
    `
  },
  plcvscada: {
    title: 'PLC vs SCADA: Choosing the Right Automation Architecture',
    category: 'Technical Article',
    date: 'May 2025',
    readTime: '12 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Understanding the Difference</h3>
      <p>Many clients ask us: <em>"Should we use a PLC or a SCADA system?"</em> The answer is nuanced — and often, the answer is <strong>both</strong>.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What is a PLC?</h4>
      <p>A <strong>Programmable Logic Controller (PLC)</strong> is a rugged industrial computer designed to control specific processes or machinery. It runs pre-written ladder logic or function block programs in real time (millisecond response times). PLCs are ideal for: motor controls, conveyor systems, pump sequencing, and safety interlocks.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What is SCADA?</h4>
      <p><strong>Supervisory Control and Data Acquisition (SCADA)</strong> is a higher-level system that aggregates data from multiple PLCs, RTUs, and sensors, presenting operators with a graphical interface to monitor and control large-scale operations. SCADA is ideal for: pipeline monitoring, water treatment, power grid management, and multi-site operations.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Our Recommendation Framework</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>Single machine/process:</strong> PLC only (Siemens S7-1200 or Allen-Bradley Micro850)</li>
        <li><strong>Multi-machine factory:</strong> PLC network with HMI touchscreen</li>
        <li><strong>Multi-site or pipeline:</strong> PLC at each site + centralised SCADA</li>
        <li><strong>Remote monitoring required:</strong> Industrial IoT gateway + SCADA cloud dashboard</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">For a free automation audit of your facility, call: <strong>08039790207</strong> or email: olatmatics.tech@gmail.com</p>
    `
  },
  cctv: {
    title: "SON's New Standards for CCTV Installation in Nigeria",
    category: 'Industry Update',
    date: 'April 2025',
    readTime: '5 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">What Changed in 2024/2025?</h3>
      <p>The Standards Organisation of Nigeria (SON) released updated guidelines for electronic security systems in 2024 that affect how CCTV systems must be designed, installed and documented in commercial and public facilities.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Key Requirements</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>All IP cameras must use AES-128 or higher encryption for data in transit</li>
        <li>Minimum 30-day recording retention for commercial premises (90 days for banks/government)</li>
        <li>Night-vision cameras mandatory for perimeter security on industrial estates</li>
        <li>All systems must include UPS backup power of minimum 4-hour duration</li>
        <li>Documentation (as-built drawings, IP address schedules) must be submitted to facility management</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What This Means For You</h4>
      <p>If your existing CCTV installation pre-dates 2023, it may not meet current standards. OTH Ltd offers free compliance audits for existing systems and can upgrade or retrofit your infrastructure to meet SON requirements.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Schedule your free security audit: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `
  },
  atg: {
    title: 'Fuel Station ATG Systems Explained: Why Every Station Needs One',
    category: 'Guide',
    date: 'March 2025',
    readTime: '7 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">What is an ATG System?</h3>
      <p>An <strong>Automatic Tank Gauge (ATG)</strong> is an electronic device that continuously monitors the level, temperature, and volume of fuel in underground storage tanks at petrol stations.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Why Your Station Needs One</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>Theft prevention:</strong> Real-time inventory means fuel losses are immediately flagged</li>
        <li><strong>Environmental compliance:</strong> Leak detection prevents costly soil contamination fines</li>
        <li><strong>DPR requirement:</strong> The Department of Petroleum Resources now mandates ATG on new installations</li>
        <li><strong>Reconciliation accuracy:</strong> Matches pump sales data against tank levels automatically</li>
        <li><strong>Remote monitoring:</strong> Managers can check fuel levels from their phones at any time</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What We Install</h4>
      <p>OTH Ltd is certified to install Veeder-Root TLS-350 and Franklin Fueling Systems ATG units. We also integrate them with your Point-of-Sale (POS) and fuel management software for full operational visibility.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Get your ATG quote today: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `
  },
  elevator: {
    title: 'When Should You Modernise Your Elevator Instead of Replace It?',
    category: 'Technical Article',
    date: 'February 2025',
    readTime: '6 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">The Decision Framework</h3>
      <p>Elevator modernisation involves upgrading components (control systems, door operators, motor drives) while retaining the existing shaft, car, and structural steel. Full replacement means removing everything and starting fresh.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Modernise When:</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>The lift is 15–25 years old but structurally sound</li>
        <li>Breakdowns are frequent but the shaft is in good condition</li>
        <li>You want to upgrade to Variable Frequency Drive (VFD) control for energy savings</li>
        <li>Door operators are faulty — causing most service calls</li>
        <li>Budget is limited and downtime must be minimised</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Replace When:</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>The lift is 30+ years old with original hydraulic system</li>
        <li>Shaft structure has been compromised (water damage, corrosion)</li>
        <li>Building is undergoing full renovation and elevator capacity needs to increase</li>
        <li>Parts for the existing model are no longer manufactured</li>
      </ul>
      <br>
      <p>OTH Ltd provides free lift inspections and written modernisation vs replacement reports for building managers.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Book your free inspection: <strong>08039790207</strong></p>
    `
  },
  bms: {
    title: 'Smart BMS Reduces Energy Waste by 40% in Port Harcourt Office Tower',
    category: 'Case Study',
    date: 'January 2025',
    readTime: '10 min read',
    content: `
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Project Background</h3>
      <p>A 10-floor corporate headquarters in Port Harcourt was spending ₦3.1M monthly on electricity despite only having 60% occupancy. Air conditioning was running on weekends, lighting stayed on in empty floors, and there was no visibility into energy usage by floor.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">OTH Ltd's BMS Solution</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>HVAC Integration:</strong> Schneider EcoStruxure controllers linked to 28 AHUs with occupancy sensors</li>
        <li><strong>Lighting Automation:</strong> DALI lighting control with daylight harvesting sensors on all floors</li>
        <li><strong>Energy Metering:</strong> Sub-meters on every floor feeding into a central cloud dashboard</li>
        <li><strong>Access-Based Control:</strong> HVAC and lighting activate only when access cards are used on each floor</li>
        <li><strong>Fire Alarm Integration:</strong> Addressable Notifier system with BMS tie-in for smoke/evacuation control</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">12-Month Results</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>40% reduction in monthly electricity consumption</li>
        <li>Monthly savings: ₦1.24M</li>
        <li>Payback period: 14 months</li>
        <li>Occupant comfort scores improved by 28%</li>
        <li>Zero false fire alarm evacuations (vs 9 in the prior year)</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">Get a BMS assessment for your building: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `
  },
};

function openArticle(key) {
  const art = articles[key];
  if (!art) return;
  const $overlay = $('#article-modal');
  $overlay.find('.modal-title').html(`<span style="font-size:11px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;">${art.category}</span><br>${art.title}`);
  $overlay.find('.modal-sub').html(`${art.readTime} &nbsp;·&nbsp; ${art.date}`);
  $overlay.find('#article-content').html(art.content);
  $overlay.addClass('open');
}

window.openArticle = openArticle;
window.closeArticleModal = () => $('#article-modal').removeClass('open');

function initArticleModal() {
  $('#article-modal').on('click', function (e) {
    if (e.target === this) closeArticleModal();
  });
}

/* ==========================================================================
   EMAIL NOTIFICATION SIMULATION
   ========================================================================== */
function notifyEmail(subject) {
  console.log(`📧 Notification → olatmatics.tech@gmail.com | Subject: ${subject}`);
}

/* ==========================================================================
   FORMS, MODALS & TOASTS
   ========================================================================== */
function initFormsAndModals() {
  window.handleSubmit = () => {
    const n = $('#f-name').val();
    const e = $('#f-email').val();
    const s = $('#f-service').val();
    if (!n || !e || !s) {
      showToast('⚠️ Please fill in your name, email, and select a service.');
      return;
    }
    notifyEmail(`New Quote Request from ${n} (${e}) — Service: ${s}`);
    showToast('✅ Quote submitted! We\'ll contact you within 24 hours.');
    ['f-name','f-email','f-phone','f-company','f-location','f-desc'].forEach(id => $(`#${id}`).val(''));
    $('#f-service').val('');
    $('#f-budget').val('');
  };

  window.showToast = (msg) => {
    const $t = $('#toast');
    $t.text(msg).addClass('visible');
    setTimeout(() => $t.removeClass('visible'), 4500);
  };

  window.openApply = (role) => {
    $('#modal-title').text('Apply: ' + role);
    $('#modal-sub').text(
      role === 'General Application'
        ? 'Send us your CV and we will reach out when a matching role opens.'
        : `Submit your application for ${role} — we will be in touch within 5 business days.`
    );
    $('#apply-modal').addClass('open');
  };

  window.closeModal = () => $('#apply-modal').removeClass('open');

  $('#apply-modal').on('click', function (e) {
    if (e.target === this) closeModal();
  });

  window.submitApplication = () => {
    const n = $('#a-name').val();
    const e = $('#a-email').val();
    if (!n || !e) {
      showToast('⚠️ Please enter your name and email.');
      return;
    }
    const cv = $('#a-cv')[0]?.files[0];
    const cvName = cv ? cv.name : 'No file attached';
    notifyEmail(`New Job Application from ${n} (${e}) — CV: ${cvName}`);
    closeModal();
    showToast('✅ Application received! We\'ll review and contact you within 5 days.');
    ['a-name','a-email','a-phone','a-cover','a-link'].forEach(id => $(`#${id}`).val(''));
    $('#a-cv').val('');
  };

  // Consultation CTA
  window.openConsultation = () => {
    const $overlay = $('#consultation-modal');
    $overlay.addClass('open');
  };
  window.closeConsultationModal = () => $('#consultation-modal').removeClass('open');
  $('#consultation-modal').on('click', function (e) {
    if (e.target === this) closeConsultationModal();
  });
  window.submitConsultation = () => {
    const n = $('#c-name').val();
    const e = $('#c-email').val();
    if (!n || !e) { showToast('⚠️ Please enter your name and email.'); return; }
    notifyEmail(`Free Consultation Request from ${n} (${e})`);
    closeConsultationModal();
    showToast('✅ Consultation booked! Our team will call you within 2 hours.');
    ['c-name','c-email','c-phone','c-topic'].forEach(id => $(`#${id}`).val(''));
  };
}

/* ==========================================================================
   MAP EMBED — Federal Housing Lugbe, Abuja
   ========================================================================== */
function initMap() {
  const $mapContainer = $('#map-container');
  if ($mapContainer.length) {
    $mapContainer.html(`
      <iframe
        width="100%"
        height="250"
        style="border:0;border-radius:12px;"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=Federal+Housing+Lugbe+Abuja+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Muo">
      </iframe>
    `);
  }
}

/* ==========================================================================
   INITIALIZE ALL
   ========================================================================== */
$(document).ready(() => {
  initTheme();
  initHeroSlider();
  initThreeJS();
  initNavigation();
  initPortfolioFilters();
  initChatbot();
  initFormsAndModals();
  initEmergencyDispatch();
  initPortal();
  initArticleModal();
  initMap();
});
