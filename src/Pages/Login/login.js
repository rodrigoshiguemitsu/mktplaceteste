import './login.css'


function Login(){
    return(
        <main id="mainLogin">
        <label>
            Email:
            <input
            type='email'/>
        </label><br/>
        <label>
            Senha:
            <input
            type='password'
            />
        </label>
        </main>
    )
}
export default Login