import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import SideMenu from './components/SideMenu'

const sideMenuItems = [
    {link:'#',title:'Main'},
    {link:'#',title:'News'},
    {link:'#',title:'Contacts'},
    {link:'#',title:'About'},
    {link:'#',title:'Articles'},
    {link:'#',title:'Random page'},
    {link:'#',title:'Another interesting thing'}
];

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <SideMenu items = {sideMenuItems}/>
                <Login/>
                <Main/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'));