import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const JUEJIN_URL =
  "https://api.juejin.cn/content_api/v1/article/query_list?aid=2608&uuid=7371432359995180559&spider=0";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const payload = {
      "user_id": "281111673188424",
      "sort_type": 2,
      "cursor": "0"
    } as Record<string, string | number>;

    const upstream = await fetch(JUEJIN_URL, {
      method: "POST",
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const contentType = upstream.headers.get("content-type") ?? "application/json";
    const bodyText = await upstream.text();
    console.log(bodyText);

    return new NextResponse(bodyText, {
      status: upstream.status,
      headers: {
        "content-type": contentType,
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Upstream request failed" },
      { status: 500 }
    );
  }
}