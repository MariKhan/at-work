import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@/styled-components/styles";
import { CardStyled, ContentStyled } from "@/view/rootPage/RootPage.styled";
import { Card } from "@/view/rootPage/components/Card";
import { Divider } from "@mui/material";
import { Spinner } from "@/components/ui/Spinners";
import { useUsersQuery } from "@/store/features/rootPageApi";
import {
  archiveUser,
  removeUser,
  restoreUser,
  setActiveUsers,
} from "@/store/slices/userSlices";

export const Active = () => {
  const dispatch = useDispatch();
  const { data: users, isLoading } = useUsersQuery();

  const activeUsers = useSelector((state) => state.users.activeUsers);
  const archivedUsers = useSelector((state) => state.users.archivedUsers);

  useEffect(() => {
    if (users) {
      dispatch(setActiveUsers(users.slice(0, 8)));
    }
  }, [users, dispatch]);

  const archiveHandel = (userId: number) => {
    dispatch(archiveUser(userId));
  };

  const removeHandel = (userId: number) => {
    dispatch(removeUser(userId));
  };

  const activeHandel = (userId: number) => {
    dispatch(restoreUser(userId));
  };

  return (
    <ContentStyled>
      <Text
        color="#161616"
        fontWeight={600}
        fontSize="24px"
        lineHeight="32.78px"
        mb="16px"
      >
        Активные
      </Text>

      <Divider />
      {!isLoading ? (
        <CardStyled>
          {activeUsers.map((user) => (
            <Card
              key={user.id}
              user={user}
              onArchive={archiveHandel}
              onRemove={removeHandel}
              isArchived={false}
            />
          ))}
        </CardStyled>
      ) : (
        <Spinner />
      )}

      <Text
        color="#161616"
        fontWeight={600}
        fontSize="24px"
        lineHeight="32.78px"
        mb="16px"
      >
        Архив
      </Text>
      <Divider />

      <CardStyled>
        {archivedUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            isArchived={true}
            onActive={activeHandel}
          />
        ))}
      </CardStyled>
    </ContentStyled>
  );
};
