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

const PackageOpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.45437 0.857948C4.72515 0.703377 5.03157 0.62207 5.3434 0.62207C5.65525 0.62207 5.9617 0.703393 6.2325 0.857992C6.2332 0.85839 6.2339 0.858789 6.23459 0.859188L8.00468 1.85839L9.76966 0.863504L9.77178 0.862318C10.0422 0.711109 10.3469 0.631717 10.6567 0.631717C10.9666 0.631717 11.2712 0.711109 11.5417 0.862318L11.543 0.86304L14.3446 2.4373C14.6508 2.61045 14.9055 2.86178 15.0828 3.16561C15.26 3.46944 15.3534 3.81488 15.3534 4.16663C15.3534 4.51838 15.26 4.86382 15.0828 5.16766C14.9727 5.35626 14.8329 5.52464 14.6694 5.66664C14.8329 5.80863 14.9727 5.977 15.0828 6.16561C15.26 6.46944 15.3534 6.81488 15.3534 7.16663C15.3534 7.51838 15.26 7.86382 15.0828 8.16766C14.9055 8.47149 14.6508 8.72282 14.3446 8.89596L14.0334 9.07126L14.0334 11.2459C14.0334 11.2457 14.0334 11.2462 14.0334 11.2459M8.70006 13.6784L12.2706 11.8455C12.271 11.8453 12.2714 11.8451 12.2719 11.8448C12.3808 11.7879 12.472 11.7023 12.5358 11.5973C12.5998 11.4918 12.6335 11.3707 12.6334 11.2474L12.6334 9.8598L11.5526 10.4686C11.2818 10.6234 10.9753 10.7049 10.6634 10.7049C10.3514 10.7049 10.0449 10.6234 9.7742 10.4686L8.70006 9.86358V13.6784ZM9.42649 8.66594L10.4688 9.25299C10.528 9.28701 10.5951 9.30494 10.6634 9.30494C10.7317 9.30494 10.7988 9.28703 10.858 9.25301L10.8632 9.25004L13.6555 7.67731C13.6553 7.67741 13.6557 7.67721 13.6555 7.67731C13.7457 7.62619 13.8212 7.55178 13.8735 7.46224C13.9258 7.37251 13.9534 7.2705 13.9534 7.16663C13.9534 7.06276 13.9258 6.96075 13.8735 6.87103C13.8212 6.78144 13.7461 6.7073 13.6559 6.65618C13.6558 6.65611 13.656 6.65626 13.6559 6.65618L13.3257 6.46981L9.42649 8.66594ZM13.656 4.67701C13.7462 4.62589 13.8212 4.55179 13.8735 4.46224C13.9258 4.37251 13.9534 4.2705 13.9534 4.16663C13.9534 4.06276 13.9258 3.96075 13.8735 3.87103C13.8213 3.78153 13.7463 3.70746 13.6562 3.65635C13.656 3.65622 13.6564 3.65648 13.6562 3.65635L10.8584 2.08428C10.8583 2.08418 10.8586 2.08438 10.8584 2.08428C10.7969 2.05 10.7272 2.03172 10.6567 2.03172C10.5864 2.03172 10.5173 2.04965 10.4558 2.08382C10.4556 2.08398 10.4561 2.08367 10.4558 2.08382L9.42918 2.66253L13.3265 4.86259L13.656 4.67701C13.6562 4.67692 13.6558 4.67711 13.656 4.67701ZM8.00418 3.46577L11.9009 5.6655L8.00006 7.86255L4.10046 5.66623L8.00418 3.46577ZM6.57968 2.66164L5.53886 2.07409C5.47935 2.04001 5.41197 2.02207 5.3434 2.02207C5.27482 2.02207 5.20744 2.04 5.14793 2.07408L5.14408 2.07628L2.34462 3.65596C2.34456 3.656 2.34469 3.65592 2.34462 3.65596C2.25429 3.70708 2.17894 3.78137 2.12664 3.87103C2.07431 3.96075 2.04673 4.06276 2.04673 4.16663C2.04673 4.2705 2.07431 4.37251 2.12664 4.46224C2.1789 4.55182 2.25398 4.62595 2.34421 4.67707C2.34407 4.677 2.34435 4.67715 2.34421 4.67707L2.67434 4.86301L6.57968 2.66164ZM1.33077 5.66663C1.16725 5.52463 1.02737 5.35626 0.917354 5.16766C0.740119 4.86382 0.646729 4.51838 0.646729 4.16663C0.646729 3.81488 0.740119 3.46944 0.917354 3.16561C1.09459 2.86178 1.34932 2.61045 1.6555 2.43731L4.45437 0.857948M2.34435 6.65611C2.25406 6.70723 2.17893 6.78139 2.12664 6.87103C2.07431 6.96075 2.04673 7.06276 2.04673 7.16663C2.04673 7.2705 2.07431 7.37251 2.12664 7.46224C2.17898 7.55196 2.2542 7.62618 2.34462 7.67731L5.13088 9.25041L5.13356 9.25193C5.19444 9.28665 5.26331 9.30492 5.3334 9.30492C5.40348 9.30492 5.47235 9.28665 5.53323 9.25193L5.53654 9.25004L6.57364 8.66594L2.67462 6.46995L2.34435 6.65611C2.34444 6.65606 2.34427 6.65616 2.34435 6.65611ZM7.30006 9.86359L6.22689 10.468C6.22624 10.4684 6.2256 10.4687 6.22495 10.4691C5.95324 10.6236 5.64601 10.7049 5.3334 10.7049C5.02066 10.7049 4.71332 10.6236 4.44153 10.4689C4.44099 10.4686 4.44044 10.4683 4.4399 10.468L3.36673 9.86211V11.2466C3.3666 11.37 3.40037 11.4918 3.46435 11.5973C3.52809 11.7023 3.61935 11.7879 3.72826 11.8448C3.72869 11.8451 3.72912 11.8453 3.72954 11.8455L7.30006 13.6784V9.86359ZM7.08393 15.1411L3.08705 13.0894L3.08391 13.0878C2.74683 12.9126 2.46436 12.6481 2.26734 12.3233C2.07039 11.9986 1.9664 11.626 1.96673 11.2463C1.96673 11.2464 1.96673 11.2462 1.96673 11.2463V9.07168L1.65591 8.89619C1.34972 8.72305 1.09459 8.47149 0.917354 8.16766C0.740119 7.86382 0.646729 7.51838 0.646729 7.16663C0.646729 6.81488 0.740119 6.46944 0.917354 6.16561C1.02737 5.977 1.16725 5.80863 1.33077 5.66663M7.08393 15.1411C7.08453 15.1414 7.08514 15.1417 7.08574 15.142C7.35013 15.2791 7.64171 15.3548 7.93886 15.364C7.95903 15.3657 7.97944 15.3666 8.00006 15.3666C8.02068 15.3666 8.04109 15.3657 8.06126 15.364C8.35841 15.3548 8.65 15.2791 8.91438 15.142C8.91499 15.1417 8.91559 15.1414 8.91619 15.1411L12.9131 13.0894L12.9162 13.0878C13.2533 12.9126 13.5358 12.6481 13.7328 12.3233C13.9297 11.9987 14.0337 11.6256 14.0334 11.2459"
      fill="currentColor"
    />
  </svg>
);
export default PackageOpenIcon;