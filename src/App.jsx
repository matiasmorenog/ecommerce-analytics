import { useEffect, useState } from "react";
import KpiCard from "./components/KpiCard";
import FiltersBar from "./components/FiltersBar";
import { channels, orders, ranges, statuses } from "./data/orders";
import { useAnalytics } from "./hooks/useAnalytics";
import "./App.css";

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("theme-dark", darkMode);
    document.body.classList.toggle("theme-light", !darkMode);
  }, [darkMode]);

  const {
    query,
    setQuery,
    channel,
    setChannel,
    status,
    setStatus,
    days,
    setDays,
    filteredOrders,
    metrics,
    channelBreakdown,
    topProducts,
  } = useAnalytics(orders);

  return (
    <div className={`app-shell ${darkMode ? "dark" : ""}`}>
      <header className="hero">
        <div>
          <p className="eyebrow">E-commerce Analytics</p>
          <h1>Sales dashboard for conversion and revenue insights</h1>
          <p>
            React portfolio project showing KPI modeling, derived state, multi-filter workflows,
            and data storytelling for product decisions.
          </p>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </header>

      <section className="kpi-grid">
        <KpiCard label="Revenue" value={currency(metrics.revenue)} helper="Filtered total" />
        <KpiCard label="Orders" value={metrics.ordersCount} helper="Current selection" />
        <KpiCard label="Units Sold" value={metrics.units} helper="Shipped + delivered" />
        <KpiCard label="Avg Ticket" value={currency(metrics.avgTicket)} helper="Revenue / orders" />
        <KpiCard label="Refunded" value={metrics.refunded} helper="Potential churn signal" />
      </section>

      <FiltersBar
        query={query}
        onQuery={setQuery}
        channel={channel}
        onChannel={setChannel}
        channels={channels}
        status={status}
        onStatus={setStatus}
        statuses={statuses}
        days={days}
        onDays={setDays}
        ranges={ranges}
      />

      <section className="panels-grid">
        <article className="panel">
          <h2>Revenue by channel</h2>
          <ul className="rank-list">
            {channelBreakdown.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{currency(item.total)}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h2>Top products</h2>
          <ul className="rank-list">
            {topProducts.map((item) => (
              <li key={item.product}>
                <span>{item.product}</span>
                <strong>{currency(item.total)}</strong>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="table-panel">
        <div className="table-head">
          <h2>Recent orders</h2>
          <span>{filteredOrders.length} rows</span>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Channel</th>
                <th>Status</th>
                <th>Region</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>{order.channel}</td>
                  <td>
                    <span className={`status status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.region}</td>
                  <td>{currency(order.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
