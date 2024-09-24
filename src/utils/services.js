export const services = [
  {
    id: 'botox',
    name: 'Botox o Baby Botox',
    description: 'Prevención y tratamiento de arrugas de expresión mediante un tratamiento inyectable.',
    fullDescription: 'El Botox es un tratamiento inyectable que ayuda a prevenir y tratar arrugas de la expresión. Las zonas posibles de tratamiento incluyen entrecejo, frente, área periocular (patas de gallo), bunny lines, lifting de ceja, masetero y sonrisa gingival. La dosis se mide por unidades y se personaliza según las necesidades del paciente.',
    icon: '../../img/depilacion.png',
    imageService: ['../../img/assets/botox1.webp', '../../img/assets/botoxfaq.webp'], // Imágenes 
    imageList: '../../img/assets/11.webp',
    faqs: [
      {
        question: '¿Cuánto dura el tratamiento de Botox?',
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
    fullDescription: 'La depilación láser diodo utiliza un rayo de luz monocromática y unidireccional que ataca la melanina del folículo piloso hasta destruirlo. Se considera un tipo de depilación a largo plazo que puede llegar a ser definitiva. Utilizamos Coolite Evo, uno de los mejores láseres diodo de fibra óptica, que cuenta con un potente sistema de enfriamiento para una depilación confortable.',
    icon: '../../img/depilacion.png',
    imageList: '../../img/assets/depilacion.webp',
    imageService: ['../../img/assets/laser.webp', '../../img/assets/depilacion.JPG'], // Imágenes
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
    id: 'bioestimuladores',
    name: 'Bioestimuladores',
    description: 'Sustancias inyectables que estimulan la producción de colágeno en la piel.',
    fullDescription: 'Los bioestimuladores son sustancias inyectables utilizadas en procedimientos estéticos y médicos para estimular la producción de colágeno en la piel, proporcionando estructura, firmeza y elasticidad. Uno de los bioestimuladores más utilizados es la Hidroxiapatita cálcica (Radiesse).',
    icon: '../../img/depilacion.png',
    imageList: '../../img/istock3.jpg',
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
    fullDescription: 'Los rellenos de ácido hialurónico son un tratamiento inyectable utilizado para dar volumen, mejorar y corregir diferentes áreas faciales. Las áreas que pueden tratarse incluyen nariz, labios, pómulos, mentón, y zona malar, entre otras.',
    icon: '../../img/depilacion.png',
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
      }
    ]
  },
  {
    id: 'lipoenzimas',
    name: 'Lipoenzimas',
    description: 'Tratamiento inyectable para reducir grasa localizada.',
    fullDescription: 'Las lipoenzimas son un tratamiento inyectable a base de enzimas que ayuda a reducir la grasa localizada actuando en los adipocitos (células grasas).',
    icon: '../../img/depilacion.png',
    imageList: '../../img/assets/lista7.webp',
    faqs: [
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer: 'Se requieren en promedio de 4 a 6 visitas para lograr un resultado satisfactorio.'
      },
      {
        question: '¿Cuánto duran los resultados?',
        answer: 'El tratamiento es permanente siempre y cuando se conserven buenos hábitos alimenticios.'
      },
      {
        question: '¿Qué factores influyen en los resultados?',
        answer: 'Los resultados dependen de la grasa a tratar y factores propios del paciente como metabolismo, edad, apego al tratamiento, entre otros.'
      }
    ]
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza HidraFacial ',
    description: 'Limpieza facial grado médico estético no invasivo.',
    fullDescription: 'La limpieza facial hidra es un tratamiento grado médico estético no invasivo que limpia, exfolia e hidrata la piel del rostro. Se realiza en una sesión que combina diferentes cabezales para realizar varios pasos, como extracción de impurezas, exfoliación, ultrasonido, radiofrecuencia, martillo frío y vapor de ozono, entre otros.',
    icon: '../../img/depilacion.png',
    imageList: '../../img/assets/facial2.webp',
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
    name: 'Dermapen',
    description: 'Tratamiento estético para mejorar la textura y el aspecto de la piel.',
    fullDescription: 'El Dermapen es un tratamiento estético que mejora la textura y el aspecto de la piel a través de micropunciones. También conocido como microneedling, estimula la producción de colágeno y elastina, ayudando a reafirmar y rejuvenecer la piel. Además, se pueden agregar diferentes activos que complementan el tratamiento, como vitamina C y ácido hialurónico.',
    icon: '../../img/depilacion.png',
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
    id: 'armonizacion-facial',
    name: 'Armonización Facial',
    description: 'Conjunto de técnicas para equilibrar las proporciones del rostro.',
    fullDescription: 'La armonización facial es un conjunto de técnicas que buscan equilibrar las proporciones y características del rostro del paciente para lograr una apariencia más estética y equilibrada. Los procedimientos más utilizados en una armonización pueden ser toxina botulínica, rellenos dérmicos, bioestimuladores, entre otros.',
    icon: '../../img/depilacion.png',
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
  }
  
];