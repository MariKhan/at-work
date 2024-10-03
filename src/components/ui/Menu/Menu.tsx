import { FC, MouseEvent, useState } from "react";
import { Menu as MuiMenu } from "@mui/material";
import { MenuItem as MuiMenuItem } from "./Menu.styled";
import { MenuItem } from "./MenuItem";
import { FlexDir } from "@/styled-components/styles";
import { MenuIcon } from "@/styled-components/Icons.styled";

export interface IMenuItem {
  id: number;
  title: string;
  onClick: () => void;
}

interface MenuProps {
  menuItems: IMenuItem[];
  options?: {
    marginLeft?: string;
    marginTop?: string;
    width?: string;
    position?: {
      horizontal: "right" | "left" | "center";
      vertical: "top" | "bottom" | "center";
    };
  };
}

export const Menu: FC<MenuProps> = ({ menuItems, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FlexDir
        style={{ cursor: "pointer" }}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        onClick={handleClick}
      >
        <FlexDir
          alignItems="center"
          justifyContent="center"
          width="24px"
          height="24px"
          open={open}
        >
          <MenuIcon />
        </FlexDir>
      </FlexDir>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            ml: options?.marginLeft || "15px",
            width: options?.width || "184px",
            border: "1px solid #EAEAEF",
            borderRadius: "12px",
            mt: options?.marginTop || "",
          },
        }}
        transformOrigin={{
          horizontal: options?.position?.horizontal || "left",
          vertical: options?.position?.vertical || "center",
        }}
      >
        {menuItems.map(({ title, onClick, id }) => (
          <MuiMenuItem
            key={id}
            onClick={() => {
              onClick();
              handleClose();
            }}
          >
            <MenuItem title={title} />
          </MuiMenuItem>
        ))}
      </MuiMenu>
    </>
  );
};
