import { useState } from "react";

function useClipboard(options = { timeout: 2000 }) {
  const [copied, setCopied] = useState(false);

  const copy = (valueToCopy: string) => {
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, options.timeout);
  };

  return {
    copy,
    copied,
  };
}

export default useClipboard;
