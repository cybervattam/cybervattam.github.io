---
title: 'Single Sign-On Protocol Comparison'
date: 2022-08-18
draft: false
weight: 16
---

### Single Sign-On Protocol Comparison (SSO Protocol Comparison)

| <img src="images/shared/logos/saml-logo.png" width=20%> | <img src="images/shared/logos/openid-connect-logo.jpg" width=20%> | 
| -------------------------------------- | ------------------------------------------------ |
| A long-established authentication, authorization, and single sign-on protocol. <br> Uses XML to exchange information. SAML assertions or tokens are relatively large and more difficult to process. <br> Does not natively support user consent, although this can be achieved through additional development. <br> Because it has been available for a long time, it is still trusted by many organizations, including government institutions. <br> Well suited for enterprises and business-to-business information exchange. | A newer single sign-on protocol built on the OAuth 2.0 framework. <br> Uses JSON-based Web Tokens (JWTs), which are smaller and easier to process. <br> Natively supports user consent. <br> OIDC is increasingly providing features supported by SAML. <br> Well suited for business-to-consumer information exchange. It also supports authentication for modern applications such as single-page applications (SPAs) and mobile applications. |