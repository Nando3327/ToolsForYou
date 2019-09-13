/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import labels from './Labels/TextboxLabels'

class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            value: ''
        };
    }

    getData = () => {
        return this.state;
    };

    setNote = (value) => {
        this.setState({
            note: (value !== '') ? '' : labels.mandatoryField
        })
    };


    mandatoryChange = event => {
        this.setState({
            note: (event.target.value !== '') ? '' : labels.mandatoryField,
            value: event.target.value
        })
    };

    noMandatoryChange = event => {
    };

    render() {
        //To add a note adds mandatory and the value note in the father
        let noteValue = (this.props.mandatory) ? <small className="form-text text-muted">{this.state.note}</small> : '';
        let functionMandatory = (this.props.mandatory) ? this.mandatoryChange : this.noMandatoryChange;
        return (
            <div className="form-group row">
                <label className="col-sm-4">{this.props.label}</label>
                <div className="col-sm-8">
                    <input type={this.props.type} className="form-control" id={this.props.id}
                           placeholder={(this.props.ph)?this.props.ph:''} onChange={functionMandatory}/>
                    {noteValue}
                </div>
            </div>
        );
    }
}
export default Textbox;