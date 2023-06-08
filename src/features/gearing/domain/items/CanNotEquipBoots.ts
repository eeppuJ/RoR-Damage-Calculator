import type { BootsId } from "@/features/gearing/domain/items/BootsId";
import type { CharacterId } from "@/features/gearing/domain/CharacterId";

export class CanNotEquipBootsError extends Error {
  constructor(characterId: CharacterId, bootsId: BootsId) {
    super(
      `The character with ID ${characterId.id} can't equip the boots with ID ${bootsId.id}`
    );
  }
}
