const slides = [
  "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/camaelasticarosa.png",
  "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/futeboldesabao.png",
  "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/piscinadebolinha.png",
  "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/tobagan.png",
  "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/toto.png"
]
```

---

### 4. Prompt para Claude Code

Copie e cole este prompt no Claude Code:
```
Crie uma landing page para a empresa "Pipicos Festas" - locação de brinquedos e recreação infantil.

## REQUISITOS TÉCNICOS:
- React + Tailwind CSS
- Responsivo (mobile-first)
- Slider automático no hero (5 segundos por slide)

## ESTRUTURA:

### Header fixo:
- Logo à esquerda: https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/logo.png
- Botão WhatsApp à direita (verde #25D366)

### Hero Section:
- Slider fullscreen com as 5 imagens abaixo (transição suave, autoplay)
- Overlay escuro semi-transparente para legibilidade
- Título: "Transforme sua festa em uma aventura inesquecível!"
- Subtítulo: "Locação de brinquedos infláveis e recreação para festas infantis"
- Botão CTA grande: "Solicitar Orçamento" → abre WhatsApp
- Indicadores de slide (dots) na parte inferior

### Imagens do slider:
1. https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/camaelasticarosa.png
2. https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/futeboldesabao.png
3. https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/piscinadebolinha.png
4. https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/tobagan.png
5. https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/toto.png

### Link do WhatsApp:
https://wa.me/55SEUNUMERO?text=Olá! Gostaria de solicitar um orçamento para locação de brinquedos.

## ESTILO VISUAL:
- Paleta de cores alegre e festiva (amarelo, rosa, azul, verde)
- Tipografia divertida mas legível
- Animações sutis nos elementos
- Visual que transmita diversão e segurança para crianças
```

---

### 5. Informações que Você Precisa Definir

Antes de executar, defina:

| Item | Exemplo | Seu valor |
|------|---------|-----------|
| Número WhatsApp | 5511999999999 | __________ |
| Cidade/Região | São Paulo - SP | __________ |
| Slogan (opcional) | "Diversão garantida!" | __________ |
| Instagram | @pipicosfestas | __________ |

---

### 6. Funcionalidades do Slider

O slider deve ter:
- ✅ Autoplay (5 segundos por slide)
- ✅ Transição suave (fade ou slide)
- ✅ Indicadores (dots) clicáveis
- ✅ Navegação por setas (opcional)
- ✅ Pause no hover (opcional)
- ✅ Touch/swipe no mobile

---

### 7. Checklist de Desenvolvimento
```
[ ] Criar projeto React
[ ] Configurar Tailwind
[ ] Implementar Header com logo
[ ] Criar componente Slider
[ ] Adicionar as 5 imagens
[ ] Implementar autoplay
[ ] Criar overlay e textos do hero
[ ] Configurar botão WhatsApp
[ ] Testar responsividade
[ ] Otimizar imagens (se necessário)
[ ] Deploy (Vercel/Netlify)
