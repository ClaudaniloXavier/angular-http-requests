import { SmndeliverywebPage } from './app.po';

describe('smndeliveryweb App', () => {
  let page: SmndeliverywebPage;

  beforeEach(() => {
    page = new SmndeliverywebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
