import { FC, useState } from "react";
import { FlexDir } from "@/styled-components/styles";
import { BackIcon } from "@/styled-components/Icons.styled";
import {
  H5Text,
  ProfileContainer,
  ProfileHeader,
} from "@/view/profile/Profile.styled";
import { ProfilePhotoBlock } from "@/view/profile/components/ProfilePhotoBlock";
import { ProfileInformationBlock } from "@/view/profile/components/ProfileInformationBlock";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const [activeSectionContent, setActiveSectionContent] =
    useState<React.ReactNode>(null);

  const handleSectionChange = (content: React.ReactNode) => {
    setActiveSectionContent(content);
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <BackIcon />
        <H5Text>Назад</H5Text>
      </ProfileHeader>
      <FlexDir>
        <ProfilePhotoBlock onSectionChange={handleSectionChange} />
        <ProfileInformationBlock>
          {activeSectionContent}
        </ProfileInformationBlock>
      </FlexDir>
    </ProfileContainer>
  );
};
