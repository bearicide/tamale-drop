const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const nextDrop = document.getElementById("nextDrop");
if (nextDrop) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const now = new Date();
  const target = new Date(now);
  const friday = 5;
  const diff = (friday + 7 - now.getDay()) % 7 || 7;
  target.setDate(now.getDate() + diff);
  const month = target.toLocaleString(undefined, { month: "short" });
  nextDrop.textContent = `${days[target.getDay()]}, ${month} ${target.getDate()} pickup • Limited dozens`;
}
