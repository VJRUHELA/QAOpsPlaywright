// @ts-check
import { defineConfig, devices } from '@playwright/test';



 const config = { 
  testDir: './tests',
  testMatch: '**/*.spec.js',
  retries:0,
  //workers:3,
  /* maximum time one test can run for. */

  timeout: 30 * 1000,

  expect: {

    timeout: 6000

  },

  reporter:[[ 'html' ],[ 'allure-playwright' ]],

  use: {

  browsername : 'chromium',
  headless :  false,
  screenshot : 'on',
  trace : 'on',
  
  
}};

module.exports = config;
