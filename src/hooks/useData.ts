import { useEffect, useState } from "react";

const cache = new Map<string, any>();
const inFlightRequests = new Map<string, Promise<any>>();

const useData = <T,>(jsonPath: string) => {
  const [data, setData] = useState<T[]>(() => cache.get(jsonPath) ?? []);
  const [isLoading, setIsLoading] = useState(() => !cache.has(jsonPath));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const setResult = (responseData: T[]) => {
      if (!isMounted) return;
      setData(responseData);
      setIsLoading(false);
    };

    if (cache.has(jsonPath)) {
      setResult(cache.get(jsonPath));
      return;
    }

    const request =
      inFlightRequests.get(jsonPath) ??
      fetch(jsonPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${jsonPath}`);
          }
          return response.json();
        })
        .then((responseData: T[]) => {
          cache.set(jsonPath, responseData);
          return responseData;
        });

    inFlightRequests.set(jsonPath, request);

    request
      .then(setResult)
      .catch((fetchError: Error) => {
        if (!isMounted) return;
        setError(fetchError.message);
        setIsLoading(false);
      })
      .finally(() => {
        inFlightRequests.delete(jsonPath);
      });

    return () => {
      isMounted = false;
    };
  }, [jsonPath]);

  return { data, isLoading, error };
};

export default useData;
