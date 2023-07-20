import React, { ReactComponentElement } from "react";
import './MainLayout.scss'
import {ComponentProps} from "../@types/componentTypes";
interface MainLayoutProps extends ComponentProps {
}
const mainLayout = (props: MainLayoutProps) => {
  return (
    <React.Fragment>
      <div className={'main-layout'} data-mainlayout={true}>
        <header>
          头部
        </header>
        <main>
          {props.children}
        </main>
        <footer>
          尾部
        </footer>
      </div>
    </React.Fragment>
  )
}
export default mainLayout
