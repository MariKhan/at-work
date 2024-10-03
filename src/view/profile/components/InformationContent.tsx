import { FC, useEffect, useState } from "react";
import { Button, FlexDir, Text } from "@/styled-components/styles";
import Input from "@/components/ui/Input/Input";
import { Dialog, Divider } from "@mui/material";
import { User, useUsersQuery } from "@/store/features/rootPageApi";
import { Spinner } from "@/components/ui/Spinners";
import { SaveModal } from "@/view/profile/components/SaveModal";

interface InformationContentProps {
  profileId: string;
}

export const InformationContent: FC<InformationContentProps> = ({
  profileId,
}) => {
  const { data: users, isLoading } = useUsersQuery();
  const [userInformationData, setUserInformationData] = useState<User>(null);
  const [openModal, setOpenModal] = useState(false);
  const [errorFields, setErrorFields] = useState<{ [key: string]: boolean }>(
    {},
  );

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

  const toggleModal = () => {
    setOpenModal((p) => !p);
  };

  const handleSaveClick = () => {
    const fieldsToValidate = {
      name: userInformationData?.name,
      username: userInformationData?.username,
      email: userInformationData?.email,
      city: userInformationData?.address?.city,
      phone: userInformationData?.phone,
      companyName: userInformationData?.company?.name,
    };

    const emptyFields = Object.keys(fieldsToValidate).reduce(
      (acc, key) => {
        if (!fieldsToValidate[key as keyof typeof fieldsToValidate]) {
          acc[key] = true;
        }
        return acc;
      },
      {} as { [key: string]: boolean },
    );

    setErrorFields(emptyFields);

    if (Object.keys(emptyFields).length === 0) {
      toggleModal();
    }
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
              borderColor={errorFields.username ? "red" : "#dadada"}
            />

            <Input
              title="Никнейм"
              value={userInformationData?.username}
              onChange={(e) =>
                updateUserInformationFields({ username: e.target.value })
              }
              borderColor={errorFields.username ? "red" : "#dadada"}
            />

            <Input
              title="Почта"
              value={userInformationData?.email}
              onChange={(e) =>
                updateUserInformationFields({ email: e.target.value })
              }
              borderColor={errorFields.username ? "red" : "#dadada"}
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
              borderColor={errorFields.username ? "red" : "#dadada"}
            />
            <Input
              title="Телефон"
              value={userInformationData?.phone}
              onChange={(e) =>
                updateUserInformationFields({ phone: e.target.value })
              }
              borderColor={errorFields.username ? "red" : "#dadada"}
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
              borderColor={errorFields.username ? "red" : "#dadada"}
            />
            <FlexDir>
              <Button onClick={handleSaveClick}>Сохранить</Button>
            </FlexDir>

            <Dialog
              open={openModal}
              onClose={toggleModal}
              PaperProps={{
                sx: {
                  maxWidth: "310px",
                  width: "310px",
                  borderRadius: "40px",
                  padding: "40px",
                },
              }}
            >
              <SaveModal toggleModal={toggleModal} />
            </Dialog>
          </>
        ) : (
          <Spinner />
        )}
      </FlexDir>
    </>
  );
};
