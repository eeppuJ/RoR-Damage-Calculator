import { UnknownItemError } from "@/features/gearing/application/commands/UnknownItemError";
import type { HelmId } from "@/features/gearing/domain/items/helm/HelmId";

export class UnknownHelmError extends UnknownItemError {
  constructor(helmId: HelmId) {
    super(helmId, "helm");
  }
}
