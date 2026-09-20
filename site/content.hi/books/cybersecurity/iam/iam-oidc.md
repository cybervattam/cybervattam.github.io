---
title: 'OpenID Connect (OIDC)'
date: 2022-08-18
draft: false
weight: 15
---

### OpenID Connect (OIDC)
OIDC OAuth 2.0 ढांचे पर आधारित एक नया SSO प्रोटोकॉल है। यह सुरक्षा जानकारी के आदान-प्रदान के लिए JSON-आधारित वेब टोकन (JWT) का उपयोग करता है।

JWT एक मानक है जिसका उपयोग Identity Provider (IdP) और Relying Party (RP) के बीच क्लेम्स को परिभाषित करने और सुरक्षित रूप से साझा करने के लिए किया जाता है।

प्रमाणीकरण के लिए उपयोग किए जाने वाले एन्क्रिप्टेड प्रमुख उपयोगकर्ता डेटा, क्लेम्स और अनुमतियाँ (claims) को OIDC scopes (दायरे) के रूप में परिभाषित किया जाता है। Identity Provider उपलब्ध scopes की सूची रखता है और उपयोगकर्ता की स्पष्ट सहमति के बाद उन्हें रelying party (एप्लिकेशन) को उपलब्ध कराता है।

संचार शुरू करने से पहले, Relying Party और Identity Provider को metadata साझा करना पड़ता है। दोनों पक्षों को संभावित scopes पर सहमति देनी होती है। Identity Provider रelying party को एक Client Secret और Client ID प्रदान करता है, और relying party को endpoint URL साझा करना पड़ता है ताकि वह कोड और टोकन प्राप्त कर सके।

<img src="images/en/cybersecurity/iam/iam-oidc-auth-process.png" width=70%>