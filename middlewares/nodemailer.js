import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({

  host: 'smtp.office365.com',
  port: 587,
  auth: {
    user: 'mariemdev-app@hotmail.com',
    pass: 'Gestion12345',
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true,
  logger: true,
})

const confirmationAccount = (email, plainPassword) => {
  transport
    .sendMail({
      from: 'mariemdev-app@hotmail.com',
      to: email,
      subject: 'Welcome to our company ',
      html: `<div>
        <h1>Welcome to our company </h1>
        <h2>Hello<h2>
        <p>To can enter in our company, please enter this email and this password :<p>
        <p> email: ${email}<p>
        <p> password: ${plainPassword}<p>
        `,
    })
    .catch((err) => console.log(err))
}

const sendForgotPassword = (email, userId, token) => {
  transport
    .sendMail({
      from: 'mariemdev-app@hotmail.com',
      to: email,
      subject: 'Password Reset!',
      html: `<div>
        <h1>Password Reset!</h1>
        <h2>Hello<h2>
        <p>To reset your password, please click on the link<p>

        <a href=http://localhost:3000/reset-password/${userId}/${token}>Click here! </a>
        </div>
        `,
    })
    .catch((err) => console.log(err))
}

const resetPasswordEmail = (email, password) => {
  transport
    .sendMail({
      from: 'mariemdev-app@hotmail.com',
      to: email,
      subject: 'Welcome back to our company ',
      html: `<div>
        <h1>Welcome back to our company </h1>
        <h2>Hello<h2>
        <p>Your password is updated :<p>
        <p> email: ${email}<p>
        <p> password: ${password}<p>
        `,
    })
    .catch((err) => console.log(err))
}
export { confirmationAccount, sendForgotPassword, resetPasswordEmail }
