import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import RoadSignCard from "../components/RoadSignCard";

import { getSigns } from "../services/signApi";

function RoadSigns() {
  const [signs, setSigns] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getSigns(search)
      .then((data) => setSigns(data.data))
      .catch(console.error);
  }, [search]);

  return (
    <Layout>
      <div className="container">
        <h1>🚧 Road Signs</h1>

        <p
          style={{
            color: "#888",
            marginBottom: "20px",
          }}
        >
          ฐานข้อมูลป้ายจราจรประเทศสวีเดน
        </p>

        <input
          className="search"
          placeholder="ค้นหาป้ายจราจร..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p
          style={{
            margin: "20px 0",
            color: "#bbb",
          }}
        >
          ทั้งหมด {signs.length} ป้าย
        </p>

        {signs.map((sign) => (
          <RoadSignCard
            key={sign.id}
            sign={sign}
          />
        ))}
      </div>
    </Layout>
  );
}

export default RoadSigns;