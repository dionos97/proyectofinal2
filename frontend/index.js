document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm')
  const registerForm = document.getElementById('registerForm')
  const loginMessage = document.getElementById('loginMessage')
  const registerMessage = document.getElementById('registerMessage')
  const express = require('express')
  const app = express()
  const path = require('path')

  app.use(express.json())
  app.use(express.static(path.join(__dirname, 'frontend')))
  // Función para enviar una solicitud POST para iniciar sesión
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(loginForm)
    const userData = {
      username: formData.get('username'),
      password: formData.get('password')
    }

    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if (response.ok) {
        window.location.href = '/dashboard' // Redirige al dashboard si el inicio de sesión es exitoso
      } else {
        const errorMessage = await response.json()
        loginMessage.textContent = errorMessage.message
      }
    } catch (error) {
      console.error(error.message)
    }
  })

  // Función para enviar una solicitud POST para registrarse
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(registerForm)
    const userData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
      const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if (response.ok) {
        const successMessage = await response.json()
        registerMessage.textContent = successMessage.message
      } else {
        const errorMessage = await response.json()
        registerMessage.textContent = errorMessage.message
      }
    } catch (error) {
      console.error(error.message)
    }
  })
})
