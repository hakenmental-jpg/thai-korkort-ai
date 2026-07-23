import { useEffect, useState } from "react";

import Layout from "../components/Layout";
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
    <Layout>
      <div className="container">
        <h1>📚 Knowledge</h1>

        <p
          style={{
            color: "#888",
            marginBottom: "20px",
          }}
        >
          คลังความรู้กฎจราจรสวีเดน
        </p>

        <input
          className="search"
          placeholder="ค้นหากฎจราจร..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p
          style={{
            margin: "20px 0",
            color: "#bbb",
          }}
        >
          ทั้งหมด {rules.length} กฎ
        </p>

        {rules.map((rule) => (
          <RuleCard
            key={rule.id}
            rule={rule}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Knowledge;