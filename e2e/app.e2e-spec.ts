import { HoloMockupPage } from './app.po';

describe('holo-mockup App', () => {
  let page: HoloMockupPage;

  beforeEach(() => {
    page = new HoloMockupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
