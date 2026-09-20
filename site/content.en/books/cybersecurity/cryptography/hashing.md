---
title: 'Hashing'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 6
extensions:
    - katex
---

A hash function or hashing algorithm converts any input data into a fixed-length hexadecimal value. It does not require a key. Regardless of the size or type of the input, a given algorithm produces output of a fixed length.

![Hashing](/images/cryptography-ta/hashing-ta.svg "Hashing")

This fixed-length sequence of digits is called the hash value or message digest. Even a small change in the input will produce a completely different hash value. Because of this, a hash value is considered similar to a digital fingerprint of the data. It is impossible to reverse the hash value to recover the original data. For this reason, it is also called one-way encryption.
