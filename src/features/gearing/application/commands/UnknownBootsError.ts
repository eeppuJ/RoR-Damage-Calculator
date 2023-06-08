import type { BootsId } from "@/features/gearing/domain/items/BootsId";

export class UnknownBootsError extends Error {
  constructor(bootsId: BootsId) {
    super(`Unknown boots with ID : ${bootsId.id}`);
  }
}
