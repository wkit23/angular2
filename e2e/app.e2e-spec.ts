import { HahaPage } from './app.po';

describe('haha App', function() {
  let page: HahaPage;

  beforeEach(() => {
    page = new HahaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
