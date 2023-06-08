import type { BootsId } from "@/features/gearing/domain/items/boots/BootsId";
import { UnknownItemError } from "@/features/gearing/application/commands/UnknownItemError";

export class UnknownBootsError extends UnknownItemError {
  constructor(bootsId: BootsId) {
    super(bootsId, "boots");
  }
}
