import React, { Component } from 'react';

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.settraVeFormEdit1.id,
            name: this.props.settraVeFormEdit1.name,
            tel: this.props.settraVeFormEdit1.tel,
            Permission: this.props.settraVeFormEdit1.Permission,
        }
    }

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    
    saveButton = ()=>{
        var info={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        console.log('Info la '+ info.name);
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatusv2(); //an form
    }
    render() {
        return (
            <div className="row">
                 <div className="col-12">
                    <form method="post">
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa thông tin user</div>
                                <div className="card-body text-primary">                  
                                    <div className="form-group">
                                        <input type="text" onChange={(event)=>this.isChange(event)} defaultValue={this.props.settraVeFormEdit1.name} className="form-control" name="name"  aria-describedby="helpId" placeholder="Tên Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event)=>this.isChange(event)} defaultValue={this.props.settraVeFormEdit1.tel} className="form-control" name="tel"  aria-describedby="helpId" placeholder="Số điện thoại" />
                                    </div>
                                    <div className="form-group">
                                            <div className="form-group">
                                                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.settraVeFormEdit1.Permission} className="custom-select" name="Permission" required>
                                                    <option value>Chọn quyền</option>
                                                    <option value={1}>Admin</option>
                                                    <option value={2}>Moderator</option>
                                                    <option value={3}>Normal</option>
                                                </select>                       
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" onClick={()=>this.saveButton()} className="btn btn-block btn-primary" value="Lưu"/>
                                    </div> 
                                </div>
                            </div>
                        </form>                
                </div>
            </div>
        );
    }
}

export default Edituser;