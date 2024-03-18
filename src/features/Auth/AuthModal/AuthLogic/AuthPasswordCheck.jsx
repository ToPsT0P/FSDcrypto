

const AuthPasswordCheck = ({isModal, setErrorPassword, userPassword, checkUserPassword}) => {
    if(isModal == "Auth"){
        if( userPassword == checkUserPassword){
            setErrorPassword(false)
            return
        }else{
            setErrorPassword(true)
            return
        }
            
    }else{
        setErrorPassword(false)
    }
    
    
}

export default AuthPasswordCheck