import { Ng2ErrorMessageExamplePage } from './app.po';

describe('ng2-error-message-example App', function() {
  let page: Ng2ErrorMessageExamplePage;

  beforeEach(() => {
    page = new Ng2ErrorMessageExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
