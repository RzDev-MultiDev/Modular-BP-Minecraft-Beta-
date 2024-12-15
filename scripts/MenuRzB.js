import { ActionFormData, ModalFormData } from '@minecraft/server-ui';

const jumlahOpsi = ["2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048" ];

export function RzB(player) {
  const mainMenu = new ActionFormData()
    .title("Created by Rz Dev")
    .body("§bBuilder Menu : \n\n§fAkan Memberikan Item Dan Block Untuk Keperluan Pembangunan.")
    .button('[Stone]\nBerbagai Pilihan Stone.', "textures/blocks/stone.png")
    .button('[Concrete]\nBerbagai Pilihan Concrete (Beton)', "textures/blocks/concrete_white.png")
    .button('[Keluar]', "textures/ui/icon_import.png")
    
    
  mainMenu.show(player).then(({ selection }) => {
    switch (selection) {
      case 0:
        showStoneMenu(player);
        break;
      case 1:
        showConcreteMenu(player);
        break;
        case 2:
        player.runCommandAsync('tellraw @s {"rawtext":[{"text":"Menu Ditutup."}]}');
        break;
    }
  });
}


function showStoneMenu(player) {
  const stoneMenu = new ModalFormData()
    .title("Varian Stone")
    .dropdown("Pilih Varian Stone", ["Stone", "Cobblestone", "Smooth Stone", "Sandstone", "Cut Sandstone", "Chiseled Sandstone", "Red Sandstone", "Cut Red Sandstone", "Chiseled Red Sandstone", "Blackstone", "Polished Blackstone", "Polished Blackstone Bricks", "Deepslate", "Polished Deepslate", "Cobbled Deepslate", "Tuff", "Granite", "Polished Granite", "Diorite", "Polished Diorite", "Andesite", "Polished Andesite", "Basalt", "Smooth Basalt"])
    .dropdown("Jumlah", jumlahOpsi );

  stoneMenu.show(player).then(({ isCanceled, formValues }) => {
    if (isCanceled) return;
    
  const [stoneIndex, jumlahIndex] = formValues;

    if (stoneIndex < 0 || stoneIndex >= 24) return;
    if (jumlahIndex < 0 || jumlahIndex >= 11) return;
    
    const jumlah =  jumlahOpsi[jumlahIndex];

    const stoneCommands = ["stone", "cobblestone", "smooth_stone", "sandstone", "cut_sandstone", "chiseled_sandstone", "red_sandstone", "cut_red_sandstone", "chiseled_red_sandstone", "blackstone", "polished_blackstone", "polished_blackstone_bricks", "deepslate", "polished_deepslate", "cobbled_deepslate", "tuff", "granite", "polished_granite", "diorite", "polished_diorite", "andesite", "polished_andesite", "basalt", "smooth_basalt"];

    const command = stoneCommands[stoneIndex];
    player.runCommandAsync(`give @s ${command} ${jumlah}`);
    player.runCommandAsync('playsound random.levelup @s ~~~');
  });
}

function showConcreteMenu(player) {
  const concreteMenu = new ModalFormData()
    .title("Varian Concrete")
    .dropdown("Pilih Varian Concrete", ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"])
    .dropdown("Jumlah", jumlahOpsi );

  concreteMenu.show(player).then(({ isCanceled, formValues }) => {
    if (isCanceled) return;
    
  const [concreteIndex, jumlahIndex] = formValues;

    if (concreteIndex < 0 || concreteIndex >= 16) return;
    if (jumlahIndex < 0 || jumlahIndex >= 11) return;
    
    const jumlah = jumlahOpsi[jumlahIndex];

    const concreteCommands = ["white_concrete", "orange_concrete", "magenta_concrete", "light_blue_concrete", "yellow_concrete", "lime_concrete", "pink_concrete", "gray_concrete", "light_gray_concrete", "cyan_concrete", "purple_concrete", "blue_concrete", "brown_concrete", "green_concrete", "red_concrete", "black_concrete"];

    const command = concreteCommands[concreteIndex];
    player.runCommandAsync(`give @s ${command} ${jumlah}`);
    player.runCommandAsync('playsound random.levelup @s ~~~');
  });
}