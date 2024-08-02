import React from "react";

export const FlexContainer = ({
  children,
  display = "flex",
  alignItems = "center",
  justifyContent = "center",
  flexDirection = "row",
  flexFlow = "row nowrap",
  margin = "0",
  gap = "0",
  padding ="0",
  backgroundColor = "",
  ...props
}) => {
  const containerStyle = {
    display,
    alignItems,
    justifyContent,
    flexDirection,
    flexFlow,
    margin,
    gap,
    padding,
    backgroundColor,
    ...props.style,
  };

  return (
    <div style={containerStyle} {...props}>
      {children}
    </div>
  );
};
