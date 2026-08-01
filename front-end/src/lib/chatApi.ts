export const baseUrl =  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

const SESSION_ID_KEY = "chat_session_id";

export function getSessionId(): string {
  let id = localStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

export interface HistoryItem {
  input: string;
  summary: string;
}

export async function fetchHistory(sessionId: string): Promise<HistoryItem[]> {
  const response = await fetch(`${baseUrl}/history?session_id=${sessionId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch history: ${response.status}`);
  }
  return response.json();
}
