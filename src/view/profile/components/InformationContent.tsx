import { FC, useEffect, useState } from "react";
import { Button, FlexDir, Text } from "@/styled-components/styles";
import Input from "@/components/ui/Input/Input";
import { Divider } from "@mui/material";
import { User, useUsersQuery } from "@/store/features/rootPageApi";
import { Spinner } from "@/components/ui/Spinners";

interface InformationContentProps {
  profileId: string;
}

export const InformationContent: FC<InformationContentProps> = ({
  profileId,
}) => {
  const { data: users, isLoading } = useUsersQuery();
  const [userInformationData, setUserInformationData] = useState<User>(null);

  useEffect(() => {
    if (users) {
      const userData = users.find((user: User) => user.id === profileId);
      setUserInformationData(userData || null);
    }
  }, [users, profileId]);

  const updateUserInformationFields = (fields: Partial<User>) => {
    setUserInformationData((prev) => ({
      ...prev,
      ...fields,
    }));
  };

  return (
    <>
      <FlexDir dir="column" color="#FDFDFD" width="420px">
        <Text fontSize="24px" fontWeight={600} lineHeight="32.78px" mb="16px">
          Данные профиля
        </Text>
        <Divider style={{ marginBottom: "24px" }} />
        {!isLoading ? (
          <>
            <Input
              title="Имя"
              value={userInformationData?.name}
              onChange={(e) =>
                updateUserInformationFields({ name: e.target.value })
              }
            />

            <Input
              title="Никнейм"
              value={userInformationData?.username}
              onChange={(e) =>
                updateUserInformationFields({ username: e.target.value })
              }
            />

            <Input
              title="Почта"
              value={userInformationData?.email}
              onChange={(e) =>
                updateUserInformationFields({ email: e.target.value })
              }
            />
            <Input
              title="Город"
              value={userInformationData?.address?.city}
              onChange={(e) =>
                updateUserInformationFields({
                  address: {
                    ...userInformationData?.address,
                    city: e.target.value,
                  },
                })
              }
            />
            <Input
              title="Телефон"
              value={userInformationData?.phone}
              onChange={(e) =>
                updateUserInformationFields({ phone: e.target.value })
              }
            />
            <Input
              title="Название компании"
              value={userInformationData?.company?.name}
              onChange={(e) =>
                updateUserInformationFields({
                  company: {
                    ...userInformationData?.company,
                    name: e.target.value,
                  },
                })
              }
            />
            <FlexDir>
              <Button>Сохранить</Button>
            </FlexDir>
          </>
        ) : (
          <Spinner />
        )}
      </FlexDir>
    </>
  );
};
