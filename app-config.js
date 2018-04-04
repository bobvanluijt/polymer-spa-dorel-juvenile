/**
 * @constant
 * @name CONFIG
 * @description all constants for the application to use 
 */
var CONFIG = {
  CMS_URL: "https://wrps.api.www.maxi-cosi.com.au/wp-json",                                           // Used for endpoints to CMS
  DIO_API_URL: "https://api.dorel.io/v1",                                   // Used for the multi management tool
  AVAILABLE_BRANDS: [{'label': 'Maxi-Cosi'}, {'label': 'Dorel'}],   // Available brands to pick from
  SELECTED_BRAND: 0,                               // Selects a brand from AVAILABLE_BRANDS
  LOCALE: {
    COUNTRY_NAME: 'Australia',
    COUNTRY_CODE: 'AU',
    LANGUAGE: 'en',
    LANG_CONTENT: 'en-AU',
    LINK_ALT: 'http://www.maxi-cosi.com/au-en'
  },
};
