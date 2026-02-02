let messageIndex = 0;

const messages = [
  "Are you sure?",
  "Really sure?",
  "Pookie please 🥺",
  "Don’t do this to me 😭",
  "I’ll cry..."
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}
