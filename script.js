// Scroll progress
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress").style.width = (scrollTop / height) * 100 + "%";
});

// Fade-in + skill bars animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.querySelectorAll(".bar div").forEach(bar => {
                bar.style.width = bar.dataset.width + "%";
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// Active nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 120) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});
// Skill bar tooltip
const tooltip = document.createElement('div');
tooltip.className = 'skill-tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.bar').forEach(bar => {
    const inner = bar.querySelector('div');

    bar.addEventListener('mouseenter', e => {
        tooltip.textContent = inner.dataset.width + '%';
        tooltip.style.display = 'block';
        tooltip.style.opacity = 1;
    });

    bar.addEventListener('mousemove', e => {
        tooltip.style.left = e.clientX + 'px';
        tooltip.style.top = (e.clientY - 1) + 'px'; // slightly above the mouse
    });

    bar.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
        tooltip.style.opacity = 0;
    });
});
