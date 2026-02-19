import { useMemo, useState } from "react";

function withinRange(date, days) {
  if (!days) {
    return true;
  }

  const now = new Date("2026-02-19T00:00:00Z");
  const orderDate = new Date(`${date}T00:00:00Z`);
  const diff = (now - orderDate) / (1000 * 60 * 60 * 24);
  return diff <= days;
}

export function useAnalytics(orders) {
  const [query, setQuery] = useState("");
  const [channel, setChannel] = useState("All");
  const [status, setStatus] = useState("All");
  const [days, setDays] = useState(14);

  const filteredOrders = useMemo(() => {
    const q = query.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesRange = withinRange(order.date, days);
      const matchesChannel = channel === "All" || order.channel === channel;
      const matchesStatus = status === "All" || order.status === status;
      const matchesQuery =
        q.length === 0 ||
        `${order.id} ${order.customer} ${order.product}`.toLowerCase().includes(q);

      return matchesRange && matchesChannel && matchesStatus && matchesQuery;
    });
  }, [orders, query, channel, status, days]);

  const metrics = useMemo(() => {
    const revenue = filteredOrders.reduce((acc, order) => acc + order.total, 0);
    const units = filteredOrders.reduce((acc, order) => acc + order.units, 0);
    const ordersCount = filteredOrders.length;
    const avgTicket = ordersCount === 0 ? 0 : revenue / ordersCount;
    const refunded = filteredOrders.filter((order) => order.status === "Refunded").length;

    return {
      revenue,
      units,
      ordersCount,
      avgTicket,
      refunded,
    };
  }, [filteredOrders]);

  const channelBreakdown = useMemo(() => {
    const countBy = filteredOrders.reduce((acc, order) => {
      acc[order.channel] = (acc[order.channel] || 0) + order.total;
      return acc;
    }, {});

    return Object.entries(countBy)
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);
  }, [filteredOrders]);

  const topProducts = useMemo(() => {
    const productRevenue = filteredOrders.reduce((acc, order) => {
      acc[order.product] = (acc[order.product] || 0) + order.total;
      return acc;
    }, {});

    return Object.entries(productRevenue)
      .map(([product, total]) => ({ product, total }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 5);
  }, [filteredOrders]);

  return {
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
  };
}
