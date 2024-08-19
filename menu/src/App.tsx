import { useEffect, useState } from "react";
import Menu from "./Menu";
import { MenuItems } from "./types/menuTypes";

const menuItems: MenuItems = [
  {
    name: "Run program",
    selected: true,
    submenu: [
      { name: "Program 1", selected: false },
      { name: "Program 2", selected: false },
    ],
  },
  {
    name: "View Hardware",
    selected: false,
    submenu: [
      { name: "System", selected: false },
      { name: "Specs", selected: false },
      { name: "Network", selected: false },
    ],
  },
  {
    name: "Configure Settings",
    selected: false,
    submenu: [{ name: "I am lazy", selected: false }],
  },
  {
    name: "Open Command Line",
    selected: false,
    submenu: false,
  },
];

function getSelectedIndex() {
  return menuItems.findIndex((item) => item.selected);
}

function App() {
  const [menu, setMenu] = useState(menuItems);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return function () {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e: { key: string }) => {
    const selected_item_index = getSelectedIndex();
    const updatedMenu = [...menu];
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      if (e.key === "ArrowUp") {
        if (selected_item_index !== 0) {
          if (selected_item_index === -1) {
            // set to last index
            updatedMenu[updatedMenu.length].selected = true;
          } else {
            // clear selected and set prev one as selected
            updatedMenu[selected_item_index].selected = false;
            updatedMenu[selected_item_index - 1].selected = true;
          }
        }
      } else if (e.key === "ArrowDown") {
        if (selected_item_index !== menuItems.length - 1) {
          if (selected_item_index === -1) {
            // set to first index
            updatedMenu[0].selected = true;
          } else {
            // clear selected and set next one as selected
            updatedMenu[selected_item_index].selected = false;
            updatedMenu[selected_item_index + 1].selected = true;
          }
        }
      }
      setMenu(updatedMenu);
    }
  };

  return (
    <>
      <Menu title={"main_menu"} menuItems={menu} />
    </>
  );
}

export default App;
