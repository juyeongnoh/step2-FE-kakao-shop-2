import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../atoms/SidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../store/slices/userSlice";

const Sidebar = () => {
  const menus = [
    { name: "홈", path: "/", icon: "/sidebarIcons/home.svg" },
    { name: "카테고리", path: "/category", icon: "/sidebarIcons/category.svg" },
  ];

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setIsLoggedIn({ isLoggedIn: false }));
  };

  return (
    <div className="fixed w-64 bg-gray-200 border-r-2 border-gray-300 top-0 bottom-0 left-0 h-full z-50 p-3">
      <div className="my-8 ml-3">
        <Link to="/">
          <img src="/logoKakao.svg" width={100} alt="카카오톡 쇼핑하기" />
        </Link>
      </div>
      <div>
        {menus.map((menu, index) => {
          return (
            <Link key={index} to={menu.path}>
              <SidebarItem menu={menu} icon={menu.icon} />
            </Link>
          );
        })}
        <div className="absolute bottom-4">
          {isLoggedIn ? (
            <Link onClick={handleLogout}>
              <SidebarItem
                menu={{
                  name: "로그아웃",
                  path: "/",
                  icon: "/sidebarIcons/account.svg",
                }}
              />
            </Link>
          ) : (
            <Link to="/login">
              <SidebarItem
                menu={{
                  name: "로그인",
                  path: "/login",
                  icon: "/sidebarIcons/account.svg",
                }}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;