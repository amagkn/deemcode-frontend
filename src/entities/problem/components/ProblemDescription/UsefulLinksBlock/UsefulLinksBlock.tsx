import { Box, Link } from "@mui/material";
import React from "react";

import { BoldText } from "../../../../../shared/components/text/BoldText";

type UsefulLinksBlockProps = {
  links: string[];
};

const UsefulLinksBlock: React.FC<UsefulLinksBlockProps> = ({ links }) => {
  return (
    <Box>
      <Box>
        <BoldText>Полезные ссылки:</BoldText>
      </Box>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <Link target="_blank" rel="noopener" href={link}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export { UsefulLinksBlock };
