function checkMoney() {
    const result = document.getElementById("result");
    const random = Math.random();

    if (random > 0.5) {
        result.textContent = "✅ النقود أصلية";
        result.style.color = "green";
    } else {
        result.textContent = "❌ النقود مزيفة";
        result.style.color = "red";
    }
}