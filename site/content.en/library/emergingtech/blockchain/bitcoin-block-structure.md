---
title: 'Bitcoin Block Structure'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/shared/logos/bitcoin-logo.svg" width=10%> Block Structure in the Bitcoin Blockchain

<br>

* Block Header (an 80-byte serialized structure)
    - Version - the version of the current block format (4 bytes)
    - Hash of the previous block (32 bytes)
    - Data hash, or Merkle tree root hash (32 bytes)
    - Timestamp (4 bytes)
    - Current difficulty target (4 bytes)
    - Nonce (4 bytes)
* Block Data
    - Transaction counter
    - Transactions #1, #2, #3, ..., #n

<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-block-structure.png" width=50%>
<br>
<br>

### Sample Bitcoin Blockchain

<br>
<br>
<img src="images/en/emergingtech/blockchain/blockchain-bitcoin-sample-blocks.png" width=50%>