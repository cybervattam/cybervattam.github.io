---
title: 'One-Time Password'
date: 2022-08-18
draft: false
weight: 12
---

### __One-Time Password (OTP)__
Hashing algorithms are used to generate one-time passwords. These algorithms use two inputs: a seed and a moving factor.

The seed is a fixed value, or secret key. This secret key is generated when a new account is enrolled with the authentication server. Based on the moving factor, there are two types of one-time passwords: HOTP and TOTP.

#### __HOTP__

HOTP stands for Hash-based Message Authentication Code One-Time Password.
 
The HOTP algorithm is event-based. It uses a counter as the moving factor to generate a one-time password. In this case, an event is an increment of the counter.

The previously generated one-time password remains valid until the next one-time password is generated.

<img src="images/en/cybersecurity/iam/iam-hotp.png" width=25%>



#### __TOTP__

(TOTP) stands for Time-Based One-Time Password.

The TOTP algorithm uses time instead of a counter as the moving factor.

The length of time for which each password remains valid is called the time step.

<img src="images/en/cybersecurity/iam/iam-totp.png" width=25%>