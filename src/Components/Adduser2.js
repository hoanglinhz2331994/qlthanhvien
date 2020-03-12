import React, { Component } from 'react';

class Adduser extends Component {
        constructor(props) {
            super(props);
            this.state={
                id:"",
                name:"",
                tel:"",
                Permission:"",
            }
        }
        
        isChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            // console.log(name);
            // console.log(value);
            this.setState({
                [name]:value
            })
            //package to item
            // var item = {};
            // item.id = this.state.id;
            // item.name = this.state.name;
            // item.tel = this.state.tel;
            // item.Permission = this.state.Permission;
            // console.log(item);            
        }
        kiemTra = () =>{
            if(this.props.hienthiForm === true){
                return( 
                    <div className="col-12">
                        <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                            <div className="card-header text-center">Thêm User</div>
                                <form>
                                    <div className="card-body text-primary">                  
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} name="name"  aria-describedby="helpId" placeholder="Tên Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} name="tel"  aria-describedby="helpId" placeholder="Số điện thoại" />
                                        </div>
                                        <div className="form-group">
                                                <div className="form-group">
                                                    <select className="custom-select" onChange={(event)=>this.isChange(event)} name="Permission" required>
                                                        <option value>Chọn quyền</option>
                                                        <option value={1}>Admin</option>
                                                        <option value={2}>Moderator</option>
                                                        <option value={3}>Normal</option>
                                                    </select>                       
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="reset" className="btn btn-block btn-primary" onClick={ (name,tel,Permission)=>this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm mới"/>
                                        </div> 
                                    </div>
                                </form>
                        </div>
                    </div>  
                )            
            }
        }
      render() {
        return (
            <div>
                {this.kiemTra()}
            </div>
        );
    }
}

export default Adduser;