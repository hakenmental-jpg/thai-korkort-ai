import { NavLink } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";

const menuItems = [
  { text: "Dashboard", icon: "🏠", path: "/" },
  { text: "Knowledge", icon: "📚", path: "/knowledge" },
  { text: "Road Signs", icon: "🚧", path: "/roadsigns" },
  { text: "Quiz", icon: "📝", path: "/quiz" },
  { text: "AI Tutor", icon: "🤖", path: "/ai" },
  { text: "Favorites", icon: "⭐", path: "/favorites" },
  { text: "Settings", icon: "⚙", path: "/settings" },
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: 230,
        bgcolor: "#111827",
        color: "white",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 2,
        }}
      >
        🚗 THAI-KORKORT-AI
      </Typography>

      <Divider sx={{ bgcolor: "#374151", mb: 2 }} />

      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            display: "block",
            padding: "12px 14px",
            marginBottom: "8px",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
            background: isActive ? "#2563eb" : "transparent",
            transition: "0.2s",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          {item.icon} {item.text}
        </NavLink>
      ))}
    </Box>
  );
}

export default Sidebar;