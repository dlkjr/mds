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

const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0.633331 7.99997C0.633331 3.9467 3.94673 0.633301 8 0.633301C11.9483 0.633301 15.3408 3.54585 15.3613 7.22272L15.3613 7.22663C15.3613 9.6474 13.3784 11.6293 10.958 11.6293H9.61527C9.56249 11.6284 9.51006 11.638 9.46111 11.6578C9.41217 11.6776 9.3677 11.707 9.33037 11.7443C9.29304 11.7817 9.26361 11.8261 9.24383 11.8751C9.22404 11.924 9.21432 11.9765 9.21523 12.0292L9.21544 12.0413C9.21544 12.1896 9.25279 12.247 9.30145 12.2955C9.3117 12.3057 9.32162 12.3162 9.33121 12.327C9.60079 12.6312 9.79866 13.0572 9.79866 13.5413C9.79866 14.5382 9.0214 15.3666 8 15.3666C3.94673 15.3666 0.633331 12.0532 0.633331 7.99997ZM8 2.0333C4.71993 2.0333 2.03333 4.7199 2.03333 7.99997C2.03333 11.28 4.71993 13.9666 8 13.9666C8.21327 13.9666 8.39866 13.8004 8.39866 13.5413C8.39866 13.447 8.36015 13.3472 8.29286 13.2665C7.97012 12.9343 7.8166 12.5174 7.81534 12.0472C7.81205 11.8086 7.85641 11.5717 7.94583 11.3505C8.03602 11.1273 8.17022 10.9246 8.34042 10.7544C8.51063 10.5842 8.71335 10.45 8.93652 10.3598C9.15758 10.2705 9.39423 10.2261 9.63261 10.2293H10.958C12.6049 10.2293 13.9603 8.87489 13.9613 7.22849C13.9446 4.46887 11.3322 2.0333 8 2.0333ZM7.96666 4.3333C7.96666 3.76261 8.4293 3.29997 9 3.29997C9.57069 3.29997 10.0333 3.76261 10.0333 4.3333C10.0333 4.90399 9.57069 5.36663 9 5.36663C8.4293 5.36663 7.96666 4.90399 7.96666 4.3333ZM9 4.69997C9.2025 4.69997 9.36666 4.5358 9.36666 4.3333C9.36666 4.1308 9.2025 3.96663 9 3.96663C8.79749 3.96663 8.63333 4.1308 8.63333 4.3333C8.63333 4.5358 8.79749 4.69997 9 4.69997ZM4.63333 4.99997C4.63333 4.42927 5.09597 3.96663 5.66666 3.96663C6.23736 3.96663 6.7 4.42927 6.7 4.99997C6.7 5.57066 6.23736 6.0333 5.66666 6.0333C5.09597 6.0333 4.63333 5.57066 4.63333 4.99997ZM5.66666 5.36663C5.86917 5.36663 6.03333 5.20247 6.03333 4.99997C6.03333 4.79746 5.86917 4.6333 5.66666 4.6333C5.46416 4.6333 5.3 4.79746 5.3 4.99997C5.3 5.20247 5.46416 5.36663 5.66666 5.36663ZM10.6333 6.99997C10.6333 6.42927 11.096 5.96663 11.6667 5.96663C12.2374 5.96663 12.7 6.42927 12.7 6.99997C12.7 7.57066 12.2374 8.0333 11.6667 8.0333C11.096 8.0333 10.6333 7.57066 10.6333 6.99997ZM11.6667 7.36663C11.8692 7.36663 12.0333 7.20247 12.0333 6.99997C12.0333 6.79746 11.8692 6.6333 11.6667 6.6333C11.4642 6.6333 11.3 6.79746 11.3 6.99997C11.3 7.20247 11.4642 7.36663 11.6667 7.36663ZM3.3 8.3333C3.3 7.76261 3.76264 7.29997 4.33333 7.29997C4.90403 7.29997 5.36666 7.76261 5.36666 8.3333C5.36666 8.90399 4.90403 9.36663 4.33333 9.36663C3.76264 9.36663 3.3 8.90399 3.3 8.3333ZM4.33333 8.69997C4.53584 8.69997 4.7 8.5358 4.7 8.3333C4.7 8.1308 4.53584 7.96663 4.33333 7.96663C4.13083 7.96663 3.96666 8.1308 3.96666 8.3333C3.96666 8.5358 4.13083 8.69997 4.33333 8.69997Z"
      fill="currentColor"
    />
  </svg>
);
export default PaletteIcon;