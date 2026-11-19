# Eduvia

Eduvia — fanlar bo'yicha test ishlash, natijani ko'rish va ingliz tilidagi Reading, Writing, Listening hamda Speaking ko'nikmalarini mashq qilish platformasi.

## Ishga tushirish

Talablar: Node.js 22 yoki undan yangi versiya.

```bash
npm ci
npm run dev
```

Frontend va API lokal ravishda birga ishga tushadi. Vite `http://localhost:5173`, API esa `http://localhost:3001` manzilida ishlaydi.

## Production build

```bash
npm ci
npm run build
npm start
```

Production server frontendning `dist` papkasini va Express API'ni bir manzildan beradi. Health-check: `/api/health`.

Docker orqali joylash va doimiy natijalar diskini sozlash bo'yicha ko'rsatma: [DEPLOY.md](DEPLOY.md).

## Eslatmalar

- Test savollari serverdagi `server/data/subjects/` papkasida saqlanadi.
- Test natijalari lokalda `server/data/results.json` fayliga yoziladi. Bu fayl GitHub'ga qo'shilmaydi.
- Ingliz tilidagi listening mashqi brauzerning matnni ovozga aylantirish imkoniyatidan foydalanadi. Speaking yozuvi hozircha joriy brauzer sessiyasida qoladi.
- `.env.example` sozlamalar namunasidir. Maxfiy qiymatlarni `.env` faylida saqlang; `.env` Git'ga qo'shilmaydi.

## Texnologiyalar

React, TypeScript, Vite, Tailwind CSS va Express.
