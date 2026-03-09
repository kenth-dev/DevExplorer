interface GlitchTextProps {
  text: string;
}

export default function GlitchText({ text }: GlitchTextProps) {
  return (
    <span
      className="glitch-text inline-block text-accent-cyan animate-glitch"
      data-text={text}
    >
      {text}
    </span>
  );
}
