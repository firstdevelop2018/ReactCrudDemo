import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchEmployee } from './components/FetchEmployee';
import { AddEmployee } from './components/AddEmployee';
import { FetchTeacher } from './components/FetchTeacher';
import { AddTeacher } from './components/AddTeacher';
import { FetchStudent } from './components/FetchStudent';
import { AddStudent } from './components/AddStudent';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/fetchemployee' component={FetchEmployee} />
    <Route path='/addemployee' component={AddEmployee} />
    <Route path='/employee/edit/:empid' component={AddEmployee} />

    <Route path='/fetchteacher' component={FetchTeacher} />
    <Route path='/addteacher' component={AddTeacher} />
    <Route path='/teacher/edit/:teaid' component={AddTeacher} />

    <Route exact path='/' component={Home} />
    <Route path='/fetchstudent' component={FetchStudent} />
    <Route path='/addstudent' component={AddStudent} />
    <Route path='/student/sdit/:sdtid' component={AddStudent} />

</Layout>;