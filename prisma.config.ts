// -------------------------------------------------------
// Prisma 7 設定檔
// 用途：集中管理 schema 路徑、migration 路徑、資料庫連線字串
// Prisma 7 起，連線字串不再寫在 schema.prisma，改在此檔管理
// -------------------------------------------------------

// 載入 .env 檔案中的環境變數（需安裝 dotenv：npm install --save-dev dotenv）
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  // schema 檔案位置（定義資料表結構的地方）
  schema: "prisma/schema.prisma",

  // migration 檔案輸出目錄（每次 prisma migrate dev 產生的 SQL 會放在這裡）
  migrations: {
    path: "prisma/migrations",
  },

  // 資料庫連線字串（從 .env 的 DATABASE_URL 讀取）
  // SQLite 範例：DATABASE_URL="file:./dev.db"
  // PostgreSQL 範例：DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
