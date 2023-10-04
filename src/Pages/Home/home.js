import './home.css';
import {Link} from 'react-router-dom';

import hamburguer1pqn from '../../Multimidia/Hamburguer/hamburguer1pqn.jpg'
import pizzapqn1 from'../../Multimidia/Pizzas/pizzapqn1.jpg'
import espetospqn1 from '../../Multimidia/Espetos/espetospqn1.jpg'

import docespqn1 from '../../Multimidia/Docerias/docespqn1.jpg'
import docespqn2 from '../../Multimidia/Docerias/docespqn2.jpg'
import docespqn3 from '../../Multimidia/Docerias/docespqn3.jpg'


import sale1 from '../../Multimidia/BannersPromocionais/sale1.jpg'
import promocaopqn1 from '../../Multimidia/BannersPromocionais/promocaopqn1.jpg'


import adegapqn1 from '../../Multimidia/Adega/adegapqn1.jpg'
import adegapqn2 from '../../Multimidia/Adega/adegapqn2.jpg'
import adegapqn3 from '../../Multimidia/Adega/adegapqn3.jpg'
import adegapqn4 from '../../Multimidia/Adega/adegapqn4.png'
import adegapqn5 from '../../Multimidia/Adega/adegapqn5.jpg'
import adegapqn6 from '../../Multimidia/Adega/adegapqn6.jpg'
import adegapqn7 from '../../Multimidia/Adega/adegapqn7.jpg'




import salaobelezapqn1 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn1.jpg'
import salaobelezapqn2 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn2.jpg'
import salaobelezapqn3 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn3.jpg'
import salaobelezapqn4 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn4.jpg'
import salaobelezapqn5 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn5.jpg'
import salaobelezapqn6 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn6.jpg'
import salaobelezapqn7 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn7.jpg'
import salaobelezapqn8 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn8.jpg'
import salaobelezapqn9 from '../../Multimidia/SalaoDeBeleza/salaobelezapqn9.jpg'
import salaobelezabanner1pqn from '../../Multimidia/SalaoDeBeleza/salaobelezabanner1pqn.jpg'



import barbeariapqn1 from '../../Multimidia/Barbearia/barbeariapqn1.jpg'
import barbeariapqn2 from '../../Multimidia/Barbearia/barbeariapqn2.jpg'
import barbeariapqn3 from '../../Multimidia/Barbearia/barbeariapqn3.jpg'
import barbeariapqn4 from '../../Multimidia/Barbearia/barbeariapqn4.jpg'
import barbeariapqn5 from '../../Multimidia/Barbearia/barbeariapqn5.jpg'
import barbeariapqn6 from '../../Multimidia/Barbearia/barbeariapqn6.jpg'
import barbeariapqn7 from '../../Multimidia/Barbearia/barbeariapqn7.jpg'











function Home(){


   

    
    

    return(
        <body>
            <main id='mainhome'>
            
            
            <div className='mpromocoes'>
            <h2>Foods</h2>
            </div>
            <article id='articlehome2'>
                
            <section className='sectionhome1'>
                <Link to='/hamburguer' ><img src={hamburguer1pqn} alt='hamburguerpqn1' className='img1'/>
                <p className='descprod'>Hamburguer</p></Link>
                   
                </section>
            
            <section className='sectionhome1'>
                <Link to='/pizzas'><img src={pizzapqn1} alt='pizzapqn1' className='img1'/>
                <p className='descprod'>Pizzas</p></Link>
              
            </section>
            
            <section className='sectionhome1'>
                <Link to='/pasteis'><img src={espetospqn1} alt='espetospqn1' className='img1'/>
                <p className='descprod'>Pastéis</p></Link>
            </section>
            
            <section className='sectionhome1'>
            <Link to='/arabe'><img src={hamburguer1pqn} alt='hamburguerpqn1' className='img1'/>
                <p className='descprod'>Árabe</p></Link>
            </section>
            
            <section className='sectionhome1'>
                <Link to='/Espetos'><img src={pizzapqn1} alt='pizzapqn1' className='img1'/>
                <p className='descprod'>Espetos</p></Link>
            </section>
            
            

            </article>

            <article id='articlehome3'>
                <h2>Sobremesas</h2>
            </article>
            <article id='articlehome4'>
            
            <section className='sectionhome3'>
            <img src={docespqn2} alt='docespqn2' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn3} alt='docespqn3' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn1} alt='docespqn1' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn2} alt='docespqn2' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn3} alt='docespqn3' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn1} alt='docespqn1' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn2} alt='docespqn2' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn3} alt='docespqn3' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn1} alt='docespqn1' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn2} alt='docespqn2' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>

            </article>
            <article id='articlehome4'>
            
            <section className='sectionhome3'>
            <img src={docespqn1} alt='docespqn1' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn2} alt='docespqn2' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
            <img src={docespqn3} alt='docespqn3' className='img2'/>
                <p className='descprod'>Doces</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>
            
            <section className='sectionhome3'>
                <p className='img2'>oii</p>
            </section>

            </article>
            <article id='articlehome5'>
            <Link to='/login'>
            <img src={sale1} alt='sale1' id='banner1'/>
            </Link>
            </article>

            <article id='articlehome6'>
            
            <section className='sectionhome6'>
                <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>
            
            <section className='sectionhome6'>
            <img src={promocaopqn1} alt='promocao1' className='img6'/>
            </section>

            </article>




            <article id='articlehome01'>
            <h2 >
            <Link  to='/adegas' className='decnone'><p>Adegas</p></Link>
            </h2>
       
            </article>

            <article id='articlehome02'>
            <section className='sectionhome01'>
            <img src={adegapqn1} alt='adegapqn1' className='img01'/>
                <p className='descprod'>Adega1</p> 
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn2} alt='adegapqn2' className='img01'/>
                <p className='descprod'>Adega2</p>
              
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn3} alt='adegapqn3' className='img01'/>
                <p className='descprod'>Adega3</p>
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn1} alt='adegapqn1' className='img01'/>
                <p className='descprod'>Adega1</p> 
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn2} alt='adegapqn2' className='img01'/>
                <p className='descprod'>Adega2</p>
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn3} alt='adegapqn3' className='img01'/>
                <p className='descprod'>Adega3</p>
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn1} alt='adegapqn1' className='img01'/>
                <p className='descprod'>Adega1</p> 
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn2} alt='adegapqn2' className='img01'/>
                <p className='descprod'>Adega2</p>
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn3} alt='adegapqn3' className='img01'/>
                <p className='descprod'>Adega3</p>
            </section>
            
            <section className='sectionhome01'>
            <img src={adegapqn1} alt='adegapqn1' className='img01'/>
                <p className='descprod'>Adega1</p> 
            </section>

            </article>

            <article id='articlehome03'>
                <h2>Promoções da Semana</h2>
            </article>
            <article id='articlehome04'>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>

            </article>
            <article id='articlehome04'>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn3} alt='adegapqn3' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn2} alt='adegapqn2' className='img02'/>
            </section>
            
            <section className='sectionhome03'>
            <img src={adegapqn1} alt='adegapqn1' className='img02'/>
            </section>

            </article>
            <article id='articlehome05'>
            <img src={adegapqn4} alt='adegapqn4' id='img05'/>
            </article>

            <article id='articlehome06'>
            
            <section className='sectionhome06'>
            <img src={adegapqn5} alt='adegapqn5' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn6} alt='adegapqn6' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn7} alt='adegapqn7' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn5} alt='adegapqn5' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn6} alt='adegapqn6' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn7} alt='adegapqn7' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn5} alt='adegapqn5' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn6} alt='adegapqn6' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn7} alt='adegapqn7' className='img06'/>
            </section>
            
            <section className='sectionhome06'>
            <img src={adegapqn5} alt='adegapqn5' className='img06'/>
            </section>

            </article>






            <article id='barbeariahome01'>
            <h2>
            <Link  to='/saloesdebeleza' className='decnone'>Salões de Beleza</Link>
            </h2>
        
            </article>

            <article id='articlehome002'>
            <section className='sectionhome001'>
            <img src={salaobelezapqn1} alt='salaobeleza1' className='img001'/>
                <p className='descprod001'>Produto</p> 
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn2} alt='salaobeleza2' className='img001'/>
                <p className='descprod001'>Produto</p>
              
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn3} alt='salaobeleza3' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn1} alt='salaobeleza1' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn2} alt='salaobeleza2' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn3} alt='salaobeleza3' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn1} alt='salaobeleza1' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn2} alt='salaobeleza2' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn3} alt='salaobeleza3' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome001'>
            <img src={salaobelezapqn1} alt='salaobeleza1' className='img001'/>
            <p className='descprod001'>Produto</p>
            </section>

            </article>

            <article id='articlehome003'>
                <h2>Promoções da semana</h2>
            </article>
            <article id='articlehome004'>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn5} alt='salaobeleza5' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn4} alt='salaobeleza4' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn9} alt='salaobeleza9' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn8} alt='salaobeleza8' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn7} alt='salaobeleza7' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn6} alt='salaobeleza6' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn5} alt='salaobeleza5' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn4} alt='salaobeleza4' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn9} alt='salaobeleza9' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn8} alt='salaobeleza8' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>

            </article>
            <article id='articlehome004'>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn7} alt='salaobeleza7' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn6} alt='salaobeleza6' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn5} alt='salaobeleza5' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn4} alt='salaobeleza4' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn9} alt='salaobeleza9' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn8} alt='salaobeleza8' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn7} alt='salaobeleza7' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn6} alt='salaobeleza6' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn5} alt='salaobeleza5' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>
            
            <section className='sectionhome003'>
            <img src={salaobelezapqn4} alt='salaobeleza4' className='img002'/>
            <p className='desc002'>Produto1</p>
            </section>

            </article>
            <article id='articlehome005'>
            <img src={salaobelezabanner1pqn} alt='salaobelezabanner1pqn'/>
            </article>

            <article id='articlehome006'>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn9} alt='salaobeleza9' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn8} alt='salaobeleza8' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn7} alt='salaobeleza7' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn6} alt='salaobeleza6' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn5} alt='salaobeleza5' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn4} alt='salaobeleza4' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn3} alt='salaob
            eleza3' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn2} alt='salaobeleza2' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn1} alt='salaobeleza1' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>
            
            <section className='sectionhome006'>
            <img src={salaobelezapqn8} alt='salaobeleza8' className='img006'/>
            <p className='descprod001'>Produto</p>
            </section>

            </article>






            <article id='articlehome011'>
            <h2>
            <Link  to='/barbearias' className='decnone'>Barbearias</Link>
            </h2>
            
        
            </article>

            <article id='articlehome0022'>
            <section className='sectionhome0011'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0011'/>
                <p className='descprod0011'>Produto</p>
                
                
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0011'/>
                <p className='descprod0011'>Produto</p>
              
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0011'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0011'/>
            <p className='descprod0011'>Produto</p>
            </section>

            </article>

            <article id='articlehome0033'>
                <h2>Promoções da semana</h2>
            </article>
            <article id='articlehome0044'>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn4} alt='barbeariapqn4' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn5} alt='barbeariapqn5' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn6} alt='barbeariapqn6' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn7} alt='barbeariapqn7' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn4} alt='barbeariapqn4' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>

            </article>
            <article id='articlehome0044'>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn5} alt='barbeariapqn5' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn6} alt='barbeariapqn6' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn7} alt='barbeariapqn7' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn4} alt='barbeariapqn4' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn5} alt='barbeariapqn5' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn6} alt='barbeariapqn6' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0033'>
            <img src={barbeariapqn7} alt='barbeariapqn7' className='img0022'/>
            <p className='descprod0011'>Produto</p>
            </section>

            </article>
            <article id='articlehome0055'>
            <img src={barbeariapqn2} alt='barbeariapqn2'/>
            </article>

            <article id='articlehome0066'>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn5} alt='barbeariapqn5' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn6} alt='barbeariapqn6' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn7} alt='barbeariapqn7' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn1} alt='barbeariapqn1' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn2} alt='barbeariapqn2' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn3} alt='barbeariapqn3' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn4} alt='barbeariapqn4' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn5} alt='barbeariapqn5' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn6} alt='barbeariapqn6' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>
            
            <section className='sectionhome0066'>
            <img src={barbeariapqn7} alt='barbeariapqn7' className='img0066'/>
            <p className='descprod0011'>Produto</p>
            </section>

            </article>











            <article id='articlehome7'>
            
            <h2>Petshop</h2>
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>

            <h2>Petshop</h2>
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>

            <h2>Petshop</h2>
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>

            <h2>Petshop</h2>
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>

            <h2>Petshop</h2>
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>
            
            <section className='sectionhome7'>
                <p className='img7'>oii</p>
            </section>

            </article>






            
            </main>
        </body>
    )
}
export default Home