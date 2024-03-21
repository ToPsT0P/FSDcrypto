

const AuthEmailCheck = ({userEmail, setErrorEmail}) => {

    const isValidEmail = /\S+@\S+\.\S+/.test(userEmail);
    setErrorEmail(isValidEmail);
}

export default AuthEmailCheck