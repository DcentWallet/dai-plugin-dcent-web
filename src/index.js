import DcentService from './services/DcentService';

export default {
  addConfig: function(config) {
    return {
      ...config,
      additionalServices: ['dcent'],
      dcent: DcentService
    };
  }
};
