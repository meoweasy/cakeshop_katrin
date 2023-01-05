import React from 'react';
import '../style/header.scss';

export default function Header(){
    return(
        <header className='MainHeader'>
            <div className='container'>
                <div className='phone'>
                    <i class="fa fa-phone fa-lg"></i>
                    <div className='phone_desc'>8 (960) 361 62-24</div>
                </div>
                <div className='time'>
                    <i class="fa fa-clock-o fa-lg"></i>
                    <div className='time_desc'>Ежедневно с 10.00 до 22.00</div>
                </div>
                <div className='social_network'>
                    <a href="https://vk.com/cake_ul73" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-vk fa-lg"></i>
                    </a>
                    <a href="https://ok.ru/katrintort" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-odnoklassniki fa-lg"></i>
                    </a>
                    <a href="https://vk.com/hana" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://vk.com/ha" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-telegram fa-lg" ></i>
                    </a>
                </div>
            </div>
        </header>
    )
}
