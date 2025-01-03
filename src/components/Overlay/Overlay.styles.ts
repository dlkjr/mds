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

import { css, Theme } from "@emotion/react";

export const modalOverlay = (theme: Theme) =>
  css({
    position: "fixed" as const,
    zIndex: 1200,
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgOverlay"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    backdropFilter: "blur(4px)",
    "&.active": {
      opacity: 1,
      transition: "opacity 0.3s",
    },
  });
