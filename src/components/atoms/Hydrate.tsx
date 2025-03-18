"use client";

import {
  HydrationBoundary,
  HydrationBoundaryProps,
} from "@tanstack/react-query";

type Props = HydrationBoundaryProps;
const Hydrate = (props: Props) => {
  return <HydrationBoundary {...props} />;
};

export default Hydrate;
