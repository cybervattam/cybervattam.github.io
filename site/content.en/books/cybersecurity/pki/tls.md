---
title: 'Transport Layer Security Certificates'
date: 2022-08-12
draft: false
weight: 8
---

### Transport Layer Security Certificate Types

#### 1. Domain Validation (DV)
Provides a low level of assurance and is easy to obtain. Only the website's domain is validated. Websites with these certificates display a secure lock icon, but not the owner's or business organization's name. Therefore, despite the secure connection, visitors have no way to verify that the website actually belongs to the business they are looking for.

<img src="/images/pki-ta/tls-dv.png">
<br>

#### 2. Organization Validation (OV)
This is the most commonly used assurance level. Websites with these certificates display their business name along with a secure lock icon. Because these certificates provide greater assurance, they are issued only after appropriate review by certificate authorities. They are used by organizations that handle sensitive customer data.

<img src="/images/pki-ta/tls-ov.png">

<br>

#### 3. Extended Validation (EV)
These certificates provide the highest level of assurance and are difficult to obtain. An organization applying for an Extended Validation certificate undergoes rigorous examination by the certificate authority, including verification of its physical location and industry. Websites with these certificates display the organization name, country code, and a green secure lock icon.

<img src="/images/pki-ta/tls-ev.png">

#### 4. Single-Domain Certificates

Protects a single domain specified in the certificate. This type of certificate can be issued for a domain name or subdomain name, such as www.google.com or mail.google.com.

<img src="/images/pki-ta/tls-sdc.png">

<br>

#### 5. Multi-Domain Certificates
These certificates are also known as Subject Alternative Name (SAN) certificates or Unified Communications Certificates. Some server environments do not allow multiple certificates to be installed, making these certificates a simple and cost-effective solution. They are available with all validation methods, and up to 250 alternative domain names can be included in one certificate. Domain validation must successfully complete for all alternative names before the certificate becomes active.

<img src="/images/pki-ta/tls-mdc.png">

<br>

#### 6. Wildcard Certificates
These certificates are popular among organizations with multiple subdomains ending in the same domain. During creation, an asterisk (*) is used in the common name, such as *.domain.com. The asterisk represents a wildcard and covers all subdomains ending in domain.com. These certificates are available only through Organization Validation and Extended Validation.

<img src="/images/pki-ta/tls-wildcard.png">

<br>

#### 7. Wildcard Multi-Domain Certificates
These certificates are used by organizations with complex web infrastructure. Depending on the vendor, one certificate can protect up to 250 domains. The common name must be a fully qualified domain name, such as www.domain.com. The list of alternative domain names can contain fully qualified names such as www1.domain.com, wildcard names such as *.domain.com, or a combination of both.

<img src="/images/pki-ta/tls-wildcard-mdc.png">