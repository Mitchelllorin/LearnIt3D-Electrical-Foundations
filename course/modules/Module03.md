# LearnIt3D — Electrical Foundations Apprentice Prep
### Learn IT3D — STEM · SIMULATED · 3D
---

## Module 3 — Series & Parallel Circuits

### Learning Objectives
- State the defining rules for series circuits and parallel circuits.
- Calculate total resistance, current, and voltage in simple series networks.
- Calculate branch currents and total current in simple parallel networks.
- Apply Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL).
- Recognize open circuits, short circuits, and their effects on system behaviour.
- Analyze basic combination circuits used in practical installations.
- Relate circuit theory to residential wiring and troubleshooting situations.

## Full Lesson
Most practical electrical systems are built from combinations of two basic arrangements: **series circuits** and **parallel circuits**. Understanding how each behaves is essential for apprentices because the same ideas appear in lighting circuits, controls, electronic boards, and residential wiring.

In a **series circuit**, components are connected one after another so there is only **one path** for current. Because there is only one path, the **same current** flows through every series component. The source voltage is shared among the loads, and the individual voltage drops add up to the source voltage. Total resistance is simply the sum of all series resistances:
`R_t = R_1 + R_2 + R_3 + ...`

### Series Rules
- Same current through all components
- Voltage drops add to the source voltage
- Total resistance is the sum of all resistances
- Opening any part of the circuit stops current everywhere in that loop

A simple string of lamps is a classic series example. If one lamp opens, the entire string goes out because the single path is broken.

In a **parallel circuit**, each branch is connected across the same source points. That means each branch has the **same voltage** across it. Current divides among the branches according to branch resistance. Lower-resistance branches take more current. The total source current is the sum of all branch currents. Total resistance in parallel is found by:
`1 / R_t = 1 / R_1 + 1 / R_2 + 1 / R_3 + ...`

### Parallel Rules
- Same voltage across every branch
- Branch currents add to total current
- Total resistance is less than the smallest branch resistance
- One branch opening does not necessarily stop current in the other branches

Residential wiring is mostly parallel. A receptacle, light, or appliance on one branch circuit receives the full circuit voltage, typically 120 V line to neutral in a Canadian dwelling. Turning off one lamp does not shut off every other load in the house because they are not in one long series loop.

### Kirchhoff's Laws
**Kirchhoff's Voltage Law (KVL)** says the algebraic sum of voltages around a closed loop is zero. In trade language, source voltage equals the sum of voltage drops in the loop.

**Kirchhoff's Current Law (KCL)** says the sum of current entering a node equals the sum of current leaving it. At a junction in a parallel circuit, total current splits among the branches, then recombines.

These laws are not extra formulas to memorize separately from series and parallel circuits. They explain *why* the series and parallel rules work.

### Worked Example 1 — Series Circuit
A 24 V source feeds three series resistors: 2 Ω, 4 Ω, and 6 Ω.
- `R_t = 2 + 4 + 6 = 12 Ω`
- `I = V / R_t = 24 / 12 = 2 A`
- Voltage drops:
  - `V1 = I × R1 = 2 × 2 = 4 V`
  - `V2 = 2 × 4 = 8 V`
  - `V3 = 2 × 6 = 12 V`
Check with KVL: `4 + 8 + 12 = 24 V`

### Worked Example 2 — Parallel Circuit
A 120 V source feeds two parallel resistors: 30 Ω and 20 Ω.
- Branch currents:
  - `I1 = 120 / 30 = 4 A`
  - `I2 = 120 / 20 = 6 A`
- Total current by KCL:
  - `I_t = 4 + 6 = 10 A`
- Total resistance:
  - `R_t = V / I_t = 120 / 10 = 12 Ω`
Notice total resistance, 12 Ω, is lower than either branch resistor.

### Worked Example 3 — Combination Circuit
A 120 V circuit feeds a 10 Ω resistor in series with two 20 Ω resistors in parallel.
- Parallel portion: two equal 20 Ω resistors in parallel give `10 Ω`
- Total resistance: `10 + 10 = 20 Ω`
- Total current: `I_t = 120 / 20 = 6 A`
- Voltage drop on the series 10 Ω resistor: `V = 6 × 10 = 60 V`
- Voltage across the parallel network: `120 - 60 = 60 V`
- Each 20 Ω branch current: `60 / 20 = 3 A`
KCL check: `3 A + 3 A = 6 A`

### ASCII Layouts
```text
Series circuit
 +V o----[R1]----[R2]----[R3]----o 0 V
        same current everywhere
```

```text
Parallel circuit
 +V o----+----[R1]----+
         |            |
         +----[R2]----+----o 0 V
         |            |
         +----[R3]----+
      same voltage across every branch
```

An **open circuit** is a broken path. Current becomes zero in that path. An open switch, broken wire, blown fuse, or failed lamp filament creates an open circuit. In a series loop, one open stops all current. In a parallel system, one open branch may only affect that branch.

A **short circuit** is an unintended low-resistance path. Because resistance becomes very small, current can rise to dangerous values. Shorts can cause breaker trips, arcing, heat, or fire. A short across a source bypasses the intended load. For example, if the insulation between hot and neutral fails, current may surge sharply until the protective device operates.

Combination circuits are common in the field. A panel feeds branch circuits in parallel, yet each branch may contain series elements such as switches, thermal protectors, or control contacts. A lighting control circuit may use a series switch to control a lamp that is itself on a parallel branch relative to other loads.

For apprentices, the biggest practical lesson is this: **houses are wired in parallel for utilization loads**, but troubleshooting often requires recognizing local series elements within those branches. If a light will not turn on, the open may be in a series switch, neutral splice, lamp holder, or failed lamp, even though the building distribution is a parallel system.

Correct circuit analysis helps with safe measurement too. If current should be equal everywhere in a series loop but is not, your assumption about the circuit may be wrong or a branch may exist. If two parallel loads should both see 120 V but one does not, there may be an open conductor or faulty connection.

## Real-World Examples
1. **Christmas light string:** Older decorative strings often behave like series circuits. One failed lamp can darken a section because the current path is interrupted.
2. **Residential receptacles and lights:** Branch-circuit devices are connected in parallel so each load receives full system voltage and can operate independently.
3. **Control transformer circuit:** A stop button, overload contact, and coil may be wired in series within a control branch, while other control branches operate in parallel.

## Diagrams
### 1. Series Path and Open Circuit
```text
 +120 V o----[switch closed]----[lamp]----o neutral

If switch opens:
 +120 V o----[switch open]      [lamp]----o neutral
                no current flows anywhere in loop
```

### 2. Parallel Branches and KCL
```text
           I1=2 A
 +120 V o----[Load 1]----+
                         |
           I2=3 A        +----o neutral
 +120 V o----[Load 2]----+

Source current It = I1 + I2 = 5 A
```

## Practice Problems
### 1. Three resistors of 5 Ω, 7 Ω, and 8 Ω are in series. Find total resistance.
**Solution:** `R_t = 5 + 7 + 8 = 20 Ω`.

### 2. A 120 V source feeds a series resistance of 20 Ω. Find current.
**Solution:** `I = 120 / 20 = 6 A`.

### 3. Two parallel branches are 60 Ω and 30 Ω on 120 V. Find branch currents.
**Solution:** `I1 = 120 / 60 = 2 A`, `I2 = 120 / 30 = 4 A`.

### 4. What is total current for Problem 3?
**Solution:** By KCL, `I_t = 2 + 4 = 6 A`.

### 5. What happens if one lamp opens in a simple series lamp circuit?
**Solution:** The only current path is broken, so current becomes zero and all lamps in that series loop go out.

## 3D Interactive Description
**Series/Parallel Circuit Builder** gives the learner a virtual circuit board with a source, resistors, switches, and lamps. Components can be dragged into one path to create a series circuit or onto separate branches to create a parallel circuit. As the learner snaps parts into place, animated meters update voltage, current, and total resistance in real time. Opening a switch instantly shows what happens to current paths, while adding a short branch demonstrates why total resistance drops and current rises. This helps apprentices visualize KVL, KCL, opens, and shorts instead of treating them as abstract formulas.
