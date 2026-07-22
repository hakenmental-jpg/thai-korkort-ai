import app from "./app.js";
import { config } from "./config/index.js";

app.listen(config.port, () => {
  console.log(
    `🚀 THAI-KORKORT-AI Backend running on port ${config.port}`
  );
});