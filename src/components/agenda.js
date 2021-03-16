import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { faDotCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"

const days = ["05/04", "06/04", "07/04", "08/04", "09/04"]
const eventsPerDay = [
  //Lunes 05 de Abril
  [
    {
      time: "15:00",
      title: "Presentación BIOS",
      speaker: "General",
      desc:
        "Dra. Guadalupe Diaz Constanzo (Directora Centro Cultural de la Ciencia);  Equipo de Producción de Proyecto Bios  Objeto a (Lujan Oulton, Susana De Giacomo y Tomas Oulton); Iris Saladino (Programación), Laura Palavecino (Arte), Guillermo Winnicki (Academia), Natalia Matewecki (Linea del Tiempo), Lucía Stubrin (reflexiones sobre Biotecnología y Arte)",
    },
    {
      time: "16:00",
      title: "Arte",
      speaker: "Conversatorio de artistas de Biorobótica en Artes Electrónicas",
      desc:
        "Modera: Tomas Oulton (Director de Objeto a)Panelistas: Ana Laura Cantera (Magíster en Artes Electrónicas graduada con honores en la Untref, Licenciada y Profesora en Artes Visuales egresada de la UNA), Daniel Alvarez Olmedo (Artista Biorobótico / Director de la Diplomatura en Arte Robótico UMSA/ Profesor e Investigador Universitario / Escritor), Dario Sacco (Licenciado y Magister en Artes Electrónicas de la Untref, investigador, docente y compositor)",
    },
    {
      time: "16:50",
      title: "Biotecnología",
      speaker:
        "ArgenBio: qué es ArgenBio, contenidos de Biotecnología para docentes, alumnos y medios",
      desc:
        "María Luz Zapiola - Ingeniera en Producción Agropecuaria egresada de la UCA. Doctora en Filosofía (PhD) y Máster en Ciencias (MSc) de Oregon State University, EEUU. Responsable del Área Técnica de ArgenBio.",
    },
    {
      time: "17:00",
      title: "Biotecnología",
      speaker: "Nanotecnología aplicada",
      desc:
        "FAN: Fundación Argentina de Biotecnología (Fundación dedicada a promover el desarrollo de proyectos y emprendimientos con nanotecnología y a su difusión) Lucia Policastro (Dra. Ciencias Biológicas e investigadora independiente del Conicet y de la CNEA.  Directora Laboratorio Nanomedicina CNEA, Instituto Nanociencias y Nanotecnología)",
    },
    {
      time: "18:00",
      title: "Academia",
      speaker: "Conversatorio sobre Biotecnología en Salud Humana",
      desc:
        "Moderador: Ing. Guillermo Winnicki (Encargado de Academia en Proyecto Bios, Director Gestión Cultural UTN-FRBA)" +
        "Panelistas: Dra María Victoria Miranda (Bioquímica (UBA) Dra. UBA. Actual Directora del Instituto NANOBIOTEC (UBA-CONICET). Prof. Titular de la Cátedra de Biotecnología de la FFyB (UBA). Investigadora Principal de CONICET), Gaston Soria (Profesor Adjunto de Diagnóstico y Patología Molecular, FCQ-UNC, Director Científico de OncoPrecision, empresa de base tecnológica con inversión nacional e internacional).",
    },
    {
      time: "19:00",
      title: "General",
      speaker: "Inauguración muestra virtual con LikeLike",
      desc:
        "Plataforma interactiva en internet Like like : los asistentes ingresan con su avatar en una galería de arte virtual en 8 bits en la que pueden chatear con los artistas, visitar sus obras y beber tragos virtuales en el patio chill out de la galería.",
    },
  ],
  // Martes 06 de Abril
  [
    {
      time: "15:00",
      title: "Academia",
      speaker:
        "La Universidad como creadora de empresas de Base Biotecnológica",
      desc:
        "Modera : Susana Levy (Dra. Ciencias Biológicas con 20 años de experiencia en I&D de vacunas y biofarmacéuticos en la academia y la industria, fundadora de EBT Cell Tonics, Gerente de Innovación y Transferencia Tecnológica UNSAM)",
    },
    {
      time: "16:00",
      title: "Biotecnología: Biotecnología en Salud Humana",
      speaker: "AmegaBiotech, Roche, mAxbcience.",
      desc:
        "Modera : Susana Levy (Dra. Ciencias Biológicas con 20 años de experiencia en I&D de vacunas y biofarmacéuticos en la academia y la industria, fundadora de EBT Cell Tonics, Gerente de Innovación y Transferencia Tecnológica UNSAM)" +
        "Panelistas: Dario Codner (Licenciado en Física y Magíster en Política y Gestión de la Ciencia y la Tecnología de la UBA. Jefe de Gabinete de Asesores de la Secretaría de política y planeamiento del MINCYT. Secretario de Innovación y Transferencia Tecnológica de la UN Quilmes), Dr. Javier Lottersberger (Bioquímico. Doctor en Ciencias Biológicas. Secretario de Vinculación y Transferencia Tecnológica de la Universidad Nacional del Litoral. Ex Decano de la Facultad de Bioquímica y Ciencias Biológicas. Profesor Adjunto en la Facultad de Bioquímica y Ciencias Biológicas) - Lic. Romina Joris (Licenciada en Biotecnología. Coordinación del Programa UNLBio, Secretaría de Vinculación y Transferencia Tecnológica de la UNL. Posgrado en Biotecnología, Industria y Negocios)",
    },
    {
      time: "16:50",
      title: "Biotecnología",
      speaker: "ArgenBio: ¿Qué es la Biotecnología? Tradicional y moderna",
      desc:
        "Maria Luz Zapiola - Ingeniera en Producción Agropecuaria egresada de la UCA. Doctora en Filosofía (PhD) y Máster en Ciencias (MSc), de Oregon State University, EEUU. Responsable del Área Técnica de ArgenBio.",
    },
    {
      time: "17:00",
      title: "Biotecnología",
      speaker: "Producción de Insumos Industriales (Biotecnología Blanca)",
      desc:
        "Orador: Maximiliano D’Alessio (Licenciado en Biotecnología de la Universidad de Quilmes, MBA de la Universidad de Belgrano. Director Comercial de Novozymes BioAg para América Latina - transmisión desde New York).",
    },
    {
      time: "18:00",
      title: "Arte",
      speaker: "Muru 7.8 – Performance en Espacios interactivos Virtuales",
      desc:
        "MURU 7.8 reúne a Lupita Chávez Pardo, Leandro Barbeito, Nic Motta y Claudia Valente, artistas/ investigadores que realizan prácticas reflexivas con dispositivos electro digitales." +
        "Guadalupe Chávez: Artista docente e Investigadora. Egresada de la Licenciada en Artes Plásticas de la Universidad de Guanajuato, México, con estudios de posgrado en Tecnología y Estética de las Artes Electrónicas, UNTREF." +
        "Claudia Valente: Artista, docente e investigadora. Magister en Tecnología y Estética de las Artes Electrónicas (UNTREF). Licenciada en artes visuales (UNA)." +
        "Nic Motta: Artista, docente e investigador. Estudió Artes Visuales (UNA) y cursa la Maestría en Tecnologías y Estéticas de las Artes Electrónicas (UNTREF)." +
        "Leandro Barbeito: Docente y desarrollador de dispositivos hardware programable para empresas y proyectos artísticos. Profesor de robótica educativa",
    },
    {
      time: "18:50",
      title: "Biotecnología",
      speaker: "ArgenBio : ¿qué son el ADN y los  genes?",
      desc:
        "María Luz Zapiola - Ingeniera en Producción Agropecuaria egresada de la UCA. Doctora en Filosofía (PhD) y Máster en Ciencias (MSc), de Oregon State University, EEUU. Responsable del Área Técnica de ArgenBio.",
    },
    {
      time: "19:00",
      title: "General",
      speaker:
        "Lanzamiento del libro “BioArte - Poéticas de lo viviente” de  Lucía Stubrin (primer libro de la temática en Argentina)",
      desc:
        "Ivana Tosti: Editora Ediciones UNL (Licenciada en Letras por la UNL y Directora Ediciones UNL)" +
        "Lucía Stubrin: Autora (Doctora en Teoría e Historia de las Artes por la UBA y Licenciada en Comunicación Social por la UNER, becaria posdoctoral del (CONICET), profesora universitaria de Semiótica (UNER) y Epistemología de las Artes Visuales (UNL))." +
        "Invitados: Natalia Matewecki, Flavia Costa y Daniel Lopez del Rincón",
    },
  ],
  // Miércoles 07 de Abril
  [
    {
      time: "15:00",
      title: "Biotecnología",
      speaker: "Ejemplos del Futuro",
      desc:
        "Modera: Tomás Oulton (Director de Objeto a - productora de Proyecto Bios)" +
        "Panelistas: Gabriel Vichera (Licenciado en Biotecnología, Doctorado en Ciencias Agropecuarias. Co-fundador y director científico de Kheiron Biotech); Juan Gregorio Hernandez (CEO myDNAmap) y Pablo Noseda (Licenciatura en Ciencias Biológicas con orientación Molecular Universidad CAECE - Director científico myDNAmap); Laura Correa (Licenciada en Ciencias Biológicas egresada de la FCEN de la UBA, División Bioingeniería de Laboratorios Craveri).",
    },
    {
      time: "16:00",
      title: "Academia",
      speaker: "Biotecnología Industrial.",
      desc:
        "Presenta: Ing. Guillermo Winnicki (Encargado de Academia en Proyecto Bios, Director Gestión Cultural UTN-FRBA). Panelistas: Dra. Marina de Escalada Pla (Doctora de la UBA, FCEyN área: Industrias. Ingeniera Química, UTN FRBA. Investigadora independiente del CONICET y Profesora de la  FCEyN-UBA. Directora de la Carrera de Especialización en Biotecnología Industrial. FCEyN-UBA e INTI; Lic. F. Fabian Nigro, Director Técnico de Biotecnología Industrial en INTI; Carolina Genevois (Lic. en Nutrición de la UNER, Mg. en Tecnología de los Alimentos de la UTN, y Dra. de la UBA en el área de Química Industrial).",
    },
    {
      time: "16:50",
      title: "Argenbio",
      speaker:
        "Cultivos transgénicos en Argentina y en el mundo, tipos y adopción",
      desc:
        "María Luz Zapiola - Ingeniera en Producción Agropecuaria egresada de la UCA. Doctora en Filosofía (PhD) y Máster en Ciencias (MSc), de Oregon State University, EEUU. ArgenBio",
    },
    {
      time: "17:00",
      title: "Arte",
      speaker: "Agar Art y Modelado Molecular",
      desc:
        "Panel Agar Art: Daniela Cejas (Dra. UBA en Microbiología, Investigadora CONICET y JTP de la UBA, ASM young ambassador) y Laura Echarren (Becaria Doctoral en Instituto de Biología Molecular y Celular de Rosario. Ganadora  People Choice en el concurso de Agart Art de la ASM en 2015)." +
        "Panel Modelado Molecular: Dr. Pablo Power (Investigador Independiente CONICET / Profesor Adjunto FFyB-UBA, Coordina la Subcomisión de Microbiología Celular y Molecular de la Asoc. Arg. de Microbiología), Federico Coscio (Investigador del Instituto de Morfología Comunicación y Diseño - Facultad de Arquitectura y Urbanismo- UCASAL - Artista plástico, fotógrafo y Geómetra." +
        "Modera: Gabriel Gutkind, Doctor en Farmacia y Bioquímica, Investigador Principal del Conicet, Senior Ambassador de la American Society of Microbiology (ASM).",
    },
    {
      time: "18:00",
      title: "Biotecnología",
      speaker: "Salud y Reproducción Animal",
      desc:
        " Modera: Daniel Salamone (Médico Veterinario UBA. Maestría en la Universidad de Saskatchewan, y doctorado en la Universidad de Massachusetts. Postgrado y beca de investigación en Japón. Ha producido el primer ternero de fecundación in vitro de argentina y los primeros bovinos clonados y transgénicos en América del Sur en 2001 y el caballo clonado en 2010" +
        "Panelistas: Dr. Claudio Prieto (Profesor Adjunto · ‎Universidad Nacional del Litoral - Facultad de Bioquímica y Ciencias Biológicas, Director de Biotecnofé) y Med. Vet. Dr. Luciano Cattaneo – Dr Andrés Wigdorovitz, (Director Científico BIOINNOVO SA, Centro de Investigación en Ciencias Veterinarias y Agronómicas, INTA - Vetanco/ Bioinnovo /INCUINTA). Dr Demian Bellido (Responsable de Unidad de Innovación Vetanco),",
    },
    {
      time: "18:50",
      title: "Performance",
      speaker: "Desarrollo de una obra colectiva de BioArte por Zoom",
      desc:
        "Federico N. Guerrero (Investigador de CONICET, Doctor en Ingeniería Electrónica), Tobias Albirosa (Diseñador Multimedial, estudia en Facultad de Artes de la UNLP) - Joaquín Fargas (Ingeniero y artista)",
    },
    {
      time: "19:00",
      title: "Arte",
      speaker: "Una historia [de la timeline] del BioArte",
      desc:
        "Natalia Matewecki: Doctora en Artes por la Universidad Nacional de La Plata (UNLP). Es docente e investigadora en la Facultad de Artes, UNLP y en el Departamento de Artes Audiovisuales, UNA. Desde el año 2000 investiga las relaciones entre arte, ciencia y tecnología. Del 2006 al 2012 fue becaria de investigación de la UNLP donde se especializó en bioarte. En el año 2008 realizó una residencia de investigación en el Laboratorio de Artes Biológicas «SymbioticA», University of Western Australia.",
    },
  ],
  // Jueves 08 de Abril
  [
    {
      time: "15:00",
      title: "Arte",
      speaker: "Biomateriales, Biosensado y Biosonorización",
      desc:
        "Moderador: Natalia Matewecki (Doctora en Artes, UNLP. Magíster en Estética y Teoría de las Artes, UNLP)" +
        "Panelistas: Verónica Bergottini (Doctora en Ciencias Biológicas), Ana Paula Hall (Artista, Licenciada y Profesora en Artes Plásticas), Oliverio Duhalde (Director Departamento de Arte Sonoro y Producción Musical de la UCA), Colectivo Electrobiota (Colectivo multiespecie y laboratorio de experimentación artística integrado por Gabriela Munguía y Guadalupe Chávez quienes investigan posibles expresiones y gestualidades interespecies).",
    },
    {
      time: "16:00",
      title: "Biotecnología",
      speaker: "Estado del arte del mejoramiento de cultivos y transgénicos",
      desc:
        "María Luz Zapiola - Ingeniera en Producción Agropecuaria egresada de la UCA. Doctora en Filosofía (PhD) y Máster en Ciencias (MSc), de Oregon State University, EEUU. Responsable del Área Técnica de ArgenBio.",
    },
    {
      time: "17:00",
      title: "Academia",
      speaker:
        "La era 3D - desde la nanotomografía atómica hasta los alimentos sustentables y la biofabricación de órganos",
      desc:
        "Modera: Ing. Guillermo Winnicki (Encargado de Academia en Proyecto Bios, Director Gestión Cultural UTN-FRBA)" +
        "Panelistas: Florencia Abinzano, Ingeniera Industrial en la UP, candidata doctoral en el laboratorio de Biofabricación del Profesor Jos Malda, Departamento de cirugía ortopédica, Hospital Universitario de Utrecht, Alberto L. D'Andrea (Profesor y Doctor en Ciencias Químicas por la UBA. Posgrado de Ingeniería Biomédica. Director de Nanotecnología y Nuevas Tecnologías de la Universidad CAECE Presidente de la Confederación Argentina de Biotecnología (CAB) y de la Confederación Argentina de Nanotecnología (CAN).",
    },
    {
      time: "18:00",
      title: "Performance",
      speaker: "MicRA: Arte Microscópico",
      desc:
        "El laboratorio de creación colectiva MicRA se basa en el desarrollo de interfaces expresivas a través de la experimentación microscópica y macroscópica con seres vivos, seres inertes y reacciones químicas. El grupo de trabajo está constituido por artistas provenientes de las artes plásticas, artes visuales, arte sonoras, artes electrónicas y bio arte; docentes, científicos y becarios de la UBA, la UCA, la Universidad Austral y el IBYME.",
    },
    {
      time: "18:40",
      title: "Academia",
      speaker: "UADE: El Himno Nacional en una bacteria",
      desc:
        "Federico Prada: Licenciado en Ciencias Biológicas de la Facultad de Ciencias Exactas y Naturales (UBA). Doctor en Ciencias de la UBA (Instituto Leloir). Decano de la Facultad de Ingeniería (UADE) y Director de las Licenciaturas en Bioinformática y Biotecnología (UADE).",
    },
    {
      time: "19:00",
      title: "Mesa Redonda Mixta",
      speaker: "Artistas científicos o Científicos artistas",
      desc:
        "Modera Guadalupe Diaz Constanzo (Directora Centro Cultural de la Ciencia)" +
        "Panelistas: Patricia Saragüeta (Ph.D. Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires. Investigadora Independiente, CONICET Area Biología Molecular y Celular. Directora del Instituto de Biología y Medicina Experimental  - IBYME), Daniel Corach (biólogo y genetista creador y Director del Servicio de Huellas Digitales Genéticas de la UBA), Ariel Wilner (Licenciado en Ciencias Biológicas por la UBA - MSc. en Genética por la HUJ y Dr. en Genética Molecular por UBA).",
    },
  ],
  // Viernes 09 de Abril
  [
    {
      time: "15:00",
      title: "Biotecnología",
      speaker: "Bioeconomía - Master Class",
      desc:
        "Fernando Vilella: Ingeniero agrónomo UBA, Director del Programa de Agronegocios y Alimentos, y Profesor a cargo de la Cátedra de Agronegocios de la Facultad de Agronomía de la UBA. Miembro de las Comisiones Directivas de MAIZAR, ETICAGRO, Asociación Argentina de Biocombustibles e Hidrógeno y la Fundación Pro-Antártida. Preside la Fundación Alimentos Argentinos. Ha sido Decano de la Facultad de Agronomía de la UBA; Subsecretario de Asuntos Agrarios de la Provincia de Buenos Aires y Miembro del Directorio de IAMA (International Food and Agribusiness Management Association Board of Directors)",
    },
    {
      time: "16:00",
      title: "Arte",
      speaker:
        "Visita virtual interactiva al laboratorio de Joaquin Fargas, taller de fabricación de Bioesferas y factoría de ADN",
      desc:
        "Joaquin Fargas: Ingeniero y artista cuyas obras son una combinación del arte, la ciencia y la tecnología. Gran divulgador de la ciencia y la tecnología desde el año 1988. Su obra más emblemática es el Proyecto Biosfera que actualmente se encuentra expuesto en Los Angeles Center for Digital Art, en California, Estados Unidos;​ Museo Contemporáneo de Mar del Plata, Buenos Aires, Argentina; Estación Correo Central del Subte de la Ciudad de Buenos Aires (Instalación urbana), entre otros.",
    },
    {
      time: "16:40",
      title: "Academia",
      speaker: "El estado del arte en la Bioinformática",
      desc:
        "Orador: Patricio Yankilevich (Licenciado en Ciencias de la Computación en la UBA. Master en Bioinformática y Neuroinformática en la Universidad de Edimburgo (2003). Doctorado en Biología Molecular en la Universidad Autónoma de Madrid (2011). Investigador Independiente CONICET, dirige la Plataforma Bioinformática del Instituto de Investigación en Biomedicina de Buenos Aires (IBioBA) - CONICET - Partner Institute of the Max Planck Society.",
    },
    {
      time: "17:00",
      title: "Academia",
      speaker: "BioArte en las Universidades",
      desc:
        "Modera: Lucía Stubrin (Doctora en Teoría e Historia de las Artes por la UBA y Licenciada en Comunicación Social por la UNER, becaria posdoctoral del Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET), profesora universitaria de Semiótica (UNER) y Epistemología de las Artes Visuales (UNL))." +
        "Panelistas: Mariela Yeregui (Directora de la Maestría en Tecnología y Estética de las Artes Electrónicas de la Untref : BioLab (Biolab | biolabmovil (wixsite.com)), Mg. Alejandra Marinaro (Laboratorio Latinoamericano de Bioarte alojado en la UAI) y Alejandra Portela Decana de la Facultad de Artes de la UMSA con la Diplomatura de Arte Robótico (Biorobótica)  (robótica (umsa.edu.ar)",
    },
    {
      time: "18:00",
      title: "Biotecnología",
      speaker: "Aceleradora Grid X y Start ups",
      desc:
        "Modera Grid X: Federico Marque (Graduado de Singularity University e Ingeniero industrial es emprendedor en biotecnología hace más de 10 años. Es socio en GRIDX, una company builder que crea e invierte en compañías de start ups biotecnológicas en Latinoamérica)" +
        "Panelistas: Milagros Graziani (Ingeniera Agrónoma - Country Managing Director en Beeflow, Carolina Baldi, (Doctora en Bioquímica, CEO de ALGAE+ Biotecnología) y Atilio Grimani (Abogado con posgrado de negocios en la IAE, CEO de Einsted)",
    },
    {
      time: "19:00",
      title: "General",
      speaker: "Cierre",
      desc:
        "Pablo Lapadula: Biólogo FADU UBA, Artista, miembro del Consejo Cultural de la Ciudad de Buenos Aires, Asesor Académico de Contenidos del Centro de Arte y Naturaleza, sede Ecoparque / Muntref y profesor de arte y ciencia de la Maestría en Estéticas Electrónicas, Universidad Nacional de Tres de Febrero.",
    },
    {
      time: "19:40",
      title: "General",
      speaker: "Conclusiones y despedida",
      desc:
        "Guadalupe Diaz Constanzo (Directora del Centro Cultural de la Ciencia)  y Objeto a (Productora de Proyectobios.com).",
    },
  ],
]

const EntryContainer = styled.div`
  background-color: ${props =>
    props.expanded ? props.theme.colors.greens[1] : "#fff"};
  display: flex;
  flex-direction: row;
  padding: 1em;
  margin: 0.75em 0;
  cursor: pointer;
  transition: background-color 300ms;

  & h1,
  & svg {
    color: ${props => props.expanded && "#fff"};
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TimeSpeakerContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Time = styled.h1`
  color: ${props => props.theme.colors.greens[1]};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 1.25rem;
  align-self: center;
`

const Bullet = styled(({ className }) => (
  <FontAwesomeIcon className={className} icon={faDotCircle} />
))`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.greens[1]};
  margin: 0.25em;
  margin-right: 0.5em;
`

const Speaker = styled.h1`
  color: ${props => props.theme.colors.greens[1]};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  align-self: center;
  margin-left: 2rem;
`

const Title = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 1.65rem;
  cursor: pointer;
  padding: 0.5em 0;
`

const EntryListContainer = styled.div`
  position: relative;
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const EntryList = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  height: 75vh;
  overflow-y: auto;
  width: 100%;

  &.entry-list-enter {
    opacity: 0;
  }
  &.entry-list-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &.entry-list-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.entry-list-exit-active {
    opacity: 0;
    transform: translateX(20%);
    transition: opacity 500ms ease-in, transform 500ms ease-in;
  }
`

const Detail = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.expanded ? "1.5em" : 0)};
  height: ${props => (props.expanded ? "100%" : 0)};
  opacity: ${props => (props.expanded ? 1 : 0)};
  overflow: hidden;
  transition: opacity 300ms;

  & > p {
    color: #fff;
    font-size: 0.875rem;
    flex-grow: 1;
    padding: 0 4em 0 0em;
  }
  & > img {
    height: 110px;
    width: 150px;
  }
`

const Entry = ({ time, speaker, title, detail }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <EntryContainer expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <Bullet />
      <InfoContainer>
        <TimeSpeakerContainer>
          <Time>{time.slice(0, 2)}hs</Time>
          <Speaker>{speaker}</Speaker>
        </TimeSpeakerContainer>
        <ActivityContainer>
          <Title>{title}</Title>
          <Detail expanded={expanded}>
            {/* <img src={placeholder} /> */}
            <p>{detail}</p>
          </Detail>
        </ActivityContainer>
      </InfoContainer>
    </EntryContainer>
  )
}

const DateTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const DateTab = styled.span`
  background-color: ${props =>
    props.selected ? props.theme.colors.greens[1] : "#000"};
  color: #fff;
  border-radius: 50px;
  padding: 0 0.5em;
  cursor: pointer;
  width: 9rem;
  text-align: center;
  font-weight: bold;
  transition: 300ms;
  font-style: italic;
  font-size: 1.5em;

  &:hover {
    background-color: ${props => props.theme.colors.greens[0]};
  }
`

const DateTabs = ({ days, value, onClick }) => (
  <DateTabsContainer>
    {days.map((day, i) => (
      <DateTab key={day} selected={value === i} onClick={() => onClick(i)}>
        {day}
      </DateTab>
    ))}
  </DateTabsContainer>
)

const Agenda = () => {
  const [day, setDay] = useState(0)

  const currentEvents = eventsPerDay[day]

  return (
    <>
      <DateTabs days={days} value={day} onClick={day => setDay(day)} />
      <EntryListContainer>
        <TransitionGroup>
          <CSSTransition key={day} timeout={500} classNames="entry-list">
            <EntryList>
              {currentEvents.map((event, i) => (
                <Entry
                  key={`${day}-${i}`}
                  time={event.time}
                  speaker={event.speaker}
                  title={event.title}
                  detail={event.desc}
                />
              ))}
            </EntryList>
          </CSSTransition>
        </TransitionGroup>
      </EntryListContainer>
    </>
  )
}

export default Agenda
