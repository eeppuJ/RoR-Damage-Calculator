import type { RoRClass } from "@/features/gearing/domain/classes/RoRClass";
import { Engineer } from "@/features/gearing/domain/classes/order/dwarves/Engineer";
import { Ironbreaker } from "@/features/gearing/domain/classes/order/dwarves/Ironbreaker";
import { Runepriest } from "@/features/gearing/domain/classes/order/dwarves/Runepriest";
import { Slayer } from "@/features/gearing/domain/classes/order/dwarves/Slayer";
import { BrightWizard } from "@/features/gearing/domain/classes/order/empire/BrightWizard";
import { KnightOfTheBlazingSun } from "@/features/gearing/domain/classes/order/empire/KnightOfTheBlazingSun";
import { WarriorPriest } from "@/features/gearing/domain/classes/order/empire/WarriorPriest";
import { WitchHunter } from "@/features/gearing/domain/classes/order/empire/WitchHunter";
import { Archmage } from "@/features/gearing/domain/classes/order/highelves/Archmage";
import { ShadowWarrior } from "@/features/gearing/domain/classes/order/highelves/ShadowWarrior";
import type { ClassId } from "@/features/gearing/domain/ClassId";
import { SwordMaster } from "@/features/gearing/domain/classes/order/highelves/SwordMaster";
import { WhiteLion } from "@/features/gearing/domain/classes/order/highelves/WhiteLion";
import { Chosen } from "@/features/gearing/domain/classes/destruction/chaos/Chosen";
import { Magus } from "@/features/gearing/domain/classes/destruction/chaos/Magus";
import { Marauder } from "@/features/gearing/domain/classes/destruction/chaos/Marauder";
import { Zealot } from "@/features/gearing/domain/classes/destruction/chaos/Zealot";
import { BlackGuard } from "@/features/gearing/domain/classes/destruction/darkelves/BlackGuard";
import { DiscipleOfKhaine } from "@/features/gearing/domain/classes/destruction/darkelves/DiscipleOfKhaine";
import { WitchElf } from "@/features/gearing/domain/classes/destruction/darkelves/WitchElf";
import { Sorcerer } from "@/features/gearing/domain/classes/destruction/darkelves/Sorcerer";
import { BlackOrc } from "@/features/gearing/domain/classes/destruction/greenskins/BlackOrc";
import { Choppa } from "@/features/gearing/domain/classes/destruction/greenskins/Choppa";
import { Shaman } from "@/features/gearing/domain/classes/destruction/greenskins/Shaman";
import { SquigHerder } from "@/features/gearing/domain/classes/destruction/greenskins/SquigHerder";
import { UnknownClassError } from "@/features/gearing/application/commands/UnknownClassError";

export class RoRClassesFactory {
  private readonly classes = new Set<RoRClass>();

  constructor() {
    this.addDwarvesClasses();
    this.addEmpireClasses();
    this.addHighElvesClasses();
    this.addChaosClasses();
    this.addDarkElvesClasses();
    this.addGreenSkinsClasses();
  }

  of(classId: ClassId): RoRClass {
    const rorClass = [...this.classes].find((aClass) =>
      aClass.classId.equals(classId)
    );
    if (rorClass === undefined) {
      throw new UnknownClassError(classId);
    }
    return rorClass;
  }

  private addDwarvesClasses() {
    this.classes.add(new Engineer());
    this.classes.add(new Ironbreaker());
    this.classes.add(new Runepriest());
    this.classes.add(new Slayer());
  }

  private addEmpireClasses() {
    this.classes.add(new BrightWizard());
    this.classes.add(new KnightOfTheBlazingSun());
    this.classes.add(new WarriorPriest());
    this.classes.add(new WitchHunter());
  }

  private addHighElvesClasses() {
    this.classes.add(new Archmage());
    this.classes.add(new ShadowWarrior());
    this.classes.add(new SwordMaster());
    this.classes.add(new WhiteLion());
  }

  private addChaosClasses() {
    this.classes.add(new Chosen());
    this.classes.add(new Magus());
    this.classes.add(new Marauder());
    this.classes.add(new Zealot());
  }

  private addDarkElvesClasses() {
    this.classes.add(new BlackGuard());
    this.classes.add(new DiscipleOfKhaine());
    this.classes.add(new Sorcerer());
    this.classes.add(new WitchElf());
  }

  private addGreenSkinsClasses() {
    this.classes.add(new BlackOrc());
    this.classes.add(new Choppa());
    this.classes.add(new Shaman());
    this.classes.add(new SquigHerder());
  }
}
