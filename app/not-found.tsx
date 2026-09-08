export default function NotFound() {
  return (
    <section className="pad py-40">
      <div className="wrap">
        <h1 className="display h1">404</h1>
        <p className="mt-6 text-sm text-muted">Cette page est introuvable.</p>
        <a href="/" className="mt-8 inline-block border-b border-paper pb-1">
          Retour à l&apos;accueil
        </a>
      </div>
    </section>
  );
}
