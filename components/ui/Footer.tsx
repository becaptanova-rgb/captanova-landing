export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center border-t border-white/5">
      <p className="font-syne text-lg font-extrabold tracking-widest gradient-gold mb-2">CAPTANOVA</p>
      <p className="text-ice-dim/40 text-xs">© 2025 Captanova · Copenhagen, Denmark · All rights reserved.</p>
      <p className="text-ice-dim/30 text-xs mt-1">
        Questions? <a href="mailto:hello@captanova.com" className="underline hover:text-gold transition-colors">hello@captanova.com</a>
      </p>
    </footer>
  );
}
