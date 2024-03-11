// subscriber.ts
import { Observer, Observable } from '../ejercicio.pe/observable.js';
import { NewsFeed } from '../ejercicio.pe/newsFeed.js';

/**
 * La clase Subscriber representa un observador en el sistema de feed de noticias.
 * Implementa la interfaz Observer para recibir actualizaciones de NewsFeed.
 */
export class Subscriber implements Observer {
  /**
   * Crea un nuevo Subscriber.
   * @param name El nombre del suscriptor.
   */
  constructor(private name: string) {}

  /**
   * El método update se llama cuando el NewsFeed observado cambia.
   * @param observable El objeto observable que está notificando la actualización.
   * Si el observable es una instancia de NewsFeed, entonces registra la nueva noticia.
   */
  update(observable: Observable): void {
    if (observable instanceof NewsFeed) {
      //La verificación if (observable instanceof NewsFeed) comprueba si el observable es una instancia de NewsFeed. Esto asegura que 
      ///el suscriptor solo reaccione a las actualizaciones de NewsFeed.
      console.log(`${this.name} ha recibido la noticia: ${observable.getLatestNews()}`);
    }
  }
}


//Implementa un método update, que es llamado cuando NewsFeed publica una nueva noticia.