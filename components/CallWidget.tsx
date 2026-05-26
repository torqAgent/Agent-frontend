"use client";
import { useState, useCallback } from "react";
import {
  LiveKitRoom, RoomAudioRenderer, useVoiceAssistant,
  BarVisualizer, VoiceAssistantControlBar, DisconnectButton,
} from "@livekit/components-react";
import { Loader2 } from "lucide-react";

function CallUI({ onEnd }: { onEnd: () => void }) {
  const { state, audioTrack } = useVoiceAssistant();
  const labels: Record<string, string> = {
    connecting: "Connecting", initializing: "Starting agent",
    listening: "Listening", thinking: "Thinking",
    speaking: "Speaking", disconnected: "Call ended",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{
          width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold)",
          display: "inline-block",
          animation: (state === "listening" || state === "speaking") ? "goldPulse 1.5s ease-in-out infinite" : "none",
        }} />
        <span className="mono" style={{ color: "var(--gold)", fontSize: "10px" }}>
          {labels[state] ?? "Connected"}
        </span>
      </div>
      <div style={{ width: "100%", height: "56px" }}>
        <BarVisualizer state={state} trackRef={audioTrack} barCount={28} style={{ width: "100%", height: "100%" }} />
      </div>
      <VoiceAssistantControlBar />
      <DisconnectButton onClick={onEnd}>
        <span className="btn-outline" style={{ color: "#f87171", borderColor: "#7f1d1d", fontSize: "11px", padding: "0.7rem 2rem" }}>
          End Call
        </span>
      </DisconnectButton>
    </div>
  );
}

export default function CallWidget() {
  const [phase, setPhase] = useState<"idle" | "loading" | "connected">("idle");
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");

  const startCall = useCallback(async () => {
    setPhase("loading");
    try {
      const res = await fetch("/api/token");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setToken(data.token);
      setUrl(data.url);
      setPhase("connected");
    } catch (e) {
      console.error(e);
      setPhase("idle");
      alert("Could not connect. Check your .env.local credentials.");
    }
  }, []);

  const endCall = useCallback(() => {
    setPhase("idle");
    setToken("");
    setUrl("");
  }, []);

  if (phase === "idle") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
      <button
        onClick={startCall}
        className="btn-primary"
        style={{ fontSize: "12px", padding: "1rem 2.5rem", gap: "0.75rem" }}
      >
        <span style={{
          width: "8px", height: "8px", borderRadius: "50%",
          background: "var(--charcoal)", display: "inline-block",
          animation: "goldPulse 2s ease-in-out infinite",
        }} />
        Begin Call
      </button>
      <span className="mono" style={{ color: "var(--muted)", fontSize: "9px" }}>
        Tap to connect · Works in browser
      </span>
    </div>
  );

  if (phase === "loading") return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: "1rem", padding: "2rem 0",
    }}>
      <Loader2 style={{ width: "22px", height: "22px", color: "var(--gold)", animation: "spin 1s linear infinite" }} />
      <span className="mono" style={{ color: "var(--muted)", fontSize: "10px" }}>Connecting to agent</span>
    </div>
  );

  return (
    <LiveKitRoom
      token={token}
      serverUrl={url}
      connect
      audio
      video={false}
      onDisconnected={endCall}
      style={{ width: "100%" }}
    >
      <RoomAudioRenderer />
      <CallUI onEnd={endCall} />
    </LiveKitRoom>
  );
}