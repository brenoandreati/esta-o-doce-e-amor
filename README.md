# Doce & Amor — Estações Gourmet

Catálogo das estações gourmet da Doce & Amor. Site estático (HTML, CSS e JS puros), sem build.

## Estrutura

```
index.html              página única
assets/css/styles.css   estilos (cores da marca em :root)
assets/js/main.js       WhatsApp, destaque da estação na barra, animações
assets/brand/           logotipo, ícone, selo e carrinho em SVG (magenta e creme)
assets/img/estacoes/    fotos das estações (quadradas, exibidas em círculo)
assets/img/sobre/       foto da seção "Quem somos"
assets/fonts/           Fraunces e Montserrat (licença OFL)
```

## Trocar fotos

As fotos atuais foram recortadas de capturas de tela. Para trocar, substitua o arquivo mantendo o mesmo nome:

- Estações: `assets/img/estacoes/<nome>.webp` — imagem quadrada, de preferência com 600×600 px ou mais.
- Brigadeiro: `assets/img/estacoes/brigadeiro.webp` — vertical, proporção aproximada de 3:4.
- Quem somos: `assets/img/sobre/thainara.webp` — vertical, proporção aproximada de 3:4.

## WhatsApp

O número fica em `assets/js/main.js` (`WHATSAPP`) e nos links `https://wa.me/5527995054570` do `index.html`.

## Publicar

Na Netlify, arraste a pasta do projeto ou conecte este repositório (o `netlify.toml` já publica a raiz).
Depois de ter o domínio final, troque `assets/og-image.png` na tag `og:image` pela URL completa (ex.: `https://seudominio.com/assets/og-image.png`) para a prévia aparecer no WhatsApp e no Instagram.
