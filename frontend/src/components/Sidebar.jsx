import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px 12px",
    marginBottom: "6px",
    borderRadius: "8px",
    transition: "0.2s",
  };

  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🚗 THAI-KORKORT-AI</h2>

      <hr />

      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...menuStyle,
          background: isActive ? "#2563eb" : "transparent",
        })}
      >
        🏠 Dashboard
      </NavLink>

      <NavLink
        to="/knowledge"
        style={({ isActive }) => ({
          ...menuStyle,
          background: isActive ? "#2563eb" : "transparent",
        })}
      >
        📚 Knowledge
      </NavLink>

      <NavLink
        to="/roadsigns"
        style={({ isActive }) => ({
          ...menuStyle,
          background: isActive ? "#2563eb" : "transparent",
        })}
      >
        🚧 Road Signs
      </NavLink>

      <NavLink
        to="/quiz"
        style={({ isActive }) => ({
          ...menuStyle,
          background: isActive ? "#2563eb" : "transparent",
        })}
      >
        📝 Quiz
      </NavLink>

      <a style={menuStyle}>🤖 AI Tutor</a>
      <a style={menuStyle}>⭐ Favorites</a>
      <a style={menuStyle}>⚙ Settings</a>
    </div>
  );
}

export default Sidebar;