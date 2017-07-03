import { MyavaPage } from './app.po';

describe('myava App', () => {
  let page: MyavaPage;

  beforeEach(() => {
    page = new MyavaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
