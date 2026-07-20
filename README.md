# Weather Application

A full-stack weather dashboard built with React, Vite, TypeScript, Tailwind CSS, Node.js, and Express. Search for a city to view current weather, key conditions, city suggestions, and a 5-day forecast powered by OpenWeather.

## Features

- Search weather by city name
- City autocomplete suggestions
- Current temperature, weather summary, and condition icon
- Weather highlights for feels-like temperature, humidity, pressure, and wind
- 5-day forecast cards
- Loading, empty, and error states
- TypeScript on both client and server

## Tech Stack

**Frontend:** React, Vite, TypeScript, Tailwind CSS, Axios, React Icons  
**Backend:** Node.js, Express, TypeScript, Axios, OpenWeather API

## Project Structure

```text
Weather_App/
├── client/   # React + Vite frontend
├── server/   # Express + TypeScript API
└── README.md
```

## Prerequisites

- Node.js
- npm
- OpenWeather API key

## Environment Variables

Create environment files from the provided examples:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Update `server/.env`:

```env
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key
```

Update `client/.env` so it points to the same backend port:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

If you prefer running the backend on `9002`, set `PORT=9002` in `server/.env` and keep the client URL as `http://localhost:9002/api/v1`.

## Getting Started

Install and run the backend:

```bash
cd server
npm install
npm run dev
```

In a second terminal, install and run the frontend:

```bash
cd client
npm install
npm run dev
```

Open the Vite URL shown in the frontend terminal, usually `http://localhost:5173`.

## API Routes

Health check:

```text
GET http://localhost:5000/health
```

Weather API base URL:

```text
http://localhost:5000/api/v1
```

Weather routes:

```text
GET /weather/current?city=London
GET /weather/forecast?city=London
GET /weather/search?city=Lon
```

## Build

Build the backend:

```bash
cd server
npm run build
```

Build the frontend:

```bash
cd client
npm run build
```

## Notes

- The backend requires a valid OpenWeather API key before weather requests will work.
- Keep the frontend `VITE_API_BASE_URL` and backend `PORT` aligned.
- The server returns weather data in metric units.
