export abstract class BaseService {
  protected storeCache<T>(data: T, key: string) {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  }

  getFromCache<T>(key: string, cacheMaxTime: number): T | null {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData) as {
        timestamp: number;
        data: T;
      };
      if (Date.now() - parsedData.timestamp < cacheMaxTime) {
        return parsedData.data;
      } else {
        localStorage.removeItem(key);
      }
    }
    return null;
  }
}
