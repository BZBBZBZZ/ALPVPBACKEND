# ALPVP Backend

Backend API untuk aplikasi quiz makanan/ingredient. Project ini dibangun dengan Express, TypeScript, Prisma, dan PostgreSQL.

## Fitur Utama

- Authentication register, login, dan profile `/auth/me`
- Data foods: list dan detail
- Quiz: start, submit jawaban, ambil soal by id, hapus soal
- Leaderboard user
- Seeder soal quiz via API atau Prisma seed

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod
- JWT
- bcrypt

## Prasyarat

- Node.js 18+ atau 20+
- PostgreSQL
- npm

## Instalasi

1. Clone repository ini.

2. Install dependency.

```bash
npm install
```

3. Buat file `.env` di root project.

```env
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/NAMA_DATABASE"
JWT_SECRET_KEY="secret_key_kamu"
```

4. Jalankan migration Prisma.

```bash
npx prisma migrate dev
```

5. Generate Prisma Client.

```bash
npx prisma generate
```

6. Jalankan seed data jika dibutuhkan.

```bash
npx prisma db seed
```

## Menjalankan Project

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Script Tersedia

- `npm run dev` - menjalankan server dengan nodemon
- `npm run build` - compile TypeScript ke folder `dist`
- `npm start` - menjalankan hasil build dari `dist/main.js`

## Struktur Database

Prisma schema berisi 3 model utama:

- `Food`
- `Question`
- `User`

Database yang dipakai adalah PostgreSQL, dan Prisma client digenerate ke `src/generated/prisma`.

## Endpoint API

Base path: `/api`

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me` dengan header `Authorization: Bearer <token>`

### Foods

- `GET /foods`
- `GET /foods/:foodId`

### Quiz

- `POST /questions`
- `GET /questions/:id`
- `DELETE /questions/:id`
- `GET /quiz/start`
- `POST /quiz/submit`

### Leaderboard

- `GET /leaderboard?limit=10`

## Contoh Singkat Request

### Register

```http
POST /api/auth/register
Content-Type: application/json
```

```json
{
  "username": "nicho",
  "password": "password123"
}
```

### Login

```json
{
  "username": "nicho",
  "password": "password123"
}
```

### Submit Quiz

```json
{
  "username": "nicho",
  "answers": [
    {
      "question_id": 1,
      "answer": "a"
    }
  ]
}
```

## Catatan

- Endpoint `/questions` dipakai untuk input soal quiz.
- Auth middleware memakai token JWT di header `Authorization`.
- Jika ingin reset database, jalankan migration Prisma sesuai kebutuhan project.