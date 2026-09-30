# Glow Mix Store — Link Bio

Página de links (link na bio) da **Glow Mix Store**. HTML/CSS/JS puro, responsivo (celular e desktop), sem build.

## Como editar

Todos os links ficam em **`config.js`**:

- **Grupo VIP no WhatsApp**: preencha `url` com o link do grupo (`https://chat.whatsapp.com/...`). Enquanto estiver vazio, o botão aparece como "Em breve".
- **Influenciadoras**: preencha `instagram` com o @ (sem o `@`). O link para o perfil é gerado automaticamente. Campos opcionais: `nome`, `foto` (ex.: `assets/influenciadoras/maria.jpg`) e `cupom` (botão de copiar cupom). Para adicionar mais, é só duplicar uma linha.

## Rodar localmente

```bash
python3 -m http.server 5500
# abra http://localhost:5500
```

## Deploy

Hospedado na Vercel como site estático (sem comando de build).
