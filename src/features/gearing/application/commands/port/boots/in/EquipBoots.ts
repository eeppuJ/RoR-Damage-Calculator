import { BootsId } from "@/features/gearing/domain/items/boots/BootsId";
import { EquipItemCommand } from "@/features/gearing/application/commands/port/items/in/EquipItem";

export class EquipBootsCommand extends EquipItemCommand {
  constructor(bootsId: number, characterId: number) {
    super(new BootsId(bootsId), characterId);
  }
}
