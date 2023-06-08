import type { Helm } from "@/features/gearing/domain/items/helm/Helm";
import type { HelmId } from "@/features/gearing/domain/items/helm/HelmId";
import type { LoadHelmPort } from "@/features/gearing/application/commands/port/out/LoadHelmPort";

export class InMemoryHelmAdapter implements LoadHelmPort {
  private readonly helms: Helm[] = [];

  constructor(helms: Helm[] = []) {
    this.helms = helms;
  }

  load(helmId: HelmId): Helm | undefined {
    return this.helms.find((helm) => helm.hasId(helmId));
  }
}
