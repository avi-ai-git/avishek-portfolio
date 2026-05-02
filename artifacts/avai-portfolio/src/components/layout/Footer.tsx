export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 theme-terminal">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="font-mono text-2xl tracking-tight flex items-center mb-2">
              <span>AV</span>
              <span className="inline-block rounded-full bg-primary flex-shrink-0 mx-[3px]" style={{ width: "6px", height: "6px" }}></span>
              <span>AI</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm">Building, Teaching, Communicating AI.</p>
          </div>
          
          <div className="flex flex-col md:items-end gap-2 text-sm font-mono text-muted-foreground">
            <div className="flex gap-4">
              <a href="mailto:avishek.chatterjee@aol.com" className="hover:text-white transition-colors">Email</a>
              <a href="https://linkedin.com/in/avishek-chatterjee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p>Berlin 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
