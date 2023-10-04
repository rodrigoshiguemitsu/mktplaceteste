import{Link} from 'react-router-dom'
import'./adegas.css'

function  Adegas(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='articleAdegas1'>

            <h2>Olá eu sou a página Adegas</h2>
            
            
            <Link to='/adega1'><section>
                <p className='adegasImg1'>Adega1</p>
                
                
                
            </section></Link>
            
            <Link to='/adega2'><section>
                <p className='adegasImg1'>Adega2</p>
              
              
            </section></Link>
            
            <Link to='/adega3'><section>
                <p className='adegasImg1'>Adega3</p>
            </section></Link>
            
            <Link to='/adega4'><section>
                <p className='adegasImg1'>Adega4</p>
            </section></Link>
            
            <Link to='/adega5'><section>
                <p className='adegasImg1'>Adega5</p>
            </section></Link>
            
            <Link to='/adega6'><section>
                <p className='adegasImg1'>Adega6</p>
            </section></Link>
            
            <Link to='/adega7'><section>
                <p className='adegasImg1'>Adega7</p>
            </section></Link>
            
            <Link to='/adega8'><section>
                <p className='adegasImg1'>Adega8</p>
            </section></Link>
            
            <Link to='/adega9'><section>
                <p className='adegasImg1'>Adega9</p>
            </section></Link>
            
            <Link to='/adega10'><section>
                <p className='adegasImg1'>Adega10</p>
            </section></Link>

            </article>
          
           
        </article>
        </main>
    )
}

export default Adegas