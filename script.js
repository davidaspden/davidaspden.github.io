setInterval(() => {
  const seconds = new Date().getSeconds();
  document.documentElement.style.setProperty('--mess', seconds);
}, 1000);