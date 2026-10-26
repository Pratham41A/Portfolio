function Footer({ name, onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-shell">
        <a className="brand footer-brand" href="#top" onClick={(event) => onNavigate(event, "top")} aria-label={`${name}, back to top`}>
          <span className="brand-mark"><img src="/Logo.png" alt="" /></span>
          <span>{name}</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
