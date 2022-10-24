import { PageObject } from '@varonis-webcore/web-test-infra/lib/shared/page-object';

export class HeroListPageObject extends PageObject {
  get title() {
    return this.getElement('h3.title');
  }

  get heroes() {
    return this.getElements('.hero', HeroPageObject);
  }
}

class HeroPageObject extends PageObject {
  get icon() {
    return this.getElement('i');
  }
  get label() {
    return this.getElement('.label');
  }
}
