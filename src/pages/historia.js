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
  background-color: ${props => props.theme.colors.bg1};
`

const TimelineCont = styled.div`
  width: 100%;
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
  width: 100vw;
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
  margin: 6rem 6rem 6rem 15rem;
  width: 70%;
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
          investigación" publicada en las Actas del 14° Congreso Mundial de
          Semiótica Buenos Aires 2019, y también ha sido aceptado para sus
          publicación en la revista especializada Designis, el artículo
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
          denominado Mañanas de bioarte. Conversaciones con artistas que
          trabajan en el cruce del arte, la ciencia y la tecnología, donde
          dialogamos con artistas y colectivos artísticos femeninos, presentando
          una selección de sus obras bioartísticas realizadas a partir de
          distintas metodologías y poéticas. Durante el 2020 fueron
          entrevistadas Luciana Paoletti, Laura Olalde y el Colectivo
          Electrobiota (Gabriela Munguía y Guadalupe Chávez).
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
    </Layout>
  )
}

export default LineaDeTiempo
