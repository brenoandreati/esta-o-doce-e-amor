(() => {
  const WHATSAPP = '5527995054570';

  // Links do WhatsApp com mensagem pronta (sem JS, o link continua funcionando sem a mensagem).
  document.querySelectorAll('[data-wa]').forEach((link) => {
    const item = link.dataset.wa;
    const message = item
      ? `Olá! Vim pelo catálogo da Doce & Amor e tenho interesse em: ${item}.`
      : 'Olá! Vim pelo catálogo da Doce & Amor e quero montar as estações do meu evento.';
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Borda do header ao rolar + botão flutuante depois do topo.
  const header = document.querySelector('.site-header');
  const fab = document.querySelector('.fab');
  const hero = document.querySelector('.hero');
  const contact = document.querySelector('#contato');
  let contactVisible = false;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    const pastHero = hero ? y > hero.offsetHeight * 0.6 : y > 400;
    fab.classList.toggle('is-visible', pastHero && !contactVisible);
  };

  if (contact && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      contactVisible = entry.isIntersecting;
      onScroll();
    }).observe(contact);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Destaca a estação visível na barra de chips.
  const bar = document.querySelector('.chips-scroll');
  const chips = bar ? [...bar.querySelectorAll('a')] : [];
  const targets = chips
    .map((chip) => document.querySelector(chip.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    chips.forEach((chip) => {
      const active = chip.getAttribute('href') === `#${id}`;
      chip.classList.toggle('is-active', active);
      if (active) {
        chip.setAttribute('aria-current', 'true');
        const left = chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2;
        bar.scrollTo({ left, behavior: 'smooth' });
      } else {
        chip.removeAttribute('aria-current');
      }
    });
  };

  // Acima do catálogo, nenhuma estação fica destacada.
  const catalog = document.querySelector('.catalog');
  window.addEventListener('scroll', () => {
    if (!catalog || !bar.querySelector('.is-active')) return;
    if (catalog.getBoundingClientRect().top > window.innerHeight * 0.45) {
      chips.forEach((chip) => {
        chip.classList.remove('is-active');
        chip.removeAttribute('aria-current');
      });
      bar.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, { passive: true });

  if (targets.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach((t) => spy.observe(t));
  }

  // Revelar conteúdo ao rolar.
  const reveal = document.querySelectorAll('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveal.forEach((el) => io.observe(el));
  } else {
    reveal.forEach((el) => el.classList.add('is-in'));
  }
})();
