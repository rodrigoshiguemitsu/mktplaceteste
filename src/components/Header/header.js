import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
<div id='headermain'>
    <nav>
        <ul>
            <Link  to='/hamburguer' className='decnone'><li>Hamburguer</li></Link>
            
            <Link  to='/pizzas'className='decnone'><li>Pizzas</li></Link>
            <Link to='/pasteis' className='decnone'><li>Pasteis</li></Link>
            <Link to='/arabe' className='decnone'><li>Arabe</li></Link>
            <Link to='/espetos' className='decnone'><li>Espetos</li></Link>
            <Link className='decnone'><li>PetShop</li></Link>
            
        </ul>
    </nav>
</div>
    )
}
export default Header