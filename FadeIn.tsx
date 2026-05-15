@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Poppins:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --deep-fern: #1E3D1A;
  --fern: #3E7D38;
  --sage: #6BAE61;
  --mint: #A8D5A2;
  --rose: #C13B6B;
  --blush: #F9A8C0;
  --petal: #FCEEF4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--deep-fern);
  color: var(--petal);
  font-family: "Poppins", system-ui, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: var(--rose);
  color: var(--petal);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: var(--deep-fern);
}
::-webkit-scrollbar-thumb {
  background: var(--fern);
  border-radius: 2px;
}

/* Form inputs */
input, textarea, select {
  font-family: "Poppins", system-ui, sans-serif;
}

/* Focus visible */
*:focus-visible {
  outline: 1px solid var(--mint);
  outline-offset: 2px;
}
