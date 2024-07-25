# Start
1. Download het project via `gh clone bartslot/ipvdata-challenge`
2. Installeer yarn (mocht je dat nog niet hebben: `brew install yarn`
3. Installeer de paketten in de hoofdfolder van het geclonede project met `yarn`
4. Start de development server met `yarn start`
5. Ga in een browser naar: http://localhost:1234

# Notities
Ik heb door tijdgebrek maar 1 van de 2 diagrammen gemaakt. Ik heb echter wel een voorbeeld van het lijndiagram ontworpen, hoe ik het zou willen hebben.
https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FSSIcYLPoniBbrUqVNe2jyS%2FEditable-Charts-UI-Kit-for-Dashboard-Design-%255BFree%255D-(Community)%3Fnode-id%3D204-98%26t%3DJjeNPlDRaaPwzdGm-1

# ipvdata-challenge
Case: Dashboard met Statistieken Opdracht: Ontwerp en bouw een dashboard voor het weergeven van statistieken. Vereisten: Lijndiagram: Grafiek: Visuele weergave van prijzen met een lijndiagram 

# Opdracht: Ontwerp en bouw een dashboard voor het weergeven van statistieken.

# Vereisten:
**Lijndiagram:**
- Grafiek: Visuele weergave van prijzen met een lijndiagram
- Filteropties: We moeten de data kunnen filteren op basis van tijd (dag, maand), en kunnen filteren op producten

**Staafdiagram:**
- Grafiek: Visuele weergave van data met staafdiagrammen.
- Filteropties: We moeten de data kunnen filteren op basis van tijd (dag, maand) en kunnen filteren op een merk.

**Voorbeeld filters:**

Merken filter: 
- Coca Cola,
- Sportlife,
- Wasa

Categorie filter:
- Frisdrank,
- Snoep (Kauwgom)
- Crackers

**Diagram data:**
In alle gevallen mag het uiteraard dummy data zijn, voor de lijndiagram gaat dit dan om een set aan producten. 
Voor de staafdiagram gaat dit dan om omzet (fictieve getallen)

# Technische vereisten:
- Gebruik TailwindCSS voor de styling.
- Gebruik AlpineJS voor interactieve elementen zoals de grafieken en filteropties.

**Kleuren / Huisstijl:**
- Basis: #ffffff (wit)
- IPV Blauw: #3498d4
- IPV Grijs: #424242
- Font family: Inter (https://fonts.google.com/specimen/Inter)
