// Функция для перехода на главную страницу
function goToHomePage() {
    window.location.href = 'index.html'; // Перенаправление на главную страницу (index.html)
}


// Получаем элементы
const button = document.getElementById('showButton');
const text = document.getElementById('hiddenText');

// Обработчик клика по кнопке
button.addEventListener('click', function() {
    if (text.style.display === 'none') {
        text.style.display = 'block'; // Показываем текст
        button.textContent = 'Скрыть текст'; // Меняем текст кнопки
    } else {
        text.style.display = 'none'; // Скрываем текст
        button.textContent = 'Показать текст'; // Меняем текст кнопки
    }
});
