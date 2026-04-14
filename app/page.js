// app/page.js

export default function Home() {
  return (
    <div>
      {/* Hero / Encabezado */}
      <div className="text-white p-4 rounded mb-4" style={{ backgroundColor: "#212529" }}>
        <h1 className="display-5 fw-bold">Sistema GTH</h1>
        <p className="lead mb-0">Gestión de Talento Humano</p>
      </div>

      {/* Descripción */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">📋 Sobre el sistema</h5>
              <p className="card-text">
                Plataforma orientada a la gestión y organización de información
                relacionada al talento humano. Permite centralizar datos y facilitar
                procesos internos.
              </p>

              <hr />

              <h5 className="card-title text-primary">🎯 Propósito</h5>
              <p className="card-text">
                Brindar una herramienta simple para mejorar la administración,
                seguimiento y análisis de información.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h1 className="display-4 text-primary">📊</h1>
              <h5 className="card-title">Reportes</h5>
              <p className="card-text text-muted">
                Visualización general de información.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h1 className="display-4 text-primary">✅</h1>
              <h5 className="card-title">Gestión</h5>
              <p className="card-text text-muted">
                Administración de procesos internos.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <h1 className="display-4 text-primary">📈</h1>
              <h5 className="card-title">Análisis</h5>
              <p className="card-text text-muted">
                Apoyo en la toma de decisiones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">✨ Beneficios</h5>
              <ul className="mt-3 mb-0">
                <li>Centralización de información</li>
                <li>Mejor organización de datos</li>
                <li>Facilidad de uso</li>
                <li>Soporte para análisis general</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}