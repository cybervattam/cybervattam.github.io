---
title: 'IPv6 Addressing Structure'
date: 2026-09-21
draft: false
weight: 4
---

### IPv6 Addressing Structure

IPv6 addresses are structured as eight hexadecimal groups separated by colons.

Example:

2001:0db8:0000:0000:0000:8a2e:0370:7334

### Address Compression Rules

- Discard leading zeros in each hextet
- Replace one or more consecutive all-zero groups with a double colon (::)

Example:

2001:0000:3238:DFE1:0063:0000:0000:FEFB

becomes:

2001:0:3238:DFE1:63::FEFB

### Important Notes

- IPv6 addresses are much larger than IPv4 addresses.
- The format is hierarchical and designed for efficient routing.
- Compression improves readability without changing the address value.
