# Workout App (Express + MongoDB)

Jednoduchá Node/Express aplikace s Pug šablonami, MongoDB (Mongoose) a autentizací přes Passport Local. Backend obsluhuje registraci/přihlášení a malý katalog aktivit, který je dostupný jak v HTML šabloně, tak přes JSON API pro frontend.

## Rychlý start
- Požadavky: Node 18+ a přístup k instanci MongoDB.
- Instalace závislostí: `npm install`
- Proměnné prostředí:
  - `MONGO_URI` – connection string do MongoDB (výchozí je ukázkový Atlas URI v `app_server/models/db.js`).
  - `FRONTEND_ORIGIN` – povolený původ pro CORS (např. URL nasazeného frontendu). Default: `https://webframeworks-angluar.onrender.com`.
  - volitelné: `PORT` (jinak 3000) a `NODE_ENV`.
- Start serveru: `npm start` (spouští `node ./bin/www`).

## Struktura
- `app.js` – konfigurace Expressu, middleware, Passport a routery.
- `app_server/routes` – definice cest (HTML i JSON).
- `app_server/controllers` – logika pro jednotlivé route handlery.
- `app_server/models` – Mongoose modely `User` a `Location`.
- `views/` – Pug šablony (`layout`, `login`, `register`, `data_workout`).
- `public/` – statická aktiva.
- `seed.js` – jednoduchý skript pro naplnění kolekce `Location`.

## API a stránky
- `GET /` – základní layout.
- `GET /login` – stránka pro přihlášení.
- `POST /login` – JSON přihlášení, vrací `{ ok: true, user: <email> }` nebo chybu 401.
- `GET /register` / `POST /register` – registrace uživatele (vyžaduje jméno, příjmení, datum narození, gender, e‑mail, telefon a heslo).
- `GET /data_workout` – Pug šablona se seznamem aktivit.
- `GET /api/locations` – JSON seznam aktivit (name, rating, duration).

## Práce s databází
- Výchozí connection string je uložený v kódu; pro produkční použití nastav `MONGO_URI` na vlastní bezpečný URI.
- Seed dat: `node seed.js` (vymaže `Location` kolekci a vloží ukázková data).

## Bezpečnostní poznámky
- Heslo session je v kódu jako `keyboard cat`; pro produkci nastav bezpečný secret přes proměnné prostředí a zapni `secure` cookie, pokud běžíš na HTTPS.
- V repu je ukázkový MongoDB URI. Před nasazením ho nahraď vlastním a drž ho mimo git (env proměnné / secret manager).
