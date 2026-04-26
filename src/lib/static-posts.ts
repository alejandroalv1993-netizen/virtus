export interface StaticPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const staticPosts: StaticPost[] = [
  {
    slug: "pancracio-forja-guerrero",
    title: "Pancracio: La Forja del Guerrero Absoluto",
    excerpt:
      "Fuerza, técnica y voluntad. Exploramos el arte marcial más brutal de la antigua Grecia y su legado en la disciplina moderna.",
    date: "25 de Abril, 2026",
    category: "Disciplina",
    image: "/images/bg-habitos.webp",
    content: `
<p class="lead" style="font-size:1.25rem;line-height:1.7;color:#1a1a1a;font-family:var(--font-cormorant),serif;">
  En los estadios de Olimpia, hace más de dos mil quinientos años, dos hombres entraban al polvo con una sola ley: no había leyes. El pancracio —<em>pankration</em>, de <em>pan</em>, todo, y <em>kratos</em>, fuerza o poder— era el encuentro más temido y respetado de los Juegos Olímpicos de la Antigüedad. No era brutalidad sin forma. Era la destilación de todo lo que un hombre podía ser.
</p>

<h2>El origen de una filosofía en combate</h2>

<p>Los griegos no separaban el cuerpo del espíritu de la misma forma en que lo haría la modernidad. Entrenarse en el pancracio no era simplemente aprender a golpear o a derribar: era participar de una tradición que los conectaba con Heracles y Teseo, los dos héroes mitológicos a quienes se atribuye la invención del arte. Heracles lo habría empleado para vencer al León de Nemea. Teseo, para derrotar al Minotauro en el laberinto. El pancracio, desde su origen, era cosa de hombres que se enfrentaban a lo imposible.</p>

<p>En los Juegos, el pancracio era el evento culminante. Llegaba cuando el atletismo puro —la carrera, el salto, el lanzamiento— ya había demostrado la velocidad y la potencia. El pancracio exigía algo más: la capacidad de adaptarse, de sufrir, de pensar bajo presión extrema. Se permitía golpear, lanzar, asfixiar, dislocar. Solo se prohibía morder y arrancar los ojos. Todo lo demás era legítimo.</p>

<blockquote style="border-left:3px solid #9d824d;padding:1rem 1.5rem;margin:2rem 0;font-style:italic;font-family:var(--font-cormorant),serif;font-size:1.35rem;color:#555;">
  "Ningún arte es tan difícil como el de aprender a sufrir bien." — Séneca
</blockquote>

<h2>El combate como escuela del carácter</h2>

<p>Lo que distinguía al pancraciasta no era el tamaño de sus músculos sino la arquitectura de su voluntad. Los griegos tenían una palabra para ese estado: <em>kartería</em>, la resistencia paciente ante el dolor y la adversidad. El entrenamiento no buscaba producir máquinas de guerra, sino hombres que hubieran mirado al sufrimiento a los ojos y hubieran decidido, conscientemente, continuar.</p>

<p>Arrichion de Figalia ganó su tercer título olímpico en el año 564 a.C. de una manera que la historia no ha podido olvidar: murió en el combate, pero en el momento de morir, la presión de sus últimas fuerzas obligó a su rival a rendirse. Los jueces otorgaron la corona al cadáver. No hubo jamás un campeón más celebrado. No porque ganara siendo invencible, sino porque ganó siendo mortal y eligiendo, hasta el último aliento, no rendirse.</p>

<p>Ese es el legado que el pancracio nos lega: la victoria no siempre es sobre el adversario. A veces la victoria es sobre uno mismo. Sobre el instinto de parar, de protegerse, de buscar la salida más cómoda.</p>

<h2>Técnica y estrategia: la mente dentro del cuerpo</h2>

<p>El pancracio comprendía dos fases diferenciadas. La primera, <em>ano pankration</em>, se desarrollaba de pie: golpes con los puños, patadas, proyecciones. La segunda, <em>kato pankration</em>, llevaba el combate al suelo, donde las llaves de estrangulación y los controles articulares decidían el resultado. Un pancraciasta completo dominaba ambas dimensiones.</p>

<p>Lo fascinante desde un punto de vista técnico es que los griegos entendieron, siglos antes que cualquier arte marcial moderno, que la versatilidad era superior a la especialización. Un luchador solo que llegara al suelo era vulnerable al hombre que sabía golpear. Un boxeador brillante que ignorara el grappling era derribado y sometido. La integración era la única respuesta honesta a la complejidad real del combate.</p>

<p>Esta lógica trasciende el estadio. En cualquier dominio de la vida —los negocios, la creación, el liderazgo— el hombre que domina un solo registro es frágil. La verdadera competencia es aquella que puede cambiar de terreno sin perder la compostura.</p>

<h2>El pancracio hoy: un espejo de lo que perdimos y podemos recuperar</h2>

<p>Las artes marciales mixtas modernas son, en muchos sentidos, la reencarnación del pancracio. Pero hay una diferencia fundamental en la cultura que las rodea. Los griegos no separaban el entrenamiento físico de la formación moral. El gimnasio —<em>gymnasion</em>— era también un espacio filosófico. Allí discutían Sócrates y sus discípulos. Allí se forjaban ciudadanos, no solo atletas.</p>

<p>Hoy hemos separado el cuerpo del carácter. Vamos al gimnasio para vernos bien, no para ser mejores. Entrenamos como si el cuerpo fuera un objeto de consumo y no el vehículo de nuestra voluntad.</p>

<p>El pancracio nos recuerda que el entrenamiento es un acto ético. Que cada repetición, cada sesión donde decidimos aparecer aunque no tengamos ganas, cada vez que elegimos el camino difícil es una declaración de quiénes queremos ser. No en el estadio. En la vida.</p>

<h2>La herencia que debemos reclamar</h2>

<p>No necesitas convertirte en luchador. Pero sí debes encontrar tu pancracio: esa disciplina que te exija más de lo que crees poder dar, que te ponga en contacto con tus límites reales, que te enseñe la diferencia entre lo que dices que eres y lo que demuestras ser cuando la situación aprieta.</p>

<p>Los hombres que se forjaron en la arena no eran superhombres. Eran hombres comunes que eligieron, repetidamente, lo extraordinario. Eso es todo lo que el pancracio pide. Y todo lo que la vida, en el fondo, siempre ha pedido.</p>

<p style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(0,0,0,0.08);font-size:0.85rem;color:#888;font-style:italic;">
  Virtus · Disciplina · Editorial N° 01
</p>
    `.trim(),
  },
  {
    slug: "virtus-identidad-proposito",
    title: "Virtus: Identidad, Tradición y Propósito",
    excerpt:
      "Nuestra razón de ser. Definimos los pilares de la masculinidad virtuosa en un mundo que ha olvidado sus raíces.",
    date: "24 de Abril, 2026",
    category: "Identidad",
    image: "/images/issue1.webp",
    content: `
<p class="lead" style="font-size:1.25rem;line-height:1.7;color:#1a1a1a;font-family:var(--font-cormorant),serif;">
  <em>Virtus</em>. La palabra tiene veintisiete siglos de historia y apenas cuatro letras. En el latín clásico designaba lo que hacía a un hombre verdaderamente hombre: no la fuerza bruta, no el poder sobre otros, sino la excelencia de carácter en todas sus dimensiones. Coraje, sí. Pero también prudencia, justicia, templanza. Un ideal total. Una exigencia sin fin.
</p>

<p>Esta publicación lleva ese nombre porque creemos que el mundo actual necesita urgentemente volver a hacerse esa pregunta: ¿qué significa ser un hombre de verdad? No en términos de género o de política, sino en términos de carácter, de compromiso, de legado.</p>

<h2>El problema que nadie quiere nombrar</h2>

<p>Vivimos en una época que ha confundido la ausencia de virtud con la liberación. Se ha demolido el modelo antiguo —con sus defectos reales, con sus excesos que merecían corrección— pero no se ha construido nada en su lugar. El resultado no es la libertad. Es la desorientación.</p>

<p>Los hombres jóvenes de hoy crecen sin mapas. Sin modelos claros. Sin una tradición viva que les diga: esto importa, esto vale la pena, este es el camino difícil pero verdadero. Las instituciones que transmitían ese conocimiento —la familia extendida, la comunidad religiosa, los gremios y las fraternidades— se han debilitado o han desaparecido. Y el vacío ha sido llenado por la cultura del entretenimiento, que no exige nada, o por ideologías que solo saben destruir.</p>

<blockquote style="border-left:3px solid #9d824d;padding:1rem 1.5rem;margin:2rem 0;font-style:italic;font-family:var(--font-cormorant),serif;font-size:1.35rem;color:#555;">
  "El hombre que no tiene nada por lo que valga la pena morir no es apto para vivir." — Martin Luther King Jr.
</blockquote>

<h2>Por qué la tradición y no la nostalgia</h2>

<p>Cuando hablamos de tradición en Virtus, no hablamos de recrear el pasado. El pasado tenía sus propias sombras, y sería deshonesto ignorarlas. Hablamos de algo diferente: de acceder a la sabiduría acumulada de generaciones que enfrentaron los mismos problemas humanos fundamentales —la muerte, el miedo, el fracaso, la tentación— y dejaron consignadas sus respuestas en la filosofía, en la literatura, en las formas del arte y en los códigos de conducta.</p>

<p>Marco Aurelio escribiendo sus <em>Meditaciones</em> en mitad de una campaña militar. Séneca reflexionando sobre la brevedad del tiempo mientras administraba el mayor imperio de su época. Montaigne retirándose a su torre para pensar con honestidad sobre qué significa vivir bien. Estos hombres no son figuras de museo. Son interlocutores. Tienen algo que decirle a cualquier hombre del siglo XXI que tenga la humildad de escuchar.</p>

<p>La tradición no es el enemigo del pensamiento crítico. Es su condición de posibilidad. Solo quien conoce lo que vino antes puede evaluar con lucidez lo que existe hoy y elegir con libertad lo que construirá mañana.</p>

<h2>Los tres pilares de Virtus</h2>

<p><strong>Identidad.</strong> Quién eres cuando nadie te mira. Qué principios guían tus decisiones cuando no hay recompensa ni castigo inmediatos. La identidad no es lo que publicas ni lo que afirmas ser: es la suma de tus actos repetidos, de tus hábitos, de las cosas a las que dedicas tu tiempo y tu atención. En Virtus creemos que la identidad no se descubre, se construye. Y se construye con disciplina, con reflexión y con la disposición a enfrentar lo que somos antes de aspirar a lo que queremos llegar a ser.</p>

<p><strong>Tradición.</strong> El conjunto de respuestas que la humanidad ha elaborado, a lo largo del tiempo, a las preguntas que nunca cambian. Qué merece nuestra lealtad. Cómo honrar a los que vinieron antes. Cómo transmitir algo de valor a los que vendrán después. La tradición no es el pasado congelado: es el pasado vivo, en conversación permanente con el presente. Ignorarla no nos hace más libres. Nos hace más pobres.</p>

<p><strong>Propósito.</strong> La convicción de que la propia vida tiene una dirección que vale la pena seguir. No en el sentido de una misión grandiosa y espectacular —esa es la fantasía que venden los motivadores de Instagram—, sino en el sentido de una vida orientada hacia algo más grande que el propio placer o comodidad inmediatos. Un oficio ejercido con maestría. Una familia protegida y guiada. Una comunidad a la que se aporta más de lo que se consume. Un arte cultivado con seriedad. Cualquiera de estas cosas puede ser suficiente. Lo que no es suficiente es la deriva.</p>

<h2>A quién va dirigida esta publicación</h2>

<p>Virtus no es para todo el mundo, y no pretende serlo. Va dirigida al hombre que siente que algo falta, pero que aún no sabe exactamente qué. Al que ha tenido éxito en los términos que el mundo define como éxito y se ha encontrado, de todas formas, con un cierto vacío. Al joven que busca modelos distintos a los que le ofrece la cultura de masas. Al padre que quiere transmitir algo verdadero a sus hijos pero no siempre sabe cómo articularlo. Al hombre que lee, que piensa, que exige de sí mismo más de lo que los demás le exigen.</p>

<p>No pedimos que estés de acuerdo con todo lo que escribimos. Pedimos que lo leas con seriedad, que lo discutas si quieres discutirlo, y que te hagas las preguntas que quizás llevas tiempo evitando.</p>

<h2>El nombre como compromiso</h2>

<p>Llamarse Virtus es comprometerse con un estándar. No el estándar de la perfección —que es inalcanzable y por lo tanto inútil como guía práctica—, sino el estándar de la excelencia honesta: hacer las cosas bien, con cuidado, sin atajos, sabiendo que el proceso importa tanto como el resultado.</p>

<p>Cada texto que publiquemos en estas páginas es un intento de estar a la altura de ese nombre. No siempre lo lograremos. Pero el intento, mantenido con constancia y sin autocomplacencia, es ya en sí mismo una forma de virtud.</p>

<p>Bienvenido a Virtus.</p>

<p style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(0,0,0,0.08);font-size:0.85rem;color:#888;font-style:italic;">
  Virtus · Identidad · Editorial N° 01
</p>
    `.trim(),
  },
];

export function getStaticPost(slug: string): StaticPost | undefined {
  return staticPosts.find((p) => p.slug === slug);
}
