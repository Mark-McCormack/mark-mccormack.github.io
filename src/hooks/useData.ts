import { useEffect, useState } from "react";

// One shared request per file, reused across pages and re-mounts.
const cache = new Map<string, Promise<any[]>>();

const useData = <T>(name: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    let live = true;
    const url = `/assets/json/${name}.json`;
    if (!cache.has(url))
      cache.set(
        url,
        fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      );
    cache.get(url)!.then(
      (d) => live && setData(d),
      () => {
        cache.delete(url);
        if (live) setError(true);
      }
    );
    return () => {
      live = false;
    };
  }, [name]);

  return { data: data ?? [], isLoading: !data && !error, error };
};

export default useData;
