export async function getEmail() {
  const email = await fetch(`https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1`).then(res => res.json())
  const domain = email[0].split('@')[1]
  const returnEmail = email[0].split('@')[0]
  return { user: returnEmail, domain }
}