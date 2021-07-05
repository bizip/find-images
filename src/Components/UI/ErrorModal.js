import Button from './Button'
import classes from './ErrorModal.module.css'
const ErrorModal=(props)=>{

return <div>
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
    <div className={classes.modal}>
    <header className={classes.header}><h2>{props.title}</h2></header>
    <section className={classes.content}><p>{props.message}</p></section>
    <footer className={classes.actions}><Button class={classes.btn} onClick={props.onConfirm}>Retry</Button></footer>
    </div>
    </div>

}
export default ErrorModal;