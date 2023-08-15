function fetchAbsolute(
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response>,
) {
  return (baseUrl: URL) => (url: string, config: RequestInit) =>
    url.startsWith("/") ? fetch(baseUrl + url, config) : fetch(url, config);
}

export const api = fetchAbsolute(fetch)(
  new URL(process.env.NEXT_PUBLIC_API_URL!),
);
