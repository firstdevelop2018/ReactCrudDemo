import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchTeacherDataState {
    teaList: TeacherData[];
    loading: boolean;
}

export class FetchTeacher extends React.Component<RouteComponentProps<{}>, FetchTeacherDataState> {
    constructor() {
        super();
        this.state = { teaList: [], loading: true };

        fetch('api/Teacher/Index')
            .then(response => response.json() as Promise<TeacherData[]>)
            .then(data => {
                this.setState({ teaList: data, loading: false });
            });

       // This binding is necessary to make "this" work in the callback
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTeacherTable(this.state.teaList);

        return <div>
            <h1>Teacher Data</h1>
            <p>This component demonstrates fetching Teacher data from the server.</p>
            <p>
                <Link to="/addteacher">Create New</Link>
            </p>
            {contents}
        </div>;
    }

    // Handle Delete request for an Teacher
    private handleDelete(id: number) {
        if (!confirm("Do you want to delete teacher with Id: " + id))
            return;
        else {
            fetch('api/Teacher/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        teaList: this.state.teaList.filter((rec) => {
                            return (rec.id != id);
                        })
                    });
            });
        }
    }

    private handleEdit(id: number) {
        this.props.history.push("/teacher/edit/" + id);
    }

    // Returns the HTML table to the render() method.
    private renderTeacherTable(teaList: TeacherData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>teachername</th>
                    <th>course</th>
                </tr>
            </thead>
            <tbody>
                {teaList.map(tea =>
                    <tr key={tea.id}>
                        <td></td>
                        <td>{tea.id}</td>
                        <td>{tea.teachername}</td>
                        <td>{tea.course}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(tea.id)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(tea.id)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class TeacherData {
    id: number = 0;
    teachername: string = "";
    course: string = "";
} 