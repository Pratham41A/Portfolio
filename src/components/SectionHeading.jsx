function SectionHeading({ title, id }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default SectionHeading;
