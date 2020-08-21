import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { TeacherData } from './FetchTeacher';

interface AddTeacherDataState {
    title: string;
    loading: boolean;
    teaData: TeacherData;
}

export class AddTeacher extends React.Component<RouteComponentProps<{}>, AddTeacherDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, teaData: new TeacherData };


        var teaid = this.props.match.params["teaid"];

        // This will set state for Edit Teacher
        if (teaid > 0 ) {
            fetch('api/Teacher/Details/' + teaid)
                .then(response => response.json() as Promise<TeacherData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, teaData: data });
                });
        }

        // This will set state for Add employee
        else {
            this.state = { title: "Create", loading: false, teaData: new TeacherData };
        }

        // This binding is necessary to make "this" work in the callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Teacher</h3>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit employee.
        if (this.state.teaData.id) {
            fetch('api/Teacher/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchteacher");
                })
        }

        // POST request for Add employee.
        else {
            fetch('api/Teacher/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchteacher");
                })
        }
    }

    // This will handle Cancel button click event.
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchteacher");
    }

    // Returns the HTML Form to the render() method.
    private renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="id">ID</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="id" value={this.state.teaData.id} required />
                    </div>
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="teachername">TeacherName</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="teachername" defaultValue={this.state.teaData.teachername} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="course">Course</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="course" defaultValue={this.state.teaData.course} required />
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}