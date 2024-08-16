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

const OidcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99964 0.633301C6.63818 0.633656 5.30345 1.01129 4.14362 1.72429C2.98379 2.43729 2.04424 3.45775 1.42926 4.6724C0.913302 5.69147 0.642747 6.81378 0.635056 7.95009C0.633893 7.96659 0.633301 7.98325 0.633301 8.00005C0.633301 8.01686 0.633893 8.03352 0.635058 8.05004C0.636316 8.23492 0.644537 8.42011 0.659796 8.60521C0.771654 9.96207 1.25734 11.2614 2.06293 12.3589C2.86852 13.4565 3.96251 14.3093 5.22344 14.8227C6.48437 15.3361 7.86293 15.4901 9.20606 15.2675C10.5492 15.0449 11.8044 14.4544 12.8322 13.5616C13.8601 12.6689 14.6205 11.5087 15.0289 10.21C15.1449 9.84118 14.9399 9.44819 14.5712 9.33221C14.2024 9.21623 13.8094 9.42118 13.6934 9.78997C13.3626 10.8419 12.7467 11.7816 11.9142 12.5047C11.2514 13.0804 10.4719 13.5009 9.63267 13.7394C10.3556 12.6519 10.8696 11.433 11.142 10.1448C11.222 9.76654 10.9802 9.39509 10.602 9.31511C10.2237 9.23513 9.85227 9.47692 9.77229 9.85516C9.48171 11.2294 8.87315 12.5126 7.99979 13.6036C6.87695 12.2011 6.2008 10.4923 6.06051 8.70005H6.99997C7.38657 8.70005 7.69997 8.38665 7.69997 8.00005C7.69997 7.61345 7.38657 7.30005 6.99997 7.30005H6.06049C6.22075 5.2524 7.08048 3.31361 8.50672 1.81606C8.69986 1.61326 8.75354 1.31487 8.64318 1.05747C8.53283 0.800079 8.27969 0.633228 7.99964 0.633301ZM4.65679 7.30005C4.77891 5.49455 5.37127 3.75859 6.36603 2.26184C5.84449 2.41049 5.34319 2.63025 4.87681 2.91695C3.9374 3.49445 3.1764 4.32098 2.6783 5.30479C2.36066 5.93215 2.15785 6.60782 2.07608 7.30005H4.65679ZM2.0761 8.70005C2.19694 9.72287 2.5807 10.6983 3.19154 11.5305C3.84403 12.4195 4.73011 13.1102 5.75141 13.5261C5.95289 13.6081 6.15808 13.6788 6.36603 13.7381C5.3713 12.2414 4.77894 10.5055 4.6568 8.70005H2.0761Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.6333 2.00005C8.6333 1.61345 8.9467 1.30005 9.3333 1.30005H14.6666C14.7544 1.30005 14.8385 1.31622 14.916 1.34576C15.1795 1.44622 15.3666 1.70128 15.3666 2.00005V7.33338C15.3666 7.71998 15.0532 8.03338 14.6666 8.03338H9.3333C8.9467 8.03338 8.6333 7.71998 8.6333 7.33338V2.00005ZM13.9666 2.70005H13.3666V3.30005H13.9666V2.70005ZM11.9666 2.70005V4.00005C11.9666 4.38665 12.28 4.70005 12.6666 4.70005H13.9666V6.63338H10.0333V2.70005H11.9666Z"
      fill="currentColor"
    />
  </svg>
);
export default OidcIcon;