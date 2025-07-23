import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>
          Built with <span>React</span>, <span>Vite</span>, and <span>SCSS</span>. Designed & developed by <strong>Mwafak (Mo) Arbash</strong>.
        </p>
        <small>© {new Date().getFullYear()} All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
