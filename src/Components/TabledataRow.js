import React, { Component } from 'react';

class TabledataRow extends Component {
    permissionShow = () =>{
        if(this.props.permission === 1){
            return "Admin"
        }else if(this.props.permission === 2){
            return "Moderator"
        }else{
            return "Normal"
        }
    }
    edit = () =>{
        this.props.editUserTableRow();
        this.props.changeEditUserStatusv2();
    }
    delUserId = (idUser)=>{
        console.log('ID phan tu la ' + idUser);   
        this.props.getIdUserRow1(idUser)    
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <div onClick={()=>this.edit()} className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                    <div onClick={(idUser)=>this.delUserId(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TabledataRow;