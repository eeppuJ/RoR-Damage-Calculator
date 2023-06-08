import { ClassId } from "@/features/gearing/domain/ClassId";
import { CharacterId } from "@/features/gearing/domain/CharacterId";

export class ChooseClassCommand {
  readonly classId: ClassId;
  readonly characterId: CharacterId;

  constructor(classId: number, characterId: number) {
    this.classId = new ClassId(classId);
    this.characterId = new CharacterId(characterId);
  }
}

export interface ChooseClass {
  handle: (chooseClassCommand: ChooseClassCommand) => void;
}
