export const healthCheck = (req, res) => {
  res.json({
    status: "OK",
    project: "THAI-KORKORT-AI",
    version: "2.0.0",
    message: "Backend is running 🚀"
  });
};