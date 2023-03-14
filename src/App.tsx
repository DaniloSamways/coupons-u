import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import IconButton from './components/IconButton';
import InputText from './components/InputText';
import { findMCDonaldsCode } from './utils/findMCDonaldsCode';
import { generateCpf } from './utils/generateCpf';
import { FiCopy } from 'react-icons/fi'
import { enqueueSnackbar } from 'notistack'

async function findEmails(email: string) {
  return await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${email}&domain=1secmail.com`).then(res => res.json())
}

function notification(message: string, variant: 'success' | 'error') {
  return enqueueSnackbar(message, { autoHideDuration: 2000, variant })
}

function App() {
  const [cpf, setCpf] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const findVerificationCodeLink = async (id: number) => {
    const couponLink = await findMCDonaldsCode(email, id)
    generateNewCpf();
    notification('Código de verificação encontrado!', 'success')
    setLoading(false)
    return window.open(couponLink, '_blank')!.focus();
  }

  async function verifyEmailInbox(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true)
    const response = await findEmails(email)

    if (response.length > 0) {
      return findVerificationCodeLink(response[0].id)
    }

    for (let c = 0; c < 15; c++) {
      const response = await findEmails(email)
      if (response.length > 0) {
        return findVerificationCodeLink(response[0].id)
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    notification('Código de verificação não encontrado!', 'error')
    setLoading(false)
  }

  const generateNewCpf = () => {
    setCpf(generateCpf())
  }

  useEffect(() => {
    generateNewCpf()
  }, [])

  return (
    <>
      <Header />
      <main onSubmit={verifyEmailInbox}>
        <form>
          <div className="input-group">
            <InputText
              label='CPF'
              placeholder='000.000.000-00'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              disabled
            />
            <IconButton onClick={() => { navigator.clipboard.writeText(cpf); notification('CPF copiado com sucesso!', 'success') }}>
              <FiCopy />
            </IconButton>
          </div>
          <div className="input-group">
            <InputText
              label='Email'
              placeholder='user'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              additional="@1secmail.com"
              required
            />
            <IconButton onClick={() => { navigator.clipboard.writeText(email + '@1secmail.com'); notification('Email copiado com sucesso!', 'success') }}>
              <FiCopy />
            </IconButton>
          </div>
          <Button type="submit" disabled={loading}>Verify Account</Button>
        </form>
      </main>

    </>
  );
}

export default App;