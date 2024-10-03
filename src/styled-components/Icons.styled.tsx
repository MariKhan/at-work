import styled from "@emotion/styled";

export const LogoIcon = styled.div`
  background: url("/static/icons/Logo.svg") no-repeat;
  width: 24px;
  height: 24px;
`;

export const FavoriteIcon = styled.div`
  background: url("/static/icons/Favorite.svg") no-repeat;
  width: 16px;
  height: 16px;
`;
export const NotificationIcon = styled(FavoriteIcon)`
  background: url("/static/icons/Notification.svg") no-repeat;
`;
export const MenuIcon = styled.div`
  background: url("/static/icons/Menu.svg") no-repeat;
  width: 24px;
  height: 24px;
  :hover {
    background: url("/static/icons/MenuHover.svg") no-repeat;
  }
`;
