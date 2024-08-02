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

import * as React from "react";
import { SVGProps } from "react";

const GitGraphIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.3333 2.69999C2.61533 2.69999 2.0333 3.28202 2.0333 3.99999C2.0333 4.71796 2.61533 5.29999 3.3333 5.29999C4.05127 5.29999 4.6333 4.71796 4.6333 3.99999C4.6333 3.28202 4.05127 2.69999 3.3333 2.69999ZM0.633301 3.99999C0.633301 2.50882 1.84213 1.29999 3.3333 1.29999C4.82447 1.29999 6.0333 2.50882 6.0333 3.99999C6.0333 5.24906 5.18512 6.30003 4.0333 6.60836V9.39161C5.18512 9.69995 6.0333 10.7509 6.0333 12C6.0333 13.4912 4.82447 14.7 3.3333 14.7C1.84213 14.7 0.633301 13.4912 0.633301 12C0.633301 10.7509 1.48148 9.69995 2.6333 9.39161V6.60836C1.48148 6.30003 0.633301 5.24906 0.633301 3.99999ZM7.99997 1.29999C8.38657 1.29999 8.69997 1.61339 8.69997 1.99999V14C8.69997 14.3866 8.38657 14.7 7.99997 14.7C7.61337 14.7 7.29997 14.3866 7.29997 14V1.99999C7.29997 1.61339 7.61337 1.29999 7.99997 1.29999ZM12.6666 2.69999C11.9487 2.69999 11.3666 3.28202 11.3666 3.99999C11.3666 4.71796 11.9487 5.29999 12.6666 5.29999C13.3846 5.29999 13.9666 4.71796 13.9666 3.99999C13.9666 3.28202 13.3846 2.69999 12.6666 2.69999ZM9.96663 3.99999C9.96663 2.50882 11.1755 1.29999 12.6666 1.29999C14.1578 1.29999 15.3666 2.50882 15.3666 3.99999C15.3666 5.25947 14.5043 6.31754 13.3378 6.61592C13.2698 7.3458 13.0823 8.061 12.7816 8.73257C12.3968 9.59199 11.8352 10.3606 11.1333 10.9884C10.8451 11.2461 10.4026 11.2215 10.1449 10.9333C9.88715 10.6452 9.91181 10.2026 10.2 9.94491C10.7552 9.44832 11.1995 8.84028 11.5039 8.16044C11.7262 7.66384 11.8703 7.13707 11.9321 6.59886C10.7979 6.27893 9.96663 5.23653 9.96663 3.99999ZM3.3333 10.7C2.61533 10.7 2.0333 11.282 2.0333 12C2.0333 12.718 2.61533 13.3 3.3333 13.3C4.05127 13.3 4.6333 12.718 4.6333 12C4.6333 11.282 4.05127 10.7 3.3333 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitGraphIcon;