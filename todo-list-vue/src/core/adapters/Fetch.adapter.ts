import { IHttpClient } from "../ports/Http";

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    const payload = await res.json();
    return payload;
  }

  async post<T>(url: string, options: RequestInit): Promise<T> {
    const res = await fetch(url, { method: "POST", ...options });
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    const payload = (await res.json()) as T;
    return payload;
  }

  async put<T>(url: string, options: RequestInit): Promise<T> {
    const res = await fetch(url, { method: "PUT", ...options });
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    const payload = (await res.json()) as T;
    return payload;
  }

  async delete<T>(url: string): Promise<T> {
    const res = await fetch(url, { method: "DELETE" });
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }

    const payload = (await res.json()) as T;
    return payload;
  }
}
