import { NextResponse } from "next/server";

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

function todayKey() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `ehliyetal:counter:${y}-${m}-${d}`;
}

async function upstash(path: string) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  const res = await fetch(`${UPSTASH_URL}${path}`, {
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function GET() {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return NextResponse.json({ enabled: false, count: 0 });
  }
  const data = await upstash(`/get/${todayKey()}`);
  const count = data?.result ? Number(data.result) : 0;
  return NextResponse.json({ enabled: true, count });
}

export async function POST() {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return NextResponse.json({ enabled: false, count: 0 });
  }
  const data = await upstash(`/incr/${todayKey()}`);
  const count = data?.result ? Number(data.result) : 0;
  // Anahtarın süresiz büyümemesi için 2 günlük TTL ayarla (sessizce, hatasını önemseme)
  upstash(`/expire/${todayKey()}/172800`).catch(() => {});
  return NextResponse.json({ enabled: true, count });
}
