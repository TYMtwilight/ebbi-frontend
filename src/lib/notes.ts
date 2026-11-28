/**
 * データ取得関数。今はダミーデータ（src/mocks/）を返す。
 * 画面が値を書き換えてもダミーデータが変わらないよう、コピーを返す。
 */
import { ALL_NOTES } from "@/mocks/allNotes";
import { NOTE_DETAILS } from "@/mocks/noteDetails";
import { NOTE_STATUSES } from "@/mocks/noteStatuses";
import { REVIEWED_DATES } from "@/mocks/reviewedDates";
import { REVIEWED_NOTES_BY_DATE } from "@/mocks/reviewedNotesByDate";
import { TODAY_NOTES } from "@/mocks/todayNotes";
import type { FileNode } from "@/types/fileNode";
import type { FolderNode } from "@/types/folderNode";
import type { NoteDetail } from "@/types/noteDetail";
import type { NoteStatus } from "@/types/noteStatus";
import type { ReviewedNote } from "@/types/reviewedNote";
import type { TodayNote } from "@/types/todayNote";

/** 今日の復習のノート一覧を返す。0件なら []。 */
export async function getTodayNotes(): Promise<TodayNote[]> {
  return structuredClone(TODAY_NOTES);
}

/** ノート詳細（HTMLとボタンの状態）を返す。idのノートが存在しなければ null。 */
export async function getNoteById(id: number): Promise<NoteDetail | null> {
  const note = NOTE_DETAILS.find((n) => n.id === id);
  return note ? structuredClone(note) : null;
}

/** 復習ステータスを返す。idのノートが存在しなければ null。 */
export async function getNoteStatusById(
  id: number,
): Promise<NoteStatus | null> {
  const status = NOTE_STATUSES.find((s) => s.id === id);
  return status ? structuredClone(status) : null;
}

/** フォルダとノートのツリーを返す。ノートが1件もなければ []。 */
export async function getAllNotes(): Promise<(FolderNode | FileNode)[]> {
  return structuredClone(ALL_NOTES);
}

/** 復習した日付の一覧を新しい順で返す。0件なら []。 */
export async function getReviewedDates(): Promise<string[]> {
  return structuredClone(REVIEWED_DATES);
}

/** その日に復習したノートの一覧を返す。その日に復習したノートがなければ null。 */
export async function getReviewedNotesByDate(
  date: string,
): Promise<ReviewedNote[] | null> {
  const notes = REVIEWED_NOTES_BY_DATE[date];
  return notes && notes.length > 0 ? structuredClone(notes) : null;
}
