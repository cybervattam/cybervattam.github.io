---
title: 'Provisioning'
date: 2022-08-18
draft: false
weight: 4
---

### Provisioning

Provisioning is the process of automatically or semi-automatically creating user accounts and assigning and managing roles and permissions for those accounts.

The provisioning application reads user information from the authoritative identity system and application roles from the application data. It then creates an identity role mapping based on organizational policies.

Depending on the provisioning architecture, the identity role mapping can be sent to the target application.

The provisioning application can send authorization information, or the target application can perform authorization using the identity role mapping sent by the provisioning application.

<img src="images/iam-ta/iam-provisioning-ta.svg" width=70%>
