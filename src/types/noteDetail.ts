import type { ReviewState } from "@/types/reviewState";

export type NoteDetail = {
  id: number;
  html: string;
  reviewState: ReviewState;
};
