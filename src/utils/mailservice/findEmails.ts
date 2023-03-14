export async function findEmails(email: string, domain: string) {
  return await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email}&domain=${domain}`)
    .then(res => res.json())
}