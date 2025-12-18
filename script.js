function platformChanged() {
  const platform = document.getElementById("platform").value;
  const currency = document.getElementById("currency");
  const oddsFormat = document.getElementById("oddsFormat");
  const affiliate = document.getElementById("affiliateLink");

  if (platform === "sportybet" || platform === "bet9ja" || platform === "betking") {
    currency.value = "NGN";
    oddsFormat.value = "decimal";
  }

  if (platform === "stake") {
    currency.value = "USD";
  }

  affiliate.innerText = "Bet on " + platform.charAt(0).toUpperCase() + platform.slice(1);
}

function oddsFormatChanged() {
  const format = document.getElementById("oddsFormat").value;
  const oddsInput = document.getElementById("odds");

  oddsInput.placeholder = format === "american"
    ? "e.g. +150 or -120"
    : "e.g. 2.50";
}

function calculate() {
  let stake = parseFloat(document.getElementById("stake").value);
  let odds = document.getElementById("odds").value;
  let format = document.getElementById("oddsFormat").value;

  if (!stake || !odds) {
    alert("Enter stake and odds");
    return;
  }

  odds = parseFloat(odds);

  if (format === "american") {
    odds = odds > 0 ? (odds / 100) + 1 : (100 / Math.abs(odds)) + 1;
  }

  const total = stake * odds;
  const profit = total - stake;
  const probability = (1 / odds) * 100;

  document.getElementById("profit").innerText = profit.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
  document.getElementById("probability").innerText = probability.toFixed(2) + "%";
}
