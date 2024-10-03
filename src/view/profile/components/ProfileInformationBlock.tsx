import { FC } from "react";
import { FlexDir } from "@/styled-components/styles";

interface ProfileInformationBlockProps {
  children: React.ReactNode;
}

export const ProfileInformationBlock: FC<ProfileInformationBlockProps> = ({
  children,
}) => {
  return (
    <>
      <FlexDir>{children}</FlexDir>
    </>
  );
};
