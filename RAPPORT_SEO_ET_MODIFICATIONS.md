# Rapport d'Audit, Refonte & Optimisation SEO / LLM — L'Oeil de Monsieur R

**Site** : `https://www.loeil-de-monsieur-r.fr`  
**Propriétaire** : Éric Soret — *L'Oeil de Monsieur R (Photographe de Mariage à Rennes & en Bretagne)*  
**Date de mise à jour** : 20 Novembre 2026

---

## 1. Refonte Design, Expérience Utilisateur (UX) & Conversion

### 1.1 Hero Éditorial Fine Art & Adaptation Mobile
- **Fichiers** : [app/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/page.tsx), [components/HeroFineArt.tsx](file:///Users/ericsoret/ene-photographe-mariage/components/HeroFineArt.tsx), [app/globals.css](file:///Users/ericsoret/ene-photographe-mariage/app/globals.css)
- **Réalisations** :
  - Direction artistique **Éditorial Magazine & Planche Fine Art** sur fond sombre (`#090909`), typographie `Oswald`, repères de coupe (`+`), planche contact interactive et transition Noir & Blanc vers Couleur au survol.
  - **Version Mobile** : ajout d'une photo de mariage en fondu derrière le titre (`hero-mobile-bg`) et masquage du triptyque complexe sous `1024px` pour une lecture immédiate sur smartphone.
  - Optimisation des performances images Next.js 16 (`loading="eager"` et attributs `sizes` calibrés pour le LCP).

### 1.2 Page d'Accueil orientée Confiance & Prise de Contact
- **Fichiers** : [app/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/page.tsx), [lib/data.ts](file:///Users/ericsoret/ene-photographe-mariage/lib/data.ts), [components/MariagesNetReviews.tsx](file:///Users/ericsoret/ene-photographe-mariage/components/MariagesNetReviews.tsx)
- **Réalisations** :
  - **Section Intro / Portrait en 2 colonnes** : présentation incarnée d'Éric (*L'Oeil de Monsieur R*) avec son portrait ([public/images/Eric.webp](file:///Users/ericsoret/ene-photographe-mariage/public/images/Eric.webp)) et un lien direct de vérification de disponibilité.
  - **Section « Mes Services » interactive** : cartes 100 % cliquables vers `/services`, photos harmonisées avec la page `/services` (dont [87889333_3052041288163709_1545270873085181952_n.jpg](file:///Users/ericsoret/ene-photographe-mariage/public/images/87889333_3052041288163709_1545270873085181952_n.jpg) pour *Tirages Fine Art*), et mention rassurante du tarif d'entrée (**À partir de 1 200 €**).
  - **Témoignages & Widget Mariages.net** :
    - Témoignages alignés avec les vrais couples (*Kelly & Rudy*, *Adeline & Kévin*, *Charlotte & Thomas*).
    - Intégration responsive et thème sombre sur mesure du widget officiel **Mariages.net** (`wpShowReviews(426109, "black")`).
  - **Section FAQ en bas d'accueil** : 4 questions fréquentes + rappel des départements et villes couvertes en Bretagne avant l'appel à l'action final.

### 1.3 Mise à jour des Galeries & Remplacement des Photos Génériques
- **Fichier** : [lib/data.ts](file:///Users/ericsoret/ene-photographe-mariage/lib/data.ts)
- **Réalisations** :
  - **Galerie 01 — Joe et Sebastien** : renommage et ajout de `joeetseb1.webp` et `joeetseb3.webp`.
  - **Galerie 02 — Kelly et Rudy** : renommage, photo de couverture `rudy et kelly.webp` et ajout de `kellyrudy2.webp`, `kellyrudy3.webp`, `kellyrudy4.webp`.
  - **Galerie 03 — Details** : ajout de `TUB-cy6hTKCDrjr-LhE5jw.webp`, `6JU1hif4Ty61_Nd11hjcfg.webp`, `b1EQdDlURpaoaUQpJ9aAMQ.webp`.
  - **Galerie 04 — Sev et Fred** : ajout de `i-Xl--zhTuOurqrjZkI-Hg.webp`, `Vs8Zz7leSyO-xHxSj8PDIg.webp`, `OSJXnvlORJ2alH0gvRu6XA.webp`.
  - **Section « Prêt à raconter votre histoire ? » (`ctaImages`)**, **Page À propos (`aboutCollage`)** et **Page Contact (`contactImages`)** : remplacement intégral des anciennes images génériques du template par de vraies photographies de mariage.

---

## 2. Stratégie de Contenu & Cocon Sémantique SEO (10 Articles de Blog)

Tous les articles sont définis dans [lib/blogPosts.ts](file:///Users/ericsoret/ene-photographe-mariage/lib/blogPosts.ts) et rendus par [app/blog/[slug]/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/blog/%5Bslug%5D/page.tsx) avec maillage interne vers l'accueil (`/`), `/services`, `/projects` et liens externes vers les domaines partenaires :

### 2.1 Reportages par Domaine de Réception (Longue traîne locale)
1. **N° 01 — Adeline & Kévin (29 Juin 2024)** : *Mariage au Trempe Sec à Vitré & cérémonies à la mairie et à l'église de Noyal* (`/blog/mariage-trempe-sec-vitre-adeline-kevin`) — Lien externe vers `https://www.letrempesec.fr/`.
2. **N° 02 — Bénédicte & Gaël** : *Mariage au Jardin des Acanthes à Plescop près de Vannes* (`/blog/mariage-jardin-des-acanthes-benedicte-gael`).
3. **N° 03 — Charlotte & Thomas** : *Mariage au Haras du Reuzel à Orgères près de Rennes* (`/blog/mariage-haras-du-reuzel-charlotte-thomas`).
4. **N° 04 — Rudy & Kelly** : *Mariage au Manoir du Pas Jahan à Couëron près de Nantes* (`/blog/mariage-manoir-du-pas-jahan-rudy-kelly`).
5. **N° 05 — Hélène & Florian** : *Mariage au Domaine de Kerlys à Briec-de-l'Odet dans le Finistère* (`/blog/mariage-domaine-de-kerlys-helene-florian`).

### 2.2 Guides Conseils & Intention d'Achat pour Futurs Mariés
6. **N° 06 — Guide Domaines** : *Où se marier autour de Rennes et en Bretagne ? Les plus beaux domaines de réception* (`/blog/domaines-salles-mariage-rennes-ille-et-vilaine`).
7. **N° 07 — Guide Lieux Séance Couple** : *Où faire ses photos de couple de mariage à Rennes, Saint-Malo et en Bretagne ?* (`/blog/ou-faire-photos-couple-mariage-rennes-saint-malo-bretagne`).
8. **N° 08 — Guide Organisation & Timing** : *Comment organiser le timing photo de son mariage pour profiter de ses invités ?* (`/blog/organiser-planning-timing-photo-mariage-sans-stress`).
9. **N° 09 — Guide Tarifs & Budget** : *Quel est le prix d'un photographe de mariage à Rennes et en Bretagne ?* (`/blog/prix-tarif-photographe-mariage-rennes-bretagne`).
10. **N° 10 — Guide Séance d'Engagement** : *Pourquoi faire une séance d'engagement avant son mariage en Bretagne ?* (`/blog/pourquoi-faire-seance-engagement-mariage-bretagne`).

---

## 3. Optimisations Techniques SEO & LLM (IA Générative)

- **Élimination du Duplicate Content** :
  - [app/galerie/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/galerie/page.tsx) pointe en URL canonique vers `https://www.loeil-de-monsieur-r.fr/projects`.
  - [app/a-propos/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/a-propos/page.tsx) pointe en URL canonique vers `https://www.loeil-de-monsieur-r.fr/about`.
- **Sitemap XML complet ([app/sitemap.ts](file:///Users/ericsoret/ene-photographe-mariage/app/sitemap.ts))** :
  - Inclut toutes les pages principales, les 4 galeries d'albums (`/project/[slug]`), `/mariage-helene-florian` et les 10 articles de blog.
- **Métadonnées & Attributs `alt` géolocalisés** :
  - Génération complète des balises `title`, `description`, `alternates.canonical` et `openGraph` sur `/project/[slug]` ([app/project/[slug]/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/project/%5Bslug%5D/page.tsx)) et `/blog/[slug]`.
  - Enrichissement des attributs `alt` sur la page d'accueil, le Hero Fine Art, les projets et les articles de blog.
- **Données structurées JSON-LD (`Schema.org`)** :
  - [components/SchemaOrg.tsx](file:///Users/ericsoret/ene-photographe-mariage/components/SchemaOrg.tsx) : `LocalBusiness` + `ProfessionalService`, villes desservies (`areaServed`), catalogue des 3 formules (`1200 €`, `1600 €`, `2500 €`), `AggregateRating` (`5.0/5`), lien `sameAs` Mariages.net et schéma `FAQPage`.
  - [app/blog/[slug]/page.tsx](file:///Users/ericsoret/ene-photographe-mariage/app/blog/%5Bslug%5D/page.tsx) : schémas `BlogPosting` + `BreadcrumbList` (fil d'Ariane).
- **Optimisation LLM / GEO (ChatGPT, Perplexity, Claude, Gemini)** :
  - Fichier [`/llms.txt`](file:///Users/ericsoret/ene-photographe-mariage/public/llms.txt) synthétisant l'activité, la zone géographique, les tarifs, les avis vérifiés et les URLs clés.
  - Autorisation explicite des robots IA (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`) dans [app/robots.ts](file:///Users/ericsoret/ene-photographe-mariage/app/robots.ts).

---

## 4. Plan d'Action Hors-Site (Checklist Google Business Profile & Backlinks)

1. **Fiche Google Business Profile (ex-My Business)** :
   - **Nom** : `L'Oeil de Monsieur R - Photographe de Mariage`
   - **Catégorie principale** : `Photographe de mariage` (secondaires : `Photographe`, `Service de photographie`).
   - **Zones desservies** : `Rennes`, `Ille-et-Vilaine`, `Vitré`, `Noyal-sur-Vilaine`, `Orgères`, `Saint-Malo`, `Cancale`, `Dinan`, `Fougères`, `Vannes`, `Morbihan`, `Quimper`, `Finistère`, `Nantes`, `Loire-Atlantique`, `Bretagne`.
   - **Produits / Services** : ajouter les 3 formules (*Essentiel 1 200 €*, *Élégance 1 600 €*, *Prestige 2 500 €*) avec lien vers `/services`.
   - **Avis clients** : demander aux mariés de mentionner la ville ou le domaine dans leur avis Google, et citer la ville + le domaine dans chaque réponse.
2. **Google Search Console** :
   - Soumettre `https://www.loeil-de-monsieur-r.fr/sitemap.xml` et demander l'indexation des nouvelles URLs du blog.
3. **Backlinks Partenaires** :
   - Envoyer une sélection de photos HD + le lien de l'article aux domaines (*Le Trempe Sec*, *Haras du Reuzel*, *Jardin des Acanthes*, *Manoir du Pas Jahan*, *Domaine de Kerlys*) et prestataires en échange d'un lien crédit photo vers `https://www.loeil-de-monsieur-r.fr`.
