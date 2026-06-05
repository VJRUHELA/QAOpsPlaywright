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
                - /url: https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcab635e6-5493-4018-b381-523ab44d15d3%2freprocess%3fctx%3drQQIARAAnZQ7jNsEAECTu-v1ehI0PVWoLOgkOiCEc_7HPlEJJ87Hju3EiePYlsDyL_4kjh3_nYkJdUIVE0JiYaMSHzEBC8w3dWGALh2rDoAQQzsgoU7sLE9vePM7vU608TbUBt8-hNvg5V0bhEHLcRDAMkgUQGEQA0wYhQHSRggQslDc6ZDJ2Wnr9PM3vrr68kXv_oeV8-Yv7yMPm7CXZXF6eXGROWnWzvytgaVtaxPl9gVVGonTNVLnPwN6URJ_32w-ajafNpufHLxe-IFRt9d5aCTvGS8r00idthWFDw9SHCEhrEOSONlBCRCHUbDNSy6s0Uyphmom7DWPn4OgAGs-J61BLWQynmYDbSjCE2mN8SFTCxKFTiRho4X9jJdcRJiDoBb2YW7JQNpykWlBH5oMtUCjBz4vufvfDm5OqDzz4JeIEn_vPDu4tolcf_vXwY1VlIR6HKXZZ4ePj3ormiUGtBtzSWakGh949GgqCtySducmIjt8UOyG4mRWGwpbZfkC2QahaO_3VGjqtqIIu96436tkUybWgpGuMTxZ-0HClhsDU4yCpuHBBqfAIBxC5UgptkvC9kBkulCzaDZBcKEnL0veT7INP3J0bQeM7YibkCVEWvK4iwg0DihUQQ0AOOv4UZrUKDapKzYaV4qxpVhntHBUUNwhdB9wJasTbVPbHomeE6v8VFWJMZyvh6xFTgwvXJART0oyV7skLWLb4UrPBWpZRQWnKZoP4IriLFnYQ1MVChBGR8VZtasLZlevamoxgkXUVsdwN4fMug6CsFoVqd8Zcd2M0sUcykiHrPeMVQSGPfd3XlHF8ymnuZoaxkAo61O7A1TLbc1vegUEjqNqQ_smKDIm5awyyy6tfKlg8owVrXkZDvG6o_gaEu4NcFvShDvNgFzYwHziyizFFBN-ZDOsjBYsks9zifC0QbbDGKboEK4fq1CoCvyko2d7oRal0qaMhDOFPtUzUzGgcn7Ec0QXciOdKqzuSHWyno6bUz-bk5v92AMiXNbRPp3u7BijaqcUTFFjB0ZpAoCa6Z668ALPVzRlwqMe40Ujo9J2SpwQAcx1TBsmFLlAu6Q0U9bfHd61DBNHMAcHMJREABSECMBECAjAYMQwUdSGMBu5Orwdxc7Wt8_jJFr5G-fcCQ1_8-io-ezotZOT1vGd5nnjrdvg4eXJyWmrcadx3nh-1Pzi2tlp66Pw6U-_fzDifnj3793g01bj6toFyUr2TK4gbb7SkNThUXNOyGbVjeSuiMeEOt0q1mJR7ZU6uodcQg-Om1fHNxhaF_oSqYN_HjfvX2_8eON_3ODnVxrPX33w8Yuv__n1mz9Gz26-A24JlOgOZrVKwaixhcN1Jy9jVaaR3J7tx0lOliZrG6ixRu9922o8aTWe3Go8v9W6f9b4Fw2&mkt=en-US&hosted=0&device_platform=Windows+10
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