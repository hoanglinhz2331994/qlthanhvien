import React, { Component } from 'react';
import Edituser from './Edituser';

class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            userObj:{},
        }
    }
    
    hienThiNut = () =>{
        if(this.props.hienthiForm === true){
            return (
                <div className="btn btn-block btn-outline-secondary" onClick = {()=> this.props.ketNoi()} >Đóng lại</div>
            )
        }
        else{
            return(
                <div className="btn btn-block btn-outline-info" onClick = {()=> this.props.ketNoi()}>Thêm mới</div>
            )
        }
    }
    isChange = (event) =>{
        // console.log(event.target.value);        
        this.setState({
            tampValue: event.target.value
        });
        // this.props.checkConnectProps(this.state.tampValue)
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj: info
        })
        // console.log(info);
        this.props.getUserEditInfoApp1(info);
    }
    showFormEdit = ()=>{
        if(this.props.hienThiFormEdit === true){
            return <Edituser
                    getUserEditInfo={(info) => this.getUserEditInfo(info)}
                    settraVeFormEdit1={this.props.settraVeFormEdit}
                    changeEditUserStatusv2={()=>this.props.changeEditUserStatusv1()}/>
        }
    }
    render() { 
        return (
            <div className="col-12">
                {this.showFormEdit()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=> this.isChange(event)} name="fName"  aria-describedby="helpId" placeholder="Nhập từ khóa" style={{width: '1060px'}} />
                    <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tampValue)}>Tìm</div>
                    </div>
                    <div className="btn-group1">                    
                        {this.hienThiNut()}                                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Searchform;