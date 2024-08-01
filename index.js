function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const now = new Date().toLocaleTimeString('en-US', options);
    document.getElementById('current-time').textContent = now;
}

setInterval(updateTime, 1000);
updateTime();
