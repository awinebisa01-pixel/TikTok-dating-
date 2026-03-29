let selectedAmount = 3500;

function select(el, amount) {
  document.querySelectorAll(".coin").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  selectedAmount = amount;
}

function sendCoins() {
  let username = document.getElementById("username").value;
  let amount = document.getElementById("amount").value;

  document.getElementById("status").innerText =
    "Sent " + amount + " coins to " + username;
}
