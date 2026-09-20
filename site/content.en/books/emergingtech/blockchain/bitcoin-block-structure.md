---
title: 'Bitcoin Block Structure'
date: 2022-08-15
draft: false
weight: 3
---

### <img src="images/logos/bitcoin-logo.svg" width=10%> Block Structure in the Bitcoin Blockchain

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

<img src="images/blockchain-ta/blockchain-bitcoin-block-structure-ta.svg" width=50%>
<br>
<br>

### Sample Bitcoin Blockchain

<br>
<br>
<img src="images/blockchain-ta/blockchain-bitcoin-chain-sample-ta.svg" width=50%>