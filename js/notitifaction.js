function showNotification(message) {
  const notificationBar = document.getElementById("notification-bar");
  const notificationMessage = document.getElementById("notification-message");

  notificationMessage.innerHTML = message;
  notificationBar.style.display = "block";
}
function closeNotification() {
  const notificationBar = document.getElementById("notification-bar");
  notificationBar.style.display = "none";
}
showNotification("Mark Smith donated $50");
