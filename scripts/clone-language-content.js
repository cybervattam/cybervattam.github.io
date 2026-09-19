const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'site', 'content.en');
const targets = ['hi', 'ml', 'te', 'kn'];

const titleMap = {
  en: {
    "Home Page": "Home Page",
    "About Us": "About Us",
    "Want to contribute to this initiative?": "Want to contribute to this initiative?",
    "License": "License",
    "Cybersecurity": "Cybersecurity",
    "Cryptography": "Cryptography",
    "Emerging Technologies": "Emerging Technologies",
    "Identity & Access Management": "Identity & Access Management",
    "Public Key Infrastructure (PKI)": "Public Key Infrastructure (PKI)",
    "Cloud Computing": "Cloud Computing",
    "Domain Name System (DNS)": "Domain Name System (DNS)",
    "Blockchain": "Blockchain",
    "Cryptocurrency": "Cryptocurrency",
    "Non Fungible Tokens (NFT)": "Non Fungible Tokens (NFT)",
  },
  hi: {
    "Home Page": "मुख्य पृष्ठ",
    "About Us": "हमारे बारे में",
    "Want to contribute to this initiative?": "क्या आप इस पहल में योगदान देना चाहते हैं?",
    "License": "लाइसेंस",
    "Cybersecurity": "साइबर सुरक्षा",
    "Cryptography": "क्रिप्टोग्राफी",
    "Emerging Technologies": "उभरती प्रौद्योगिकियाँ",
    "Identity & Access Management": "पहचान और पहुंच प्रबंधन",
    "Public Key Infrastructure (PKI)": "सार्वजनिक कुंजी अवसंरचना (PKI)",
    "Cloud Computing": "क्लाउड कंप्यूटिंग",
    "Domain Name System (DNS)": "डोमेन नाम प्रणाली (DNS)",
    "Blockchain": "ब्लॉकचेन",
    "Cryptocurrency": "क्रिप्टोक्यूरेंसी",
    "Non Fungible Tokens (NFT)": "गैर-प्रत्यारोपण योग्य टोकन (NFT)",
  },
  ml: {
    "Home Page": "ഹോം പേജ്",
    "About Us": "ഞങ്ങളെക്കുറിച്ച്",
    "Want to contribute to this initiative?": "ഈ സമരത്തിൽ സംഭാവന ചെയ്യാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?",
    "License": "എളൊരു അനുമതി",
    "Cybersecurity": "സൈബർസുരക്ഷ",
    "Cryptography": "ക്രിപ്റോഗ്രഫി",
    "Emerging Technologies": "ഉയരുന്ന സാങ്കേതികവിദ്യകൾ",
    "Identity & Access Management": "തിരിച്ചറിയൽ & ആക്സസ് മാനേജ്മെന്റ്",
    "Public Key Infrastructure (PKI)": "പബ്ലിക് കീ ഇൻഫ്രാസ്ട്രക്ചർ (PKI)",
    "Cloud Computing": "ക്ലൗഡ് കമ്പ്യൂട്ടിംഗ്",
    "Domain Name System (DNS)": "ഡൊമെയ്ൻ നെയിം സിസ്റ്റം (DNS)",
    "Blockchain": "ബ്ളോക്ക്ചെയിൻ",
    "Cryptocurrency": "ക്രിപ്റ്റോകറൻസി",
    "Non Fungible Tokens (NFT)": "നോൺ ഫങ്ഗൈബിൾ ടോക്കണുകൾ (NFT)",
  },
  te: {
    "Home Page": "హోమ్ పేజీ",
    "About Us": "మా గురించి",
    "Want to contribute to this initiative?": "ఈ ప్రక్రియకు మీరు సహకరించాలనుకుంటున్నారా?",
    "License": "లైసెన్స్",
    "Cybersecurity": "సైబర్‌సెక్యూరిటీ",
    "Cryptography": "క్రిప్టోగ్రఫీ",
    "Emerging Technologies": "ఉద్భవిస్తున్న సాంకేతికతలు",
    "Identity & Access Management": "ఐడెంటిటీ & యాక్సెస్ మేనేజ్మెంట్",
    "Public Key Infrastructure (PKI)": "పబ్లిక్ కీ ఇన్‌ఫ్రాస్ట్రక్చర్ (PKI)",
    "Cloud Computing": "క్లౌడ్ కంప్యూటింగ్",
    "Domain Name System (DNS)": "డొమైన్ నేమ్ సిస్టమ్ (DNS)",
    "Blockchain": "బ్లాక్‌చైన్",
    "Cryptocurrency": "క్రిప్టోకరెన్సీ",
    "Non Fungible Tokens (NFT)": "నాన్ ఫంగిబుల్ టోకెన్లు (NFT)",
  },
  kn: {
    "Home Page": "ಮುಖ್ಯ ಪುಟ",
    "About Us": "ನಮ್ಮ ಬಗ್ಗೆ",
    "Want to contribute to this initiative?": "ಈ ಯೋಜನೆಯಲ್ಲಿ ನೀವು ಕೊಡುಗೆ ನೀಡಲು ಇಚ್ಛಿಸುತ್ತೀರಾ?",
    "License": "ಅನುವಾದದheiros",
    "Cybersecurity": "ಸೈಬರ್ ಸುರಕ್ಷತೆ",
    "Cryptography": "ಕ್ರಿಪ್ಟೋಗ್ರಫಿ",
    "Emerging Technologies": "ಹೊರಹೊಮ್ಮುತ್ತಿರುವ ತಂತ್ರಜ್ಞಾನಗಳು",
    "Identity & Access Management": "ಗು ownership",
    "Public Key Infrastructure (PKI)": "ಪಬ್ಲಿಕ್ ಕೀ infrastructure (PKI)",
    "Cloud Computing": "ಕ್ಲೌಡ್ ಕಂಪ್ಯೂಟಿಂಗ್",
    "Domain Name System (DNS)": "ಡೊಮೇನ್ ಹೆಸರು ವ್ಯವಸ್ಥೆ (DNS)",
    "Blockchain": "ಬ್ಲಾಕ್‌ಚೈನ್",
    "Cryptocurrency": "ಕ್ರಿಪ್ಟೋಕರೆನ್ಸಿ",
    "Non Fungible Tokens (NFT)": "ನಾನ್-ಫಂಗ್ಗಿಬಲ್ ಟೋಕನ್ಗಳು (NFT)",
  },
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function translateText(locale, text) {
  if (!text) return text;
  let translated = text;
  for (const [source, target] of Object.entries(titleMap[locale])) {
    const esc = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    translated = translated.replace(new RegExp(esc, 'g'), target);
  }
  return translated;
}

function translateFile(filePath, locale) {
  const content = fs.readFileSync(filePath, 'utf8');
  const translated = content.replace(/title:\s*'([^']+)'/g, (_, title) => {
    const mapped = titleMap[locale][title];
    return mapped ? `title: '${mapped}'` : `title: '${title}'`;
  });

  const withLanding = translated.replace(
    /Welcome to Cybervattam\.\.\.!!![\s\S]*?You can help make it available in your language\./,
    locale === 'hi'
      ? 'साइबरवट्टम में आपका स्वागत है...!!!\n\nइस साइट का उद्देश्य भारतीय भाषाओं में तकनीकी सामग्री बनाना है ताकि व्यक्ति अपनी मूल भाषा में तकनीक सीख सके।\n\nवर्तमान में सामग्री अंग्रेज़ी और तमिल में उपलब्ध है। हम अन्य भाषाओं में भी इसे उपलब्ध कराने में रुचि रखते हैं।\n\nआप अपनी भाषा में सामग्री उपलब्ध कराने में मदद कर सकते हैं।\n\nइस साइट पर मौजूद सभी काम [Creative Commons-Attribution-Noncommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC-BY-NC-SA 4.0) लाइसेंस के अंतर्गत उपलब्ध हैं।'
      : locale === 'ml'
        ? 'സൈബർവട്ടത്തിൽ സ്വാഗതം...!!!\n\nഈ സൈറ്റ്‌യുടെ ഉദ്ദേശ്യം ഇന്ത്യൻ ഭാഷകളിൽ സാങ്കേതിക ഉള്ളടക്കം സൃഷ്ടിച്ച് അതിനെ അവരുടെ മാതൃഭാഷയിൽ പഠിക്കാൻ സഹായിക്കുക തന്നെയാണ്.\n\nനിലവിൽ ഉള്ളടക്കം ഇംഗ്ലീഷിലും തമിഴിലും ലഭ്യമാണ്. മറ്റ് ഭാഷകളിലും അത് ലഭ്യമാക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു.\n\nനിങ്ങളുടെ ഭാഷയിൽ അത് ലഭ്യമാക്കാൻ നിങ്ങളും സഹായിക്കാം.\n\nഈ സൈറ്റിലെ എല്ലാ ഉള്ളടക്കങ്ങളും [Creative Commons-Attribution-Noncommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC-BY-NC-SA 4.0) ലൈസൻസിന് കീഴിലാണ്.'
        : locale === 'te'
          ? 'సైబర్వట్టంకి స్వాగతం...!!!\n\nఈ సైట్ ఉద్దేశ్యం భారతీయ భాషల్లో సాంకేతిక సమాచారాన్ని సృష్టించడం, తద్వారా ప్రతి ఒక్కరూ తమ మాతృభాషలో సాంకేతికతను నేర్చుకోగలిగేలా చేయడం.\n\nప్రస్తుతం వచనాలు ఇంగ్లీష్ మరియు తమిళంలో అందుబాటులో ఉన్నాయి. ఇతర భాషలలో కూడా అందుబాటులో చేయాలనే ఉద్దేశ్యంతో మనం పని చేస్తున్నాం.\n\nమీ భాషలో అందుబాటులో చేయడానికి మీరు సహకరించవచ్చు.\n\nఈ సైట్లో ఉన్న అన్ని కంటెంట్ [Creative Commons-Attribution-Noncommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC-BY-NC-SA 4.0) లైసెన్స్ కింద అందుబాటులో ఉంది.'
          : locale === 'kn'
            ? 'ಸೈಬರ್ವತ್ತಂಗೆ ಸ್ವಾಗತ...!!!\n\nಈ ಸೈಟ್‌ನ ಉದ್ದೇಶವೆಂದರೆ ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ತಾಂತ್ರಿಕ ವಿಷಯಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ಜನರು ತಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ತಂತ್ರಜ್ಞಾನವನ್ನು ಕಲಿಯಲು ಸಹಾಯ ಮಾಡುವುದು.\n\nಪ್ರಸ್ತುತ ವಿಷಯಗಳು ಇಂಗ್ಲಿಷ್ ಮತ್ತು ತಮಿಳಿನಲ್ಲಿ ಲಭ್ಯವಿವೆ. ಇತರ ಭಾಷೆಗಳಲ್ಲಿ ಸಹ ಲಭ್ಯವಾಗಿಸುವುದಕ್ಕೆ ನಾವು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇವೆ.\n\nನೀವು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಅದನ್ನು ಲಭ್ಯವಾಗಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು.\n\nಈ ಸೈಟಿನ ಎಲ್ಲಾ ಕೆಲಸಗಳು [Creative Commons-Attribution-Noncommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC-BY-NC-SA 4.0) ಲೈಸೆನ್ಸ್ ಅಡಿಯಲ್ಲಿ ಒದಗಿಸಲಾಗಿದೆ.'
            : 'Welcome to Cybervattam...!!!\n\nThe purpose of this site is to create technical content in Indian languages so people can learn technology in their native language.\n\nCurrently, content is available in English and Tamil. We are interested in making it available in other languages as well.\n\nYou can help make it available in your language.\n\nAll works on this site are provided under the [Creative Commons-Attribution-Noncommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) (CC-BY-NC-SA 4.0) license.'
  );

  fs.writeFileSync(filePath, withLanding, 'utf8');
}

for (const locale of targets) {
  const targetDir = path.join(root, 'site', `content.${locale}`);
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  copyDir(source, targetDir);
  const allFiles = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else allFiles.push(full);
    }
  }
  walk(targetDir);
  for (const file of allFiles) {
    if (file.endsWith('.md')) {
      translateFile(file, locale);
    }
  }
}

console.log('Copied English content into hi/ml/te/kn locale folders and applied localized titles.');
