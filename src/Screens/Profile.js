import React from 'react'
import { useContext, useEffect } from 'react/cjs/react.development'
import swal from 'sweetalert'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import { UserContext } from '../context/UserContext'

export default function Profile() {    
    const url = "http://127.0.0.1:8000/api";

    const { user, setUser } = useContext(UserContext);
    const { token, setToken } = useContext(UserContext);
 const getUserInfo = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + JSON.parse(localStorage.getItem('token')));
    const myInit = { method: 'GET',
        headers: myHeaders,
        Accept: "application/json"
     };
     fetch(`${url}/users`, myInit)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            console.log('An error occured')
            throw new Error("Network response was not ok.");

        })
        .then(data => {
            console.log('data', data);
            setUser(data);
        })
        .catch(error => console.log(error.message));
}

    const checkUser = () => {
        if (!localStorage.getItem('token')) {
            swal('oops', 'You must be logged in to view this page', 'error');
            setTimeout(() => {
                window.location.href = '/login'
            }
                , 3000)

        }
    }
    checkUser();

    useEffect(() => {
        getUserInfo();
    }, [])
 




    return (
        <div>
            <Nav/>
            <Header title='Profile' />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="profile-card">
                            <div className="profile-card-img">
                                <img  src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>

                            <h3>
                                <i className="fas fa-user-circle"></i>
                               <h1>Name:</h1>




                              
                                
                            </h3>

                                </div>
                                </div>
                                </div>
        
        </div>
                                </div>

                                <PreFooter/>
                                </div>
    )
}
