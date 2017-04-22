import { PeopleHeatPage } from './app.po';

describe('people-heat App', function() {
  let page: PeopleHeatPage;

  beforeEach(() => {
    page = new PeopleHeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
