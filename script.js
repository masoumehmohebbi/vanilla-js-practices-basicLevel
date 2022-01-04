function GettingUserNameAndPass (userName , passWord){

    if (((userName.length > 8) && (passWord.length > 12)) || 
     ((userName.startsWith("m")) && (!userName.endsWith('m')))){
    
        alert('LogIn')
    }else{
        alert('You can not logIn')
    }
}
GettingUserNameAndPass('mj2mm34' , '1234n5')
