import { useEffect, useState } from "react";
import Menu from "./Menu";
import { MenuItems, SubMenuItem } from "./types/menuTypes";

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

function getSelectedSubmenuIndex(selected_item_index: number) {
  if (menuItems[selected_item_index].submenu) {
    return menuItems[selected_item_index].submenu.findIndex(
      (item: SubMenuItem) => item.selected
    );
  }
  return -1;
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
    const selected_submenu_item_index =
      getSelectedSubmenuIndex(selected_item_index);
    const is_submenu = selected_submenu_item_index !== -1;
    const updatedMenu = [...menu];
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      if (e.key === "ArrowUp") {
        if (is_submenu) {
          if (selected_submenu_item_index !== 0) {
            // clear selected and set prev one as selected
            updatedMenu[selected_item_index].submenu[
              selected_submenu_item_index
            ].selected = false;
            updatedMenu[selected_item_index].submenu[
              selected_submenu_item_index - 1
            ].selected = true;
          }
        } else if (selected_item_index !== 0) {
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
        if (is_submenu) {
          if (
            selected_submenu_item_index !==
            menuItems[selected_item_index].submenu.length - 1
          ) {
            // clear selected and set next one as selected
            updatedMenu[selected_item_index].submenu[
              selected_submenu_item_index
            ].selected = false;
            updatedMenu[selected_item_index].submenu[
              selected_submenu_item_index + 1
            ].selected = true;
          }
        } else if (selected_item_index !== menuItems.length - 1) {
          if (selected_item_index === -1) {
            // set to first index
            updatedMenu[0].selected = true;
          } else {
            // clear selected and set next one as selected
            updatedMenu[selected_item_index].selected = false;
            updatedMenu[selected_item_index + 1].selected = true;
          }
        }
      } else if (e.key === "ArrowRight") {
        if (updatedMenu[selected_item_index].submenu) {
          updatedMenu[selected_item_index].submenu[0].selected = true;
        }
      } else if (e.key === "ArrowLeft") {
        if (updatedMenu[selected_item_index].submenu) {
          updatedMenu[selected_item_index].submenu.map(
            (item: SubMenuItem) => (item.selected = false)
          );
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
