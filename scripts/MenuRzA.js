import { ActionFormData, ModalFormData } from '@minecraft/server-ui';


export function RzA(player) {
  const mainMenu = new ActionFormData()
    .title("Created by: Salty12 (YouTube)")
    .body("§cMORE MENU TOOLS : \n\n§fAkan Memberikan Debug Item Yang Bisa Digunakan Sebagaimana Fungsinya.")
    .button('[Makanan]\nMendapatkan Item Debug Makanan', "textures/items/beef_cooked.png")
    .button('[Build Item]\nMendapatkan Item Debug Build', "textures/ui/anvil_icon.png")
    .button('[Keluar]', "textures/ui/icon_import.png")

  mainMenu.show(player).then(({ selection }) => {
    switch (selection) {
      case 0:
        player.runCommandAsync('give @s renz:menumakanan');
        player.runCommandAsync('playsound random.levelup @s ~~~');
        break;
      case 1:
        player.runCommandAsync('give @s renz:menumakanan');
        player.runCommandAsync('playsound random.levelup @s ~~~');
        break;
        case 2:
        player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Menu Ditutup."}]}');
        break;
    }
  });
}