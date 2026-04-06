import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="DevOps, observabilidad, automatización y troubleshooting real">
      <main className="homepage">
        <section className="hero hero--dark custom-hero">
          <div className="container">
            <h1 className="hero__title">Zwei-ni </h1>
            <h3>Elias Godoy</h3>
            <p className="hero__subtitle">
              DevOps Engineer • Observabilidad • Kubernetes • CI/CD • Seguridad
            </p>
            <div className="hero-buttons">
              <Link className="button button--primary button--lg" to="/blog">
                Leer blog
              </Link>
              <Link className="button button--secondary button--lg" to="/docs">
                Ver notas técnicas
              </Link>
            </div>
          </div>
        </section>

        <section className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--4">
              <h2>Notas reales</h2>
              <p>Guías, troubleshooting y casos reales de infraestructura.</p>
            </div>
            <div className="col col--4">
              <h2>Proyectos</h2>
              <p>Implementaciones, labs y arquitectura aplicada.</p>
            </div>
            <div className="col col--4">
              <h2>Contenido en video</h2>
              <p>Documentación de proyectos y contenido técnico en YouTube.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}