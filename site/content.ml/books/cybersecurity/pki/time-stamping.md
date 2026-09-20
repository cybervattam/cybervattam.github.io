---
title: 'ടൈം സ്റ്റാമ്പിംഗ്'
date: 2022-08-12
draft: false
weight: 10
---

<img src="images/en/cybersecurity/pki/pki-time-stamping-icon.png">

### ടൈം സ്റ്റാമ്പിംഗ്

ഒരു രേഖ സൃഷ്ടിച്ചതും മാറ്റം വരുത്തിയതുമായ സമയം സുരക്ഷിതമായി രേഖപ്പെടുത്തുന്ന പ്രക്രിയയാണ് ടൈം സ്റ്റാമ്പിംഗ്. ലഭിക്കുന്ന സ്റ്റാമ്പിനെ Trusted Time Stamp എന്ന് വിളിക്കുന്നു. സമയം രേഖപ്പെടുത്തിയ ശേഷം രേഖ ഉടമ ഉൾപ്പെടെ ആർക്കും അത് മാറ്റാൻ കഴിയില്ലെന്ന് ഇത് ഉറപ്പാക്കുന്നു.

ഡിജിറ്റൽ ഒപ്പിനോ കോഡ് ഒപ്പിനോ Trusted Time Stamp ചേർക്കുന്നത് ഒപ്പിട്ട ഡാറ്റയ്ക്കും രേഖയ്ക്കും കോഡിനും അധിക വിശ്വാസ്യത നൽകുകയും ഇടപാട് നടന്ന തീയതിയും സമയവും സ്ഥാപിക്കുകയും ചെയ്യുന്നു. രേഖയോ കോഡോ ഒപ്പിട്ട സമയം വിശ്വസനീയമായി സൂചിപ്പിക്കാൻ Trusted Time Stamping Authority ഉപയോഗിക്കുന്നു.

<img src="images/shared/screenshots/timestamping-sample.png">

ടൈം സ്റ്റാമ്പില്ലാത്ത ഒപ്പ് അതിന്റെ അടിസ്ഥാന സർട്ടിഫിക്കറ്റിനൊപ്പം കാലഹരണപ്പെടും. ഒപ്പിടുമ്പോൾ ടൈം സ്റ്റാമ്പ് ചേർത്താൽ ഒപ്പിടാൻ ഉപയോഗിച്ച സർട്ടിഫിക്കറ്റ് കാലഹരണപ്പെട്ട ശേഷവും ഒപ്പ് സാധുവായിരിക്കും. ടൈം സ്റ്റാമ്പുള്ള രേഖയോ കോഡോ എപ്പോൾ ഒപ്പിട്ടതെന്നും സ്റ്റാമ്പിലെ തീയതിക്ക് ശേഷം മാറ്റം വരുത്തിയിട്ടില്ലെന്നും സ്വീകർത്താക്കൾക്ക് പരിശോധിക്കാം.

### ടൈം സ്റ്റാമ്പിംഗ് പ്രക്രിയ

<img src="images/en/cybersecurity/pki/pki-time-stamping-process.png">

Indian Standard Time (IST) മേഖലയുടെ ഔദ്യോഗിക സമയ സെർവർ National Physical Laboratory ആണ് നിയന്ത്രിക്കുന്നത്. ഇന്ത്യയിൽ പ്രവർത്തിക്കുന്ന എല്ലാ സർട്ടിഫിക്കറ്റ്, ടൈം-സ്റ്റാമ്പിംഗ് അതോറിറ്റികളും ഈ സെർവറുമായി സമയം സമന്വയിപ്പിക്കണമെന്ന് Controller of Certifying Authorities നിർബന്ധമാക്കിയിട്ടുണ്ട്.

#### ജനപ്രിയ സൗജന്യ ടൈം-സ്റ്റാമ്പിംഗ് സേവനദാതാക്കൾ
- http://rfc3161timestamp.globalsign.com/advanced
- http://timestamp.sectigo.com
- http://timestamp.digicert.com
- http://timestamp.entrust.net/TSS/RFC3161sha2TS
- http://timestamp.apple.com/ts01
- http://sha256timestamp.ws.symantec.com/sha256/timestamp
