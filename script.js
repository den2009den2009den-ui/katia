document.addEventListener('DOMContentLoaded', function() {

    // ===== СЕРДЕЧКИ =====
    const heartsContainer = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '♥️'];
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        const size = Math.random() * 20 + 15;
        heart.style.fontSize = size + 'px';
        heart.style.left = Math.random() * 100 + '%';
        const duration = Math.random() * 8 + 6;
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.opacity = Math.random() * 0.3 + 0.1;
        heartsContainer.appendChild(heart);
        setTimeout(() => { heart.remove(); }, duration * 1000 + 3000);
    }
    setInterval(createHeart, 300);
    for (let i = 0; i < 15; i++) { setTimeout(createHeart, i * 200); }

    // ===== ПРОВЕРКА КОДА =====
    const codeInput = document.getElementById('codeInput');
    const loginBtn = document.getElementById('loginBtn');
    const errorMessage = document.getElementById('errorMessage');
    const loginPage = document.getElementById('loginPage');
    const mainPage = document.getElementById('mainPage');
    const CORRECT_CODE = '07122025';
    function checkCode() {
        const enteredCode = codeInput.value.trim();
        if (enteredCode === CORRECT_CODE) {
            loginPage.style.display = 'none';
            mainPage.style.display = 'flex';
            document.body.style.overflow = 'auto';
            startTimer();
            document.querySelector('.love-message h2').style.animation = 'pulse 1.5s ease-in-out infinite';
        } else {
            errorMessage.classList.add('show');
            errorMessage.classList.add('shake');
            setTimeout(() => { errorMessage.classList.remove('shake'); }, 500);
            codeInput.value = '';
            codeInput.focus();
        }
    }
    loginBtn.addEventListener('click', checkCode);
    codeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { checkCode(); }
    });

    // ===== ТАЙМЕР =====
    function startTimer() {
        const startDate = new Date(2025, 11, 7);
        const timerElement = document.getElementById('timer');
        function updateTimer() {
            const now = new Date();
            const diff = now - startDate;
            if (diff < 0) { timerElement.textContent = 'Скоро начнётся наша история 💕'; return; }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            timerElement.textContent = `Мы вместе уже ${days} дней, ${String(hours).padStart(2, '0')} часов, ${String(minutes).padStart(2, '0')} минут, ${String(seconds).padStart(2, '0')} секунд`;
        }
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // ===== ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => { content.style.display = 'none'; });
            const targetContent = document.getElementById('tab-' + tabId);
            if (targetContent) { targetContent.style.display = 'block'; }
            const loveMessage = document.querySelector('.love-message');
            if (tabId === 'history' || tabId === 'gallery' || tabId === 'reasons' || tabId === 'calendar' || tabId === 'secret') {
                loveMessage.style.display = 'block';
            }
        });
    });
    document.querySelectorAll('.tab-content').forEach(tab => { tab.style.display = 'none'; });
    document.querySelectorAll('.tab-btn').forEach(btn => { btn.classList.remove('active'); });

    // ===== ФАКТЫ =====
    const reasons = [
        "За твою улыбку, от которой у меня сердце бьётся быстрее",
        "За то, как ты смотришь на меня своими глазами",
        "За твой смех, который я готов слушать вечно",
        "За то, что ты всегда знаешь, когда мне нужен совет",
        "За твою нежность, которая согревает меня в любую погоду",
        "За то, как ты морщишь нос, когда злишься",
        "За твою поддержку в любых моих начинаниях",
        "За то, что ты самая красивая в моих глазах",
        "За то, как ты обнимаешь меня",
        "За твою страсть к жизни",
        "За то, как ты говоришь 'Я люблю тебя'",
        "За то, что ты всегда веришь в меня",
        "За твои сообщения, от которых я улыбаюсь как дурак",
        "За то, как ты дразнишь меня",
        "За твою честность",
        "За то, как ты заботишься обо мне",
        "За твою способность делать каждый день особенным",
        "За то, что ты выбрала меня",
        "За то, как ты целуешь меня",
        "За твой голос, который я узнаю из тысячи",
        "За то, что ты научила меня любить по-настоящему",
        "За то, как ты радуешься мелочам",
        "За то, что ты самая лучшая в мире",
        "За то, что ты есть у меня",
        "За каждый день, который мы проводим вместе",
        "За то, что я могу быть собой рядом с тобой",
        "За то, как ты смущаешься, когда я говорю комплименты",
        "За то, что ты сделала мою жизнь ярче"
    ];
    let currentReasonIndex = 0;
    const reasonText = document.getElementById('reasonText');
    const reasonCounter = document.getElementById('reasonCounter');
    const nextBtn = document.getElementById('nextReasonBtn');
    function showReason(index) {
        if (!reasonText) return;
        reasonText.style.opacity = '0';
        reasonText.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            reasonText.textContent = reasons[index];
            if (reasonCounter) { reasonCounter.textContent = `${index + 1} из ${reasons.length}`; }
            reasonText.style.opacity = '1';
            reasonText.style.transform = 'translateY(0)';
            reasonText.style.animation = 'none';
            setTimeout(() => { reasonText.style.animation = 'fadeInReason 0.6s ease'; }, 10);
        }, 300);
    }
    function nextReason() {
        currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
        showReason(currentReasonIndex);
    }
    if (nextBtn) { nextBtn.addEventListener('click', nextReason); }
    let autoPlayInterval = setInterval(nextReason, 5000);
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            clearInterval(autoPlayInterval);
            clearTimeout(window.reasonTimeout);
            window.reasonTimeout = setTimeout(() => { autoPlayInterval = setInterval(nextReason, 5000); }, 10000);
        });
    }
    if (reasonText) { showReason(0); }

    // ===== ГАЛЕРЕЯ (ВЕРТИКАЛЬНАЯ ПРОКРУТКА) =====
    let galleryLoaded = false;
    function loadGallery() {
        if (galleryLoaded) return;
        galleryLoaded = true;
        const container = document.getElementById('galleryScroll');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 1; i <= 25; i++) {
            const img = document.createElement('img');
            img.src = 'images/' + i + '.jpg';
            img.alt = 'Фото ' + i;
            img.loading = 'lazy';
            img.draggable = false;
            img.onerror = function() {
                this.alt = 'Фото ' + i + ' не загружено';
                this.style.background = '#f0f0f0';
                this.style.padding = '40px 20px';
                this.style.textAlign = 'center';
                this.style.color = '#999';
                this.style.fontSize = '14px';
                this.style.minHeight = '200px';
            };
            let lastTap = 0;
            img.addEventListener('click', function(e) {
                const now = Date.now();
                const timeSince = now - lastTap;
                if (timeSince < 300 && timeSince > 0) {
                    e.preventDefault();
                    createLikeAnimation(this);
                }
                lastTap = now;
            });
            container.appendChild(img);
        }
    }
    function createLikeAnimation(element) {
        document.querySelectorAll('.like-animation').forEach(el => el.remove());
        const heart = document.createElement('div');
        heart.className = 'like-animation';
        heart.textContent = '❤️';
        heart.style.fontSize = (Math.random() * 30 + 60) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 800);
    }
    const galleryTab = document.getElementById('tab-gallery');
    if (galleryTab) {
        const observer = new MutationObserver(function() {
            if (galleryTab.style.display !== 'none') {
                loadGallery();
                observer.disconnect();
            }
        });
        observer.observe(galleryTab, { attributes: true, attributeFilter: ['style'] });
    }

    // ===== ПЛАШКА-ПОДСКАЗКА =====
    const hint = document.getElementById('likeHint');
    const closeHintBtn = document.getElementById('closeHintBtn');
    if (hint && closeHintBtn) {
        if (localStorage.getItem('galleryHintShown')) { hint.classList.add('hidden'); }
        closeHintBtn.addEventListener('click', function() {
            hint.classList.add('hidden');
            localStorage.setItem('galleryHintShown', 'true');
        });
    }

    // ===== КАЛЕНДАРЬ =====
    let calCurrentDate = new Date();
    let calSelectedDate = null;
    function renderCalendar() {
        const year = calCurrentDate.getFullYear();
        const month = calCurrentDate.getMonth();
        const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        document.getElementById('calMonthYear').textContent = monthNames[month] + ' ' + year;
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        let startOffset = firstDay.getDay();
        if (startOffset === 0) startOffset = 7;
        const today = new Date();
        const grid = document.getElementById('calGrid');
        while (grid.children.length > 7) { grid.removeChild(grid.lastChild); }
        for (let i = 1; i < startOffset; i++) {
            const empty = document.createElement('div');
            empty.className = 'day other-month';
            grid.appendChild(empty);
        }
        for (let d = 1; d <= lastDay.getDate(); d++) {
            const day = document.createElement('div');
            day.className = 'day';
            day.textContent = d;
            if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                day.classList.add('today');
            }
            if (calSelectedDate && d === calSelectedDate.getDate() && month === calSelectedDate.getMonth() && year === calSelectedDate.getFullYear()) {
                day.classList.add('selected');
            }
            day.addEventListener('click', function() {
                calSelectedDate = new Date(year, month, d);
                document.getElementById('calSelectedDate').textContent = formatCalendarDate(calSelectedDate);
                document.querySelectorAll('#calGrid .day').forEach(el => el.classList.remove('selected'));
                this.classList.add('selected');
            });
            grid.appendChild(day);
        }
        const totalCells = startOffset - 1 + lastDay.getDate();
        const remainder = totalCells % 7;
        if (remainder > 0) {
            for (let i = 0; i < 7 - remainder; i++) {
                const empty = document.createElement('div');
                empty.className = 'day other-month';
                grid.appendChild(empty);
            }
        }
    }
    function formatCalendarDate(date) {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }
    document.getElementById('calPrevBtn').addEventListener('click', function() {
        calCurrentDate.setMonth(calCurrentDate.getMonth() - 1);
        renderCalendar();
    });
    document.getElementById('calNextBtn').addEventListener('click', function() {
        calCurrentDate.setMonth(calCurrentDate.getMonth() + 1);
        renderCalendar();
    });

                        // ===== ОТПРАВКА (открывает почтовый клиент) =====
    document.getElementById('calSubmitBtn').addEventListener('click', function() {
        const date = calSelectedDate;
        const time = document.getElementById('calTimeInput').value;
        const idea = document.getElementById('calIdeaInput').value.trim();

        if (!date) { alert('Выбери дату в календаре! ❤️'); return; }
        if (!time) { alert('Введи время! ⏰'); return; }
        if (!idea) { alert('Напиши идею для свидания! 💡'); return; }

        const successMsg = document.getElementById('calSuccessMessage');

        // Формируем письмо
        const subject = encodeURIComponent('❤️ Новое желание для свидания!');
        const body = encodeURIComponent(
            `📅 Дата: ${formatCalendarDate(date)}\n` +
            `⏰ Время: ${time}\n` +
            `💡 Идея: ${idea}\n\n` +
            `❤️ Твоя Катя 💕`
        );

        // Открываем почтовый клиент
        window.location.href = `mailto:denzipghh@yandex.ru?subject=${subject}&body=${body}`;

        // Показываем успех
        successMsg.classList.add('show');

        // Очищаем поля
        document.getElementById('calTimeInput').value = '';
        document.getElementById('calIdeaInput').value = '';
        document.querySelectorAll('#calGrid .day').forEach(el => el.classList.remove('selected'));
        calSelectedDate = null;
        document.getElementById('calSelectedDate').textContent = 'Выберите дату в календаре';

        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    });

    renderCalendar();
});
