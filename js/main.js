import { initTabs, loadTab, loadAllLocations, renderLocations } from './dynamicContent.js';
import { initFormValidation } from './formValidation.js';

window.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initFormValidation();
});