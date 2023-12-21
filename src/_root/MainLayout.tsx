import { Outlet, Navigate} from "react-router-dom";

function MainLayout() {
  return (
    <>
        <section>
            <Outlet />
        </section>
    </>
  )
}

export default MainLayout