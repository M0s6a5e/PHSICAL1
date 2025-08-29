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


// محاكاة تحميل وتفاعل المجسم 3D
document.addEventListener('DOMContentLoaded', function() {
    const modelPlaceholder = document.getElementById('model-placeholder');
    const controlButtons = document.querySelectorAll('.control-btn');
    
    // محاكاة تحميل المجسم
    setTimeout(() => {
        modelPlaceholder.innerHTML = `
            <div style="text-align: center;">
                <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: #6d28d9;"></i>
                <p>جاري تحميل المجسم ثلاثي الأبعاد...</p>
            </div>
        `;
        
        // محاكاة اكتمال التحميل بعد 2 ثانية
        setTimeout(() => {
            modelPlaceholder.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-cube" style="font-size: 4rem; color: #6d28d9;"></i>
                    <p>المجسم ثلاثي الأبعاد جاهز للاستخدام</p>
                    <p class="small-text">اسحب لتدوير - حرك عجلة الماوس للتكبير/التصغير</p>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(109, 40, 217, 0.1); border-radius: 10px;">
                        <p style="margin: 0; font-size: 0.9rem;">لإضافة مجسم حقيقي، استخدم مكتبة like Three.js</p>
                    </div>
                </div>
            `;
        }, 2000);
    }, 1000);
    
    // أحداث أزرار التحكم
    controlButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modelType = this.getAttribute('data-model');
            
            // إزالة النشط من جميع الأزرار
            controlButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشط للزر المحدد
            this.classList.add('active');
            
            // تغيير نص المجسم حسب النوع المحدد
            let modelText = '';
            switch(modelType) {
                case 'skeletal':
                    modelText = 'عرض الهيكل العظمي';
                    break;
                case 'muscular':
                    modelText = 'عرض النظام العضلي';
                    break;
                case 'both':
                    modelText = 'عرض الهيكل العظمي والعضلي معاً';
                    break;
            }
            
            modelPlaceholder.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-cube" style="font-size: 4rem; color: #6d28d9;"></i>
                    <p>${modelText}</p>
                    <p class="small-text">جاري تحميل النموذج المحدد...</p>
                </div>
            `;
            
            // محاكاة تحميل النموذج
            setTimeout(() => {
                modelPlaceholder.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <i class="fas fa-check-circle" style="font-size: 3rem; color: #25D366;"></i>
                        <p>تم تحميل ${modelText} بنجاح</p>
                        <p class="small-text">اسحب لتدوير - حرك عجلة الماوس للتكبير/التصغير</p>
                    </div>
                `;
            }, 1500);
        });
    });
});
// متغيرات Three.js العالمية
let scene, camera, renderer, controls;
let currentModel = null;

// تهيئة Three.js
function initThreeJS() {
    // الحصول على حاوية Canvas
    const container = document.getElementById('model-canvas-container');
    const canvas = document.getElementById('model-canvas');
    
    // إنشاء المشهد
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // إنشاء الكاميرا
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // إنشاء الـ Renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // إضافة التحكم بالمشهد
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    
    // إضاءة المشهد
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // إضافة محور للمساعدة في التوجيه (يمكن إزالته لاحقاً)
    const axesHelper = new THREE.AxesHelper(2);
    scene.add(axesHelper);
    
    // جعل المشهد متجاوباً
    window.addEventListener('resize', onWindowResize);
    
    // بدء التحرير
    animate();
}

// جعل المشهد متجاوباً مع حجم النافذة
function onWindowResize() {
    const container = document.getElementById('model-canvas-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// تحريك المشهد
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// تحميل نموذج 3D
function loadModel(modelType) {
    const loadingElement = document.getElementById('model-loading');
    loadingElement.style.display = 'flex';
    
    // إزالة النموذج الحالي إذا كان موجوداً
    if (currentModel) {
        scene.remove(currentModel);
    }
    
    // مسار النموذج (ستحتاج إلى استبداله بمسار النموذج الحقيقي)
    let modelPath = '';
    switch(modelType) {
        case 'skeletal':
            modelPath = 'models/skeletal_system.glb';
            break;
        case 'muscular':
            modelPath = 'models/muscular_system.glb';
            break;
        case 'both':
            modelPath = 'models/human_body.glb';
            break;
    }
    
    // محمل النماذج
    const loader = new THREE.GLTFLoader();
    
    loader.load(
        modelPath,
        function (gltf) {
            currentModel = gltf.scene;
            scene.add(currentModel);
            
            // ضبط موقع النموذج وحجمه
            const box = new THREE.Box3().setFromObject(currentModel);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 5 / maxDim;
            
            currentModel.scale.setScalar(scale);
            currentModel.position.copy(center).multiplyScalar(-scale);
            
            loadingElement.style.display = 'none';
        },
        function (xhr) {
            // أثناء التحميل
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            // عند الخطأ
            console.error('Error loading model:', error);
            loadingElement.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <p>خطأ في تحميل النموذج</p>
                <p class="small-text">${error.message}</p>
            `;
            
            // عرض نموذج بديل (مكعب بسيط)
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshPhongMaterial({ 
                color: modelType === 'skeletal' ? 0xffffff : 
                       modelType === 'muscular' ? 0xff4444 : 0x4444ff,
                transparent: true,
                opacity: 0.7
            });
            
            currentModel = new THREE.Mesh(geometry, material);
            scene.add(currentModel);
        }
    );
}

// إعادة تعيين العرض
function resetView() {
    controls.reset();
    camera.position.z = 5;
}

// تهيئة كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة Three.js
    initThreeJS();
    
    // تحميل النموذج الافتراضي
    setTimeout(() => loadModel('both'), 1000);
    
    // أحداث أزرار التحكم
    document.querySelectorAll('.control-btn').forEach(button => {
        if (button.id !== 'reset-view') {
            button.addEventListener('click', function() {
                document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                loadModel(this.getAttribute('data-model'));
            });
        }
    });
    
    // زر إعادة التعيين
    document.getElementById('reset-view').addEventListener('click', resetView);
});

document.addEventListener('DOMContentLoaded', function() {
    const sketchfabIframe = document.getElementById('sketchfab-iframe');
    const modelSection = document.querySelector('.model-section');
    
    // إضافة مؤشر تحميل
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'model-loading';
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>جاري تحميل المجسم...</p>';
    modelSection.appendChild(loadingIndicator);
    
    // إخفاء مؤشر التحميل عندما يتم تحميل الـ iframe
    sketchfabIframe.addEventListener('load', function() {
        loadingIndicator.style.display = 'none';
    });
    
    // إظهار مؤشر التحميل إذا كان هناك خطأ
    sketchfabIframe.addEventListener('error', function() {
        loadingIndicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>خطأ في تحميل المجسم</p>';
    });
});


// تبديل التبويبات في قسم الموارد
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشط من جميع الأزرار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // إضافة النشط للزر والمحتوى المحدد
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
});