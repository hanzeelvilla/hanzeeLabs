import { useState } from "react";
import type { EstimateData } from "../types/estimateData.interface";
import { ServiceCard } from "./components/ServiceCard";

export const Estimate = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EstimateData>({
    serviceType: null,
    material: null,
    description: "",
    files: null,
    contact: { name: "", email: "", phone: null },
    quantity: 1,
  });

  const updateData = (newData: Partial<EstimateData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen px-4 pt-20 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Solicitar Cotización
        </h1>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
          <p className="mb-6 text-sm text-slate-400">Paso {step} de 3</p>

          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="animate-fade-in">
                <fieldset className="w-full">
                  <legend className="mb-6 w-full text-center text-xl font-semibold text-slate-200 md:text-left">
                    ¿Qué tipo de servicio necesitas?
                  </legend>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <ServiceCard
                      name="serviceType"
                      value="print"
                      title="Impresión 3D"
                      description="Ya tengo mi archivo listo (.stl, .obj)"
                      icon="🖨️"
                      variant="blue"
                      checked={formData.serviceType === "print"}
                      onChange={() => updateData({ serviceType: "print" })}
                    />

                    <ServiceCard
                      name="serviceType"
                      value="design"
                      title="Diseño y Modelado"
                      description="Tengo una idea o pieza rota, pero no el archivo"
                      icon="✏️"
                      variant="purple"
                      checked={formData.serviceType === "design"}
                      onChange={() => updateData({ serviceType: "design" })}
                    />
                  </div>
                </fieldset>
              </div>
            )}

            <div className="mt-8 flex items-center justify-end border-t border-slate-800 pt-6">
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                disabled={step === 1 && !formData.serviceType}
                className="rounded-full bg-linear-to-tr from-blue-600 to-purple-600 px-8 py-2 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
