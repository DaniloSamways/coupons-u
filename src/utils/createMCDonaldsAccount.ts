import { generateCpf } from "./generateCpf";

async function fetchAPI(email: string, password: string, cpf: string) {
  return await fetch("https://api-im.mcdonaldscupones.com/customers/multi", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "es",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjYxMWU0NWU4OTlhNGZkMDI2YWVkYTQzYyIsIm5hbWUiOiJNY0VudHJlZ2EgV2ViIiwidHlwZSI6ImF1dGgiLCJsYXN0UmVxdWVzdCI6IjIwMjMtMDMtMTRUMDQ6NTU6MzkuNzE2WiIsImlhdCI6MTY3ODc2OTczOSwiZXhwIjoxNjc4NzczMzM5fQ.ky2aHZCThttZW1TzoW5rPSb8vHhr5guW9UX6TWgj9kY",
      "content-type": "application/json",
      "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrerPolicy": "no-referrer",
    "body": `{\"metadata\":{\"email\":\"${email}\",\"password\":\"${password}\",\"passwordConfirmation\":\"${password}\",\"country\":\"BR\",\"promoInfo\":\"true\",\"optInCpf\":\"false\",\"countryProfile\":\"BR\",\"documentType\":\"BRCPF\",\"cpf\":\"${cpf}\",\"appVersion\":\"web\"},\"hidden\":{\"apps\":[{\"app\":\"mcentrega-2.8.1\",\"clientToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjYxMWU0NWU4OTlhNGZkMDI2YWVkYTQzYyIsIm5hbWUiOiJNY0VudHJlZ2EgV2ViIiwidHlwZSI6ImF1dGgiLCJsYXN0UmVxdWVzdCI6IjIwMjMtMDMtMTRUMDQ6NTU6MzkuNzE2WiIsImlhdCI6MTY3ODc2OTczOSwiZXhwIjoxNjc4NzczMzM5fQ.ky2aHZCThttZW1TzoW5rPSb8vHhr5guW9UX6TWgj9kY\"},{\"app\":\"mcdonalds-2.8.1\",\"clientToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjYxMWU0NjEwZGZjM2FkMDI3NDhiZjM2YSIsIm5hbWUiOiJNY0RvbmFsZHMgV2ViIiwidHlwZSI6ImF1dGgiLCJsYXN0UmVxdWVzdCI6IjIwMjMtMDMtMTRUMDQ6NTU6MzkuNzE3WiIsImlhdCI6MTY3ODc2OTczOSwiZXhwIjoxNjc4NzczMzM5fQ.aadGRwayqiBAofB3rKe2kyA3DaI0uijMwhvaB5AfGoI\"}],\"type\":\"database\"},\"landingVerifyUrl\":\"https://www.mcdonalds.com.br/pedidos\"}`,
    "method": "POST"
  }).then(response => response.json());
}


export async function createNewAccount() {
  const res = await fetchAPI('teste7@1secmail.com', 'Account1@', generateCpf())
  console.log(res.json())
}

createNewAccount()