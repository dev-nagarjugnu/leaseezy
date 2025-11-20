const logos = ['Google', 'Amazon', 'Microsoft', 'JLL', 'Accenture', 'Deloitte'];

export function ClientLogos() {
  return (
    <section className="bg-white py-16 text-brand-navy">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-red">
            Partners
          </p>
          <h2 className="text-3xl font-bold">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xl font-semibold uppercase tracking-wider text-slate-400 transition hover:text-brand-navy"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;

