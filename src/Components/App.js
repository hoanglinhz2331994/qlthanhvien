import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Searchform from './Searchform';
import Tableform from './Tableform';
import Adduser2 from './Adduser2';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm: false, 
      data: DataUser,
      searchText: '',
      hienthiEdit: false,
      traVeFormEdit:{}
    }
  }
  
  componentWillMount() {
    //Kiem tra xem co localStorage chua
    if(localStorage.getItem('userData') === null){
      localStorage.getItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }
  
  changeEditUserStatus = ()=>{
    this.setState({
      hienthiEdit: !this.state.hienthiEdit
    })
  } 
  capNhatTrangThai = ()=>{
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }
  getTextSearch = (dl) =>{
  //  console.log('Text nhan duoc la' + dl);
   this.setState({
     searchText: dl
   })   
  }

  getNewUserData = (name,tel,Permission)=>{    
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    })
    // console.log('Ket noi thanh cong');
    // console.log(this.state.data);    
    localStorage.setItem('userData',JSON.stringify(items));
  }

  editUserApp = (user) =>{
    this.setState({
      traVeFormEdit: user
    });
  }

  getUserEditInfoApp = (infoapp)=>{
    console.log('Thong tin da sua la ' + infoapp.name);
    this.state.data.forEach((value,key)=>{
      if(value.id === infoapp.id){
        value.name = infoapp.name;
        value.tel = infoapp.tel;
        value.Permission = infoapp.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  deleteUser = (idUser)=>{
    var tempData = this.state.data.filter(item => item.id !== idUser); //********************** Xóa
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  render() {
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua=[];
    this.state.data.forEach((item) =>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);    
    return (
      <div>
        <Header/>
        <div className="container">
            <div className="row">
              <Searchform
              getUserEditInfoApp1={(infoapp)=>this.getUserEditInfoApp(infoapp)}
              settraVeFormEdit={this.state.traVeFormEdit}
              changeEditUserStatusv1={()=>this.changeEditUserStatus()}
              hienThiFormEdit={ this.state.hienthiEdit }
              checkConnectProps={(dl)=>this.getTextSearch(dl)}
              ketNoi={() => this.capNhatTrangThai()}
              hienthiForm={this.state.hienthiForm}/>

              <Tableform
              deleteUser1 = {(idUser)=>this.deleteUser(idUser)}
              changeEditUserStatusv1={()=>this.changeEditUserStatus()}
              editUserTable={(user) => this.editUserApp(user)}
              dataUserProps = {ketqua}/>

              <Adduser2
              add={(name,tel,Permission)=>this.getNewUserData(name,tel,Permission)}
              hienthiForm={this.state.hienthiForm}/>
            </div>
        </div>       
      </div>
      
    );
  }
}
export default App;
