# LearnIt3D — Electrical Foundations Apprentice Prep
### Learn IT3D — STEM · SIMULATED · 3D
---

## Module 5 — Conductors, Insulators & Materials

### Learning Objectives
- Compare the electrical properties of common conductors, insulators, and semiconductors.
- Identify practical differences between copper, aluminum, steel, and silver in electrical work.
- Use the resistivity formula `R = ρL / A` conceptually to explain conductor behaviour.
- Select common conductor sizes using introductory AWG ampacity values and use cases.
- Explain how temperature affects resistance and ampacity.
- Calculate basic voltage drop and relate it to conductor length and size.
- Recognize Canadian wire colour codes and common building wire types.

## Full Lesson
Electrical installations depend on choosing the right material for the job. Some materials let current flow easily, some strongly resist it, and some can be controlled to behave in special ways. For an apprentice, material knowledge is not just science; it affects safety, voltage drop, temperature rise, and code compliance.

A **conductor** is a material that allows current to flow with relatively low resistance. The most common conductor in building wiring is **copper** because it has low resistance, good mechanical strength, and reliable terminations. **Aluminum** is also widely used, especially for feeders and service conductors, because it is lighter and less expensive than copper, though it needs larger sizes for the same current and correct termination methods to deal with oxide formation and thermal expansion. **Silver** is an excellent conductor, but it is too expensive for normal building wiring. **Steel** conducts far less effectively than copper and is usually chosen for strength or enclosure use rather than for main current-carrying conductors.

An **insulator** is a material that resists current flow. Common examples are **rubber**, **plastic**, **glass**, porcelain, and dry air. Insulation keeps current on its intended path and protects people from energized conductors. Cable jackets and conductor insulation are selected based on temperature rating, environment, and installation method.

A **semiconductor** falls between a conductor and an insulator. Silicon is the most common example. Semiconductors are used in diodes, transistors, sensors, and electronic controls. Apprentices do not need advanced device physics at this stage, but they should recognize that modern electrical systems often combine power wiring with semiconductor-based control equipment.

The resistance of a conductor depends on **material**, **length**, and **cross-sectional area**. The relationship is:
`R = ρL / A`
where `ρ` is resistivity, `L` is length, and `A` is area. This means:
- Longer conductors have more resistance.
- Larger conductors have less resistance.
- Better conductive materials have lower resistivity.

This is why a long run of small wire produces more voltage drop than a short run of large wire. It is also why copper and aluminum behave differently even when installed in similar ways.

### Introductory AWG Sizing Table
| Conductor Size | Typical Copper Ampacity | Common Use |
|---|---:|---|
| 14 AWG | 15 A | Lighting and 15 A branch circuits |
| 12 AWG | 20 A | General-purpose receptacle circuits |
| 10 AWG | 30 A | Water heaters, dryers, dedicated loads |
| 8 AWG | 40 A | Ranges, heavier branch circuits, small feeders |
| 6 AWG | 55 A | Subfeeds and larger feeders |

These are common apprentice reference values only. Final selection must always match the current Canadian Electrical Code, insulation rating, termination rating, ambient temperature, and installation conditions.

**Ampacity** is the maximum current a conductor can carry continuously under stated conditions without exceeding its temperature rating. Ampacity is not determined by conductor size alone. Bundle conductors together, run them through hot spaces, or use equipment with lower-rated terminals, and the allowable current may change.

Temperature matters because conductor resistance generally increases as temperature rises. Hot copper has more resistance than cooler copper. That creates a feedback effect: higher current causes heating, and heating increases resistance. If the conductor is overloaded or poorly cooled, insulation can be damaged. This is why correct overcurrent protection and installation method matter so much.

### Voltage Drop
Voltage drop is the reduction in voltage along a conductor due to resistance. In a simple single-phase circuit, an apprentice-level expression is:
`V_d = 2 × I × R_conductor`
The factor of 2 accounts for the outgoing and returning conductor path. A practical summary is:
- More current = more voltage drop
- Longer run = more voltage drop
- Smaller conductor = more voltage drop

If the load voltage drops too far, heaters produce less heat, lights dim, and motors may struggle or overheat. Good design keeps voltage drop within acceptable limits.

### Worked Example — Voltage Drop
Assume a 120 V single-phase circuit draws `15 A` and each conductor has resistance of `0.20 Ω`.
- Total loop resistance = `0.20 + 0.20 = 0.40 Ω`
- Using the same idea, `V_d = I × R_total = 15 × 0.40 = 6 V`
- Load voltage = `120 - 6 = 114 V`
- Percentage drop = `(6 / 120) × 100 = 5%`
This shows why long runs may require larger conductors.

### Canadian Wire Colour Codes
For the course conventions used here:
- **Black/red** = hot (ungrounded conductors)
- **White** = neutral (grounded conductor)
- **Green or bare** = bonding/equipment ground
These identifications are common in Canadian 120/240 V split-phase residential systems. Always verify local requirements and any permitted re-identification rules.

### Common Wire Types
- **THHN**: A common thermoplastic-insulated conductor name often seen in raceway systems in North American references.
- **NMD90**: Non-metallic dry-location cable commonly used in Canadian residential construction.
- **RW90**: Insulated conductor commonly used in raceways and many installation types, rated for wet or dry locations depending on construction and approval.

Material selection is more than conductivity. Mechanical strength, corrosion resistance, flexibility, temperature rating, sunlight resistance, moisture resistance, and termination compatibility all matter. Aluminum conductors require connectors and lugs identified for aluminum use. Fine-stranded conductors may require different terminations than solid conductors. Outdoor or underground environments need appropriate insulation and protection.

A skilled apprentice learns to look at the entire installation: source voltage, load current, distance, environment, and code rules. A conductor that is electrically adequate but mechanically unsuitable is still the wrong choice. A cable that fits the amperage but not the wet location is still the wrong choice. Material knowledge supports both safe installation and long-term reliability.

## Real-World Examples
1. **Kitchen receptacle circuit:** A 20 A small-appliance branch circuit commonly uses 12 AWG copper conductors to match the breaker rating and expected load.
2. **Detached garage feeder:** A longer run may require upsizing conductors to control voltage drop, especially if tools or heaters operate at the far end.
3. **Aluminum service conductors:** Large residential services often use aluminum because it lowers cost and weight while still meeting design needs when properly terminated.

## Diagrams
### 1. Effect of Length and Size on Resistance
```text
Long, small conductor:   [ thin ------------------------- ]  higher R
Short, large conductor:  [ thick ------- ]                 lower R
```

### 2. Split-Phase Cable Identification
```text
Panel ---- black ---------> load hot
      ---- red -----------> second hot (if used)
      ---- white ---------> neutral
      ---- green/bare ----> bond/ground
```

## Practice Problems
### 1. Which material is more commonly used for branch-circuit conductors in buildings: copper or glass?
**Solution:** Copper. Glass is an insulator.

### 2. What happens to conductor resistance if length increases and area stays the same?
**Solution:** Resistance increases because `R = ρL / A`.

### 3. What conductor size is commonly associated with a 20 A copper branch circuit in this module?
**Solution:** 12 AWG.

### 4. Name the common Canadian colour for neutral and for bonding conductors.
**Solution:** White for neutral, green or bare for bonding/ground.

### 5. Why can a long conductor run cause equipment problems even if the wire is not open?
**Solution:** The conductor resistance causes voltage drop, so the load may receive less than its intended voltage.

## 3D Interactive Description
**Material Conductivity Tester** presents a bench with sample pieces of copper wire, aluminum, steel, wood, rubber, and glass. The learner connects a virtual source across each sample and sees a current meter respond. High-conductivity materials show strong current flow, poor conductors show small current, and insulators show nearly none. A temperature slider lets the learner raise conductor temperature to see resistance increase and meter current drop. The scene reinforces why conductor choice, size, and environment matter in real installations.
