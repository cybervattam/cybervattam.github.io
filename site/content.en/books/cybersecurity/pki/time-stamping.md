---
title: 'Time Stamping'
date: 2022-08-12
draft: false
weight: 10
---

### Time Stamping

Time stamping is the process of securely recording when a document was created or modified. The resulting stamp is called a trusted time stamp. Security in this context means ensuring that once the time is recorded, no one, including the document owner, can alter the document. Adding a trusted time stamp to a digital signature or code signature provides additional trust in the signed data, document, or code and establishes the trusted date and time of the transaction. A Trusted Time Stamping Authority is used to reliably indicate when a document or piece of code was signed.

<img src="images/pki-ta/time-stamping-sample.png">

Without a time stamp, a signature expires along with its underlying certificate. Adding a time stamp when signing keeps the signature valid even after the certificate used for signing expires. Recipients of documents and code with trusted time stamps can verify when the document or code was signed and that it was not changed after the date and time confirmed by the time stamp. A time stamp can be obtained separately for a document or added during signing. If a time-stamping authority is specified during signing, the signature is sent to that authority. The authority returns the signature with the time, date, and its own signature attached. Combining this signed response with the document creates the signed document.

### Time Stamping Process

<img src="images/pki-ta/time-stamping-process-ta.svg">

The official time server for the Indian Standard Time (IST) zone is managed by the National Physical Laboratory. The Controller of Certifying Authorities requires all certificate and time-stamping authorities operating in India to synchronize their official time servers with this time server.

#### Popular Free Time-Stamping Service Providers
- http://rfc3161timestamp.globalsign.com/advanced
- http://timestamp.sectigo.com
- http://timestamp.digicert.com
- http://timestamp.entrust.net/TSS/RFC3161sha2TS
- http://timestamp.apple.com/ts01 
- http://sha256timestamp.ws.symantec.com/sha256/timestamp 