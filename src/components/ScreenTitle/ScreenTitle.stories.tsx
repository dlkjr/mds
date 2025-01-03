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

import { ScreenTitleProps } from "./ScreenTitle.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import ScreenTitle from "./";
import Badge from "../Badge";
import ButtonGroup from "../ButtonGroup";
import Button from "../Button";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/ScreenTitle",
  component: ScreenTitle,
  argTypes: {},
} as Meta<typeof ScreenTitle>;

const Template: StoryFn<ScreenTitleProps> = (args: ScreenTitleProps) => (
  <StoryThemeProvider>
    <ScreenTitle id={"screen-title-demo"} {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Object Title",
  superTitle: "Super Title",
  titleBadges: [
    <Badge label={"online"} id={"online-badge"} />,
    <Badge label={"important"} color={"warning"} id={"important-badge"} />,
  ],
  titleOptions: [
    { title: "Created", value: "Yesterday" },
    { title: "Access", value: "PUBLIC" },
  ],
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Object Title",
  titleOptions: [
    { title: "Created", value: "Wed, Feb 28 2024 · 23:56:02" },
    { title: "Access", value: "PUBLIC" },
    { title: "Size", value: "1,2024 MiB - 2 Objects" },
  ],
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"primary"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"destructive"}>
        Button3
      </Button>
    </Fragment>
  ),
};

export const CustomSubElement = Template.bind({});
CustomSubElement.args = {
  icon: <TestIcon />,
  superTitle: "Super Title",
  title: "Object Title",
  titleOptions: [
    { title: "Access", value: "PUBLIC" },
    { title: "Size", value: "1,2024 MiB - 2 Objects" },
  ],
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
};

export const NoSubItems = Template.bind({});
NoSubItems.args = {
  title: "Object Title",
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoActions = Template.bind({});
NoActions.args = {
  title: "Object Title",
  icon: <TestIcon />,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "Object Title",
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"primary"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"destructive"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  sx: {
    backgroundColor: "#090",
    "& .headerBarSubheader": {
      color: "#ff0",
    },
    "& .headerBarIcon .min-icon": {
      fill: "#fff",
    },
  },
};
