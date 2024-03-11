// Importa AbstractObservable desde la ubicación especificada.
// AbstractObservable proporciona una implementación básica para manejar observadores.
import { AbstractObservable } from '../ejercicio.pe/observable.js';

/**
 * Clase NewsFeed representa un sistema de publicación de noticias.
 * Extiende de AbstractObservable, permitiendo así ser observada por múltiples observadores.
 */
export class NewsFeed extends AbstractObservable {
  // Almacena la última noticia publicada.
  private news: string = '';

  /**
   * Publica una nueva noticia en el feed.
   * @param news El contenido de la noticia a ser publicada.
   */
  public publish(news: string): void {
    // Asigna la noticia publicada a la variable 'news'.
    this.news = news;
    // Notifica a todos los observadores suscritos acerca de la nueva noticia.
    this.notify();
  }

  /**
   * Devuelve la última noticia publicada en el feed.
   * @returns La última noticia como una cadena de texto.
   */
  public getLatestNews(): string {
    // Retorna el contenido de la última noticia publicada.
    return this.news;
  }
}

//NewsFeed actúa como el observable. Mantiene una lista de suscriptores (observadores) interesados en recibir notificaciones de nuevas noticias