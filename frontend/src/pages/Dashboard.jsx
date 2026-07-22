import { useEffect, useState } from "react";

import RuleCard from "../components/RuleCard";
import StatsCard from "../components/StatsCard";
import { getRules } from "../services/api";

function Dashboard() {
  const [rules, setRules] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRules(search)
      .then((data) => setRules(data.data))
      .catch(console.error);
  }, [search]);

  const categories = new Set(rules.map((rule) => rule.category)).size;

  return (
    <div className="container">
      <h1>🚗 THAI-KORKORT-AI</h1>

      <p
        style={{
          color: "#888",
          marginBottom: "20px",
        }}
      >
        ระบบเรียนรู้กฎจราจรสวีเดนด้วย AI
      </p>

      <input
        className="search"
        placeholder="ค้นหากฎจราจร..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "25px 0",
          flexWrap: "wrap",
        }}
      >
        <StatsCard title="Rules" value={rules.length} />

        <StatsCard title="Categories" value={categories} />
      </div>

      {rules.map((rule) => (
        <RuleCard
          key={rule.id}
          rule={rule}
        />
      ))}
    </div>
  );
}

export default Dashboard;