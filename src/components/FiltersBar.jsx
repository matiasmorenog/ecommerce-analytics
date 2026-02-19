function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function FiltersBar({
  query,
  onQuery,
  channel,
  onChannel,
  channels,
  status,
  onStatus,
  statuses,
  days,
  onDays,
  ranges,
}) {
  return (
    <section className="filters-bar">
      <Field label="Search order or customer">
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="ORD-1001, Laura..."
        />
      </Field>

      <Field label="Channel">
        <select value={channel} onChange={(event) => onChannel(event.target.value)}>
          {channels.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Status">
        <select value={status} onChange={(event) => onStatus(event.target.value)}>
          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Range">
        <select value={days ?? "all"} onChange={(event) => onDays(event.target.value === "all" ? null : Number(event.target.value))}>
          {ranges.map((range) => (
            <option key={range.label} value={range.days ?? "all"}>
              {range.label}
            </option>
          ))}
        </select>
      </Field>
    </section>
  );
}
