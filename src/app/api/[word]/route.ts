import { getDictFields } from "lib/getDictFields";
import { parseFields } from "lib/parseFields";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const HEADERS = {
  "Cache-Control": "max-age=2678400, s-maxage=2678400",
  "CDN-Cache-Control": "max-age=2678400, s-maxage=2678400",
  "Vercel-CDN-Cache-Control": "max-age=2678400, s-maxage=2678400",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

export async function GET(
  request: NextRequest,
  { params }: { params: { word: string } },
) {
  const { word } = params;
  const fields = parseFields(request.nextUrl.searchParams.get("fields"));

  try {
    return Response.json(await getDictFields(word, fields), {
      status: 200,
      headers: HEADERS,
    });
  } catch (e) {
    return NextResponse.json((e as Error).stack, { status: 503 });
  }
}
