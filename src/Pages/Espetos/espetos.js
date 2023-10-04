import{Link} from 'react-router-dom'
import'./espetos.css'

function Espetos(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='artiespetos1'>

            <h2>Olá eu sou a página Espetos</h2>
            
            
            <Link to='/espetos1'><section>
                <p className='espetosimg1'>Espetos1</p>
                
                
                
            </section></Link>
            
            <Link to='/espetos2'><section>
                <p className='espetosimg1'>Espetos2</p>
              
              
            </section></Link>
            
            <Link to='/espetos3'><section>
                <p className='espetosimg1'>Espetos3</p>
            </section></Link>
            
            <Link to='/espetos4'><section>
                <p className='espetosimg1'>Espetos4</p>
            </section></Link>
            
            <Link to='/espetos5'><section>
                <p className='espetosimg1'>Espetos5</p>
            </section></Link>
            
            <Link to='/espetos6'><section>
                <p className='espetosimg1'>Espetos6</p>
            </section></Link>
            
            <Link to='/espetos7'><section>
                <p className='espetosimg1'>Espetos7</p>
            </section></Link>
            
            <Link to='/espetos8'><section>
                <p className='espetosimg1'>Espetos8</p>
            </section></Link>
            
            <Link to='/espetos9'><section>
                <p className='espetosimg1'>Espetos9</p>
            </section></Link>
            
            <Link to='/espetos10'><section>
                <p className='espetosimg1'>Espetos10</p>
            </section></Link>

            </article>
          
           
        </article>
        </main>
    )
}

export default Espetos