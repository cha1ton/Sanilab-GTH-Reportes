// components/Timeline.js

"use client";

import { useState } from "react";
import { updateOnboarding } from "../services/onboardingService";

export default function Timeline({ employee, reload }) {
  const [updating, setUpdating] = useState(false);
  const [localEstado, setLocalEstado] = useState(employee.estado);

  const steps = [
    "Inicio",
    "Creación de correo Sanilab",
    "Carta de Compromiso",
    "Presentación con jefe de área",
    "Leer manuales",
    "Evaluación Final",
    "Finalizado",
  ];

  const currentIndex = steps.indexOf(localEstado);

  async function changeStep(step, index) {
    if (updating || index === currentIndex) return;
    
    // Actualización optimista
    setLocalEstado(step);
    setUpdating(true);
    
    try {
      await updateOnboarding(employee.id, {
        "Onboarding Estado": step,
      });
      // Recargar datos en segundo plano sin recargar toda la página
      await reload();
    } catch (error) {
      console.error("Error al actualizar:", error);
      // Revertir en caso de error
      setLocalEstado(employee.estado);
      alert("Error al actualizar el estado");
    } finally {
      setUpdating(false);
    }
  }

  // Calcular colores degradados
  const totalSteps = steps.length - 1;
  const progressPercent = (currentIndex / totalSteps) * 100;
  
  const getStepColor = (index) => {
    const ratio = index / totalSteps;
    if (ratio <= 0.33) return "#dc3545"; // rojo
    if (ratio <= 0.66) return "#ffc107"; // amarillo
    return "#198754"; // verde
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <label className="fw-bold me-2">📍 Progreso de Onboarding</label>
        {updating && <div className="spinner-border spinner-border-sm text-primary" role="status" style={{ width: "1rem", height: "1rem" }}></div>}
      </div>
      
      <div className="position-relative" style={{ padding: "20px 0" }}>
        {/* Línea de fondo (gris) */}
        <div className="position-absolute start-0 end-0" 
             style={{ height: "4px", backgroundColor: "#e9ecef", top: "50%", transform: "translateY(-50%)", borderRadius: "2px" }}>
        </div>
        
        {/* Línea de progreso (degradado) */}
        <div className="position-absolute start-0" 
             style={{ 
               width: `${progressPercent}%`, 
               height: "4px", 
               background: `linear-gradient(90deg, #dc3545, #ffc107, #198754)`,
               top: "50%", 
               transform: "translateY(-50%)",
               borderRadius: "2px"
             }}>
        </div>

        {/* Círculos */}
        <div className="d-flex justify-content-between position-relative" style={{ zIndex: 1 }}>
          {steps.map((step, index) => {
            const isActive = index <= currentIndex;
            const isCurrent = index === currentIndex;
            
            return (
              <div 
                key={step} 
                className="text-center"
                style={{ cursor: updating ? "not-allowed" : "pointer", flex: 1 }}
                onClick={() => !updating && changeStep(step, index)}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: isActive ? getStepColor(index) : "#6c757d",
                    border: isCurrent ? "3px solid #0d6efd" : "none",
                    transition: "all 0.2s ease",
                    opacity: updating ? 0.6 : 1
                  }}
                >
                  {index + 1}
                </div>
                <small className="d-block mt-1" style={{ fontSize: "0.75rem", maxWidth: "100px" }}>
                  {step}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}