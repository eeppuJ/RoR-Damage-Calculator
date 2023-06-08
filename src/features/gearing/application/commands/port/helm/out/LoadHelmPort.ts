import type { HelmId } from "@/features/gearing/domain/items/helm/HelmId";
import type { Helm } from "@/features/gearing/domain/items/helm/Helm";

export interface LoadHelmPort {
  load(helmId: HelmId): Helm | undefined;
}
