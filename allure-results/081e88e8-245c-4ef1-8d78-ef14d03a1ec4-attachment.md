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
                - /url: https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcab635e6-5493-4018-b381-523ab44d15d3%2freprocess%3fctx%3drQQIARAAnZS7i-QEAIdn9nV7K-fNHYecjWxxhXhmNu_HwoGTzGQyeU7mnTRDnpNk8pokM5nJX3CIhVwlWig2woIo2qiVrQvCFTbqFVfKNoogbiEiZ2Nv8-Pj46t_JzfIJt6EmuAb-3ATPH9ggzBoOQ4CWAaFAigMYoAJozBA2QgJQhaKOwSV3T1pfGKm6J8HovLpdz88--CSvXFRh72iSPPzs7PCyYtm4ccGljetMFnbZ63SyBzayJ3_CGCSLP2qXn9ar_9Srz_Ze3XjB8auuVxHRvaW8aIyjdxpWkl0sZfjCAVhBEXhJAJBOEniVFMObE-L2EiDe4U0HYP6EAT1Lr8Up2wgwb1ChvWlMlJRaSpHykheyu1BJE_lUBp1Cj2Qfd0HQbnyfHEUenrwrwvlysK0wPakERv9tHdbaa0LD34xSeZXztXeYZgs_Pj3vZtukkXzNMmL9_d_PmDcNk-y7UUqZoWR61Lgtbm-KovT9qI9JzgCy_SJMMmMCTSeM_BOHAbMKuxIbu5OFZZZob3YUjcdCSKJ7Wg6AXdZwuJdru-o-IanyFHb0Etuac4SgM6iKiZ0n5lLmthbG5nX3_CZhC5RmwkiIwq3bqX7sdHRKLkXR14V67afWk7P4L15ROSVHs4cShpRrNaPqB0xGE1KlZ3Hsjtae3qJanxCUbaBqOrWL9ecnvK4ihX0IlEqMWyBPSANpB3c2qDYLFHdJccOJ8PZRqJLFEKIrtadA3EX5LNw5mg7SDXHA3_F6Moutl2B7MxcZUtybm7TtrYg8w5vSYSKr5YyI1CL7papgB4lZ9oql3lX1xZRaTNwJhGm5-5AvZR8PIArTUbU7XJCVNRY3WQpMl1NdmPQkAWsBYjVjjIRyZ21VHUDuW5BGUvRTHNdbLcw0NJIeiZhw6itbrsLUl-jMtHri-BMZoc6sdOLUNCYvh90ttt1aa1bsJoWYl5UerbOe2FJmluCHnAcB-kcJ4ByafdGY0NpDwQBKl0K9rM2vNH7W3UcmyoppHASD5WWFCWKXYKoahI0zkcuqMx2Esai2UAq-rTR6nPEUpmNDQFzB65HqUO3EGCF2qxpvzDBYIEuv9h_YBkmjmAODmAohQAoCJGAiZAQgMGIYaKoDWE2crl_L0md2LdP0yxx_dA5dSLDD58e1K8OXjk-bhzdr5_WXr8H7p8fH580avdrp7Xrg_rHh3dPGtfvfP_lRfNr8cP3Xrr19kev1S4Pz-ANakUZwjox2cJhgRZh_iEvTj1eE0IdbtmzRadfwAE7cZJH-Dn07lH98uhmrz2XOyNqDv52VH98o_bNzf_xBt_eql2__OSPv6_--vGzX7mr228-RAO6v-gM6EDFOmNSk8zKXXAGQ565SUEwKcnH7srSsDTvPPq8UXveqD2_U7u-03h8t_YP0&mkt=en-US&hosted=0&device_platform=Windows+10
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