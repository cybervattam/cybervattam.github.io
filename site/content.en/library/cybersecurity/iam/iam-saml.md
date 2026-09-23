---
title: 'Security Assertion Markup Language'
date: 2022-08-18
draft: false
weight: 14
---

### Security Assertion Markup Language (SAML)

Security Assertion Markup Language (SAML) is a single sign-on protocol built on XML. It supports both authentication and authorization over SOAP/HTTP requests between an identity provider (IdP) and a service provider (SP).

Before communicating for identity verification, the two providers must define a SAML agreement and exchange initial information through metadata. This information includes details such as:

* Public keys used for encryption, supported encryption protocols, and endpoint URLs that specify where SAML messages should be sent.
* Supported binding methods and supported XML attribute formats.

Once both providers know these details about each other, they configure themselves accordingly.

<img src="images/en/cybersecurity/iam/iam-saml-auth-process.png" width=70%>