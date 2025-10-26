"use strict";

function unlockBox() {
  var box = document.getElementById('unlockBox');
  if (!box) return;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth' });
}

function copyWallet() {
  const addrEl = document.getElementById('walletAddress');
  const addr = addrEl ? addrEl.textContent.trim() : '';
  if (!addr || addr.includes('REPLACE_WITH')) {
    alert('Please replace with your real TRC-20 USDT address.');
    return;
  }

  // try navigator.clipboard first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(addr).then(() => {
      const s = document.getElementById('copyStatus');
      if (s) {
        s.style.display = 'block';
        setTimeout(() => (s.style.display = 'none'), 2200);
      }
    }, () => {
      fallbackCopy(addr);
    });
  } else {
    fallbackCopy(addr);
  }
}

function copyTelegram() {
  const username = '@Isaabelllaaa';
  // try navigator.clipboard first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(username).then(() => {
      showCopyMsg();
    }, () => {
      fallbackCopy(username);
    });
  } else {
    fallbackCopy(username);
  }
}

function fallbackCopy(text) {
  // older fallback method
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showCopyMsg();
  } catch (e) {
    alert('Copy failed — please copy ' + text + ' manually.');
  } finally {
    ta.remove();
  }
}

function showCopyMsg() {
  const el = document.getElementById('tgCopyMsg');
  if (!el) return;
  el.style.opacity = 1;
  el.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    el.style.opacity = 0;
    el.setAttribute('aria-hidden', 'true');
  }, 1600);
}

// Optional: could add small interactive effects later
console.log("Telegram contact card loaded!");"use strict";

function unlockBox() {
  var box = document.getElementById('unlockBox');
  if (!box) return;
  box.style.display = 'block';
  box.scrollIntoView({ behavior: 'smooth' });
}

function copyWallet() {
  const addrEl = document.getElementById('walletAddress');
  const addr = addrEl ? addrEl.textContent.trim() : '';
  if (!addr || addr.includes('REPLACE_WITH')) {
    alert('Please replace with your real TRC-20 USDT address.');
    return;
  }

  // try navigator.clipboard first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(addr).then(() => {
      const s = document.getElementById('copyStatus');
      if (s) {
        s.style.display = 'block';
        setTimeout(() => (s.style.display = 'none'), 2200);
      }
    }, () => {
      fallbackCopy(addr);
    });
  } else {
    fallbackCopy(addr);
  }
}

function copyTelegram() {
  const username = '@Isaabelllaaa';
  // try navigator.clipboard first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(username).then(() => {
      showCopyMsg();
    }, () => {
      fallbackCopy(username);
    });
  } else {
    fallbackCopy(username);
  }
}

function fallbackCopy(text) {
  // older fallback method
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showCopyMsg();
  } catch (e) {
    alert('Copy failed — please copy ' + text + ' manually.');
  } finally {
    ta.remove();
  }
}

function showCopyMsg() {
  const el = document.getElementById('tgCopyMsg');
  if (!el) return;
  el.style.opacity = 1;
  el.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    el.style.opacity = 0;
    el.setAttribute('aria-hidden', 'true');
  }, 1600);
}

// Optional: could add small interactive effects later
console.log("Telegram contact card loaded!");
