---
title: 'Hyperledger Block Structure'
date: 2022-08-15
draft: false
weight: 5
---

### Hyperledger Blockchain Block Structure

* Block Header
    - Block number
    - Data hash
    - Hash of the previous block

<br>

* Block Data
    - Header
    - Signature
    - Proposal
    - Response
    - Reference

<br>

* Metadata
    - Certificate and signature of the block creator
    - Valid or invalid transaction indicator added by the block confirmer after verifying each transaction
    - Hash of the overall state updates, including this block

 <br>

<img src="images/blockchain-ta/blockchain-hyperledger-fabric-block-structure-ta.svg" width=50%>

