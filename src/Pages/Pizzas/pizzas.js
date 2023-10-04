import{Link} from 'react-router-dom'
import'./pizzarias.css'

function Pizzarias(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='articlepizzaria1'>

            <h2>Olá eu sou a página Pizzarias</h2>
            <Link to='/pizzaria1'><section>
                <p className='pizzariaimg1'>Pizzaria1</p>
                
                
                
            </section></Link>
            
            <Link to='/pizzaria2'><section>
                <p className='pizzariaimg1'>Pizzaria2</p>
              
              
            </section></Link>
            
            <Link to='/pizzaria3'><section>
                <p className='pizzariaimg1'>Pizzaria3</p>
            </section></Link>
            
            <Link to='/pizzaria4'><section>
                <p className='pizzariaimg1'>Pizzaria4</p>
            </section></Link>
            
            <Link to='/pizzaria5'><section>
                <p className='pizzariaimg1'>Pizzaria5</p>
            </section></Link>
            
            <Link to='/pizzaria6'><section>
                <p className='pizzariaimg1'>Pizzaria6</p>
            </section></Link>
            
            <Link to='/pizzaria7'><section>
                <p className='pizzariaimg1'>Pizzaria7</p>
            </section></Link>
            
            <Link to='/pizzaria8'><section>
                <p className='pizzariaimg1'>Pizzaria8</p>
            </section></Link>
            
            <Link to='/pizzaria9'><section>
                <p className='pizzariaimg1'>Pizzaria9</p>
            </section></Link>
            
            <Link to='/pizzaria10'><section>
                <p className='pizzariaimg1'>Pizzaria10</p>
            </section></Link>

            </article>
          
           
        </article>
        </main>
    )
}

export default Pizzarias