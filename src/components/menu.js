import React from 'react';
import '../style/menu.scss';
import Logo from '../image/logo.svg';


export default function Menu(){
    return(
        <div className='Menu'>
            <div className='container_menu'>
                <div className='logot'>
                <img  src={Logo}  alt=""/>
                <div className='logo_text'>Катрин</div>
                </div>
                <div className='menu_nav'>
                    <button className='nav'>Каталог</button>
                    <button className='nav'>Начинки</button>
                </div>
                <button className='button_add_order'>Заказать</button>
            </div>
        </div>
    )
}