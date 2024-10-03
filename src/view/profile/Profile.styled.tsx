import styled from "@emotion/styled";
import Image from "next/image";
import { Text } from "@/styled-components/styles";
import { Divider } from "@mui/material";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 140px;

  @media screen and (max-width: 700px) and (min-width: 375px) {
    padding: 11px 16px 11px 16px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 8px;
  justify-content: flex-start;
  cursor: pointer;

  @media screen and (max-width: 700px) and (min-width: 375px) {
    padding: 11px 16px 11px 16px;
  }
`;

export const H5Text = styled(Text)`
  color: #595959;
  font-size: 20px;
  line-height: 27.32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    font-size: 12px;
    line-height: 21.86px;
  }
`;

export const DividerStyled = styled(Divider)`
  background-color: ##dadada;
  width: 100%;
`;
export const PhotoBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  padding: 40px;
  border-radius: 16px;
  gap: 24px;
  width: 30%;
  min-width: 343px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
    width: 100%;
    gap: 20px;
  }
`;
export const PhotoStyled = styled(Image)`
  width: 100%;
  height: 485px;
  border-radius: 8px;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    height: 187px;
  }
`;

export const Section = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#161616" : "#9C9C9C")};
  font-weight: ${({ isActive }) => (isActive ? "600" : "500")};
  cursor: pointer;

  &:hover {
    color: #22a0bc;
  }
`;

export const InputBlockStyled = styled.div`
  width: 600px;
  @media screen and (max-width: 1300px) and (min-width: 700px) {
    width: 420px;
  }
  @media screen and (max-width: 700px) and (min-width: 300px) {
    width: 343px;
  }
`;
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media screen and (max-width: 1000px) and (min-width: 300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
