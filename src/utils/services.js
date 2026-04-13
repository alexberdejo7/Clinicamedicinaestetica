export const services = [
  {
    id: 'botox',
    name: 'Tratamiento con Toxina Botulinica',
    description: 'Prevención y tratamiento de arrugas de expresión mediante un tratamiento inyectable.',
    fullDescription: 'Toxina Botulinica es un tratamiento inyectable que ayuda a prevenir y tratar arrugas de la expresión. Las zonas posibles de tratamiento incluyen entrecejo, frente, área periocular (patas de gallo), bunny lines, lifting de ceja, masetero y sonrisa gingival. La dosis se mide por unidades y se personaliza según las necesidades del paciente.',
    icon: '../../img/assets/botox.webp',
    imageService: [ ], // Imágenes 
    imageList: '../../img/assets/11.webp',
    faqs: [
      {
        question: '¿Cuánto dura el tratamiento de toxina botulinica?',
        answer: 'El procedimiento dura aproximadamente 35 minutos, y los resultados se mantienen alrededor de 4 meses.'
      },
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer: 'Generalmente se requiere una sola aplicación, con una revisión a los 15 días.'
      },
      {
        question: '¿Soy candidata(o)?',
        answer: 'Los candidatos ideales son desde adultos jóvenes y personas que buscan prevenir los signos del envejecimiento sin cambiar drásticamente su apariencia. Se requiere una consulta previa para conocer tus necesidades' 
      },
      {
        question: '¿Cuáles son los cuidados posteriores al tratamiento?',
        answer: 'Se recomienda no exponerse al sol, no manipular el área tratada por 4 horas después de la aplicación, y mantener una posición vertical durante las 4 horas siguientes al tratamiento.'
      },
      
      
    ]
  },
  {
    id: 'depilacion-laser',
    name: 'Depilación Láser Diodo',
    description: 'Depilación a largo plazo con tecnologia de láser de diodo.',
    fullDescription: 'La depilación láser diodo utiliza un rayo de luz monocromática y unidireccional que ataca la melanina del folículo piloso hasta destruirlo. Se considera un tipo de depilación a largo plazo que puede llegar a ser definitiva. Utilizamos uno de los mejores láseres diodo de fibra óptica, que cuenta con un potente sistema de enfriamiento para una depilación confortable.',
    icon: '../../img/assets/laser-compress.webp',
    imageList: '../../img/assets/istock2.webp',  
    imageService: ['../../img/assets/depilacionprice.webp', '../../img/assets/zonaslaser.webp' ], // Imágenes
    faqs: [
      {
        question: '¿Cuál es el protocolo de tratamiento?',
        answer: 'El protocolo sugerido es de 10 sesiones espaciadas cada 30-45 días.'
      },
      {
        question: '¿Cuáles son los beneficios frente a IPL?',
        answer: 'El láser diodo es óptimo para tratar vello grueso y profundo, y es versátil, pudiendo aplicarse en diferentes tonos de piel, desde claros hasta oscuros.'
      },
      {
        question: '¿Qué cuidados debo tener antes del tratamiento?',
        answer: 'No broncearse al menos 15 dias antes de la cita. No usar cremas, desodorantes, maquillaje, perfumes el dia de tu sesion. Acudir rasurada con rastrilo o perfilador 24hrs antes. No venir menstruando (aumenta la sensibilidad)'
      },
      {
        question: '¿Qué cuidados debo tener después del tratamiento?',
        answer: 'Se recomienda no exponerse al sol, aplicar protector solar y aloe vera, y únicamente utilizar rastrillo para el rasurado en la(s) zona(s) tratada(s).'
      },
      
      {
        question: '¿Por que laser diodo?',
        answer: 'El laser con diodo es el mas utilizado y se muestra como la mejor opcion de depilacion definitiva, ya que gracias a su alta potencia el tiempo de disparo se reduce teniendo mayor efectividad en eliminacion del vello'
      }
      
    ]
  },

  {
    id: 'armonizacion-facial',
    name: 'Armonización Facial',
    description: 'Conjunto de técnicas para equilibrar las proporciones del rostro.',
    fullDescription: 'La armonización facial es un conjunto de técnicas que buscan equilibrar las proporciones y características del rostro del paciente para lograr una apariencia más estética y equilibrada. Los procedimientos más utilizados en una armonización pueden ser toxina botulínica, rellenos dérmicos, bioestimuladores, entre otros.',
    icon: '../../img/assets/cirugia-compress.webp',
    imageList: '../../img/assets/armoni.webp',
    faqs: [
      {
        question: '¿Cuánto dura el procedimiento?',
        answer: 'El tiempo del procedimiento varía entre 15 y 45 minutos, según la(s) zona(s) a tratar.'
      },
      {
        question: '¿Qué cuidados debo tener después del tratamiento?',
        answer: 'Se recomienda no exponerse al sol, no manipular el área tratada, aplicar protector solar y seguir las indicaciones específicas según los tratamientos realizados.'
      },
      {
        question: '¿El tratamiento se personaliza?',
        answer: 'Sí, el tratamiento se personaliza según las necesidades de cada paciente.'
      }
    ]
  },
  {
    id: 'bioestimuladores',
    name: 'Bioestimuladores ',
    description: 'Sustancias inyectables que estimulan la producción de colágeno en la piel.',
    fullDescription: 'Los bioestimuladores son sustancias inyectables utilizadas en procedimientos estéticos y médicos para estimular la producción de colágeno en la piel, proporcionando estructura, firmeza y elasticidad. Uno de los bioestimuladores más utilizados es la Hidroxiapatita cálcica.',
    icon: '../../img/assets/botox.webp',
    imageList: '../../img/istock3.webp',
    faqs: [
      {
        question: '¿Con qué frecuencia se puede aplicar el tratamiento?',
        answer: 'El tratamiento se puede reaplicar cada 12 meses.'
      },
      {
        question: '¿Cuánto duran los resultados?',
        answer: 'Los resultados pueden durar hasta 12 meses.'
      },
      {
        question: '¿Cuáles son los cuidados posteriores?',
        answer: 'Se recomienda no exponerse al sol y no manipular el área tratada durante las 4 horas posteriores a la aplicación.'
      }
    ]
  },
 
  
  {
    id: 'acido-hialuronico',
    name: 'Rellenos de Ácido Hialurónico',
    description: 'Tratamiento inyectable para dar volumen y mejorar diferentes áreas faciales.',
    fullDescription: 'Los rellenos de ácido hialurónico son un tratamiento inyectable utilizado para dar volumen, mejorar y corregir diferentes áreas faciales. Las áreas que pueden tratarse incluyen nariz, labios, pómulos, mentón, y zona malar, entre otras. Este tratamiento no solo mejora el contorno facial, sino que también puede corregir asimetrías y restaurar la armonía facial. Además, al ser biocompatible, el ácido hialurónico se integra perfectamente en los tejidos sin riesgo de rechazo.',
    icon: '../../img/assets/botox.webp',
    imageList: '../../img/assets/labios.webp',
    faqs: [
      {
        question: '¿Cuánto dura el procedimiento?',
        answer: 'El procedimiento dura aproximadamente 40 minutos.'
      },
      {
        question: '¿Cuánto tiempo duran los resultados?',
        answer: 'La duración de los resultados depende de la marca del relleno, pero generalmente es de 8 a 12 meses.'
      },
      {
        question: '¿Qué cuidados debo tener después del tratamiento?',
        answer: 'Se recomienda no exponerse al sol, no manipular el área tratada durante 24 horas, no aplicar frío o calor en la zona tratada, y mantener vigilancia durante 48 horas.'
      },
      {
        question: '¿Cuáles son las diferencias entre el "soft look" y el "full look?',
        answer: 'Soft Look: efecto natural de hidratacion en labios con volumen ligero.  Full Look: efecto rusian lips, volumen moderado alto en labios + hidratacion + definicion'
      },
    ]
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza Facial Hidra ',
    description: 'Limpieza facial grado médico estético no invasivo.',
    fullDescription: 'La limpieza facial hidra es un tratamiento grado médico estético no invasivo que limpia, exfolia e hidrata la piel del rostro. Se realiza en una sesión que combina diferentes cabezales para realizar varios pasos, como extracción de impurezas, exfoliación, ultrasonido, radiofrecuencia, martillo frío y vapor de ozono, entre otros.',
    icon: '../../img/assets/dermapen-compress.webp',
    imageList: '../../img/assets/hydrafacial.webp',
    imageService: ['../../img/assets/hidrafacialinf.webp'], // Imágenes
    faqs: [
      {
        question: '¿Con qué frecuencia se recomienda este tratamiento?',
        answer: 'Se recomienda una sesión cada mes o bimestral.'
      },
      {
        question: '¿Cuánto dura el procedimiento?',
        answer: 'El procedimiento dura entre 45 y 50 minutos.'
      },
      {
        question: '¿Qué cuidados debo tener después del tratamiento?',
        answer: 'Se recomienda no exponerse al sol, no manipular el área tratada y aplicar protector solar.'
      }
    ]
  },
  {
    id: 'dermapen',
    name: 'Microagujas',
    description: 'Tratamiento estético para mejorar la textura y el aspecto de la piel.',
    fullDescription: 'El Dermapen es un tratamiento estético que mejora la textura y el aspecto de la piel a través de micropunciones. También conocido como microneedling, estimula la producción de colágeno y elastina, ayudando a reafirmar y rejuvenecer la piel. Además, se pueden agregar diferentes activos que complementan el tratamiento, como vitamina C y ácido hialurónico.',
    icon: '../../img/assets/esteticos.webp',
    imageList: '../../img/assets/dermapen.webp',
    faqs: [
      {
        question: '¿Con qué frecuencia se recomienda este tratamiento?',
        answer: 'Se recomienda una sesión cada 7 o 15 días, según las necesidades de la piel de cada paciente.'
      },
      {
        question: '¿Cuánto dura el procedimiento?',
        answer: 'El procedimiento dura entre 45 y 50 minutos.'
      },
      {
        question: '¿Qué cuidados debo tener después del tratamiento?',
        answer: 'Se recomienda no exponerse al sol, no manipular el área tratada y aplicar protector solar.'
      }
    ]
  },
  

  {
    id: 'NCTF',
    name: 'Tratamiento Iluminador de Ojeras',
    description: 'Tratamiento inyectable para la renovación y revitalización de la zona de la ojera.',
    fullDescription: `El NCTF es un tratamiento inyectable diseñado para revitalizar y renovar la zona de la ojera mediante un cóctel de ingredientes activos que incluyen ácido hialurónico, 12 vitaminas, 23 aminoácidos, 6 minerales, 6 ácidos nucleicos, y 6 coenzimas. Proporciona hidratación, elasticidad, luminosidad y firmeza.

                      <p class="mt-4 font-neoteric"> Protocolo de Sesiones </p>
                      <ul class="mt-1 text-start text-balance">
                        <li><strong>Primera Fase:</strong> Se recomienda una serie de 3 sesiones cada 15 días.</li>
                        <li><strong>Fase de Mantenimiento:</strong> 2 sesiones mensuales de mantenimiento para prolongar los resultados.</li>
                      </ul>`,
    icon: '../../img/assets/esteticos.webp',
    imageList: '../../img/assets/ncft.webp',
    imageService: ['../../img/assets/ncft2.webp', '../../img/assets/ncft3.webp'],
    faqs: [
      {
        question: '¿Cuánto tiempo duran los efectos?',
        answer: 'Los efectos del tratamiento pueden durar de 6 a 12 meses, dependiendo de la persona, la edad y el cuidado posterior.'
      },
      {
        question: '¿Cuáles son los cuidados posteriores?',
        answer: 'Después del tratamiento, se recomienda evitar la exposición solar, utilizar protector solar en el área tratada, no manipular la zona de la ojera, y evitar el ejercicio el mismo día de la aplicación.'
      },
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer: 'Se sugiere un protocolo de 5 sesiones en total: 3 sesiones cada 15 días, seguidas de 2 sesiones mensuales para mantenimiento.'
      }
    ]
},
{
    id: 'Smartpeeling',
    name: 'Peeling Enzimaticos',
    description: 'Peeling enzimático para exfoliar, renovar y revitalizar la piel según la necesidad de cada paciente.',
    fullDescription: `Smartpeeling o Smartker es un peeling enzimático formulado para exfoliar, renovar y revitalizar la piel mediante una combinación de activos especializados. Existen cinco presentaciones diferentes según las necesidades individuales de cada paciente.

                      <p class="mt-4 font-neoteric"> Protocolo de Tratamiento </p>
                      <ul class="mt-1 text-start text-balance">
                        <li><strong>Sesiones:</strong> Se sugieren 5 sesiones, según las necesidades y el tipo de piel.</li>
                        <li><strong>Apoyo en Casa:</strong> Se recomienda combinar el tratamiento con productos de apoyo en casa o tratamientos complementarios.</li>
                      </ul>`,
    icon: '../../img/assets/cirugia-compress.webp',
    imageList: '../../img/assets/smartp.webp',
    imageService: ['../../img/assets/smarts.webp' ],
    faqs: [
      {
        question: '¿Cuánto tiempo duran los efectos?',
        answer: 'La duración de los efectos varía según el tipo de piel y la presentación utilizada; sin embargo, se recomienda una evaluación periódica para mantener los resultados.'
      },
      {
        question: '¿Cuáles son los cuidados posteriores?',
        answer: 'Es importante no exponerse al sol, evitar manipular la zona tratada después de la aplicación y aplicar protector solar diariamente.'
      },
      {
        question: '¿Cuántas sesiones se recomiendan?',
        answer: 'Se sugieren 5 sesiones para lograr los mejores resultados, además de productos de apoyo en casa para maximizar el efecto del peeling enzimático.'
      }
    ]
},
{
  id: 'Micropigmentacion',
  name: 'Micropigmentacion ',
  description: 'Procedimiento estético que mejora, define o recrea la forma y el color de las cejas.',
  fullDescription: `La micropigmentación medica es un procedimiento estético que consiste en la aplicación de pigmentos semipermanentes sobre la piel para mejorar, definir o recrear la forma y el color de las cejas. Existen tres técnicas principales:
                    <ul class="mt-3 text-balance">
                      <li><strong>Microblading:</strong> Ideal para un aspecto natural, crea trazos individuales que imitan el vello de la ceja.</li>
                      <li><strong>Ceja Híbrida:</strong> Combina microblading con un ligero sombreado para lograr más definición.</li>
                      <li><strong>Powder Brows:</strong> Aporta un efecto de cejas rellenas con un acabado difuminado y suave.</li>
                    </ul>

                    <p class="mt-4 font-neoteric"> Detalles del Procedimiento </p>
                    <ul class="mt-1 text-start text-balance">
                  <li><strong>Primera Sesión:</strong> Dura aproximadamente 2 horas e incluye el diseño inicial de la ceja.</li>
                  <li><strong>Retoques:</strong> Uno o dos retoques son necesarios después de un mes y medio para asegurar que el pigmento se asiente adecuadamente.</li>
                </ul>
                    
                    
                    `,

                    
  icon: '../../img/assets/ceja.webp',
  imageList: '../../img/assets/micro.webp',
  imageService: ['../../img/assets/micro1.webp', '../../img/assets/micro2.webp'],
  faqs: [
    
    {
      question: '¿Cuánto tiempo dura cada técnica?',
      answer: 'La duración del efecto de la micropigmentación depende de la técnica utilizada:    Microblading: Entre 6 y 8 meses. Ceja Híbrida: Entre 8 y 12 meses. Powder Brows: Entre 8 y 12 meses.'
               
    },
    {
      question: '¿Qué cuidados debo tener después del tratamiento?',
      answer: 'Para obtener los mejores resultados y evitar complicaciones, se recomienda: Usar un kit de cejas recomendado por el especialista. Evitar la exposición solar intensa. No aplicar maquillaje en el área de las cejas. Evitar piscinas y saunas durante los primeros 7 días.'
                
    },
    {
      question: '¿Es doloroso el procedimiento?',
      answer: 'La mayoría de las personas sienten solo una leve molestia, ya que se aplica anestesia tópica para reducir el dolor durante el tratamiento.'
    },
    {
      question: '¿Puedo maquillarme las cejas después del tratamiento?',
      answer: 'No se recomienda aplicar maquillaje en el área de las cejas durante al menos una semana, para permitir que el pigmento se asiente y la piel se recupere adecuadamente.'
    }
  ]
},
{
  id: 'Skinboosters',
  name: 'Skinboosters',
  description: 'Prevención y tratamiento de arrugas de expresión mediante un tratamiento inyectable.',
  fullDescription: `
    <div>
      <p class="mb-4">
        Los skinboosters son tratamientos estéticos mínimamente invasivos diseñados para mejorar la calidad, hidratación y luminosidad de la piel desde las capas más profundas. 
        A diferencia de los rellenos dérmicos, no tienen como objetivo dar volumen, sino revitalizar la piel y prevenir el envejecimiento prematuro.
      </p>

      <p class="mb-4">
        Existen distintas formulaciones de skinboosters. Entre los más innovadores se encuentran:
      </p>

      <div class="mb-6">
        <h4 class="font-semibold mb-2">✨ PDRN de Salmón (ácido poli-desoxirribonucleico)</h4>
        <p>
          El PDRN se extrae del ADN del salmón y actúa como un regenerador celular potente. 
          Estimula la producción de colágeno, mejora la elasticidad, reduce inflamación y favorece la reparación de tejidos. 
          Es ideal para pieles apagadas, con signos de envejecimiento o daño solar.
        </p>
      </div>

      <div class="mb-6">
        <h4 class="font-semibold mb-2">💧 Acido Hialuronico de bajo peso molecular </h4>
        <p>
          Es un skinbooster a base de ácido hialurónico y glicerol. 
          Su fórmula avanzada proporciona hidratación intensa, suaviza líneas finas y mejora la textura y elasticidad de la piel. 
          Está especialmente recomendado para personas jóvenes o para quienes desean un efecto “glow” sin recurrir a tratamientos agresivos.
        </p>
      </div>
    </div>
  `,
  icon: '../../img/assets/botox.webp',
  imageService: ['../../img/assets/skinsbost.webp',],
  imageList: '../../img/assets/skinbooster.webp',
  faqs: [
    {
      question: '¿Cuántas sesiones necesito para ver resultados?',
      answer: 'Generalmente, se recomiendan entre 2 a 3 sesiones, según las necesidades de la piel y la valoración medica. Los efectos son acumulativos y progresivos.'
    },
    {
      question: '¿Duele el tratamiento?',
      answer: 'El procedimiento es bien tolerado, y se puede utilizar anestesia tópica para mayor comodidad. Algunas personas pueden experimentar leve enrojecimiento o pequeños hematomas, que desaparecen en pocos días.'
    },
    {
      question: '¿A partir de qué edad se recomienda?',
      answer: 'A partir de los 25 años, cuando comienzan a disminuir los niveles naturales de colágeno y ácido hialurónico. Es ideal tanto como prevención del envejecimiento como para mejorar la apariencia de pieles más maduras.'
    }
    
  ]
},
{
  id: 'hollywood-peel',
  name: 'Hollywood Peel',
  description: 'Limpieza profunda, control de acné y efecto glow inmediato con láser y carbón activado.',
fullDescription: `<strong>El Hollywood Peel </strong>  es un tratamiento láser facial que limpia profundamente la piel, cierra poros, estimula colágeno, controla la producción de grasa y mejora el tono. Utiliza una combinación de carbón activado y láser ND:YAG para una exfoliación suave pero eficaz, que reduce impurezas, líneas finas, manchas y signos de fatiga, dejando una piel luminosa y uniforme.<br><br>

<strong>Conoce nuestro láser </strong><br>
En nuestra clínica contamos con la más alta tecnología, garantía de precisión, durabilidad y eficacia. Además, este equipo cuenta con certificación FDA, lo que avala su seguridad y eficacia según los más estrictos estándares internacionales.<br><br>

<strong>Principales beneficios:</strong><br>
- Tecnología de Vanguardia: Diseñado y fabricado en Alemania para ofrecer potencia y control superiores, con sistemas de enfriamiento continuo y protocolos personalizables.<br>
- Certificación FDA: La U.S. Food and Drug Administration ha validado su uso médico-estético, brindándote la tranquilidad de un equipo probado y regulado.<br>
- Rapidez y Versatilidad: Sesiones de 50 min, combinables entre sí, ideales para ajustarse a tu ritmo de vida.`,

  icon: '../../img/assets/esteticos.webp',
  imageList: '../../img/assets/holly.webp',
  imageService: ['../../img/assets/Hollywood-peel.mp4'],
  faqs: [
    {
      question: '¿Cuáles son sus beneficios?',
      answer: `
        • Limpia y reduce el tamaño poros.<br>
        • Reduce brillo graso y brotes de acné.<br>
        • Mejora la luminosidad y uniformidad del tono.<br>
        • Estimula colágeno superficial, suavizando líneas finas.<br>
        • Es indoloro y permite volver a las actividades al instante.
      `
    },
    {
      question: '¿Qué cuidados debo tener antes del tratamiento?',
      answer: `
        • Evitar bronceado y camas solares al menos 2 semanas.<br>
        • Suspender exfoliantes fuertes o retinoides 3-5 días antes.<br>
        • Llegar con el rostro limpio, sin maquillaje ni cremas.
      `
    },
    {
      question: '¿Qué cuidados debo tener después del tratamiento?',
      answer: `
        • Usar protector solar SPF 50 cada 3 h durante 1-2 semanas.<br>
        • Aplicar hidratante ligera y evitar exfoliaciones 48 h.<br>
        • No saunas, piscinas ni ejercicio intenso el mismo día.
      `
    }
  ]
},
{
  id: 'remocion-tatuaje',
  name: 'Remoción de Tatuaje',
  description: 'Eliminación progresiva y segura de tatuajes o micropigmentaciones con láser ND:YAG.',
  fullDescription: 'La remoción de tatuajes o micropigmentaciones en cejas se realiza mediante láser ND:YAG, el cual fragmenta los pigmentos sin dañar la piel circundante. Dependiendo del color del tatuaje, se elige una longitud de onda específica (1064 nm para tintas negras o azules, 532 nm para rojos y amarillos). Tras un disparo de prueba, se procede al tratamiento completo. Las sesiones duran entre 10 a 30 minutos y se programan cada 4 a 8 semanas. En promedio, se requieren hasta 10 sesiones para resultados efectivos.',
  icon: '../../img/assets/botox.webp',
  mediaType: "video", 
  imageList: '../../img/assets/tatuajes.webp',
  imageService: [''],
  faqs: [
    {
      question: '¿Cuál es el protocolo de tratamiento de remoción de tatuajes o micropigmentación en cejas?',
      answer: `• Se realiza una valoración del tatuaje y colores.<br>
• Se elige la longitud de onda adecuada:<br>
• 1064 nm para tintas negras o azules, 532 nm para rojos y amarillos<br>
• Se hace un disparo de prueba y luego se aplica el láser sobre todo el tatuaje.<br>
• Cada sesión dura de 10 a 30 minutos.<br>
• Las sesiones se espacian cada 4 a 8 semanas.<br>
• Generalmente se requieren hasta 10 sesiones para resultados óptimos.`
    },
    {
      question: '¿Cuáles son sus beneficios?',
      answer: `• Fragmenta la tinta sin dañar la piel alrededor.<br>
• Minimiza el riesgo de cicatriz en comparación con métodos abrasivos.<br>
• Permite tratar varios colores con el mismo equipo.<br>
• Apto para la mayoría de los fototipos cutáneos.<br>
• Tiempo de recuperación corto (aproximadamente 10 días).`
    },
    {
      question: '¿Qué cuidados debo tener antes del tratamiento?',
      answer: `• Evitar exposición solar y autobronceadores.<br>
• No tomar fármacos fotosensibilizantes ni anticoagulantes sin consulta médica.<br>
• Acudir con la piel limpia, sin cremas ni maquillaje.`
    },
    {
      question: '¿Qué cuidados debo tener después del tratamiento?',
      answer: `• Aplicar tratamiento reparador tópico según indicación.<br>
• No manipular el área tratada ni aplicar maquillaje.<br>
• Evitar piscinas, saunas y ejercicio intenso hasta la completa recuperación.<br>
• Usar protector solar SPF 50 en la zona tratada durante todo el proceso.`
    }
  ]
}


  
];