---
title: 'ఒకవసారి పాస్వర్డ్ (OTP)'
date: 2022-08-18
draft: false
weight: 12
---

### __ఒకవసారి పాస్వర్డ్ / One Time Password (OTP)__

ఒకవసారి పాస్వర్డ్‌ తయారు చేయడానికి హాష్-ఆధారిత అల్గోరిథమ్‌లు ఉపయోగించబడతాయి. ఈ అల్గోరిథమ్‌లు రెండు ఇన్‌పుట్‌లు ఉపయోగిస్తాయి: seed మరియు moving factor.

Seed అనేది స్థిర విలువ (రహస్య కీ). కొత్త ఖాతా సృష్టించే సమయంలో ఈ విలువ రూపొందించబడుతుంది. moving factor ఆధారంగా HOTP మరియు TOTP అనే రెండు రకాల OTPలు ఉత్పత్తి చేయబడతాయి.

#### __HOTP__

HOTP అనేది Hash-based Message Authentication Code OTP. ఇది ఒక event counter ఆధారంగా OTPను ఉత్పత్తి చేస్తుంది.

ప్రతి OTP సంచరణకు ఒక counter విలువ పెరుగుతుంది. ఒక OTPను సృష్టించిన తర్వాత, తర్వాత OTP ఉత్పత్తి అయ్యే వరకు మునుపటి OTP చెల్లుబాటు ఉంటుంది.

<img src="images/en/cybersecurity/iam/iam-hotp.png" width=25%>

#### __TOTP__

TOTP అనేది Time-based OTP. ఇది counterకు బదులుగా సమయం ఆధారంగా OTPను ఉత్పత్తి చేస్తుంది.

ప్రతి పాస్వర్డ్ చెల్లుబాటు అవడానికి ఎన్ని సెకన్లు అవసరమో ఆ వ్యవధిని timestep అంటారు.

<img src="images/en/cybersecurity/iam/iam-totp.png" width=25%>
