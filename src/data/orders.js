export const orders = [
  { id: "ORD-1001", date: "2026-02-16", channel: "Web", customer: "Laura M.", total: 129.9, units: 2, status: "Delivered", region: "LATAM", product: "Noise Canceling Headphones" },
  { id: "ORD-1002", date: "2026-02-16", channel: "Mobile", customer: "Kevin T.", total: 59.0, units: 1, status: "Delivered", region: "NA", product: "Portable Speaker" },
  { id: "ORD-1003", date: "2026-02-15", channel: "Marketplace", customer: "Sofia R.", total: 219.5, units: 3, status: "Shipped", region: "EU", product: "Smart Watch" },
  { id: "ORD-1004", date: "2026-02-14", channel: "Web", customer: "Daniel A.", total: 89.9, units: 1, status: "Delivered", region: "LATAM", product: "Mechanical Keyboard" },
  { id: "ORD-1005", date: "2026-02-13", channel: "Mobile", customer: "Marta C.", total: 39.5, units: 1, status: "Refunded", region: "NA", product: "Wireless Mouse" },
  { id: "ORD-1006", date: "2026-02-12", channel: "Web", customer: "Ethan K.", total: 149.0, units: 2, status: "Delivered", region: "EU", product: "Gaming Headset" },
  { id: "ORD-1007", date: "2026-02-11", channel: "Marketplace", customer: "Ana B.", total: 74.0, units: 1, status: "Shipped", region: "LATAM", product: "USB-C Dock" },
  { id: "ORD-1008", date: "2026-02-10", channel: "Web", customer: "Noah D.", total: 199.0, units: 2, status: "Delivered", region: "NA", product: "Monitor 24\"" },
  { id: "ORD-1009", date: "2026-02-09", channel: "Mobile", customer: "Olivia L.", total: 24.9, units: 1, status: "Delivered", region: "LATAM", product: "Laptop Stand" },
  { id: "ORD-1010", date: "2026-02-08", channel: "Marketplace", customer: "Tom W.", total: 310.0, units: 4, status: "Delivered", region: "EU", product: "Action Camera" },
  { id: "ORD-1011", date: "2026-02-07", channel: "Web", customer: "Camila S.", total: 54.9, units: 1, status: "Shipped", region: "LATAM", product: "Bluetooth Keyboard" },
  { id: "ORD-1012", date: "2026-02-06", channel: "Mobile", customer: "James H.", total: 120.0, units: 2, status: "Delivered", region: "NA", product: "Router AX3000" },
  { id: "ORD-1013", date: "2026-02-05", channel: "Web", customer: "Lucia P.", total: 470.0, units: 5, status: "Delivered", region: "EU", product: "4K Webcam" },
  { id: "ORD-1014", date: "2026-02-04", channel: "Marketplace", customer: "Diego N.", total: 34.9, units: 1, status: "Refunded", region: "LATAM", product: "Phone Tripod" },
  { id: "ORD-1015", date: "2026-02-03", channel: "Web", customer: "Emily G.", total: 89.0, units: 1, status: "Delivered", region: "NA", product: "Ergonomic Chair Mat" },
  { id: "ORD-1016", date: "2026-02-02", channel: "Mobile", customer: "Rafael V.", total: 68.0, units: 1, status: "Shipped", region: "LATAM", product: "Streaming Microphone" },
  { id: "ORD-1017", date: "2026-01-30", channel: "Web", customer: "Nina F.", total: 259.0, units: 3, status: "Delivered", region: "EU", product: "SSD 2TB" },
  { id: "ORD-1018", date: "2026-01-28", channel: "Marketplace", customer: "Paul J.", total: 119.9, units: 2, status: "Delivered", region: "NA", product: "WiFi Mesh Node" },
];

export const channels = ["All", "Web", "Mobile", "Marketplace"];
export const statuses = ["All", "Delivered", "Shipped", "Refunded"];
export const ranges = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 14 days", days: 14 },
  { label: "Last 30 days", days: 30 },
  { label: "All time", days: null },
];
