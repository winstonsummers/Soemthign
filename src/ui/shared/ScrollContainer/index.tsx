import React from "react";

interface IScrollContainer {
  direction?  : "horizontal" | "vertical" | "both" | "auto" | "hidden"
  height?     : string | number
  width?      : string | number
  className?  : string
  overlay?    : boolean
}

const ScrollContainer: React.FC<IScrollContainer> = ({
  children,
  className,
  direction = "auto",
  height = "auto",
  width = "auto",
  overlay = false
}) => {

  const scrollStyling: any = {
    scrollBehavior: "smooth",
    height,
    width,
  };

  const scrollValue = overlay ? 'overlay' : 'scroll'

  switch (direction) {
    case "horizontal":
      scrollStyling["overflowX"] = scrollValue;
      scrollStyling["overflowY"] = "hidden";
      break;
    case "vertical":
      scrollStyling["overflowY"] = scrollValue;
      scrollStyling["overflowX"] = "hidden";
      break;
    case "both":
      scrollStyling["overflow"] = scrollValue;
      break;
    case "auto":
      scrollStyling["overflow"] = "auto";
      break;
    case "hidden":
      scrollStyling["overflow"] = "hidden";
      break;
  }

  // TODO: add logic for scroll to bottom and such

  return (
    <div style={scrollStyling} className={className}>
      {children}
    </div>
  );
};

export default ScrollContainer;
