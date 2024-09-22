document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-btn");

  // Функція для відкриття модального вікна
  function openModal() {
      modal.classList.add("show"); // Додаємо клас
  }

  // Функція для закриття модального вікна
  function closeModal() {
      modal.classList.remove("show"); // Видаляємо клас
  }

  // Додаємо обробник подій для кнопки закриття
  closeButton.addEventListener("click", closeModal);

  // Закриваємо модальне вікно при натисканні на фон
  modal.addEventListener("click", function (event) {
      if (event.target === modal) {
          closeModal();
      }
  });
