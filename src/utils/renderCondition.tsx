import React, { Fragment } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RenderCondition = ({ children, condition }: any) => {
  if (!condition) return <Fragment />;
  return children;
};

export default RenderCondition;
