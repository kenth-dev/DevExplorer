interface LineNumbersProps {
  count: number;
}

export default function LineNumbers({ count }: LineNumbersProps) {
  return (
    <div
      className="select-none text-right pr-3 pl-3 sm:pr-4 sm:pl-4 py-4 text-text-muted font-mono text-xs sm:text-sm leading-[1.6] shrink-0"
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i + 1}>{i + 1}</div>
      ))}
    </div>
  );
}
