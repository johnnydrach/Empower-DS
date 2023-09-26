import { memo } from "react";
import GroupComponent from "./group-component";
import "./main-content-container.css";

const MainContentContainer = memo(() => {
  return (
    <main className="content-container">
      <img className="link-icon" alt="" src="/link.svg" />
      <div className="frame-parent">
        <div className="vector-wrapper">
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </div>
        <img className="link-icon1" alt="" src="/link.svg" />
      </div>
      <ol className="link-group">
        <a className="link">
          <ul className="button-types">Button Types</ul>
        </a>
        <a className="link">
          <ul className="button-types">Button Sizing</ul>
        </a>
        <a className="link">
          <ul className="button-types">Button States</ul>
        </a>
      </ol>
      <h2 className="heading">Table of contents</h2>
      <div className="container-placeholder">
        <div className="image-37-wrapper">
          <img className="image-37-icon" alt="" src="/image-37@2x.png" />
        </div>
        <div className="frame2">
          <div className="button-variantprimarypri-wrapper">
            <div className="button-variantprimarypri">
              <p className="button-variantprimarypri1">{`<Button variant={'primary'}>Primary</Button>`}</p>
            </div>
          </div>
        </div>
        <div className="frame3">
          <div className="frame-child" />
          <div className="button-variantprimarypri-container">
            <div className="button-variantprimarypri">
              <p className="button-variantprimarypri1">{`<Button variant={'primary'}>Primary</Button>`}</p>
            </div>
          </div>
        </div>
        <div className="image-38-wrapper">
          <img className="image-38-icon" alt="" src="/image-38@2x.png" />
        </div>
      </div>
      <h3 className="heading1">Button Types</h3>
      <GroupComponent
        groupDivCursor="pointer"
        groupDivBorder="none"
        groupDivPadding="0"
        groupDivBackgroundColor="transparent"
        groupDivPosition="absolute"
        groupDivTop="789px"
        groupDivLeft="946px"
      />
    </main>
  );
});

export default MainContentContainer;
