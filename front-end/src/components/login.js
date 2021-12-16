import React from 'react'
import axios from 'axios'

export default class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            item:[],
            username:null,
            password:null,
            name:null,
            login:false,
            access:null,
            refresh:null,
            create:false,
            user:null
        }
    }

    logIn(e){
        e.preventDefault()
        axios({

            method: 'post',

            url: 'http://127.0.0.1:8000/login/',

            headers: {

                'Content-Type': 'application/json'

            },

            data: {
                email:this.state.username,
                password:this.state.password
            }
            
            // JSON.stringify({
            //     username:e.target['name'].value,
            //     password:e.target['password'].value})
        

        })
        .then(response=>this.setState({name:response.data.username,access:response.data.token.access,refresh:response.data.token.refresh,login:true, user:response.data.user}))
        .catch(err=>alert(err.data))
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <div>
                {!this.state.login &&   <form onSubmit={this.handleSubmit}> 
                <input type="text" onChange={(e)=>this.setState({username:e.target.value})} placeholder="Recipient's  E-mail" required/><br/>
                <input type="password" onChange={(e)=>this.setState({password:e.target.value})} placeholder="Recipient's  Password" required/><br/><br/>
                <button className='btn-primary' type='reset' onClick={(e)=>this.logIn(e)}>Login</button>
                </form>}
                </div>
                <button onClick={()=>this.setState({create:!this.state.create})}>Create</button>
               
            
            </div>
        )
    }
}