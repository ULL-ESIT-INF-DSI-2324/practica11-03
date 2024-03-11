
// newsFeed.test.ts
import { expect } from 'chai';
import 'mocha';
import { NewsFeed } from '../src/ejercicio.pe/newsFeed.js';
import { Subscriber } from '../src/ejercicio.pe/suscriber.js';

describe('NewsFeed', () => {
  it('debe permitir suscribir a un Subscriber y recibir actualizaciones', () => {
    const newsFeed = new NewsFeed();
    const subscriber = new Subscriber('Test Subscriber');
    const testNews = 'Noticia de prueba';

    let receivedNews = '';
    subscriber.update = (observable) => {
      if (observable instanceof NewsFeed) {
        receivedNews = observable.getLatestNews();
      }
    };

    newsFeed.subscribe(subscriber);
    newsFeed.publish(testNews);

    expect(receivedNews).to.equal(testNews);
  });

  it('no debe notificar a un Subscriber desuscrito', () => {
    const newsFeed = new NewsFeed();
    const subscriber = new Subscriber('Test Subscriber');
    const testNews = 'Noticia de prueba';

    let receivedNews = '';
    subscriber.update = (observable) => {
      if (observable instanceof NewsFeed) {
        receivedNews = observable.getLatestNews();
      }
    };

    newsFeed.subscribe(subscriber);
    newsFeed.unsubscribe(subscriber);
    newsFeed.publish(testNews);

    expect(receivedNews).to.equal('');
  });

  it('debe lanzar un error al intentar suscribir el mismo Subscriber dos veces', () => {
    const newsFeed = new NewsFeed();
    const subscriber = new Subscriber('Test Subscriber');

    newsFeed.subscribe(subscriber);

    expect(() => newsFeed.subscribe(subscriber)).to.throw();
  });

  it('debe lanzar un error al intentar desuscribir un Subscriber no suscrito', () => {
    const newsFeed = new NewsFeed();
    const subscriber = new Subscriber('Test Subscriber');

    expect(() => newsFeed.unsubscribe(subscriber)).to.throw();
  });
});
