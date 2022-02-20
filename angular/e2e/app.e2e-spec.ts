import { InternalNotificationDemoTemplatePage } from './app.po';

describe('InternalNotificationDemo App', function() {
  let page: InternalNotificationDemoTemplatePage;

  beforeEach(() => {
    page = new InternalNotificationDemoTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
