import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Wifi, Cable, Power, Cpu, Printer, Router, Smartphone, CheckCircle2, PartyPopper, AlertCircle } from 'lucide-react';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState({
    tpv: false,
    routers: false,
    usbPrinter: false,
    wifiPrinter: false
  });

  const totalSteps = 8;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleCheck = (item) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const allChecked = Object.values(checkedItems).every(v => v);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Installation Guide Icon */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-white font-black text-xl tracking-tight">QAMARERO</h1>
                  <p className="text-orange-100 text-xs font-medium">Guía de Instalación</p>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 bg-white/20 rounded-full h-1.5 overflow-hidden backdrop-blur-sm">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 min-h-[550px] flex flex-col">
            {/* Step 0: Welcome */}
            {currentStep === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-fadeIn">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-black text-slate-900">¡Bienvenido!</h2>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Vamos a configurar tu pack Qamarero en <span className="font-bold text-orange-500">5 pasos sencillos</span>
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-xs text-slate-600 font-medium">
                    ⏱️ Tiempo estimado: <span className="text-orange-500 font-bold">10 minutos</span>
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Inventory */}
            {currentStep === 1 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Inventario
                  </span>
                  <h2 className="text-2xl font-black text-slate-900">
                    Identifica los 5 equipos
                  </h2>
                  <p className="text-slate-500 text-sm">Antes de empezar, verifica que tienes todo</p>
                </div>

                <div className="grid grid-cols-2 gap-4 flex-1">
                  {/* Router Opal */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        <div className="w-20 h-14 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                          <div className="w-1 h-8 bg-slate-300 rounded-full absolute -left-3" />
                          <div className="w-1 h-8 bg-slate-300 rounded-full absolute -right-3" />
                          <span className="text-slate-400 text-xs font-mono">GL-iNet</span>
                          <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <p className="text-xs font-bold text-slate-700 text-center">ROUTER OPAL</p>
                    </div>
                  </div>

                  {/* TPV */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        <div className="w-20 h-24 bg-slate-800 rounded-t-xl shadow-xl relative group-hover:scale-105 transition-transform">
                          <div className="absolute inset-2 bg-slate-700 rounded-lg" />
                          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <div className="w-20 h-2 bg-slate-400 rounded-b-lg" />
                      </div>
                      <p className="text-xs font-bold text-slate-700 text-center">TPV TÁCTIL</p>
                    </div>
                  </div>

                  {/* USB Printer */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-20 h-16 bg-slate-800 rounded-xl shadow-md flex items-center justify-center relative group-hover:scale-105 transition-transform">
                        <div className="w-12 h-8 bg-slate-700 rounded-md" />
                        <div className="absolute bottom-2 flex gap-1">
                          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <p className="text-xs font-bold text-slate-700 text-center">IMPRESORA USB</p>
                    </div>
                  </div>

                  {/* WiFi Printer */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-20 h-16 bg-slate-800 rounded-xl shadow-md flex items-center justify-center relative group-hover:scale-105 transition-transform">
                        <div className="w-12 h-8 bg-slate-700 rounded-md" />
                        <Wifi className="absolute top-1 right-1 w-3 h-3 text-blue-500" />
                        <div className="absolute bottom-2 flex gap-1">
                          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <p className="text-xs font-bold text-slate-700 text-center">IMPRESORA WiFi</p>
                    </div>
                  </div>

                  {/* Cash Drawer */}
                  <div className="col-span-2 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-32 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-md relative group-hover:scale-105 transition-transform">
                        <div className="absolute inset-x-4 top-3 h-1 bg-slate-700 rounded" />
                        <div className="absolute right-2 top-2 w-3 h-6 bg-slate-700 rounded" />
                      </div>
                      <p className="text-xs font-bold text-slate-700">CAJÓN PORTAMONEDAS</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Internet & WiFi */}
            {currentStep === 2 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Paso 1: Internet y WiFi
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Conecta el Opal y enchufa la WiFi
                  </h2>
                  <p className="text-slate-500 text-sm">Router del cliente <span className="font-bold text-red-500">APAGADO</span></p>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {/* Connection Diagram */}
                  <div className="relative">
                    <div className="flex items-center justify-between gap-2 px-2">
                      {/* Client Router (OFF) */}
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-20 h-14 bg-slate-800 rounded-xl shadow-lg relative mb-3">
                          <Power className="absolute top-2 left-2 w-4 h-4 text-red-500" />
                          <span className="absolute bottom-1 right-1 text-[8px] text-red-400 font-bold">OFF</span>
                          <div className="absolute -bottom-1 -right-1 w-1 h-5 bg-slate-700 rounded-full" />
                          <div className="absolute -bottom-1 -left-1 w-1 h-5 bg-slate-700 rounded-full" />
                        </div>
                        <p className="text-[10px] font-bold text-slate-700 text-center">TU ROUTER</p>
                      </div>

                      {/* Cable */}
                      <div className="flex-1 flex flex-col items-center justify-center relative h-14">
                        <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse" />
                        <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 mt-2 whitespace-nowrap">
                          CABLE RED
                        </span>
                      </div>

                      {/* Opal Router */}
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-20 h-14 bg-white rounded-xl shadow-lg relative border-2 border-slate-200 mb-3">
                          <div className="absolute top-2 left-2 flex gap-0.5">
                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                          </div>
                          <span className="absolute bottom-1 right-1 text-[7px] text-slate-400 font-mono">GL-iNet</span>
                          <div className="absolute -top-1 -right-2 w-1 h-8 bg-slate-300 rounded-full" />
                          <div className="absolute -top-1 -left-2 w-1 h-8 bg-slate-300 rounded-full" />
                          {/* WAN port */}
                          <div className="absolute bottom-0 right-3 w-2 h-1.5 bg-orange-500 rounded-t" />
                        </div>
                        <p className="text-[10px] font-bold text-slate-700 text-center">ROUTER OPAL</p>
                        <p className="text-[8px] text-orange-600 font-bold text-center mt-0.5">Puerto WAN</p>
                      </div>
                    </div>
                  </div>

                  {/* WiFi Printer */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-14 bg-slate-800 rounded-xl shadow-md flex items-center justify-center relative flex-shrink-0">
                        <div className="w-10 h-6 bg-slate-700 rounded-md" />
                        <Cable className="absolute top-1 right-1 w-3 h-3 text-orange-500" />
                        <div className="absolute bottom-2 flex gap-1">
                          <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-700 uppercase mb-1">Impresora WiFi</p>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          Solo necesita cable de corriente. <span className="font-bold text-orange-600">No pongas USB.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warning Box */}
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-orange-900 mb-1">⚠️ Importante</p>
                        <p className="text-[10px] text-orange-700 leading-relaxed">
                          No confundir WAN con LAN. Usa el puerto <span className="font-bold">naranja destacado</span> del Opal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: WiFi Network */}
            {currentStep === 3 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Paso 2: Red WiFi
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Enciende ambos routers
                  </h2>
                  <p className="text-slate-500 text-sm">Espera a ver la red 'Qamarero2.4G'</p>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {/* Routers */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="w-20 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-lg mx-auto relative">
                        <div className="absolute top-2 left-2 flex gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-1 h-6 bg-slate-600 rounded-full" />
                        <div className="absolute -bottom-1 -left-1 w-1 h-6 bg-slate-600 rounded-full" />
                      </div>
                      <p className="text-xs font-bold text-slate-700 mt-2">TU ROUTER</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-14 bg-white rounded-xl shadow-lg mx-auto relative border-2 border-green-300">
                        <div className="absolute top-2 left-2">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-1 text-[8px] text-slate-400 font-mono">GL-iNet</span>
                        <div className="absolute -top-1 -right-2 w-1 h-10 bg-slate-300 rounded-full" />
                        <div className="absolute -top-1 -left-2 w-1 h-10 bg-slate-300 rounded-full" />
                      </div>
                      <p className="text-xs font-bold text-slate-700 mt-2">ROUTER OPAL</p>
                    </div>
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative">
                    <div className="w-64 mx-auto bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-8 border-slate-800">
                      <div className="bg-white rounded-[1.75rem] overflow-hidden">
                        {/* Notch */}
                        <div className="bg-slate-900 h-6 rounded-b-2xl mx-auto w-32 mb-4" />
                        
                        {/* Screen Content */}
                        <div className="px-4 pb-4 space-y-3">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-slate-900 font-bold text-sm">Ajustes WiFi</p>
                            <Wifi className="w-4 h-4 text-slate-400" />
                          </div>

                          {/* WiFi Networks */}
                          <div className="space-y-2">
                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500">MiBer_WiFi</span>
                                <Wifi className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>

                            {/* Qamarero Network - Highlighted */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border-2 border-green-400 shadow-lg shadow-green-500/20 animate-pulse">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-green-700">Qamarero2.4G</span>
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                              </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-500">Vecino_WiFi</span>
                                <Wifi className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: TPV Connection */}
            {currentStep === 4 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Paso 3: TPV
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Enciende el TPV
                  </h2>
                  <p className="text-slate-500 text-sm">Comprueba que se conecta a 'Qamarero2.4G'</p>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {/* TPV */}
                  <div className="relative mx-auto">
                    <div className="w-48 h-32 bg-slate-800 rounded-t-2xl shadow-2xl relative">
                      {/* Screen */}
                      <div className="absolute inset-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto animate-pulse" />
                          <div className="text-green-400 font-bold text-xs">QAMARERO2.4G</div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute top-2 left-2 w-2 h-2 bg-wifi-signal-1 rounded-full">
                        <Wifi className="w-4 h-4 text-green-500 -translate-x-1 -translate-y-1" />
                      </div>
                    </div>
                    {/* Stand */}
                    <div className="w-48 h-4 bg-slate-400 rounded-b-xl mx-auto" />
                    <div className="w-32 h-2 bg-slate-300 rounded-b-lg mx-auto" />
                    <p className="text-xs font-bold text-slate-700 text-center mt-2">TPV TÁCTIL</p>
                  </div>

                  {/* Connection Status */}
                  <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Wifi className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-green-900 uppercase">Conexión Verificada</p>
                        <p className="text-xs text-green-700">El TPV está conectado correctamente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Printer Wiring */}
            {currentStep === 5 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Paso 4: Cableado
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Conecta la impresora
                  </h2>
                  <p className="text-slate-500 text-sm">Vista trasera del dispositivo</p>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {/* Printer Back View */}
                  <div className="relative">
                    <div className="w-full max-w-xs mx-auto bg-slate-800 rounded-2xl p-6 shadow-2xl">
                      <div className="text-center mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase">Vista Trasera</p>
                      </div>

                      {/* Ports */}
                      <div className="flex items-center justify-between mb-8">
                        {/* Power */}
                        <div className="text-center">
                          <div className="w-8 h-8 bg-slate-700 rounded-full mx-auto mb-2 relative">
                            <div className="absolute inset-2 bg-slate-900 rounded-full" />
                            <Power className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-yellow-500" />
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold block">POWER</span>
                        </div>

                        {/* RJ11 */}
                        <div className="text-center">
                          <div className="w-6 h-6 bg-slate-700 rounded mx-auto mb-2 relative border-2 border-orange-500">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-orange-500 rounded-t" />
                          </div>
                          <span className="text-[8px] text-orange-500 font-bold block">RJ11</span>
                          <span className="text-[7px] text-orange-400 block">CAJÓN</span>
                        </div>

                        {/* USB */}
                        <div className="text-center">
                          <div className="w-6 h-6 bg-slate-700 rounded mx-auto mb-2 relative border-2 border-blue-500">
                            <div className="absolute inset-x-1 bottom-0 h-1 bg-blue-500 rounded-t" />
                          </div>
                          <span className="text-[8px] text-blue-500 font-bold block">USB</span>
                          <span className="text-[7px] text-blue-400 block">TPV</span>
                        </div>

                        {/* Ethernet */}
                        <div className="text-center">
                          <div className="w-6 h-6 bg-slate-700 rounded mx-auto mb-2 relative">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-500 rounded-t" />
                          </div>
                          <span className="text-[8px] text-slate-400 font-bold block">ETH</span>
                        </div>
                      </div>

                      {/* Cables Illustration */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-slate-700/50 rounded-lg p-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span className="text-[10px] text-orange-300 font-bold">Cable Cajón → RJ11</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-700/50 rounded-lg p-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-[10px] text-blue-300 font-bold">Cable USB → TPV</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="space-y-3">
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-3">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</div>
                        <p className="text-xs text-orange-900 leading-relaxed">
                          <span className="font-bold">Cable RJ11</span> del cajón al puerto pequeño
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-3">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</div>
                        <p className="text-xs text-blue-900 leading-relaxed">
                          <span className="font-bold">Cable USB</span> del TPV al puerto cuadrado tipo B
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Final Check */}
            {currentStep === 6 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    Paso 5: Comprobación Final
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">
                    Verifica las luces
                  </h2>
                  <p className="text-slate-500 text-sm">Todo debe estar encendido</p>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-4">
                  {/* Checklist */}
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleCheck('tpv')}
                      className={`w-full rounded-2xl p-4 border-2 transition-all duration-300 ${
                        checkedItems.tpv
                          ? 'bg-green-50 border-green-400 shadow-lg shadow-green-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          checkedItems.tpv ? 'bg-green-500' : 'bg-slate-200'
                        }`}>
                          {checkedItems.tpv && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-bold text-slate-900">TPV Encendido</p>
                          <p className="text-xs text-slate-500">Luz verde activa</p>
                        </div>
                        <Power className={`w-5 h-5 ${checkedItems.tpv ? 'text-green-500' : 'text-slate-400'}`} />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleCheck('routers')}
                      className={`w-full rounded-2xl p-4 border-2 transition-all duration-300 ${
                        checkedItems.routers
                          ? 'bg-green-50 border-green-400 shadow-lg shadow-green-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          checkedItems.routers ? 'bg-green-500' : 'bg-slate-200'
                        }`}>
                          {checkedItems.routers && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-bold text-slate-900">Routers con Luz</p>
                          <p className="text-xs text-slate-500">Ambos encendidos</p>
                        </div>
                        <Wifi className={`w-5 h-5 ${checkedItems.routers ? 'text-green-500' : 'text-slate-400'}`} />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleCheck('usbPrinter')}
                      className={`w-full rounded-2xl p-4 border-2 transition-all duration-300 ${
                        checkedItems.usbPrinter
                          ? 'bg-green-50 border-green-400 shadow-lg shadow-green-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          checkedItems.usbPrinter ? 'bg-green-500' : 'bg-slate-200'
                        }`}>
                          {checkedItems.usbPrinter && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-bold text-slate-900">Imp. USB con Luz</p>
                          <p className="text-xs text-slate-500">LED naranja activo</p>
                        </div>
                        <Printer className={`w-5 h-5 ${checkedItems.usbPrinter ? 'text-green-500' : 'text-slate-400'}`} />
                      </div>
                    </button>

                    <button
                      onClick={() => toggleCheck('wifiPrinter')}
                      className={`w-full rounded-2xl p-4 border-2 transition-all duration-300 ${
                        checkedItems.wifiPrinter
                          ? 'bg-green-50 border-green-400 shadow-lg shadow-green-500/20'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          checkedItems.wifiPrinter ? 'bg-green-500' : 'bg-slate-200'
                        }`}>
                          {checkedItems.wifiPrinter && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-bold text-slate-900">Imp. WiFi con Luz</p>
                          <p className="text-xs text-slate-500">LED azul activo</p>
                        </div>
                        <Printer className={`w-5 h-5 ${checkedItems.wifiPrinter ? 'text-green-500' : 'text-slate-400'}`} />
                      </div>
                    </button>
                  </div>

                  {/* Progress indicator */}
                  {allChecked && (
                    <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <p className="text-sm font-bold text-green-900">
                          ¡Perfecto! Todo verificado ✓
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 7: Completion */}
            {currentStep === 7 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30 mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 animate-bounce">
                      <PartyPopper className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold uppercase tracking-wide">
                      Finalizado
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">
                      ¡STOP! Configuración<br />física completada
                    </h2>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-6">
                  {/* Next Steps Card */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 shadow-xl">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl">📧</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 text-center mb-4">
                      PRÓXIMOS PASOS
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 mb-1">
                              Tu <span className="text-orange-600">Account Manager (AM)</span> se pondrá en contacto
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Para la activación remota muy pronto
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 mb-1">
                              Si tienes prisa, puedes <span className="text-orange-600">responder al último email</span>
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              Donde te contactamos para avisar que ya está todo encendido
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-red-900 mb-1">⚠️ Importante</p>
                        <p className="text-xs text-red-700 leading-relaxed">
                          NO APAGUES LOS EQUIPOS mientras esperamos la activación remota
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Contact Options */}
            {currentStep === 8 && (
              <div className="flex-1 flex flex-col space-y-6 animate-fadeIn">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/30 mx-auto">
                    <span className="text-white text-5xl">📞</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wide">
                      Último Paso
                    </span>
                    <h2 className="text-3xl font-black text-slate-900 leading-tight">
                      ¿Cómo prefieres continuar?
                    </h2>
                    <p className="text-slate-500 text-sm">Elige tu método de contacto</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-4">
                  {/* Option 1: Wait for AM */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⏳</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-slate-900 mb-2">
                          Esperar al Account Manager
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                          Tu AM se pondrá en contacto contigo <span className="font-bold text-blue-700">muy pronto</span> para completar la activación remota
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-xs text-blue-700 font-bold">Tiempo estimado: 1-2 horas</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 2: Contact by Email */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-slate-900 mb-2">
                          Responder al último email
                        </h3>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                          <span className="font-bold text-orange-700">¿Tienes prisa?</span> Responde al último email que te enviamos para avisar que ya está todo encendido
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                          <span className="text-xs text-orange-700 font-bold">Respuesta inmediata</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Note */}
                  <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">💡</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 mb-1">Recuerda</p>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Mientras esperas, <span className="font-bold">NO APAGUES ningún equipo</span>. Todo debe permanecer encendido para la activación remota.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'text-slate-600 hover:bg-white hover:shadow-md active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Atrás
              </button>

              <div className="flex gap-1.5">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'w-8 bg-orange-500'
                        : index < currentStep
                        ? 'w-1.5 bg-green-500'
                        : 'w-1.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                disabled={currentStep === totalSteps - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  currentStep === totalSteps - 1
                    ? 'bg-green-500 text-white shadow-green-500/30 cursor-default'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:shadow-orange-500/40 active:scale-95'
                }`}
              >
                {currentStep === totalSteps - 1 ? (
                  <>
                    <Check className="w-4 h-4" />
                    Listo
                  </>
                ) : (
                  <>
                    Continuar
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-6">
          <p className="text-xs text-slate-400">
            ¿Necesitas ayuda? Contacta con tu Account Manager
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0%, 100% {
            transform: scaleX(1);
            opacity: 1;
          }
          50% {
            transform: scaleX(1.5);
            opacity: 0.5;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;