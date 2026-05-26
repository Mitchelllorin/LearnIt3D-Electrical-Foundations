# LearnIt3D — Electrical Foundations Apprentice Prep
**Learn IT3D — STEM · SIMULATED · 3D**

## Reference Sheet

This reference sheet summarizes core formulas, practical trade values, common Canadian voltage systems, wiring conventions, breaker sizes, and symbol descriptions used throughout the course.

---

## 1. Key Formulas

### Basic Circuit Formulas
- **Ohm's Law:** `V = I × R`
- **Current form:** `I = V / R`
- **Resistance form:** `R = V / I`
- **Power:** `P = V × I`
- **Power with resistance:** `P = I²R`
- **Power with voltage:** `P = V² / R`
- **Energy:** `E = P × t`
- **Work:** `W = V × Q`

### AC Power Formulas
- **Apparent Power:** `S = V × I`
- **Real Power:** `P = V × I × PF`
- **Reactive Power:** `Q = V × I × sin(θ)`
- **Power Factor:** `PF = P / S = cos(θ)`
- **Single-phase apparent power:** `S = V × I`
- **Three-phase apparent power:** `S = √3 × V_L × I_L`
- **Three-phase real power:** `P = √3 × V_L × I_L × PF`

### Resistance and Conductors
- **Resistance by material and geometry:** `R = ρL / A`
- **Voltage drop (single-phase, simplified):** `V_d = 2 × I × R_conductor`
- **Voltage drop percentage:** `%V_d = (V_d / V_supply) × 100`

### Energy and Conversion
- **Watt-hours:** `Wh = W × h`
- **Kilowatt-hours:** `kWh = kW × h`
- **Horsepower to watts:** `W = hp × 746`
- **Joules from power and time:** `J = W × s`

### Transformer Formulas
- **Turns ratio:** `N_p / N_s = V_p / V_s`
- **Ideal current ratio:** `I_p / I_s = N_s / N_p`
- **Ideal power relationship:** `V_p × I_p ≈ V_s × I_s`
- **Transformer kVA:** `kVA = (V × I) / 1000`

### Reactance and Impedance
- **Inductive reactance:** `X_L = 2πfL`
- **Capacitive reactance:** `X_C = 1 / (2πfC)`
- **Impedance (series R-L, magnitude):** `Z = √(R² + X_L²)`
- **Impedance (series R-C, magnitude):** `Z = √(R² + X_C²)`
- **General AC current form:** `I = V / Z`

### Frequency and Speed
- **Frequency:** `f = cycles/second`
- **Synchronous speed:** `N_s = (120 × f) / P`
  - `N_s` = speed in revolutions per minute (RPM)
  - `f` = frequency in hertz (Hz)
  - `P` = number of poles

---

## 2. AWG Conductor Sizing Table

> **Important:** Ampacity depends on conductor material, insulation temperature rating, termination rating, ambient temperature, and installation method. The values below are common apprentice-reference values for **copper building conductors** and must always be confirmed against the current Canadian Electrical Code and applicable equipment markings.

| Conductor Size | Typical Copper Ampacity | Common Introductory Use Case |
|---|---:|---|
| AWG 14 | 15 A | Lighting and general 15 A branch circuits |
| AWG 12 | 20 A | General-purpose 20 A branch circuits |
| AWG 10 | 30 A | Water heaters, dryers, small equipment feeders |
| AWG 8  | 40 A | Ranges, subfeeds, heavier branch circuits |
| AWG 6  | 60 A | Subpanels, larger appliances, feeders |
| AWG 4  | 85 A | Feeders and service conductors where permitted |
| AWG 2  | 115 A | Larger feeders and service applications |
| AWG 1/0 | 150 A | Heavy feeders and service conductors |

---

## 3. Standard Voltage Levels in Canada

| System | Typical Application | Notes |
|---|---|---|
| 120 V | General receptacles, lighting, small appliances | Common line-to-neutral branch-circuit voltage in homes and many buildings |
| 240 V split-phase | Ranges, dryers, water heaters, baseboard heat, small HVAC | Common residential line-to-line voltage from a center-tapped transformer secondary |
| 208 V three-phase | Commercial lighting, rooftop units, motors, small commercial services | Common in buildings served from 120/208 V three-phase systems |
| 347 V | Commercial and institutional lighting | Common line-to-neutral voltage on 347/600 V systems |
| 600 V | Motors, mechanical equipment, industrial and commercial distribution | Widely used Canadian utilization and distribution voltage |

### Quick Notes
- **120/240 V single-phase split-phase** is standard in many residential occupancies.
- **120/208 V three-phase** is common in multi-unit, commercial, and mixed-use facilities.
- **347/600 V three-phase** is widely used in Canadian commercial and industrial buildings.

---

## 4. Canadian Wire Color Codes

> Always verify conductor identification against the current code, local amendments, and the actual installation. Re-identification rules and special system colors may apply.

| Conductor Function | Common Canadian Identification |
|---|---|
| Hot / Ungrounded conductor | Black, red |
| Additional ungrounded phases | Blue often used as an additional phase colour in many systems |
| Neutral / Grounded conductor | White |
| Bonding / Equipment ground | Green or bare |

### Practical Note
- In residential split-phase work, **black** and **red** are commonly used for line conductors.
- **White** identifies the grounded conductor where permitted.
- **Green** or **bare** identifies bonding and equipment grounding conductors.

---

## 5. Standard Breaker Ratings

| Breaker Rating | Typical Application |
|---:|---|
| 15 A | General lighting and receptacle circuits with AWG 14 copper where permitted |
| 20 A | Kitchen receptacles, dedicated receptacles, general-use circuits with AWG 12 copper |
| 30 A | Dryers, water heaters, small HVAC loads, motor circuits |
| 40 A | Ranges, cooktops, and selected larger equipment |
| 60 A | Subpanels, larger heating loads, small service equipment |
| 100 A | Residential services, subfeeds, larger panels |
| 200 A | Modern residential services and larger distribution points |

### Breaker Selection Reminder
Breaker sizing must coordinate with conductor ampacity, equipment nameplate data, motor starting characteristics, and the applicable code rule. Never select a breaker solely by load preference without verifying conductor size and installation conditions.

---

## 6. Common Electrical Symbols (Described)

| Symbol / Device | Description |
|---|---|
| Battery | A series of long and short parallel lines representing DC cells and polarity |
| AC source | A circle with a sine-wave marking indicating an alternating voltage source |
| DC source | A circle or source symbol marked with positive and negative polarity |
| Conductor / wire | A straight line showing an electrical connection between points |
| Junction | A filled dot where conductors join electrically |
| Crossing, no connection | Crossing lines without a junction dot, indicating no electrical connection |
| Switch (SPST) | A break in a conductor with a movable contact showing open/close control |
| Fuse | A small protective element shown in series with the conductor |
| Circuit breaker | A protective switching device shown in series, usually identified by trip function |
| Lamp / indicator light | A circle with an X or filament mark indicating a light load |
| Resistor | A zigzag or rectangular block indicating resistance |
| Variable resistor | A resistor symbol with an arrow showing adjustability |
| Capacitor | Two parallel plates, equal or unequal depending on type |
| Inductor / coil | A series of loops representing a magnetic coil |
| Transformer | Two inductive coils side by side, often with core lines between them |
| Ground / earth | A descending set of horizontal lines or ground symbol indicating earth connection |
| Motor | A circle with “M” or a machine designation indicating a motor load |
| Receptacle | Device symbol indicating a plug-in outlet connection point |
| Panelboard | A distribution enclosure symbol grouping breakers or circuits |
| Meter | An instrument symbol labeled V, A, or Ω depending on function |

---

## 7. Ohm's Law Triangle

```text
        V
      -----
       I R
```

### How to Use It
- Cover **V** to get `V = I × R`
- Cover **I** to get `I = V / R`
- Cover **R** to get `R = V / I`

---

## 8. Power Triangle

```text
           S (Apparent Power, VA)
          /|
         / |
        /  | Q (Reactive Power, VAR)
       /θ  |
      /____|
 P (Real Power, W)
```

### Key Relationships
- `PF = cos(θ)`
- `P = S × PF`
- `Q = S × sin(θ)`
- `S = √(P² + Q²)`

---

## 9. Quick Troubleshooting Checks

1. **Verify the complaint clearly** before touching the circuit.
2. **Identify the system voltage** and expected operation.
3. **De-energize where possible** and apply lockout/tagout.
4. **Test before touch** using a known live-dead-live method where required by procedure.
5. **Check source voltage first** before replacing components.
6. **Look for open circuits, loose terminations, overloads, or short circuits** in a logical order.
7. **Confirm repairs with measurement** and restore equipment safely.

---

## 10. Source Citations

The course reference values and introductory theory in this sheet are informed by the following widely used sources:

1. **Canadian Electrical Code, Part I (CSA C22.1)** — Primary Canadian code reference for wiring methods, conductor ampacity application, grounding, bonding, and equipment installation rules.
2. **MIT OpenCourseWare** — Introductory circuits and electromagnetics course materials used for foundational theory review. Representative source: *MIT OpenCourseWare, Circuits and Electronics* and related electrical science resources.
3. **OpenStax** — Open educational texts for electricity, magnetism, energy, and circuit relationships. Representative sources include *College Physics 2e* and *University Physics* sections on electric current, circuits, and AC theory.
4. **IEC 60617** — International reference for graphical symbols used in diagrams and schematics.
5. **IEEE Standards and Reference Material** — Industry references for electrical engineering fundamentals, power systems, and practical definitions. Representative example: IEEE power distribution and systems guidance such as IEEE Std 141.
6. **CSA and manufacturer data** — Equipment nameplates, conductor temperature ratings, breaker interrupting ratings, and terminal torque values must always be confirmed from approved product documentation.

### Citation Note
This sheet is a training reference for apprentice preparation. Final field decisions must always be checked against the current edition of the Canadian Electrical Code, local authority requirements, utility standards, and manufacturer instructions.
