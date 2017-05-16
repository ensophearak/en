import { EnPage } from './app.po';

describe('en App', () => {
  let page: EnPage;

  beforeEach(() => {
    page = new EnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
