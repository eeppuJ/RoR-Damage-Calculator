import type { ClassId } from "@/features/gearing/domain/ClassId";

export class UnknownClassError extends Error {
  constructor(classId: ClassId) {
    super(`Unknown class with ID : ${classId.id}`);
  }
}
