function StatsCard({ title, value }) {
  return (
    <div
      style={{
        background: "#1f2937",
        borderRadius: "12px",
        padding: "20px",
        width: "180px",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color: "#00e5ff",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;