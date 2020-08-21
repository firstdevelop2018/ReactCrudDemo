import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchStudentDataState {
    sdtList: StudentData[];
    loading: boolean;
}

export class FetchStudent extends React.Component<RouteComponentProps<{}>, FetchStudentDataState> {
    constructor() {
        super();
        this.state = { sdtList: [], loading: true };

        fetch('api/Student/Index')
            .then(response => response.json() as Promise<StudentData[]>)
            .then(data => {
                this.setState({ sdtList: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStudentTable(this.state.sdtList);

        return <div>
            <h1>Student Data</h1>
            <p>This component demonstrates fetching Student data from the server.</p>
            <p>
                <Link to="/addStudent">Create New</Link>
            </p>
            {contents}
        </div>;
    }

    // Handle Delete request for an Student
    private handleDelete(id: number) {
        if (!confirm("Do you want to delete Student with Id: " + id))
            return;
        else {
            fetch('api/Student/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        sdtList: this.state.sdtList.filter((rec) => {
                            return (rec.StudentId != id);
                        })
                    });
            });
        }
    }

    private handleEdit(id: number) {
        this.props.history.push("/Student/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderStudentTable(sdtList: StudentData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>StudentId</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {sdtList.map(sdt =>
                    <tr key={sdt.StudentId}>
                        <td></td>
                        <td>{sdt.StudentId}</td>
                        <td>{sdt.name}</td>
                        <td>{sdt.gender}</td>
                        <td>{sdt.department}</td>
                        <td>{sdt.city}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(sdt.StudentId)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(sdt.StudentId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class StudentData {
    StudentId: number = 0;
    name: string = "";
    gender: string = "";
    city: string = "";
    department: string = "";
} 