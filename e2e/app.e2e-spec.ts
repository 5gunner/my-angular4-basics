import { Angular4BasicsPage } from './app.po';

describe('angular4-basics App', () => {
  let page: Angular4BasicsPage;

  beforeEach(() => {
    page = new Angular4BasicsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
