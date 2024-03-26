"use client";

import { useRouter } from "next/navigation";
import { type PropsWithChildren } from "react";

interface PaginatedButtonProps extends PropsWithChildren {
  page: string;
  perPage: string;
  isDisabled?: boolean;
  isActive?: boolean;
}

export const PaginatedButton: React.FC<PaginatedButtonProps> = ({
  page,
  perPage,
  children,
  isDisabled,
  isActive,
}) => {
  const router = useRouter();
  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        router.push(`/interests?page=${page}&per_page=${perPage}`);
      }}
      className={`app-form-sub-text-3 ${isActive === true ? "text-black" : "text-customSteelGray"}`}
    >
      {children}
    </button>
  );
};
