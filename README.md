# Weather Application

A complete school-project weather dashboard with a Node.js, Express, and TypeScript backend plus a React, Vite, TypeScript, and Tailwind CSS frontend.

## Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Add your OpenWeather API key to `server/.env`.

## Frontend

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

The frontend expects the backend at `http://localhost:9002/api/v1` by default.
