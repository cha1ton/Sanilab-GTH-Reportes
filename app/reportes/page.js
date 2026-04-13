// app/reportes/page.js

"use client";

import { useEffect, useState } from "react";
import { getPostulantes } from "../../services/postulantesService";
import { normalizarArea, normalizarCarrera, normalizarFuenteCaptacion } from "../../utils/normalizersCampos";
import BarChart from "../../components/BarChart";

export default function ReportesPage() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    universidades: {},
    areas: {},
    carreras: {},
    fuentesCaptacion: {},
  });

  async function loadData() {
    const res = await getPostulantes();

    // Normalizar todos los campos
    const cleaned = res.map((item) => ({
      ...item,
      area: normalizarArea(item.area),
      carrera: normalizarCarrera(item.carrera),
      fuenteCaptacion: normalizarFuenteCaptacion(item.fuenteCaptacion),
    }));

    setData(cleaned);
    generarEstadisticas(cleaned);
  }

  function generarEstadisticas(data) {
    const universidades = {};
    const areas = {};
    const carreras = {};
    const fuentesCaptacion = {};

    data.forEach((item) => {
      universidades[item.universidad] = (universidades[item.universidad] || 0) + 1;
      areas[item.area] = (areas[item.area] || 0) + 1;
      carreras[item.carrera] = (carreras[item.carrera] || 0) + 1;
      fuentesCaptacion[item.fuenteCaptacion] = (fuentesCaptacion[item.fuenteCaptacion] || 0) + 1;
    });

    setStats({ universidades, areas, carreras, fuentesCaptacion });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>📊 Reporte de Postulantes Antiguos 2024-2025</h2>

      <p>Total registros: {data.length}</p>

      {/* UNIVERSIDADES */}
      <h4 className="mt-4">🏫 Universidades</h4>
      <ul>
        {Object.entries(stats.universidades)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
      </ul>

      {/* AREAS */}
      <h4 className="mt-4">🏢 Áreas</h4>
      <ul>
        {Object.entries(stats.areas)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
      </ul>

      {/* CARRERAS */}
      <h4 className="mt-4">🎓 Carreras</h4>
      <ul>
        {Object.entries(stats.carreras)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
      </ul>

      {/* NUEVO: FUENTES DE CAPTACIÓN */}
      <h4 className="mt-4">📢 ¿Cómo se enteró de nuestra convocatoria?</h4>
      <ul>
        {Object.entries(stats.fuentesCaptacion)
          .sort((a, b) => b[1] - a[1])
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
      </ul>

      <h4 className="mt-4">📊 Top Universidades</h4>
      <BarChart dataObj={stats.universidades} title="Universidades" />
      
      <h4 className="mt-4">📊 Top Áreas</h4>
      <BarChart dataObj={stats.areas} title="Áreas" />
      
      <h4 className="mt-4">📊 Top Carreras</h4>
      <BarChart dataObj={stats.carreras} title="Carreras" />
      
      {/* NUEVO GRÁFICO */}
      <h4 className="mt-4">📢 Canales de Captación</h4>
      <BarChart dataObj={stats.fuentesCaptacion} title="Fuentes de captación" />
    </div>
  );
}