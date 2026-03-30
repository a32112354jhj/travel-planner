// -------------------------------------------------------
// Prisma Client 單例（Singleton）
//
// 為什麼需要這個檔案？
// Next.js 開發模式會頻繁熱重載（HMR），每次重載都會重新執行模組。
// 如果每次都 new PrismaClient()，會不斷建立新的資料庫連線，很快耗盡。
// 把實例掛在 globalThis 上，就能讓整個應用共用同一個連線。
//
// 使用方式：
//   import { prisma } from "@/lib/prisma";
//   const users = await prisma.user.findMany();
// -------------------------------------------------------

import { PrismaClient } from "@prisma/client";
// Prisma 7 不再內建資料庫 driver，需要明確傳入 adapter
// SQLite 對應的 adapter 是 @prisma/adapter-better-sqlite3
// 如果換成 PostgreSQL，改用 @prisma/adapter-pg
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// 在 globalThis 上保留 prisma 實例，避免 HMR 時重複建立連線
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // Prisma 7 必須傳入 adapter，指定用什麼 driver 連資料庫
    // url 從 .env 的 DATABASE_URL 讀取
    adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! }),
  });

// 開發環境下，將實例存到 globalThis，避免 HMR 重複建立
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}