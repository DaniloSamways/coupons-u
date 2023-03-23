import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import IconButton from './components/IconButton';
import InputText from './components/InputText';
import { FiCopy } from 'react-icons/fi'
import { enqueueSnackbar } from 'notistack'
import { createNewAccount } from './utils/mcdonalds/createNewAccount';

function notification(message: string, variant: 'success' | 'error') {
  return enqueueSnackbar(message, { autoHideDuration: 2000, variant })
}

function App() {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [domain, setDomain] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const generateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    try {
      const { user, password, domain } = await createNewAccount()
      notification('Conta gerada com sucesso!', 'success')
      setPassword(password!)
      setDomain(domain)
      setEmail(user)
    } catch (error) {
      notification('Erro ao gerar conta!', 'error')
    }

    setLoading(false)
  }

  return (
    <>
      <Header />
      <main onSubmit={generateAccount}>
        <form>
          <div className="input-group">
            <InputText
              label='Email'
              placeholder='user'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              additional={domain ? "@" + domain : "@domain.com"}
              required
              disabled
            />
            <IconButton onClick={() => { navigator.clipboard.writeText(email + '@' + domain); notification('Email copiado com sucesso!', 'success') }}>
              <FiCopy />
            </IconButton>
          </div>
          <div className="input-group">
            <InputText
              label='Password'
              placeholder=''
              value={password}
              disabled
            />
            <IconButton onClick={() => { navigator.clipboard.writeText(password); notification('Senha copiada com sucesso!', 'success') }}>
              <FiCopy />
            </IconButton>
          </div>
          <Button disabled={loading} type="submit" onClick={() => createNewAccount()}>Gerar nova conta</Button>
        </form>
      </main>

    </>
  );
}

export default App;