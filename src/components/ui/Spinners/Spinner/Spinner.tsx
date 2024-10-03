import { LdsSpinner } from "./Spinner.styled";
import { FlexDir, Text } from "@/styled-components/styles";

interface SpinnerProps {
  title?: string;
  disabledMargin?: boolean;
  spinnerColor?: string;
}

const Spinner = ({ title, disabledMargin, spinnerColor }: SpinnerProps) => {
  return (
    <FlexDir
      dir="column"
      gap="32px"
      justifyContent="center"
      alignItems="center"
    >
      <LdsSpinner disabledMargin={disabledMargin} spinnerColor={spinnerColor}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsSpinner>
      <Text fontSize="16px" lineHeight="24px" fontWeight={500} color="#1E2057">
        {title}
      </Text>
    </FlexDir>
  );
};

export default Spinner;
