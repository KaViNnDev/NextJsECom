import { type UUID } from "crypto";

type searchParamType = string | string[] | undefined;

interface product {
  id: UUID;
  name: string;
  price: string;
  description: string;
}

export interface PaginationPageProps {
  page: searchParamType;
  perPage: searchParamType;
}

export interface InterestCardProps extends PaginationPageProps {
  data: product[];
}
