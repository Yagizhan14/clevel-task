import * as React from "react";
import { IconNames, Icon } from "../Icon";
import { NavLink } from "react-router-dom";

interface ISideMenuProps {
  items: ISideMenuItem[];
}

const SideMenu: React.FC<ISideMenuProps> = ({ items }) => {
  return (
    <aside className="sidenav">
      <nav className="sidenav__nav">
        <ul className="sidenav__nav-list">
          {items.map((item) => (
            <li className="sidenav__nav-item" key={item.key}>
              <NavLink
                exact
                activeClassName="sidenav__nav-link--selected"
                className="sidenav__nav-link"
                to={item.href}
              >
                {
                  <Icon
                    icon={item.icon}
                    color="black"
                    size={24}
                    accessibilityLabel={item.text}
                  />
                }
                <span className="sidenav__nav-link-text">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideMenu;

interface ISideMenuItem {
  key: string;
  selected: boolean;
  text: string;
  href: string;
  icon: IconNames;
}
