import { memo, useMemo } from "react";
import "./group-component.css";

const GroupComponent = memo(
  ({
    groupDivCursor,
    groupDivBorder,
    groupDivPadding,
    groupDivBackgroundColor,
    groupDivPosition,
    groupDivTop,
    groupDivLeft,
  }) => {
    const groupDivStyle = useMemo(() => {
      return {
        cursor: groupDivCursor,
        border: groupDivBorder,
        padding: groupDivPadding,
        backgroundColor: groupDivBackgroundColor,
        position: groupDivPosition,
        top: groupDivTop,
        left: groupDivLeft,
      };
    }, [
      groupDivCursor,
      groupDivBorder,
      groupDivPadding,
      groupDivBackgroundColor,
      groupDivPosition,
      groupDivTop,
      groupDivLeft,
    ]);

    return (
      <div className="rectangle-parent" style={groupDivStyle}>
        <div className="component-child" />
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
    );
  }
);

export default GroupComponent;
