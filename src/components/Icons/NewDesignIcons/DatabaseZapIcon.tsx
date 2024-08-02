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

const DatabaseZapIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.69998 5.07188V7.99483C2.70186 8.00183 2.70905 8.02114 2.73275 8.05431C2.77653 8.11561 2.86512 8.20628 3.02736 8.31369C3.35548 8.53092 3.88034 8.74815 4.59021 8.92393C5.29194 9.0977 6.11895 9.21733 7.00495 9.2691C7.89002 9.32081 8.79903 9.30274 9.65688 9.21682C10.0416 9.17829 10.3846 9.45889 10.4232 9.84356C10.4617 10.2282 10.1811 10.5713 9.79641 10.6098C8.86325 10.7033 7.88025 10.7226 6.92329 10.6667C5.96724 10.6109 5.05317 10.4809 4.2537 10.2829C3.67247 10.139 3.14325 9.95707 2.69998 9.73609V12.6714C2.70198 12.6788 2.70944 12.6984 2.73363 12.732C2.77955 12.7959 2.87299 12.8902 3.04442 13.0013C3.39074 13.2259 3.94401 13.448 4.68761 13.624C5.42282 13.798 6.2856 13.9132 7.20247 13.9559C8.11855 13.9986 9.05084 13.967 9.91805 13.8648C10.302 13.8196 10.6499 14.0941 10.6952 14.4781C10.7404 14.862 10.4658 15.2099 10.0819 15.2552C9.13545 15.3667 8.12648 15.4004 7.13736 15.3544C6.14904 15.3084 5.19853 15.1836 4.36519 14.9863C3.54024 14.7911 2.8157 14.5217 2.28264 14.1759C1.77438 13.8463 1.29432 13.3449 1.29998 12.6633V8.00034C1.29998 8.00008 1.29998 8.00061 1.29998 8.00034L1.29998 3.33333C1.29998 2.75078 1.65481 2.3072 2.0382 2.00505C2.42949 1.69668 2.95232 1.44959 3.53598 1.25504C4.71061 0.863495 6.28882 0.633331 7.99998 0.633331C9.71113 0.633331 11.2893 0.863495 12.464 1.25504C13.0476 1.44959 13.5705 1.69668 13.9617 2.00505C14.3451 2.3072 14.7 2.75078 14.7 3.33333V5.33333C14.7 5.71993 14.3866 6.03333 14 6.03333C13.6134 6.03333 13.3 5.71993 13.3 5.33333V5.07188C13.0434 5.19956 12.7616 5.31242 12.464 5.41162C11.2893 5.80317 9.71113 6.03333 7.99998 6.03333C6.28882 6.03333 4.71061 5.80317 3.53598 5.41162C3.23837 5.31242 2.95658 5.19956 2.69998 5.07188ZM13.2989 3.33333C13.2923 3.35501 13.258 3.43369 13.0952 3.56203C12.8792 3.73222 12.5234 3.91609 12.0213 4.08347C11.0243 4.41578 9.60253 4.63333 7.99998 4.63333C6.39742 4.63333 4.97564 4.41578 3.97869 4.08347C3.47657 3.91609 3.12071 3.73222 2.90477 3.56203C2.74191 3.43369 2.70763 3.35501 2.70103 3.33333C2.70763 3.31165 2.74191 3.23298 2.90477 3.10463C3.12071 2.93445 3.47657 2.75057 3.97869 2.5832C4.97564 2.25088 6.39742 2.03333 7.99998 2.03333C9.60253 2.03333 11.0243 2.25088 12.0213 2.5832C12.5234 2.75057 12.8792 2.93445 13.0952 3.10463C13.258 3.23297 13.2923 3.31165 13.2989 3.33333ZM2.69935 12.6681C2.69943 12.6681 2.69983 12.6697 2.69998 12.6714L2.69935 12.6681ZM14.3601 7.39975C14.6916 7.59866 14.7991 8.02864 14.6002 8.36014L13.2363 10.6333H14.6666C14.9188 10.6333 15.1515 10.769 15.2758 10.9884C15.4 11.2079 15.3966 11.4772 15.2669 11.6935L13.2669 15.0268C13.068 15.3583 12.638 15.4658 12.3065 15.2669C11.975 15.068 11.8675 14.638 12.0664 14.3065L13.4303 12.0333H12C11.7478 12.0333 11.5151 11.8977 11.3908 11.6782C11.2666 11.4588 11.27 11.1894 11.3997 10.9732L13.3997 7.63985C13.5986 7.30834 14.0286 7.20085 14.3601 7.39975Z"
      fill="currentColor"
    />
  </svg>
);
export default DatabaseZapIcon;