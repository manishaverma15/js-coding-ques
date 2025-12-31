import { memo } from "react";

const CodeBlock = memo(({ code }: { readonly code: string }) => (
  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mt-3">
    <code>{code}</code>
  </pre>
));

CodeBlock.displayName = "CodeBlock";
export default CodeBlock;
