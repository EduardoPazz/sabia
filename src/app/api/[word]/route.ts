import { fetchSyllables } from "lib/fetchSyllables";
import { NextResponse } from "next/server";

export const runtime = "edge";

const headers = {
  "Cache-Control": "max-age=2678400, s-maxage=2678400",
  "CDN-Cache-Control": "max-age=2678400, s-maxage=2678400",
  "Vercel-CDN-Cache-Control": "max-age=2678400, s-maxage=2678400",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

export async function GET(
  _: unknown,
  { params }: { params: { word: string } },
) {
  const { word } = params;

  let response;

  try {
    response = await fetchSyllables(word);
  } catch (e) {
    return NextResponse.json((e as Error).stack, { status: 503 });
  }

  if (!response) {
    return NextResponse.json(`${word} not found`, { status: 404 });
  }

  return NextResponse.json(response, { status: 200, headers });
}
