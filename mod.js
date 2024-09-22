document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-btn");

  // Функція для відкриття модального вікна
  function openModal() {
    modal.style.display = "block";
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modal.style.display = "none";
  }

  // Додаємо обробник подій для кнопки закриття
  closeButton.addEventListener("click", closeModal);

  // Закриваємо модальне вікно при натисканні на фон
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Виклик функції відкриття модального вікна
  // openModal(); // Розкоментуйте, якщо потрібно відкрити модальне вікно автоматично
});

