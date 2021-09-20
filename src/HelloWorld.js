import React from 'react'
import './Helloworld.css';
import Tbl from './TableComponent'

class CountryList extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state ={
            empStruct:{0:"id",1:"name",2:"gender",3:"salary"},
            empDetails:[]
        }
    }
    handleChange(e){
        this.setState({name:e.target.value});
    }
    searchCountries=(event)=>{
       // console.log("MEGALA===>",event.target.value);
        var inpStr=event.target.value;
        var listElements = document.getElementsByTagName("li");
        var nodetails=false;
        for(var i=0;i<listElements.length;i++){
            var ctryName=listElements[i].getAttribute("name");
            if(ctryName.toLowerCase().startsWith(inpStr.toLowerCase())){
                listElements[i].setAttribute("class","showList");
                nodetails=true;
            }else{
                listElements[i].setAttribute("class","hideList");
            }
        }
        var ele = document.getElementById("nodetails");
        if(!nodetails){
            ele.setAttribute("class","showDV");
        } else{
            ele.setAttribute("class","hideDV");
        }
    }
    componentDidMount=()=>{
       // console.log("componentDidMount from HelloWorld");
        //console.log(this.props.employees)
        var employees = this.props.employees;
        var empDetails=[];
        var empStruct = this.state.empStruct;
        for(var emp in employees){
            for(var obj2 in employees[emp]){
                var tempObj={}; var vals=employees[emp][obj2];
                for(var _obj in empStruct){
                    tempObj[empStruct[_obj]]=vals[_obj];
                }
                empDetails[empDetails.length]=tempObj;
            }
        }
        this.setState({empDetails:empDetails});
    }
    render() {        
        console.log("I AM FROM HelloWorld 123====>",this.props);
        var countries= this.props.countryName;
        var listElements=[];
       // for(var obj in countries){
            //listElements.push(<li key={obj} name={countries[obj]} >{countries[obj]}</li>); //key attribute added to resolve warnings
            
       // }
       listElements = countries.map(function(ele,index){
           return (<li key={index} name={ele}>{ele}</li>)
       })
        
        return (<React.Fragment>
                <div id="webpageContainer">
                    <div className="HelloworldHeader">List of Countries</div>
                    <div style={{textAlign:'left',marginLeft:'4%'}}>
                    <input id="inp" type="text" onChange={this.searchCountries} placeholder="Search Country" /> </div><br>
                    </br>
                    <div id="countryListPage" style={{width: '15%',textAlign:'left',marginLeft:'3%'}} >
                        <ul>
                          {listElements}
                        </ul>
                    </div>
                    <div id="nodetails" className="hideList" >No countries found!!!</div>
                </div>
                <div style={{display:'none'}} >
                   <Tbl empStruct={this.state.empStruct} empDetails={this.state.empDetails} ></Tbl>
                </div>
                </React.Fragment> )
        }
    }

export default React.memo(CountryList);