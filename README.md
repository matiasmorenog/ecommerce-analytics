# E-commerce Analytics

E-commerce Analytics is a sales dashboard project focused on KPI tracking and decision support. It demonstrates React data modeling, derived metrics, filtering workflows, and dashboard UX.

## Features

- KPI dashboard: revenue, orders, units sold, average ticket, refunded orders
- Filter by channel (`Web`, `Mobile`, `Marketplace`)
- Filter by status (`Delivered`, `Shipped`, `Refunded`)
- Date range selector (`7/14/30 days`, `All time`)
- Search by order id, customer, or product
- Revenue breakdown by channel
- Top products by revenue
- Orders table with status badges

## Live Demo

[Open E-commerce Analytics](https://mmoreno-ecommerce-analytics.vercel.app/)

## Tech Stack

- React
- Vite
- Custom CSS (responsive dashboard layout)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Roadmap

- Connect to real API data source
- Add tests with Vitest + Testing Library
- Add CI workflow for test/build
