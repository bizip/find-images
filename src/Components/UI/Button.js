// import classes from './Button.module.css';
const Button=props=>{

return <button className={props.class} 
type={props.type || 'button'} 
onClick={props.onClick}>
{props.children}
</button>

}
export default Button;