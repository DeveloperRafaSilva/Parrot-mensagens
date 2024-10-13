import PutMessagem from "./PutMessage.js";

export default function fetchApi() {
  const dataContainerMessages = document.querySelector("[data-conteudo-post]");

  async function fetchPost() {
    try {
      const response = await fetch("https://tagchatter.herokuapp.com/messages");
      const dados = await response.json();
      console.log(dados);

      for (let i = 0; i < 5; i++) {
        const divCriada = document.createElement("div");
        divCriada.innerHTML = `
        <div data-div-like class="card-comentario">
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
        console.log(dados[i].has_parrot);
      }
      const dataLikeParrot = document.querySelectorAll("[data-like-parrot]");
      const dataDivLike = document.querySelectorAll("[data-div-like]");
      dataLikeParrot.forEach((itemClick, index) => {
        itemClick.addEventListener("click", async () => {
          await PutMessagem(dados[index].id);
          const dadoslIKE = dados[index].has_parrot;
          const parrotLike = !dadoslIKE;

          if (parrotLike) {
            dataDivLike[index].classList.add("liked");
          } else {
            alert("olá");
          }

          itemClick.src = dados[index].has_parrot
            ? "./imgs/parrot-grey.svg"
            : "./imgs/parrot.svg";
        });
      });
    } catch (e) {
      console.error("Erro ao buscar ou atualizar as mensagens", e);
    }
  }

  fetchPost();
}
