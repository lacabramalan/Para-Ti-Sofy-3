const reasons = [
  'Porque la distancia no pudo evitar que te sintiera cerquita de mi corazón.',
  'Porque cada flor amarilla me recuerda que contigo siempre hay un nuevo comienzo.',
  'Porque aunque hoy nos separen kilómetros, mi corazón ya sabe el camino hasta ti.',
  'Porque en cada atardecer imagino que el mismo sol también está abrazándote.',
  'Porque tú haces que esperar el próximo encuentro se sienta como una promesa bonita.',
  'Porque no hay pantalla capaz de apagar la luz que traes a mis días.',
  'Porque tu voz cruza cualquier distancia y aun así logra sentirse como hogar.',
  'Porque estas flores amarillas llevan lo que a veces no me caben en las palabras.',
  'Porque quererte de lejos me ha enseñado que el amor verdadero no necesita estar cerca para ser enorme.',
  'Porque cada mensaje tuyo hace que los kilómetros se vuelvan un poquito más pequeños.',
  'Porque eres la razón por la que miro el calendario con ilusión.',
  'Porque imaginar el día en que pueda darte estas flores en persona me hace sonreír.',
  'Porque contigo, incluso la espera florece.',
  'Porque si el sol pudiera escribir una carta, seguro tendría el color de estas flores para ti.',
  'Porque en mis planes favoritos siempre aparece el momento de volver a verte.',
  'Porque aunque no pueda tomarte la mano hoy, te llevo conmigo en todo lo que hago.',
  'Porque la distancia solo confirmó que lo que siento por ti sabe resistir y crecer.',
  'Porque ningún huso horario puede cambiar lo importante: tú sigues siendo mi persona favorita.',
  'Porque eres mi pensamiento de buenos días y el último deseo antes de dormir.',
  'Porque cada kilómetro entre nosotros es solo una historia que algún día contaremos abrazados.',
  'Porque tus ojos merecen flores amarillas, días suaves y un amor que no se rinda.',
  'Porque contigo entendí que extrañar también puede ser una forma muy profunda de querer.',
  'Porque haces que una videollamada se sienta como una cita que espero todo el día.',
  'Porque la próxima vez que nos veamos, el abrazo va a durar todo lo que la distancia nos debía.',
  'Porque eres esa casualidad preciosa que elegiría incluso desde el otro lado del mundo.',
  'Porque te mandaría un jardín entero si cada flor pudiera decirte cuánto te quiero.',
  'Porque el amarillo de estas flores tiene tu misma forma de iluminar mis días.',
  'Porque eres mi lugar seguro, aunque por ahora tenga que llegar a ti con mensajes.',
  'Porque cada día lejos de ti es un día menos para volver a encontrarnos.',
  'Porque no importa cuán lejos estés, Sofy: mi corazón siempre te elige a ti.'
];

let index = 0;
const line = document.querySelector('#love-line');
const counter = document.querySelector('#counter');
const button = document.querySelector('#next-line');
button.addEventListener('click', () => {
  index = (index + 1) % reasons.length;
  line.classList.remove('show');
  void line.offsetWidth;
  line.textContent = reasons[index];
  counter.textContent = `${String(index + 1).padStart(2, '0')} / 30`;
  line.classList.add('show');
  button.innerHTML = index === reasons.length - 1 ? 'Volver a leerlas <span>♥</span>' : 'Dime otra razón <span>♥</span>';
});