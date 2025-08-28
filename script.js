// تبديل وضع الألوان
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// التحقق من وجود تفضيل مسبق
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateToggleIcon();
}

// التحقق من تفضيلات النظام
if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute('data-theme', 'dark');
    updateToggleIcon();
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateToggleIcon();
});

function updateToggleIcon() {
    if (body.getAttribute('data-theme') === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// تحديث سنة حقوق الطبع سنوياً
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// تأثيرات عند التمرير
window.addEventListener('scroll', () => {
    const dynamicIsland = document.querySelector('.dynamic-island');
    if (window.scrollY > 50) {
        dynamicIsland.style.transform = 'translateX(-50%) scale(0.95)';
        dynamicIsland.style.opacity = '0.9';
    } else {
        dynamicIsland.style.transform = 'translateX(-50%)';
        dynamicIsland.style.opacity = '1';
    }
});

// تأثيرات عند تحميل الصفحة
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const contentBox = document.querySelector('.content-box');
    contentBox.style.transform = 'translateY(0)';
    contentBox.style.opacity = '1';
});

// تهيئة العناصر قبل تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const contentBox = document.querySelector('.content-box');
    contentBox.style.transform = 'translateY(20px)';
    contentBox.style.opacity = '0';
    contentBox.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
});


// أضف هذا الكود في نهاية الملف

// التمرير السلس إلى الأقسام
document.addEventListener('DOMContentLoaded', function() {
    // التأكد من أن JavaScript يعمل
    console.log('تم تحميل JavaScript بنجاح');
    
    // التمرير إلى قسم المقررات عند النقر على "عنّا"
    const aboutLink = document.querySelector('.dynamic-island a[href="#courses-section"]');
    
    if (aboutLink) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('تم النقر على رابط عنّا');
            
            const targetSection = document.getElementById('courses-section');
            
            if (targetSection) {
                console.log('تم العثور على قسم المقررات');
                
                // حساب الموقع مع مراعاة ارتفاع شريط التنقل
                const dynamicIsland = document.querySelector('.dynamic-island');
                const offset = dynamicIsland.offsetHeight + 30;
                const targetPosition = targetSection.offsetTop - offset;
                
                // التمرير السلس
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // إضافة تأثير مرئي للقسم
                targetSection.style.transition = 'all 0.3s ease';
                targetSection.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.3)';
                
                setTimeout(() => {
                    targetSection.style.boxShadow = '';
                }, 1000);
            } else {
                console.error('لم يتم العثور على قسم المقررات');
            }
        });
    } else {
        console.error('لم يتم العثور على رابط عنّا');
    }
});

// تأثير Animation عند النقر على رابط المنتدى
document.querySelectorAll('a[href="#student-forum"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // تأثير اهتزاز للرابط
        this.classList.add('vibrate');
        setTimeout(() => {
            this.classList.remove('vibrate');
        }, 400);
        
        // الحصول على القسم المستهدف
        const targetSection = document.getElementById('student-forum');
        if (!targetSection) return;
        
        // حساب الموقع مع مراعاة ارتفاع شريط التنقل
        const dynamicIsland = document.querySelector('.dynamic-island');
        const offset = dynamicIsland ? dynamicIsland.offsetHeight + 20 : 100;
        const targetPosition = targetSection.offsetTop - offset;
        
        // التمرير إلى القسم
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // إضافة تأثير الـ Animation عند الوصول إلى القسم
        setTimeout(() => {
            targetSection.classList.add('forum-highlight');
            
            // إزالة الـ class بعد انتهاء الـ Animation
            setTimeout(() => {
                targetSection.classList.remove('forum-highlight');
            }, 1500);
        }, 800); // وقت التأخير يتناسب مع مدة التمرير
    });
});

// بديل إذا كان لديك كود التمرير السلس بالفعل
// يمكنك تعديله ليشمل تأثير الـ animation
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const headerOffset = 100;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // إضافة تأثير الـ Animation
    setTimeout(() => {
        target.classList.add('forum-highlight');
        setTimeout(() => {
            target.classList.remove('forum-highlight');
        }, 1500);
    }, 800);
}

// استدعاء الدالة عند النقر على الرابط
document.querySelectorAll('a[href="#student-forum"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});