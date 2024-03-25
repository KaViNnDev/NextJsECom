import { type SVGProps } from "./types";

export const SearchIcon: React.FC<SVGProps> = ({
  height,
  width,
  fill,
  onClick,
}) => {
  return (
    <svg
      width={width ?? "32"}
      height={height ?? "32"}
      viewBox="0 0 32 32"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M25.5145 24.4586L20.8214 19.7655C22.1843 18.1309 22.8646 16.0338 22.7206 13.9104C22.5767 11.787 21.6197 9.80084 20.0486 8.36511C18.4776 6.92938 16.4135 6.15462 14.2858 6.202C12.158 6.24939 10.1305 7.11526 8.62492 8.61951C7.11935 10.1237 6.25168 12.1505 6.20241 14.2782C6.15315 16.4059 6.92609 18.4707 8.36043 20.043C9.79477 21.6153 11.7801 22.5741 13.9033 22.7199C16.0266 22.8657 18.1243 22.1873 19.7601 20.8258L24.4533 25.5199C24.5229 25.5896 24.6057 25.6448 24.6967 25.6826C24.7878 25.7203 24.8853 25.7397 24.9839 25.7397C25.0824 25.7397 25.18 25.7203 25.2711 25.6826C25.3621 25.6448 25.4448 25.5896 25.5145 25.5199C25.5842 25.4502 25.6395 25.3675 25.6772 25.2764C25.7149 25.1854 25.7343 25.0878 25.7343 24.9893C25.7343 24.8907 25.7149 24.7931 25.6772 24.7021C25.6395 24.611 25.5842 24.5283 25.5145 24.4586ZM7.73388 14.4893C7.73388 13.1542 8.12977 11.8492 8.87146 10.7392C9.61316 9.62912 10.6674 8.76396 11.9008 8.25307C13.1342 7.74218 14.4914 7.60851 15.8007 7.86896C17.1101 8.12941 18.3129 8.77228 19.2569 9.71628C20.2009 10.6603 20.8437 11.863 21.1042 13.1724C21.3646 14.4818 21.231 15.839 20.7201 17.0724C20.2092 18.3058 19.344 19.36 18.234 20.1017C17.124 20.8434 15.8189 21.2393 14.4839 21.2393C12.6943 21.2373 10.9785 20.5255 9.71311 19.26C8.44767 17.9946 7.73587 16.2789 7.73388 14.4893Z"
        fill="#333333"
      />
    </svg>
  );
};