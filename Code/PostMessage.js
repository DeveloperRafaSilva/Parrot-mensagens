export default function PostMessage() {
  const dataIconeEnviar = document.querySelector("[data-icone-enviar]");
  const dataEnviarMessage = document.querySelector("[data-enviar-input]");
  const dataImagemPerfil = document.querySelector("[data-imagem-de-perfil]");

  dataIconeEnviar.addEventListener("click", enivarMensagem);
  async function enivarMensagem() {
    try {
      const response = await fetch(
        "https://tagchatter.herokuapp.com/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: dataEnviarMessage.value,
            author_id: window.localStorage.getItem("user"),
          }),
        }
      );
      const dados = await response.json();
      console.log(dados);
    } catch (e) {
    } finally {
    }
  }

  async function USER() {
    try {
      const response = await fetch("https://tagchatter.herokuapp.com/me", {
        method: "GET",
      });
      const dados = await response.json();
      console.log(dados);
      dataImagemPerfil.setAttribute("src", dados.avatar);
      window.localStorage.setItem("user", dados.id);
    } catch (e) {
    } finally {
    }
  }
  USER();
}
