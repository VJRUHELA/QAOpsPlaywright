// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = {
  testDir: './tests',
  //retries:1,
  workers:1,

  /* maximum time one test can run for. */

  timeout: 30 * 1000,

  expect: { 
    
    timeout: 6000  
  },

  reporter : 'html', 

  projects: [
    {

      name: 'firefox',
      use: { 
        
        browsername: 'firefox', 
        headless: false,
        screenshot: 'on', 
        trace: 'on', }

    },

    {

      name: 'chromium', 
      use: { 
        
        browsername: 'chrome', 
        headless: false, 
        //screenshot: 'retain-on-failure', 
        //video: 'retain-on-failure',
        //ignoreHttpsErrors: true ,
        //permissions:['geoLocation'],
        trace: 'on', 
        //viewport:{width:720,height:720}
        //...devices['iPhone 11 Pro']
      }

    },



  ]



};

module.exports = config;

