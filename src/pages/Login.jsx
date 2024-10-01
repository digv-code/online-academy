import loginImg from "../assets/Images/login.webp"
import Template from "../../src/components/core/auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="The future belongs to those who believe in the beauty of their dreams."
      description2="It does not matter how slowly you go as long as you do not stop."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login