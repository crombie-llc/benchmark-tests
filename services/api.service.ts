async get<T = unknown>(endpoint: string): Promise<T> {
    return response.json() as T;
  async post<T = unknown, D = unknown>(
    endpoint: string, 
    data: D
  ): Promise<T> {
    return response.json() as T;