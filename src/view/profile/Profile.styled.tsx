import styled from "@emotion/styled";
import Image from "next/image";
import { Text } from "@/styled-components/styles";

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
export const PhotoBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  padding: 40px;
  border-radius: 16px;
  gap: 24px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`;
export const PhotoStyled = styled(Image)`
  width: 280px;
  height: 485px;
  border-radius: 8px;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    width: 100%;
    height: 120px;
  }
`;
