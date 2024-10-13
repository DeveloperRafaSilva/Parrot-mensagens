import PutMessagem from "./PutMessage.js";

export default function fetchApi() {
  const dataContainerMessages = document.querySelector("[data-conteudo-post]");

  async function fetchPost() {
    try {
      const response = await fetch("https://tagchatter.herokuapp.com/messages");
      const dados = await response.json();

      for (let i = 0; i < 5; i++) {
        const divCriada = document.createElement("div");
        divCriada.innerHTML = `
        <div class="card-comentario">
          <div class="div-info">
            <div class="perfil">
              <img src="${dados[i].author.avatar}" alt="${
          dados[i].author.id
        }" />
              <h2>${dados[i].author.name}</h2>
            </div>
            <div class="infos-post-usuario">
              <img data-like-parrot src="${
                dados[i].has_parrot
                  ? "./imgs/parrot.svg"
                  : "./imgs/parrot-grey.svg"
              }" alt="icone parrot" />
            </div>
          </div>
          <div class="conteudo-post">
            <p>${dados[i].content}</p>
          </div>
        </div>
        `;
        dataContainerMessages.appendChild(divCriada);
      }
      const dataLikeParrot = document.querySelectorAll("[data-like-parrot]");
      dataLikeParrot.forEach((itemClick, index) => {
        itemClick.addEventListener("click", async () => {
          const updateMessage = await PutMessagem(dados[index].id);
          console.log(dados);
        });
      });
    } catch (e) {
      console.error("Erro ao buscar ou atualizar as mensagens", e);
    }
  }

  fetchPost();
}
