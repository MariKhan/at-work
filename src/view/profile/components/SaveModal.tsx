import { CheckedBoxIcon, CloseIcon } from "@/styled-components/Icons.styled";
import { FlexDir, Text } from "@/styled-components/styles";
import { useEffect } from "react";

interface SaveModalProps {
  toggleModal: () => void;
}
export const SaveModal = ({ toggleModal }: SaveModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleModal();
    }, 4000);

    return () => clearTimeout(timer);
  }, [toggleModal]);

  return (
    <FlexDir dir="column" alignItems="center" style={{ position: "relative" }}>
      <FlexDir
        cursor="pointer"
        onClick={toggleModal}
        style={{
          position: "absolute",
          cursor: "pointer",
          top: "0",
          right: "0",
        }}
      >
        <CloseIcon />
      </FlexDir>
      <CheckedBoxIcon />
      <Text fontSize="20px" lineHeight="27.32px" fontWeight={600} mt="20px">
        Изменения сохранены!
      </Text>
    </FlexDir>
  );
};
