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

const MemoryStickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 4.03336C2.49872 4.03336 2.33763 4.10009 2.21886 4.21886C2.10009 4.33763 2.03336 4.49872 2.03336 4.6667V4.92952C2.2457 5.06208 2.43309 5.23355 2.58491 5.43653C2.84786 5.7881 2.98995 6.21534 2.98995 6.65436C2.98995 7.09339 2.84786 7.52062 2.58491 7.87219C2.43309 8.07518 2.2457 8.24665 2.03336 8.3792V9.30003H13.9667V8.40387C13.7544 8.27131 13.567 8.09984 13.4151 7.89686C13.1522 7.54529 13.0101 7.11805 13.0101 6.67903C13.0101 6.24 13.1522 5.81277 13.4151 5.4612C13.567 5.25821 13.7544 5.08674 13.9667 4.95419V4.6667C13.9667 4.49872 13.9 4.33763 13.7812 4.21886C13.6624 4.10009 13.5013 4.03336 13.3334 4.03336H2.6667ZM15.3667 7.95803C15.3667 7.64761 15.1623 7.37427 14.8645 7.28655C14.7333 7.24791 14.6182 7.16786 14.5363 7.05835C14.4544 6.94885 14.4101 6.81577 14.4101 6.67903C14.4101 6.54228 14.4544 6.40921 14.5363 6.2997C14.6182 6.1902 14.7333 6.11014 14.8645 6.0715C15.1623 5.98379 15.3667 5.71045 15.3667 5.40003V4.6667C15.3667 4.12742 15.1525 3.61023 14.7711 3.22891C14.3898 2.84759 13.8726 2.63336 13.3334 2.63336H2.6667C2.12742 2.63336 1.61024 2.84759 1.22891 3.22891C0.847587 3.61024 0.633362 4.12742 0.633362 4.6667V5.37536C0.633362 5.68578 0.8378 5.95912 1.13557 6.04684C1.26674 6.08548 1.38189 6.16553 1.46379 6.27504C1.54569 6.38454 1.58995 6.51762 1.58995 6.65436C1.58995 6.79111 1.54569 6.92418 1.46379 7.03369C1.38189 7.14319 1.26674 7.22325 1.13557 7.26189C0.8378 7.3496 0.633362 7.62294 0.633362 7.93336V11.3334C0.633362 11.8726 0.847587 12.3898 1.22891 12.7711C1.61023 13.1525 2.12742 13.3667 2.6667 13.3667H13.3334C13.8726 13.3667 14.3898 13.1525 14.7711 12.7711C15.1525 12.3898 15.3667 11.8726 15.3667 11.3334V7.95803ZM13.9667 10.7H12.7V11.9667H13.3334C13.5013 11.9667 13.6624 11.9 13.7812 11.7812C13.9 11.6624 13.9667 11.5013 13.9667 11.3334V10.7ZM11.3 11.9667V10.7H10.0334V11.9667H11.3ZM8.63336 11.9667V10.7H7.36669V11.9667H8.63336ZM5.96669 11.9667V10.7H4.70003V11.9667H5.96669ZM3.30003 11.9667V10.7H2.03336V11.3334C2.03336 11.5013 2.10009 11.6624 2.21886 11.7812C2.33763 11.9 2.49872 11.9667 2.6667 11.9667H3.30003ZM5.33336 5.30003C5.71996 5.30003 6.03336 5.61343 6.03336 6.00003V7.33336C6.03336 7.71996 5.71996 8.03336 5.33336 8.03336C4.94676 8.03336 4.63336 7.71996 4.63336 7.33336V6.00003C4.63336 5.61343 4.94676 5.30003 5.33336 5.30003ZM8.00003 5.30003C8.38663 5.30003 8.70003 5.61343 8.70003 6.00003V7.33336C8.70003 7.71996 8.38663 8.03336 8.00003 8.03336C7.61343 8.03336 7.30003 7.71996 7.30003 7.33336V6.00003C7.30003 5.61343 7.61343 5.30003 8.00003 5.30003ZM10.6667 5.30003C11.0533 5.30003 11.3667 5.61343 11.3667 6.00003V7.33336C11.3667 7.71996 11.0533 8.03336 10.6667 8.03336C10.2801 8.03336 9.96669 7.71996 9.96669 7.33336V6.00003C9.96669 5.61343 10.2801 5.30003 10.6667 5.30003Z"
      fill="currentColor"
    />
  </svg>
);
export default MemoryStickIcon;