process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => (Math.round(Math.random() * number));
let mod = (dividendo, divisor) => Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));

function generateCpf() {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (mod(d1, 11));
  if (d1 >= 10) d1 = 0;

  let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (mod(d2, 11));
  if (d2 >= 10) d2 = 0;

  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
}

async function getBearerToken() {
  try {
    const res = await fetch("https://www.mcdonalds.com.br/api/auth-multi-im", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json;charset=UTF-8",
        "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "visid_incap_1363559=/XoAduM7QBmNOjbQnQRDFKe95mMAAAAAQUIPAAAAAAAqt+k2zgSUBCDGQMGT67wV; _fbp=fb.2.1676066213894.1714802748; _gid=GA1.3.1608096579.1678769625; _hjSessionUser_2929138=eyJpZCI6ImUxOWU0YzEwLWEyNTUtNWRhOC1hYzYxLTQyNzg3MjU2Y2MwOCIsImNyZWF0ZWQiOjE2NzYwNjYyMTQyMDYsImV4aXN0aW5nIjp0cnVlfQ==; vuex={%22mop%22:{%22config%22:{%22code%22:%22BR%22}}%2C%22auth%22:{%22user%22:{%22access%22:{%220%22:{%22token%22:null}}}}%2C%22bannerExpirationTime%22:null}; nlbi_1363559=2QFZJ7+1axuhi3Vbcngt4AAAAADM7WbJ7xDBdn3eupLTclZd; incap_ses_1704_1363559=u3opd0pTsQjsmadrEtOlFwyREGQAAAAApKvHq+AMMAye4Wbr7dkz+g==; ___utmvc=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; _ga=GA1.3.433532738.1676066214; _gat_UA-122667709-3=1; _hjIncludedInSessionSample_2929138=0; _hjSession_2929138=eyJpZCI6IjNhYzQxOTdkLTIxM2MtNDY2Ni1hMDVlLWY3ZjNmYTNjZjQ2OSIsImNyZWF0ZWQiOjE2Nzg4MDczMDIwNTksImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _ga_KPJKX7XEK3=GS1.1.1678807301.3.1.1678807306.0.0.0"
      },
      "referrerPolicy": "no-referrer",
      "body": "{\"url\":\"https://api-im.mcdonaldscupones.com/\"}",
      "method": "POST"
    });
    const data = await res.json();
    return data.response[0].token;
  } catch (e) {
    console.log(e)
  }
}

async function fetchAPI(email, password, cpf) {
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
    console.log('✅ Conta criada com sucesso')
    return response
  } catch(e) {
    console.log(e)
  }
}

async function findEmails(email, domain) {
  return await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email}&domain=${domain}`).then(res => res.json())
}

async function findVerificationCode(user, domain, id) {
  const apiResponse = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${user}&domain=${domain}&id=${id}`).then(res => res.json())
  const regex = /https:\/\/api-im\.mcdonaldscupones\.com\/verify\?verifyToken=.+?(?=")/;
  const match = apiResponse.body.match(regex)[0];
  return await fetch(match).then(res => console.log('✅ Conta verificada'))
}

async function getEmail() {
  const email = await fetch(`https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1`).then(res => res.json())
  const domain = email[0].split('@')[1]
  const returnEmail = email[0].split('@')[0]
  return { user: returnEmail, domain }
}

async function createNewAccount() {
  const { user, domain } = await getEmail();
  let email = user + '@' + domain
  await fetchAPI(email, 'Account1@', generateCpf())

  for (let c = 0; c < 30; c++) {
    const response = await findEmails(user, domain)
    if (response.length > 0) {
      findVerificationCode(user, domain, response[0].id)
      break
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return console.log(`Email: ${email} \nSenha: Account1@`)
}

createNewAccount()