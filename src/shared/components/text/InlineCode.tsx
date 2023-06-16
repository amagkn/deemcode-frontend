import React, { PropsWithChildren, useEffect, useRef } from "react";

import { hljs } from "../../lib/hljs/hljs";

type InlineCodeProps = {};

const InlineCode: React.FC<PropsWithChildren<InlineCodeProps>> = ({
  children,
}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeRef]);

  return (
    <span>
      <code ref={codeRef}>{children}</code>
    </span>
  );
};

export { InlineCode };
