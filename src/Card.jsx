
function Card({ titolo, immagine, colore }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${colore} 70%, #fff 100%)`,
      borderRadius: 18,
      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
      padding: 24,
      margin: 16,
      maxWidth: 260,
      display: 'inline-block',
      verticalAlign: 'top',
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      border: `3px solid ${colore}`
    }}>
      <img
        src={immagine}
        alt={titolo}
        style={{
          width: '100%',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          marginBottom: 12,
          background: '#fff'
        }}
      />
      <h2 style={{
        fontSize: 22,
        fontWeight: 800,
        margin: 0,
        letterSpacing: 1,
        textShadow: '1px 2px 8px rgba(0,0,0,0.18)'
      }}>{titolo}</h2>
    </div>
  );
}

export default Card