import React from 'react'
import styles from './styles.module.css'

export const Input = (props) => {
  return (
    <input type={(props.type)? props.type : 'text'} className={styles.input} placeholder = {(props.placeholder) ? props.placeholder : ''} ></input>
  )
}
export const TextArea = (props) =>{
  return(
    <textarea></textarea>
  )
}
export const Title = (props) => {
  return (<h1 className={styles.tittle_regis}>{props.children}</h1>)
}
export const Button = (props) => {
  return (
    <button className={styles.btn_box}>
      {props.children}
    </button>
  )
}

const FrmRegis = () => {
  return (
    <React.Fragment>
      <div className={styles.form_box}>
        <Title>Register</Title>
        <form className={styles.input_group}>
          <Input placeholder="Username"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Input placeholder="Email"></Input>
          <div>
            <Button>Create Account</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export const FormLogin = () => {
  return (<div className={styles.form_box}>
    <Title text="Login"></Title>
    <form className={styles.input_group}>
      <Input placeholder="Username"></Input>
      <Input type="password" placeholder="Password"></Input>
      <div>
        <Button>Create Account</Button>
      </div>
    </form>
  </div>)
}

export default FrmRegis;
