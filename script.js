setInterval(() => {
  const seconds = new Date().getSeconds();
  document.documentElement.style.setProperty('--mess', seconds*4);
}, 1000);