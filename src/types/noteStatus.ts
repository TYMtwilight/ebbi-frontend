import type { Badge } from "@/types/badge";

export type NoteStatus = {
  id: number;
  fileName: string;
  folder: string; // 例："spring/data"（ファイル名を含まない）
  badge: Badge;
  reviewedCount: number;
  requiredCount: number;
  remainingCount: number;
  nextReviewDate: string | null;
  lastReviewedDate: string | null;
  overdueDays: number | null;
};
