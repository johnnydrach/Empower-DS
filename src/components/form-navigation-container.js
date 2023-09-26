import { memo } from "react";
import "./form-navigation-container.css";

const FormNavigationContainer = memo(() => {
  return (
    <nav className="left-navigation-container">
      <div className="div">
        <div className="all-about-eds-parent">
          <div className="all-about-eds">All about EDS</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="what-is-eds">What is EDS?</div>
        <div className="what-is-eds">Who uses EDS?</div>
      </div>
      <div className="div">
        <div className="all-about-eds-parent">
          <div className="all-about-eds">What’s happening?</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="what-is-eds">News</div>
        <div className="what-is-eds">Updates to the system</div>
      </div>
      <div className="div2">
        <div className="brand-parent">
          <div className="all-about-eds">Brand</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="lorem-ipsum">Lorem Ipsum</div>
      </div>
      <div className="left-navigation-container-child" />
      <div className="div2">
        <div className="brand-parent">
          <div className="all-about-eds">Playbook</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="lorem-ipsum">Process 1</div>
      </div>
      <div className="div2">
        <div className="brand-parent">
          <div className="all-about-eds">Design</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="lorem-ipsum">Get started</div>
      </div>
      <div className="div">
        <div className="all-about-eds-parent">
          <div className="all-about-eds">Developing</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="what-is-eds">Get started</div>
        <div className="what-is-eds">Frameworks</div>
        <div className="what-is-eds">Developer resources</div>
      </div>
      <div className="div">
        <div className="all-about-eds-parent">
          <div className="all-about-eds">Contributing</div>
          <img className="expand-more-icon" alt="" src="/expand-more.svg" />
        </div>
        <div className="what-is-eds">Overview</div>
        <div className="what-is-eds">Bugs and requests</div>
        <div className="what-is-eds">Documentation</div>
        <div className="what-is-eds">Components</div>
        <div className="what-is-eds">Icons</div>
        <div className="what-is-eds">Patterns</div>
        <div className="what-is-eds">Add Ons</div>
      </div>
      <div className="logo-container">
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      </div>
      <div className="nav-group">
        <div className="nav-heading-group">
          <div className="all-about-eds">Guidelines (Tokens)</div>
          <div className="expand-more">
            <img className="expand-more-icon7" alt="" src="/expand-more1.svg" />
          </div>
        </div>
        <a className="nav-item">Grid</a>
        <a className="nav-item">Accessibility</a>
        <a className="nav-item">Content</a>
        <a className="nav-item">Color</a>
        <a className="nav-item">UI icons</a>
        <a className="nav-item">Marketing icons</a>
        <a className="nav-item">Motion</a>
        <a className="nav-item">Spacing</a>
        <a className="nav-item">Typography</a>
        <div className="nav-divider" />
      </div>
    </nav>
  );
});

export default FormNavigationContainer;
