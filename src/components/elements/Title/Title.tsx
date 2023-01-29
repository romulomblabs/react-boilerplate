import React from "react";
import { Typography } from "antd";

import styles from "./Title.module.css";

const { Title: TitleAntd } = Typography;

interface TitleProps {
  children: string;
  level?: 1 | 2 | 5 | 3 | 4 | undefined;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ level, color = "#000", children }) => (
  <>
    <TitleAntd level={level} className={styles.container} color={color}>
      {children}
    </TitleAntd>
  </>
);

export default Title;
