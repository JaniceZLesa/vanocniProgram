// Nastavení správného hesla
const correctPassword = "míleDobbyIndianaJones";

// Funkce pro kontrolu hesla
function checkPassword() {
  const inputPassword = document.getElementById("password-input").value;

  if (inputPassword === correctPassword) {
    // Přesměrování na chráněnou stránku
    window.location.href = "video.html";
  } else {
    // Zobrazení chybové zprávy
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "ŠPATNĚ TY TRUHLÍKU, ZNOVU!";
  }
}

// Kliknutí na tlačítko
document.getElementById("submit-button").addEventListener("click", checkPassword);

// Potvrzení hesla klávesou Enter
document.getElementById("password-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Zabrání výchozímu chování formuláře
    checkPassword(); // Spuštění kontroly hesla
  }
});
