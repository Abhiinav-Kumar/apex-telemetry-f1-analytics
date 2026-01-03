export interface Session {
    session_name: string;
    session_code: string;
    session_index: number;
    session_date_utc: string;
}

export interface SessionResponse {
    year: number;
    event: string;
    round: number;
    sessions: Session[];
}
