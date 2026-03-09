export default function WelcomeTab() {
  return (
    <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl">
      <h2 className="text-2xl font-bold text-accent-cyan mb-1">
        Welcome to DevExplorer IDE
      </h2>

      <div className="h-px bg-gradient-to-r from-accent-cyan/60 via-accent-purple/40 to-transparent my-4" />

      <section className="mb-6">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          What is this?
        </h3>
        <p className="text-text-muted">
          This is an interactive code explorer built for students like you.
          Here you can browse real programming syntax in a simulated code editor.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          How to explore languages
        </h3>
        <p className="text-text-muted mb-1">
          <span className="hidden md:inline">
            Look at the left sidebar under{' '}
            <span className="text-accent-cyan">&quot;PROGRAMMING LANGUAGES&quot;</span>.
          </span>
          <span className="md:hidden">
            Tap the <span className="text-accent-cyan">Language selection</span> at the top to see all available languages.
          </span>
        </p>
        <p className="text-text-muted">
          Select any file to open it in a new tab and see the code!
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          What are comments?
        </h3>
        <p className="text-text-muted mb-3">
          Comments are notes that programmers write in their code for humans to
          read. The computer ignores them completely. In most languages, comments
          start with <code className="text-accent-green">{'//'}</code> or{' '}
          <code className="text-accent-green">{'#'}</code>
        </p>
        <div className="bg-bg rounded-lg p-4 text-text-muted border border-border">
          <code className="block text-accent-green/80">
            {'// This is a comment in JavaScript, Java, C, C++, Go, Rust, Swift'}
          </code>
          <code className="block text-accent-green/80">
            {'# This is a comment in Python, Ruby'}
          </code>
          <code className="block text-accent-green/80">
            {'-- This is a comment in some other languages'}
          </code>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          What will I see in each file?
        </h3>
        <p className="text-text-muted mb-2">
          Each file contains a &quot;Hello World&quot; program — the very first thing most
          programmers learn to write. It also includes comments explaining:
        </p>
        <ul className="list-disc list-inside text-text-muted space-y-1 ml-2">
          <li>What the language is used for</li>
          <li>Where it is most popular</li>
          <li>Who typically uses it</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-base font-semibold text-text-primary mb-2">
          Tip: Word Wrap
        </h3>
        <p className="text-text-muted">
          Long lines of code can be cut off on smaller screens. Click the{' '}
          <span className="text-accent-cyan">Wrap</span> button in the top-right
          corner of the editor to enable word wrap — this makes all code visible
          without scrolling sideways.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold text-text-primary mb-2">
          Ready to start?
        </h3>
        <p className="text-accent-cyan">
          Click any programming language to begin exploring!
        </p>
      </section>
    </div>
  );
}
