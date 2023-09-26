import { memo } from "react";
import "./button-header.css";

const ButtonHeader = memo(() => {
  return (
    <header className="header">
      <div className="header-frame">
        <header className="header1">
          <div className="frame1">
            <div className="h1-parent">
              <h1 className="h1">Buttons</h1>
              <p className="h1-secondary-text">
                Buttons are used to initialize an action. Button labels express
                what action will occur when the user interacts with it.
              </p>
            </div>
          </div>
        </header>
      </div>
      <nav className="naviation">
        <div className="ulpagetabs-module-list-xlqx">
          <button className="usage-button">
            <a className="usage-link">Usage</a>
          </button>
          <button className="style-button">
            <a className="usage-link">Style</a>
          </button>
          <button className="code-button">
            <a className="code-link">Code</a>
          </button>
          <button className="accessibility-button">
            <a className="usage-link">Accessibility</a>
          </button>
        </div>
      </nav>
    </header>
  );
});

export default ButtonHeader;
