import signupImg from "../assets/Images/signup.webp"
import Template from "../../src/components/core/auth/Template"

function Signup() {
  return (
    <Template
      title=""
      description1="learn for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup