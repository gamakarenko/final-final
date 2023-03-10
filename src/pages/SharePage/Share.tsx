import PageWrapperWithHeading from "components/PageWrapperWithHeading/PageWrapperWithHeading";
import { Outlet } from "react-router-dom";
import "./style.css"


export default function Share(){

    return(
        <PageWrapperWithHeading heading="Пошерить трансфер" backTo="/">
      <Outlet />
    </PageWrapperWithHeading>
    )
}