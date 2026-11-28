import type { ReviewedNote } from "@/types/reviewedNote";

const REVIEWED_NOTES_BY_DATE: Record<string, ReviewedNote[]> = {
  "2026-10-19": [{ id: 3, fileName: "functional-interface" }],
  "2026-10-18": [{ id: 9, fileName: "01_jpa-entity-mapping" }],
  "2026-10-16": [
    { id: 7, fileName: "02_constructor-injection" },
    { id: 5, fileName: "list-vs-iterable" },
  ],
  "2026-10-13": [{ id: 7, fileName: "02_constructor-injection" }],
  "2026-10-12": [{ id: 2, fileName: "gitignore-basics" }],
  "2026-10-10": [{ id: 6, fileName: "01_rest-annotations" }],
  "2026-10-07": [{ id: 6, fileName: "01_rest-annotations" }],
  "2026-10-05": [
    { id: 8, fileName: "03_rest-controller-basic" },
    { id: 4, fileName: "optional-orelsethrow-supplier" },
  ],
  "2026-09-28": [{ id: 8, fileName: "03_rest-controller-basic" }],
  "2026-09-25": [{ id: 8, fileName: "03_rest-controller-basic" }],
  "2026-09-21": [{ id: 4, fileName: "optional-orelsethrow-supplier" }],
  "2026-09-19": [{ id: 3, fileName: "functional-interface" }],
  "2026-09-14": [{ id: 4, fileName: "optional-orelsethrow-supplier" }],
  "2026-09-12": [{ id: 2, fileName: "gitignore-basics" }],
  "2026-09-11": [{ id: 4, fileName: "optional-orelsethrow-supplier" }],
  "2026-09-05": [{ id: 3, fileName: "functional-interface" }],
  "2026-08-29": [
    { id: 3, fileName: "functional-interface" },
    { id: 2, fileName: "gitignore-basics" },
  ],
  "2026-08-26": [{ id: 3, fileName: "functional-interface" }],
  "2026-08-22": [{ id: 2, fileName: "gitignore-basics" }],
  "2026-08-19": [{ id: 2, fileName: "gitignore-basics" }],
};

export { REVIEWED_NOTES_BY_DATE };
