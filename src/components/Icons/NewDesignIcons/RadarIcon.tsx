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

const RadarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.30964 1.62062C5.71478 0.808241 7.34889 0.482668 8.95809 0.694475C10.5673 0.906282 12.0615 1.64361 13.2086 2.79192C13.4817 3.06533 13.4816 3.50834 13.2083 3.7816L11.3221 5.66777C11.3215 5.66841 11.3208 5.66906 11.3202 5.6697L9.84524 7.14467C9.96595 7.40466 10.0333 7.69444 10.0333 7.99996C10.0333 9.12294 9.12298 10.0333 8 10.0333C6.87702 10.0333 5.96666 9.12294 5.96666 7.99996C5.96666 6.87698 6.87702 5.96663 8 5.96663C8.30551 5.96663 8.5953 6.03401 8.85529 6.15472L9.78539 5.22462C9.60697 5.10893 9.41732 5.01046 9.21895 4.93086C8.80231 4.76368 8.35594 4.68327 7.90716 4.69454C7.45837 4.70582 7.0166 4.80855 6.60888 4.99644C6.20116 5.18433 5.83607 5.45343 5.53594 5.78729C5.23581 6.12114 5.00695 6.51272 4.86337 6.93807C4.71979 7.36342 4.66451 7.81359 4.70091 8.26105C4.7373 8.7085 4.86461 9.14382 5.07505 9.54037C5.28548 9.93692 5.57461 10.2864 5.92476 10.5673C6.22628 10.8093 6.27458 11.2499 6.03263 11.5514C5.79068 11.8529 5.3501 11.9012 5.04857 11.6593C4.54989 11.2591 4.13809 10.7614 3.83838 10.1966C3.53867 9.63183 3.35735 9.01183 3.30552 8.37455C3.25368 7.73727 3.33241 7.09612 3.53691 6.49031C3.7414 5.88451 4.06735 5.32681 4.49481 4.85132C4.92227 4.37583 5.44225 3.99256 6.02294 3.72496C6.60363 3.45735 7.23281 3.31104 7.87199 3.29499C8.51117 3.27893 9.14691 3.39345 9.74031 3.63156C10.1151 3.78195 10.4681 3.97966 10.7908 4.21917L11.6946 3.31546C10.8538 2.65155 9.84603 2.22342 8.77539 2.0825C7.47201 1.91095 6.14846 2.17465 5.01036 2.83264C4.67567 3.02613 4.24749 2.91168 4.05399 2.57699C3.86049 2.2423 3.97495 1.81412 4.30964 1.62062ZM8.40983 7.51709C8.29937 7.42324 8.1563 7.36663 8 7.36663C7.65022 7.36663 7.36666 7.65018 7.36666 7.99996C7.36666 8.34974 7.65022 8.63329 8 8.63329C8.34978 8.63329 8.63333 8.34974 8.63333 7.99996C8.63333 7.84366 8.57671 7.70059 8.48287 7.59013C8.46993 7.57895 8.45731 7.56722 8.44502 7.55493C8.43274 7.54265 8.42101 7.53003 8.40983 7.51709ZM1.96666 3.99996C1.96666 3.61336 2.28007 3.29996 2.66666 3.29996H2.67333C3.05993 3.29996 3.37333 3.61336 3.37333 3.99996C3.37333 4.38656 3.05993 4.69996 2.67333 4.69996H2.66666C2.28007 4.69996 1.96666 4.38656 1.96666 3.99996ZM13.9509 4.91504C14.3107 4.77377 14.717 4.95097 14.8583 5.31083C15.2815 6.38906 15.4446 7.55191 15.3342 8.70498C15.2238 9.85805 14.843 10.9688 14.2228 11.9471C13.6026 12.9254 12.7604 13.7437 11.7647 14.3355C10.7689 14.9273 9.64763 15.2759 8.49186 15.3531C7.33609 15.4303 6.17841 15.2338 5.11281 14.7797C4.04722 14.3255 3.10373 13.6265 2.35896 12.7393C1.61419 11.8521 1.08912 10.8018 0.826393 9.67369C0.563662 8.54554 0.570672 7.37133 0.846852 6.24639C0.939028 5.87094 1.31811 5.6413 1.69356 5.73348C2.06901 5.82566 2.29865 6.20474 2.20648 6.58019C1.98278 7.49134 1.97711 8.44239 2.18991 9.35615C2.40271 10.2699 2.82798 11.1206 3.43122 11.8392C4.03445 12.5577 4.79863 13.1239 5.66171 13.4918C6.5248 13.8596 7.46247 14.0187 8.39859 13.9562C9.33471 13.8937 10.2429 13.6113 11.0494 13.132C11.8559 12.6527 12.5381 11.9899 13.0404 11.1975C13.5427 10.4051 13.8511 9.50547 13.9406 8.57153C14.03 7.6376 13.8979 6.69574 13.5551 5.82243C13.4138 5.46256 13.591 5.05631 13.9509 4.91504ZM11.9534 7.07443C12.3393 7.05237 12.6701 7.34736 12.6922 7.73333C12.7348 8.47857 12.5993 9.22325 12.2969 9.90571C11.9945 10.5882 11.5339 11.1888 10.9532 11.6578C10.6524 11.9008 10.2117 11.8539 9.96879 11.5532C9.72586 11.2524 9.77273 10.8117 10.0735 10.5688C10.4812 10.2394 10.8046 9.81771 11.0169 9.33854C11.2292 8.85936 11.3244 8.33651 11.2945 7.81325C11.2724 7.42728 11.5674 7.0965 11.9534 7.07443ZM7.3 12C7.3 11.6134 7.6134 11.3 8 11.3H8.00666C8.39326 11.3 8.70666 11.6134 8.70666 12C8.70666 12.3866 8.39326 12.7 8.00666 12.7H8C7.6134 12.7 7.3 12.3866 7.3 12Z"
      fill="currentColor"
    />
  </svg>
);
export default RadarIcon;