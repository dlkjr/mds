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

import React, { CSSProperties } from "react";
import { DateTime } from "luxon";

import { OverrideTheme } from "../../global/global.types";

export type DateTimeMode = "all" | "date";

export interface DateTimeInputMain {
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React.ReactNode;
  displayFormat?: string;
  noLabelMinWidth?: boolean;
  pickerSx?: OverrideTheme;
  sizeMode?: "small" | "large";
  orientation?: "horizontal" | "vertical";
  state?: "normal" | "error" | "success" | "warning";
  readOnly?: boolean;
  helper?: string;
}

export interface DateTimeConstruct {
  id: string;
  sx?: OverrideTheme;
  mode?: DateTimeMode;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  minDate?: DateTime;
  maxDate?: DateTime;
  usePortal?: boolean;
}

export interface DateTimeSelectorMain {
  open?: boolean;
  saveLabel?: string;
  anchorEl?: (EventTarget & HTMLElement) | null;
  onClose?: () => void;
}

export interface TimeSelectorProps {
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  validitySignal?: (valid: boolean) => void;
  timeFormat?: "12h" | "24h";
  secondsSelector: boolean;
}

export interface DateSelectorProps {
  minDate?: DateTime;
  maxDate?: DateTime;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
}

export type DateTimeInputProps = DateTimeInputMain &
  DateTimeConstruct &
  TimeSelectorProps;
export type DateTimeSelectorProps = DateTimeSelectorMain &
  DateTimeConstruct &
  TimeSelectorProps;
