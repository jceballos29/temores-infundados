
import image1 from '../assets/img/podcast/inicio-presentacion.png';
import image2 from '../assets/img/podcast/que-es-la-microviolencia.png';
import image3 from '../assets/img/podcast/diario-creativo.png';
import image4 from '../assets/img/podcast/microagresiones-de-genero.png';
import image5 from '../assets/img/podcast/taller-1.png';

import audio1 from '../assets/audio/inicio-presentacion.mp3'
import audio2 from '../assets/audio/que-es-la-microviolencia.mp3'
import audio3 from '../assets/audio/diario-creativo.mp3'
import audio4 from '../assets/audio/microagresiones-de-genero.mp3'
import audio5 from '../assets/audio/taller-1.mp3'

export const playlist = [
  {
    id: 1,
    title: 'Inicio/Presentación',
    subtitle: 'Taller Musicoterapia',
    image: image1,
    audioFile: audio1,
    head: true,
    next: 2,
    prev: 5
  },
  {
    id: 2,
    title: '¿Qué es la microviolencia?',
    subtitle: 'Taller Musicoterapia',
    image: image2,
    audioFile: audio2,
    head: false,
    next: 3,
    prev: 1
  },
  {
    id: 3,
    title: 'Diario Creativo',
    subtitle: 'Taller Musicoterapia',
    image: image3,
    audioFile: audio3,
    head: false,
    next: 4,
    prev: 2
  },
  {
    id: 4,
    title: 'Microagresiones de Género',
    subtitle: 'Taller Musicoterapia',
    image: image4,
    audioFile: audio4,
    head: false,
    next: 5,
    prev: 3
  },
  {
    id: 5,
    title: 'Taller 1',
    subtitle: 'Taller Musicoterapia',
    image: image5,
    audioFile: audio5,
    head: false,
    next: 1,
    prev: 4
  }
]