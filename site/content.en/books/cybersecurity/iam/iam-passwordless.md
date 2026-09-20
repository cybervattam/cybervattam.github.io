---
title: 'Passwordless Authentication'
date: 2022-08-18
draft: false
weight: 12
---


### Passwordless Authentication

Passwordless authentication is a type of multifactor authentication. Instead of the weak password factor, it uses stronger authentication factors such as a fingerprint or a secret PIN. Passwordless authentication relies on the cryptographic key-pair principles used by digital certificates: a private key and a public key.

An individual who wants to create a secure account uses a tool, such as a mobile application or browser extension, to generate a key pair consisting of a private key and a public key. The private key is stored on the user's device and is bound to a factor such as a fingerprint, PIN, or voice recognition. It can be accessed only after the user provides that factor.

The public key is provided to the website, application, browser, or other online service where the user wants to maintain an account.


#### __Public Key Infrastructure Card (PKI Card)__
Public Key Infrastructure is a cryptographic and cybersecurity framework that protects communication between websites and users.

 <img src="images/iam-ta/iam-pki-card.svg">

<br>

#### __Fast Identity Online (FIDO)__
 
Fast Identity Online (FIDO) authentication is an initiative created by a group of organizations to reduce reliance on multiple usernames and passwords.

 <img src="images/iam-ta/iam-fido.png">

<br>
<br>
<br>

#### __YubiKey__

A security key is a small hardware device that resembles a USB drive. On supported platforms, it can be used as an additional authentication factor alongside your password.

 <img src="images/iam-ta/iam-yubikey.jpg">