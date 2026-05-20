import { AccessToken } from "livekit-server-sdk";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.LIVEKIT_URL;

  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json(
      { error: "LiveKit credentials not configured" },
      { status: 500 }
    );
  }

  // Create a random guest name so each caller is unique
  const guestName = "guest-" + Math.random().toString(36).substring(2, 8);

  const token = new AccessToken(apiKey, apiSecret, {
    identity: guestName,
    ttl: "10m", // token valid for 10 minutes
  });

  token.addGrant({
    roomJoin: true,
    room: "hotel-lobby",   // must match the room your agent is listening on
    canPublish: true,
    canSubscribe: true,
  });

  const jwt = await token.toJwt();

  return NextResponse.json({ token: jwt, url: wsUrl });
}