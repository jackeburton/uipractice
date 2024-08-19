import { MenuItems } from "./types/menuTypes";
import spade from "./assets/spade.svg";
import Submenu from "./Submenu";

type MenuProps = {
  title: string;
  menuItems: MenuItems;
};

function Menu({ title, menuItems }: MenuProps) {
  return (
    <div className="border-[2px] border-blue-950 bg-blue-300 font-mono font-bold text-white w-80 shadow-custom">
      <div className="grid grid-cols-[34px_250px_50px]">
        <div className="m-[2px] p-[1px] bg-blue-950">
          <img className="h-5 ml-auto mr-auto mt-1" src={spade} />
        </div>
        <div className="m-[2px] p-[1px] bg-blue-950">
          <div className="bg-slate-200 m-[2px] text-blue-950">/{title}</div>
        </div>
        <div className="m-[2px] ml-[1px]">
          <div className="w-[2px] h-full inline-block bg-blue-950"></div>
          <div className="w-[2px] h-full inline-block"></div>
          <div className="w-[4px] h-full inline-block bg-blue-950"></div>
          <div className="w-[2px] h-full inline-block"></div>
          <div className="w-[2px] h-full inline-block bg-blue-950"></div>
        </div>
      </div>
      <div className="bg-blue-950 m-[2px] mt-0 p-5">
        {menuItems.map((menuItem, index) => {
          if (menuItem.selected && menuItem.submenu) {
            return (
              <div
                key={index}
                className="text-blue-950 bg-blue-300 w-80 border-blue-950 border-0 border-r-[2px] relative"
              >
                {menuItem.name}
                <Submenu submenuItems={menuItem.submenu} />
              </div>
            );
          } else if (menuItem.selected) {
            return (
              <div
                key={index}
                className="text-blue-950 bg-blue-300 w-80 border-blue-950 border-0 border-r-[2px]"
              >
                {menuItem.name}
              </div>
            );
          } else {
            return <div key={index}>{menuItem.name}</div>;
          }
        })}
      </div>
    </div>
  );
}

export default Menu;
