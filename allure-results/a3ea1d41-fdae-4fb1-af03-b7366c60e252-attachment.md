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
                - /url: https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcab635e6-5493-4018-b381-523ab44d15d3%2freprocess%3fctx%3drQQIARAAnZS7j9t0AICTe_XuEDR9gIoQ0oE6IMC5nx8_xz6pEknsOHHiV2LHsZfI8SN-xHHix-Vi_oEOgBBbkRASQgxdQEwVLDCwVB06orJ0RCchEAx0QqgTO8unb_jm7_gKVSfraB28vYvVwdltB2DAdl0csS2aQAgMQGSGERhCOzgFUJsg3QadXj-uvXb88me1_b-Fr9wPbtz7_OKN-1XMz_NVdnZ6mrtZXs-DpQWzur1ICue0ubFSt2Vl7n-GtJN09aBafVyt_lqtfrLz6nkQWtt6VMRW-p71vJpZmVu3k_j-TkbiNAopAAgSowCJAgLWJY6FRmlDM2RzkdOgNAJAYlrBQOd9kWNzidG2gj6OTEYBYqxAIx4Ggi5AMZznRmgGZvC8j7CBOt-YDJsbZRM1VBsVy0UsMX74ZOeq1CxyH3uOJA1K93Jnf5HMg-WfO0deksbTVZLln-7-stf2GJ7qMPPVIM2tzBRCn-nKijjQmbAj6U3B769mLSG7uICJGm-SOKQ0X7CWprtgUvMcE5lNrLEDD3BsPG2ssXMLn09WxlYQTYNvdVoptRb7jVgvBTyeNgJviMJ-xjWncymcyL0luYgRjYv080bp0Jjlb3jUb1oGuj7HJnlkJZu-j4ENlYAxLTW2FwqadvxJf5hxZS-1GDxUszndRhseyrXjRUTCSHZbZstWut1RJEe8SSebJhr2Rm7a4UwZKdfkUig7pZ50C3emjB3NFmwycnxRF6jR5NydOlyXKTLM9XlsjE-JQumHUWq0Cyi5fFwEk_VsQ7JwXI54y47MsAenvTJWWV1EhsZqKcRbF-bdkJkKmYXHZqphEVqow5G1uBBhZCgZx0WFlHcbUajhbjJZCBnsdUQnjJkAUdnuDOBtLFCUNhTAiDOjsFDJWTSed9jSJvT5WjWyDrVdyr1cDmhTwEiH7JMCN1IiZUiEDXOsa6mkAxLwdNdEhybEhgNrJGWgs4kReUgTitLccqOtttZV2t_Yc7YpesQ66i89q_BXua_yeXcqW7Rl9pHuQOW9hOgHyxWCzfANiiz4tsyUGpFLFMjo3nCNbu1eWq6Tbouw2yncjlNvtmKbPTt3ud63u7dta0bi0CURSNA4QgCUQmY4hSIQw60ZQTgodPCHuzeTlbsMnJNVmnjBwj1xYytYPN6rXu69cnhYO7hVPam8dRPsnh0eHtcqtyonlWd71S_2rx_XXn__0Yc3Pvp58ODH7-_988KblYf7pwxk5mia5XHQxOTmKaG11pkbOEWkOd4s8NbihaE1G9xQWYA78Az9-KD68OCox0xFVqWn4I-D6t0rle-O_scNfnix8uyln3778q97T77-vXt59V22pJ0JC5demvXFQpfE-akdv-OBUqMpZyJ4PCHKo0j2fZq6802t8rRWeXqt8uxa7e71yr81&mkt=en-US&hosted=0&device_platform=Windows+10
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