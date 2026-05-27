# BTC-10 Fullstack Solo

リコーダーの

---

# 技術スタック

## Backend

- Node.js
- Express
- Knex
- PostgreSQL

## Frontend

- React 19
- TypeScript
- Vite

---

# ディレクトリ構成

```txt
.
├── frontend/
├── src/
├── db/
├── public/
├── server.js
└── app.js
```

---

# セットアップ

## 1. リポジトリをクローン

```bash
git clone <repository-url>
cd btc-10-fullstack-solo
```

---

## 2. Backend依存関係インストール

```bash
npm install
```

---

## 3. Frontend依存関係インストール

```bash
cd frontend
npm install
```

---

# 環境変数

ルートディレクトリに `.env` を作成してください。

```env
POSTGRES_DB=recorder
POSTGRES_USER=user(例)
NODE_ENV=development
```

---

# Database Setup

## migration実行

```bash
npm run db:migrate
```

---

## seed実行

```bash
npm run db:seed
```

---

# 起動方法

## Backend起動

ルートディレクトリで：

```bash
npm run dev
```

サーバー起動：

```txt
http://localhost:3000
```

---

## Frontend起動

別ターミナルで：

```bash
cd frontend
npm run dev
```

Vite開発サーバー：

```txt
http://localhost:5173
```

---

# Frontend Build

```bash
npm run build
```

---

# 使用可能スクリプト

## Backend

```bash
npm run start
```

本番起動

```bash
npm run dev
```

nodemon起動

---

# Frontend Scripts

```bash
cd frontend
npm run dev
```

開発サーバー起動

```bash
npm run build
```

production build

```bash
npm run preview
```

build preview

---

# 使用ポート

Service ：　Port
Backend ：　3000
Frontend(Vite) ：　5173
PostgreSQL ：　5432
