// ==========================
// 🎯 SCROLL ANIMATION (SMOOTH)
// ==========================
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// ==========================
// 💻 TYPING EFFECT
// ==========================
const roles = ["AI/ML Developer", "Backend Developer", "CSE Student"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
    const typing = document.querySelector(".typing");

    if (!typing) return;

    if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
            current = roles[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = roles[i].substring(0, j--);
        }

        typing.innerHTML = current;

        if (j === roles[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ==========================
// 📁 PROJECT MODAL
// ==========================
const projectData = {
    "stock-market": {
        title: "Stock Market Prediction",
        tech: "🛠 ML | LSTM | Python | TensorFlow",
        desc: "Predicts stock market trends using Long Short-Term Memory (LSTM) neural networks. The model is trained on historical stock data and uses deep learning to forecast future price movements. Helps identify patterns in time-series financial data for smarter investment decisions."
    },
    "arduino": {
        title: "Arduino Bluetooth System",
        tech: "🛠 Hardware | Arduino | Bluetooth",
        desc: "Built a Bluetooth-controlled hardware system using Arduino. The project enables wireless communication between devices to control hardware components remotely via a smartphone or computer. Demonstrates embedded systems and IoT integration skills."
    },
    "podcast-ai": {
        title: "Automated Podcast Transcription",
        tech: "🛠 Whisper | PyTorch | Python",
        desc: "Converts audio from any language into English text format using OpenAI's Whisper flow model. Includes summarization capability and can export transcripts as PDF or DOCX. Built during Infosys internship (Dec 2025 – Feb 2026) with optimized processing using Collab for faster, more accurate results."
    },
    "deepfake": {
        title: "Deepfake Detection",
        tech: "🛠 CT.Scan | Django | TensorFlow | Python",
        desc: "Detects whether an image is real or AI-generated/fake using Convolutional Neural Networks (CNN) for image classification. Best used for spam detection and identifying manipulated media. Can be extended to cybersecurity and content verification applications."
    },
    "resume-builder": {
        title: "Resume Checker & Builder",
        tech: "🛠 AI | MATLAB | Git | Python | CNN | JSS",
        desc: "Allows users to prepare and optimize their resume using AI/ML by filling required ATS format details. The tool analyzes resumes, checks ATS compatibility, and scores the output. Built in May 2025 during EDUNET Foundation internship using Matplotlib for data visualization."
    }
};

function openModal(key) {
    const p = projectData[key];
    if (!p) return;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalTech").textContent = p.tech;
    document.getElementById("modalDesc").textContent = p.desc;
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "";
}

// Close modal on outside click
document.getElementById("projectModal").addEventListener("click", function(e) {
    if (e.target === this) closeModal();
});

// Close modal on Escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
});


// ==========================
// 📄 RESUME MODAL
// ==========================
function openResumeModal() {
    const modal = document.getElementById("resumeModal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeResumeModal() {
    document.getElementById("resumeModal").style.display = "none";
    document.body.style.overflow = "";
}

document.getElementById("resumeModal").addEventListener("click", function(e) {
    if (e.target === this) closeResumeModal();
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeResumeModal();
});

// ==========================
// 🌙 DARK / LIGHT MODE
// ==========================
const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Change icon
        if (document.body.classList.contains("light-mode")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });
}