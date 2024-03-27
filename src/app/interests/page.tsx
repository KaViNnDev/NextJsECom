"use client";

import { api } from "~/trpc/react";
import { InterestCard } from "../_components/InterestCard/InterestCard";
import { ENTRIES_PER_PAGE, INITIAL_PAGE } from "../constants";
import { getLoggedInStatus } from "../session";
import { redirect } from "next/navigation";

interface InterestPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const InterestPage = ({ searchParams }: InterestPageProps) => {
  const isUserLoggedIn = getLoggedInStatus();
  if (!isUserLoggedIn) {
    redirect("/login");
  }

  const PRODUCT_ITMES_LENGTH = 100;
  const page = searchParams?.page ?? INITIAL_PAGE;
  const perPage = searchParams?.per_page ?? ENTRIES_PER_PAGE;
  const products = api.products.getAllProducts.useQuery({
    productLength: PRODUCT_ITMES_LENGTH,
  });
  return (
    <InterestCard page={page} perPage={perPage} data={products.data ?? []} />
  );
};

export default InterestPage;
