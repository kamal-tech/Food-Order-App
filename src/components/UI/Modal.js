import classes from './Modal.module.css'
import React from 'react'
import ReactDOM from 'react-dom'

function Backdrop(props){
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

function ModalOverlay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('modal')

export default function Modal(props){
    return <>
       {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}