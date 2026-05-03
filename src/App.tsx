import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Instagram, Plus, Minus } from 'lucide-react';

const WA_NUMBER = "573156830601";

// Logo Component
const Logo = () => (
  <div className="flex flex-col items-center leading-none">
    <span className="font-oswald font-bold text-2xl md:text-3xl tracking-[0.1em] text-white">LA CAJA BURGER</span>
    <span className="font-inter text-[0.55rem] md:text-[0.65rem] text-hw-yellow uppercase tracking-[0.2em] mt-1">Tu plan perfecto en casa</span>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="relative bg-hw-bg-dark min-h-screen text-white font-inter selection:bg-hw-orange selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-hw-bg-black shadow-lg py-4' : 'bg-hw-bg-black/90 py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <div className="hidden md:flex items-center gap-6">
            {['INICIO', 'QUÉ INCLUYE', 'COMBOS', 'CÓMO FUNCIONA', 'FAQ'].map(item => (
              <button 
                key={item} 
                className="font-oswald text-sm lg:text-base tracking-[0.05em] text-white hover:text-hw-orange transition-colors"
                onClick={() => scrollTo(item === 'INICIO' ? 'hero' : item.toLowerCase().replace(/[^a-z0-9]/g, ''))}
              >
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Logo />
          </button>
          
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollTo('pedir')}
              className="bg-hw-orange hover:bg-[#d84e2d] text-white px-6 py-3 font-oswald text-lg tracking-[0.05em] uppercase transition-all flex items-center gap-2 hover:scale-[1.03]"
            >
              PEDIR POR WHATSAPP <MessageCircle size={20} />
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[84px] left-0 w-full bg-hw-bg-black z-40 flex flex-col p-6 border-b border-gray-800"
          >
            {['INICIO', 'QUÉ INCLUYE', 'COMBOS', 'CÓMO FUNCIONA', 'FAQ', 'PEDIR AHORA'].map(item => (
              <button 
                key={item} 
                className="font-oswald text-left text-xl tracking-[0.05em] py-4 border-b border-gray-800 last:border-0 text-white hover:text-hw-orange"
                onClick={() => scrollTo(item === 'INICIO' ? 'hero' : item === 'PEDIR AHORA' ? 'pedir' : item.toLowerCase().replace(/[^a-z0-9]/g, ''))}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background Image with Red-Wine Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&q=80')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(135,28,24,0.65)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-hw-bg-black/50 via-transparent to-hw-bg-dark"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.05em] text-white leading-none mb-6 drop-shadow-2xl"
          >
            TU HAMBURGUESA GOURMET
            <span className="block text-hw-yellow mt-2 text-5xl md:text-7xl lg:text-8xl">PARA PREPARAR EN CASA</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-hw-text-gray font-light mb-12 max-w-3xl mx-auto"
          >
            Solo cocinas la carne. El resto ya está listo. <span className="font-semibold text-white">Carne Angus certificada.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={() => scrollTo('pedir')}
              className="w-full sm:w-auto px-10 py-4 bg-hw-orange text-white font-oswald text-xl tracking-[0.05em] uppercase hover:bg-[#d84e2d] transition-all hover:scale-[1.03] shadow-lg"
            >
              PEDIR AHORA
            </button>
            <button 
              onClick={() => scrollTo('combos')}
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-oswald text-xl tracking-[0.05em] uppercase hover:bg-white hover:text-hw-bg-black transition-all hover:scale-[1.03]"
            >
              VER COMBOS
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-16 inline-block bg-hw-bg-black/80 backdrop-blur-sm border border-gray-700 px-6 py-3"
          >
            <p className="font-oswald text-hw-yellow tracking-widest uppercase text-lg">¡Desde $20.000 / Burger!</p>
          </motion.div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section id="quncluye" className="py-24 bg-hw-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="font-oswald text-5xl md:text-6xl font-bold tracking-[0.05em] text-hw-yellow mb-4 uppercase">¿QUÉ INCLUYE LA CAJA?</h2>
            <p className="text-hw-text-gray text-lg max-w-2xl mx-auto">Todo lo que necesitas, ya está dentro. Ingredientes de primera calidad seleccionados para darte el mejor sabor en casa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80', title: "CARNE ANGUS", desc: "150g por porción" },
              { img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', title: "PAN ARTESANAL", desc: "Pan de papa suave" },
              { img: 'https://images.unsplash.com/photo-1606851094655-b2592a9af0a8?w=600&q=80', title: "TOCINETA", desc: "Premium ahumada" },
              { img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80', title: "QUESO", desc: "Americano fundido" },
              { img: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80', title: "SALSA MAYO", desc: "Nuestra receta secreta" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-hw-bg-black border border-gray-800 flex flex-col group hover:border-hw-orange hover:shadow-[0_5px_20px_rgba(236,87,53,0.15)] transition-all overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-hw-bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-oswald text-xl font-bold tracking-wide uppercase text-white">{item.title}</h3>
                  <p className="text-sm text-hw-text-gray mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos Split Layout */}
      <section id="combos" className="flex flex-col lg:flex-row min-h-[80vh]">
        {/* Combo Image Side */}
        <div className="lg:w-1/2 min-h-[400px] lg:min-h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550317138-10000687a72b?w=900&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-hw-bg-dark/80 to-transparent lg:hidden"></div>
        </div>

        {/* Combos Content Side */}
        <div className="lg:w-1/2 bg-hw-red-wine p-8 md:p-16 lg:p-24 flex flex-col justify-center text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative z-10">
            <h2 className="font-oswald text-5xl md:text-6xl font-bold tracking-[0.05em] mb-12 uppercase">NUESTROS COMBOS</h2>

            {/* Combo 1 */}
            <div className="mb-12 bg-hw-bg-black/20 p-8 border border-white/10 hover:border-hw-yellow/50 transition-colors">
              <div className="flex flex-wrap justify-between items-end border-b border-white/20 pb-4 mb-6">
                <div>
                  <span className="bg-hw-yellow text-hw-bg-black font-bold font-oswald px-3 py-1 text-sm tracking-widest uppercase mb-3 inline-block">MÁS POPULAR</span>
                  <h3 className="font-oswald text-4xl tracking-wide uppercase">COMBO 1: FULL EXPERIENCIA</h3>
                </div>
                <div className="text-hw-yellow font-oswald text-4xl mt-4 lg:mt-0 tracking-wider">
                  $140.000
                </div>
              </div>
              <p className="text-hw-text-gray mb-6 text-lg">6 hamburguesas COMPLETAS (carne, pan, tocineta, queso, salsa) + 6 latas de Coca-Cola.</p>
              <button 
                onClick={() => openWhatsApp("Hola! Quiero pedir el COMBO 1 con gaseosas ($140.000) de La Caja Burger. Por favor dígame disponibilidad y cómo coordinar la entrega en Medellín.")}
                className="bg-hw-orange text-white px-8 py-3 font-oswald tracking-widest text-lg uppercase hover:bg-[#d84e2d] transition-colors hover:scale-[1.02] shadow-md inline-block"
              >
                PEDIR COMBO 1
              </button>
            </div>

            {/* Combo 2 */}
            <div className="bg-hw-bg-black/20 p-8 border border-white/10 hover:border-white/30 transition-colors">
              <div className="flex flex-wrap justify-between items-end border-b border-white/20 pb-4 mb-6">
                <h3 className="font-oswald text-4xl tracking-wide uppercase">COMBO 2: BÁSICO</h3>
                <div className="text-white font-oswald text-4xl mt-4 lg:mt-0 tracking-wider">
                   $120.000
                </div>
              </div>
              <p className="text-hw-text-gray mb-6 text-lg">6 hamburguesas COMPLETAS (carne, pan, tocineta, queso, salsa) SIN bebidas.</p>
              <button 
                onClick={() => openWhatsApp("Hola! Quiero pedir el COMBO 2 sin gaseosas ($120.000) de La Caja Burger. Por favor dígame disponibilidad y cómo coordinar la entrega en Medellín.")}
                className="bg-hw-bg-black text-white px-8 py-3 font-oswald tracking-widest text-lg uppercase hover:bg-black transition-colors hover:scale-[1.02] border border-gray-700 shadow-md inline-block"
              >
                PEDIR COMBO 2
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="cmofunciona" className="py-24 bg-hw-bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="font-oswald text-5xl md:text-6xl font-bold tracking-[0.05em] text-white uppercase">¿CÓMO FUNCIONA?</h2>
            <div className="w-24 h-1 bg-hw-orange mx-auto mt-6"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row relative items-start justify-between max-w-5xl mx-auto gap-12 md:gap-0">
            {/* Red Connector Line */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-hw-orange z-0 opacity-50"></div>
            
            {[
              { num: "01", title: "PIDE POR WHATSAPP", desc: "Llena el formulario o háblanos directo para confirmar tu zona y pedido." },
              { num: "02", title: "RECIBE TU CAJA", desc: "Entregamos rápido y seguro en Medellín y alrededores." },
              { num: "03", title: "COCINA Y DISFRUTA", desc: "Armar tu burger en casa nunca fue tan fácil. Sella la carne, calienta el pan y listo." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="relative z-10 w-full md:w-1/3 flex flex-col items-center text-center px-4"
              >
                <div className="w-20 h-20 bg-hw-bg-black border-2 border-hw-orange flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(236,87,53,0.3)]">
                  <span className="font-oswald text-4xl text-hw-orange font-bold tracking-wider">{step.num}</span>
                </div>
                <h3 className="font-oswald text-2xl font-bold tracking-wide uppercase text-white mb-4">{step.title}</h3>
                <p className="text-hw-text-gray font-light text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario (pedir) */}
      <OrderForm />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-hw-bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-gray-800 pb-12 mb-8">
            <div className="text-center md:text-left">
              <Logo />
              <p className="text-hw-text-gray mt-4 max-w-sm font-light">
                El parche perfecto sin salir de casa. Las mejores hamburguesas gourmet listas para armar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-hw-orange transition-colors group">
                <div className="bg-[#25D366] p-3 rounded-full group-hover:scale-110 transition-transform"><MessageCircle size={24} className="text-white"/></div>
                <div className="text-left">
                  <span className="block text-xs text-hw-text-gray uppercase tracking-widest">WhatsApp</span>
                  <span className="font-oswald text-xl tracking-wide">+57 315 683 0601</span>
                </div>
              </a>

              <a href="https://instagram.com/lacajaburgermedellin" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-hw-orange transition-colors group">
                <div className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-3 rounded-full group-hover:scale-110 transition-transform"><Instagram size={24} className="text-white"/></div>
                <div className="text-left">
                  <span className="block text-xs text-hw-text-gray uppercase tracking-widest">Síguenos</span>
                  <span className="font-oswald text-xl tracking-wide">@lacajaburgermedellin</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-hw-text-gray text-sm font-light">
            <p>© {new Date().getFullYear()} La Caja Burger · Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Medellín, Colombia</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp API Button */}
      <a 
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg z-[90] hover:scale-[1.1] transition-transform focus:outline-none"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
        <MessageCircle size={32} className="relative z-10" />
      </a>
    </div>
  );
}


function OrderForm() {
  const [data, setData] = useState({
    name: '', wa: '', zone: '', address: '', combo: '1', qty: '1', comments: ''
  });

  const zones = ["Laureles", "El Poblado", "Envigado", "Sabaneta", "Bello", "Itagüí", "La América", "Belén", "Centro", "Otro"];
  const total = Number(data.qty) * (data.combo === '1' ? 140000 : 120000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comboName = data.combo === '1' ? "COMBO 1 (con gaseosas)" : "COMBO 2 (sin gaseosas)";
    const msg = `🍔 *NUEVO PEDIDO - LA CAJA BURGER*\n👤 Nombre: ${data.name}\n📱 WhatsApp: ${data.wa}\n📍 Barrio: ${data.zone}\n🏠 Dirección: ${data.address}\n🛒 Combo: ${comboName}\n🔢 Cantidad: ${data.qty}\n💬 Comentarios: ${data.comments || 'Ninguno'}\n💰 Total aprox: $${total.toLocaleString('es-CO')}`;
    window.open(`https://wa.me/573156830601?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputClass = "w-full bg-hw-bg-black border border-gray-700 px-4 py-4 text-white focus:border-hw-orange focus:ring-1 focus:ring-hw-orange outline-none transition-colors placeholder-gray-600 font-inter font-light";
  const labelClass = "block text-sm text-hw-text-gray tracking-wider mb-2 font-medium uppercase";

  return (
    <section id="pedir" className="py-24 bg-hw-bg-dark border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-oswald text-5xl md:text-6xl font-bold tracking-[0.05em] mb-4 uppercase text-white">HAZ TU PEDIDO AQUÍ</h2>
          <p className="text-hw-text-gray font-light text-lg">Completa el formulario y te contactamos enseguida por WhatsApp.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#151515] p-8 md:p-12 border border-gray-800 shadow-2xl relative"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hw-orange"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hw-orange"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hw-orange"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hw-orange"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className={labelClass}>Nombre Completo *</label>
              <input required type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})} className={inputClass} placeholder="P. ej. Juan Pérez"/>
            </div>
            <div>
              <label className={labelClass}>Número de WhatsApp *</label>
              <input required type="tel" value={data.wa} onChange={e => setData({...data, wa: e.target.value})} className={inputClass} placeholder="P. ej. 310 000 0000"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className={labelClass}>Barrio / Zona *</label>
              <select required value={data.zone} onChange={e => setData({...data, zone: e.target.value})} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Selecciona tu zona...</option>
                {zones.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
            </div>
             <div>
              <label className={labelClass}>Dirección de Entrega *</label>
              <input required type="text" value={data.address} onChange={e => setData({...data, address: e.target.value})} className={inputClass} placeholder="P. ej. Calle 10 # 40-50..."/>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <label className={labelClass}>Combo Deseado *</label>
              <select value={data.combo} onChange={e => setData({...data, combo: e.target.value})} className={`${inputClass} border-hw-orange/30 appearance-none`}>
                <option value="1">Combo 1 con gaseosas ($140.000)</option>
                <option value="2">Combo 2 sin gaseosas ($120.000)</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Cantidad de Cajas *</label>
              <input required type="number" min="1" value={data.qty} onChange={e => setData({...data, qty: e.target.value})} className={inputClass}/>
            </div>
          </div>

          <div className="mb-10">
            <label className={labelClass}>Comentarios Especiales</label>
            <textarea value={data.comments} onChange={e => setData({...data, comments: e.target.value})} rows={3} className={inputClass} placeholder="Instrucciones para la entrega, etc."></textarea>
          </div>

           <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-8">
             <div className="text-center md:text-left w-full md:w-auto">
               <span className="block text-hw-text-gray font-light mb-1">Total del pedido:</span>
               <span className="text-4xl font-oswald text-hw-yellow tracking-wider">${total.toLocaleString('es-CO')}</span>
             </div>
             
             <button type="submit" className="w-full md:w-auto px-8 py-5 bg-hw-orange text-white font-oswald text-xl tracking-[0.05em] uppercase hover:bg-[#d84e2d] transition-all flex items-center justify-center gap-3 hover:scale-[1.03]">
                ENVIAR PEDIDO POR WHATSAPP <MessageCircle size={24}/>
             </button>
           </div>
        </motion.form>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    { q: "¿Qué incluye La Caja Burger?", a: "Cada caja incluye 6 panes artesanales de papa, 6 carnes Angus certificadas de 150g, tocineta premium, queso americano y nuestra salsa artesanal especial." },
    { q: "¿En qué zonas de Medellín entregan?", a: "Entregamos en Medellín, Laureles, El Poblado, Envigado, Sabaneta, Itagüí, Bello, La América y Belén." },
    { q: "¿Cuánto tiempo tarda la entrega?", a: "Trabajamos sobre pedido para garantizar la máxima frescura. Recibimos pedidos hasta las 3:00 PM para entregar al día siguiente." },
    { q: "¿Puedo pedir para un evento o reunión?", a: "¡Claro! La Caja Burger es perfecta para reuniones, parrilladas y celebraciones en casa. Contáctanos si necesitas más de 5 cajas." },
    { q: "¿La carne viene cruda o cocinada?", a: "La carne viene cruda (cruda y lista para asar). Literalmente solo tienes que ponerla en el sartén o parrilla a tu gusto y armar tu obra maestra." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-hw-bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-oswald text-5xl md:text-6xl font-bold tracking-[0.05em] uppercase text-white">PREGUNTAS FRECUENTES</h2>
          <div className="w-24 h-1 bg-hw-orange mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="border-b border-gray-800"
            >
              <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-oswald text-xl tracking-wide uppercase transition-colors ${openIndex === i ? 'text-hw-orange' : 'text-white group-hover:text-hw-text-gray'}`}>
                  {faq.q}
                </span>
                <span className={`transition-transform duration-300 text-white ${openIndex === i ? 'rotate-180 text-hw-orange' : ''}`}>
                  {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-hw-text-gray font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
