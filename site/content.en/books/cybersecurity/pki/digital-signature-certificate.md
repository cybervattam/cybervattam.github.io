---
title: 'Digital Signature Certificate'
date: 2022-08-05
draft: false
weight: 7
---

<img src="images/en/cybersecurity/pki/pki-digital-signature-icon.png">

### Digital Signature Certificate Types

| Certificate Type | Assurance Level | Applicable Context |
| -------------                           |------------| -----|
| Class 1 Certificate | Issued for use by business personnel and individuals. <br> Confirms that the information in the subscriber's application does not conflict with information in recognized consumer databases. | Provides a basic level of assurance for situations where the risk and impact of data compromise are low. <br> Not considered suitable for high-value transactions. |
| Class 2 Certificate | Issued for use by business personnel and individuals. <br> Confirms that the information in the subscriber's application does not conflict with information in recognized consumer databases. | Provides assurance for situations where the risk and impact of data compromise are moderate. <br> Includes transactions involving significant monetary value or fraud risk, and situations where malicious access to private information is a significant concern. |
| Class 3 Certificate | Issued for use by businesses and individuals. <br> These are high-assurance certificates intended primarily for e-commerce applications. <br> They are issued only after the applicant applies in person before the certifying authority. | Suitable for situations where threats to data or the consequences of security-service failure are high. <br> This may include very high-value transactions or a high level of fraud risk. |

<br>

### Digital Signature (Signing / Verification)

<img src="/images/en/cybersecurity/pki/pki-digital-signature-verification-process.png">

<br>

### Certificate-Based Authentication

Certificate-based authentication uses a digital certificate to identify a user, machine, or device.

Authentication is performed before access is granted to a resource, network, or application.

For human identities, it is used together with other authentication methods such as passwords, biometrics, and one-time passwords (OTP).

The distinctive feature of this method is that it can serve as a single authentication solution for all types of users, unlike some solutions that work only for human users.

Certificate-based authentication is based on answers to four questions. If any answer fails, authentication fails and access is denied.
1. Was the certificate issued by a trusted certificate authority?
   - Are the intermediate and root certificate authorities trusted? <br>
2. What is the certificate's expiration status?
   - What are the certificate's issue and expiration dates? <br>
3. Has the certificate been revoked?
   - Has the certificate been revoked for any reason? <br>
4. Has the user provided proof of possession of the certificate?
   - Has the user proved that they possess the private key associated with the certificate?
   
<img src="/images/en/cybersecurity/pki/pki-certificate-based-authentication.png">

<br>
<br>

### Smart Card Logon and Authentication

* Smart card logon is a type of certificate-based authentication.
* A smart card is a small computer without a screen or keyboard. It combines a microprocessor, memory, and applications.
* It can perform cryptographic operations such as encryption, decryption, signing, hashing, and key-pair generation within the card.
* It is an integrated-circuit card that complies with ISO/IEC 7810 ID-1, 7816, and 14443 standards.
* It provides a secure place to store valuable information such as private keys, digital certificates, account numbers, passwords, and personal information.
* The private key always remains securely stored on the smart card.
* Only the public key and digital certificate may be shared.

### Smart Card Logon Use Cases

* National identity
   - National identity cards
   - Electronic passports
   - Driver's licenses
   - Health insurance cards
   - Digital signatures

<img src="https://miro.medium.com/max/700/1*HqyovEj3_aRF0Sp3VBuBIw.jpeg">

<img src="https://miro.medium.com/max/700/1*AqaNBw8KXLbFSqm4Qjv8-A.png">
<br>
Image Credit: https://medium.com/gupta-siddhant/
<br>

* Organization or university identity cards
   - Secure user logon and authentication for computers, networks, applications, and email
   - Storage of digital certificates, credentials, and passwords
   - Encryption of sensitive data
   - Storage of biometrics
   - Access to buildings, rooms, and parking areas
   - Attendance and time logging

<br>

* Commercial applications
   - Banking, including debit and credit cards, and payment services
   - Secure business-to-business (B2B) and business-to-consumer (B2C) e-commerce transactions
   - Customer loyalty and discount services
   - Ticket and admission pass sales
   - Parking payments and toll collection
   - Secure Subscriber Identity Module (SIM) and authentication