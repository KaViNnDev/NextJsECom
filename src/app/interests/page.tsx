import { InterestCard } from "../_components/InterestCard/InterestCard";
import { ENTRIES_PER_PAGE, INITIAL_PAGE } from "../constants";

interface InterestPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const InterestPage = ({ searchParams }: InterestPageProps) => {
  const page = searchParams?.page ?? INITIAL_PAGE;
  const perPage = searchParams?.per_page ?? ENTRIES_PER_PAGE;
  return <InterestCard page={page} perPage={perPage} />;
};

export default InterestPage;
