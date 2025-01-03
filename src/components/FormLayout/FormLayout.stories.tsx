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

import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { FormLayoutProps } from "./FormLayout.types";
import FormLayout from "./";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import Checkbox from "../Checkbox";
import InputBox from "../InputBox";
import HelpBox from "../HelpBox";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "MDS/Layout/FormLayout",
  component: FormLayout,
  argTypes: {},
} as Meta<typeof FormLayout>;

const Template: StoryFn<FormLayoutProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <FormLayout {...args} title={"Form Title"} icon={<TestIcon />}>
      <Checkbox label={"A Checkbox input"} />
      <InputBox id={"inputbox"} label={"An input box"} />
    </FormLayout>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithHelpBox = Template.bind({});
WithHelpBox.args = {
  helpBox: (
    <HelpBox icon={<TestIcon />} title={"Help Title"} help={"Help Text"} />
  ),
};

export const FormLayoutWithCustomStyles = Template.bind({});
FormLayoutWithCustomStyles.args = {
  sx: {
    color: "#fff",
    backgroundColor: "#460",
    borderColor: "#f9a",
  },
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  withBorders: false,
  helpBox: (
    <HelpBox icon={<TestIcon />} title={"Help Title"} help={"Help Text"} />
  ),
};

export const NoBorderAndPadding = Template.bind({});
NoBorderAndPadding.args = {
  withBorders: false,
  containerPadding: false,
  helpBox: (
    <HelpBox icon={<TestIcon />} title={"Help Title"} help={"Help Text"} />
  ),
};
