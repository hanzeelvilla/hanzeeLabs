import { useState, type FormEvent } from "react";
import type { EstimateData, material } from "../types/estimateData.interface";

export const Estimate = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<EstimateData>({
    serviceType: "print",
    material: null,
    description: "",
    files: null,
    contact: {
      name: "",
      email: "",
      phone: "",
    },
    quantity: 1,
  });

  const updateData = (newData: Partial<EstimateData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleContactChange = (
    field: keyof typeof formData.contact,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Datos enviados:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-12 text-white">
      <div className="mx-auto max-w-3xl">
        {isSubmitted ? (
          <div className="animate-fade-in flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center shadow-xl backdrop-blur-sm">
            <div className="mb-6 rounded-full bg-green-500/10 p-6 ring-1 ring-green-500/50">
              <svg
                className="h-16 w-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              ¡Solicitud Recibida!
            </h2>
            <p className="mb-8 max-w-md text-lg text-slate-400">
              Gracias <strong>{formData.contact.name}</strong>. Hemos recibido
              tus archivos y detalles. Te enviaremos la cotización a{" "}
              <strong>{formData.contact.email}</strong> en menos de 24 horas.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
              }}
              className="rounded-full bg-slate-800 px-8 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Enviar otra cotización
            </button>
          </div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <h1 className="mb-2 text-4xl font-bold tracking-tight">
                Cotización de Impresión 3D
              </h1>
              <p className="text-slate-400">
                Sube tus archivos y especifica los detalles. Te responderemos a
                la brevedad.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm md:p-8"
            >
              <div className="space-y-10">
                <section>
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      1
                    </span>
                    Detalles de la Impresión
                  </h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="material"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Material Preferido
                      </label>
                      <select
                        id="material"
                        required
                        value={formData.material || ""}
                        onChange={(e) =>
                          updateData({ material: e.target.value as material })
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="" disabled>
                          Selecciona material...
                        </option>
                        <option value="pla">PLA (Estándar)</option>
                        <option value="petg">PETG (Resistente)</option>
                        <option value="abs">ABS (Térmico)</option>
                        <option value="tpu">TPU (Flexible)</option>
                        <option value="resina">Resina (Detalle Alto)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Cantidad de piezas
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        min={1}
                        value={formData.quantity}
                        onChange={(e) =>
                          updateData({
                            quantity: parseInt(e.target.value) || 1,
                          })
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="files"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Archivos (.stl, .obj, .3mf)
                      </label>
                      <input
                        type="file"
                        id="files"
                        multiple
                        accept=".stl,.obj,.3mf,.step"
                        onChange={(e) => {
                          if (e.target.files) {
                            updateData({ files: Array.from(e.target.files) });
                          }
                        }}
                        className="block w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-950 text-sm text-slate-400 file:mr-4 file:border-0 file:bg-slate-800 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-blue-400 hover:file:bg-slate-700"
                      />
                      <p className="mt-1 text-xs text-slate-500">
                        {formData.files && formData.files.length > 0
                          ? `✅ ${formData.files.length} archivos seleccionados`
                          : "Máximo 50MB por archivo."}
                      </p>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Instrucciones Adicionales
                      </label>
                      <textarea
                        id="description"
                        rows={3}
                        placeholder="Ej: Color negro mate, relleno al 20%, es para exteriores..."
                        value={formData.description}
                        onChange={(e) =>
                          updateData({ description: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </section>

                <hr className="border-slate-800" />

                <section>
                  <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      2
                    </span>
                    Tus Datos
                  </h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.contact.name}
                        onChange={(e) =>
                          handleContactChange("name", e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.contact.phone || ""}
                        onChange={(e) =>
                          handleContactChange("phone", e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.contact.email}
                        onChange={(e) =>
                          handleContactChange("email", e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </section>

                {/* BOTÓN DE ENVÍO */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    // Corregido: bg-gradient
                    className="w-full rounded-xl bg-linear-to-r from-blue-600 to-purple-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:from-blue-500 hover:to-purple-500 hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Solicitud"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
