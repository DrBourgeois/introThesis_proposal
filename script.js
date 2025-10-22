  // Navigation
  function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + id).classList.add('active');
    window.scrollTo(0, 0);
    
    // Initialize demos on screen load
    if (id === 9) initLegibilityDemo();
    //if (id === 11) initEcosystems();
}

// load article simulation
function loadTracking() {
    nextScreen(3);
    const trackers = [
'article.html', 'google-analytics.js', 'facebook-pixel.js', 'doubleclick-ad-1.js',
'doubleclick-ad-2.js', 'amazon-tracking.js', 'behavioral-profiler.js', 'ad-auction-bid.js',
'cross-site-tracker-1.js', 'cross-site-tracker-2.js', 'fingerprinting-lib.js', 
'session-replay.js', 'heatmap-tracker.js', 'scroll-depth-monitor.js', 
'mouse-movement-track.js', 'third-party-cookie-1.js', 'third-party-cookie-2.js',
'retargeting-pixel.js', 'conversion-tracker.js', 'affiliate-tracking.js'
];
    
const trackerList = document.getElementById('tracker-list');
trackerList.innerHTML = '';

trackers.forEach((tracker, index) => {
    setTimeout(() => {
        const item = document.createElement('div');
        item.className = 'tracker-item';
        item.innerHTML = `<span>Loading ${tracker}...</span><span class="status success">✓</span>`;
        trackerList.appendChild(item);
        trackerList.scrollTop = trackerList.scrollHeight;
    }, index * 100);
});

setTimeout(() => document.getElementById('stats-3').style.animation = 'fadeIn 0.5s ease forwards', 3000);
setTimeout(() => document.getElementById('ratio-3').style.animation = 'fadeIn 0.5s ease forwards', 4000);
setTimeout(() => document.getElementById('buttons-3').style.animation = 'fadeIn 0.5s ease forwards', 5000);
}

function loadBlockedArticle() {
    nextScreen(6);
    const trackers = [
        { name: 'article.html', blocked: false },
        { name: 'google-analytics.js', blocked: true },
        { name: 'facebook-pixel.js', blocked: true },
        { name: 'doubleclick-ad-1.js', blocked: true },
        { name: 'doubleclick-ad-2.js', blocked: true },
        { name: 'amazon-tracking.js', blocked: true },
        { name: 'behavioral-profiler.js', blocked: true },
        { name: 'ad-auction-bid.js', blocked: true },
        { name: 'cross-site-tracker-1.js', blocked: true },
        { name: 'fingerprinting-lib.js', blocked: true },
        { name: 'style.css', blocked: false },
        { name: 'main-image.jpg', blocked: false },
        { name: 'author-avatar.jpg', blocked: false }
    ];
    
    const trackerList = document.getElementById('tracker-list-blocked');
    trackerList.innerHTML = '';
    
    trackers.forEach((tracker, index) => {
        setTimeout(() => {
            const item = document.createElement('div');
            item.className = tracker.blocked ? 'tracker-item blocked' : 'tracker-item';
            item.innerHTML = `<span>Loading ${tracker.name}...</span><span class="status ${tracker.blocked ? 'blocked' : 'success'}">${tracker.blocked ? '✗ BLOCKED' : '✓'}</span>`;
            trackerList.appendChild(item);
            trackerList.scrollTop = trackerList.scrollHeight;
        }, index * 80);
    });
    
    setTimeout(() => document.getElementById('stats-6').style.animation = 'fadeIn 0.5s ease forwards', 2000);
    setTimeout(() => document.getElementById('ratio-6').style.animation = 'fadeIn 0.5s ease forwards', 3000);
    setTimeout(() => document.getElementById('progress-6').style.animation = 'fadeIn 0.5s ease forwards', 4000);
    setTimeout(() => document.getElementById('text-6-1').style.animation = 'fadeIn 0.5s ease forwards', 5000);
    setTimeout(() => document.getElementById('text-6-2').style.animation = 'fadeIn 0.5s ease forwards', 6000);
    setTimeout(() => document.getElementById('buttons-6').style.animation = 'fadeIn 0.5s ease forwards', 7000);
}

function triggerInterference() {
    document.body.classList.add('phase-corporate');
    setTimeout(() => document.getElementById('popup-overlay').classList.add('active'), 500);
}

function closePopup() {
    document.getElementById('popup-overlay').classList.remove('active');
    document.body.classList.remove('phase-corporate');
    setTimeout(() => nextScreen(7), 300);
}

function showMoreInfo() {
    alert(`Smart. Always question tools that promise freedom.\n\nHere's what ad blockers DON'T tell you:\n• They only block what they know about\n• New trackers appear constantly\n• Some sites detect and punish you for blocking\n• The ad tech industry is a $600B arms race\n\nBlocking ads is just a rudimentary example. It is easy, the hard part? Every layer of "exit" reveals another layer of control.\n`);
}

function darkPattern() {
    alert('That button does nothing. Classic dark pattern.\n\n{A dark pattern (also known as a "deceptive design pattern") is a user interface that has been carefully crafted to trick users into doing things.}');
}

function showProtocolInfo() {
    alert(`"Protocol" = the invisible rules that structure behavior.

Not just technical protocols (TCP/IP, HTTP), but:
• Platform algorithms that decide what you see
• Terms of Service that define acceptable use
• Dark patterns that nudge you toward compliance
• Social norms that enforce themselves

These systems are decentralized and self-correcting.

That's what we're learning to see.`);
}

animateDeathSpiral('my-spiral');

document.querySelector('.info-button').addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'ant-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>SYSTEM ANALYSIS</h3>
            <p>Each ant is doing the "correct" behavior:</p>
            <ul>
                <li>Follow strongest pheromone trail</li>
                <li>Reinforce the path for others</li>
                <li>Maximize local efficiency</li>
            </ul>
            <p><strong>Locally optimal. Globally catastrophic.</strong></p>
            
            <p>Social media platforms do the same:</p>
            <ul>
                <li>Content that triggers engagement gets amplified</li>
                <li>Anger, fear, outrage = highest engagement</li>
                <li>Users follow these trails (algorithm recommendations)</li>
                <li>Each click reinforces the pattern</li>
                <li>System optimizes for engagement, not wellbeing</li>
            </ul>
            
            <p><em>You can be extremely successful in this system and still be walking in circles toward exhaustion.</em></p>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
});

// legibility slider
function initLegibilityDemo() {
    const slider = document.getElementById('legibility-slider');
    const value = document.getElementById('legibility-value');
    
    slider.addEventListener('input', function() {
        value.textContent = this.value;
        updateLegibility(parseInt(this.value));
    });
    
    updateLegibility(50);
}

function updateLegibility(level) {
    const you = document.querySelector('.content-you');
    const doctor = document.querySelector('.content-doctor');
    const employer = document.querySelector('.content-employer');
    const advertiser = document.querySelector('.content-advertiser');
    const state = document.querySelector('.content-state');
    
    you.textContent = "Full access to all your data";
    
    if (level < 20) {
        doctor.textContent = "████████████ (encrypted)";
        employer.textContent = "████████████ (encrypted)";
        advertiser.textContent = "████████████ (blocked)";
        state.textContent = "████████████ (encrypted)";
    } else if (level < 50) {
        doctor.textContent = "Medical history, current symptoms";
        employer.textContent = "████████████ (limited access)";
        advertiser.textContent = "████████████ (blocked)";
        state.textContent = "██████ (partial metadata)";
    } else if (level < 80) {
        doctor.textContent = "Medical history, current symptoms";
        employer.textContent = "Work hours, productivity metrics";
        advertiser.textContent = "Browsing history, interests";
        state.textContent = "Location, contacts, messages";
    } else {
        doctor.textContent = "Medical history, current symptoms";
        employer.textContent = "Work hours, productivity, health status, personal habits";
        advertiser.textContent = "Browsing history, interests, social graph, purchase intent";
        state.textContent = "Location, contacts, messages, associations, predictions";
    }
}

// Protocol Capture Demo
let captureStage = 0;

function animateCapture() {
    captureStage = 0;
    resetCapture();
    const interval = setInterval(() => {
        if (captureStage < 5) {
            captureStage++;
            document.getElementById(`stage-${captureStage}`).classList.add('active');
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function resetCapture() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`stage-${i}`).classList.remove('active');
    }
    captureStage = 0;
}

/*f
// Ecosystem Demo
function initEcosystems() {
    resetEcosystem('monoculture');
    resetEcosystem('diversity');
}

function resetEcosystem(type) {
    const grid = document.getElementById(`${type}-grid`);
    grid.innerHTML = '';
    
    const species = type === 'monoculture' ? ['A'] : ['A', 'B', 'C', 'D'];
    const colors = { A: '#0f0', B: '#0ff', C: '#ff0', D: '#f0f' };
    
    for (let i = 0; i < 60; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const sp = species[Math.floor(Math.random() * species.length)];
        cell.textContent = sp;
        cell.style.color = colors[sp];
        cell.dataset.species = sp;
        grid.appendChild(cell);
    }
    
    document.getElementById(`${type}-status`).textContent = '';
}

function infect(type) {
    const grid = document.getElementById(`${type}-grid`);
    const cells = Array.from(grid.children);
    
    // Infect species A
    let infected = 0;
    cells.forEach(cell => {
        if (cell.dataset.species === 'A' && Math.random() < 0.8) {
            setTimeout(() => {
                cell.classList.add('dead');
                cell.textContent = '×';
            }, Math.random() * 2000);
            infected++;
        }
    });
    
    setTimeout(() => {
        const alive = cells.filter(c => !c.classList.contains('dead')).length;
        const total = cells.length;
        const percent = Math.round((alive / total) * 100);
        document.getElementById(`${type}-status`).textContent = 
            `${percent}% survived (${alive}/${total} organisms)`;
    }, 2500);
} */

function animateDeathSpiral(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const centerX = 100;
    const centerY = 100;
    const radius = 70;
    const ants = 20;
    let angle = 0;
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, 200, 200);
        
        // Draw trail
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw ants
        for (let i = 0; i < ants; i++) {
            const a = angle + (i * Math.PI * 2 / ants);
            const x = centerX + Math.cos(a) * radius;
            const y = centerY + Math.sin(a) * radius;
            
            ctx.fillStyle = '#0f0';
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        angle += 0.02;
        requestAnimationFrame(draw);
    }
    
    draw();
}
// ------- EASTER EGG --------
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('You found the secret!\n\nThe real exit protocols are built by communities,\nnot consumed as products.\n\nKeep questioning. Keep building.\n\n- fellow traveler');
    }
});