import { useEffect } from 'react';

const useScript = (url:any) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    
    document.body.appendChild(script);
    console.log("hiya")
    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;