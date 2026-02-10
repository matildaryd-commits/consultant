export const faqCategories = [
  {
    id: 'organisation',
    sv: { title: 'Organisation & Operating Model' },
    en: { title: 'Organisation & Operating Model' },
  },
  {
    id: 'ai-agenter',
    sv: { title: 'AI-agenter' },
    en: { title: 'AI Agents' },
  },
  {
    id: 'agentic-commerce',
    sv: { title: 'Agentic Commerce' },
    en: { title: 'Agentic Commerce' },
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
      categories: ['organisation', 'kompetens'],
      sv: {
        question: 'Hur bör en marknadsavdelning organiseras 2026–2027 och framåt?',
        answer: `Samarbete, transparens, mod och kreativitet är ledord som jag tror blir viktiga. Jag har även snöat in på ämnet silos. Mer specifikt varför de bara har blivit fler senaste åren, och varför de riskerar att bli värre när AI‑agenter tar mer plats.
  
  Innan jag går in på mer i detalj kring riskerna med AI‑agenter kopplat till silos, så vill jag göra en kort recap.
  
  Många inhouse‑team är väldigt kompetenta, men arbetet i fel typ av silos är ofta en blocker. Min bild är att de senaste 10 åren har silofieringen ökat. Det finns flera orsaker till det. En orsak är att inhouse‑teamen ofta har vuxit i storlek. De har vuxit på grund av att fler byråsamarbeten har tagits hem och den fragmenterade digitala spelplanen har lett till ett ökat behov av specialistkompetens. Teamen växer, och kompetensen ökar, men gamla strukturer består varför många funktioner (brand‑team, creative‑team, SEO, revenue, CRM, kanalägare, e‑com, sälj, CX osv.) har alltför lite samröre och insikt i varandras arbete.
  
  Det paradoxala är också att när inhouse‑teamet har växt så har i många fall även byråsamarbetena gjort det. Varför? Jo, för att varje inhouse‑funktion vill ha sin egen spegelbild på byråsidan. Det är så strukturen har sett ut, och fortsätter att se ut. Konsekvensen av detta är att marknad/sälj/CRM‑avdelningar (inklusive dess underavdelningar) inte bara jobbar i silos, utan de skapar även sin egen silo med de byråer de samarbetar med. Detta leder inte bara till ett ytterligare lager av komplexitet utan också till att en orimligt stor del av ett byråsamarbete mellan ett medelstort/stort inhouse‑team och en medelstor/stor byrå går åt till kommunikation.
  
  **AI‑agenter kan skapa fler och djupare silos**
  
  AI‑agenter riskerar att skapa ännu fler silos om man inte har med sig det organisatoriska perspektivet tidigt och är proaktiv. Idag saknas nästan i princip alltid transparens över vilka AI‑agenter som finns implementerade eller planeras, hur de (i bästa fall) jobbar tillsammans, och hur samarbete/processer mellan människa och agent ser ut. Implementationerna av AI‑agenter sker idag ofta på individnivå, eller genom att man köper in helt system för en specifik funktion (exempelvis SEO AI Employees) som saknar koppling till helheten. Det kan också röra sig om en mer enterprise‑anpassad implementation som är i proof of concept‑stadiet där man försöker lösa större problem, men där utvecklingen går långsamt.
  
  **Så hur ska man organisera marknadsavdelningen 2026–2027 och framåt?**
  
  Först, det finns vissa skillnader mellan branscher och vertikaler, precis så som fallet är idag. Min bild är dock att vertikaliseringen kommer att öka något. Det gäller både specifik kompetens som bolag har nytta av, men också hur man skulle kunna organisera sig för maximal effekt.
  
  Några principer kommer såklart att återkomma mellan vertikaler. Jag vill lyfta fram att orsaken är driven från två håll. Dels möjligheterna som AI presenterar när det kommer till att effektivisera arbetet inom marknadsavdelningen, men också agentic commerce som kommer sätta press på bolag, och CMO:er inte minst, att i många fall ganska drastiskt tänka om sin operating model.
  
  **1) Utgå från tech‑stackens mognadsgrad och datans kvalité**  
  Organisering och ways of working måste utgå från nuläget i stacken och datans kvalité. Är mognadsgraden låg och datakvaliteten svag, så måste man tänka på ett visst sätt kring implementation av AI‑agenter och organisationen som helhet, och vice versa. Det gäller att hålla två spår igång samtidigt, både förbättra och förändra stacken och datakvalitén samtidigt som implementeringen av AI‑agenter och förändring i organisationen pågår. Det kritiska är att dessa två spår följs åt, väldigt tight.
  
  **2) Tänk på att agentic commerce påverkar alla bolag, inte bara e‑handlare**  
  Agentic commerce innebär att AI‑agenter researchar, jämför och ibland köper åt användaren och bolag. Discovery, research och ibland checkout flyttas någon annanstans. Detta tror jag leder till ett par viktiga organisationsskiften:
  
  - **Trust och brand‑ansvar över kanaler.** En funktion behövs över kanaler som äger varumärket, PR, recensioner, policies, kundlöften, produktpåståenden och proof. Det innebär att team som historiskt jobbat rätt så silofierade, PR, brand, social, product, insight, måste komma samman. I en tid när det är lättare för små bolag att konkurrera med stora, och när kunder blir mindre lojala, blir detta en av de absolut viktigaste funktionerna för att driva revenue, både på kort och lång sikt.
  - **CRO och funneln förändras.** Om valen, eller i alla fall rekommendationen, framåt till stor del kommer att göras av en AI‑agent istället för på siten eller i checkout, behöver CRO, e‑com och webb ta ansvar för det som faktiskt gör att en rekommendation sker. Vill man tänka ett steg längre kan man fundera på om kompetensen och teamet som vi känner det faktiskt inte behöver göras om från grunden.
  - **CRM och acquisition, riv barriärer.** Vad är en ny kund och vad är en lojal kund när agenten gör researchen? Troligen inte alls lika svartvitt som i dag. Det som historiskt legat under respektive avdelnings ansvar måste börja ses som ett och samma system, inte två separata maskiner. En ny kund kan ha byggt preferens långt innan första köpet syns i din data, och en lojal kund kan återkomma utan att någonsin besöka din sajt, för att en agent fortsätter välja dig baserat på trust, leverans, prislogik, returvillkor och produktdata. Det gör att acquisition, hitta nya, och CRM, bearbeta befintliga, inte längre kan optimeras var för sig utan effektförlust. Därför behöver barriärerna rivas på riktigt.
  
  **3) Byrå‑ och konsultsamarbeten, operating model och samarbetsform behöver utmanas**  
  Byråer kommer också använda AI. Det betyder inte att ni måste mindre med byråer. Men det betyder att själva samarbetet måste designas om. Annars sitter ni snart med två parallella system, ni har optimerat människa och agent‑flöden internt, och byrån har optimerat sina människa och agent‑flöden externt, utan att systemen pratar med varandra. Det är en jätterisk, dubbla definitioner, sämre spårbarhet, mer friktion och till slut lägre tempo.
  
  Två saker att vara tydlig med när du sätter upp samarbetet:
  
  - **Transparens och kompatibilitet.** Samma datakällor, samma spårning, samma definitioner, samma QA, och ett sätt att koppla ihop agent‑lagret så ni inte bygger två separata system.
  - **Rätt värdemodell.** Om du får exakt samma leverans och betalar exakt lika mycket när produktion effektiviseras av AI är det skevt. Samtidigt går enormt mycket tid åt till kommunikation idag, och om operating model inte sitter kommer den tiden inte minska, den kommer öka.
  
  Och slutligen, vissa funktioner är mer verksamhetskritiska än andra. I vissa fall kan det funka att leja ut en hel funktion, i andra fall måste den vara intern. Men det som kan vara högaktuellt att köpa in, avancerad analys, mätning, automatisering, kreativ höjd, djup kanalkompetens, och förmågan att faktiskt genomskåda plattformar (hej Google).
  
  **4) Measurement, attribution och MMM blir viktigare än någonsin**  
  Ja, det har ni säkert hört förut. Men så är det, av lite olika anledningar. AI gör att skillnader mellan bolag minskar. Det blir allt svårare att skaffa sig konkurrensfördelar. Att ha ett järngrepp kring holistisk utvärdering, och låta det genomsyra hela arbetssättet är en sådan konkurrensfördel som är väldigt svår att både få till och kopiera. En annan anledning är en ytterligare fragmentering av köpresan, där en ännu större del av research‑processen kommer att ske utanför siten och av agenter.
  
  **5) Automatisera inte allt, optimera för kvalitet**  
  Det handlar inte bara om content, utan om i princip allt. Automatisering är ofta toppen, särskilt när metoder som MMM blir mer tillgängliga, men när alla kan göra allt sjunker kvaliteten snabbt om ingen äger hantverket, ribban och kontrollpunkterna.
  
  Tänk i tre nivåer:
  
  - **Experter på riktigt.** Svåra beslut, stora pengar, hög risk.
  - **Övervakning krävs.** Automation får köra, men någon måste granska och styra.
  - **Släpp kontroll.** Lågrisk, lätt att backa, tydliga guardrails.`,
      },
      en: {
        question: 'How should a marketing organisation be structured for 2026–2027 and beyond?',
        answer: `Collaboration, transparency, courage, and creativity are principles I believe will matter. I have also become obsessed with silos. More specifically why they have grown over the last few years and why they risk getting worse as AI agents take more space.
  
  Before I go into the risks of AI agents and silos, I need a short recap.
  
  Many in‑house teams are very competent, but working in the wrong silos is often a blocker. My view is that siloing has increased over the last ten years. There are several reasons. One is that in‑house teams have grown. They grew because more agency work was brought in‑house and the fragmented digital landscape increased the need for specialists. Teams grow and competence increases, but old structures remain, so many functions, brand, creative, SEO, revenue, CRM, channel owners, e‑com, sales, CX, still have too little interaction and insight into each other’s work.
  
  The paradox is that as the in‑house team grows, agency collaborations often grow too. Why? Because each in‑house function wants its mirror image on the agency side. That is how the structure has looked, and still looks. The consequence is that marketing, sales, and CRM departments, including sub‑teams, not only work in silos, they also create their own silo with the agencies they work with. That adds another layer of complexity and a disproportionate share of time goes to communication.
  
  **AI agents can create more and deeper silos**
  
  AI agents risk creating even more silos if the organizational perspective is not brought in early and you are not proactive. Today there is almost always a lack of transparency around which agents exist, how they work together, and how collaboration between humans and agents actually looks. AI implementations often happen at the individual level, or by buying a full system for a specific function, for example SEO AI Employees, with no connection to the whole. It can also be a more enterprise‑adapted implementation in proof‑of‑concept mode that tries to solve an isolated problem.
  
  **So how should you organize for 2026+?**
  
  First, there are differences between industries and verticals, just like today. My view is that verticalization will increase somewhat. That applies both to the specific competence companies benefit from and to how you should organize for maximum effect.
  
  Some principles will repeat across verticals. The drivers come from two directions. One is the opportunities AI creates to make marketing work more efficient. The other is agentic commerce, which will put pressure on companies, and CMOs in particular, to rethink their operating model more drastically.
  
  **1) Start from the maturity of your tech stack and data quality**  
  Organizing ways of working must start from the current state of the stack and data quality. If maturity is low and data quality is weak, you must implement AI agents and organizational change differently, and vice versa. You need two tracks running at once, improving the stack and data quality while implementing AI agents and organizational change. The critical part is that those two tracks stay very tightly aligned.
  
  **2) Remember agentic commerce affects all companies, not just e‑commerce**  
  Agentic commerce means AI agents research, compare, and sometimes purchase on behalf of users and companies. Discovery, research, and sometimes checkout move somewhere else. I believe this drives a few important organizational shifts:
  
  - **Trust and brand ownership across channels.** A cross‑channel function is needed to own brand, PR, reviews, policies, customer promises, product claims, and proof. That means teams that historically worked in silos, PR, brand, social, product, insight, must come together. In a world where small companies can compete with big ones and customers are less loyal, this becomes one of the most important functions to drive revenue, both short and long term.
  - **CRO and the funnel change.** If choices, or at least recommendations, are increasingly made by an AI agent rather than on site or at checkout, then CRO, e‑com, and web teams must own what actually drives a recommendation. If you take it further, you might ask whether the team and skill mix as we know it should be rebuilt from scratch.
  - **CRM and acquisition, break the walls.** What is a new customer and what is a loyal customer when the agent does the research? It is no longer black and white. What historically sat under separate departmental ownership must be seen as one system, not two machines. A new customer may build preference long before the first purchase appears in your data, and a loyal customer can return without ever visiting your site because an agent keeps choosing you based on trust, delivery, price logic, return terms, and product data. That means acquisition, find new, and CRM, nurture existing, can no longer be optimized separately without losing effect. The walls need to come down for real.
  
  **3) Agency and consulting partnerships, the operating model and collaboration need to be challenged**  
  Agencies will also use AI. That does not mean you must use agencies less. But it does mean the collaboration must be redesigned. Otherwise you end up with two parallel systems, you optimize human‑agent flows internally, and the agency optimizes its human‑agent flows externally, without the systems talking to each other. That is a big risk, duplicated definitions, weaker traceability, more friction, and eventually lower speed.
  
  Two things to be clear about when you set up the collaboration:
  
  - **Transparency and compatibility.** Same data sources, same tracking, same definitions, same QA, and a way to connect the agent layer so you do not build two separate systems.
  - **Right value model.** If you get exactly the same delivery and pay exactly the same when production is made more efficient by AI, it is skewed. At the same time, an enormous amount of time goes to communication today, and if the operating model is not right, that time will not shrink, it will grow.
  
  And finally, some functions are more business‑critical than others. In some cases outsourcing a whole function can work, in others it must stay internal. What can be highly relevant to buy in, advanced analysis, measurement, automation, creative edge, deep channel expertise, and the ability to actually see through platforms, hello Google.
  
  **4) Measurement, attribution, and MMM become more important than ever**  
  Yes, you have heard it before. But it is true, for several reasons. AI makes differences between companies smaller. It becomes harder to create sustainable competitive advantage. A tight grip on holistic evaluation, and making it part of the entire operating model, is a competitive advantage that is very hard to build and copy. Another reason is a further fragmentation of the buying journey, where an even larger share of research will happen off site, by agents.
  
  **5) Do not automate everything, optimize for quality**  
  This is not just about content, it is about almost everything. Automation is great, especially as methods like MMM become more accessible, but when everyone can do everything, quality drops fast if no one owns the craft, the bar, and the checkpoints.
  
  Think in three levels:
  
  - **Real experts.** Hard decisions, big money, high risk.
  - **Oversight required.** Automation can run, but someone must review and steer.
  - **Release control.** Low risk, easy to roll back, clear guardrails.`,
      },
    },
  {
      id: 'agentic-commerce-vad-ar',
      categories: ['agentic-commerce', 'organisation'],
      sv: {
        question: 'Vad är agentic commerce och varför påverkar det även SaaS, B2B och appar?',
        answer: `Agentic commerce innebär att AI‑agenter hjälper användare, konsumenter och bolag, att researcha, jämföra och ibland genomföra köp. Det påverkar alla vertikaler, e‑com, B2B och annat. Delar av discovery, research och beslut flyttar bort från traditionella ytor och in i agentgränssnitt och rekommendationslager.
  
  För SaaS och B2B betyder det ofta att shortlisting och riskbedömning blir mer agentstödd, till exempel jämförelser, proof, policies och prissättningslogik. För appar kan det påverka hur användare hittar och väljer alternativ. I alla fall blir att bli vald mer beroende av trust‑signaler och tydlighet, och mindre beroende av att äga hela kundresan i egna kanaler.
  
  Agentic commerce tvingar fram organisatoriska förändringar. Framåt behöver man optimera både för människor och för agenter. Vissa köpresor kommer fortsatt vara helt mänskliga, andra nästan 100 procent agentiska, men det vanligaste blir hybrider där agenten gör research, jämförelser och shortlisting och människan tar sista beslutet, eller tvärtom.
  
  Det gör att brand och trust behöver ägas och byggas mer systematiskt, eftersom rekommendationen i högre grad avgörs av signaler som proof, recensioner, policies, prislogik, leverans och produktdata, inte av att man äger hela kundresan i egna kanaler. Samtidigt suddas gränsen mellan ny och befintlig kund ut. En ny kund kan ha byggt preferens via agentens återkommande rekommendationer långt innan första konverteringen syns, och en befintlig kund kan återkomma utan att besöka era ytor alls.
  
  För att inte optimera fel delar av systemet måste produktdata och policies, brand‑ och trust‑arbetet, CRM och measurement hänga ihop mycket tätare. Annars får man lokala vinster, mer output, fler initiativ, fler dashboards, men sämre helhet. Agenten fattar beslut på en annan logik än teamen mäter och organisationen springer snabbare i fel riktning.`,
      },
      en: {
        question: 'What is agentic commerce and why does it affect SaaS, B2B, and apps too?',
        answer: `Agentic commerce means AI agents help users, consumers and companies, research, compare, and sometimes complete purchases. It affects all verticals, e‑com, B2B, and beyond. Parts of discovery, research, and decision‑making move away from traditional surfaces into agent interfaces and recommendation layers.
  
  For SaaS and B2B this often means shortlisting and risk assessment become more agent‑assisted, for example comparisons, proof, policies, and pricing logic. For apps it can affect how users find and choose alternatives. In all cases, being chosen depends more on trust signals and clarity, and less on owning the entire journey in your own channels.
  
  Agentic commerce forces organisational change. Going forward you need to optimise for both humans and agents. Some buying journeys will remain fully human, others almost 100 percent agentic, but most will be hybrids where the agent does research, comparisons, and shortlisting and the human makes the final call, or the other way around.
  
  That means brand and trust must be owned and built more systematically, because recommendations increasingly depend on signals like proof, reviews, policies, price logic, delivery, and product data, not on owning the entire journey in your own channels. At the same time the line between new and existing customers blurs. A new customer can build preference through repeated agent recommendations long before the first conversion shows up, and an existing customer can return without visiting your surfaces at all.
  
  To avoid optimizing the wrong parts of the system, product data and policies, brand and trust work, CRM, and measurement need to connect much more tightly. Otherwise you get local wins, more output, more initiatives, more dashboards, but a weaker whole. The agent makes decisions based on a different logic than the teams measure, and the organisation runs faster in the wrong direction.`,
      },
    },
  {
      id: 'modern-funnel-ny-lojal',
      categories: ['agentic-commerce', 'organisation'],
      sv: {
        question: 'Hur kommer en kundresa ut när gränsen mellan ny och lojal kund suddas ut?',
        answer: `När agent interfaces och andra externa ytor tar större plats suddas gränserna mellan acquisition och CRM ut, eftersom preferens och beslut byggs utanför era egna kanaler. En ny kund kan ha blivit uppvärmd i veckor av jämförelser, reviews och proof i ett rekommendationslager utan att ni ser mer än ett sista besök. Och en lojal kund kan återkomma utan att gå via sajt eller mail, för att agenten fortsätter välja er baserat på trust‑signaler, leveranshistorik, prislogik, returvillkor, policies och konsekventa kundlöften.
  
  Det här skapar tre typer av köpresor som existerar samtidigt. Helt mänskliga resor där discovery och beslut sker som idag och era kanaler påverkar stort. Nästan helt agentiska resor där användaren delegerar research, urval och ibland köp, och ni vinner eller förlorar innan någon ens ser er storefront. Och viktigast, hybrider där agenten gör grovjobbet, shortlisting, riskbedömning, jämförelser, och människan tar sista beslutet, eller tvärtom.
  
  Konsekvensen är att CRM och acquisition inte längre kan optimeras var för sig utan effektförlust. Man behöver gemensamma mål, en gemensam kundmodell där prospect och customer finns i samma vy, och en experimentmotor som spänner över hela kedjan, inte en som ägs av en kanal. Annars optimerar man lätt det man kan mäta, trafik och sista klick, och missar det som faktiskt avgör valet, varför man blir rekommenderad och vald i första steget.`,
      },
      en: {
        question: 'What does a modern journey look like when the line between new and loyal fades?',
        answer: `When agent interfaces and external surfaces take more space, the journey becomes less linear. A new customer may build preference through comparisons, reviews, and proof long before the first purchase appears in your analytics. A loyal customer can repurchase without visiting your site or opening email because the agent keeps choosing you based on trust, delivery, price logic, and return terms.
  
  That means CRM and acquisition can no longer be optimized separately without losing effect. You need shared goals, a shared customer model, prospect and customer in the same view, and an experiment engine that spans the whole chain rather than being owned by one channel.`,
      },
    },
  {
      id: 'cro-flyttar-fran-storefront',
      categories: ['agentic-commerce'],
      sv: {
        question: 'Hur förändras CRO (Conversion rate optimisation) när research och rekommendation flyttar bort från storefront?',
        answer: `CRO flyttar från att enbart handla om pixelperfekt checkout till att handla om friktion, tydlighet och trust i hela systemet. När fler beslut tas innan användaren ens når storefront blir det viktigare att vinna i policies, produktdata, proof, reviews och konsekventa kundlöften.
  
  Storefront är fortfarande viktig, men blir mindre ensam övertygelseyta. Det gör att CRO behöver samarbeta tätare med brand och trust, CX och ops. Annars blir standardlösningen att köpa mer trafik när konverteringen sjunker, istället för att fixa varför valet faller någon annanstans.
  
  Det finns också ett märkligt antagande i många diskussioner: att agenttrafik automatiskt är mer värdefull för att den har högre CVR. Klart den kan konvertera bättre, agenten kommer ofta först efter att research, jämförelser och filtrering redan är gjorda. Det säger inte nödvändigtvis att upplevelsen på storefront är bättre, eller att bolaget har byggt starkare preferens.
  
  Risken är att man snöar in på fel sak: att optimera för sista klicket och applådera en högre CVR, i stället för att förstå varför man blev vald eller bortvald i shortlistingen. Den riktiga frågan för CRO blir därför mindre hur maxar vi checkout och mer vilka signaler gör att vi rekommenderas och väljs, innan någon ens når vår yta.`,
      },
      en: {
        question: 'How does CRO change when research and recommendations move away from the storefront?',
        answer: `CRO shifts from pixel‑perfect checkout to reducing friction, increasing clarity, and building trust across the system. When more decisions are made before a user reaches the storefront, it becomes more important to win on policies, product data, proof, reviews, and consistent promises.
  
  The storefront is still important, but it is no longer the only persuasion surface. That means CRO must work more closely with brand and trust, CX, and ops. Otherwise the default fix is to buy more traffic when conversion falls instead of fixing why the choice happens elsewhere.`,
      },
    },
  {
      id: 'trust-signaler-agent',
      categories: ['agentic-commerce'],
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
      id: 'silos-effektivitet-marketing',
      categories: ['organisation'],
      sv: {
        question: 'Hur märker man att man har problem med silos på bolaget?',
        answer: `Silos handlar sällan om att folk är specialister och “bara gör sin grej på egen hand”. Det handlar om att ansvar och insyn går sönder mellan saker som egentligen hänger ihop. Ett tidigt tecken är hög aktivitet men en känsla av att vara i “osynk”, många parallella initiativ, mycket pingande, många möten, men ändå en känsla av att jobba mycket med brandsläckning. 
  
  Ett annat tecken är att samma frågor upprepas i flera rum och att beslut tas i semi‑stängda kontexter, till exempel byrå och en intern funktion, utan att andra berörda förstår varför. Då blir organisationen långsam samtidigt som kommunikationen exploderar.
  
  Med AI‑agenters intåg riskerar ett ytterligare lager av silos att byggas. Bolag behöver en överblick över vilka agenter som finns, vad de gör och hur de påverkar produktivitet och kvalitet. Det är tidigt i utvecklingen, men just därför behöver överblicken byggas innan det blir permanent.`,
      },
      en: {
        question: 'How do you notice you have silo problems in the company?',
        answer: `Silos are rarely about people being specialists and “doing their own thing.” They happen when accountability and visibility break between things that actually belong together. An early sign is high activity but a sense of being out of sync, many parallel initiatives, lots of pinging, many meetings, yet a constant feeling of firefighting.
  
  Another sign is that the same questions repeat in multiple rooms and decisions are made in semi‑closed contexts, for example an agency and one internal function, without other stakeholders understanding why. The organization slows down while communication explodes.
  
  With the arrival of AI agents, an additional layer of silos can easily be built. Companies need an overview of which agents exist, what they do, and how they affect productivity and quality. It is early days, which is exactly why the overview must be built before it becomes permanent.`,
      },
    },
  {
      id: 'silos-skadliga-marketing-ecom-crm',
      categories: ['organisation'],
      sv: {
        question: 'Vilka silos är de mest problematiska inom marketing, e‑com och CRM?',
        answer: `De mest destruktiva silosarna är de där ett team påverkar ett annat teams resultat varje dag, men utan att dela mål, mätpunkter och samma “sanning” om kunden. Då optimerar man lokalt och betalar priset centralt.
  
  Tre återkommande exempel:
  
  - **CRM ↔ acquisition.** När acquisition jagar nytt och CRM bearbetar befintligt som två separata maskiner tappar man effekt. I en agentifierad kundresa suddas gränsen mellan ny och lojal ut, och optimering måste ske som ett sammanhängande system.
  - **Brand och creative ↔ performance.** Här blir mätningen ofta fel på grund av silon. När brand, creative och performance körs som separata maskiner får de olika definitioner av vad som räknas som effekt. Resultatet blir att performance får övertaget eftersom det som händer nära klick och konvertering är lättare att attribuera, medan brand och creative hamnar i en egen värld med mjukare mått, längre cykler och svagare feedback‑loopar.
  - **E‑com, ops och policies ↔ marketing.** När leveranslöften, returer, lager, prislogik och kundvillkor inte hänger ihop med det marketing kommunicerar uppstår en missmatch som direkt äter konvertering. Ofta försöker man lösa det med fler avstämningar i stället för att fixa grundorsaken, att kundlöftet inte är ett gemensamt system.`,
      },
      en: {
        question: 'Which silos are most problematic within marketing, e‑com, and CRM?',
        answer: `The most destructive silos are where one team affects another team’s results every day without sharing goals, measurement points, and the same “truth” about the customer. You optimize locally and pay the price centrally.
  
  Three recurring examples:
  
  - **CRM ↔ acquisition.** When acquisition hunts new and CRM nurtures existing as two separate machines, you lose impact. In an agentified journey the line between new and loyal blurs, so optimization must happen as one system.
  - **Brand and creative ↔ performance.** Measurement often becomes wrong because of the silo. When brand, creative, and performance run as separate machines, they end up with different definitions of what counts as impact. The result is that performance gets the upper hand because what happens close to clicks and conversion is easier to attribute, while brand and creative end up in a separate world with softer metrics, longer cycles, and weaker feedback loops.
  - **E‑com, ops, and policies ↔ marketing.** When delivery promises, returns, inventory, price logic, and customer terms do not match what marketing communicates, you get a mismatch that directly eats conversion. People often try to solve it with more check-ins instead of fixing the root cause, that the customer promise is not a shared system.`,
      },
    },
  {
      id: 'minska-handoffs-friktion',
      categories: ['organisation', 'kompetens'],
      sv: {
        question: 'Hur får man färre överlämningar och samtidigt behåller specialistkraften?',
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
      categories: ['organisation', 'measurement'],
      sv: {
        question: 'Hur sätter man och bryter ner gemensamma mål?',
        answer: `Gemensamma mål måste vara kopplade till affären och ha en gemensam mätprincip. Ett fungerande upplägg är att separera:
  
  - **North Star.** Till exempel lönsam tillväxt.
  - **Styrmått.** CAC till LTV, payback, retention per kohort och marginaltänk.
  - **Teamnära mått.** Kanaler, CRM och e‑com optimerar inom ramen.
  
  Det viktiga är att undvika att varje funktion väljer sina favoritmått. Om brand, performance och CRM tittar på olika sanningar kommer organisationen alltid prata förbi varandra. Därför behöver man också bestämma hur utvärdering ska ske, till exempel incrementality, MMM eller test, så att optimeringen inte fastnar i enkel attribution när beslutsvägarna blir mer diffusa.`,
      },
      en: {
        question: 'How do you set and break down shared goals?',
        answer: `Shared goals must be tied to business outcomes and built on a shared measurement principle. A workable setup separates:
  
  - **North Star.** For example profitable growth.
  - **Steering metrics.** CAC to LTV, payback, retention by cohort, and margin thinking.
  - **Team‑level metrics.** Channels, CRM, and e‑com optimize within the framework.
  
  The key is to avoid each function choosing its own favorite metrics. If brand, performance, and CRM look at different truths, the organisation will talk past itself. You also need to define how evaluation happens, incrementality, MMM, or testing, so optimisation does not get stuck in simple attribution when decision paths are more diffuse.`,
      },
    },
  {
      id: 'undvik-spretiga-ai-initiativ',
      categories: ['ai-agenter', 'organisation'],
      sv: {
        question: 'Hur undviker man att marknadsavdelningens AI‑initiativ blir allt för spretiga?',
        answer: `Spret uppstår när varje initiativ har egen data, egna verktyg, egna KPI:er och ingen gemensam uppföljning. Det ser ut som innovation, men det skalar inte.
  
  Tre minimikrav gör stor skillnad:
  
  - **Agent‑inventering.** Vilka agenter finns, vem äger dem och vilka system rör de?
  - **Processkarta.** Var i flödet ligger agenten, vad gör människa vs agent, var sker granskning?
  - **Mätning.** Vad betyder bättre, tid, kvalitet eller affärseffekt, och hur följs det upp?
  
  Det är särskilt viktigt när AI employee‑system köps in per funktion från olika providers utan koppling till varandra eller till resten av teamet. Då blir AI ett nytt silo‑lager.`,
      },
      en: {
        question: 'How do you avoid marketing AI initiatives becoming too fragmented?',
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
        question: 'Hur bygger man en agent governance på bolaget och på marketingavdelningen utan att skapa byråkrati?',
        answer: `Agent‑governance kan kännas trist, men behöver finnas. Tänk att syftet är att sätta trafikreglerna.
  
  En minimal governance innehåller:
  
  - Register över agenter och deras syfte
  - Åtkomstregler med minsta privilegium, särskilt kring CRM och PII
  - Kvalitetskrav och kontrollpunkter
  - Loggning och spårbarhet, vad som gjordes och varför
  
  Utan governance blir det svårt att ta de strategiska beslut som ofta motiverar AI, sänka kostnader, möjliggöra in‑housing och höja kvalitet. Det kräver insikt i vilka agenter som finns och hur de påverkar produktivitet och kvalitet.`,
      },
      en: {
        question: 'How do you build agent governance at the company and in marketing without bureaucracy?',
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
      categories: ['ai-agenter', 'organisation', 'implementering'],
      sv: {
        question: 'Hur mappar man mänskliga tasks vs AI‑tasks?',
        answer: `Att mappa tasks handlar om att skydda kvalitet och minska risk, samtidigt som repetitivt jobb kan skalas. En praktisk modell är tre nivåer:
  
  - **Expertläge.** Svåra beslut, stora pengar, hög risk, till exempel budgetallokering, claims, varumärkesrisk och prissättning.
  - **Övervakning.** Agenten får köra men måste granskas, till exempel kampanjiterationer eller vissa analyssteg.
  - **Släpp kontroll.** Lågrisk, lätt att backa, tydliga guardrails, till exempel sammanställningar och first draft.
  
  Många missar att agentifiering är processdesign. Om man bara lägger en agent på ett steg utan att ändra ansvar, kontrollpunkter och mätning blir output snabbare men inte nödvändigtvis bättre.`,
      },
      en: {
        question: 'How do you map human tasks versus AI tasks?',
        answer: `Mapping tasks is about protecting quality and reducing risk while scaling repetitive work. A practical model has three levels:
  
  - **Expert mode.** Hard decisions, big money, high risk, for example budget allocation, claims, brand risk, and pricing.
  - **Oversight.** The agent can run but must be reviewed, for example campaign iterations or certain analysis steps.
  - **Release control.** Low risk, easy to roll back, clear guardrails, for example summaries and first drafts.
  
  Many forget that agentification is process design. If you just drop an agent into a step without changing ownership, checkpoints, and measurement, output gets faster but not necessarily better.`,
      },
    },
  {
      id: 'tech-stack-krav-ai-effekt',
      categories: ['tech', 'ai-agenter', 'measurement'],
      sv: {
        question: 'Vilken datakvalité måste man ha innan AI‑agenter ger riktig effekt?',
        answer: `Agenter är ingenting om de inte har en stabil grund att jobba på. Det handlar om tracking och instrumentering, produktdata, CRM‑struktur, BI och rapportering, consent och PII samt integrationsförmåga. Utan det riskerar agenter att optimera på fel signaler och organisationen kan inte bedöma om produktivitet och kvalitet faktiskt förbättras.
  
  Det är också här många fastnar. Man implementerar agenter men tappar fokus på att förbättra grunden. Då blir agentifiering ett nytt lager komplexitet istället för en enabler.
  
  En bra tumregel: om teamet inte kan enas om vilka siffror som gäller, eller om datakvalitet varierar mellan funktioner, är det för tidigt att skala agentarbete brett.`,
      },
      en: {
        question: 'What must be in place in tech stack and data before AI agents create real impact?',
        answer: `Agents are nothing without a stable foundation. That means tracking and instrumentation, product data, CRM structure, BI and reporting, consent and PII, and integration capability. Without this, agents optimize on the wrong signals and the organisation cannot judge whether productivity and quality actually improve.
  
  This is where many get stuck. They implement agents but lose focus on improving the foundation. Then agentification becomes a new layer of complexity rather than an enabler.
  
  A good rule of thumb: if the team cannot agree on which numbers are correct, or if data quality varies across functions, it is too early to scale agent work broadly.`,
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
        answer: `AI lets more people produce and analyse more, faster. But it also increases the risk of a patchwork of tools, prompts, and workflows, especially when adoption happens at the individual level or via POCs, and different functions buy different AI employee systems.
  
  The result is often messy data discipline and parallel truths. The fix is standardization, approved tools, shared data flows, clear ways of working, and traceability so agent work can be reviewed.
  
  The core point is simple. Agents are not the stack. They need a stack that works.`,
      },
    },
  {
      id: 'experimentmotor-kanalneutralt',
      categories: ['measurement', 'tech'],
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
      categories: ['kompetens', 'organisation', 'measurement'],
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
        answer: `MMM and incrementality require mandate. They affect budget, priorities, and which truths the organisation steers by. That is why it cannot be a side task picked up when things burn.
  
  The owner needs to be able to:
  
  - Set method and standards
  - Educate stakeholders on what matters
  - Hold the source of truth together
  - Drive insights into decisions, not just reports
  
  In a world where more people can run an MMM in a sheet, ownership becomes even more important, otherwise quality drops and the organisation makes decisions on flawed models.`,
      },
    },
  {
      id: 'geo-tester-parallella',
      categories: ['tech', 'measurement'],
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
        answer: `The biggest hurdle is rarely statistics. It is that the organisation changes too many things at the same time. Geo tests require discipline, a clear intervention, stability in other efforts, and a comparable control group.
  
  To make it work you need:
  
  - A decision forum that can freeze certain changes during the test
  - Clear rules for agencies and internal teams on what can be optimized
  - Consistent data collection and shared definitions
  
  As attribution weakens, geo tests become a robust way to build decision confidence, but only if the organisation respects the test.`,
      },
    },
  {
      id: 'byra-samarbete-minska-kommunikation',
      categories: ['byraer', 'organisation'],
      sv: {
        question: 'Vad ska man tänka på i byråsamarbeten framåt?',
        answer: `Kommunikation är kritiskt, men problemet är när den blir ett substitut för struktur. De senaste åren har många inhouse‑team blivit större och mer specialiserade, och samtidigt har byrålandskapet vuxit i samma riktning. Resultatet blir ofta en spegelmodell, varje intern funktion skaffar sin egen byråmotsvarighet. Det låter tryggt, men tenderar att skapa dubbelarbete, fler överlämningar och ett enormt flöde av frågor. När kranarna är öppna i Slack och beslut tas i informella rum får ni mer brus än transparens, och silos förstärks både internt och mellan er och byrån.
  
  Framåt blir det ännu viktigare att samarbetet är designat, inte bara aktivt. AI och mer agentbaserade arbetssätt ökar output och tempo, men utan en operating model får ni lätt två parallella system, ni optimerar era människa‑agent‑flöden internt och byrån optimerar sina externt, med olika definitioner, olika dashboards och olika sanningar. Det är då friktionen exploderar.
  
  En grundprincip är därför att ni måste vara extremt tydliga med varför ni köper byrå och vad ni faktiskt köper. Det är inte fel att leja ut en kanal som helhet, men det kräver att vissa saker finns på plats. Annars köper ni i praktiken bara aktivitet och kommunikation. I praktiken brukar två modeller fungera, på olika sätt:
  
  - **Köp spets, inte volym.** Ofta är den bästa affären att ni tar in byrå för det som är svårt att bygga snabbt inhouse, djup plattformskompetens, avancerad analys, experimentdesign, setup och struktur, kreativ höjd eller förmågan att ifrågasätta vendors best practice och hitta okonventionella vägar. Då kan ett mindre internt team driva det löpande medan byrån blir er edge och kvalitetshöjare.
  - **Lej ut hel funktion, men bygg minimalt inhouse först.** Att outsourca en hel kanal kan fungera väldigt bra om ni har mål, mätlogik, beslutskedja och data på plats, och om byrån är effektiv nog att driva utan att allt blir en fråga tillbaka till er. Ett bra sätt att undvika felköp är att ni först bygger en minimal intern bas, någon som kan sätta riktning, förstå tradeoffs, granska output och hålla ihop helheten. Utan den minsta interna motorn blir byrån lätt en extern silo som producerar mycket, men där lärandet inte landar hos er.
  
  Oavsett modell är det här det som brukar minska brus och öka effekt:
  
  - **Sätt mål kopplade till affären och en nedbrytning som alla accepterar.** Byrån ska inte leverera aktivitet utan bidra till utfall. Ni behöver översätta affärsmål till ett fåtal styrande metrics per område och vara tydliga med vad som är sekundärt.
  - **Bestäm gemensam mätmetod och source of truth.** Ni behöver vara överens om vad som gäller, MMM, incrementality eller test, eller en kombination, och vilka siffror som räknas. Annars blir varje möte en diskussion om vilken dashboard som har rätt.
  - **Bygg beslutsforum med disciplin.** Var fattas beslut, vilka behöver vara med, vad dokumenteras och vad är default när underlag saknas. Öppen Slack‑access utan beslutskedja skapar ofta mer rework, inte mer tempo.
  - **Säkerställ plattformskompetens och rätt incitament.** En av de viktigaste anledningarna att ni använder en bra byrå är deras förmåga att gå bortom vendors rekommendationer. Den kompetensen, att förstå plattformar på djupet, se genvägar, ifrågasätta best practice och bygga en optimeringsmotor som gynnar er, blir ännu viktigare när allt paketeras som klicka här eller AI‑employees.
  - **Designa beställarorganisationen.** Undvik 1‑till‑1‑spegeln där varje intern specialist äger 1–3 kanaler och har byråer för allt annat. Det suger kommunikationstimmar, skapar överlämningar och gör att energin går åt till synk i stället för effekt. Ni får bättre utväxling när beställarrollen har större scope, äger utfall över flera kanaler, och ni kombinerar inhouse och byrå med tydliga gränssnitt.
  - **Sätt guardrails och kvalitetskontroller i flödet.** Med mer automation behöver ni tydliga constraints, budgetregler, brand‑riktlinjer, approvals, QA och stop conditions. Annars får ni snabbare output men mer varumärkesrisk och mer koordinering när saker måste backas.
  
  Dashboards kan hjälpa, men de löser inte grundproblemet om ni och byrån ändå tittar på olika mått och har olika definitioner. Struktur gör att kommunikationen flyttar från en konstant kran av frågor till färre, skarpare diskussioner och beslut, och att byrån faktiskt blir den hävstång den är tänkt att vara.`,
      },
      en: {
        question: 'What should you consider in agency collaborations going forward?',
        answer: `Communication is critical, but the problem is when it replaces structure. In recent years many in‑house teams have grown and specialized, and the agency landscape has grown in the same direction. The result is often a mirror model where each internal function gets its own agency counterpart. It feels safe, but it tends to create duplicate work, more handoffs, and a huge flow of questions. When the Slack pipes are open and decisions happen in informal rooms, you get more noise than transparency, and silos deepen both internally and between you and the agency.
  
  Going forward it becomes even more important that the collaboration is designed, not just active. AI and more agent‑based ways of working increase output and tempo, but without an operating model you easily end up with two parallel systems, you optimize your human‑agent flows internally and the agency optimizes theirs externally, with different definitions, different dashboards, and different truths. That is when friction explodes.
  
  A core principle is that you must be extremely clear on why you are buying agency and what you are actually buying. It is not wrong to outsource a channel as a whole, but it requires certain things to be in place. Otherwise you are effectively buying activity and communication. In practice two models tend to work, in different ways:
  
  - **Buy expertise, not volume.** Often the best deal is bringing in an agency for what is hard to build quickly in‑house, deep platform expertise, advanced analysis, experiment design, setup and structure, creative edge, or the ability to challenge a vendor’s best practice and find unconventional paths. Then a smaller internal team can run the day‑to‑day while the agency becomes your edge and quality boost.
  - **Outsource a full function, but build minimal in‑house first.** Outsourcing a full channel can work very well if you have goals, measurement logic, decision paths, and data in place, and if the agency is efficient enough to run without everything becoming a question back to you. A good way to avoid a bad buy is to first build a minimal internal base, someone who can set direction, understand trade‑offs, review output, and hold the whole together. Without that minimal internal engine, the agency easily becomes an external silo that produces a lot but where learning never lands with you.
  
  Regardless of model, these are the things that usually reduce noise and increase impact:
  
  - **Set goals tied to the business with a breakdown everyone accepts.** The agency should not deliver activity but contribute to outcomes. Translate business goals into a few steering metrics per area and be clear on what is secondary.
  - **Agree on a measurement method and a source of truth.** You need to align on what applies, MMM, incrementality or testing, or a combination, and which numbers count. Otherwise every meeting becomes a debate about which dashboard is right.
  - **Build decision forums with discipline.** Where decisions are made, who must be present, what gets documented, and what is the default when evidence is missing. Open Slack access without a decision chain often creates more rework, not more speed.
  - **Ensure platform expertise and the right incentives.** One of the main reasons to use a strong agency is their ability to go beyond vendor recommendations. That competence, understanding platforms deeply, seeing shortcuts, challenging best practice, and building an optimization engine that benefits you, becomes even more important when everything is packaged as click here or AI employees.
  - **Design the ordering organization.** Avoid the one‑to‑one mirror where each internal specialist owns one to three channels and has agencies for everything else. It burns communication hours, creates handoffs, and shifts energy from impact to sync. You get better leverage when the buyer role has broader scope, owns outcomes across multiple channels, and you combine in‑house and agency with clear interfaces.
  - **Set guardrails and quality controls in the flow.** With more automation you need clear constraints, budget rules, brand guidelines, approvals, QA, and stop conditions. Otherwise you get faster output but higher brand risk and more coordination when things need to be rolled back.
  
  Dashboards can help, but they do not solve the root problem if you and the agency still look at different metrics and hold different definitions. Structure shifts communication from a constant stream of questions to fewer, sharper discussions and decisions, and makes the agency the leverage it is meant to be.`,
      },
    },
  {
      id: 'leja-ut-kanal-nar',
      categories: ['byraer', 'organisation'],
      sv: {
        question: 'När fungerar det att leja ut en operations av en kanal som helhet till en byrå, och när fungerar det inte?',
        answer: `Det fungerar allra bäst när ett bolag har satt mål som har tydlig koppling till affären, och även en relativt hög mognadsgrad när det kommer till hur man kan bryta ner affärsmålen till metrics som respektive avdelning bör jobba efter, men saknar spetskompetens inom en eller flera kanaler eller discipliner.
  
  En andra förutsättning är att man förstår vilken kompetens man faktiskt köper. I digital marknadsföring har en absolut kritisk egenskap hos både bra byråer och starka inhouse‑team alltid varit djup plattformskompetens och analytisk höjd, förmågan att välja okonventionella vägar, ifrågasätta en vendors best practice och bygga en setup och optimeringsmotor som 100 procent gynnar bolaget och 0 procent gynnar vendorn. Följer man bara plattformens rekommendationer blir det ofta mer som 50/50. Det är extra viktigt nu när mycket paketeras som bara klicka här eller när man köper AI‑employees byggda av folk utan djup produktkompetens i ad platforms, eller med incitament som inte är helt rena. En byrå du verkligen litar på är i praktiken ett sätt att köpa in just den här svårersatta kompetensen, utan att behöva bygga och underhålla den internt samtidigt som du har tusen andra saker att hålla koll på.
  
  Men även med rätt byrå faller det om beställarorganisationen är fel designad. En 1–1‑spegel där varje intern specialist ansvarar för 1–3 kanaler och har byråer för resten är i praktiken en no‑go. Det suger kommunikationstimmar, som är dyra, skapar överlämningar och gör att mycket av energin går åt till synk i stället för effekt. Antingen behöver beställarrollen ha större scope, äga utfall och helhet, inte bara en kanal, eller så behöver man organisera så att teamet gör vissa kanaler helt inhouse och lejer ut andra, till exempel att samma person eller team driver två kanaler själva och lägger ut två andra, eller att beställningen ligger högre upp, till exempel under en growth‑ eller revenue‑ägare, med tydliga guardrails och en gemensam mätlogik.`,
      },
      en: {
        question: 'When does it make sense to outsource channel operations to an agency, and when does it not work?',
        answer: `It works best when a company has set goals tightly linked to the business and has a relatively high maturity in breaking those goals down into metrics each function should work against, but lacks deep expertise in one or more channels or disciplines.
  
  A second requirement is understanding what competence you are actually buying. In digital marketing, a critical trait of both strong agencies and strong in‑house teams has always been deep platform expertise and analytical depth, the ability to choose unconventional paths, challenge a vendor’s best practice, and build a setup and optimization engine that is 100 percent aligned with the company and 0 percent with the vendor. If you only follow platform recommendations you often end up closer to 50/50. This matters even more now when much is packaged as just click here or when you buy AI employees built by people without deep product expertise in ad platforms, or with incentives that are not clean. A trusted agency is, in practice, a way to buy that hard‑to‑replace competence without having to build and maintain it internally while you have a thousand other things to manage.
  
  But even with the right agency it fails if the ordering organization is designed wrong. A 1‑to‑1 mirror where each internal specialist owns one to three channels and has agencies for the rest is, in practice, a no‑go. It burns expensive communication hours, creates handoffs, and shifts energy from impact to sync. Either the buyer role needs broader scope, owning outcomes and the whole, not just a channel, or you organize so the team runs some channels fully in‑house and outsources others, for example the same person or team runs two channels and outsources two others, or the buying sits higher up, for example under a growth or revenue owner, with clear guardrails and shared measurement logic.`,
      },
    },
  {
      id: 'byraer-viktigast-behalla',
      categories: ['byraer'],
      sv: {
        question: 'Vilka byråer blir viktigast att samarbeta med 2026 och framåt?',
        answer: `De viktigaste byråerna är de som bidrar med metod, transparens och kvalitetsdisciplin, inte bara output. När alla kan producera mer med AI blir det runt omkring som avgör, erfarenhet, kritisk förmåga mot plattformar och förmåga att jobba mot gemensamma mål och gemensam mätning.
  
  Byråer som är AI‑first kan ha fördel i tempo, men tempo utan struktur riskerar att skapa spretig datadisciplin och fler silos. Bra byråer hjälper organisationen att få överblick, minska brus och fatta bättre beslut.`,
      },
      en: {
        question: 'Which agencies become most important to work with in 2026 and beyond?',
        answer: `The most important agencies are those that bring method, transparency, and quality discipline, not just output. When everyone can produce more with AI, what matters is the surrounding craft, experience, critical ability toward platforms, and the ability to work against shared goals and shared measurement.
  
  AI‑first agencies may have speed advantages, but speed without structure risks messy data discipline and more silos. Good agencies help the organisation gain overview, reduce noise, and make better decisions.`,
      },
    },
  {
      id: 'externa-profiler-2026',
      categories: ['byraer', 'kompetens'],
      sv: {
        question: 'Vilka externa profiler och/eller byråer ska man leta efter 2026 och framåt?',
        answer: `2026+ handlar det mindre om format, byrå vs frilans, och mer om att ni köper in riktig spets som flyttar nålen. Marknaden kommer vara full av operatörer som kan producera mycket med AI, och full av vendors som säljer in samma playbook till alla. Det ni ska leta efter är därför profiler och byråer som antingen har verklig spets i en kritisk funktion eller har djup kanalkompetens och ryggrad nog att ifrågasätta plattformarnas standardlösningar.
  
  Konkret, leta efter externa som har minst en av de här tydliga superkrafterna:
  
  - **Ifrågasättande och djup kanalkompetens.** Personer som kan plattformen på detaljnivå och som systematiskt kan bygga en optimeringsmotor som gynnar er, inte vendorn. De kan motivera avsteg från best practice, ser okonventionella vägar och förstår incitamenten bakom rekommendationer och automatisering.
  - **Measurement och utvärdering som går att styra på.** Spets inom incrementality, experimentdesign och MMM‑tänk, och förmågan att översätta det till beslut och prioriteringar. Ni vill ha någon som kan skapa klarhet när köpresor blir mer hybrida och agentstödda, och när delar av discovery och research flyttar utanför era egna ytor.
  - **Instrumentering och dataplattformsförståelse.** Profiler som kan få spårbarhet att fungera i praktiken, event och taxonomi, koppling till intäktsdata, kundmodell och en gemensam source of truth. Det är ofta här de största effektläckagen finns.
  - **Creative systems i skala.** Inte bara någon som gör bra creatives, utan någon som kan bygga ett kreativt produktionssystem, modularitet, versionering, testdesign, guardrails, brand, claims och legal, och processer som håller kvalitet när ni ökar volym och tempo.
  - **Agent‑ops och governance.** Externa som kan drifta agentflöden med kontroll, logging av agent‑actions, QA‑gates, approvals, budgetregler och stop conditions. Annars får ni snabbare output men mer friktion och större varumärkesrisk.
  
  Och en avgörande sak till, välj externa som kan jobba inne i er operating model. De ska kunna anpassa sig till era mål, er mätlogik och era beslut, inte bygga ett parallellt system från sidan. Annars får ni en extern silo, mer kommunikation och mindre faktisk effekt.`,
      },
      en: {
        question: 'Which external profiles and or agencies should you look for in 2026 and beyond?',
        answer: `The value rarely lies in someone who knows a single channel. The value lies in capabilities that create leverage and order:
  
  - Measurement, attribution, MMM, and experiment design
  - Instrumentation and data platform understanding
  - Creative systems, how creative work is produced at scale with quality
  - Agent ops, how agent flows are run, quality‑assured, and logged
  
  What matters is that external resources can work inside the organisation’s real processes, not just deliver output from the side. Otherwise you build an external silo and communication grows.`,
      },
    },
  {
      id: 'roller-viktigare-ai',
      categories: ['kompetens', 'ai-agenter'],
      sv: {
        question: 'Vilka roller ökar i betydelse när AI tar över mer av det repetitiva jobbet?',
        answer: `När AI tar över mer av det repetitiva jobbet blir det inte färre roller som behövs utan andra roller blir mer avgörande, för att få kvalitet, lärande och kontroll i systemet, inte bara mer output.
  
  - **Rätt typ av generalist och projektledare.** Hands‑on, strukturerade och affärsförstående personer som kan koordinera mellan in‑house, byråer, agenter och tech vendors. Behovet av processdesign ökar när agentlandskapet växer, ägarskap, beslutskedja, QA‑gates, budgetregler, dokumentation och spårbarhet. Utan det får man ofta snabbare leverans men mer friktion, rework och fler misstag.
  - **Den kreativa analytiska prototyparen.** En growth‑profil med kreativ höjd men också teknisk och analytisk förmåga, gärna med measurement‑insikt och plattformsförståelse. Den här personen kan snabbt testa hypoteser, bygga prototyper, sätta upp experiment och skapa lärloopar, och samtidigt hålla kvalitet i det kreativa. Kreativ höjd blir strategiskt viktigare när många kan producera okej i volym, edge kommer från idé, craft och en tydlig ribba.
  - **Plattformsskeptikern med djup kanalkompetens.** Rollen många underskattar, någon som kan kanaler och plattformar på riktigt och som aktivt kan utmana vendors best practice, förstå incitamenten bakom rekommendationer och bygga en optimeringsmotor som gynnar bolaget, inte plattformen. När fler kör autopilot eller köper AI‑employees blir den här kompetensen en differentierare.
  - **Measurement‑ och experimentledaren.** Någon som kan sätta en utvärderingsmetod man faktiskt kan styra efter, incrementality, experimentdesign, MMM‑tänk, metoddisciplin och source of truth. Det blir extra viktigt när resor blir mer hybrida och agentstödda och när signaler från fler ytor ska knytas till affär.
  - **Enablement, utbildning, manuellt hantverk och felsökning.** Här är poängen många missar. När AI hjälper mycket är det lätt att man delegerar bort lärandet. Det är exakt den risken som lyfts i [artikeln du länkade](https://arxiv.org/pdf/2601.20245), när man använder AI som en genväg för att få fram svar kan man bli snabbare på att producera output, men sämre på att bygga konceptuell förståelse, läsa och kritiskt granska och framför allt felsöka när något går fel. Översatt till marknad, growth och ops, om man låter AI sköta allt tappar man efter ett tag förmågan att avgöra om ett förslag är rimligt, hitta roten till en avvikelse i data eller performance, förstå vad som faktiskt orsakade en effekt, och bygga robusta guardrails och QA‑kontroller. Därför blir utbildning och arbetssätt centralt, man behöver skapa en kultur där man övar manuellt ibland, felsöker utan autopilot, och använder AI på ett sätt som håller människan kognitivt engagerad, till exempel be AI förklara tradeoffs, motivera beslut, visa alternativ och tvinga fram resonemang, inte bara leverera ett svar.
  
  Varför samspelet mellan generalisten och prototyparen är avgörande. Prototyparen testar och formar snabbt, projektledaren driver igenom, skapar uthållighet och ser till att det faktiskt blir gjort med rätt process, QA och mätning. Utan den ena får man idéer utan adoption. Utan den andra får man produktion utan edge och ofta utan lärande.`,
      },
      en: {
        question: 'Which roles grow in importance as AI takes over more repetitive work?',
        answer: `As AI takes over more repetitive work, it does not mean fewer roles are needed. Different roles become more decisive to deliver quality, learning, and control in the system, not just more output.
  
  - **The right kind of generalist and project lead.** Hands‑on, structured, and business‑savvy people who can coordinate across in‑house teams, agencies, agents, and tech vendors. The need for process design grows as the agent landscape expands, ownership, decision chains, QA gates, budget rules, documentation, and traceability. Without that you often get faster delivery but more friction, rework, and mistakes.
  - **The creative analytical prototyper.** A growth profile with creative range and technical and analytical ability, ideally with measurement insight and platform understanding. This person can rapidly test hypotheses, build prototypes, set up experiments, and create learning loops while keeping creative quality. Creative edge becomes strategically more important when many can produce okay at scale. The advantage comes from ideas, craft, and a clear bar.
  - **The platform skeptic with deep channel expertise.** The role many underestimate, someone who truly understands channels and platforms and actively challenges vendor best practice, understands incentives behind recommendations, and builds an optimization engine that benefits the company, not the platform. As more people run on autopilot or buy AI employees, this competence becomes a differentiator.
  - **The measurement and experiment lead.** Someone who can establish an evaluation method you can actually steer by, incrementality, experiment design, MMM thinking, method discipline, and source of truth. This becomes critical as journeys grow more hybrid and agent‑supported and signals from more surfaces must connect to business outcomes.
  - **Enablement, training, manual craft, and debugging.** This is the point many miss. When AI helps a lot it is easy to delegate away learning. That is exactly the risk highlighted in [the paper you linked](https://arxiv.org/pdf/2601.20245), using AI as a shortcut can make you faster at output but weaker at building conceptual understanding, reading and critically reviewing, and especially debugging when something goes wrong. Translated to marketing, growth, and ops, if AI does everything you eventually lose the ability to judge whether a suggestion is reasonable, find the root cause of a data or performance anomaly, understand what actually caused an effect, and build robust guardrails and QA checks. That is why training and ways of working are central. You need a culture where people practice manually at times, debug without autopilot, and use AI in a way that keeps humans cognitively engaged, for example asking AI to explain tradeoffs, justify decisions, show alternatives, and force reasoning, not just deliver an answer.
  
  Why the interplay between the generalist and the prototyper is decisive. The prototyper tests and shapes quickly, the project lead drives it through, builds endurance, and ensures it gets done with the right process, QA, and measurement. Without one you get ideas without adoption. Without the other you get production without edge and often without learning.`,
      },
    },
  {
      id: 'leda-team-manniskor-agenter',
      categories: ['kompetens', 'ai-agenter'],
      sv: {
        question: 'Hur leder man ett team med både människor och AI‑agenter på bästa sätt?',
        answer: `Ledarskapet behöver kombinera tydlig process med tydlig kvalitetsribba, men också undvika att processen blir ett självändamål. Om man bara processar riskerar man att få en organisation som är effektiv på papperet men som tappar tempo, kreativitet och motivation. Och om man bara kör får man snabb output men låg kvalitet, oklart ansvar och svagt lärande.
  
  **1) Designa arbetet som ett system, inte som en Slack‑kanal**  
  För agenter krävs definierade uppdrag, begränsningar, loggning och uppföljning. För människor krävs tydliga mål, gemensam mätning och minskad friktion mellan funktioner. Annars springer alla snabbt men åt olika håll, med olika dashboards och olika sanningar.
  
  Samtidigt måste processen vara minimalt tillräcklig. Den ska skapa spårbarhet, beslutskraft och kvalitet, inte fylla kalendern. En bra tumregel är att varje nytt steg i processen ska betala sig i minst en av tre valutor, mindre risk, mer lärande eller högre kvalitet.
  
  **2) Optimera för lärande, inte bara output**  
  När AI gör mer av det repetitiva är det lätt att man delegerar bort lärandet och får snabbt men grunt. Då tappar teamet förmågan att granska, felsöka och förstå varför något fungerar. Det blir extra farligt när kundresor blir mer hybrida och agentstödda och orsak och verkan blir svårare att läsa av.
  
  Praktiskt, bygg in lärande i sättet man jobbar:
  
  - Krav på kort why och alternativ, inte bara leverans
  - Regelbundna debug‑sessioner där man felsöker manuellt
  - Post‑mortems som faktiskt leder till uppdaterade guardrails och bättre prompts och processer
  - En gemensam experimentmotor där insikter återförs till systemet, inte stannar i huvudet på en person
  
  **3) Sätt en kvalitetsribba som inte kan automatiseras bort**  
  Kvalitet kan hanteras i tre nivåer, men komplettera med ett tydligt quality owner‑tänk:
  
  - Var experter behövs, hög risk, stora pengar, varumärke, policy och claims, komplex strategi. Här ska människor äga beslut och ribba.
  - Var övervakning krävs, agenten kör men någon granskar stickprov, följer upp avvikelser och uppdaterar regler.
  - Var kontroll kan släppas, lågrisk, lätt att backa, tydliga guardrails.
  
  Det som avgör om AI ger effekt är ofta allt runt omkring, ansvar, beslutskriterier, granskning, loggning och att lärande återförs till processen.
  
  **4) Skydda motivationen, gör inte människor till QA‑maskiner**  
  En vanlig fälla är att AI gör allt roligt och människor blir kvar med att godkänna, rätta och jaga avvikelser. Det blir snabbt tråkigt och selekterar för en smal typ av person, den som gillar kontroll, rutin och administration.
  
  För att undvika det behöver man designa roller så att människor får:
  
  - Tydligt ägarskap för utfall, inte bara granskning
  - Utrymme för kreativitet, prototypande och problemlösning
  - Möjlighet att bygga kompetens, inte bara drifta
  
  Bra upplägg i praktiken är ofta en kombination av prototypare som formar nya vägar och operativ generalist som driver igenom och skapar uthållighet, med agenten som accelerator, inte som ersättare av meningsfullt arbete.
  
  **5) Var transparent kring oro och jobbrisk, och gör en plan**  
  Det finns en reell risk att vissa uppgifter och ibland hela roller minskar när agentflöden blir bättre. Om man låtsas som att det inte finns skapar man osäkerhet och passivitet.
  
  Det som fungerar bättre är:
  
  - Tydlighet kring vilka delar som ska automatiseras och varför
  - En plan för upskilling och rollskiften, till exempel mot processdesign, measurement, plattformskompetens, creative systems och agent‑ops
  - Tydliga förväntningar på hur man använder AI för att bli bättre, inte bara snabbare
  
  **Summan**  
  Bästa sättet att leda ett hybridteam är att göra tre saker samtidigt, bygga minimalt tillräcklig process som skapar spårbarhet och beslutskraft, bygga in lärande så att kompetensen inte eroderar, och designa arbetet så att människor inte reduceras till QA utan får äga utfall, kreativitet och utveckling.`,
      },
      en: {
        question: 'How do you lead a team with both people and AI agents in the best way?',
        answer: `Leadership must combine a clear process with a clear quality bar, but also avoid making process an end in itself. If you only process you risk an organisation that is efficient on paper but loses tempo, creativity, and motivation. If you only run you get fast output but low quality, unclear ownership, and weak learning.
  
  **1) Design the work as a system, not a Slack channel**  
  Agents need defined tasks, constraints, logging, and follow‑up. People need clear goals, shared measurement, and reduced friction between functions. Otherwise everyone runs fast in different directions, with different dashboards and different truths.
  
  At the same time the process must be minimally sufficient. It should create traceability, decision power, and quality, not fill calendars. A good rule of thumb is that every new process step should pay for itself in at least one of three currencies, lower risk, more learning, or higher quality.
  
  **2) Optimize for learning, not just output**  
  When AI does more of the repetitive work it is easy to delegate away learning and get fast but shallow. Then the team loses the ability to review, debug, and understand why something works. That becomes dangerous as journeys get more hybrid and agent‑supported and cause and effect become harder to read.
  
  Practically, build learning into how you work:
  
  - Require a short why and alternatives, not just delivery
  - Regular debug sessions where you troubleshoot manually
  - Post‑mortems that actually update guardrails and improve prompts and processes
  - A shared experiment engine where insights flow back into the system, not just into one person’s head
  
  **3) Set a quality bar that cannot be automated away**  
  Quality can be handled at three levels, but add a clear quality‑owner mindset:
  
  - Where experts are needed, high risk, big money, brand, policy and claims, complex strategy. Humans should own the decision and the bar.
  - Where oversight is required, the agent runs but someone reviews samples, monitors deviations, and updates rules.
  - Where control can be released, low risk, easy to roll back, clear guardrails.
  
  What determines whether AI delivers is often everything around the work, ownership, decision criteria, review, logging, and feeding learning back into the process.
  
  **4) Protect motivation, do not turn people into QA machines**  
  A common trap is that AI does all the fun work and people are left to approve, correct, and chase deviations. It gets boring fast and selects for a narrow profile, people who like control, routine, and administration.
  
  To avoid that, design roles so people get:
  
  - Clear ownership of outcomes, not just review
  - Room for creativity, prototyping, and problem‑solving
  - Opportunities to build competence, not just operate
  
  In practice a strong setup is often a mix of prototyper, shaping new paths, and operational generalist, driving through and building endurance, with the agent as an accelerator, not a replacement for meaningful work.
  
  **5) Be transparent about job risk and make a plan**  
  There is a real risk that some tasks and sometimes whole roles shrink as agent flows improve. Pretending it does not exist creates uncertainty and passivity.
  
  What works better is:
  
  - Clarity on what will be automated and why
  - A plan for upskilling and role shifts, for example into process design, measurement, platform competence, creative systems, and agent ops
  - Clear expectations for using AI to get better, not just faster
  
  **Summary**  
  The best way to lead a hybrid team is to do three things at once, build a minimally sufficient process that creates traceability and decision power, build in learning so competence does not erode, and design the work so people are not reduced to QA but own outcomes, creativity, and growth.`,
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
    }
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
      { '@type': 'Organisation', name: 'Precis' },
      { '@type': 'Organisation', name: 'Ving/Thomas Cook' },
      { '@type': 'Organisation', name: 'Tikkurila' },
    ],
    founder: [
      { '@type': 'Organisation', name: 'Alvie by Precis' },
      { '@type': 'Organisation', name: 'Wilgot' },
    ],
  }
}
