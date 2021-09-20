import React from 'react'

class tableComponent extends React.Component{

    componentDidMount=()=>{
        //console.log("componentDidMount from TableComponent");
        var empStruct1 = this.props.empStruct;
        var th = document.createElement("tr");
        var tbl = document.getElementById("tbl");
        for(var _obj1 in empStruct1){
           var heading =  empStruct1[_obj1].toString().toUpperCase();
           var td=document.createElement("th");
           var text = document.createTextNode(heading);
           td.appendChild(text);
           th.appendChild(td);
        }        
        tbl.appendChild(th);
        var empInfo=this.props.empDetails;
        //console.log("len",empInfo.length)
        for(var i=0;i<empInfo.length;i++){
            var tr = document.createElement("tr");
            for(var j in empStruct1){
                var td1 = document.createElement("td");
                var txt=empInfo[i][empStruct1[j]];
                var textNode = document.createTextNode(txt);
                td1.appendChild(textNode);
                tr.appendChild(td1);
            }
            tbl.appendChild(tr);            
        }        
    }
    render() {   
        console.log("Render from TableComponent");
        return(<table border="1" id="tbl">
        </table>)
    }
}

export default React.memo(tableComponent);