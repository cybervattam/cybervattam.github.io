---
title: 'Oblivious DNS (ODoH)'
date: 2022-08-14
draft: false
weight: 10
---

### Oblivious DNS (ODoH)

Oblivious DNS is an emerging protocol developed by the IETF. It combines public-key cryptography, a proxy, and the target resolver into the DNS query resolution flow.

This creates a privacy-preserving layer between the user and the recursive resolver. A user can choose a proxy and a target resolver, and the combination ensures that only the user can ultimately see both the DNS query and the IP address being addressed.

The goal is to protect user privacy and prevent internet service providers or DNS resolvers from learning which websites a user is requesting.

<img src="/images/en/cybersecurity/dns/dns-odoh.png">
