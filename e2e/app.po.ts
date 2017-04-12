import { browser, element, by } from 'protractor';

export class KnowthytechPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ktt-root h1')).getText();
  }
}
