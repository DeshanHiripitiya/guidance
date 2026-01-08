import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="relative group">
      <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
      <CopyButton code={code} />
    </div>
  );
}
