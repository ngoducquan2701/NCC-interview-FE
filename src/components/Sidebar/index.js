import { sidebarOptions } from './constant';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarOptions">
        {sidebarOptions.map((sidebarOption, index) => (
          <li className="sidebarItem" key={index}>
            {sidebarOption.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
