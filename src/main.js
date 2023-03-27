import GenerateCpf from "./module/generateCpf";

import "./assets/css/style.css";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const generate = new GenerateCpf();
  const generatedCpf = document.querySelector(".generated-cpf");
  generatedCpf.innerHTML = generate.generateNewCpf();
});


