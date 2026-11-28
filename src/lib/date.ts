import { MOCK_TODAY } from "@/mocks/today";

/** 今日の日付を "YYYY-MM-DD" の形で返す */
// TODO: 固定の日付はmocks/today.tsを見る。来期はここを本当の今日に変える
// MEMO: new Date().toISOString() はUTCで日付を作るので、日本時間の朝9時前には
//       前の日になる。
export function getToday(): string {
  return MOCK_TODAY;
}
