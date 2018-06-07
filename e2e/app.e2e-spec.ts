import { TheSpotPage } from './app.po';

describe('the-spot App', () => {
  let page: TheSpotPage;

  beforeEach(() => {
    page = new TheSpotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
