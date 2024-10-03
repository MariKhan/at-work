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

export const ContentStyled = styled.div`
  padding: 40px 140px;
  @media screen and (max-width: 1300px) and (min-width: 500px) {
    padding: 40px 50px;
  }
  @media screen and (max-width: 700px) and (min-width: 300px) {
    padding: 11px 16px 11px 16px;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  margin: 28px 0 40px;

  > div {
    flex: 1 1 calc(33.99% - 40px);
    max-width: calc(33.99% - 40px);
  }

  @media screen and (max-width: 1500px) {
    > div {
      flex: 1 1 calc(50% - 20px);
      max-width: calc(50% - 20px);
    }
  }
`;

export const H1Text = styled(Text)<{ isArchived: boolean }>`
  font-size: 20px;
  color: #22a0bc;
  line-height: 27.32px;
  font-weight: 600;
  opacity: ${({ isArchived }) => (isArchived ? "0.5" : "")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    font-size: 18px;
    line-height: 24.59px;
  }
`;

export const H2Text = styled(Text)<{ isArchived: boolean }>`
  color: #595959;
  opacity: ${({ isArchived }) => (isArchived ? "0.5" : "")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    font-size: 14px;
    line-height: 19.12px;
  }
`;

export const H4Text = styled(Text)<{ isArchived: boolean }>`
  color: #9c9c9c;
  font-size: 14px;
  line-height: 19.12px;
  opacity: ${({ isArchived }) => (isArchived ? "0.5" : "")};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 900px) and (min-width: 300px) {
    font-size: 10px;
    line-height: 13.66px;
  }
`;
