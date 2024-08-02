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

const WindIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.47317 3.37849C7.37031 3.35845 7.26409 3.36424 7.16402 3.39535C7.06395 3.42645 6.97317 3.48191 6.8998 3.55673C6.62914 3.83278 6.18595 3.83716 5.9099 3.5665C5.63385 3.29584 5.62948 2.85265 5.90014 2.5766C6.13568 2.33636 6.42715 2.15833 6.74842 2.05845C7.0697 1.95858 7.41073 1.93999 7.74096 2.00434C8.07119 2.06869 8.38029 2.21398 8.64055 2.42719C8.90082 2.64039 9.10411 2.91484 9.23221 3.22594C9.36031 3.53704 9.40921 3.87506 9.37453 4.20971C9.33986 4.54436 9.22268 4.86517 9.03351 5.1434C8.84435 5.42162 8.5891 5.64855 8.29065 5.80386C7.9938 5.95833 7.66344 6.03714 7.32889 6.03333H1.3333C0.946701 6.03333 0.633301 5.71993 0.633301 5.33333C0.633301 4.94673 0.946701 4.63333 1.3333 4.63333H7.34313C7.44792 4.6348 7.55143 4.61032 7.64439 4.56195C7.73735 4.51357 7.81685 4.44289 7.87577 4.35623C7.93469 4.26957 7.97119 4.16964 7.98199 4.06541C7.99279 3.96117 7.97756 3.85589 7.93766 3.75899C7.89776 3.66209 7.83444 3.5766 7.75337 3.5102C7.67231 3.44379 7.57603 3.39854 7.47317 3.37849ZM13.1518 5.38728C12.9979 5.35546 12.8386 5.36162 12.6877 5.40523C12.5367 5.44885 12.3987 5.5286 12.2855 5.63758C12.007 5.90573 11.5639 5.89735 11.2957 5.61886C11.0276 5.34037 11.036 4.89724 11.3144 4.62909C11.5915 4.36228 11.9295 4.16703 12.299 4.06025C12.6686 3.95348 13.0586 3.93839 13.4353 4.01629C13.812 4.09419 14.164 4.26274 14.4609 4.50734C14.7578 4.75194 14.9906 5.06522 15.1391 5.42005C15.2876 5.77488 15.3474 6.16057 15.3133 6.54373C15.2792 6.92688 15.1523 7.29594 14.9434 7.61897C14.7345 7.94199 14.4501 8.20923 14.1146 8.39755C13.7792 8.58588 13.403 8.6896 13.0184 8.69976L13 8.7H1.3333C0.946701 8.7 0.633301 8.3866 0.633301 8C0.633301 7.6134 0.946701 7.3 1.3333 7.3H12.9895C13.1438 7.29465 13.2946 7.25243 13.4292 7.17681C13.5662 7.09989 13.6824 6.99073 13.7677 6.85879C13.8531 6.72686 13.9049 6.57611 13.9188 6.41961C13.9328 6.26311 13.9084 6.10558 13.8477 5.96065C13.787 5.81571 13.6919 5.68775 13.5707 5.58785C13.4494 5.48794 13.3056 5.4191 13.1518 5.38728ZM9.32891 9.96667C9.66346 9.96286 9.99381 10.0417 10.2906 10.1961C10.5891 10.3514 10.8443 10.5784 11.0335 10.8566C11.2227 11.1348 11.3399 11.4556 11.3745 11.7903C11.4092 12.1249 11.3603 12.463 11.2322 12.7741C11.1041 13.0852 10.9008 13.3596 10.6406 13.5728C10.3803 13.786 10.0712 13.9313 9.74096 13.9957C9.41073 14.06 9.0697 14.0414 8.74842 13.9415C8.42715 13.8417 8.13568 13.6636 7.90014 13.4234C7.62948 13.1474 7.63385 12.7042 7.9099 12.4335C8.18595 12.1628 8.62914 12.1672 8.8998 12.4433C8.97317 12.5181 9.06395 12.5735 9.16402 12.6047C9.26409 12.6358 9.37031 12.6416 9.47317 12.6215C9.57603 12.6015 9.67231 12.5562 9.75337 12.4898C9.83444 12.4234 9.89776 12.3379 9.93766 12.241C9.97756 12.1441 9.99279 12.0388 9.98199 11.9346C9.97119 11.8304 9.93469 11.7304 9.87577 11.6438C9.81685 11.5571 9.73735 11.4864 9.64439 11.4381C9.55143 11.3897 9.44792 11.3651 9.34313 11.3666L9.3333 11.3667L1.3333 11.3667C0.946701 11.3667 0.633301 11.0533 0.633301 10.6667C0.633301 10.2801 0.946701 9.96667 1.3333 9.96667H9.32891Z"
      fill="currentColor"
    />
  </svg>
);
export default WindIcon;