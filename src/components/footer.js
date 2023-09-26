import { memo } from "react";
import "./footer.css";

const Footer = memo(() => {
  return (
    <footer className="frame4">
      <footer className="footer">
        <section className="footer-main-footer">
          <div className="frame5">
            <div className="footer-nav-left">
              <div className="previous">Previous</div>
              <div className="footer-placeholder-text">Button: Code</div>
            </div>
          </div>
          <div className="frame6">
            <div className="footer-nav-left">
              <div className="previous">Next</div>
              <div className="footer-placeholder-text">
                Components: Checkbox
              </div>
            </div>
          </div>
          <div className="footer-main-footer-child" />
        </section>
        <section className="footer-subfooter">
          <small className="placeholder-text">Placeholder here</small>
        </section>
      </footer>
    </footer>
  );
});

export default Footer;
