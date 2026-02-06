export const faqCategories = [
  {
    id: 'organization',
    sv: { title: 'Organization & Operating Model' },
    en: { title: 'Organization & Operating Model' },
  },
  {
    id: 'ai-agenter',
    sv: { title: 'AI-agenter' },
    en: { title: 'AI Agents' },
  },
  {
    id: 'agentic-commerce',
    sv: { title: 'Agentic & Commerce' },
    en: { title: 'Agentic & Commerce' },
  },
  {
    id: 'tech',
    sv: { title: 'Tech Stack & Data' },
    en: { title: 'Tech Stack & Data' },
  },
  {
    id: 'byraer',
    sv: { title: 'Byråer & Partners' },
    en: { title: 'Agencies & Partners' },
  },
  {
    id: 'measurement',
    sv: { title: 'Measurement, Attribution & MMM' },
    en: { title: 'Measurement, Attribution & MMM' },
  },
  {
    id: 'kompetens',
    sv: { title: 'Kompetens & Team' },
    en: { title: 'Competence & Team' },
  },
  {
    id: 'implementering',
    sv: { title: 'Implementering & Säkerhet' },
    en: { title: 'Implementation & Security' },
  },
  {
    id: 'automation',
    sv: { title: 'Automatisering & Kvalitet' },
    en: { title: 'Automation & Quality' },
  },
]

export const faqs = [
  {
    id: 'organisera-marknadsavdelning',
    categories: ['organization'],
    sv: {
      question: 'Hur organiserar man marknads-, e‑com- och CRM‑organisationerna 2026–2027 och framåt?',
      answer: `Samarbete, transparens, mod och kreativitet är ledord som jag tror blir ännu viktigare framåt. Jag har även snöat in på ämnet silos, varför de är skadliga för effektiviteten och varför de riskerar att bli värre när AI‑agenter gör intåg.

Men låt mig backa lite först, innan jag utvecklar mina tankar.

Många in‑house‑team är väldigt kompetenta, men silofieringen består. De senaste 10 åren har i många fall silofieringen ökat. Det finns flera orsaker till det. En orsak är att in‑house‑teamen ofta har vuxit i storlek. Fler byråsamarbeten har tagits hem och den fragmenterade digitala spelplanen har lett till ett ökat behov av specialistkompetens. Listan kan göras lång, men många funktioner (brand‑team, creative‑team, SEO, revenue, CRM, kanalägare, e‑com, sälj, CX osv.) har alltför lite samröre och insikt i varandras arbete.

Det paradoxala är att när in‑house‑teamet ökat i storlek har i många fall även byråsamarbetena gjort det. Varför? Jo, för att varje in‑house‑funktion vill ha sin egen spegelbild på byråsidan. Det är så strukturen har sett ut, och fortsätter att se ut. Konsekvensen av detta är att marknad/sälj/CRM‑avdelningar (inklusive dess underavdelningar) inte bara jobbar i silos, utan de skapar även sin egen silo med de byråer de samarbetar med. Detta leder inte bara till ett ytterligare lager av komplexitet utan också till att en orimligt stor del av ett byråsamarbete mellan ett medelstort/stort in‑house‑team och en medelstor/stor byrå går åt till kommunikation.

**Med AI‑agenter blir det värre om man inte ändrar strukturen**

AI‑agenter riskerar att skapa ännu fler silos om man inte är proaktiv. Idag saknas i princip transparens över vilka AI‑agenter som finns implementerade, hur de jobbar tillsammans, vad som är mänskliga tasks vs AI‑tasks. Implementationerna sker ofta på individnivå, via POC, eller genom att man köper in helt system för en specifik funktion (exempelvis SEO AI Employees), utan att det finns en helhetsbild.

Jag har sett exempel där man köper in AI employee‑system från olika providers som inte har någon koppling vare sig med varandra, med in‑house‑teamet, eller med övriga agenter som används på individnivå. Det riskerar att skapa ökad komplexitet snarare än ökad effektivitet.

**Så hur ska man organisera 2026+?**

Det skiljer sig per vertikal. Det är absolut inte one size fits all (länka till resp).  
Men några principer återkommer, och de blir extra viktiga när “agentic commerce” och agentbaserade arbetssätt börjar flytta både beteende, konvertering och datavärde bort från dina traditionella ytor.

**1) Utgå från tech‑stackens mognadsgrad och datans kvalité**  
Organisering och ways of working måste utgå från nuläget i stacken (tracking, produktdata, CRM, BI, identitet, consent, integrationsförmåga). Är mognadsgrad låg och datakvalité svag, så måste man tänka på ett visst sätt kring implementation av AI‑agenter och organisationen som helhet, och vice versa.  
Det gäller att hålla två spår igång samtidigt, både förbättra och förändra stacken och datakvalitén samtidigt som implementeringen av AI‑agenter och förändring i organisationen pågår. Det kritiska är att dessa två spår följs åt, väldigt tight.

**2) Tänk på att agentic commerce påverkar alla bolag, inte bara e‑handlare**  
Agentic commerce innebär att AI‑agenter researchar, jämför och ibland köper åt användaren och bolag. Discovery, research och ibland checkout flyttas “någon annanstans”.  
Detta tror jag leder till ett par viktiga organisationsskiften:

- **Trust och brand‑ansvar över kanaler.** En funktion över kanaler som äger varumärket, PR, recensioner, policies, kundlöften, produktpåståenden och “proof”. Det innebär att team som historiskt jobbat rätt så silofierade, PR, brand, social, product, insight, bör komma samman. I en tid när det är lättare för små bolag att konkurrera med stora, och när kunder blir mindre lojala, blir detta en av de absolut viktigaste funktionerna för att driva revenue, både på kort och lång sikt.
- **CRO och funneln förändras.** Om valen, eller i alla fall rekommendationen, framåt till stor del kommer att göras av en AI‑agent istället för på siten eller i checkout, behöver CRO, e‑com och webb ta ansvar för det som faktiskt gör att en rekommendation sker. Vill man tänka ett steg längre kan man fundera på om kompetensen och teamet som vi känner det faktiskt inte behöver göras om från grunden.
- **CRM och acquisition, riv barriärer.** Vad är en ny kund och vad är en lojal kund när agenten gör researchen? Troligen inte alls lika svartvitt som i dag. Det som historiskt legat under respektive avdelnings ansvar måste börja ses som ett och samma system, inte två separata maskiner. En ny kund kan ha byggt preferens långt innan första köpet syns i din data, och en lojal kund kan återkomma utan att någonsin besöka din sajt, för att en agent fortsätter välja dig baserat på trust, leverans, prislogik, returvillkor och produktdata.

Det gör att acquisition, hitta nya, och CRM, bearbeta befintliga, inte längre kan optimeras var för sig utan effektförlust. Därför behöver barriärerna rivas på riktigt:

- Gemensamma mål och KPI:er, lönsam tillväxt, CAC till LTV, payback och retention per kohort
- En gemensam kundmodell, prospect och customer i samma vy
- En gemensam experimentmotor, budskap till onboarding till reactivation, utan handovers
- Team och pods kring growth loops snarare än kanalsilos

Och kanske viktigast, låt ägarskap och budget följa kunden och utfallet, inte kanalen.

**3) Byrå- och konsultsamarbeten, optimera för folk som kan jobba i din verklighet**  
Byråer kommer också använda AI. Därför blir “vi lejer ut en kanal” en allt mer tveksam idé. Du kan få mycket leverans snabbt, men tappar ofta förståelse för dina egna system, får spretigare datarutiner och bygger lätt ännu en silo, fast med en extern vägg.

Sikta istället på samarbeten som utgår från kompetenser, inte kanaler. Till exempel mätning och uppföljning, dataplattform och instrumentering, kreativa arbetssätt och produktion, experimentupplägg eller hur man driver och kvalitetssäkrar agentflöden.  
Och sätt upp ett arbetssätt där de faktiskt kan kliva in i din organisation och jobba med flera team, inte bara leverera “sin del” från sidan.

**4) Measurement, attribution och MMM blir viktigare än någonsin**  
Enkel attribution funkar allt sämre när privacy, fler kanaler och agentdrivna flöden gör kundresan mer smetig. Då flyttar värdet till att triangulera, MMM, incrementality, geo‑tester och en tydligare koppling mellan marknadsinsats och faktiska affärsutfall.

I praktiken brukar tre saker behöva uppgraderas:

- En gemensam källa för spend och effekt, samma siffror för alla, annars blir varje möte en diskussion om Excel‑versioner
- En test‑ och experimentmotor som inte ägs av en kanal, så du kan testa hela kedjan, inte bara en annonsyta
- En tydlig ägare för MMM och inkrementalitet, någon som har mandat och ansvar, inte “någon på analys” som får frågan när det brinner

**5) Automatisera inte allt, optimera för kvalitet**  
Det handlar inte bara om content, utan om i princip allt. Automatisering är ofta toppen, särskilt när metoder som MMM blir mer tillgängliga, men när “alla kan göra allt” sjunker kvaliteten snabbt om ingen äger hantverket, ribban och kontrollpunkterna.

Tänk i tre nivåer:

- Här vill vi ha experter på riktigt, svåra beslut, stora pengar, hög risk
- Här kräver vi övervakning, automation får köra, men någon måste granska och styra
- Här kan vi släppa kontroll, lågrisk, lätt att backa, tydliga guardrails`,
    },
    en: {
      question: 'How do you organize marketing, e‑com, and CRM organizations for 2026–2027 and beyond?',
      answer: `Collaboration, transparency, courage, and creativity will matter even more. I have also become obsessed with silos, why they hurt efficiency and why they risk getting worse as AI agents enter the mix.

Let me step back for a moment before I dig in.

Many in‑house teams are very competent, yet siloing persists. Over the last ten years, siloing has often increased. There are several reasons. One is that in‑house teams have grown. More agency work has been brought in‑house and the fragmented digital landscape has increased the need for specialists. The list is long, but many functions, brand, creative, SEO, revenue, CRM, channel owners, e‑com, sales, CX, have too little interaction and insight into each other’s work.

The paradox is that as the in‑house team grows, agency collaborations often grow too. Why? Because each in‑house function wants its mirror image on the agency side. That is how the structure has looked, and still looks. The consequence is that marketing, sales, and CRM departments, including sub‑teams, not only work in silos, they also create a silo with the agencies they work with. This adds another layer of complexity and a disproportionate share of time goes to communication.

**With AI agents it gets worse if you do not change the structure**

AI agents risk creating even more silos if you are not proactive. Today there is almost no transparency around which agents exist, how they work together, and what is human work versus agent work. Implementations often happen at the individual level, via POCs, or by buying a full system for one function, such as SEO AI employees, without an overall picture.

I have seen examples where companies buy AI employee systems from different providers that have no connection to each other, the in‑house team, or the other agents used at the individual level. That creates complexity rather than efficiency.

**So how should you organize for 2026 and beyond?**

It varies by vertical. There is no one size fits all. But a few principles repeat, and they become extra important as agentic commerce and agent‑based workflows shift behavior, conversion, and data value away from your traditional surfaces.

**1) Start from the maturity of your tech stack and data quality**
Organizing ways of working must start from the current state of your stack, tracking, product data, CRM, BI, identity, consent, integrations. If maturity is low and data quality is weak, you must implement agents and organizational change differently, and vice versa.
You need two tracks running at once, improving the stack and data quality while you implement agents and change the organization. The critical part is that those two tracks stay very tightly aligned.

**2) Remember agentic commerce affects all companies, not just e‑commerce**
Agentic commerce means AI agents research, compare, and sometimes purchase on behalf of users and companies. Discovery, research, and sometimes checkout move somewhere else.
I believe this drives a few important organizational shifts:

- **Trust and brand ownership across channels.** A cross‑channel function that owns brand, PR, reviews, policies, customer promises, product claims, and proof. That means teams that historically worked in silos, PR, brand, social, product, insight, need to come together. In a world where small companies can compete with big ones and customers are less loyal, this becomes one of the most important functions for revenue in both the short and long term.
- **CRO and the funnel change.** If choices, or at least recommendations, are increasingly made by an AI agent rather than on site or at checkout, then CRO, e‑com, and web teams must own what actually drives recommendations. If you take the idea further, you might ask whether the team and skill mix as we know it needs to be rebuilt from scratch.
- **CRM and acquisition, break the walls.** What is a new customer and what is a loyal customer when the agent does the research? It is no longer black and white. What historically sat under separate departmental ownership must be seen as one system, not two machines. A new customer may build preference long before the first purchase appears in your data, and a loyal customer can return without ever visiting your site because an agent keeps choosing you based on trust, delivery, price logic, return terms, and product data.

That means acquisition, find new, and CRM, nurture existing, can no longer be optimized separately without losing effect. The walls need to come down for real:

- Shared goals and KPIs, profitable growth, CAC to LTV, payback, retention by cohort
- A shared customer model, prospect and customer in the same view
- A shared experiment engine, messaging to onboarding to reactivation, without handovers
- Teams and pods around growth loops rather than channel silos

And maybe most important, let ownership and budget follow the customer and the outcome, not the channel.

**3) Agency and consulting partnerships, optimize for people who can work inside your reality**
Agencies will also use AI. That makes “we outsource a channel” an increasingly risky idea. You can get a lot of output fast, but you lose understanding of your own systems, get messier data routines, and easily build another silo, just with an external wall.

Instead, target partnerships based on capabilities, not channels. Measurement and follow‑up, data platform and instrumentation, creative systems and production, experiment design, or how to run and quality‑assure agent flows.
And set up ways of working where they can actually step into your organization and work across teams, not just deliver their piece from the side.

**4) Measurement, attribution, and MMM become more important than ever**
Simple attribution works worse as privacy, more channels, and agent‑driven flows make the journey messier. The value shifts to triangulation, MMM, incrementality, geo tests, and a clearer link between marketing effort and actual business outcomes.

In practice, three things usually need an upgrade:

- One shared source for spend and effect, same numbers for everyone, otherwise every meeting becomes a debate about Excel versions
- A test and experiment engine that is not owned by one channel, so you can test the whole chain, not just one ad surface
- A clear owner for MMM and incrementality, someone with mandate and responsibility, not “someone in analytics” who gets asked when it is on fire

**5) Do not automate everything, optimize for quality**
This is not just about content, it is about almost everything. Automation is great, especially as methods like MMM become more accessible, but when “everyone can do everything,” quality drops fast if no one owns the craft, the bar, and the checkpoints.

Think in three levels:

- Here we want real experts, hard decisions, big money, high risk
- Here we require oversight, automation can run, but someone must review and steer
- Here we can release control, low risk, easy to roll back, clear guardrails`,
    },
  },
  {
    id: 'silos-effektivitet-marketing',
    categories: ['organization', 'ai-agenter'],
    sv: {
      question: 'Hur märker man att silos skadar effektiviteten i marketing (2026+)?',
      answer: `Silos handlar sällan om att folk är specialister. Det handlar om att ansvar och insyn går sönder mellan saker som egentligen hänger ihop. Ett tidigt tecken är hög aktivitet men låg synk, många parallella initiativ, mycket Slack, många möten, men ändå upplevs allt som handpåläggning och brandkårsutryckningar.

Ett annat tecken är att samma frågor upprepas i flera rum och att beslut tas i semi‑stängda kontexter, till exempel byrå och en intern funktion, utan att andra berörda förstår varför. Då blir organisationen långsam samtidigt som kommunikationen exploderar.

Med AI‑agenter blir detta extra tydligt. Om det inte finns överblick över vilka agenter som finns, vad de gör och hur de påverkar produktivitet och kvalitet skapas nya silos ovanpå de gamla. Det är tidigt i utvecklingen, men just därför behöver överblicken byggas innan det blir permanent.`,
    },
    en: {
      question: 'How do you notice that silos are hurting marketing efficiency (2026+)?',
      answer: `Silos are rarely about specialization. They happen when accountability and visibility break between things that actually belong together. An early sign is high activity but low synchronization, many parallel initiatives, lots of Slack, many meetings, yet everything still feels like firefighting.

Another sign is that the same questions repeat in multiple rooms and decisions are made in semi‑closed contexts, for example an agency plus one internal function, without other stakeholders understanding why. The organization slows down while communication explodes.

With AI agents this becomes even clearer. If there is no overview of which agents exist, what they do, and how they affect productivity and quality, you build new silos on top of the old ones. It is early days, which is exactly why the overview must be built before it becomes permanent.`,
    },
  },
  {
    id: 'silos-skadliga-marketing-ecom-crm',
    categories: ['organization'],
    sv: {
      question: 'Vilka silos är mest skadliga mellan marketing, e‑com och CRM?',
      answer: `De mest skadliga silosarna ligger där ett team påverkar ett annat teams utfall utan att dela mål, data eller beslutskriterier. Tre återkommande exempel:

- **CRM mot acquisition.** När acquisition hittar nya och CRM bearbetar befintliga som separata maskiner tappar man effekt. I en agentifierad kundresa blir gränsen mellan ny och lojal mindre svartvit och optimering behöver ske som ett system.
- **Brand och creative mot performance.** När kreativt, varumärke och proof separeras från kanaloptimering blir resultatet ofta mer spend för att kompensera för svag preferens eller otydliga budskap. Det blir dyrt och skapar intern friktion.
- **E‑com, ops och policies mot marketing.** När leveranslöften, returer, lager, prislogik och kundlöften inte hänger ihop med det marketing kommunicerar skapas missmatch och tapp i konvertering. Ofta försöker man lösa det med mer kommunikation istället för att fixa grundorsaken.`,
    },
    en: {
      question: 'Which silos are most harmful between marketing, e‑com, and CRM?',
      answer: `The most harmful silos are where one team affects another team’s outcomes without shared goals, data, or decision criteria. Three recurring examples:

- **CRM versus acquisition.** When acquisition finds new and CRM nurtures existing as separate machines, you lose impact. In an agentified journey the line between new and loyal is less black and white, and optimization must happen as one system.
- **Brand and creative versus performance.** When creativity, brand, and proof are separated from channel optimization, the result is often more spend to compensate for weak preference or unclear messaging. It is expensive and creates internal friction.
- **E‑com, ops, and policies versus marketing.** When delivery promises, returns, inventory, price logic, and customer promises do not match what marketing communicates, you get mismatch and conversion loss. People often try to solve it with more communication instead of fixing the root cause.`,
    },
  },
  {
    id: 'minska-handoffs-friktion',
    categories: ['organization', 'tech', 'measurement'],
    sv: {
      question: 'Hur minskar man handoffs och intern friktion utan att göra alla till generalister?',
      answer: `Målet är inte att alla ska kunna allt. Målet är att färre saker ska studsa mellan funktioner. Det kräver tre byggstenar:

- **Tydligt ägarskap för utfall.** Någon äger inte bara en kanal, utan en effekt, till exempel activation, winback eller reviews till conversion.
- **Gemensam mätlogik.** Samma siffror och samma utvärderingsmetod. Annars blir varje möte en diskussion om vilken dashboard som har rätt.
- **Beslutsforum med disciplin.** Var fattas beslut, vilka behöver vara med och vad dokumenteras. Öppna kranar i Slack utan operational model leder ofta till mer brus, inte mer transparens.

Med AI‑agenter blir processdesign ännu viktigare. Om agenten gör sin grej men ansvar, kontrollpunkter och mätning saknas blir det ofta snabbare output men sämre kvalitet och mer koordinering.`,
    },
    en: {
      question: 'How do you reduce handoffs and internal friction without making everyone a generalist?',
      answer: `The goal is not for everyone to know everything. The goal is for fewer things to bounce between functions. That requires three building blocks:

- **Clear ownership of outcomes.** Someone owns not just a channel but an effect, for example activation, winback, or reviews to conversion.
- **Shared measurement logic.** The same numbers and the same evaluation method. Otherwise every meeting becomes a debate about which dashboard is right.
- **Decision forums with discipline.** Where decisions are made, who must be present, and what gets documented. Open Slack pipes without an operating model often create more noise, not more transparency.

With AI agents, process design becomes even more important. If the agent does its thing but ownership, checkpoints, and measurement are missing, output may be faster but quality often drops and coordination increases.`,
    },
  },
  {
    id: 'gemensamma-mal-marketing-ecom-crm',
    categories: ['organization', 'tech'],
    sv: {
      question: 'Hur bygger man gemensamma mål mellan marketing, e‑com och CRM utan fluff?',
      answer: `Gemensamma mål måste vara kopplade till affärsutfall och ha en gemensam mätprincip. Ett fungerande upplägg är att separera:

- **North Star.** Till exempel lönsam tillväxt.
- **Styrmått.** CAC till LTV, payback, retention per kohort och marginaltänk.
- **Teamnära mått.** Kanaler, CRM och e‑com optimerar inom ramen.

Det viktiga är att undvika att varje funktion väljer sina favoritmått. Om brand, performance och CRM tittar på olika sanningar kommer organisationen alltid prata förbi varandra. Därför behöver man också bestämma hur utvärdering ska ske, till exempel incrementality, MMM eller test, så att optimeringen inte fastnar i enkel attribution när beslutsvägarna blir mer diffusa.`,
    },
    en: {
      question: 'How do you build shared goals across marketing, e‑com, and CRM without fluff?',
      answer: `Shared goals must be tied to business outcomes and built on a shared measurement principle. A workable setup separates:

- **North Star.** For example profitable growth.
- **Steering metrics.** CAC to LTV, payback, retention by cohort, and margin thinking.
- **Team‑level metrics.** Channels, CRM, and e‑com optimize within the framework.

The key is to avoid each function choosing its own favorite metrics. If brand, performance, and CRM look at different truths, the organization will talk past itself. You also need to define how evaluation happens, incrementality, MMM, or testing, so optimization does not get stuck in simple attribution when decision paths are more diffuse.`,
    },
  },
  {
    id: 'centralt-vs-team-ai-agenter',
    categories: ['organization', 'ai-agenter'],
    sv: {
      question: 'Vad ska ligga centralt och vad kan ligga ute i teamen när AI‑agenter ökar?',
      answer: `När AI‑agenter införs är det extra viktigt att skilja på ramverk och exekvering.

**Centralt bör ligga:**

- Målramverk och mätprinciper
- Datatillgång och PII‑regler
- Agent‑governance och överblick
- Större budgettradeoffs och vendor‑val

**Ute i teamen bör ligga:**

- Snabb exekvering och iteration
- Kreativa varianter och kanaloptimering inom ramarna
- CRM‑triggers, segmentering och experiment i snabb takt

Om allt decentraliseras blir resultatet lätt POC‑spaghetti, många agenter och verktyg som jobbar parallellt utan helhetsbild, vilket ökar komplexiteten snarare än effektiviteten.`,
    },
    en: {
      question: 'What should be centralized and what can live in teams as AI agents increase?',
      answer: `When AI agents enter, it becomes extra important to separate frameworks from execution.

**Central should include:**

- Goal frameworks and measurement principles
- Data access and PII rules
- Agent governance and overview
- Major budget trade‑offs and vendor choices

**Team‑level should include:**

- Fast execution and iteration
- Creative variants and channel optimization within guardrails
- CRM triggers, segmentation, and rapid experimentation

If everything is decentralized the result is POC spaghetti, many agents and tools running in parallel without a holistic view, which increases complexity rather than efficiency.`,
    },
  },
  {
    id: 'undvik-spretiga-ai-initiativ',
    categories: ['ai-agenter', 'organization'],
    sv: {
      question: 'Hur undviker man att AI‑initiativ i marketing blir spretiga?',
      answer: `Spret uppstår när varje initiativ har egen data, egna verktyg, egna KPI:er och ingen gemensam uppföljning. Det ser ut som innovation, men det skalar inte.

Tre minimikrav gör stor skillnad:

- **Agent‑inventering.** Vilka agenter finns, vem äger dem och vilka system rör de?
- **Processkarta.** Var i flödet ligger agenten, vad gör människa vs agent, var sker granskning?
- **Mätning.** Vad betyder bättre, tid, kvalitet eller affärseffekt, och hur följs det upp?

Det är särskilt viktigt när AI employee‑system köps in per funktion från olika providers utan koppling till varandra eller till resten av teamet. Då blir AI ett nytt silo‑lager.`,
    },
    en: {
      question: 'How do you avoid AI initiatives in marketing becoming fragmented?',
      answer: `Fragmentation happens when each initiative has its own data, tools, KPIs, and no shared follow‑up. It looks like innovation, but it does not scale.

Three minimum requirements make a big difference:

- **Agent inventory.** Which agents exist, who owns them, and which systems do they touch?
- **Process map.** Where does the agent sit in the flow, what is human work versus agent work, and where does review happen?
- **Measurement.** What does “better” mean, time, quality, or business effect, and how is it tracked?

This matters especially when AI employee systems are bought per function from different providers without connection to each other or the rest of the team. Then AI becomes a new silo layer.`,
    },
  },
  {
    id: 'agent-governance-enkel',
    categories: ['ai-agenter', 'implementering'],
    sv: {
      question: 'Hur bygger man en enkel agent governance i marketing utan att skapa byråkrati?',
      answer: `Agent‑governance kan vara lättviktig men behöver finnas. Tänk trafikregler, inte en policybibel.

En minimal governance innehåller:

- Register över agenter och deras syfte
- Åtkomstregler med minsta privilegium, särskilt kring CRM och PII
- Kvalitetskrav och kontrollpunkter
- Loggning och spårbarhet, vad som gjordes och varför

Utan governance blir det svårt att ta de strategiska beslut som ofta motiverar AI, sänka kostnader, möjliggöra in‑housing och höja kvalitet. Det kräver insikt i vilka agenter som finns och hur de påverkar produktivitet och kvalitet.`,
    },
    en: {
      question: 'How do you build a lightweight agent governance in marketing without bureaucracy?',
      answer: `Agent governance can be lightweight but it must exist. Think traffic rules, not a policy bible.

A minimal governance includes:

- A register of agents and their purpose
- Access rules with least privilege, especially around CRM and PII
- Quality requirements and checkpoints
- Logging and traceability, what was done and why

Without governance it is hard to make the strategic decisions that often justify AI, reduce costs, enable in‑housing, and raise quality. That requires insight into which agents exist and how they affect productivity and quality.`,
    },
  },
  {
    id: 'mappa-manskliga-ai-tasks',
    categories: ['ai-agenter', 'organization'],
    sv: {
      question: 'Hur mappar man mänskliga tasks vs AI‑tasks i marketing på ett realistiskt sätt?',
      answer: `Att mappa tasks handlar om att skydda kvalitet och minska risk, samtidigt som repetitivt jobb kan skalas. En praktisk modell är tre nivåer:

- **Expertläge.** Svåra beslut, stora pengar, hög risk, till exempel budgetallokering, claims, varumärkesrisk och prissättning.
- **Övervakning.** Agenten får köra men måste granskas, till exempel kampanjiterationer eller vissa analyssteg.
- **Släpp kontroll.** Lågrisk, lätt att backa, tydliga guardrails, till exempel sammanställningar och first draft.

Många missar att agentifiering är processdesign. Om man bara lägger en agent på ett steg utan att ändra ansvar, kontrollpunkter och mätning blir output snabbare men inte nödvändigtvis bättre.`,
    },
    en: {
      question: 'How do you map human tasks versus AI tasks in marketing in a realistic way?',
      answer: `Mapping tasks is about protecting quality and reducing risk while scaling repetitive work. A practical model has three levels:

- **Expert mode.** Hard decisions, big money, high risk, for example budget allocation, claims, brand risk, and pricing.
- **Oversight.** The agent can run but must be reviewed, for example campaign iterations or certain analysis steps.
- **Release control.** Low risk, easy to roll back, clear guardrails, for example summaries and first drafts.

Many forget that agentification is process design. If you just drop an agent into a step without changing ownership, checkpoints, and measurement, output gets faster but not necessarily better.`,
    },
  },
  {
    id: 'agentic-commerce-vad-ar',
    categories: ['agentic-commerce', 'organization'],
    sv: {
      question: 'Vad är agentic commerce och varför påverkar det även SaaS, B2B och appar?',
      answer: `Agentic commerce är när AI‑agenter hjälper användare att researcha, jämföra och ibland genomföra köp. Det påverkar e‑com direkt, men mekanismen gäller bredare. Delar av discovery och research flyttar bort från traditionella ytor och in i agentgränssnitt och rekommendationslager.

För SaaS och B2B betyder det ofta att shortlisting och riskbedömning blir mer agentstödd, till exempel jämförelser, proof, policies och prissättningslogik. För appar kan det påverka hur användare hittar och väljer alternativ. I alla fall blir att bli vald mer beroende av trust‑signaler och tydlighet, och mindre beroende av att äga hela kundresan i egna kanaler.

Det driver organisatoriska konsekvenser. Brand och trust, produktdata och policies, CRM och measurement måste hänga ihop bättre, annars optimeras fel delar av systemet.`,
    },
    en: {
      question: 'What is agentic commerce and why does it affect SaaS, B2B, and apps too?',
      answer: `Agentic commerce is when AI agents help users research, compare, and sometimes complete purchases. It affects e‑commerce directly, but the mechanism is broader. Parts of discovery and research move away from traditional surfaces into agent interfaces and recommendation layers.

For SaaS and B2B this often means shortlisting and risk assessment become more agent‑assisted, such as comparisons, proof, policies, and pricing logic. For apps it can affect how users find and choose alternatives. In all cases, being chosen depends more on trust signals and clarity, and less on owning the entire journey in your own channels.

This drives organizational consequences. Brand and trust, product data and policies, CRM, and measurement must connect better, otherwise the wrong parts of the system get optimized.`,
    },
  },
  {
    id: 'trust-signaler-agent',
    categories: ['agentic-commerce', 'tech'],
    sv: {
      question: 'Vilka trust‑signaler blir viktigare när en agent gör jämförelsen åt kunden?',
      answer: `Agenter behöver signaler som är tydliga och jämförbara. Exempel är:

- Leveranslöften och leveranstider
- Returvillkor och kundlöften
- Reviews, ratings och proof
- Lagerstatus och variantlogik
- Prislogik och erbjudanden
- Produktpåståenden och hur väl de backas upp

Problemet är att dessa signaler ofta ägs av olika funktioner, brand, PR, CX, e‑com, ops och legal. Därför blir trust inte en kanalfråga utan en tvärfunktionell konstruktion. Om det saknas ägarskap och samordning blir resultatet ofta mer intern kommunikation och mer ad hoc‑beslut, samtidigt som man tappar förtroende externt.`,
    },
    en: {
      question: 'Which trust signals matter more when an agent compares options for the customer?',
      answer: `Agents need signals that are clear and comparable. Examples include:

- Delivery promises and delivery times
- Return terms and customer promises
- Reviews, ratings, and proof
- Inventory status and variant logic
- Price logic and offers
- Product claims and how well they are backed up

The problem is that these signals are often owned by different functions, brand, PR, CX, e‑com, ops, legal. That is why trust is not a channel issue but a cross‑functional construct. Without ownership and coordination, the result is more internal communication and more ad hoc decisions while external trust erodes.`,
    },
  },
  {
    id: 'cro-flyttar-fran-storefront',
    categories: ['agentic-commerce', 'organization'],
    sv: {
      question: 'Hur förändras CRO när research och rekommendation flyttar bort från storefront?',
      answer: `CRO flyttar från att enbart handla om pixelperfekt checkout till att handla om friktion, tydlighet och trust i hela systemet. När fler beslut tas innan användaren ens når storefront blir det viktigare att vinna i policies, produktdata, proof, reviews och konsekventa kundlöften.

Storefront är fortfarande viktig, men blir mindre ensam övertygelseyta. Det gör att CRO behöver samarbeta tätare med brand och trust, CX och ops. Annars blir standardlösningen att köpa mer trafik när konverteringen sjunker, istället för att fixa varför valet faller någon annanstans.`,
    },
    en: {
      question: 'How does CRO change when research and recommendations move away from the storefront?',
      answer: `CRO shifts from pixel‑perfect checkout to reducing friction, increasing clarity, and building trust across the system. When more decisions are made before a user reaches the storefront, it becomes more important to win on policies, product data, proof, reviews, and consistent promises.

The storefront is still important, but it is no longer the only persuasion surface. That means CRO must work more closely with brand and trust, CX, and ops. Otherwise the default fix is to buy more traffic when conversion falls instead of fixing why the choice happens elsewhere.`,
    },
  },
  {
    id: 'modern-funnel-ny-lojal',
    categories: ['agentic-commerce', 'organization'],
    sv: {
      question: 'Hur ser en modern funnel ut när ny och lojal kund blir mindre svartvit?',
      answer: `När agentgränssnitt och externa ytor tar större plats blir kundresan mindre linjär. En ny kund kan ha byggt preferens länge via jämförelser, reviews och proof utan att det syns i traditionell webbanalys. En lojal kund kan återköpa utan att besöka sajt eller öppna mail, eftersom agenten fortsätter välja baserat på trust, leverans, prislogik och returvillkor.

Det gör att CRM och acquisition inte längre kan optimeras var för sig utan effektförlust. Det behövs gemensamma mål, en gemensam kundmodell, prospect och customer i samma vy, och en experimentmotor som spänner över hela kedjan snarare än att ägas av en kanal.`,
    },
    en: {
      question: 'What does a modern funnel look like when “new” and “loyal” are less black and white?',
      answer: `When agent interfaces and external surfaces take more space, the journey becomes less linear. A new customer may build preference through comparisons, reviews, and proof long before the first purchase appears in your analytics. A loyal customer can repurchase without visiting your site or opening email because the agent keeps choosing you based on trust, delivery, price logic, and return terms.

That means CRM and acquisition can no longer be optimized separately without losing effect. You need shared goals, a shared customer model, prospect and customer in the same view, and an experiment engine that spans the whole chain rather than being owned by one channel.`,
    },
  },
  {
    id: 'tech-stack-krav-ai-effekt',
    categories: ['tech', 'ai-agenter'],
    sv: {
      question: 'Vad måste sitta i tech stack och data innan AI‑agenter ger riktig effekt?',
      answer: `Agenter är ingenting om de inte har en stabil grund att jobba på. Det handlar om tracking och instrumentering, produktdata, CRM‑struktur, BI och rapportering, consent och PII samt integrationsförmåga. Utan det riskerar agenter att optimera på fel signaler och organisationen kan inte bedöma om produktivitet och kvalitet faktiskt förbättras.

Det är också här många fastnar. Man implementerar agenter men tappar fokus på att förbättra grunden. Då blir agentifiering ett nytt lager komplexitet istället för en enabler.

En bra tumregel: om teamet inte kan enas om vilka siffror som gäller, eller om datakvalitet varierar mellan funktioner, är det för tidigt att skala agentarbete brett.`,
    },
    en: {
      question: 'What must be in place in tech stack and data before AI agents create real impact?',
      answer: `Agents are nothing without a stable foundation. That means tracking and instrumentation, product data, CRM structure, BI and reporting, consent and PII, and integration capability. Without this, agents optimize on the wrong signals and the organization cannot judge whether productivity and quality actually improve.

This is where many get stuck. They implement agents but lose focus on improving the foundation. Then agentification becomes a new layer of complexity rather than an enabler.

A good rule of thumb: if the team cannot agree on which numbers are correct, or if data quality varies across functions, it is too early to scale agent work broadly.`,
    },
  },
  {
    id: 'source-of-truth-spend-effekt',
    categories: ['tech', 'organization'],
    sv: {
      question: 'Hur bygger man en gemensam source of truth för spend och effekt utan Excel‑krig?',
      answer: `En source of truth är lika mycket disciplin som system. Den behöver:

- Gemensamma definitioner, vad räknas som spend, conversion, intäkt och marginal
- En tydlig ägare som kan avgöra tvister
- En rytm för uppföljning där siffrorna faktiskt används

Många tror att en dashboard automatiskt löser problemet. Men utan operational model för hur mål sätts, hur utvärdering görs och vilka mått som är relevanta kan dashboards bli kontraproduktiva. Parter tittar på olika vyer och får olika sanningar i huvudet.

I en agentifierad värld blir detta ännu viktigare eftersom fler beslut tas snabbare. Då behöver grunden vara stabil så att snabbheten inte bara blir snabbare fel.`,
    },
    en: {
      question: 'How do you build a shared source of truth for spend and effect without Excel wars?',
      answer: `A source of truth is as much discipline as system. It needs:

- Shared definitions, what counts as spend, conversion, revenue, and margin
- A clear owner who can settle disputes
- A cadence for follow‑up where numbers are actually used

Many think a dashboard automatically solves the problem. But without an operating model for how goals are set, how evaluation is done, and which metrics matter, dashboards can be counterproductive. People look at different views and end up with different truths.

In an agentified world this becomes even more important because more decisions happen faster. Then the foundation must be stable so speed does not just mean faster mistakes.`,
    },
  },
  {
    id: 'integrationer-agentbaserade',
    categories: ['tech', 'ai-agenter'],
    sv: {
      question: 'Vilka integrationer ger mest hävstång när fler processer blir agentbaserade?',
      answer: `Hävstång kommer från integrationer som minskar handpåläggning och ökar spårbarhet. Typiskt:

- CRM till annonsplattformar, audiences, exclusions och feedback‑loop
- Produktdata till kampanjsystem, pris, lager, attribut och policies
- Analytics och BI till intäktsdata, så effekter kan knytas till affär
- Loggning av agent‑actions, så man kan följa vad som gjorts och varför

Det som ofta missas är allt runt omkring. Approvals, budgetregler, brand‑constraints och kvalitetskontroller. En agent som kan göra ads men inte passar in i beslutskedjan skapar mer friktion än värde.`,
    },
    en: {
      question: 'Which integrations create the most leverage as more processes become agent‑based?',
      answer: `Leverage comes from integrations that reduce manual work and increase traceability. Typical examples:

- CRM to ad platforms, audiences, exclusions, feedback loops
- Product data to campaign systems, price, inventory, attributes, policies
- Analytics and BI to revenue data, so effects connect to the business
- Logging of agent actions, so you can see what was done and why

What is often missed is the surrounding layer, approvals, budget rules, brand constraints, and quality checks. An agent that can create ads but does not fit into the decision chain creates more friction than value.`,
    },
  },
  {
    id: 'ai-tech-stack-spretig',
    categories: ['tech', 'ai-agenter'],
    sv: {
      question: 'Hur förändrar AI marknadsavdelningens tech stack, och varför blir det lätt spretigt?',
      answer: `AI gör att fler kan producera och analysera mer, snabbare. Men det ökar också risken för ett lapptäcke av verktyg, prompts och workflows, särskilt när införandet sker på individnivå eller via POC, och när olika funktioner köper in olika AI‑employee‑system.

Resultatet blir ofta spretig datadisciplin och parallella sanningar. Det som hjälper är standardisering, godkända verktyg, gemensamma dataflöden, tydliga sätt att jobba och spårbarhet så att agentarbete kan revideras.

Kärnpoängen är enkel. Agenter är inte stacken. De behöver en stack som sitter.`,
    },
    en: {
      question: 'How does AI change the marketing tech stack, and why does it get messy?',
      answer: `AI lets more people produce and analyze more, faster. But it also increases the risk of a patchwork of tools, prompts, and workflows, especially when adoption happens at the individual level or via POCs, and different functions buy different AI employee systems.

The result is often messy data discipline and parallel truths. The fix is standardization, approved tools, shared data flows, clear ways of working, and traceability so agent work can be reviewed.

The core point is simple. Agents are not the stack. They need a stack that works.`,
    },
  },
  {
    id: 'leja-ut-kanal-nar',
    categories: ['byraer', 'organization'],
    sv: {
      question: 'När fungerar det att leja ut en kanal, och när blir det en dålig idé?',
      answer: `Det fungerar när intern organisation har ägarskap över mål, mätning och strategi, och byrån främst är exekveringsmotor. Det fungerar sämre när kanalen i praktiken är kärnan i tillväxten och intern systemförståelse saknas. Då skapas beroende och mer kommunikation, inte mindre.

Med AI ökar risken. Output kan komma snabbare, men om intern datadisciplin och beslutskriterier saknas blir byrån lätt en extern silo. Mycket tid går åt till att svara på frågor som bottnar i bristande överblick, snarare än att jobba strategiskt.

Ett bättre angreppssätt är att köpa in förmågor och profiler som kan jobba tvärfunktionellt, measurement, experimentdesign, creative systems, instrumentering och kvalitetsstyrning.`,
    },
    en: {
      question: 'When does it make sense to outsource a channel, and when is it a bad idea?',
      answer: `It works when the internal organization owns goals, measurement, and strategy, and the agency is mainly an execution engine. It works poorly when the channel is effectively the core of growth and internal system understanding is missing. Then you create dependency and more communication, not less.

With AI the risk increases. Output can be faster, but without internal data discipline and decision criteria the agency becomes an external silo. A lot of time goes to answering questions rooted in lack of overview rather than doing strategic work.

A better approach is to buy capabilities and profiles that can work cross‑functionally, measurement, experiment design, creative systems, instrumentation, and quality control.`,
    },
  },
  {
    id: 'byra-samarbete-minska-kommunikation',
    categories: ['byraer', 'organization'],
    sv: {
      question: 'Hur ska samarbetet med byråer se ut för att minska kommunikation som suger tid?',
      answer: `Kommunikation är kritiskt, men problemet är när den blir ett substitut för struktur. Med ökad specialisering ökar både komplexitet och frekvens på frågor. När kranarna är öppna, Slack och direktaccess, kan informationsflödet bli enormt och beslut tas i informella rum. Det förstärker silos både internt och mellan bolag och byrå.

Det som minskar brus är en tydlig samarbetsmodell:

- Hur mål sätts och prioriteras
- Vilken utvärderingsmetod som gäller, MMM, incrementality eller test
- Vilka siffror som räknas, source of truth
- Var beslut fattas och dokumenteras

Dashboards kan hjälpa, men löser inte grundproblemet om parter ändå tittar på olika mått och har olika sanningar i huvudet. Struktur gör att kommunikationen flyttar från konstant kran av frågor till strategiska diskussioner och beslutsmöten.`,
    },
    en: {
      question: 'What should agency collaboration look like to reduce time‑draining communication?',
      answer: `Communication is critical, but the problem is when it substitutes for structure. With more specialization, complexity and question volume increase. When the pipes are open, Slack and direct access, information flow becomes huge and decisions happen in informal rooms. That strengthens silos both internally and between company and agency.

What reduces noise is a clear collaboration model:

- How goals are set and prioritized
- Which evaluation method applies, MMM, incrementality, or test
- Which numbers count as the source of truth
- Where decisions are made and documented

Dashboards can help, but they do not solve the root problem if parties still look at different metrics and hold different truths. Structure shifts communication from a constant stream of questions to strategic discussions and decision meetings.`,
    },
  },
  {
    id: 'externa-profiler-2026',
    categories: ['byraer', 'kompetens'],
    sv: {
      question: 'Vilka externa profiler är mest värdefulla att köpa in 2026+?',
      answer: `Värdet ligger sällan i någon som kan en kanal. Värdet ligger i förmågor som skapar hävstång och ordning:

- Measurement, attribution, MMM och experimentdesign
- Instrumentering och dataplattformsförståelse
- Creative systems, hur kreativt arbete produceras i skala med kvalitet
- Agent‑ops, hur agentflöden drivs, kvalitetssäkras och loggas

Viktigt är att externa resurser kan jobba i organisationens verkliga processer, inte bara leverera output från sidan. Annars byggs en extern silo och kommunikationen ökar.`,
    },
    en: {
      question: 'Which external profiles are most valuable to bring in for 2026+?',
      answer: `The value rarely lies in someone who knows a single channel. The value lies in capabilities that create leverage and order:

- Measurement, attribution, MMM, and experiment design
- Instrumentation and data platform understanding
- Creative systems, how creative work is produced at scale with quality
- Agent ops, how agent flows are run, quality‑assured, and logged

What matters is that external resources can work inside the organization’s real processes, not just deliver output from the side. Otherwise you build an external silo and communication grows.`,
    },
  },
  {
    id: 'byraer-viktigast-behalla',
    categories: ['byraer'],
    sv: {
      question: 'Vilka byråer är viktigast att behålla när AI blir standard?',
      answer: `De viktigaste byråerna är de som bidrar med metod, transparens och kvalitetsdisciplin, inte bara output. När alla kan producera mer med AI blir det runt omkring som avgör, erfarenhet, kritisk förmåga mot plattformar och förmåga att jobba mot gemensamma mål och gemensam mätning.

Byråer som är AI‑first kan ha fördel i tempo, men tempo utan struktur riskerar att skapa spretig datadisciplin och fler silos. Bra byråer hjälper organisationen att få överblick, minska brus och fatta bättre beslut.`,
    },
    en: {
      question: 'Which agencies are most important to keep when AI becomes standard?',
      answer: `The most important agencies are those that bring method, transparency, and quality discipline, not just output. When everyone can produce more with AI, what matters is the surrounding craft, experience, critical ability toward platforms, and the ability to work against shared goals and shared measurement.

AI‑first agencies may have speed advantages, but speed without structure risks messy data discipline and more silos. Good agencies help the organization gain overview, reduce noise, and make better decisions.`,
    },
  },
  {
    id: 'mmm-incrementality-geo',
    categories: ['measurement', 'organization'],
    sv: {
      question: 'Varför blir MMM, incrementality och geo‑tester viktigare än traditionell attribution?',
      answer: `Enkel attribution räcker sämre när privacy, fler kanaler och agentdrivna flöden gör beslutsvägarna mer diffusa. När delar av kundresan flyttar bort från traditionella ytor blir det svårare att se hela resan i en och samma kedja.

Därför flyttar värdet till triangulering, MMM, incrementality och geo‑tester, plus en tydligare koppling mellan affärsutfall och marknadsinsats. Det blir ett sätt att styra när last‑click eller plattformarnas egna modeller inte räcker.

Konsekvensen är organisatorisk. Om det saknas gemensam metod blir measurement en konfliktzon mellan silos. Om metoden finns kan organisationen röra sig snabbare med mindre friktion.`,
    },
    en: {
      question: 'Why do MMM, incrementality, and geo tests matter more than traditional attribution?',
      answer: `Simple attribution works worse when privacy, more channels, and agent‑driven flows make decision paths more diffuse. When parts of the journey move off traditional surfaces it becomes harder to see the full chain in one view.

That is why value shifts to triangulation, MMM, incrementality, and geo tests, plus a clearer link between business outcomes and marketing input. It is a way to steer when last‑click or platform models are not enough.

The consequence is organizational. Without a shared method, measurement becomes a conflict zone between silos. With a method, the organization can move faster with less friction.`,
    },
  },
  {
    id: 'experimentmotor-kanalneutralt',
    categories: ['organization', 'tech', 'measurement'],
    sv: {
      question: 'Hur bygger man en experimentmotor som inte ägs av en kanal?',
      answer: `En kanalägd experimentmotor tenderar att optimera för kanalens verklighetsbild. En kanalneutral motor utgår från affärsfrågor, driver detta inkrementell effekt och vad händer med retention och payback.

Byggstenar:

- En gemensam backlog av hypoteser som berör hela kedjan, budskap till onboarding till reactivation
- Standardiserade testformat, geo‑test, holdouts och incrementality‑upplägg
- Tydliga regler för vad som får ändras under testperioder
- En ägare med mandat att säga nu testar vi och hålla andra förändringar borta

När detta finns minskar också behovet av ständig ad hoc‑kommunikation, eftersom svar tas fram med en metod som alla accepterar.`,
    },
    en: {
      question: 'How do you build an experiment engine that is not owned by a channel?',
      answer: `A channel‑owned experiment engine tends to optimize for the channel’s view of reality. A channel‑neutral engine starts from business questions, does this drive incremental effect and what happens to retention and payback.

Building blocks:

- A shared backlog of hypotheses across the chain, messaging to onboarding to reactivation
- Standardized test formats, geo tests, holdouts, incrementality setups
- Clear rules for what can change during test periods
- An owner with mandate to say “now we test” and keep other changes out

When this exists, the need for constant ad hoc communication falls because answers are produced with a method everyone accepts.`,
    },
  },
  {
    id: 'agare-mmm-inkrementalitet',
    categories: ['kompetens', 'organization', 'measurement'],
    sv: {
      question: 'Vem bör äga MMM och inkrementalitet, och varför räcker det inte med någon på analys?',
      answer: `MMM och inkrementalitet kräver mandat. Det påverkar budget, prioriteringar och vilka sanningar organisationen styr efter. Därför kan det inte vara en sidouppgift som plockas upp när det brinner.

Ägaren behöver kunna:

- Sätta metod och standarder
- Utbilda stakeholders i vad som är relevant att titta på
- Hålla ihop source of truth
- Driva att insikter faktiskt leder till beslut, inte bara rapporter

I en värld där fler kan köra en MMM i ett sheet blir ägarskap ännu viktigare, annars riskerar kvaliteten att sjunka och organisationen att fatta beslut på felaktiga modeller.`,
    },
    en: {
      question: 'Who should own MMM and incrementality, and why is “someone in analytics” not enough?',
      answer: `MMM and incrementality require mandate. They affect budget, priorities, and which truths the organization steers by. That is why it cannot be a side task picked up when things burn.

The owner needs to be able to:

- Set method and standards
- Educate stakeholders on what matters
- Hold the source of truth together
- Drive insights into decisions, not just reports

In a world where more people can run an MMM in a sheet, ownership becomes even more important, otherwise quality drops and the organization makes decisions on flawed models.`,
    },
  },
  {
    id: 'geo-tester-parallella',
    categories: ['tech', 'organization', 'measurement'],
    sv: {
      question: 'Hur designar man geo‑tester som fungerar trots många parallella initiativ?',
      answer: `Det största hindret är sällan statistik. Det är att organisationen ändrar för många saker samtidigt. Geo‑tester kräver disciplin, tydlig intervention, stabilitet i andra insatser och en kontrollgrupp som är jämförbar.

För att få det att funka behövs:

- Ett beslutsforum som kan frysa vissa förändringar under test
- Tydliga regler för byråer och interna team, vad som får optimeras
- Konsekvent datainsamling och gemensamma definitioner

När attribution blir svagare blir geo‑tester ett robust sätt att skapa trygghet i beslut, men bara om organisationen respekterar testet.`,
    },
    en: {
      question: 'How do you design geo tests that work despite many parallel initiatives?',
      answer: `The biggest hurdle is rarely statistics. It is that the organization changes too many things at the same time. Geo tests require discipline, a clear intervention, stability in other efforts, and a comparable control group.

To make it work you need:

- A decision forum that can freeze certain changes during the test
- Clear rules for agencies and internal teams on what can be optimized
- Consistent data collection and shared definitions

As attribution weakens, geo tests become a robust way to build decision confidence, but only if the organization respects the test.`,
    },
  },
  {
    id: 'roller-viktigare-ai',
    categories: ['kompetens', 'ai-agenter'],
    sv: {
      question: 'Vilka roller blir viktigare i marketing när AI‑agenter tar mer repetitivt jobb?',
      answer: `Två profiler blir extra värdefulla:

- **Rätt typ av generalist och projektledare.** Hands‑on, strukturerad, affärsförstående och bra på att koordinera mellan in‑house, byråer, agenter och tech vendors. Behovet av processdesign och koordination ökar när agentlandskapet växer.
- **Den kreativa analytiska prototyparen.** En growth‑profil med kreativ höjd men också teknisk och analytisk förmåga, gärna med measurement‑insikt och plattformsförståelse.

Samarbetet mellan dessa är ofta avgörande. Prototyparen testar och formar, projektledaren driver igenom, skapar uthållighet och ser till att det faktiskt blir gjort.`,
    },
    en: {
      question: 'Which roles become more important as AI agents take more repetitive work?',
      answer: `Two profiles become extra valuable:

- **The right kind of generalist and project lead.** Hands‑on, structured, business‑savvy, and good at coordinating between in‑house, agencies, agents, and tech vendors. The need for process design and coordination grows as the agent landscape grows.
- **The creative analytical prototyper.** A growth profile with creative range and technical and analytical ability, ideally with measurement insight and platform understanding.

The collaboration between these two is often decisive. The prototyper tests and shapes, the project lead drives it through, builds endurance, and ensures it actually gets done.`,
    },
  },
  {
    id: 'kompetenser-billiga-dyrt',
    categories: ['kompetens'],
    sv: {
      question: 'Vilka kompetenser riskerar att bli billiga med AI, och vad blir kvar som dyrt?',
      answer: `Repetitivt utförande blir billigare, first drafts, sammanställningar, variationer och enklare analys. Men två saker blir kvar som dyra:

- **Omdöme och erfarenhet.** Att veta vad som är relevant, vad som är risk och vad som håller över tid.
- **Djup plattforms‑ och kanalexpertis.** Om man tappar den blir det svårt att vara kritisk mot Google, Meta och vendor‑lösningar. Då får plattformarna ännu mer makt.

När alla kan göra allt ökar behovet av kvalitetssäkring, metod och styrning. Annars sjunker kvaliteten snabbt även om outputen ökar.`,
    },
    en: {
      question: 'Which skills risk becoming cheap with AI, and what stays expensive?',
      answer: `Repetitive execution becomes cheaper, first drafts, summaries, variations, and basic analysis. But two things remain expensive:

- **Judgement and experience.** Knowing what matters, what is risky, and what holds over time.
- **Deep platform and channel expertise.** If you lose it, it becomes hard to be critical toward Google, Meta, and vendor solutions. Then platforms gain even more power.

When everyone can do everything, the need for quality assurance, method, and governance increases. Otherwise quality drops even if output rises.`,
    },
  },
  {
    id: 'leda-team-manniskor-agenter',
    categories: ['kompetens', 'ai-agenter'],
    sv: {
      question: 'Hur leder man ett team med både människor och AI‑agenter utan att tappa kvalitet?',
      answer: `Ledarskapet behöver kombinera två saker, tydlig process och tydlig kvalitetsribba.

För agenter krävs definierade uppdrag, begränsningar, loggning och uppföljning. För människor krävs tydliga mål, gemensam mätning och minskad friktion mellan funktioner. Annars blir resultatet att alla springer snabbt men åt olika håll.

Kvalitet bör hanteras med tre nivåer:

- Var experter behövs
- Var övervakning krävs
- Var kontroll kan släppas

Det är ofta allt runt omkring som avgör om AI ger effekt, ansvar, beslutskriterier, granskning och att lärande faktiskt återförs till processen.`,
    },
    en: {
      question: 'How do you lead a team with both people and AI agents without losing quality?',
      answer: `Leadership must combine two things, clear process and a clear quality bar.

Agents need defined tasks, constraints, logging, and follow‑up. People need clear goals, shared measurement, and reduced friction between functions. Otherwise everyone runs fast in different directions.

Quality should be managed in three levels:

- Where experts are required
- Where oversight is required
- Where control can be released

It is often everything around the work that decides whether AI delivers, ownership, decision criteria, review, and learning that is fed back into the process.`,
    },
  },
  {
    id: 'pii-gdpr-sakerhet',
    categories: ['implementering', 'ai-agenter'],
    sv: {
      question: 'Hur hanterar man PII, GDPR och säkerhet när AI‑agenter kopplas till marketing och CRM?',
      answer: `Första steget är inventering. Vilka agenter och verktyg används, även individuella, vilka system har de access till, och hanterar de PII.

Andra steget är åtkomststyrning. Minsta privilegium, tydliga regler för vad som får skickas till externa tjänster och kontrollpunkter för känsliga beslut, till exempel segmentering, export av kunddata och claims.

Tredje steget är spårbarhet. Logga agenters actions och beslut så att det går att revidera vad som hände, varför det hände och vilket resultat det gav. Utan spårbarhet är det svårt att både säkra compliance och att förstå om agentifiering faktiskt förbättrar produktivitet och kvalitet.`,
    },
    en: {
      question: 'How do you handle PII, GDPR, and security when AI agents connect to marketing and CRM?',
      answer: `First step is inventory. Which agents and tools are used, including individual ones, which systems they access, and whether they handle PII.

Second step is access control. Least privilege, clear rules for what can be sent to external services, and checkpoints for sensitive decisions, for example segmentation, export of customer data, and claims.

Third step is traceability. Log agent actions and decisions so you can review what happened, why it happened, and what result it produced. Without traceability it is hard to ensure compliance and to understand whether agentification actually improves productivity and quality.`,
    },
  },
  {
    id: 'sakerhetsrisk-alla-pratar',
    categories: ['implementering', 'organization'],
    sv: {
      question: 'Hur undviker man att alla pratar med alla blir en säkerhetsrisk när verktyg och agenter sprids?',
      answer: `När Slack‑kranar öppnas och många verktyg används parallellt kan data röra sig i informella kontexter. Det gör att både beslut och information hamnar i semi‑stängda rum, vilket skapar risker och förstärker silos.

Det som minskar risken är att kombinera struktur och enkelhet:

- Godkända verktyg och standardiserade workflows
- Tydliga regler för PII och kunddata
- Gemensamma forum för beslut och dokumentation
- En agent och tool‑inventering som gör det lätt att göra rätt

Säkerhet blir då en del av operating model, inte bara en IT‑fråga.`,
    },
    en: {
      question: 'How do you avoid “everyone talks to everyone” becoming a security risk as tools and agents spread?',
      answer: `When Slack pipes are open and many tools are used in parallel, data can move in informal contexts. That means decisions and information end up in semi‑closed rooms, which creates risk and strengthens silos.

What reduces risk is combining structure and simplicity:

- Approved tools and standardized workflows
- Clear rules for PII and customer data
- Shared forums for decisions and documentation
- An agent and tool inventory that makes it easy to do the right thing

Security then becomes part of the operating model, not just an IT issue.`,
    },
  },
  {
    id: 'farligt-automatisera-allt',
    categories: ['ai-agenter', 'kompetens', 'automation'],
    sv: {
      question: 'Varför är det farligt att automatisera allt i marketing när AI blir tillgängligt för alla?',
      answer: `Automatisering är ofta bra, särskilt när avancerade metoder blir mer tillgängliga. Men när alla kan göra allt sjunker kvaliteten snabbt om ingen äger hantverket, ribban och kontrollpunkterna. Det gäller inte bara content, utan även analys, mätning och beslut.

Det är också lätt att tro att verktyg ersätter erfarenhet. I praktiken krävs djup kompetens för att förstå när något ser rätt ut men är fel. Utan expertis och styrning blir automatisering ofta en snabbare väg till mediokert output.

En robust lösning är att definiera tre nivåer, var experter krävs, var övervakning krävs och var kontroll kan släppas med tydliga guardrails.`,
    },
    en: {
      question: 'Why is it dangerous to automate everything in marketing when AI becomes available to everyone?',
      answer: `Automation is often great, especially as advanced methods become more accessible. But when everyone can do everything, quality drops fast if no one owns the craft, the bar, and the checkpoints. This is not just about content, it also applies to analysis, measurement, and decisions.

It is easy to think tools replace experience. In practice you need deep expertise to spot when something looks right but is wrong. Without expert judgement and governance, automation becomes a faster path to mediocre output.

A robust solution is to define three levels, where experts are required, where oversight is required, and where control can be released with clear guardrails.`,
    },
  },
  {
    id: 'kvalitetsribba-agent-output',
    categories: ['ai-agenter', 'organization', 'automation'],
    sv: {
      question: 'Hur sätter man en kvalitetsribba för agent‑output utan att bromsa tempo?',
      answer: `Kvalitetssäkring funkar bäst när den är inbyggd i processen, inte som en sista kontroll. Det innebär tydliga definitioner av vad bra är, till exempel korrekthet, policy compliance, brand constraints och mätbarhet, och automatiserade checks där det går.

Kritiska beslut bör alltid ha mänsklig granskning. Claims, policy, budgetallokering, segmentering med PII och saker med hög varumärkesrisk. För lågrisk‑uppgifter kan kontroll släppas, men då måste det vara lätt att backa och lätt att se vad som gjorts.

Det som ofta saknas i praktiken är spårbarhet. Om det går att se vad agenten gjorde och varför blir kvalitet enklare att styra utan att skapa byråkrati.`,
    },
    en: {
      question: 'How do you set a quality bar for agent output without slowing the pace?',
      answer: `Quality assurance works best when it is built into the process, not added at the end. That means clear definitions of what “good” is, for example correctness, policy compliance, brand constraints, and measurability, plus automated checks where possible.

Critical decisions should always have human review. Claims, policy, budget allocation, segmentation with PII, and high brand‑risk work. For low‑risk tasks, control can be released, but it must be easy to roll back and easy to see what was done.

What often lacks in practice is traceability. If you can see what the agent did and why, quality is easier to steer without creating bureaucracy.`,
    },
  },
  {
    id: 'undvik-ai-silos',
    categories: ['ai-agenter', 'organization', 'automation'],
    sv: {
      question: 'Hur undviker man att AI‑agenter skapar fler silos istället för effektivitet?',
      answer: `AI‑agenter skapar silos när implementering sker fragmenterat, på individnivå, via POC eller via inköpta AI‑employee‑system per funktion utan helhetsbild. Då saknas transparens över hur agenter och team, inklusive byråer, jobbar tillsammans, och vad som är mänskliga tasks vs AI‑tasks.

Motmedlet är överblick och struktur:

- Agent‑inventering och tydligt ägarskap
- Processkartor som visar samspel mellan människor, agenter och byråer
- Gemensamma mål och mätning
- Selektiv automation där kvalitet skyddas

Utan det riskerar agentifiering att bli ökad komplexitet snarare än ökad effektivitet.`,
    },
    en: {
      question: 'How do you prevent AI agents from creating more silos instead of efficiency?',
      answer: `AI agents create silos when implementation is fragmented, individual, via POCs, or through AI employee systems per function without a holistic view. Then there is no transparency around how agents and teams, including agencies, work together, and what is human work versus agent work.

The antidote is overview and structure:

- Agent inventory and clear ownership
- Process maps that show how humans, agents, and agencies work together
- Shared goals and measurement
- Selective automation that protects quality

Without this, agentification risks becoming increased complexity rather than increased efficiency.`,
    },
  },
]

// Helper to get FAQ schema for SEO
export function generateFAQSchema(faqs, lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq[lang].question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq[lang].answer.replace(/\*\*/g, '').replace(/\n/g, ' '),
      },
    })),
  }
}

// Helper to generate Person schema for authority
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Matilda Rydow',
    jobTitle: 'AI Advisor & Consultant',
    description: 'Strategic AI advisor for Nordic CMOs. Expert in martech, data & analytics, and AI-driven operating models.',
    url: 'https://matildarydow.com',
    sameAs: [
      'https://www.linkedin.com/in/matilda-rydow-13057161/',
    ],
    knowsAbout: [
      'AI in Marketing',
      'Martech',
      'Data & Analytics',
      'Operating Models',
      'AI Agents',
      'Agentic Commerce',
      'Marketing Transformation',
    ],
    alumniOf: [
      { '@type': 'Organization', name: 'Precis' },
      { '@type': 'Organization', name: 'Ving/Thomas Cook' },
      { '@type': 'Organization', name: 'Tikkurila' },
    ],
    founder: [
      { '@type': 'Organization', name: 'Alvie by Precis' },
      { '@type': 'Organization', name: 'Wilgot' },
    ],
  }
}
