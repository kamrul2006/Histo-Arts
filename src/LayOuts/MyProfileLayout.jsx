import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiShoppingBag, HiUser, HiViewBoards } from "react-icons/hi";
import NavbarPart from "../Components/Fixed/NavbarPart";
import Footer from "../Components/Fixed/Footer";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyProfile = () => {
    const { UserSignOut } = useContext(AuthContext)

    return (
        <div>
            <NavbarPart />

            <div className="grid grid-cols-1 md:grid-cols-5">

                <div className="bg-gray-50 w-fit max-h-screen sticky top-0 md:col-span-1">
                    <Sidebar aria-label="Sidebar with logo branding example">
                        <Sidebar.Logo>
                            My Profile
                        </Sidebar.Logo>
                        <Sidebar.Items>

                            <Sidebar.ItemGroup>

                                <NavLink to={ '/MyProfile'}><Sidebar.Item icon={HiUser}>
                                    My info.
                                </Sidebar.Item></NavLink>

                                <NavLink to={ '/MyProfile/myAdded'}><Sidebar.Item icon={HiViewBoards}>
                                    My Artifacts
                                </Sidebar.Item></NavLink>

                                <NavLink to={ '/MyProfile/myLiked'}><Sidebar.Item icon={HiShoppingBag}>
                                    Liked Artifacts
                                </Sidebar.Item></NavLink>


                                <button onClick={UserSignOut} className="btn btn-outline btn-warning">
                                    <Sidebar.Item icon={HiArrowSmRight}>
                                        Sign Out
                                    </Sidebar.Item></button>

                            </Sidebar.ItemGroup>

                        </Sidebar.Items>

                    </Sidebar>
                </div>


                <div className="mx-auto flex items-center justify-center md:col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>


            <Footer />
        </div >
    );
};

export default MyProfile;