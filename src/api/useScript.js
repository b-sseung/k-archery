import { useState, useEffect } from 'react';

export const useScript = (src) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
    }

    const handleLoad = () => setLoading(true);
    const handleError = (e) => setError(e);

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [src]);

  return [loading, error];
};
