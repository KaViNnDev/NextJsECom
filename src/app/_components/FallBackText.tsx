import { Icons } from ".";

export const FallBackComponent = () => {
  return (
    <span className="fallback-wrapper">
      <Icons variant="Spinner" height={25} width={25} />
    </span>
  );
};
