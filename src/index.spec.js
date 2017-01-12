import { expect } from 'chai';
import config from './index';

describe('ESlint Config Arundo', () => {
  it('should extend `airbnb-base` config', () => {
    expect(config.extends).to.include('airbnb-base');
  });

  it('should return an eslint configuration object', () => {
    expect(config).to.have.all.keys('extends', 'rules');
  });
});
