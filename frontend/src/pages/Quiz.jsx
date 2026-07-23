import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getQuestions } from "../services/quizApi";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getQuestions(search)
      .then((data) => setQuestions(data.data))
      .catch(console.error);
  }, [search]);

  return (
    <Layout>
      <div className="container">
        <h1>📝 Quiz</h1>

        <p
          style={{
            color: "#888",
            marginBottom: "20px",
          }}
        >
          แบบทดสอบใบขับขี่สวีเดน
        </p>

        <input
          className="search"
          placeholder="ค้นหาคำถาม..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p
          style={{
            margin: "20px 0",
            color: "#bbb",
          }}
        >
          ทั้งหมด {questions.length} คำถาม
        </p>

        {questions.map((question) => (
          <div
            key={question.id}
            className="card"
          >
            <h3>{question.question_th}</h3>

            <p
              style={{
                color: "#888",
                marginBottom: "15px",
              }}
            >
              {question.question_sv}
            </p>

            {question.choices?.map((choice, index) => (
              <button
                key={index}
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                  padding: "10px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {choice}
              </button>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Quiz;