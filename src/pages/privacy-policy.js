import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const styles = {
  toc: {
    background: "#f4f6fa",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "2.5rem",
  },
  tocTitle: {
    fontSize: "0.85rem",
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#002868",
    margin: "0 0 0.5rem",
  },
  tocList: {
    margin: 0,
    paddingLeft: "1.25rem",
    lineHeight: "1.9",
  },
  tocLink: {
    color: "#002868",
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginTop: "3rem",
    marginBottom: "1rem",
    color: "#002868",
    fontWeight: "700",
    scrollMarginTop: "1rem",
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
  },
  list: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#4a4a4a",
    marginBottom: "1.5rem",
  },
  tableWrapper: {
    overflowX: "auto",
    marginBottom: "1.5rem",
    border: "1px solid #e3e7ef",
    borderRadius: "12px",
  },
  table: {
    width: "100%",
    fontFamily: '"Open Sans", sans-serif',
    borderCollapse: "collapse",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#4a4a4a",
    margin: 0,
  },
  th: {
    textAlign: "left",
    padding: "0.75rem 1rem",
    background: "#f4f6fa",
    color: "#002868",
    fontWeight: "600",
    borderBottom: "1px solid #e3e7ef",
  },
  td: {
    padding: "0.75rem 1rem",
    borderTop: "1px solid #eef1f6",
    verticalAlign: "top",
  },
  link: {
    color: "#bf0a30",
    fontWeight: "600",
    textDecoration: "none",
    borderBottom: "2px solid #bf0a30",
  },
}

const sections = [
  ["kdo-jsme", "Kdo jsme"],
  ["jake-udaje", "Jaké údaje shromažďujeme"],
  ["proc", "Proč údaje zpracováváme a na jakém právním základě"],
  ["mladsi-18", "Uchazeči mladší 18 let"],
  ["pristup", "Kdo má k tvým údajům přístup"],
  ["doba-uchovani", "Jak dlouho údaje uchováváme"],
  ["prava", "Tvoje práva"],
  ["zabezpeceni", "Zabezpečení, dotazy a stížnosti"],
]

const SectionTitle = ({ id }) => (
  <h2 id={id} style={styles.sectionTitle}>
    {sections.find(([sectionId]) => sectionId === id)[1]}
  </h2>
)

function Table({ headers, rows }) {
  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} style={styles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    ...styles.td,
                    ...(i === 0 && { borderTop: "none" }),
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Email = () => (
  <a href="mailto:info@orindaklub.cz" style={styles.link}>
    info@orindaklub.cz
  </a>
)

export default function privacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Zásady ochrany osobních údajů - Orinda Klub Tábor</title>
        <meta
          name="description"
          content="Jak Orinda Klub Tábor nakládá s osobními údaji uchazečů o stipendium v soutěži o studijní pobyt v Orindě."
        />
      </Helmet>
      <Container>
        <div style={{ paddingTop: "2rem" }}>
          <PageHeader
            title="Zásady ochrany osobních údajů"
            subtitle="Poslední aktualizace: 16. října 2026"
          />

          <p style={styles.paragraph}>
            Tyto zásady vysvětlují, jak Orinda Klub Tábor nakládá s tvými
            osobními údaji, když se přihlásíš do jeho stipendijní soutěže o
            pololetní studijní pobyt na Miramonte High School v Orindě v
            Kalifornii. Vztahují se na každého, kdo odešle přihlášku.
          </p>

          <nav style={styles.toc} aria-label="Obsah">
            <p style={styles.tocTitle}>Obsah</p>
            <ol style={styles.tocList}>
              {sections.map(([id, title]) => (
                <li key={id}>
                  <a href={`#${id}`} style={styles.tocLink}>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <SectionTitle id="kdo-jsme" />
          <p style={styles.paragraph}>
            Správcem tvých osobních údajů je <strong>Orinda Klub, z.s.</strong>,
            IČO 70859779, se sídlem Komenského 2135/7, 390 02 Tábor, zapsaný ve
            spolkovém rejstříku vedeném Krajským soudem v Českých Budějovicích
            pod sp. zn. L 3083.
          </p>
          <p style={styles.paragraph}>
            Ve všech záležitostech týkajících se tvých údajů nás kontaktuj na{" "}
            <Email />.
          </p>

          <SectionTitle id="jake-udaje" />
          <Table
            headers={["Údaj", "Povinný?"]}
            rows={[
              ["Jméno a příjmení", "Ano"],
              ["E-mailová adresa [a telefonní číslo]", "Ano"],
              ["Datum narození – k ověření věkového limitu 16–18 let", "Ano"],
              ["Trvalé bydliště v Táboře, nebo tvůj vztah k Táboru", "Ano"],
              ["Střední škola, kterou navštěvuješ", "Ano"],
              ["Tvoje motivační esej (v angličtině)", "Ano"],
              [
                "Video, ve kterém se představuješ (zachycuje tvou podobu a hlas)",
                "Ne",
              ],
              [
                "Poznámky z pohovoru ve druhém kole (jen u uchazečů v užším výběru)",
                "–",
              ],
              [
                "Jméno a e-mail rodiče nebo zákonného zástupce (u výherců mladších 18 let)",
                "Jen v případě potřeby",
              ],
            ]}
          />
          <p style={styles.paragraph}>
            Ptáme se jen na to, co k pořádání soutěže potřebujeme. Do eseje ani
            videa prosím neuváděj citlivé údaje (např. o zdraví nebo náboženském
            vyznání), pokud nechceš, aby byly zohledněny jako součást tvé
            přihlášky.
          </p>

          <SectionTitle id="proc" />
          <Table
            headers={["Účel", "Právní základ (GDPR)"]}
            rows={[
              [
                "Přijetí a hodnocení tvé přihlášky, pozvání uchazečů z užšího výběru k pohovoru, komunikace s tebou a vyhlášení výsledků",
                "čl. 6 odst. 1 písm. b) – zpracování je nezbytné k tomu, aby ses mohl/a zúčastnit soutěže podle jejích pravidel",
              ],
              [
                "Doporučení finalistů výběrové porotě v Orindě a zajištění pobytu výherce (zápis do školy, hostitelská rodina, víza)",
                "čl. 6 odst. 1 písm. b) – zpracování je nezbytné k udělení a poskytnutí stipendia",
              ],
              [
                "Uchovávání záznamů o přihláškách a výhercích pro případ sporů",
                "čl. 6 odst. 1 písm. f) – náš oprávněný zájem na férovém průběhu soutěže",
              ],
              [
                "Uchovávání esejí a videí za účelem odhalování plagiátů, tj. přihlášek zkopírovaných nebo převzatých od dřívějších uchazečů",
                "čl. 6 odst. 1 písm. f) – náš oprávněný zájem na férové soutěži založené na původních pracích",
              ],
            ]}
          />
          <p style={styles.paragraph}>
            Eseje ani videa uchazečů nezveřejňujeme.
          </p>
          <p style={styles.paragraph}>
            Přiložení videa je dobrovolné a nemá vliv na hodnocení tvé eseje.
            Nepoužíváme automatizované rozhodování: každou přihlášku posuzují
            lidé.
          </p>

          <SectionTitle id="mladsi-18" />
          <p style={styles.paragraph}>
            Soutěž je určena studentům ve věku 16 až 18 let, přihlášku proto
            můžeš podat sám/sama.
          </p>
          <p style={styles.paragraph}>
            Pokud ti je méně než 18 let a vyhraješ, budeme kvůli zajištění tvého
            pobytu v Orindě kontaktovat také tvého rodiče nebo zákonného
            zástupce.
          </p>

          <SectionTitle id="pristup" />
          <ul style={styles.list}>
            <li>
              <strong>Dobrovolníci Orinda Klubu Tábor a porota v Táboře</strong>{" "}
              – hodnotí eseje a vedou pohovory.
            </li>
            <li>
              <strong>
                Orinda/Tabor Sister City Foundation a její výběrová porota v
                Orindě (USA)
              </strong>{" "}
              – táborská porota doporučuje finalisty a o konečném výběru se
              rozhoduje v Orindě. Předáváme jim přihlášky finalistů a naše
              doporučení.
            </li>
            <li>
              <strong>Miramonte High School a hostitelská rodina</strong> –
              údaje o výherci potřebné k zápisu do školy a zajištění ubytování.
            </li>
            <li>
              <strong>Poskytovatelé služeb</strong>, které používáme ke sběru a
              ukládání přihlášek, konkrétně Google (Google Forms a Google
              Drive). Google zpracovává údaje pouze podle našich pokynů a je
              certifikován v rámci EU–US Data Privacy Framework (rámce pro
              ochranu osobních údajů mezi EU a USA).
            </li>
          </ul>
          <p style={styles.paragraph}>Tvoje údaje nikdy neprodáváme.</p>
          <p style={styles.paragraph}>
            <strong>Předávání do USA.</strong> Protože konečný výběr i samotný
            pobyt probíhají v Orindě, údaje finalistů a výherce předáváme do
            Spojených států. Pokud se na příjemce nevztahuje rozhodnutí Evropské
            komise o odpovídající ochraně (jako je EU–US Data Privacy
            Framework), opírá se předání o čl. 49 odst. 1 písm. b) GDPR: je
            nezbytné k tomu, aby ses mohl/a zúčastnit finálního kola a získat
            stipendium. Úroveň ochrany osobních údajů v USA může být nižší než v
            EU.
          </p>

          <SectionTitle id="doba-uchovani" />
          <Table
            headers={["Údaj", "Doba uchování"]}
            rows={[
              [
                "Eseje a videa",
                "10 let po roce, ve kterém ses přihlásil/a, abychom mohli nové přihlášky porovnávat s dřívějšími kvůli plagiátům – poté je smažeme. Po tuto dobu jsou uloženy s omezeným přístupem a používáme je výhradně k této kontrole.",
              ],
              [
                "Ostatní údaje z přihlášky a poznámky z pohovorů",
                <>
                  3 roky po roce, ve kterém ses přihlásil/a – dost dlouho na to,
                  aby porota viděla opakované přihlášky, které podle našich{" "}
                  <Link to="/faq" style={styles.link}>
                    FAQ
                  </Link>{" "}
                  hrají v tvůj prospěch – poté je smažeme
                </>,
              ],
              [
                "Jméno výherce, škola a rok účasti",
                "Uchováváme trvale jako záznam o historii soutěže",
              ],
            ]}
          />

          <SectionTitle id="prava" />
          <p style={styles.paragraph}>Kdykoli nás můžeš požádat, abychom:</p>
          <ul style={styles.list}>
            <li>ti sdělili, jaké údaje o tobě máme (právo na přístup),</li>
            <li>opravili nepřesné údaje (právo na opravu),</li>
            <li>tvoje údaje vymazali (právo na výmaz),</li>
            <li>omezili jejich zpracování (právo na omezení zpracování),</li>
            <li>
              ti je předali ve strukturovaném, strojově čitelném formátu (právo
              na přenositelnost),
            </li>
            <li>
              přestali je zpracovávat na základě našeho oprávněného zájmu (právo
              vznést námitku).
            </li>
          </ul>
          <p style={styles.paragraph}>
            Pokud požádáš o výmaz své přihlášky před vyhlášením výsledků,
            znamená to, že ze soutěže odstupuješ.
          </p>
          <p style={styles.paragraph}>
            Na žádosti odpovídáme do jednoho měsíce.
          </p>

          <SectionTitle id="zabezpeceni" />
          <p style={styles.paragraph}>
            Přístup k přihláškám má pouze organizační tým a porota a ukládáme je
            výhradně ve službách chráněných heslem.
          </p>
          <p style={styles.paragraph}>
            S jakýmkoli dotazem ohledně svých údajů nám napiš na <Email />.
            Pokud se domníváš, že s tvými údaji nakládáme v rozporu se zákonem,
            můžeš podat stížnost u Úřadu pro ochranu osobních údajů, Pplk.
            Sochora 27, 170 00 Praha 7,{" "}
            <a
              href="https://uoou.gov.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              www.uoou.gov.cz
            </a>
            .
          </p>
        </div>
      </Container>
    </Layout>
  )
}
