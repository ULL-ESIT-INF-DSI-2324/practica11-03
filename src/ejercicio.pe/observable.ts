// observable.ts

/**
 * Interfaz que representa un Observador en el patrón de diseño Observer.
 * Los observadores deben implementar un método de actualización para reaccionar a las notificaciones.
 */
export interface Observer {
  update(observable: Observable): void;
}

/**
* Interfaz para objetos Observables en el patrón de diseño Observer.
* Declara métodos para suscribir y desuscribir observadores, y para notificarles.
*/
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
* Clase abstracta que implementa la funcionalidad básica de Observable.
* Gestiona una lista de observadores y proporciona métodos para suscribirlos, desuscribirlos y notificarlos.
*/
export abstract class AbstractObservable implements Observable {
  private observers: Observer[] = [];

  /**
   * Suscribe un observador a este observable.
   * @param observer El observador que será suscrito.
   * @throws Error si el observador ya está suscrito.
   */
  subscribe(observer: Observer): void {
      if (this.observers.includes(observer)) {
          throw new Error('El observador ya está suscrito.');
      }
      this.observers.push(observer);
  }

  /**
   * Desuscribe un observador de este observable.
   * @param observer El observador que será desuscrito.
   * @throws Error si el observador no se encuentra.
   */
  unsubscribe(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index === -1) {
          throw new Error('El observador no se encuentra.');
      }
      this.observers.splice(index, 1);
  }

  /**
   * Notifica a todos los observadores suscritos llamando a su método de actualización.
   */
  notify(): void {
      this.observers.forEach((observer) => observer.update(this));
  }
}
