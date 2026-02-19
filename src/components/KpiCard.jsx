export default function KpiCard({ label, value, helper }) {
  return (
    <article className="kpi-card">
      <p>{label}</p>
      <h3>{value}</h3>
      <small>{helper}</small>
    </article>
  );
}
