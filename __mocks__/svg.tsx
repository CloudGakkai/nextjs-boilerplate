import React from "react";

import type { SVGProps } from "react";

const SvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />,
);
SvgrMock.displayName = "svg";

export const ReactComponent = SvgrMock;
export default ReactComponent;
