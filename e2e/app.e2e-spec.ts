import { KursPage } from './app.po';

describe('kurs App', function() {
  let page: KursPage;

  beforeEach(() => {
    page = new KursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
