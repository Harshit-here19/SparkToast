const NotificationModule = (function () {
  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    document.body.appendChild(container);
  }

  function createNotification(heading, message, options = {}) {
    const { type = 'info', duration = 4000, sound = null } = options;

    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.innerHTML = `
      <div class="heading">${heading}</div>
      <div class="message">${message}</div>
      <span class="close-btn">&times;</span>
      <div class="progress"></div>
    `;

    if (sound) {
      const audio = new Audio(sound);
      audio.play().catch(e => console.warn('Sound failed to play:', e));
    }

    notif.querySelector('.close-btn').addEventListener('click', () => hideNotification(notif));
    container.appendChild(notif);

    setTimeout(() => notif.classList.add('show'), 50);

    // Animate progress bar
    const progress = notif.querySelector('.progress');
    progress.style.transition = `width ${duration}ms linear`;
    setTimeout(() => progress.style.width = '100%', 50);

    // Auto-hide
    setTimeout(() => hideNotification(notif), duration);
  }

  function hideNotification(notif) {
    notif.classList.remove('show');
    setTimeout(() => {
      if (notif.parentNode) notif.parentNode.removeChild(notif);
    }, 400);
  }

  return {
    notify: createNotification
  };
})();