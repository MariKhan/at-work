import React, { useState, FC } from "react";
import { Divider } from "@mui/material";
import {
  DividerStyled,
  PhotoBlockStyled,
  PhotoStyled,
  Section,
} from "@/view/profile/Profile.styled";
import Photo from "../../../../public/static/images/Photo.jpeg";
import { InformationContent } from "@/view/profile/components/InformationContent";

interface ProfilePhotoBlockProps {
  onSectionChange: (content: React.ReactNode) => void;
}

export const ProfilePhotoBlock: FC<ProfilePhotoBlockProps> = ({
  onSectionChange,
}) => {
  const sections = [
    {
      id: "profile",
      label: "Данные профиля",
      content: <InformationContent />,
    },
    {
      id: "workspace",
      label: "Рабочее пространство",
      content: "Контент для рабочего пространства",
    },
    { id: "privacy", label: "Приватность", content: "Контент для приватности" },
    {
      id: "security",
      label: "Безопасность",
      content: "Контент для безопасности",
    },
  ];
  const [activeSection, setActiveSection] = useState("profile");

  const handleClick = (sectionId: string, content: React.ReactNode) => {
    setActiveSection(sectionId);
    onSectionChange(content);
  };

  return (
    <PhotoBlockStyled>
      <PhotoStyled src={Photo} alt="avatar" />

      {sections.map((section) => (
        <React.Fragment key={section.id}>
          <Section
            isActive={activeSection === section.id}
            onClick={() => handleClick(section.id, section.content)}
          >
            {section.label}
          </Section>
          <DividerStyled />
        </React.Fragment>
      ))}
    </PhotoBlockStyled>
  );
};
