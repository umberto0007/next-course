import React from 'react';
import A from './A';
import Head from 'next/head';

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'ulbi tv, nextjs' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className='navbar'>
                <A href={'/'} text='Главная'></A>
                <A href={'/users'} text='Пользователи'></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;