// -------------------------------------------------------
// POST /api/users — 建立新使用者
//
// 請求格式：
//   POST http://localhost:3000/api/users
//   Content-Type: application/json
//   { "name": "小明", "email": "ming@example.com" }
//
// 成功回應：201 { id, name, email }
// 錯誤回應：400（缺少欄位）/ 500（伺服器錯誤）
// -------------------------------------------------------

import { prisma } from "@/lib/prisma";       // 從 lib/prisma.ts 匯入 Prisma Client 單例
import { NextResponse } from "next/server";  // Next.js 回應工具

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // 驗證必要欄位
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 寫入資料庫（對應 schema.prisma 中的 model User）
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}