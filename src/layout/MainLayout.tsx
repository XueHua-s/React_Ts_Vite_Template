import React, {ReactComponentElement} from "react";
import './MainLayout.scss'
interface Props {
  children: ReactComponentElement<any>
}
const mainLayout = (props: Props) => {
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
