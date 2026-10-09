# Doce & Amor — Estações Gourmet

Catálogo das estações gourmet da Doce & Amor. Site estático (HTML, CSS e JS puros), sem build.

## Estrutura

```
public/                        tudo o que vai para o ar
public/index.html              página única
public/assets/css/styles.css   estilos (cores da marca em :root)
public/assets/js/main.js       WhatsApp, destaque da estação na barra, animações
public/assets/brand/           logotipo, ícone, selo e carrinho em SVG (magenta e creme)
public/assets/img/estacoes/    fotos das estações (quadradas, exibidas em círculo)
public/assets/img/sobre/       foto da seção "Quem somos"
public/assets/fonts/           Fraunces e Montserrat (licença OFL)
```

## Trocar fotos

As fotos atuais foram recortadas de capturas de tela. Para trocar, substitua o arquivo mantendo o mesmo nome:

- Estações: `public/assets/img/estacoes/<nome>.webp` — imagem quadrada, de preferência com 600×600 px ou mais.
- Brigadeiro: `public/assets/img/estacoes/brigadeiro.webp` — vertical, proporção aproximada de 3:4.
- Quem somos: `public/assets/img/sobre/thainara.webp` — vertical, proporção aproximada de 3:4.

## WhatsApp

O número fica em `public/assets/js/main.js` (`WHATSAPP`) e nos links `https://wa.me/5527995054570` do `public/index.html`.

## Publicar

No ar em **https://doceeamor.brenoandreati.workers.dev** (Cloudflare Worker `doceeamor`, só arquivos estáticos).

Para publicar uma nova versão:

```
npx wrangler deploy
```

O `wrangler.jsonc` publica só a pasta `public/`. Se ligar um domínio próprio, troque `og:url` e `og:image` no `public/index.html` pelo novo endereço, para a prévia continuar aparecendo no WhatsApp e no Instagram.
