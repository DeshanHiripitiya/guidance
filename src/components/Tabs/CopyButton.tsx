'use client';

import { useState } from 'react';

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-3 py-1 text-xs font-medium rounded bg-zinc-700 hover:bg-zinc-600 text-white transition-colors"
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  );
}
