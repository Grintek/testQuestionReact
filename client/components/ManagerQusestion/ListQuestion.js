import React, {Component} from "react"
import './StyleManager.scss'
import Button from "@material-ui/core/Button";

class ListQuestion extends Component{



    render() {
        const dsa = [{ id: "123", description: "asfsafasfas"},{ id: "123", description: "asfsafasfas"},{ id: "123", description: "asfsafasfas"}];
        let values = dsa.map((e) => {
            const id = `/manager/${e.id}`;
            return(
            <tr>
                <th style={{ margin: 0, textAlign: "inherit" }} className="tb tb_column_left">{e.id}</th>
                <th style={{ margin: 0 }} className="tb tb_column_right">
                    <Button href={id} className="bt_edit">Edit</Button>
                    <Button className="delete">Delete</Button>
                </th>

            </tr>
               );
        });
        return(
            <div>
                <table className="tb">
                    <tr><th className="tb tb_column_left">Question</th><th className="tb tb_column_right">Action</th></tr>
                    {values}
                </table>
            </div>
        )
    }
}
export default(ListQuestion);