export async function findVerificationCode(user: string, domain: string, id: string) {
  const apiResponse = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${user}&domain=${domain}&id=${id}`).then(res => res.json())
  const regex = /https:\/\/api-im\.mcdonaldscupones\.com\/verify\?verifyToken=.+?(?=")/;
  const match = apiResponse.body.match(regex)[0];
  return await fetch(match)
    .then(res => {
      // console.log('✅ Conta verificada')
    })
}