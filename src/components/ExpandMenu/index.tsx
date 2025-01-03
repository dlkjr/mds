// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC, Fragment, useState } from "react";

import ChevronDownIcon from "../../icons/ChevronDownIcon";
import ChevronUpIcon from "../../icons/ChevronUpIcon";
import Button from "../Button";
import ExpandDropdown from "./ExpandDropdown";
import { ExpandMenuProps } from "./ExpandMenu.types";
import CaretFilledIcon from "../../icons/CaretFilledIcon";

const ExpandMenu: FC<
  ExpandMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  id,
  icon,
  iconLocation,
  dropMenuPosition,
  variant,
  name,
  sx,
  label,
  children,
  disabled,
  dropArrow = true,
  compact = false,
  menuTopSpacing = false,
  openFeedback = false,
  openVariant,
  inButtonGroup,
}) => {
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  let secondary = null;

  if (dropArrow) {
    secondary = expandedMenu ? (
      <CaretFilledIcon
        style={{
          fill: "none",
          transform: "rotateZ(180deg)",
        }}
      />
    ) : (
      <CaretFilledIcon style={{ fill: "none" }} />
    );
  }

  return (
    <Fragment>
      <Button
        id={id}
        icon={icon}
        iconLocation={iconLocation}
        secondaryIcon={secondary}
        variant={openVariant && expandedMenu ? openVariant : variant}
        name={name}
        sx={sx}
        label={label}
        disabled={disabled}
        compact={compact}
        onClick={(e) => {
          setExpandedMenu(!expandedMenu);
          setAnchorEl(e.currentTarget);
        }}
        inButtonGroup={inButtonGroup}
        className={expandedMenu && openFeedback ? "active" : ""}
      />

      {expandedMenu && (
        <ExpandDropdown
          open={expandedMenu}
          hideTriggerAction={() => {
            setExpandedMenu(false);
          }}
          anchorOrigin={dropMenuPosition}
          anchorEl={anchorEl}
          forInputOptions={!menuTopSpacing}
        >
          {children}
        </ExpandDropdown>
      )}
    </Fragment>
  );
};

export default ExpandMenu;
