import{Link} from 'react-router-dom'
import'./barbearias.css'

function Barbearias(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='articleBarbearias1'>

            <h2>Barbearias</h2>
            <Link to='/barbearia1'><section>
                <p className='barbeariasImg1'>Barbearia1</p>
                
                
                
            </section></Link>
            
            <Link to='/barbearia2'><section>
                <p className='barbeariasImg1'>Barbearia2</p>
              
              
            </section></Link>
            
           <Link to='/barbearia3'> <section>
                <p className='barbeariasImg1'>Barbearia3</p>
            </section></Link>
            
            <Link to='/barbearia4'><section>
                <p className='barbeariasImg1'>Barbearia4</p>
            </section></Link>
            
            <Link to='/barbearia5'><section>
                <p className='barbeariasImg1'>Barbearia5</p>
            </section></Link>
            
            <Link to='/barbearia6'><section>
                <p className='barbeariasImg1'>Barbearia6</p>
            </section></Link>
            
            <Link to='/barbearia7'><section>
                <p className='barbeariasImg1'>Barbearia7</p>
            </section></Link>
            
            <Link to='/barbearia8'><section>
                <p className='barbeariasImg1'>Barbearia8</p>
            </section></Link>
            
            <Link to='/barbearia9'><section>
                <p className='barbeariasImg1'>Barbearia9</p>
            </section></Link>
            
            <Link to='/barbearia10'><section>
                <p className='barbeariasImg1'>Barbearia10</p>
            </section></Link>

            </article>
          
           
        </article>
        </main>
    )
}

export default Barbearias