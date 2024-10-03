"use client";

import {
  PageSpinner,
  PageSpinnerWrapper,
} from "@/components/ui/Spinners/PageSpinner.styled";

export default function Loading() {
  return (
    <PageSpinnerWrapper>
      <PageSpinner />
    </PageSpinnerWrapper>
  );
}
