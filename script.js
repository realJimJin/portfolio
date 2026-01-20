// Content configuration - edit everything here
const content = {
    projects: [
        {
            title: "Mini Insta (Django)",
            description: "A lightweight Instagram-style web app with profiles, follows, photo posts, likes, and comments.",
            link: "https://mini-insta-297d.onrender.com/",
            repo: "#", // placeholder for repo link
            tech: "Django, PostgreSQL, HTML/CSS"
        },
        {
            title: "Chess Tournament Manager",
            description: "Simple system for managing scholastic chess tournaments with pairings and standings.",
            link: "#",
            repo: "#",
            tech: "Python, Flask"
        },
        {
            title: "Progress Tracker",
            description: "Minimal tool for tracking measurable progress in chess and other skills.",
            link: "#",
            repo: "#",
            tech: "JavaScript, HTML/CSS"
        }
    ],
    
    reading: [
        {
            title: "Thinking, Fast and Slow",
            takeaway: "System 1 vs System 2 thinking applies well to chess pattern recognition.",
            date: "2024-01-15"
        },
        {
            title: "The Inner Game of Tennis",
            takeaway: "Performance psychology principles transfer directly to chess improvement.",
            date: "2024-01-10"
        },
        {
            title: "Deep Work",
            takeaway: "Focused practice sessions are more valuable than scattered study time.",
            date: "2024-01-05"
        }
    ],
    
    writing: [
        {
            title: "900 → 2300: A Structured Approach",
            description: "How deliberate practice and systematic study led to steady rating gains.",
            link: "#"
        },
        {
            title: "The Preventive Mindset in Chess",
            description: "Thinking ahead to prevent problems before they arise.",
            link: "#"
        },
        {
            title: "Coaching Adult Improvers",
            description: "What works (and doesn't) when teaching adults chess fundamentals.",
            link: "#"
        }
    ]
};

// Render functions
function renderProjects() {
    const container = document.getElementById('projects-list');
    const projectsList = document.createElement('ul');
    projectsList.className = 'item-list';
    
    content.projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-title">
                <a href="${project.link}" target="_blank" rel="noopener">${project.title}</a>
            </div>
            <div class="item-description">${project.description}</div>
            <div class="item-meta">${project.tech}</div>
        `;
        projectsList.appendChild(li);
    });
    
    container.appendChild(projectsList);
}

function renderReading() {
    const container = document.getElementById('reading-list');
    const readingList = document.createElement('ul');
    readingList.className = 'item-list';
    
    content.reading.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-title">${item.title}</div>
            <div class="item-description">${item.takeaway}</div>
            <div class="item-meta">${formatDate(item.date)}</div>
        `;
        readingList.appendChild(li);
    });
    
    container.appendChild(readingList);
}

function renderWriting() {
    const container = document.getElementById('writing-list');
    const writingList = document.createElement('ul');
    writingList.className = 'item-list';
    
    content.writing.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item-title">
                <a href="${item.link}">${item.title}</a>
            </div>
            <div class="item-description">${item.description}</div>
        `;
        writingList.appendChild(li);
    });
    
    container.appendChild(writingList);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Copy email functionality
function setupCopyEmail() {
    const copyBtn = document.getElementById('copy-email');
    const emailLink = document.getElementById('contact-email');
    const email = 'jimjin135@gmail.com';
    
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(email);
            copyBtn.textContent = 'copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = 'copy';
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            copyBtn.textContent = 'copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = 'copy';
                copyBtn.classList.remove('copied');
            }, 2000);
        }
    });
}

// Set current year
function setYear() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
}

// Smooth scroll for navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for sticky header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderReading();
    renderWriting();
    setupCopyEmail();
    setYear();
    setupSmoothScroll();
});

// Optional: Add some scroll-based header effects
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    // Add subtle shadow when scrolled
    if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
