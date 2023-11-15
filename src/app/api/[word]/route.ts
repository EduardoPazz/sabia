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

const buildSuccessResponse = (body: string) => ({
  body,
  init: { status: 200, headers },
});

const buildNotFoundResponse = (word: string) => ({
  body: `${word} not found`,
  init: { status: 404 },
});

const buildServerErrorResponse = (e: Error) => ({
  body: e.stack,
  init: { status: 503 },
});

export async function GET(
  _: unknown,
  { params }: { params: { word: string } },
) {
  const { word } = params;

  return fetchSyllables(word)
    .then((body) =>
      body ? buildSuccessResponse(body) : buildNotFoundResponse(word),
    )
    .catch(buildServerErrorResponse)
    .then(({ body, init }) => NextResponse.json(body, init));
}
