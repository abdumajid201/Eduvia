# Serverga joylash

Loyiha frontend va Express API'ni bitta Node serveridan beradi. Ishlab chiqarish serverida Node.js 22 yoki Docker kerak.

## Docker bilan

1. Serverga loyihani olib boring va loyiha papkasida `.env.example` faylidan `.env` yarating.
2. Domen boshqa manzilda frontend sifatida ishlasa, `.env` ichidagi `CORS_ORIGINS` ga aniq `https://...` originlarni vergul bilan kiriting. Frontend va API bir domen orqali berilsa, bo'sh qoldiring.
3. Ishga tushiring:

   ```sh
   docker compose up -d --build
   ```

4. Server sog'ligini `https://domeningiz/api/health` orqali tekshiring. Reverse proxy yoki hosting `PORT` portiga trafik yuborishi va HTTPS ta'minlashi kerak.

Natijalar Docker volume (`eduvia-data`) ichidagi `/data/results.json` faylida saqlanadi. Server/container yangilanganda volume'ni saqlang; volume o'chirilsa, test tarixi ham o'chadi. Backup uchun volume tarkibini muntazam nusxalang.

## Node.js bilan

```sh
npm ci
npm run build
NODE_ENV=production RESULTS_FILE=/doimiy-disk/results.json npm start
```

Hosting `PORT` muhit o'zgaruvchisini bersa, Express shu portda tinglaydi. `dist` build papkasi va `server` papkasi birga joylashtirilishi kerak. Natijalar fayli uchun doimiy yoziladigan disk yo'lini `RESULTS_FILE` orqali bering.

## Eslatma

Hozirgi tizim natija tarixini foydalanuvchi kiritgan ism bilan bog'laydi, parol yoki akkaunt bilan emas. Bu shaxsiy natijalarni himoya qilmaydi va katta hajmdagi parallel yozuvlar uchun JSON fayl ma'lumotlar bazasi o'rnini bosa olmaydi. Ommaviy production foydalanishdan oldin autentifikatsiya va PostgreSQL kabi ma'lumotlar bazasiga o'tish kerak.
