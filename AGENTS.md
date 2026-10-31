<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## プロジェクト概要

Ebbi：tech-notesのHTMLノートを、忘却曲線に沿って復習するアプリのフロントエンド（モック版）。
データはダミー、状態はメモリ上のみ（リロードで元に戻る）。「今日」は2026/10/19に固定。

## フォルダ構成

```
src/
  app/         画面（URLと対応。例：app/notes/[id]/page.tsx）
  components/  部品（ボタン、バッジ、トースト、ダイアログ、ヘッダー）
  contexts/    完了状態の共有（React Context）
  lib/         データ取得関数（notes.ts に1ファイルでまとめる）、日付の関数（date.ts）
  mocks/       ダミーデータ（6つのAPIの応答データ）。来期は削除する
  types/       型（データの形）
public/
  note-files/  ノートHTML（仮置き。置き場所は調査2で決め直す）
```

- 画面はデータ取得関数（lib/notes.ts）だけを呼ぶ。mocks/ を画面や部品から直接読まない
- 画面は受け取ったデータをそのまま表示する。絞り込みや計算はしない

## ブランチ

- `feature/作業ID-内容` を切り、PR経由でmainにマージする（例：feature/2-03-note-list）
- mainに直接pushしない

## コミットメッセージ

- 1行目：日本語で何をしたかを40字以内
- 空行を1行入れる
- 本文：変更項目を箇条書き。1項目1行、最大3項目。3項目に収まらなければコミットを分ける。変更が1つなら本文は省略可
- 理由・経緯は書かない。作業IDはブランチ名に入れ、コミットメッセージには入れない
- 長文、英語の見出し、絵文字は使わない
