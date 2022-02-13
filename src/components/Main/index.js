import List from "../List";
import * as S from "./styles";
import GlobalStyle from "../../globalStyles";

import {
  MdOutlineCropSquare,
  MdList,
  MdNotificationsNone,
  MdQueryStats,
  MdPeopleOutline,
} from "react-icons/md";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <S.MainWrapper>
        <S.SidebarWrapper>
          <div className="sidebar-header">
            <MdOutlineCropSquare size={24} />
            <span>Company</span>
          </div>
          <div className="sidebar-body">
            <a className="active" href="#">
              <div>
                <MdList size={24} />
                <span>Tasks</span>
              </div>
              <span className="count">4</span>
            </a>
            <a href="#">
              <div>
                <MdNotificationsNone size={24} />
                <span>Notifications</span>
              </div>
              <span className="count">4</span>
            </a>
            <a href="#">
              <div>
                <MdQueryStats size={24} />
                <span>Analytics</span>
              </div>
              <span className="count">4</span>
            </a>
            <a href="#">
              <div>
                <MdPeopleOutline size={24} />
                <span>Team</span>
              </div>
              <span className="count">4</span>
            </a>
          </div>
        </S.SidebarWrapper>
        <List />
      </S.MainWrapper>
    </>
  );
};

export default Main;
