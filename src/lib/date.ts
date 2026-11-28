import { MOCK_TODAY } from "@/mocks/today";

// getDay() の値（日曜が0）で引くので、日曜始まりの順に並べる
const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"] as const;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** 今日の日付を "YYYY-MM-DD" の形で返す */
// TODO: 固定の日付はmocks/today.tsを見る。来期はここを本当の今日に変える
// MEMO: new Date().toISOString() はUTCで日付を作るので、日本時間の朝9時前には
//       前の日になる。
export function getToday(): string {
  return MOCK_TODAY;
}

/**
 * "YYYY-MM-DD" を "2026年10月5日（月）" の形にする
 * @throws 形式が違う、または存在しない日付のとき
 */
export function formatDate(dateString: string): string {
  if (!DATE_PATTERN.test(dateString)) {
    throw new Error(`日付の形式が違います：${dateString}`);
  }
  const [year, month, day] = dateString.split("-").map(Number);
  // Date の月は0始まり（1月が0）なので1を引く
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, day);
  // Date は範囲の外の月・日（2月30日、13月、0日など）を指定すると、前後の月にずれる。
  // そのため、作った Date の月が指定した月とずれたら、存在しない日付とみなす。
  if (date.getMonth() !== monthIndex) {
    throw new RangeError(`存在しない日付です：${dateString}`);
  }
  const weekday = WEEKDAYS[date.getDay()];
  return `${year}年${month}月${day}日（${weekday}）`;
}
