import { CandlePage } from './app.po';

describe('candle App', () => {
  let page: CandlePage;

  beforeEach(() => {
    page = new CandlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
