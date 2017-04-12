import { KnowthytechPage } from './app.po';

describe('knowthytech App', () => {
  let page: KnowthytechPage;

  beforeEach(() => {
    page = new KnowthytechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ktt works!');
  });
});
