import React, { useState, FC } from "react";
import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { PhotoBlockStyled, PhotoStyled } from "@/view/profile/Profile.styled";
import Photo from "../../../../public/static/images/Photo.jpeg";

const sections = [
  {
    id: "profile",
    label: "Данные профиля",
    content: "Контент для данных профиля",
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

interface ProfilePhotoBlockProps {
  onSectionChange: (content: React.ReactNode) => void;
}

const Section = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#161616" : "#9C9C9C")};
  font-weight: ${({ isActive }) => (isActive ? "600" : "500")};
  cursor: pointer;

  &:hover {
    color: #22a0bc;
  }
`;

export const ProfilePhotoBlock: FC<ProfilePhotoBlockProps> = ({
  onSectionChange,
}) => {
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
          <Divider />
        </React.Fragment>
      ))}
    </PhotoBlockStyled>
  );
};
