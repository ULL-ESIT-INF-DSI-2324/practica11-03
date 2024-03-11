// main.ts
import { NewsFeed } from '../ejercicio.pe/newsFeed.js';
import { Subscriber } from '../ejercicio.pe/suscriber.js';

/**
 * Demuestra el uso del patrón Observer con NewsFeed y Subscribers.
 * Este código principal crea una instancia de NewsFeed (el observable) y dos instancias de Subscriber (los observadores).
 * Se suscribe a los observadores al NewsFeed, se publica una noticia, se desuscribe a uno de los observadores, y finalmente se publica otra noticia.
 */
function main() {
  // Crea una instancia de NewsFeed.
  const newsFeed = new NewsFeed();

  // Crea dos suscriptores y les asigna nombres.
  const subscriber1 = new Subscriber('Subscriber 1');
  const subscriber2 = new Subscriber('Subscriber 2');

  // Suscribe ambos suscriptores al NewsFeed.
  newsFeed.subscribe(subscriber1);
  newsFeed.subscribe(subscriber2);

  // Publica una noticia. Ambos suscriptores serán notificados.
  newsFeed.publish('¡DSI lanza un nuevo curso!');

  // Desuscribe al primer suscriptor.
  newsFeed.unsubscribe(subscriber1);

  // Publica otra noticia. Solo el segundo suscriptor será notificado esta vez.
  newsFeed.publish('¡Disponible una nueva actualización!');
}

// Ejecuta la función principal.
main();
