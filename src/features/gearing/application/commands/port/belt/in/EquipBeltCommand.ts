import { EquipItemCommand } from "@/features/gearing/application/commands/port/items/in/EquipItem";
import { BeltId } from "@/features/gearing/domain/items/belt/BeltId";

export class EquipBeltCommand extends EquipItemCommand {
  constructor(beltId: number, characterId: number) {
    super(new BeltId(beltId), characterId);
  }
}
