import React, {Component} from "react"
import './StyleManager.scss'
import PropType from 'prop-types';
import Button from "@material-ui/core/Button";
import connect from "react-redux/es/connect/connect"
import {fetchAllQuestions} from "../../api/index"

class ListQuestion extends Component{
    static propTypes = {
        fetchAllQuestions: PropType.func.isRequired,
        quest: PropType.object.isRequired
    };

    componentDidMount() {
        this.props.fetchAllQuestions();
    }

    render() {
        const {question} = this.props.quest;
        console.log(question.questions);
        const dsa = [{ id: "11", description: "asfsafasfas"},{ id: "30", description: "asfsafasfas"},{ id: "80", description: "asfsafasfas"}];
        const values = question.questions.map((e) => {
                   return( <tr>
                        <th style={{margin: 0, textAlign: "inherit"}} className="tb tb_column_left">{e.description}</th>
                        <th style={{margin: 0}} className="tb tb_column_right">
                            <Button href={`/manager/${e.id}`} className="bt_edit">Edit</Button>
                            <Button className="delete">Delete</Button>
                        </th>
                    </tr>
                   )});
        return(
            <div>
                <table className="tb">
                    <tr><th className="tb tb_column_left">Question</th><th className="tb tb_column_right">Action</th></tr>
                    {values}
                </table>
                <a href="/manager/question">Add New Question</a>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchAllQuestions(){
            dispatch(fetchAllQuestions());
        }
    }
}

function mapStateToProps(state) {
    return{
        quest: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListQuestion);