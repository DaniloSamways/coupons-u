export async function getBearerToken() {
  try {
    console.log('Gerando token')
    const res = await fetch("https://mcdonalds-api.vercel.app/");
    const data = await res.json();
    console.log('Token gerado')
    return data.response[0].token;
  } catch (e) {
    console.log(e)
  }
}