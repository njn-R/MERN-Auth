import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await register({ name, email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <FormContainer>
        <h4 style={{ textAlign: 'center' }}>Let's go!</h4>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Choose Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {isLoading && <Loader />}

          <Button
            type='submit'
            variant='primary'
            className='animated-gradient-button full-width-button mt-3'
          >
            Sign Up
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
