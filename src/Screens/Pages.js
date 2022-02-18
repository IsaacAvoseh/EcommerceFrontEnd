import React from 'react';
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import PagesCard from '../Components/PagesCard';

export default function Pages() {

    const imageBaseUrl = "https://hecto-ecom.herokuapp.com/images/";
    const url = "https://hecto-ecom.herokuapp.com/api";

    // console.log('pageBanner', pageBanner);
    return (
        <div>
            <Nav
                active5="active"
            />

            <Header
                title={ 'Pages'}

            />
            <div className='d-flex flex-wrap justify-content-around m-1 mb-3' >

        
          
            
                    <PagesCard
                      
                        title={'Products Page'}
                        description={'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web'}
                        links='/sidebar'
                    />
            
                    <PagesCard
                      
                        title={'Shop Page'}
                        description={'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web'}
                        links='/shop'
                    />
            
     
        </div>

        </div>
            )
}
