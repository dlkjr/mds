// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { Fragment } from "react";
import { Meta, StoryFn } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import InputBox from "./";
import { InputBoxProps } from "./InputBox.types";
import Box from "../Box";
import UsersIcon from "../../icons/UsersIcon";
import KeyRoundIcon from "../../icons/KeyRoundIcon";
import ExpandMenu from "../ExpandMenu";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";

export default {
  title: "MDS/Forms/InputBox",
  component: InputBox,
  argTypes: {},
} as Meta<typeof InputBox>;

const Template: StoryFn<InputBoxProps> = (args) => (
  <StoryThemeProvider>
    <Box sx={{ display: "flex", gap: 24, flexBasis: "50%" }}>
      <InputBox {...args} sizeMode={"small"} />
      <InputBox {...args} sizeMode={"large"} />
    </Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  helper: "Helper Text",
  required: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: "Label",
  placeholder: "Placeholder",
  helper: "Helper Text",
  required: true,
  disabled: true,
  value: "Demo Text",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "Input with Error",
  required: true,
  error: "This is an error message",
};

export const ErrorInputWithOverlay = Template.bind({});
ErrorInputWithOverlay.args = {
  label: "Input with Error",
  required: true,
  error: "This is an error message",
  overlayIcon: <TestIcon />,
  overlayAction: () => alert("You clicked the action"),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "An input box",
  required: true,
  tooltip: "Tooltip text",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "An input box",
  required: true,
  tooltip: "Tooltip text",
  type: "password",
};

export const PasswordInputRevealDisabled = Template.bind({});
PasswordInputRevealDisabled.args = {
  label: "An input box",
  required: true,
  tooltip: "Tooltip text",
  type: "password",
  passwordRevealEnabled: false,
};

export const WithOverlayIcon = Template.bind({});
WithOverlayIcon.args = {
  label: "An input box",
  required: true,
  overlayIcon: <TestIcon />,
  overlayAction: () => alert("You clicked the action"),
};

export const WithOverlayObject = Template.bind({});
WithOverlayObject.args = {
  required: true,
  overlayObject: (
    <Box
      sx={{
        width: 25,
        height: 20,
        marginTop: 3,
        borderRadius: 3,
        backgroundColor: "#ccc",
        color: "#000",
        fontSize: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Obj
    </Box>
  ),
};

export const NoLabelAndAction = Template.bind({});
NoLabelAndAction.args = {
  required: true,
  overlayIcon: <TestIcon />,
  overlayAction: () => alert("You clicked the action"),
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <UsersIcon />,
  placeholder: "Username",
};

export const StartIconWithAction = Template.bind({});
StartIconWithAction.args = {
  startIcon: <KeyRoundIcon />,
  placeholder: "Password",
  type: "password",
};

export const TypeNumberInput = Template.bind({});
TypeNumberInput.args = {
  type: "number",
  placeholder: "Numeric Field",
};

export const DropSelectorOption = Template.bind({});
DropSelectorOption.args = {
  type: "text",
  placeholder: "Select Option",
  overlayObject: (
    <ExpandMenu
      id={"Expand"}
      label={"Days"}
      dropMenuPosition={"end"}
      forInputOptions={true}
      dropArrow={false}
    >
      <ExpandMenuOption
        id={"days-selector"}
        onClick={() => {
          console.log("setDays");
        }}
      >
        Days
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"years-selector"}
        onClick={() => {
          console.log("setYears");
        }}
      >
        Years
      </ExpandMenuOption>
    </ExpandMenu>
  ),
};
