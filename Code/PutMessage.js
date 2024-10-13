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
    console.log(dados);
  } catch (e) {
  } finally {
  }
}
