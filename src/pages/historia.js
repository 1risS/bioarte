// acá va la implementación de una línea de tiempo

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import fondoHeader from "../images/Academia/academia_bg.jpg"
import HomeBoton from "../components/homeBoton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: ${props => props.theme.colors.bg1};
`

const TimelineCont = styled.div`
  width: 80vw;
  margin-top: 10rem;
`
const HistoriaHeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: 100%;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 4rem;
  margin-bottom: -2rem;
  width: 100%;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
`
const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 8rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 25vh;
  /*line-height: initial;*/
`
const Subtexto = styled.div`
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`
const SectionTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem 15rem 6rem 15rem;
  width: 100%;
  background-color: ${props => props.theme.colors.bg1};
`

const Titulo = styled.h1`
  font-family: ${props => props.theme.fontFamily.light};
  font-size: 26pt;
  color: #508f44;
  margin: 2rem 0rem 2rem 0rem;
`
const Sup = styled.sup`
  font-family: ${props => props.theme.fontFamily.light};
  font-size: 13pt;
  color: #508f44;
  margin: 2rem 0rem 2rem 0rem;
  vertical-align: super;
`

const Subtitulo = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: 16pt;
  color: #508f44;
  margin: 2rem 0rem 2rem 0rem;
`

const TextoBase = styled.h3`
  font-family: ${props => props.theme.fontFamily.light};
  font-size: 12pt;
  color: black;
  line-height: 15pt;
  text-align: justify;
`

const Destacado = styled.p`
  font-family: ${props => props.theme.fontFamily.light};
  font-size: 12pt;
  color: #508f44;
  line-height: 18pt;
  padding-left: 4rem;
  margin: 2rem 0rem 2rem 0rem;
  text-align: justify;
`

const Citas = styled.p`
  font-family: ${props => props.theme.fontFamily.light};
  font-size: 10pt;
  font-style: italic;
  color: #508f44;
  line-height: 15pt;
  margin: 4rem 0rem 2rem 0rem;
  text-align: justify;
`

const StyledA = styled.a`
  color: #508f44;
  font-weight: 600;
`

const LineaDeTiempo = () => {
  return (
    <Layout>
      <SEO title="Histora" />
      <Container>
        <HistoriaHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Acerca del Bioarte</Texto>
          <Subtexto>Hitos históricos y reflexiones</Subtexto>
        </HistoriaHeaderContainer>

        <TimelineCont>
          <iframe
            title="Timeline"
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1rs7WEGSPGYaGZ3zqiFY5bPqKAbPwRJEWYa3c81mSLzk&font=Default&lang=es&initial_zoom=2&height=650"
            width="100%"
            height="650"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder="0"
          ></iframe>
        </TimelineCont>
      </Container>
      <SectionTexto>
        <Titulo>
          Síntesis del proyecto Biosemiótica, arte y técnica <Sup>1</Sup>
        </Titulo>
        <TextoBase>
          El denominado bioarte ha sido mayormente estudiado desde la estética y
          la filosofía de la técnica, como un caso de colaboración
          interdisciplinaria entre artistas y científicos. Las transformaciones
          que trajo su práctica pueden asociarse con tres líneas principales:
          replanteos epistemológicos sobre la producción de conocimiento;
          discusiones ontológicas sobre la distinción vivo/no vivo (así como la
          creación de seres híbridos); y debates estéticos relacionados con la
          aparición de un nuevo formato de obra: la obra viva. En este sentido,
          la posibilidad de releer al bioarte en clave biosemiótica puede
          considerarse un aporte significativo dentro del campo de la
          comunicación y la cultura, en consonancia con el entramado
          científico-tecnológico que define la sensibilidad técnica de la
          contemporaneidad.<br></br>
          <br></br>
          El presente proyecto se propone reflexionar sobre la construcción del
          campo de la biosemiótica, como parte integrante de la gran disciplina
          propia de las ciencias de la comunicación, que es la semiótica.
          Recuperando los aportes de sus principales referentes teóricos
          (Charles S. Peirce, Jesper Hoffmeyer, Thomas Sebeok, Kallevi Kull,
          Jakob Von Uexküll, Iuri Lotman), buscamos reconstruir y aprehender el
          aparato conceptual que la sostiene. Desde esa mirada, entonces,
          intentamos realizar una lectura innovadora sobre las poéticas
          tecnológicas relacionadas con la manipulación de vida en el arte
          contemporáneo.<br></br>
          <br></br>
          Como mencionábamos, se trata de un proyecto de carácter eminentemente
          reflexivo, no obstante lo cual supone una extensa revisión
          bibliográfica que permite situar el problema a la altura de algunas
          discusiones actuales, dado que, como es de suponer, la indagación en
          el corpus biosemiótico resulta casi una novedad en la tradición de
          investigación de las facultades de humanidades y ciencias sociales en
          Argentina, más aún, si se logra articular como marco teórico de
          expresiones artísticas asociadas a la práctica contemporánea del cruce
          arte-ciencia- tecnologías de lo viviente.
        </TextoBase>
        <Subtitulo>Estado actual del conocimiento sobre el tema</Subtitulo>
        <TextoBase>
          Cabe pensar la ontología del signo como punto de contacto con la idea
          de ser que hasta el descubrimiento de las técnicas de manipulación
          genética, se distinguía naturalmente del no-ser. Los cambios
          simbólicos que supone la crisis del pensamiento binario a partir de la
          igualación ontológica de todos los entes del planeta, tiene su origen
          en el descubrimiento de la molécula de ADN y su construcción
          discursiva en tanto 'receta de la vida'.
          <br></br>
          <br></br>Pero la transferencia de información genética entre seres de
          distinta escala física así como la creación artificial de vida, no son
          los únicos focos tecnocientíficos que circulan entre la opinión
          pública. Existen otros procesos semióticos vinculados a áreas como la
          matemática, la física, la ingeniería nuclear, la informática, etc. que
          contribuyen a la naturalización de una determinada imagen de la
          ciencia, la técnica y la sociedad.
          <br></br>
          <br></br>El tratamiento mediático de los nuevos descubrimientos que se
          van dando a conocer en materia de ciencia y tecnología no es inocente.
          La ideología de los medios masivos de comunicación sobre estas
          problemáticas carga muchas veces con imaginarios que buscan paralizar
          el accionar de quienes no poseen el conocimiento específico que
          suponen estas investigaciones. De esta manera, se instauran líneas
          imaginarias que separan esferas de conocimiento por fuera de lo que la
          epistemología y la metodología de la ciencia hace tiempo rechazan.
          <br></br>
          <br></br>Por otra parte, no son sólo los medios masivos quienes
          contribuyen a la naturalización de sentidos que buscan configurar el
          rol que cada uno debe jugar en tanto especialista (o no) de una
          determinada área de estudio. La conciencia del lugar que nos
          corresponde dentro de la sociedad también es una operación del
          lenguaje que encontramos presenta en el ámbito de la investigación
          científica. En este sentido, es que puede resultar esclarecedor como
          ejercicio semiótico incorporar otras maneras de comunicación como las
          que genera el arte.
          <br></br>
          <br></br>Las relaciones entre arte y ciencia siempre formaron parte de
          la cultura del hombre. El Renacimiento fue el momento más alto de
          fusión entre ambas esferas al punto en que no se concebía la
          distinción entre artista, artesano, arquitecto, médico, anatomista,
          etc. Resumidamente, los siglos posteriores no tuvieron esa misma
          impronta de clasificación social y comenzaron a establecer
          separaciones virtuales de la mano de la especialización educativa.
          Entrando al Siglo XX, vemos cómo el impacto del movimiento
          impresionista (incorporación de teorías ópticas, ejercicio de la
          pintura fuera del estudio, temas cotidianos, entre otras cosas)
          repercute en las vanguardias europeas ocasionando la transformación de
          la idea de arte como objeto de contemplación retiniana pensado para su
          exposición en el museo. No sólo nuevas técnicas se incorporan sino
          también nuevas teorías de pensamiento que buscan vincular el arte con
          la vida. Después de la segunda guerra mundial estas transformaciones
          se radicalizan y rompen con la idea del arte asociado al ejercicio de
          la pintura y la escultura. La práctica artística adquiere una impronta
          conceptual, se desborda el canon y se incorporan elementos
          extradisciplinares.
          <br></br>
          <br></br>En Argentina podemos pensar en la producción de grupo CAYC
          (Centro de Arte y Comunicación) como pionero local en los cruces entre
          arte, ciencia y tecnología pero no es hasta finales de la década del
          noventa cuando los artistas resignan la tematización de cuestiones
          vinculadas a la esfera de la ciencia en general, para volcarse a la
          experimentación con los mismos materiales que utilizan los científicos
          en sus mismos lugares de trabajo: el laboratorio. Si pensamos en los
          cambios que produjo el descubrimiento del ADN en la ontología de la
          materia e incorporamos las prácticas de arte-ciencia como el bioarte
          -donde el artista y el científico trabajan en forma colaborativa más
          allá de poseer distintas trayectorias educativas-, nos preguntamos
          cómo desde la semiótica podemos identificar estos deslizamientos que
          trastocan operaciones de sentido naturalizadas tanto en arte como en
          ciencia.
        </TextoBase>
        <Subtitulo>La semióloga Silvia Barei sostiene que:</Subtitulo>
        <Destacado>
          Articular Semiótica de la Cultura y Biosemiótica a partir de la
          categoría teórica de semiosfera, permite analizar el modo en que el
          ser humano se vincula con el mundo natural y fundamentalmente, de qué
          manera una competencia distintiva de la especie como lo es el
          lenguaje, le ha permitido un tipo de desarrollo cognitivo cuya
          capacidad para la referencia simbólica es la definitiva marca de
          separación con el resto de los seres vivos del planeta. (Barei, 2016:
          128)
        </Destacado>
        <TextoBase>
          Esta relocalización de lo humano en el mundo de la vida va en línea
          con la igualdad óntica que mencionábamos al comienzo gracias a la
          instalación del paradigma de la biología molecular y con las
          posibilidades de pensar al arte, única herramienta expresiva propia de
          la especie, como actualizadora y problematizadora de sentidos en
          definición y disputa. Al respecto, Iuri Lotman señala:
        </TextoBase>
        <Destacado>
          La construcción secundaria de la realidad por medio del arte… revive
          en nuestra conciencia, nuestra experiencia de mundo de una manera
          doble como si recreara en nosotros la curiosidad intelectual y
          emocional de un Adán mirando el mundo por primera vez. (Lotman,
          2013:202)
        </Destacado>
        <TextoBase>
          Mirar el 'texto artístico' tecnológico contemporáneo en clave
          biosemiótica es quizás una de las tareas pendientes en el ámbito de
          trabajo de las humanidades y las ciencias sociales, especialmente en
          el cruce de la semiótica con las ciencias de la comunicación.<br></br>
          <br></br>
          El recorrido planteado nos lleva a la pregunta sobre si el uso
          artístico de conocimientos científicos -tanto de las ciencias
          biológicas, la informática, la física, la robótica, etc. en el
          contexto de las sociedades de control (Deleuze, 1999)- puede ser
          analizado desde la transformación de la categoría moderna del Ser, a
          la luz de corrientes contemporáneas semióticas que discuten la
          dimensión ontológica de todo artificio.<br></br>
          <br></br>
          Asimismo, nos preguntamos si la práctica artística contemporánea que
          experimenta con los mismos materiales que los científicos puede
          resignificarse en términos políticos asumiendo un nuevo rol en la
          disputa por la definición de lo vivo y la visibilización de los
          procedimientos que forman parte de la esfera de producción de
          conocimiento tradicional.<br></br>
          <br></br>
          Por otra parte, en función de las opciones humanistas y poshumanistas
          que pueden adoptar las poéticas tecnológicas de lo viviente, ¿cuáles
          son las condiciones actuales de sentido en las que lo 'casi-vivo'
          podría convertirse en una categoría semiótica?
        </TextoBase>
        <Subtitulo>Resultados obtenidos</Subtitulo>
        <TextoBase>
          Antes la ausencia de antecedentes de investigación en la UNER sobre el
          estudio de este problema, que combina saberes provenientes de la
          semiótica, la biología y la teoría e historia del arte, se ha logrado
          conformar una selección significativa de material bibliográfico que
          además de alimentar las reflexiones propias de este proyecto permiten
          continuar con ulteriores investigaciones sobre el tema, probablemente
          en base a otros autores.<br></br>
          <br></br>
          Asimismo, en el marco del PID Novel N° 3180 hemos participado con la
          ponencia "Lecturas del bioarte en clave semiótica: avances de
          investigación" publicada en las <StyledA href="https://iass-ais.org/proceedings2019/">Actas</StyledA> del 14° Congreso Mundial de
          Semiótica Buenos Aires 2019, y también ha sido aceptado para sus
          publicación en la revista especializada <StyledA href="http://www.designisfels.net/">Designis</StyledA>, el artículo
          "Biosemiótica y las explosiones de sentido del bioarte" (en prensa).
          <br></br>
          <br></br>
          De modo consecuente a la perspectiva estudiada y al tema elegido
          (lecturas biosemióticas de poéticas tecnológicas asociadas a lo
          viviente), valoramos el espacio de discusión e intercambio grupal de
          experiencias de lectura y escritura dentro del grupo de investigación.
          <br></br>
          <br></br>
          Asimismo, a modo de actividad de divulgación y buscando fomentar fuera
          del ámbito académico también la socialización y reflexión sobre el
          tema en cuestión, llevamos adelante un ciclo de charlas virtuales
          denominado <StyledA href="https://www.fcedu.uner.edu.ar/?p=46456">Mañanas de bioarte</StyledA>. Conversaciones con artistas que
          trabajan en el cruce del arte, la ciencia y la tecnología, donde
          dialogamos con artistas y colectivos artísticos femeninos, presentando
          una selección de sus obras bioartísticas realizadas a partir de
          distintas metodologías y poéticas. Durante el 2020 fueron
          entrevistadas <StyledA href="https://www.youtube.com/watch?v=ydg-2uQZKvU">Luciana Paoletti</StyledA>, <StyledA href="https://www.youtube.com/watch?v=RJsjM2GEykE">Laura Olalde</StyledA> y el <StyledA href="https://www.youtube.com/watch?v=ABPacUtjm0Q&t=615s">Colectivo
          Electrobiota</StyledA> (Gabriela Munguía y Guadalupe Chávez).
        </TextoBase>
        <Citas>
          Citas:<br></br>
          Barei, S. (2016) "Semiosferas: de la Semiótica de la Cultura a la
          Biosemiótica, articulaciones" en Intexto, Porto Alegre, UFRGS, n. 37,
          p. 118-131, set/dez. Lotman, I.<br></br>
          <br></br>
          1. Proyecto de Investigación Novel N°3180, Facultad de Ciencias de la
          Educación, Universidad Nacional de Entre Ríos. Directora: Lucía
          Stubrin. Integrantes: M. Juliana Cattaneo, M. Laura Rosell y Nélida
          Zubillaga.
        </Citas>
      </SectionTexto>
      <SectionTexto>
        <Titulo>
          Síntesis del artículo <StyledA href="https://www.researchgate.net/publication/321927663_El_poder_reunificador_de_la_biotecnologia_Reflexiones_en_torno_a_la_conformacion_de_un_espacio_colaborativo_entre_arte_y_ciencia">"El poder reunificador de la biotecnología. Reflexiones en torno a la conformación de un espacio colaborativo entre arte y ciencia"</StyledA>
        </Titulo>
        <TextoBase>
          Dentro de lo que podemos reconocer como las condiciones de posibilidad del cruce arte y ciencia que supone el bioarte, la cuestión del método resulta de capital importancia.
          Si pensamos en artistas invadiendo laboratorios debemos pensar en que además de las cuestiones epistemológicas que han flexibilizado los límites disciplinarios y que han reorganizado el universo del intercambio de conocimientos incorporando actores de lo más diversos, algo debe pasar en el orden de lo práctico, de la técnica, del arte de producir que hermana ambas esferas.
          Desde el punto de vista de la biología, podemos rastrear el reconocimiento del uso de protocolos (no de métodos) basado en la aplicación continua de técnicas donde el azar se ha incorporado como parte de la explicación de los resultados; esta forma experimental de proceder es similar a la que utiliza el arte que viene sufriendo, desde hace más de medio siglo, transformaciones que dificultan su conceptualización.
          La apertura hacia nuevos horizontes de conocimiento, junto con la incorporación técnica que eso trae aparejado, ha dado lugar a la aparición de artistas -en condiciones de manipular los mismos elementos que utilizan los científicos- en los laboratorios. El uso de protocolos -guías de experimentos- puede ser utilizado tanto por el arte como por la ciencia.
          En el caso de esta última, los mismos se combinan persiguiendo un fin epistemológico vinculado a la producción de un conocimiento nuevo, ya sea técnico, teórico o instrumental (bienes y servicios). En el caso del arte, no existe la obligación de obtener un resultado innovador. Esto es algo que diferencia a ambas maneras de crear pero que, al mismo tiempo, las emparenta, dado que demuestra la ausencia de un determinismo en la metodología de trabajo utilizada. Es por ello también que puede suceder que el arte produzca conocimiento científico. Así como que la ciencia desarrolle una mirada estética sobre su propia práctica y pueda capitalizar esas reflexiones en función del desarrollo de una investigación más compleja. Los márgenes de libertad que cada uno posee, y que construimos a partir de una visión moderna donde el arte y la ciencia constituyen esferas autónomas y aisladas de las demás, se potencian al momento del intercambio interdisciplinar que supone el bioarte -y que, desde la perspectiva de la historia de las ciencias de la vida, habilitó la biotecnología. Son significativos los casos en los que obras de arte creadas en conjunto por artistas y científicos han producido giros en las investigaciones de laboratorio. Asimismo, los niveles de experimentación orientados por la curiosidad del artista han generado resultados inexplicables para la ciencia. Instituciones como Symbiotica (Australia), Biolab (Argentina), Incubator Art Lab (Canadá), BioArt Laboratories (Holanda) y artistas como Eduardo Kac (Brasil-EEUU), Paul Vanouse (EEUU), Marta de Menezes (Portugal), Joaquín Fargas (Argentina) entre muchísimos otros exponentes de la "vanguardia biológica"<Sup>1</Sup>,
          han puesto en jaque la construcción de conocimiento tradicional operando desde dentro de la lógica científica pero incorporando la mirada inmaculada de quien posee una formación alternativa. Transcurrida más de una década desde su oficialización, es imposible pensar en la aparición de una nueva sensibilidad estética como el bioarte sin la construcción interdisciplinaria del campo de la biotecnología. En este contexto los artistas y los científicos pueden complementarse armoniosamente, sin anularse. Esto se debe a que, como hemos visto, las trayectorias de cada una son disímiles y están cargadas de imaginarios y maneras diferentes de intervenir en la realidad.
          No es fácil encontrar el equilibrio, pero la práctica del bioarte da muestras de que es posible pensar en una convivencia pacífica ente actores diversos que contagie y derribe, definitivamente, las fronteras histórico-políticas que han limitado el desarrollo de una forma de investigar más compleja, es decir, más humana.
        </TextoBase>
        <Citas>
          Citas:
          1.  Stubrin, Lucía. "Aportes para el estudio de la vanguardia biológica latinoamericana" en Revista Nómadas. N° 40. Bogotá. Universidad Central. Instituto de Estudios Sociales Contemporáneos. 2014, págs. 131-143. <StyledA href="http://www.ucentral.edu.co/images/editorial/nomadas/docs/40-8s-aportes-para-el-estudio-de-la-vanguardia.pdf">Descargar</StyledA>. Fecha de consulta: diciembre 2015.
        </Citas>
      </SectionTexto>
    </Layout>
  )
}

export default LineaDeTiempo
