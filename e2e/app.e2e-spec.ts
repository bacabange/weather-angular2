import { WeatherAngular2Page } from './app.po';

describe('weather-angular2 App', function() {
  let page: WeatherAngular2Page;

  beforeEach(() => {
    page = new WeatherAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
