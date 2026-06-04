import {
  Radar, Search, Bell, Zap, ShieldCheck, SlidersHorizontal, MapPin,
  MessageCircle, Check, X, ArrowRight, Smartphone, Laptop, Gamepad2,
  Cpu, Star, Filter, Send, Clock, Sparkles, TrendingUp
} from "lucide-react";

import "./index.css";

const whatsapp =
  "https://wa.me/5511920177957?text=Olá,%20quero%20ativar%20meu%20Radar%20VIP";

const alerts = [
  { icon: Gamepad2, title: "PlayStation 5 Slim", place: "São Paulo, SP", price: "R$ 1.980", tag: "Novo -28%" },
  { icon: Smartphone, title: "iPhone 14 Pro 256GB", place: "Curitiba, PR", price: "R$ 2.890", tag: "OLX Pay -22%" },
  { icon: Laptop, title: "Notebook Gamer RTX", place: "Rio de Janeiro, RJ", price: "R$ 3.450", tag: "Oferta -18%" },
  { icon: Cpu, title: "RTX 4070 Ti Super", place: "Belo Horizonte, MG", price: "R$ 3.100", tag: "Quente -31%" }
];

const features = [
  { icon: Bell, title: "Alertas em tempo real", desc: "Receba oportunidades assim que novos anúncios aparecerem." },
  { icon: SlidersHorizontal, title: "Filtros personalizados", desc: "Escolha nicho, cidade, preço, modelo, armazenamento e palavras-chave." },
  { icon: ShieldCheck, title: "OLX Pay habilitado", desc: "No VIP você também pode receber anúncios com compra segura." },
  { icon: Zap, title: "Radares múltiplos", desc: "Monitore vários produtos ao mesmo tempo sem perder oportunidade." }
];

const plans = [
  { name: "1 Radar", price: "19", desc: "Para começar com um nicho específico.", items: ["1 radar personalizado", "Filtros completos", "OLX Pay habilitado", "Alertas no Telegram"] },
  { name: "3 Radares", price: "29", desc: "Melhor custo-benefício para caçar oportunidades.", items: ["3 radares personalizados", "Filtros completos", "Prioridade nos alertas", "Suporte rápido"], popular: true },
  { name: "5 Radares", price: "49", desc: "Para revendedores e usuários avançados.", items: ["5 radares personalizados", "Mais volume de alertas", "Configuração avançada", "Suporte prioritário"] }
];

function App() {
  return (
    <main className="site">
      <div className="grid-bg" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <header className="nav">
        <div className="brand">
          <div className="brandIcon"><Radar size={20} /></div>
          <span>Radar <b>OLX</b></span>
        </div>

        <nav>
          <a href="#features">Recursos</a>
          <a href="#how">Como funciona</a>
          <a href="#plans">Planos</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="navCta" href={whatsapp} target="_blank">Ativar Radar</a>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="pill"><span /> Monitoramento ativo — milhares de produtos por minuto</div>

          <h1>Receba alertas da OLX em <em>tempo real</em> ⚡</h1>

          <p>
            Configure radares personalizados e seja um dos primeiros a encontrar oportunidades
            em celulares, PS5, notebooks, PC gamer, placas de vídeo e muito mais.
          </p>

          <div className="heroActions">
            <a href={whatsapp} target="_blank" className="primary">
              Ativar Radar VIP <ArrowRight size={18} />
            </a>
            <a href="#demo" className="secondary">Ver demonstração</a>
          </div>

          <div className="stats">
            <div><strong>24h</strong><span>monitorando</span></div>
            <div><strong>VIP</strong><span>personalizado</span></div>
            <div><strong>OLX Pay</strong><span>habilitado</span></div>
          </div>
        </div>

        <div className="phonePanel">
          <div className="panelTop">
            <div><strong>Radar OLX • VIP</strong><span>online</span></div>
            <small>agora</small>
          </div>

          {alerts.map((item) => {
            const Icon = item.icon;
            return (
              <div className="alert" key={item.title}>
                <div className="alertIcon"><Icon size={18} /></div>
                <div className="alertInfo">
                  <strong>{item.title}</strong>
                  <span>{item.place}</span>
                </div>
                <div className="alertPrice">
                  <strong>{item.price}</strong>
                  <span>{item.tag}</span>
                </div>
              </div>
            );
          })}

          <div className="panelFooter">
            <Sparkles size={14} /> 3 novos alertas nos últimos minutos
          </div>
        </div>
      </section>

      <section id="demo" className="section premiumFlow">
        <div className="sectionTitle center">
          <span className="livePill">● ALERTA AO VIVO</span>
          <h2>Veja como o Radar trabalha <em>por você.</em></h2>
          <p>
            Nosso sistema monitora, filtra e envia as melhores oportunidades em tempo real, 24 horas por dia.
          </p>
        </div>

        <div className="flowCards">
          <div className="flowCard blue">
            <div className="flowNumber">01</div>
            <div className="flowIcon"><Search size={42} /></div>
            <h3>Buscando oportunidades</h3>
            <p>Monitoramos milhares de anúncios novos por filtros personalizados em tempo real.</p>
            <div className="progressLine"><span /></div>
          </div>

          <div className="flowArrow">›</div>

          <div className="flowCard purple">
            <div className="flowNumber">02</div>
            <div className="flowIcon"><Filter size={42} /></div>
            <h3>Filtrando resultados</h3>
            <p>Removemos anúncios fora do preço, região ou palavras-chave para entregar só o que importa.</p>
            <div className="flowBars"><span /><span /><span /></div>
          </div>

          <div className="flowArrow">›</div>

          <div className="flowCard green">
            <div className="flowNumber">03</div>
            <div className="flowIcon"><Send size={42} /></div>
            <h3>Enviando alerta</h3>
            <p>Oportunidade encontrada e enviada direto para você no Telegram em questão de segundos.</p>
            <div className="sentStatus">
              <div className="sentPulse" />
              <strong>Alerta enviado!</strong>
            </div>
          </div>
        </div>

        <div className="flowStats">
          <div><Clock size={28} /><strong>24h</strong><span>Monitoramento ativo</span></div>
          <div><Zap size={28} /><strong>100%</strong><span>Automatizado</span></div>
          <div><ShieldCheck size={28} /><strong>VIP</strong><span>Personalizado</span></div>
          <div><Send size={28} /><strong>Instantâneo</strong><span>Alertas via Telegram</span></div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionTitle">
          <span>Recursos</span>
          <h2>Um radar automático para encontrar oportunidades antes da maioria.</h2>
        </div>

        <div className="featureGrid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div className="feature hoverCard" key={feature.title}>
                <Icon size={28} />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="section">
        <div className="sectionTitle">
          <span>Como funciona</span>
          <h2>Você escolhe. O Radar monitora. O alerta chega.</h2>
        </div>

        <div className="steps">
          {[
            ["1", "Escolha seu radar", "Defina o produto que deseja monitorar."],
            ["2", "Configure os filtros", "Cidade, preço, palavras-chave, modelo e muito mais."],
            ["3", "Receba no Telegram", "Os anúncios chegam automaticamente para você."]
          ].map((s) => (
            <div className="step hoverCard" key={s[0]}>
              <b>{s[0]}</b>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="sectionTitle center">
          <span>Oportunidades reais</span>
          <h2>Feito para quem não quer perder bons anúncios.</h2>
        </div>

        <div className="proofGrid">
          {[
            ["PS5 Slim", "Encontrado por R$ 1.980", "média anunciada: R$ 2.600+"],
            ["iPhone 14 Pro", "Encontrado por R$ 2.890", "com OLX Pay ativo"],
            ["RTX 4070 Ti", "Encontrada por R$ 3.100", "alerta enviado em minutos"]
          ].map((p) => (
            <div className="proofCard hoverCard" key={p[0]}>
              <TrendingUp size={24} />
              <h3>{p[0]}</h3>
              <strong>{p[1]}</strong>
              <p>{p[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section compare">
        <div className="compareCard">
          <h3>FREE</h3>
          <p>Para conhecer o sistema.</p>
          <ul>
            <li><X size={16} /> Sem OLX Pay</li>
            <li><X size={16} /> Atualizações reduzidas</li>
            <li><X size={16} /> Menos oportunidades premium</li>
          </ul>
        </div>

        <div className="compareCard vip">
          <h3>VIP Personalizado</h3>
          <p>Para quem quer receber alertas específicos.</p>
          <ul>
            <li><Check size={16} /> Nichos personalizados</li>
            <li><Check size={16} /> OLX Pay habilitado</li>
            <li><Check size={16} /> Filtros completos</li>
          </ul>
        </div>
      </section>

      <section className="section simulator">
        <div className="simulatorText">
          <span>Simulador</span>
          <h2>Exemplo de radar personalizado.</h2>
          <p>Você escolhe exatamente o que quer monitorar. O Radar OLX faz o resto.</p>
        </div>

        <div className="simulatorBox">
          <div><MapPin size={18} /> São Paulo, SP</div>
          <div><Smartphone size={18} /> iPhone 13 / 14</div>
          <div><Clock size={18} /> Alertas em minutos</div>
          <div><ShieldCheck size={18} /> OLX Pay habilitado</div>
        </div>
      </section>

      <section id="plans" className="section">
        <div className="sectionTitle center">
          <span>Planos</span>
          <h2>Escolha o radar ideal para você.</h2>
        </div>

        <div className="pricing">
          {plans.map((plan) => (
            <div className={`plan hoverCard ${plan.popular ? "popular" : ""}`} key={plan.name}>
              {plan.popular && <div className="popularTag"><Star size={14} /> Mais escolhido</div>}
              <h3>{plan.name}</h3>
              <p>{plan.desc}</p>
              <div className="price"><small>R$</small>{plan.price}<span>/mês</span></div>
              <ul>
                {plan.items.map((item) => <li key={item}><Check size={16} /> {item}</li>)}
              </ul>
              <a href={whatsapp} target="_blank">Ativar Radar</a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="section">
        <div className="sectionTitle">
          <span>FAQ</span>
          <h2>Dúvidas frequentes</h2>
        </div>

        <div className="faqGrid">
          {[
            ["Preciso instalar algo?", "Não. Os alertas chegam diretamente no Telegram."],
            ["Posso escolher minha cidade?", "Sim. Você pode configurar cidade, estado ou Brasil inteiro."],
            ["Tem OLX Pay no VIP?", "Sim. No VIP você pode receber anúncios com OLX Pay habilitado."],
            ["Posso trocar meus radares?", "Sim, os filtros podem ser ajustados conforme sua necessidade."]
          ].map((f) => (
            <div className="faqItem hoverCard" key={f[0]}>
              <h3>{f[0]}</h3>
              <p>{f[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <MessageCircle size={38} />
        <h2>Comece a receber oportunidades antes da maioria.</h2>
        <p>Ative seu Radar VIP e configure seus filtros personalizados.</p>
        <a href={whatsapp} target="_blank">Falar no WhatsApp</a>
      </section>
    </main>
  );
}

export default App;