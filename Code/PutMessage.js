export default async function PutMessagem(idParrotPut) {
  console.log(idParrotPut);
  try {
    const response = await fetch(
      `https://tagchatter.herokuapp.com/messages/${idParrotPut}/parrot`,
      {
        method: "PUT",
      }
    );
    const dados = await response.json();
    window.localStorage.setItem("error", dados.error);
    throw new Error("error", dados.error);
  } catch (e) {
    console.log(e);
  } finally {
  }
}
