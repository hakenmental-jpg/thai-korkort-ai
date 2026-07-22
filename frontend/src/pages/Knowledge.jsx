import { useEffect, useState } from "react";
import RuleCard from "../components/RuleCard";
import { getRules } from "../services/api";

function Knowledge() {
  const [rules, setRules] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRules(search)
      .then((data) => setRules(data.data))
      .catch(console.error);
  }, [search]);

  return (
    <div>
      <h1>📚 Knowledge Base</h1>

      <input
        type="text"
        placeholder="ค้นหากฎ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      {rules.map((rule) => (
        <RuleCard
          key={rule.id}
          rule={rule}
        />
      ))}
    </div>
  );
}

export default Knowledge;