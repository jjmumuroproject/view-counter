// Get today’s date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Unique namespace and key for today's count
const namespace = "navya-special-v1"; // Feel free to change it
const key = `visits_${today}`;

// Target element
const countDisplay = document.getElementById("daily-count");

// Fetch and increment count using CountAPI
fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not OK");
    return res.json();
  })
  .then((data) => {
    countDisplay.textContent = data.value;
  })
  .catch((error) => {
    console.error("CountAPI Error:", error);
    countDisplay.textContent = "Error";
  });
