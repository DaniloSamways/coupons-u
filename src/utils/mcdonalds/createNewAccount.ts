import { generateCpf } from "../generateCpf";
import { findEmails } from "../mailservice/findEmails";
import { findVerificationCode } from "../mailservice/findVerificationCode";
import { getEmail } from "../mailservice/getEmail";
import { fetchAPI } from "./fetchApi";

export async function createNewAccount() {
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

  return alert(`Email: ${email} \nSenha: Account1@`)
}