import { AmimationsPage } from './app.po';

describe('amimations App', function() {
  let page: AmimationsPage;

  beforeEach(() => {
    page = new AmimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
