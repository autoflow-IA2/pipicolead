import React, { useState, useEffect } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/camaelasticarosa.png",
      alt: "Cama Elástica Rosa"
    },
    {
      url: "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/futeboldesabao.png",
      alt: "Futebol de Sabão"
    },
    {
      url: "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/piscinadebolinha.png",
      alt: "Piscina de Bolinha"
    },
    {
      url: "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/tobagan.png",
      alt: "Tobogã"
    },
    {
      url: "https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/toto.png",
      alt: "Totó"
    }
  ];

  // Autoplay do slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "5511999999999";
  const whatsappBase = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-slate-50 text-slate-700">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="h-16 w-48 overflow-hidden flex items-center">
            <img
              src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/logo.png"
              alt="Pipicos Festas"
              className="h-full object-contain"
            />
          </div>

          <a
            href={whatsappBase}
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md transform hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            Orçamento Rápido
          </a>
        </div>
      </nav>

      {/* Hero Section com Slider */}
      <header className="relative bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Texto Hero */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <div className="inline-block bg-brand-pink/10 text-brand-pink px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2 border border-brand-pink/20">
                ✨ A Magia da Diversão Chegou
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight font-fredoka">
                Transforme sua festa em um <span className="text-brand-pink">Parque de Diversões!</span>
              </h1>
              <p className="text-lg text-slate-600 lg:pr-12">
                Brinquedos incríveis, higienizados e seguros. Da Cama Elástica Rosa exclusiva ao Tobogã Gigante, nós levamos a alegria até o seu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#catalogo"
                  className="bg-brand-pink hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Ver Brinquedos
                  <i className="fa-solid fa-arrow-down animate-bounce"></i>
                </a>
                <a
                  href={whatsappBase}
                  className="bg-white hover:bg-gray-50 text-brand-purple border-2 border-brand-purple text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Slider */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-blue/20 rounded-[2rem] transform rotate-3 blur-sm"></div>

              {/* Container do slider */}
              <div className="relative rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500 aspect-[4/3]">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.url}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Badge Flutuante */}
              <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-green flex items-center gap-3 animate-bounce hidden md:flex">
                <div className="bg-green-100 p-2 rounded-full text-brand-green">
                  <i className="fa-solid fa-shield-halved text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Diversão Segura</p>
                  <p className="text-xs text-slate-500">Equipe treinada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Diferenciais */}
      <section className="py-12 bg-white relative -mt-8 z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-14 h-14 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg shadow-brand-blue/30">
                <i className="fa-solid fa-sparkles"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 font-fredoka">Higienização Total</h3>
              <p className="text-slate-600 text-sm">Tudo limpinho e desinfetado antes de cada festa. Segurança para os pequenos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors">
              <div className="w-14 h-14 mx-auto bg-brand-pink text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg shadow-brand-pink/30">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 font-fredoka">Cuidado e Carinho</h3>
              <p className="text-slate-600 text-sm">Monitores treinados e brinquedos revisados para garantir tranquilidade.</p>
            </div>
            <div className="p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <div className="w-14 h-14 mx-auto bg-brand-yellow text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg shadow-brand-yellow/30">
                <i className="fa-regular fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 font-fredoka">Pontualidade</h3>
              <p className="text-slate-600 text-sm">Chegamos no horário combinado para a montagem. Sua festa sem atrasos!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Brinquedos */}
      <section id="catalogo" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-fredoka">
              Nossos <span className="text-brand-purple">Brinquedos</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Escolha a atração perfeita para o tamanho do seu espaço e idade das crianças.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Futebol de Sabão */}
            <div className="group md:col-span-2 lg:col-span-2 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  🌊 Sucesso no Verão
                </div>
                <img
                  src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/futeboldesabao.png"
                  alt="Futebol de Sabão"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 font-fredoka">Futebol de Sabão</h3>
                <p className="text-slate-600 mb-4">A atração mais pedida para dias quentes! Espaço amplo, seguro e super escorregadio para garantir a diversão de crianças e adultos.</p>
                <a
                  href={`${whatsappBase}?text=Olá, quero orçamento do Futebol de Sabão`}
                  className="inline-flex items-center text-brand-blue font-bold hover:underline"
                >
                  Solicitar Orçamento <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Card 2: Tobogã */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  🎪 O Gigante
                </div>
                <img
                  src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/tobagan.png"
                  alt="Tobogã Inflável"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-fredoka">Tobogã Colorido</h3>
                <p className="text-slate-600 text-sm mb-4">Imponente e visualmente incrível. As crianças sobem e descem sem parar. O centro das atenções da festa.</p>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={`${whatsappBase}?text=Olá, quero orçamento do Tobogã`}
                  className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl transition-colors"
                >
                  Ver Valor
                </a>
              </div>
            </div>

            {/* Card 3: Cama Elástica Rosa */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-pink-200 transform hover:-translate-y-1">
              <div className="absolute top-0 w-full bg-brand-pink text-white text-center text-xs font-bold py-1 z-20">
                💖 EXCLUSIVIDADE PIPICOS
              </div>
              <div className="h-64 mt-4 overflow-hidden relative">
                <img
                  src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/camaelasticarosa.png"
                  alt="Cama Elástica Rosa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-pink mb-2 font-fredoka">Cama Elástica Rosa</h3>
                <p className="text-slate-600 text-sm mb-4">Sua decoração é temática? Barbie, Princesas ou Bailarina? Essa é a única cama elástica que combina perfeitamente com seu tema.</p>
                <ul className="text-xs text-slate-500 space-y-1 mb-4">
                  <li className="flex items-center"><i className="fa-solid fa-check text-brand-pink mr-2"></i> Rede de proteção rosa</li>
                  <li className="flex items-center"><i className="fa-solid fa-check text-brand-pink mr-2"></i> Proteção de molas reforçada</li>
                </ul>
                <a
                  href={`${whatsappBase}?text=Olá, amei a Cama Elástica Rosa!`}
                  className="block w-full text-center bg-brand-pink hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-pink-200"
                >
                  Quero Essa!
                </a>
              </div>
            </div>

            {/* Card 4: Piscina de Bolinha */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  👶 Área Baby
                </div>
                <img
                  src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/piscinadebolinha.png"
                  alt="Piscina de Bolinha com Cobertura"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-fredoka">Piscina de Bolinhas</h3>
                <p className="text-slate-600 text-sm">Com <strong>cobertura exclusiva</strong> para proteger do sol. Ideal para crianças menores brincarem com segurança.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href={`${whatsappBase}?text=Olá, quero orçamento da Piscina de Bolinha`}
                  className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl transition-colors"
                >
                  Ver Valor
                </a>
              </div>
            </div>

            {/* Card 5: Totó */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-brand-yellow text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  ⚽ Clássico
                </div>
                <img
                  src="https://gjqkkiuqryhhobmcevuo.supabase.co/storage/v1/object/public/pipicos/toto.png"
                  alt="Mesa de Totó Pebolim"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-fredoka">Mesa de Totó</h3>
                <p className="text-slate-600 text-sm">Integre os convidados! Diversão garantida para crianças maiores, adolescentes e até os papais.</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href={`${whatsappBase}?text=Olá, quero orçamento do Totó`}
                  className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl transition-colors"
                >
                  Ver Valor
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-12 bg-brand-purple text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px'}}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-fredoka">Quer economizar?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Temos combos especiais: <span className="font-bold text-brand-yellow">Leve 3 brinquedos com desconto!</span>
          </p>
          <a
            href={`${whatsappBase}?text=Quero saber sobre os combos de brinquedos`}
            className="inline-block bg-brand-yellow text-slate-900 font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
          >
            Ver Combos Promocionais
          </a>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-slate-800 mb-12 font-fredoka">Quem contratou, amou! ❤️</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
              <i className="fa-solid fa-quote-left text-4xl text-brand-pink/20 absolute top-4 left-4"></i>
              <p className="text-slate-600 italic mb-4 relative z-10 pt-4">
                "O Futebol de Sabão foi o sucesso da festa do meu filho! O pessoal da montagem foi super pontual e o brinquedo estava novinho."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <p className="font-bold text-slate-800">Mariana Souza</p>
                  <p className="text-xs text-slate-500">Mãe do Pedro</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
              <i className="fa-solid fa-quote-left text-4xl text-brand-purple/20 absolute top-4 left-4"></i>
              <p className="text-slate-600 italic mb-4 relative z-10 pt-4">
                "Aluguei a Cama Elástica Rosa para a festa da Barbie e ficou linda na decoração. Recomendo muito a Pipicos!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <p className="font-bold text-slate-800">Juliana Alves</p>
                  <p className="text-xs text-slate-500">Mãe da Sofia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-brand-pink">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-fredoka font-bold text-brand-yellow mb-2">Pipicos Festas</h3>
              <p className="text-slate-400 text-sm">Levando alegria para o seu evento.</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-pink transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
            </div>

            <div className="text-center md:text-right">
              <a
                href={whatsappBase}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp"></i> Falar Agora
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
            &copy; 2024 Pipicos Festas. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappBase}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all hover:scale-110 animate-bounce"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
}

export default App;
