import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="content-block">
          <p className="eyebrow">404</p>
          <h1>La pagina que buscas no esta disponible</h1>
          <p className="lead">
            Puedes volver al inicio, revisar los servicios o escribirnos para encontrar el tramite
            correcto.
          </p>
          <div className="button-row">
            <Link href="/" className="button button-primary">
              Ir al inicio
            </Link>
            <Link href="/servicios" className="button button-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
