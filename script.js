document.addEventListener('DOMContentLoaded', () => {

  // ===== TEMA DARK =====
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  }

  window.toggleTheme = toggleTheme; // deixa acessível no HTML

  // ===== MENU MOBILE =====
  const navbar = document.getElementById("navbar");
  const navLink = document.getElementById("navLink");
  const mobileMenu = document.getElementById("mobileMenu");

  window.openMenu = function () {
    if (mobileMenu) mobileMenu.style.transform = 'translateX(-16rem)';
  };

  window.closeMenu = function () {
    if (mobileMenu) mobileMenu.style.transform = 'translateX(0)';
  };

  // ===== SCROLL NAVBAR =====
  if (navbar && navLink) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
        navLink.classList.remove(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/30',
          'dark:bg-transparent'
        );
      } else {
        navbar.classList.remove(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
        navLink.classList.add(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/30',
          'dark:bg-transparent'
        );
      }
    });
  }

  // ===== FORMULÁRIO WHATSAPP =====
  const form = document.getElementById("contato");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome")?.value;
      const email = document.getElementById("email")?.value;
      const mensagem = document.getElementById("mensagem")?.value;

      if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos.");
        return;
      }

      const texto = `Olá, meu nome é ${nome}.
Meu e-mail é ${email}.
assunto: ${mensagem}`;

      const telefone = "5584987910714";
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

      window.open(url, "_blank");
      form.reset();
    });
  }

});
