---
title: 'Hyperledger Blockchain Components'
date: 2022-08-15
draft: false
weight: 6
---

### Hyperledger Blockchain Components

__Peer / Node__ - Each computer connected to the peer-to-peer network must install and run a node application appropriate for the blockchain system it wants to join. Technically, the blockchain creates a Service Overlay Network (SON). To act as a node in this network, the computer application must process relevant messages and update the shared state of the SON.

__Consensus Protocol__ - The consensus protocol is implemented as part of the node application. It provides the rules for reaching a common view of the ledger and determining the global state. Examples include Proof of Work (PoW), Proof of Stake (PoS), Byzantine Fault Tolerance (BFT), Proof of Vote (PoV), and Delegated Proof of Stake (DPoS).

__Smart Contracts__ - Computer source code that runs within the node application, or virtual machine. It contains the rules agreed upon by the parties to the contract for interacting with one another outside the distributed ledger.

__Virtual Machine__ - A virtual machine is a computer program running in a node application that understands specific instructions for managing the state of smart contracts. Instructions are provided in a specialized programming language to execute the terms of the contract.

__Distributed Ledger__ - A data structure managed within the node application. Maintained by every peer or node in the peer-to-peer network, the ledger contains the blockchain and the state database.

__Events__ - Generates notifications about significant activities in the blockchain, such as a new block, and notifications related to smart contracts.

__Membership__ - In a permissioned blockchain network, membership services authenticate, authorize, and manage identities.


<img src="images/en/emergingtech/blockchain/blockchain-hyperledger-components.png" width=50%>