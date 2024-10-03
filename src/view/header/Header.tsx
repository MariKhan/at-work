"use client";
import { HeaderStyled } from "@/view/rootPage/RootPage.styled";
import { FlexDir, Text } from "@/styled-components/styles";
import {
  FavoriteIcon,
  LogoIcon,
  NotificationIcon,
} from "@/styled-components/Icons.styled";
import Image from "next/image";
import Avatar from "../../../public/static/images/My.jpg";
import styled from "@emotion/styled";

const UsernameText = styled(Text)`
  color: #595959;

  @media screen and (max-width: 700px) and (min-width: 375px) {
    display: none;
  }
`;
export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <FlexDir gap="8px">
          <LogoIcon />
          <Text fontSize="24px" lineHeight="19.5px" color="#333153">
            at-
          </Text>
          <Text
            fontSize="24px"
            lineHeight="19.5px"
            fontWeight={700}
            color="#333153"
          >
            work
          </Text>
        </FlexDir>
        <FlexDir gap="20px" alignItems="center">
          <FlexDir gap="8px">
            <FavoriteIcon />
            <NotificationIcon />
          </FlexDir>
          <FlexDir gap="8px">
            <Image
              style={{ borderRadius: "50%" }}
              src={Avatar}
              width={20}
              height={20}
              alt="avatar"
            />

            <UsernameText color="#595959"> Marie</UsernameText>
          </FlexDir>
        </FlexDir>
      </HeaderStyled>
    </>
  );
};
