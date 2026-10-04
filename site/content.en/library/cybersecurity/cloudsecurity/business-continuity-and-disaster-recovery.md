---
title: 'Business Continuity and Disaster Recovery'
date: 2026-09-21
draft: false
weight: 9
tags: ["Cybersecurity","Cloud Security"]
---

### Business Continuity and Disaster Recovery

Business continuity (BC) keeps critical services running during disruption, while disaster recovery (DR) restores systems and data after a major failure. Cloud providers offer resilient infrastructure, but customers remain responsible for designing their workloads to use it.

### Provider Capabilities

- Multiple regions and availability zones
- Power, cooling, and network redundancy
- Replicated and durable storage
- Backup and snapshot services

### Customer Responsibilities

- Define recovery time objective (RTO) and recovery point objective (RPO) for each workload
- Design for high availability across zones or regions
- Back up data regularly and protect backups with encryption and access controls
- Document and test recovery plans and failover procedures
- Plan for provider outages and cloud exit scenarios

### Key Considerations

- Backups must be isolated from production credentials to resist ransomware
- Recovery processes should be tested regularly, not only documented
- Dependencies such as identity, DNS, and key management must also be recoverable

### Security Objective

Ensure that services and data remain available and recoverable within agreed objectives, even during outages, attacks, or disasters.
