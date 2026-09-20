---
title: 'OpenID Connect'
date: 2022-08-18
draft: false
weight: 15
---

### OpenID Connect (OIDC)

OIDC is a single sign-on protocol built on top of the OAuth 2.0 framework. It uses JSON-based Web Tokens (JWTs) to securely represent identity and authorization data.

A JWT is a standard used to define and securely exchange claims between the identity provider (IdP) and the relying party (RP). Claims can contain user attributes and other information needed to support identity verification.

OIDC scopes define the claims, or user attributes, that an application can access. The identity provider maintains a list of supported scopes and makes them available to the relying party, or application, after the user explicitly consents to share the requested information.

Before communication begins, the relying party and identity provider exchange metadata. Both parties must agree on the supported scopes. The identity provider provides the relying party with a client secret and client identifier. The relying party also shares endpoint URLs so that it can receive authorization codes and tokens.

<img src="images/en/cybersecurity/iam/iam-oidc-auth-process.png" width=70%>