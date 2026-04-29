const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('cf-submit');
const btnText = submitBtn?.querySelector('.btn-send-text');
const btnLoading = submitBtn?.querySelector('.btn-send-loading');
const statusEl = document.getElementById('cf-status');

if (submitBtn) {
  submitBtn.addEventListener('click', async () => {
    const name = document.getElementById('cf-name')?.value.trim();
    const email = document.getElementById('cf-email')?.value.trim();
    const subject = document.getElementById('cf-subject')?.value.trim();
    const message = document.getElementById('cf-message')?.value.trim();

    if (!name || !email || !message) {
      showStatus('⚠️ Nama, email, dan pesan wajib diisi!', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('⚠️ Format email tidak valid!', 'error');
      return;
    }

    setLoading(true);

    const hiddenSubject = document.getElementById('hidden-subject');
    if (hiddenSubject && subject) {
      hiddenSubject.value = subject + ' — Jayshifa Portfolio';
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (response.ok && data.success) {
        showStatus('✅ Pesan berhasil terkirim! Terima kasih 💖', 'success');
        form.reset();
      } else {
        showStatus('❌ Gagal mengirim. Pastikan access key sudah benar!', 'error');
        console.error('Web3Forms error:', data);
      }
    } catch (err) {
      showStatus('❌ Terjadi kesalahan koneksi. Coba lagi nanti.', 'error');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  });
}

function showStatus(msg, type) {
  if (statusEl) {
    statusEl.textContent = msg;
    statusEl.className = 'cf-status ' + type;
    setTimeout(() => {
      statusEl.className = 'cf-status';
      statusEl.textContent = '';
    }, 5000);
  }
}

function setLoading(loading) {
  if (!btnText || !btnLoading) return;
  submitBtn.disabled = loading;
  btnText.style.display = loading ? 'none' : 'inline-flex';
  btnLoading.style.display = loading ? 'inline-flex' : 'none';
}
