import { getBearerToken } from "./getBearerToken";

export async function fetchAPI(email: string, password: string, cpf: string) {
  const token = await getBearerToken();
  try {
    const response = await fetch("https://api-im.mcdonaldscupones.com/customers/multi", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "es",
        "authorization": `Bearer ${token} `,
        "content-type": "application/json",
        "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      "referrerPolicy": "no-referrer",
      "body": `{
      \"metadata\":{\"email\":\"${email}\",\"password\":\"${password}\",\"passwordConfirmation\":\"${password}\",\"country\":\"BR\",\"promoInfo\":\"true\",\"optInCpf\":\"false\",\"countryProfile\":\"BR\",\"documentType\":\"BRCPF\",\"cpf\":\"${cpf}\",\"appVersion\":\"web\"},\"hidden\":{\"apps\":[{\"app\":\"mcentrega-2.8.1\",\"clientToken\":\"${token}\"}],\"type\":\"database\"},\"landingVerifyUrl\":\"https://www.mcdonalds.com.br/pedidos\"}`,
      "method": "POST"
    }).then(response => response.json());
    // console.log('✅ Conta criada com sucesso')
    return response
  } catch (e) {
    console.log(e)
  }
}