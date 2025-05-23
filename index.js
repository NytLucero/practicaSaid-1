  function mostrarCarga(e) {
    e.preventDefault();

    document.getElementById('overlay').style.display = 'flex';

    const btn = document.getElementById('btnLogin');
    btn.disabled = true;
    btn.value = "Cargando...";

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 2000);
  }