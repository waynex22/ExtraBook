import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react';
import { AuthContext } from '../../Contexts/authContext'
import validationConfig from '../../utils/validateForm';
const Login = () => {
  const { login, register, message } = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const validateForm = () => {
    let valid = true;
    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: validationConfig.name.required }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: validationConfig.email.required }));
      valid = false;
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: validationConfig.email.invalid }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
    if (!password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: validationConfig.password.required }));
      valid = false;
    } else if (password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: validationConfig.password.minLength }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: validationConfig.confirmPassword.match }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    }


    return valid;
  };
  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    setIsRegister(false);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    login({ name, password })
  }
  const handleRegister = (e) => {
    e.preventDefault()
    if (validateForm()) {
      register({ name, email, password })
    } else {
      console.log('err');
    }
  }
  return (
    <>
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-orange-300 to-red-600 p-0.5 shadow-lg">
        <button className='flex-1 text-md bg-white px-2 py-2 rounded-xl' onClick={() => setOpenModal(true)}>Đăng nhập</button>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>{isRegister ? (
        <>
          <Modal.Header />
          <Modal.Body>
            <span className="font-medium text-yellow-400 mb-4">{message}</span>
            <div className="space-y-6">
              <h3 className="text-xl text-red-600 font-bold">Đăng Ký </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Tên Tài Khoản" />
                </div>
                <TextInput
                  id="name"
                  placeholder="tên đăng nhập"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Mật khẩu" />
                </div>
                <TextInput
                  id="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                <div className="mb-2 block">
                  <Label htmlFor="confirmPassword" value=" Nhập lại mật khẩu" />
                </div>
                <TextInput
                  id="password"
                  placeholder="********"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  required />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              <div className="flex max-w-sm rounded-xl bg-gradient-to-tr w-full from-pink-300 to-blue-300 p-0.5 shadow-lg">
                <button className='flex-1 text-md bg-white px-2 py-2 rounded-xl' onClick={handleRegister}>Đăng ký</button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Bạn đã có tài khoản?&nbsp;
                <button onClick={() => setIsRegister(false)} className="text-red-700 hover:underline">
                  Đăng Nhập Ngay
                </button>
              </div>
            </div>
          </Modal.Body>

        </>
      ) : (
        <>
          <Modal.Header />
          <Modal.Body>
            <span className="font-medium text-yellow-400 mb-4">{message}</span>

            <div className="space-y-6">
              <h3 className="text-xl text-red-600 font-bold">Đăng nhập </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Tên Tài Khoản" />
                </div>
                <TextInput
                  id="name"
                  placeholder="tên đăng nhập"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Mật Khẩu" />
                </div>
                <TextInput
                  id="password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Lưu tài khoản</Label>
                </div>
                <Link to='/' className="text-sm text-red-700 hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="flex max-w-sm rounded-xl bg-gradient-to-tr w-full from-pink-300 to-blue-300 p-0.5 shadow-lg">
                <button className='flex-1 text-md bg-white px-2 py-2 rounded-xl' onClick={handleLogin}>Đăng nhập</button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Bạn chưa có tài khoản?&nbsp;
                <button onClick={() => setIsRegister(!isRegister)} className="text-red-700 hover:underline">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </Modal.Body>
        </>
      )}
      </Modal>
    </>
  );
}
export default Login