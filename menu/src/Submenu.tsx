import { SubMenu } from "./types/menuTypes";

type SubmenuProps = {
  submenuItems: SubMenu;
};

function Submenu({ submenuItems }: SubmenuProps) {
  return (
    <div className="absolute left-[325px] top-[-0px] border-[2px] border-blue-950 bg-blue-300 font-mono font-bold text-white w-32 shadow-custom">
      <div className="grid grid-cols-[100px_50px]">
        <div className="m-[2px] p-[1px] bg-blue-950 text-blue-300 h-[20px]">
          ...
        </div>
        <div className="m-[2px] ml-[1px] h-[20px]">
          <div className="w-[2px] h-full inline-block bg-blue-950"></div>
          <div className="w-[2px] h-full inline-block"></div>
          <div className="w-[4px] h-full inline-block bg-blue-950"></div>
          <div className="w-[2px] h-full inline-block"></div>
          <div className="w-[2px] h-full inline-block bg-blue-950"></div>
        </div>
      </div>
      <div className="bg-blue-950 m-[2px] mt-0 p-3">
        {submenuItems.map((menuItem, index) => {
          if (menuItem.selected) {
            return (
              <div
                key={index}
                className="text-blue-950 bg-[#f7bc19] grid grid-cols-[80px_15px] w-[95px]"
              >
                <div>{menuItem.name}</div>
                <div className="ml-[1px] h-[25px] bg-blue-950">
                  <div className="w-[1px] h-full inline-block"></div>
                  <div className="w-[2px] h-full inline-block bg-[#f7bc19]"></div>
                  <div className="w-[3px] h-full inline-block"></div>
                  <div className="w-[1px] h-full inline-block bg-[#f7bc19]"></div>
                  <div className="w-[3px] h-full inline-block"></div>
                </div>
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

export default Submenu;
