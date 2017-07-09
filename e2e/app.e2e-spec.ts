import { JcServiceCallUiPage } from './app.po';

describe('jc-service-call-ui App', () => {
  let page: JcServiceCallUiPage;

  beforeEach(() => {
    page = new JcServiceCallUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
