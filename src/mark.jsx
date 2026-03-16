function Mark({ children , backgroundColor}) {
  return (
    <span style={{textAlign:"center", backgroundColor: backgroundColor}}>
      {children}
    </span>
  );
}

export default Mark;