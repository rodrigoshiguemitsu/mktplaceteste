import{Link} from 'react-router-dom'
import'./pasteis.css'

function Pasteis(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='articlepasteis1'>

            <h2>Olá eu sou a página Pastéis</h2>
            <Link to='/pastelaria1'><section>
                <p className='pasteisimg1'>Pastelaria1</p>
                
                
                
            </section></Link>
            
            <Link to='/pastelaria2'><section>
                <p className='pasteisimg1'>Pastelaria2</p>
              
              
            </section></Link>
            
            <Link to='/pastelaria3'><section>
                <p className='pasteisimg1'>Pastelaria3</p>
            </section></Link>
            
            <Link to='/pastelaria4'><section>
                <p className='pasteisimg1'>Pastelaria4</p>
            </section></Link>
            
            <Link to='/pastelaria5'><section>
                <p className='pasteisimg1'>Pastelaria5</p>
            </section></Link>
            
            <Link to='/pastelaria6'><section>
                <p className='pasteisimg1'>Pastelaria6</p>
            </section></Link>
            
            <Link to='/pastelaria7'><section>
                <p className='pasteisimg1'>Pastelaria7</p>
            </section></Link>
            
            <Link to='/pastelaria8'><section>
                <p className='pasteisimg1'>Pastelaria8</p>
            </section></Link>
            
            <Link to='/pastelaria9'><section>
                <p className='pasteisimg1'>Pastelaria9</p>
            </section></Link>
            
            <Link to='/pastelaria10'><section>
                <p className='pasteisimg1'>Pastelaria10</p> 
            </section></Link>

            </article>
          
           
        </article>
        </main>
    )
}

export default Pasteis