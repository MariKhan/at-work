import { FlexDir } from "@/styled-components/styles";
import Photo from "../../../../public/static/images/Photo.jpeg";
import { User } from "@/store/features/rootPageApi";
import { Menu } from "@/components/ui/Menu";
import { IMenuItem } from "@/components/ui/Menu/Menu";
import {
  Avatar,
  CardContentStyled,
  H1Text,
  H2Text,
  H4Text,
} from "@/view/rootPage/RootPage.styled";
import React from "react";

interface CardProps {
  user: User;
  onArchive: (userId: number) => void;
  isArchived: boolean;
  onActive: (userId: number) => void;
  onRemove: (userId: number) => void;
}

const menuItems = (fns: {
  editFn: () => void;
  archiveFn: () => void;
  HideFn: () => void;
}): IMenuItem[] => [
  {
    id: 1,
    title: "Редактировать",
    onClick: fns.editFn,
  },
  {
    id: 2,
    title: "Архивировать",
    onClick: fns.archiveFn,
  },
  {
    id: 3,
    title: "Скрыть",
    onClick: fns.HideFn,
  },
];

const menuItemsArchive = (fns: { editArchiveFn: () => void }): IMenuItem[] => [
  {
    id: 1,
    title: "Активировать",
    onClick: fns.editArchiveFn,
  },
];

export const Card = ({
  user,
  onArchive,
  isArchived,
  onActive,
  onRemove,
}: CardProps) => {
  const EditHandler = () => {};
  const ArchiveHandler = () => {
    onArchive(user.id);
  };
  const HideHandler = () => {
    onRemove(user.id);
  };

  const EditArchiveFnHandler = () => {
    onActive(user.id);
  };
  return (
    <CardContentStyled>
      <Avatar isArchived={isArchived} src={Photo} alt="avatar" />
      <FlexDir dir="column" justifyContent="space-between" width="100%">
        <FlexDir dir="column" gap="4px">
          <FlexDir justifyContent="space-between">
            <H1Text isArchived={isArchived}>{user.username}</H1Text>
            <FlexDir>
              {!isArchived ? (
                <Menu
                  menuItems={menuItems({
                    editFn: EditHandler,
                    archiveFn: ArchiveHandler,
                    HideFn: HideHandler,
                  })}
                  options={{
                    position: { horizontal: "right", vertical: "bottom" },
                    width: "200px",
                    marginLeft: "18px",
                    marginTop: "130px",
                  }}
                />
              ) : (
                <Menu
                  menuItems={menuItemsArchive({
                    editArchiveFn: EditArchiveFnHandler,
                  })}
                  options={{
                    position: { horizontal: "right", vertical: "bottom" },
                    width: "200px",
                    marginLeft: "18px",
                    marginTop: "55px",
                  }}
                />
              )}
            </FlexDir>
          </FlexDir>
          <H2Text isArchived={isArchived}>{user.company.name}</H2Text>
        </FlexDir>
        <H4Text isArchived={isArchived}>{user.address.city}</H4Text>
      </FlexDir>
    </CardContentStyled>
  );
};
