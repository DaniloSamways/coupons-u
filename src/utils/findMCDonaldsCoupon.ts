export async function findMCDonaldsCoupon(email: string, id: number) {
  const message = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${email}&domain=1secmail.com&id=${id}`).then(res => res.json())
  const regex = /https:\/\/view\.news\.mcdonalds\.com\.br\/\?\S*/;
  const result = message.body.match(regex)[0]
  return result
}