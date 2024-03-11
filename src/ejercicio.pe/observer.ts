// observer.ts
import { Observable } from '../ejercicio.pe/observable.js'
/**
 * Interface representing an Observer in the Observer design pattern.
 * Each observer must implement an update method to handle notifications.
 */
export interface Observer {
  update(observable: Observable): void;
}
