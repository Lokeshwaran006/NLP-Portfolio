# Natural Language Processing & Computational Linguistics Portfolio
### Developed by: Lokeshwaran.D (Register Number: 23MID0362)
**Vellore Institute of Technology (VIT), Vellore**  
**Course:** CSI4001 - Natural Language Processing and Computational Linguistics  
**Faculty Guide:** Dr. Sharmila Banu K  
**Design Reference:** [Lokeshwaran's Python Portfolio](https://advanced-python-portfolio-nine.vercel.app/)  
**GitHub Repository:** [https://github.com/Lokeshwaran006/Natural-Language-Processing](https://github.com/Lokeshwaran006/Natural-Language-Processing)

---

## 🌟 Overview

This is the complete, production-grade Natural Language Processing (NLP) portfolio website for **Lokeshwaran.D**. Engineered from the ground up to reflect the sleek dark luxury glassmorphism, animated mesh background, and glowing interactive styling of Lokeshwaran's original Python portfolio, this project serves as a comprehensive academic and technical showcase.

It features full implementations of:
1. **Interactive Hero & Identity Showcase:** Course credentials, key metrics counter, and navigation anchors.
2. **About Me:** Academic trajectory in Integrated M.Tech CSE (Data Science), core competencies, and research philosophy.
3. **Hands-on Sessions (NLTK & Scikit-Learn):**
   - **Session 1:** Brown corpus exploration, Presidential inaugural speeches, Barack Obama 2009 speech, WordCloud visualization, stopwords removal (2700 tokens &rarr; 1142 filtered words), top 20 frequency distribution plot, Conditional Frequency Distribution (CFD) across 1961, 1981, and 2009, Cleveland average word length calculation (5.02 characters), sentence & word tokenization, and Part-of-Speech (POS) tagging.
   - **Session 2:** NLTK Names corpus (7,944 names), gender feature engineering (`last_letter`), Naive Bayes classifier training (77% accuracy, live inference testing with `'Lion'` &rarr; `male`), Scikit-Learn `CountVectorizer(binary=True)` unigram extraction, Cosine Similarity verification between OCR and Google Cloud Vision texts (`0.8944`), and Project Gutenberg ingestion (Fyodor Dostoevsky's *Crime and Punishment* #2554).
4. **Gnani.ai Enterprise Case Study:**
   - 10-section analytical study on an Indian voice AI startup (*Building India's Voice for Enterprise AI*), covering acoustic modeling, code-switching across 14 Indic languages, product suite (Automate365, Assist365, Armour365, Aura365, Inya VoiceOS), FY25 financial metrics (&#8377; 53.87 Cr revenue, 4.3&times; growth), competitive benchmarking matrix, and 14 academic citations.
   - Built-in PDF preview modal, open in new tab, and direct offline download.
5. **Presentation Pictures Gallery:**
   - Authentic classroom photographs of our project presentation at VIT Vellore (`presentationpic1.jpg`, `presentationpic2.jpg`, `presentationpic3.jpg`).
   - Interactive Lightbox with Next/Previous navigation, keyboard arrow controls (Left/Right/Esc), and slide descriptions.
6. **Flagship Project Writeup (SmartFarm 360 - All 10 Mandatory Faculty Topics):**
   - **Topic 01: Title & Executive Overview** (SmartFarm 360: AI-Powered Integrated Agricultural Intelligence Platform with Voice Assistant).
   - **Topic 02: Motivation** (Empowering 86% smallholder/marginal Indian farmers, post-harvest losses, resource bottlenecks).
   - **Topic 03: Existing Gaps & Motivating Event** (The 72-hour PMFBY insurance trap, language barriers, chemical misinformation; Cyclone Michaung December 2023 catalyst in Tamil Nadu & Andhra Pradesh).
   - **Topic 04: Architecture** (Multi-tier enterprise design: Presentation, Application Logic, Intelligence, Persistence; Zero-Dependency custom ORM; Multi-factor priority decision equation).
   - **Topic 05: Complete Tech Stack Information** (Comprehensive 15+ tool table with exact real-world purpose).
   - **Topic 06: Datasets Used & ML Validation** (TNAU, ICAR, data.gov.in, IMD; 8 module datasets x 3,200 rows = 25,600 rows total; Random Forest 99.84% accuracy, Gradient Boosting 0.982 $R^2$).
   - **Topic 07: Generative AI Prompts Used** (Master platform prompt, Gemini agricultural agent system prompt, UI webp image prompts).
   - **Topic 08: 8-Stage NLP Pipeline** (STT &rarr; Unicode Language Detection &rarr; Intent Matching &rarr; Slot-Filling FSM &rarr; Farmer Profile Sync &rarr; Dual-Engine Gemini + Knowledge Base Fallback &rarr; PDF Synthesis &rarr; TTS Recitation).
   - **Topic 09: Users, Input Specs & Output Specs** (5 target personas, strict validation ranges, multimodal dashboard/voice/PDF outputs).
   - **Topic 10: References** (9 verified academic and institutional citations).
7. **Project Demonstration Video:**
   - Embedded responsive video player previewing the live system in Google Drive (`https://drive.google.com/file/d/1QT6lB416wKq9IGoc_W2mP9wInKMuJetj/preview`).
   - Direct link to open in Google Drive.
8. **PowerPoint Slide Deck:**
   - Embedded Google Slides viewer and direct `.pptx` download link.
9. **Personal Learning Reflection:**
   - First-person reflective narrative by Lokeshwaran.D summarizing corpus linguistics, startup business models, collaborative engineering, and voice AI as a social equalizer.
10. **Footer & Academic Credentials:** Complete academic metadata, quick links, and floating back-to-top button.

---

## 💻 How to Run on Windows

This website is completely self-contained with **zero dependencies**. You do not need to install Node.js, Python, or external packages to view the full website.

### Method 1: Direct Double-Click (Quickest)
1. Extract the downloaded `Lokeshwaran_NLP_Portfolio.zip` file onto your Windows computer (e.g. to `C:\Users\YourName\Desktop\Lokeshwaran_NLP_Portfolio`).
2. Open the extracted folder and double-click **`index.html`**.
3. It will open immediately in your default browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave).

---

### Method 2: Using Python Built-in Web Server (Recommended for Best Font & Iframe Experience)
If you have Python installed on Windows:
1. Open PowerShell or Command Prompt in the extracted folder:
   ```powershell
   cd C:\path\to\Lokeshwaran_NLP_Portfolio
   ```
2. Start the lightweight web server:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

### Method 3: Using VS Code Live Server
1. Open the folder in Visual Studio Code.
2. If you have the **Live Server** extension installed, right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Directory Structure

```
Lokeshwaran_NLP_Portfolio/
│
├── index.html                   # Master single-page application (All sections, modals, tabs)
├── README.md                    # Windows execution instructions and project documentation
│
├── css/
│   └── style.css                # Dark luxury glassmorphism styles, neon gradients, animations
│
├── js/
│   └── main.js                  # Lightbox, tab switcher, copy code buttons, modals, scrollspy
│
└── assets/
    ├── images/
    │   ├── presentationpic1.jpg # Classroom presentation title photo
    │   ├── presentationpic2.jpg # Classroom presentation objectives photo
    │   ├── presentationpic3.jpg # Classroom presentation architecture photo
    │   ├── session1_wordcloud.png # High-res WordCloud from Hands-on 1
    │   ├── session1_freqdist.png  # High-res Frequency Distribution plot from Hands-on 1
    │   ├── session1_cfd.png       # High-res Conditional Frequency Distribution plot from Hands-on 1
    │   └── farm_scene.png       # Agricultural banner extracted from presentation deck
    │
    └── documents/
        ├── Casestudy.pdf        # Authentic Gnani.ai Case Study PDF
        ├── Projectwriteup.pdf   # Authentic SmartFarm 360 Project Writeup PDF
        ├── Project-ppt.pptx     # Authentic SmartFarm 360 PowerPoint Presentation
        ├── Handsonsession1.html # Complete raw Hands-on Session 1 notebook export
        └── Handsonsession2.html # Complete raw Hands-on Session 2 notebook export
```

---

## 🔗 Official Verification Links
- **Personal Python Portfolio Reference:** [https://advanced-python-portfolio-nine.vercel.app/](https://advanced-python-portfolio-nine.vercel.app/)
- **Student GitHub Repository:** [https://github.com/Lokeshwaran006/Natural-Language-Processing](https://github.com/Lokeshwaran006/Natural-Language-Processing)
- **SmartFarm 360 Demo Video:** [Google Drive Video](https://drive.google.com/file/d/1QT6lB416wKq9IGoc_W2mP9wInKMuJetj/view?usp=sharing)
- **Google Slides Presentation:** [Google Slides Deck](https://docs.google.com/presentation/d/11XDg_M9eeUh3gfDEb5JBONjn-ejc9O2_/edit?usp=sharing&ouid=102603886911151512554&rtpof=true&sd=true)

---
*Created with pride by **Lokeshwaran.D** (23MID0362) for CSI4001 Natural Language Processing and Computational Linguistics, VIT Vellore.*
