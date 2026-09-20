---
title: 'Cloud Computing Essential Characteristics'
date: 2022-08-14
draft: false
weight: 2
---

## __Cloud Computing Essential Characteristics__

<br>
<img src="images/cloud-ta/cloud-characteristics-ta.svg">

<br>
<br>

#### 1. Broad Network Access

All cloud computing resources are available through a network for management and use without requiring direct physical access. This network does not have to be part of the service itself. Cloud resources should be accessible from anywhere, although access can be controlled by access policies. Cloud providers must also maintain secure network connectivity between resources in different regions.

#### 2. Rapid Elasticity

* Allows consumers to increase or decrease the resources they use from a resource pool.
* Provisioning and deprovisioning during scaling are usually automated.
* This allows customers to match resource consumption closely to demand.
* Rapid elasticity should support two types of automated scaling:
  - Vertical scaling
  - Horizontal scaling

* Vertical scaling: Changing the amount of resources in an existing system.
* Horizontal scaling: Scaling by adding new resources. The new resources may be in the same location or a new location.


#### 3. Measured Service

Consumers should use only the resources allocated to them and should be charged for those resources when required. Because cloud resources are consumed like water or electricity, this is also called utility computing or pay-as-you-go computing. The unit of measurement for cloud resources must be clearly defined, and the estimated usage cost for a billing period should be displayed in the management platform.


#### 4. On-Demand Self-Service
Cloud consumers should have a self-service system that lets them manage their resources without speaking to the cloud provider's customer service or administrators. Cloud providers offer this self-service capability through a management plane for accessing and managing resources.

Management plane access methods include:
  * Web console
  * Application programming interface (API)
  * Software development kit (SDK)


#### 5. Resource Pooling

Cloud providers pool resources from hardware infrastructure and provide them in an abstracted format. Abstraction is implemented through virtualization. Consumers use automated orchestration to allocate and provision resources from the pool as needed.


#### 6. Multitenancy

Cloud computing is inherently multitenant. Many different consumers share the same resource pool, while each consumer is separated and isolated. Separation allows cloud providers to allocate and share resources from the pool among different groups. Isolation ensures that one consumer cannot view or modify another consumer's resources. Multitenancy is used to separate and share resources between departments within a business or organization, or between different organizations.