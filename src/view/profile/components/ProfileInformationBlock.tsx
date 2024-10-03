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
      <FlexDir
        bgColor="#FFF"
        width="100%"
        borderRadius="16px"
        padding="40px"
        gap="24px"
      >
        {children}
      </FlexDir>
    </>
  );
};
