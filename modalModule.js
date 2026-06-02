const ModalModule = (function () {
  // --- 1. CSS Injection ---
  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 10, 16, 0.75);
      backdrop-filter: blur(4px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      font-family: 'JetBrains Mono', monospace;
    }

    .modal-overlay.show {
      opacity: 1;
    }

    .modal-box {
      background-color: #1a1a28;
      border: 1px solid #2c2c3e;
      border-radius: 14px;
      padding: 28px;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 15px rgba(0, 255, 195, 0.1);
      transform: scale(0.9) translateY(10px);
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-sizing: border-box;
    }

    .modal-overlay.show .modal-box {
      transform: scale(1) translateY(0);
    }

    .modal-box .modal-title {
      font-size: 18px;
      font-weight: 700;
      color: #f0f0f0;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      text-shadow: 0 0 3px rgba(0, 255, 195, 0.4);
    }

    .modal-box .modal-message {
      font-size: 14px;
      line-height: 1.5;
      color: #c0c0c0;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .modal-box .modal-input-field {
      width: 100%;
      background: #11111e;
      border: 1px solid #33334c;
      border-radius: 8px;
      color: #ffffff;
      padding: 10px 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
      margin-bottom: 24px;
      transition: border-color 0.2s;
    }

    .modal-box .modal-input-field:focus {
      border-color: #00ffc3;
    }

    .modal-box .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    .modal-box .modal-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
    }

    /* Cancel Button Styles */
    .modal-box .modal-btn.cancel {
      background: #252538;
      color: #a0a0b0;
    }
    .modal-box .modal-btn.cancel:hover {
      background: #2e2e45;
      color: #ffffff;
    }

    /* Confirm / Submit Styles */
    .modal-box .modal-btn.confirm {
      background: #00ffc3;
      color: #1a1a28;
    }
    .modal-box .modal-btn.confirm:hover {
      background: #00a896;
    }

    /* Destructive Action Override (e.g., Delete) */
    .modal-box .modal-btn.confirm.destructive {
      background: #ff3b30;
      color: #ffffff;
    }
    .modal-box .modal-btn.confirm.destructive:hover {
      background: #d32f2f;
    }
  `;
  document.head.appendChild(style);

  /**
   * Generates and mounts the modal wrapper framework interface
   */
  function showModal(title, message, options = {}) {
    return new Promise((resolve) => {
      const {
        type = 'confirm', // 'confirm' or 'prompt'
        placeholder = 'Enter value...',
        confirmText = 'Confirm',
        cancelText = 'Cancel',
        isDestructive = false
      } = options;

      // 1. Structural Overlay Setup
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';

      // 2. Structural Inner Block Setup
      let inputHtml = '';
      if (type === 'prompt') {
        inputHtml = `<input type="text" class="modal-input-field" placeholder="${placeholder}" autocomplete="off">`;
      }

      overlay.innerHTML = `
        <div class="modal-box">
          <div class="modal-title">${title}</div>
          <div class="modal-message">${message}</div>
          ${inputHtml}
          <div class="modal-actions">
            <button class="modal-btn cancel">${cancelText}</button>
            <button class="modal-btn confirm ${isDestructive ? 'destructive' : ''}">${confirmText}</button>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      // Trigger animation frame updates
      setTimeout(() => overlay.classList.add('show'), 10);

      // DOM Node Selectors
      const confirmBtn = overlay.querySelector('.modal-btn.confirm');
      const cancelBtn = overlay.querySelector('.modal-btn.cancel');
      const inputField = overlay.querySelector('.modal-input-field');

      if (type === 'prompt' && inputField) {
        setTimeout(() => inputField.focus(), 150);
      }

      // Cleanup & Dismiss Function
      const closeModal = (resultValue) => {
        overlay.classList.remove('show');
        setTimeout(() => {
          overlay.remove();
          resolve(resultValue); // Returns result to the async chain
        }, 300);
      };

      // Event Triggers Hooking
      confirmBtn.addEventListener('click', () => {
        if (type === 'prompt') {
          closeModal(inputField.value);
        } else {
          closeModal(true); // Confirmation passes explicit true status back
        }
      });

      cancelBtn.addEventListener('click', () => {
        closeModal(type === 'prompt' ? null : false);
      });

      // Close modal on click outside modal-box container block
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(type === 'prompt' ? null : false);
      });

      // Capture Enter Key Submission
      if (inputField) {
        inputField.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') confirmBtn.click();
        });
      }
    });
  }

  return {
    open: showModal
  };
})();