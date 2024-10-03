import { useState } from "react";
import { useSelector } from "react-redux";
import { FlexDir } from "@/styled-components/styles";
import { BackIcon } from "@/styled-components/Icons.styled";
import {
  H5Text,
  ProfileContainer,
  ProfileHeader,
} from "@/view/profile/Profile.styled";
import { ProfilePhotoBlock } from "@/view/profile/components/ProfilePhotoBlock";
import { ProfileInformationBlock } from "@/view/profile/components/ProfileInformationBlock";
import { useRouter } from "next/navigation";
import { InformationContent } from "@/view/profile/components/InformationContent";

export const Profile = () => {
  const router = useRouter();
  const selectedUserId = useSelector((state) => state.users.selectedUserId);

  const [activeSectionContent, setActiveSectionContent] =
    useState<React.ReactNode>(
      <InformationContent profileId={selectedUserId} />,
    );

  const handleSectionChange = (content: React.ReactNode) => {
    setActiveSectionContent(content);
  };

  return (
    <ProfileContainer>
      <ProfileHeader onClick={() => router.push("/")}>
        <BackIcon />
        <H5Text>Назад</H5Text>
      </ProfileHeader>
      <FlexDir gap="40px">
        <ProfilePhotoBlock onSectionChange={handleSectionChange} />
        <ProfileInformationBlock>
          {activeSectionContent}
        </ProfileInformationBlock>
      </FlexDir>
    </ProfileContainer>
  );
};
