# Structure Reader

웹사이트 URL을 입력하면 HTML/CSS 학습 관점의 참고서형 구조 분석 리포트를 생성하는 React + Vite 웹앱입니다.

현재 버전은 실제 사이트를 크롤링하지 않고, 기본 구조 분석 템플릿을 기반으로 리포트를 만듭니다. 추후 OpenAI API 연결을 고려해 `src/utils/generateAnalysis.js`에 분석 생성 로직을 분리했습니다.

## 설치

Node.js 20.19 이상을 권장합니다.

```bash
npm install
```

## 실행

```bash
npm run dev
```

브라우저에서 Vite가 출력하는 로컬 주소를 열어 확인합니다.

## 빌드

```bash
npm run build
```

## 사용 방법

1. Home 화면에서 분석할 URL을 입력합니다.
2. `분석 시작` 버튼을 누르면 `/analysis` 화면에서 리포트를 볼 수 있습니다.
3. `/samples` 화면에서 NAVER, 29CM, SSG.COM, SSF SHOP 샘플 분석을 확인할 수 있습니다.
4. 리포트 상단의 복사 버튼으로 분석 내용을 클립보드에 복사할 수 있습니다.

## 주요 구조

```text
src/
  App.jsx
  main.jsx
  data/
    sampleAnalyses.js
    mdnLinks.js
    templates.js
  components/
    Header.jsx
    UrlInputForm.jsx
    AnalysisReport.jsx
    ReportSection.jsx
    CodeBlock.jsx
    KeywordCard.jsx
    SampleCard.jsx
  pages/
    Home.jsx
    AnalysisResult.jsx
    Samples.jsx
  utils/
    generateAnalysis.js
  styles/
    global.css
```
