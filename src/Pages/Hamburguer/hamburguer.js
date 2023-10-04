import{Link} from 'react-router-dom'
import'./hamburguer.css'


import bannerpqn1 from '../../Multimidia/Hamburguer/bannerpqn1.jpg'
function Hamburguer(){


    return(
        <main>
        <article>
            <Link to='/'>Home</Link>
            
            
            <article id='articlehamburguer1'>
            
            <div id='aga2hamburguer'><h2>
                Hamburguerias
            </h2></div>
            
            
            <section className='disFlex'><Link to='/hamburgueria1'>
                <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            
            </Link></section>
        
            
            <section className='disFlex'><Link to='/hamburgueria2'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
                           
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria3'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria4'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria5'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria6'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria7'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria8'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria9'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>
            
            <section className='disFlex'><Link to='/hamburgueria10'>
            <img className='hamburguerimg1' src={bannerpqn1} alt='bannerpqn1'/>
            </Link></section>

            </article>
            
           </article>

           
        </main>
    )
}

export default Hamburguer