import { world as minecraftWorld, system as minecraftSystem } from '@minecraft/server';
import { RzA as menuRzA } from './MenuRzA';
import { RzM as menuRzM } from './MenuRzM';
import { RzB as menuRzB } from './MenuRzB';

minecraftWorld.beforeEvents.itemUse.subscribe(({ source, itemStack }) => {
    minecraftSystem.run(() => {
        switch (itemStack.typeId) {
            case 'renz:mrtools':
                menuRzA(source);
                break;
            case 'renz:menumakanan':
                menuRzM(source);
                break;
            case 'renz:menubuilder':
                menuRzB(source);
                break;
        }
    });
});
