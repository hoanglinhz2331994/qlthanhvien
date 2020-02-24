import React, { Component } from 'react';
import TabledataRow from './TabledataRow';

class Tableform extends Component {
    getIdUserRow = (idUser)=>{
      console.log('Id user row la '+ idUser);
      this.props.deleteUser1(idUser);
    }
    mapingDataUser = () => this.props.dataUserProps.map((value,key) => (
        <TabledataRow
        getIdUserRow1 ={(idUser)=>{this.getIdUserRow(idUser)}}
        changeEditUserStatusv2={()=>this.props.changeEditUserStatusv1()}
        editUserTableRow={(user)=>this.props.editUserTable(value)}
        userName={value.name}
        tel={value.tel}
        permission={value.Permission}
        id={value.id}
        stt={key}
        key={key} />
      ))

    render() {
        return (
              <div className="col">
                <table className="table table-striped table-hover ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Số điện thoại</th>
                      <th>Quyền</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                   {this.mapingDataUser()}              
                  </tbody>
                </table>
              </div>
        );
    }
}

export default Tableform;