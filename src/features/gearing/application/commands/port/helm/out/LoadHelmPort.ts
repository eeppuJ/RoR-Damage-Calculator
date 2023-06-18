import type { Helm } from "@/features/gearing/domain/items/helm/Helm";
import type { LoadItemPort } from "@/features/gearing/application/commands/port/items/out/LoadItemPort";

export interface LoadHelmPort extends LoadItemPort<Helm> {}
