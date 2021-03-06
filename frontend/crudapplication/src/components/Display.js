import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'mdbreact/dist/css/mdb.css'

import { ToastsContainer, ToastsStore } from 'react-toasts';
import { IoMdTrash } from "react-icons/io";
import { Button} from 'react-bootstrap';
import './style.css';
import { MdDoneAll } from "react-icons/md";
import { TiPencil, TiUpload, TiArrowSync } from "react-icons/ti";
import {MDBCard, MDBInput, MDBCol, MDBContainer, MDBRow, MDBBtn,MDBIcon,MDBCardBody } from 'mdbreact';

export default class Display extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);



        // setting the initial states
        this.state = {
            id: '',
            title: '',
            message: '',
            postList: [],
            isLoading: true,
            isEditing: false,

        }
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    getPost() {
        axios.get(`http://127.0.0.1:8000/api/posts/`)
            .then(res => {
                console.log(res)
                this.setState({
                    postList: res.data,
                    isLoading: false
                });
            })
    }

    componentDidMount() {
        this.getPost();
    }

    reset = () => {
        this.setState({
            id: '',
            title: '',
            message: ''
        })
    }

    showEditForm = () => {
        console.log("in show edit form")
        this.setState({
            isEditing: true
        })
    }
    editRow = (id, title, message) => {
        this.setState({
            id: id,
            title: title,
            message: message

        })
    }
    initialisePostView = (title, message) =>{
        console.log("initialise view")
        this.setState({
            titleField: title,
            messageField: message
        })
    }

    deleteRow = (id) => {
        axios.delete('http://127.0.0.1:8000/api/posts' + `/${id}/`)
            .then(res => {
                ToastsStore.warning('Successfully Deleted!');
                this.getPost();
            });
    }




    render() {
        const { isLoading, postList } = this.state;
        let titleField
        let messageField

        return (
            <div>
                <div>
                    <Button  style={{float: "right", marginRight:50}} variant="info" type="submit" id="printPageButton" onClick={() => window.print()}>Print</Button>
                </div>
                <table className="table table-sm table-hover">
                        <tbody>



                    {(postList.map((item, i) => {

                                return [

                                    <Fragment>


                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.message}</td>

                                            <td>
                                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                                                <Button variant="dark" id="printPageButton" onClick={(e) => this.showEditForm()}><i className="fa fa-pencil"></i></Button>
                                                <Button variant="light" id="printPageButton" onClick={(e) => this.deleteRow(item.id, e)}><i className="fa fa-trash"></i></Button>

                                            </td>
                                        </tr>
                                    </Fragment>

                                ];

                        })
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}