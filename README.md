# Shapino

Shapino is a full-stack online shop with a React storefront and Laravel API. It brings product discovery, account access, shopping cart features, and product discussions together in one application.

## About the project

The storefront lets shoppers search the product catalog, browse categories, filter and page through results, open product details, manage a cart, and sign in or register. Product pages also support comments and replies. The Laravel API serves the catalog and category data and provides authenticated account, cart, and comment operations.

The frontend uses React, Vite, React Router, Redux Toolkit, and TanStack Query. The backend uses Laravel and Sanctum for API authentication.

## Project layout

- `frontend/` — React 19 storefront built with Vite
- `backend/` — Laravel 12 API built with PHP 8.2 or newer

## Run locally

Start the backend first. Install PHP dependencies, create `backend/.env` from `backend/.env.example`, and configure its database connection. Then run:

```bash
cd backend
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

In a second terminal, start the storefront:

```bash
cd frontend
npm install
npm run dev
```

The frontend currently sends API requests to `http://localhost:8000/api`; the Laravel development server uses that address by default. Vite prints the storefront address when it starts.

## Useful commands

- Backend tests: `cd backend && php artisan test`
- Frontend production build: `cd frontend && npm run build`
- Frontend lint: `cd frontend && npm run lint`
