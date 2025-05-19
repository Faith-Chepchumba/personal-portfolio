function ProjectCard({ title, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      background: '#f9f9f9'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button disabled style={{ padding: '0.5rem 1rem', marginTop: '0.5rem' }}>
        View More (Coming Soon)
      </button>
    </div>
  );
}

export default ProjectCard;
