import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import { getRules } from "../services/api";

function Dashboard() {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    getRules()
      .then((data) => setRules(data.data))
      .catch(console.error);
  }, []);

  const categories = new Set(
    rules.map((rule) => rule.category)
  ).size;

  return (
    <Layout>
      <div className="container">
        <h1>🚗 THAI-KORKORT-AI</h1>

        <p
          style={{
            color: "#888",
            marginBottom: "30px",
          }}
        >
          ระบบเรียนรู้กฎจราจรสวีเดนด้วย AI
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <StatsCard
            title="Rules"
            value={rules.length}
          />

          <StatsCard
            title="Categories"
            value={categories}
          />
        </div>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            padding: "25px",
          }}
        >
          <h2>📊 Dashboard</h2>

          <p>จำนวนกฎทั้งหมด : {rules.length}</p>

          <p>หมวดหมู่ : {categories}</p>

          <p>
            ใช้เมนูด้านซ้ายเพื่อเข้าไปยัง
            Knowledge, Quiz และ AI Tutor
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;