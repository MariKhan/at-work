import { FC } from "react";
import { FlexDir } from "@/styled-components/styles";

interface MenuItemProps {
  title: string;
}

export const MenuItem: FC<MenuItemProps> = ({ title }) => {
  return (
    <FlexDir gap="8px" alignItems="center">
      <span>{title}</span>
    </FlexDir>
  );
};
