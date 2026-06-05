# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicsTest.spec.js >> @webTests Login Page
- Location: tests\UIBasicsTest.spec.js:5:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e5]:
  - img "Organization background image" [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e13]:
      - img "Microsoft" [ref=e16]
      - main [ref=e17]:
        - generic [ref=e18]:
          - generic "vijay.kumar@awarebase.com" [ref=e22]
          - generic [ref=e24]:
            - textbox [ref=e25]: vijay.kumar@awarebase.com
            - heading "Enter password" [level=1] [ref=e27]
            - generic [ref=e29]:
              - alert
              - textbox "Enter the password for vijay.kumar@awarebase.com" [active] [ref=e31]:
                - /placeholder: Password
            - generic [ref=e36]:
              - link "Forgot my password" [ref=e38] [cursor=pointer]:
                - /url: https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcab635e6-5493-4018-b381-523ab44d15d3%2freprocess%3fctx%3drQQIARAAnZQ7jNsEAIaTu-v1ehI0raqqCCHdUAnU4pzfsU8qqhPbiRPHjh07jr1Yju34Eb9iOw97R-pYWJAY2ehSxAQIIRhYOnViaJeOqAsIBm5EN7Gz_Po-6Zv_0-tEG29DbfDBIdwGL-47IAzarosAtkWiAAqDGLCAURggHYQAIRvF3Q6Z3z5tffLPA-Lp5QPu65_-_uKQ_HX9rAn7ZZkVF-fnpVuU7TJILKxo21G6cc6pnZW7Xatw_yOgl-bZd83my2bz92bz84P3tkFoVe3VJrbyx9ZVtbAKt22n8bODAkdICCNADEcQDEVIjCDaOiwhRn8WGbRXGqERGT0QFDQ24DUGETWuHNOzSNdm0VhxVkKo7w1N9o1Q9kVNLY2Yq6_6cV_f8xob6Ipa6rAQiwoFCvGVs8Grg5sitSl9-GrSPKjdtwfXotQLkr8ObizTPDaztCi_PHx91FvSQ4KlvYzPS6swxqFPDyaSwGt0OMM6KDfs7Lmk21c0wl9D_YCsa4xS49KudYmIiA0tiMs9W8cjS5s6iD_oxamZDWf93BOhrTNfTNlpTwA4xejafN8bl56K-5JtETNuu6ymjDWuJw6J6TyfxngNeAMgj3pru-PbmaJuPdXaxwm4B31Y33psRY2VBAgtltWNSpakATdnhgiw6w7KbiZUhUnrsAqUCTxBI4WRcE9wI8cgC9nY6fNRBnYdKlxipqmLutuZdvG9JKpzApeVncJvpszG6pQV7JqMqs1g2eQGXbHisjjghGC0qxChthSc7s-pPgHTdDHbDQs0MVLNlbhklPJgClS8qEplNl2Uaap4_haMZN-xGZCiIpLvxiHN9gkH3NIsbmY8UbJemYr78aLmpSScYfwemq67usFSjC5PiklqDEu83Kr6As1gxBw4xMyvJkSccxYt4UBtr3RzEyk9ujtFqHCzG1Qj36Qn-BSXF5uaZax-PZKsAFMH0y2TLJekUOWruSSFUCxmQAdMsyXkxAol52t3wvTqOhwFQiZbI0bGRHIPrwxSLdLxvO5LUZoMklFnGPWGVjWxOyshWMyc4X6c5XyMm8x8vdrZkcF7GowGGCZuYWSajJlvD-_b1gJHMBcHMJREABSECGCBEBCAwYi1QFEHwhzkxeGdNHOTwDnL8nQZRO6ZG1tB9PKo-fbo7slJ6_he86zx0R3w8OLk5LTVuNc4a1weNb-6dvu09dtI-_D9DzD2-_j5Y_ruQePFtfOHG1ahknQYybBOUeQM89G82iAu9FCGECdz8qIf0diYHarEI-QCenrcfHF8g6NNgVFIE_zzuPnkeuOHG__jDX5-p3H57mef_vjLq9fP_xi8vflxL9lPRoMYRncJqW64iV_7PRmlIzYTbV_N3cluKJXyeiAgxKNvWo03rcabW43LW60ntxv_Ag2&mkt=en-US&hosted=0&device_platform=Windows+10
              - link "Sign in with another account" [ref=e40] [cursor=pointer]:
                - /url: "#"
            - button "Sign in" [ref=e43] [cursor=pointer]
    - contentinfo [ref=e44]:
      - generic [ref=e45]:
        - link "Terms of use" [ref=e46] [cursor=pointer]:
          - /url: https://www.microsoft.com/en-US/servicesagreement/
        - link "Privacy & cookies" [ref=e47] [cursor=pointer]:
          - /url: https://privacy.microsoft.com/en-US/privacystatement
        - button "Click here for troubleshooting information" [ref=e48] [cursor=pointer]: ...
```