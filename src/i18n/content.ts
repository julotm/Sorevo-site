export const langs = ['fr', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];
export const PRICE = '[250 €]';
export const EMAIL = '[contact@sorevo.com]';

type C = {
  htmlLang: string; title: string; desc: string;
  nav: { offer: string; method: string; pilot: string; faq: string; cta: string };
  hero: { label: string; h1: string; sub: string; cta1: string; cta2: string; disclaimer: string };
  mock: { q: string; a: string; b: string; you: string; note: string };
  problem: { h2: string; items: { t: string; d: string }[] };
  method: { h2: string; steps: { t: string; d: string }[] };
  offer: { h2: string; intro: string; price: string; priceNote: string; includes: string[]; notH: string; not: string[]; clientH: string; client: string[]; cta: string };
  pilot: { h2: string; d: string; give: string[]; get: string[]; cta: string };
  faq: { h2: string; items: { q: string; a: string }[] };
  form: { h2: string; d: string; name: string; email: string; company: string; website: string; service: string; servicePh: string; consent: string; submit: string; sending: string; ok: string; err: string };
  footer: { legal: string; tag: string; rights: string };
  legal: { h1: string; blocks: { t: string; d: string }[] };
};

export const content: Record<Lang, C> = {
  fr: {
    htmlLang: 'fr', title: 'Sorevo · Faites citer votre entreprise par les IA à Barcelone',
    desc: "Sorevo aide les PME de Barcelone à apparaître dans les réponses de ChatGPT, Gemini, Claude et Perplexity : audit, contenus, données structurées, re-test à 30 jours.",
    nav: { offer: 'Offre', method: 'Méthode', pilot: 'Programme pilote', faq: 'FAQ', cta: 'Audit gratuit' },
    hero: { label: 'VISIBILITÉ DANS LES IA · BARCELONE', h1: 'Que les IA citent votre entreprise.', sub: "Vos futurs clients demandent déjà à ChatGPT, Gemini, Claude ou Perplexity qui choisir. Nous mesurons où vous en êtes, corrigeons ce qui vous rend invisible, puis vérifions le résultat 30 jours plus tard.", cta1: 'Recevoir mon mini-audit gratuit', cta2: "Voir l'offre", disclaimer: 'Aucune garantie de résultat : les réponses des IA varient. Nous mesurons avant et après.' },
    mock: { q: 'Quelle entreprise me recommandes-tu pour [votre service] à Barcelone ?', a: 'Concurrent A', b: 'Concurrent B', you: '[Votre entreprise] cité', note: 'Exemple illustratif, pas un résultat réel.' },
    problem: { h2: 'Pourquoi vous êtes peut-être invisible', items: [
      { t: 'Un site flou pour une machine', d: "Les IA citent ce qu'elles comprennent vite : une offre claire, des pages précises, des réponses directes. Un site vague est ignoré." },
      { t: 'Aucune donnée structurée', d: "Sans balisage schema.org, votre entreprise, vos services et votre zone d'activité restent ambigus." },
      { t: 'Peu de sources tierces', d: "Les IA recoupent plusieurs sources. Des fiches et mentions cohérentes et légitimes renforcent votre crédibilité." } ] },
    method: { h2: 'Notre méthode en 3 étapes', steps: [
      { t: '1 · Audit', d: "Nous posons une série de questions réalistes de vos clients à ChatGPT, Gemini, Claude et Perplexity, et notons si vous êtes cité, par qui, et avec quelles sources." },
      { t: '2 · Actions', d: "Réécriture des pages clés, FAQ, données structurées, cohérence de vos fiches en ligne. Un plan priorisé, des livrables prêts à publier." },
      { t: '3 · Re-test à 30 jours', d: "Nous refaisons exactement les mêmes tests et vous remettons un comparatif avant/après, avec ce qui a bougé et ce qui reste à faire." } ] },
    offer: { h2: "Une seule offre, tout est écrit", intro: "Pas de menu à rallonge. Un forfait, un périmètre clair, un livrable à la fin.", price: PRICE, priceNote: "Prix de lancement, paiement unique. L'audit de départ est gratuit.", includes: [
      "Audit de visibilité initial : [30] questions testées sur ChatGPT, Gemini, Claude et Perplexity",
      "Rapport de départ : êtes-vous cité, par qui, avec quelles sources",
      "Plan d'actions priorisé",
      "Rédaction de [5] contenus clés (page service, à propos, FAQ…) prêts à publier",
      "Données structurées schema.org prêtes à intégrer",
      "Liste de fiches et annuaires légitimes pertinents pour votre activité",
      "Re-test à 30 jours et rapport comparatif avant/après" ],
      notH: 'Ce que nous ne faisons pas', not: ["Promettre une place précise dans les réponses des IA", "Acheter de faux avis ou publier de faux messages sur des forums", "Poster à votre place sans votre accord"],
      clientH: 'Ce que nous attendons de vous', client: ["Publier les contenus sur votre site (ou nous donner l'accès pour le faire)", "Valider les informations factuelles sur votre entreprise", "Nous répondre sous 3 jours ouvrés pendant les 30 jours"], cta: 'Commencer par le mini-audit gratuit' },
    pilot: { h2: 'Programme pilote', d: "Nous ouvrons [2 à 3] places d'audit complet gratuit à des PME de Barcelone qui acceptent de partager honnêtement leur retour.", give: ["Un audit complet offert", "Un plan d'actions concret", "Un re-test à 30 jours"], get: ["Un témoignage honnête, positif ou non", "L'accord de citer les résultats mesurés (anonymisés si vous préférez)"], cta: 'Candidater au programme pilote' },
    faq: { h2: 'Questions fréquentes', items: [
      { q: "Qu'est-ce que le GEO / AEO ?", a: "C'est l'optimisation de votre présence pour les moteurs de réponses basés sur l'IA (ChatGPT, Gemini, Claude, Perplexity), afin qu'ils comprennent votre entreprise et puissent la citer." },
      { q: 'Garantissez-vous une place dans les réponses ?', a: "Non. Les réponses des IA varient selon le moment, la formulation et la source. Nous mesurons avant et après et nous vous montrons les écarts, sans promesse de résultat." },
      { q: 'Combien de temps faut-il ?', a: "L'audit prend quelques jours, les actions quelques semaines, puis le re-test a lieu 30 jours après la mise en ligne. Les modèles n'actualisent pas tous leurs sources au même rythme." },
      { q: 'Travaillez-vous avec tous les secteurs ?', a: "Nous commençons par les PME B2B francophones à Barcelone, puis la restauration et les bars. Si votre activité est ailleurs, écrivez-nous." },
      { q: 'Faites-vous du faux contenu ou de faux avis ?', a: "Jamais. Ce serait illégal, risqué pour votre réputation, et les IA le détectent de plus en plus." },
      { q: 'Que faites-vous de mes données ?', a: "Seules les informations du formulaire sont conservées pour répondre à votre demande. Voir la page mentions légales." } ] },
    form: { h2: 'Recevez votre mini-audit gratuit', d: "Dites-nous qui vous êtes. Nous testons votre visibilité et revenons vers vous par e-mail.", name: 'Nom', email: 'E-mail', company: 'Entreprise', website: 'Site web (optionnel)', service: 'Votre activité', servicePh: 'Ex. : logiciel de billetterie B2B à Barcelone', consent: "J'accepte que mes données soient utilisées pour me répondre (voir mentions légales).", submit: 'Envoyer ma demande', sending: 'Envoi…', ok: 'Merci ! Nous revenons vers vous très vite.', err: "Une erreur est survenue. Réessayez ou écrivez-nous par e-mail." },
    footer: { legal: 'Mentions légales', tag: 'Visibilité dans les IA pour les PME de Barcelone.', rights: 'Tous droits réservés.' },
    legal: { h1: 'Mentions légales et confidentialité', blocks: [
      { t: 'Éditeur', d: "[À COMPLÉTER : nom, statut juridique, NIF/SIRET, adresse, e-mail de contact]" },
      { t: 'Hébergement', d: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.' },
      { t: 'Données personnelles', d: "Le formulaire collecte votre nom, e-mail, entreprise, site web et activité, uniquement pour répondre à votre demande. Elles sont stockées chez Supabase (UE). [À COMPLÉTER : durée de conservation, responsable du traitement.] Vous pouvez demander l'accès, la rectification ou la suppression à tout moment par e-mail." },
      { t: 'Cookies', d: "Ce site n'utilise pas de cookies de suivi." } ] }
  },
  en: {
    htmlLang: 'en', title: 'Sorevo · Get your business cited by AI in Barcelona',
    desc: 'Sorevo helps Barcelona SMEs appear in ChatGPT, Gemini, Claude and Perplexity answers: audit, content, structured data, 30-day re-test.',
    nav: { offer: 'Offer', method: 'Method', pilot: 'Pilot programme', faq: 'FAQ', cta: 'Free audit' },
    hero: { label: 'AI VISIBILITY · BARCELONA', h1: 'Get AI to cite your business.', sub: 'Your future customers already ask ChatGPT, Gemini, Claude or Perplexity who to pick. We measure where you stand, fix what makes you invisible, then check the result 30 days later.', cta1: 'Get my free mini-audit', cta2: 'See the offer', disclaimer: 'No guarantee of results: AI answers vary. We measure before and after.' },
    mock: { q: 'Which company do you recommend for [your service] in Barcelona?', a: 'Competitor A', b: 'Competitor B', you: '[Your company] cited', note: 'Illustrative example, not a real result.' },
    problem: { h2: 'Why you may be invisible', items: [
      { t: 'A site machines cannot read clearly', d: 'AI cites what it understands fast: a clear offer, precise pages, direct answers. A vague site gets skipped.' },
      { t: 'No structured data', d: 'Without schema.org markup, your company, services and service area stay ambiguous.' },
      { t: 'Few third-party sources', d: 'AI cross-checks sources. Consistent, legitimate listings and mentions build credibility.' } ] },
    method: { h2: 'Our method in 3 steps', steps: [
      { t: '1 · Audit', d: 'We ask realistic customer questions to ChatGPT, Gemini, Claude and Perplexity and record whether you are cited, by whom, and from which sources.' },
      { t: '2 · Actions', d: 'Rewritten key pages, FAQ, structured data, consistent online listings. A prioritised plan and ready-to-publish deliverables.' },
      { t: '3 · 30-day re-test', d: 'We rerun the exact same tests and hand you a before/after comparison: what moved and what is left to do.' } ] },
    offer: { h2: 'One offer, everything written down', intro: 'No endless menu. One package, a clear scope, one deliverable at the end.', price: PRICE, priceNote: 'Launch price, one-off payment. The starting audit is free.', includes: [
      'Initial visibility audit: [30] questions tested on ChatGPT, Gemini, Claude and Perplexity',
      'Baseline report: are you cited, by whom, from which sources',
      'Prioritised action plan',
      '[5] key content pieces written (service page, about, FAQ…) ready to publish',
      'schema.org structured data ready to integrate',
      'List of legitimate listings and directories relevant to your business',
      '30-day re-test and before/after comparison report' ],
      notH: 'What we do not do', not: ['Promise a specific position in AI answers', 'Buy fake reviews or post fake messages on forums', 'Post on your behalf without your approval'],
      clientH: 'What we expect from you', client: ['Publish the content on your site (or give us access to do it)', 'Validate factual information about your business', 'Reply within 3 working days during the 30 days'], cta: 'Start with the free mini-audit' },
    pilot: { h2: 'Pilot programme', d: 'We are opening [2 to 3] free full-audit slots for Barcelona SMEs willing to share honest feedback.', give: ['A full audit, free', 'A concrete action plan', 'A 30-day re-test'], get: ['An honest testimonial, positive or not', 'Permission to cite the measured results (anonymised if you prefer)'], cta: 'Apply to the pilot' },
    faq: { h2: 'Frequently asked questions', items: [
      { q: 'What is GEO / AEO?', a: 'It is optimising your presence for AI answer engines (ChatGPT, Gemini, Claude, Perplexity) so they understand your business and can cite it.' },
      { q: 'Do you guarantee a place in the answers?', a: 'No. AI answers vary by time, wording and source. We measure before and after and show you the differences, with no promise of results.' },
      { q: 'How long does it take?', a: 'The audit takes a few days, actions a few weeks, then the re-test happens 30 days after publication. Models do not all refresh their sources at the same pace.' },
      { q: 'Do you work with every sector?', a: 'We start with French-speaking B2B SMEs in Barcelona, then restaurants and bars. If you are elsewhere, write to us.' },
      { q: 'Do you create fake content or reviews?', a: 'Never. It would be illegal, risky for your reputation, and AI increasingly detects it.' },
      { q: 'What do you do with my data?', a: 'Only the form data is kept, to answer your request. See the legal page.' } ] },
    form: { h2: 'Get your free mini-audit', d: 'Tell us who you are. We test your visibility and get back to you by email.', name: 'Name', email: 'Email', company: 'Company', website: 'Website (optional)', service: 'Your business', servicePh: 'E.g. B2B ticketing software in Barcelona', consent: 'I agree that my data is used to reply to me (see legal page).', submit: 'Send my request', sending: 'Sending…', ok: 'Thank you! We will get back to you shortly.', err: 'Something went wrong. Please retry or email us.' },
    footer: { legal: 'Legal notice', tag: 'AI visibility for Barcelona SMEs.', rights: 'All rights reserved.' },
    legal: { h1: 'Legal notice and privacy', blocks: [
      { t: 'Publisher', d: '[TO COMPLETE: name, legal status, tax ID, address, contact email]' },
      { t: 'Hosting', d: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.' },
      { t: 'Personal data', d: 'The form collects your name, email, company, website and business, only to answer your request. It is stored with Supabase (EU). [TO COMPLETE: retention period, data controller.] You can request access, correction or deletion at any time by email.' },
      { t: 'Cookies', d: 'This site does not use tracking cookies.' } ] }
  },
  es: {
    htmlLang: 'es', title: 'Sorevo · Que las IA citen su empresa en Barcelona',
    desc: 'Sorevo ayuda a las pymes de Barcelona a aparecer en las respuestas de ChatGPT, Gemini, Claude y Perplexity: auditoría, contenidos, datos estructurados y re-test a 30 días.',
    nav: { offer: 'Oferta', method: 'Método', pilot: 'Programa piloto', faq: 'FAQ', cta: 'Auditoría gratis' },
    hero: { label: 'VISIBILIDAD EN LAS IA · BARCELONA', h1: 'Que las IA citen su empresa.', sub: 'Sus futuros clientes ya preguntan a ChatGPT, Gemini, Claude o Perplexity a quién elegir. Medimos dónde está, corregimos lo que le hace invisible y verificamos el resultado 30 días después.', cta1: 'Recibir mi mini-auditoría gratis', cta2: 'Ver la oferta', disclaimer: 'Sin garantía de resultados: las respuestas de las IA varían. Medimos antes y después.' },
    mock: { q: '¿Qué empresa me recomiendas para [su servicio] en Barcelona?', a: 'Competidor A', b: 'Competidor B', you: '[Su empresa] citada', note: 'Ejemplo ilustrativo, no es un resultado real.' },
    problem: { h2: 'Por qué quizá es invisible', items: [
      { t: 'Una web poco clara para una máquina', d: 'Las IA citan lo que entienden rápido: una oferta clara, páginas precisas, respuestas directas. Una web vaga se ignora.' },
      { t: 'Sin datos estructurados', d: 'Sin marcado schema.org, su empresa, sus servicios y su zona de actividad quedan ambiguos.' },
      { t: 'Pocas fuentes de terceros', d: 'Las IA contrastan varias fuentes. Fichas y menciones coherentes y legítimas refuerzan su credibilidad.' } ] },
    method: { h2: 'Nuestro método en 3 pasos', steps: [
      { t: '1 · Auditoría', d: 'Planteamos preguntas realistas de sus clientes a ChatGPT, Gemini, Claude y Perplexity y anotamos si le citan, quién y con qué fuentes.' },
      { t: '2 · Acciones', d: 'Reescritura de páginas clave, FAQ, datos estructurados y coherencia de sus fichas online. Un plan priorizado y entregables listos para publicar.' },
      { t: '3 · Re-test a 30 días', d: 'Repetimos exactamente las mismas pruebas y le entregamos una comparativa antes/después: qué ha cambiado y qué falta.' } ] },
    offer: { h2: 'Una sola oferta, todo por escrito', intro: 'Sin menús interminables. Un paquete, un alcance claro y un entregable final.', price: PRICE, priceNote: 'Precio de lanzamiento, pago único. La auditoría inicial es gratuita.', includes: [
      'Auditoría inicial de visibilidad: [30] preguntas probadas en ChatGPT, Gemini, Claude y Perplexity',
      'Informe de partida: si le citan, quién y con qué fuentes',
      'Plan de acciones priorizado',
      'Redacción de [5] contenidos clave (página de servicio, quiénes somos, FAQ…) listos para publicar',
      'Datos estructurados schema.org listos para integrar',
      'Lista de fichas y directorios legítimos relevantes para su actividad',
      'Re-test a 30 días e informe comparativo antes/después' ],
      notH: 'Lo que no hacemos', not: ['Prometer una posición concreta en las respuestas de las IA', 'Comprar reseñas falsas o publicar mensajes falsos en foros', 'Publicar en su nombre sin su acuerdo'],
      clientH: 'Lo que esperamos de usted', client: ['Publicar los contenidos en su web (o darnos acceso para hacerlo)', 'Validar la información factual sobre su empresa', 'Responder en 3 días laborables durante los 30 días'], cta: 'Empezar con la mini-auditoría gratis' },
    pilot: { h2: 'Programa piloto', d: 'Abrimos [2 o 3] plazas de auditoría completa gratuita para pymes de Barcelona dispuestas a compartir una opinión honesta.', give: ['Una auditoría completa gratuita', 'Un plan de acciones concreto', 'Un re-test a 30 días'], get: ['Un testimonio honesto, positivo o no', 'Permiso para citar los resultados medidos (anonimizados si lo prefiere)'], cta: 'Solicitar plaza en el piloto' },
    faq: { h2: 'Preguntas frecuentes', items: [
      { q: '¿Qué es el GEO / AEO?', a: 'Es optimizar su presencia para los motores de respuesta basados en IA (ChatGPT, Gemini, Claude, Perplexity) para que entiendan su empresa y puedan citarla.' },
      { q: '¿Garantizan un lugar en las respuestas?', a: 'No. Las respuestas de las IA varían según el momento, la formulación y la fuente. Medimos antes y después y le mostramos las diferencias, sin prometer resultados.' },
      { q: '¿Cuánto tarda?', a: 'La auditoría lleva unos días, las acciones unas semanas y el re-test se hace 30 días después de publicar. No todos los modelos actualizan sus fuentes al mismo ritmo.' },
      { q: '¿Trabajan con todos los sectores?', a: 'Empezamos con pymes B2B francófonas en Barcelona y después restaurantes y bares. Si su actividad es otra, escríbanos.' },
      { q: '¿Crean contenido o reseñas falsas?', a: 'Nunca. Sería ilegal, arriesgado para su reputación y las IA lo detectan cada vez más.' },
      { q: '¿Qué hacen con mis datos?', a: 'Solo se conservan los datos del formulario para responder a su solicitud. Consulte el aviso legal.' } ] },
    form: { h2: 'Reciba su mini-auditoría gratis', d: 'Cuéntenos quién es. Probamos su visibilidad y le respondemos por correo.', name: 'Nombre', email: 'Correo electrónico', company: 'Empresa', website: 'Sitio web (opcional)', service: 'Su actividad', servicePh: 'Ej.: software de ticketing B2B en Barcelona', consent: 'Acepto que mis datos se utilicen para responderme (ver aviso legal).', submit: 'Enviar mi solicitud', sending: 'Enviando…', ok: '¡Gracias! Le responderemos muy pronto.', err: 'Ha ocurrido un error. Inténtelo de nuevo o escríbanos por correo.' },
    footer: { legal: 'Aviso legal', tag: 'Visibilidad en las IA para pymes de Barcelona.', rights: 'Todos los derechos reservados.' },
    legal: { h1: 'Aviso legal y privacidad', blocks: [
      { t: 'Titular', d: '[POR COMPLETAR: nombre, forma jurídica, NIF, dirección, correo de contacto]' },
      { t: 'Alojamiento', d: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, EE. UU.' },
      { t: 'Datos personales', d: 'El formulario recoge su nombre, correo, empresa, sitio web y actividad, solo para responder a su solicitud. Se almacenan en Supabase (UE). [POR COMPLETAR: plazo de conservación, responsable del tratamiento.] Puede solicitar acceso, rectificación o supresión en cualquier momento por correo.' },
      { t: 'Cookies', d: 'Este sitio no utiliza cookies de seguimiento.' } ] }
  }
};
