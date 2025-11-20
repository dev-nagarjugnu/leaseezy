import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand-navy py-10 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.jpeg"
            alt="LeaseEzy logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Commercial Leasing
          </span>
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-white/60">
          © {new Date().getFullYear()} LeaseEzy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

