# Hiro Takahashi — Interactive Portfolio

高橋広大（Web Developer / Frontend Developer）の採用応募用ポートフォリオです。JavaScript・PHPを使用したWeb制作・開発の実務経験をベースに、現在はReactを使用したWebアプリケーション開発にも領域を広げていることを、実績とインタラクティブなUIで紹介します。

## Purpose

- Web制作・SEO領域での実務経験と、現在拡張しているReact開発の現在地を整理する
- 技術・プロジェクト種別を切り替えながら、採用担当者が短時間で経験を把握できるようにする
- 実務で必要なレスポンシブ対応、アクセシブルな操作、SPA配信をひとつの成果物で示す

## Tech stack

- React / TypeScript / Vite
- JavaScript / HTML / CSS
- Git / GitHub
- Cloudflare Workers Static Assets + `@cloudflare/vite-plugin`
- Figma

## Local development

```bash
pnpm install
pnpm dev
```

開発サーバーは `http://localhost:5173` で起動します。

## Build

```bash
pnpm run build
pnpm run preview
```

`vite.config.ts` は Cloudflare の現行 Vite plugin を使用し、`wrangler.jsonc` は Workers Static Assets の `assets.directory` と SPA の `not_found_handling` を設定しています。旧 Workers Sites API は使用していません。

## Deploy

初回のみ Wrangler にログインしてから実行します。

```bash
npx wrangler login
pnpm run deploy
```

GitHub: https://github.com/testestestes2211-arch/hiro-takahashi-portfolio

公開URL: `https://hiro-takahashi-portfolio.testestestes2211.workers.dev`

## Project data

プロジェクト表示は `src/main.tsx` の `projects` 配列で管理しています。プロジェクトを追加する場合は、タイトル、説明、技術タグ、カテゴリ、URLを1エントリ追加してください。技術・カテゴリのフィルタと詳細モーダルに自動反映されます。

## Security

秘密情報や `.env` ファイルはコミットしません。`.gitignore` で環境変数、Wranglerの生成物、依存関係、ビルド成果物を除外しています。
