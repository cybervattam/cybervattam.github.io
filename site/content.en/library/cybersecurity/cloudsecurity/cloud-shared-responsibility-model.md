---
title: 'Cloud Security Shared Responsibility Model'
date: 2026-09-21
draft: false
weight: 3
---

### Cloud Security Shared Responsibility Model

The cloud security model is shared between the cloud service provider and the customer.

The provider is responsible for securing the infrastructure beneath the customer workload, including physical facilities, network infrastructure, virtualization layers, and some core platform controls. The customer is responsible for security in the cloud, including identity and access, application security, data protection, configuration hygiene, and governance.

### Examples of Shared Responsibilities

| Layer | Provider Responsibility | Customer Responsibility |
|---|---|---|
| Physical security | Data center security | None |
| Network | Core network and connectivity | Security groups, routing, firewall configuration |
| Virtualization | Hypervisor infrastructure | VM hardening and workload protection |
| Operating system | Managed platform services | OS patching, access control |
| Application | Platform services | App logic and secure development |
| Data | Storage platform protection | Classification, encryption, retention |
| Identity & access | IAM platform | User provisioning, policies, least privilege |

### Security Controls

The model requires organizations to align identity, governance, configuration, monitoring, and auditing practices with the cloud provider’s model.
