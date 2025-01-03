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

import { OverrideTheme } from "../../global/global.types";

export interface TabProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}

export type TabItemProps =
  | {
      tabConfig?: never;
      content?: never;
      separator: true;
    }
  | {
      tabConfig: TabProps;
      content?: React.ReactNode;
      separator?: never;
    };

export interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React.ReactNode;
  optionsEndComponent?: React.ReactNode;
  sx?: OverrideTheme;
}

export interface TabButtonProps {
  id: string;
  horizontal?: boolean;
  label: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  icon?: React.ReactNode;
  selected?: boolean;
}

export interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React.ReactNode;
}
