import React, {ReactComponentElement} from "react"
import { Redirect } from 'react-router-dom'
import {ComponentProps} from "../@types/componentTypes";
interface Props extends ComponentProps {
  // 路由校验的字段
  verify: any,
  // 路由重定向url
  redireUrl: string
}
export default (props: Props) => {
  if (props.verify) {
    return props.children
  } else {
    return <Redirect to={props.redireUrl}/>
  }
}
