import axios from 'axios'
import React from 'react'


export default class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:null,
            username:null,
            password:null,
            signup:false,
            idea:[],
            data:null
        }
    
    }
   signup(e){
    e.preventDefault()
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/signup/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: {
                username:this.state.username,
                name:this.state.name,
                password:this.state.password
            }
            
            // JSON.stringify({
            //     username:e.target['username'].value,
            //     name:e.target['name'].value,
            //     password:e.target['password'].value})
        

        })
        .then(response=>this.setState({name:response.data.username,access:response.data.token.access,refresh:response.data.token.refresh,login:true}))
        .catch(err=>alert("Enter valid Form-Data/ try with different Email",err))
        }


    render(){
        return (
           
            <div>
             {!this.state.signup &&    <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})} placeholder="Recipient's  Name" required/><br/>
                <input type="text" onChange={(e)=>this.setState({username:e.target.value})} placeholder="Recipient's  E-mail" required/><br/>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's  Password" required/><br/><br/>
                <button className='btn-warning' type='reset' onClick={(e)=>this.signup(e)}>Sign Up</button>
                </form>}

             {this.state.signup && <div> 
                <Create />
                </div>}

            </div>
        )
    }
}