function RuleCard({ rule }) {
  return (
    <div className="card">
      <h3>{rule.name_sv || rule.id}</h3>

      <h4>{rule.name_th}</h4>

      <span className="category">{rule.category}</span>

      <p>{rule.description_th}</p>
    </div>
  );
}

export default RuleCard;