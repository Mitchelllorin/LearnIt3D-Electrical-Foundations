# LearnIt3D — Electrical Foundations Apprentice Prep
### Learn IT3D — STEM · SIMULATED · 3D
---

## Module 2 — Voltage, Current, Resistance (Ohm's Law)

### Learning Objectives
- Define voltage, current, and resistance using correct units and symbols.
- Apply Ohm's Law to calculate unknown values in simple DC and basic AC-resistive circuits.
- Interpret resistor colour bands and estimate resistor values.
- Explain internal resistance and why real sources are not ideal.
- Calculate total resistance in simple series circuits and describe parallel behaviour.
- Use voltage-divider reasoning in practical apprentice-level examples.
- Relate circuit behaviour to the water analogy without confusing the limits of the analogy.

## Full Lesson
Three of the most important ideas in electrical theory are **voltage (V)**, **current (I)**, and **resistance (R)**. These quantities appear in almost every circuit calculation an apprentice will make. When you understand how they work together, troubleshooting and sizing become much easier.

**Voltage** is electrical potential difference. It is measured in **volts (V)** and can be thought of as the push that encourages charge to move through a circuit. In Canadian residential systems, a common branch-circuit voltage is 120 V from line to neutral, while many large household loads use 240 V line to line on a split-phase system.

**Current** is the rate of flow of electrical charge. It is measured in **amperes (A)**. If voltage is the push, current is the amount of charge actually moving. Loads such as heaters, motors, and lamps draw current when a circuit is complete.

**Resistance** is opposition to current flow. It is measured in **ohms (Ω)**. Long, small, or poor-conducting paths have more resistance. Short, large copper conductors have less. Resistance can be useful, as in a heating element, or undesirable, as in loose or corroded connections.

These three quantities are connected by **Ohm's Law**:

| Formula | Meaning |
|---|---|
| `V = I × R` | Voltage equals current times resistance |
| `I = V / R` | Current equals voltage divided by resistance |
| `R = V / I` | Resistance equals voltage divided by current |

A good habit is to write down what is known, write the correct formula, substitute units, and solve neatly.

### Worked Examples
1. Given **V = 12 V** and **R = 4 Ω**:
   `I = V / R = 12 / 4 = 3 A`
2. Given **I = 5 A** and **R = 10 Ω**:
   `V = I × R = 5 × 10 = 50 V`
3. Given **V = 120 V** and **I = 10 A**:
   `R = V / I = 120 / 10 = 12 Ω`

These examples look simple, but they are the basis for many field calculations. If a 120 V heater draws 10 A, its effective resistance is 12 Ω. If a test load across 12 V has 4 Ω resistance, you should expect 3 A of current.

A common teaching tool is the **water analogy**. Voltage is like pressure in a water pipe, current is like flow rate, and resistance is like restriction in the pipe. This analogy helps beginners picture why higher voltage can push more current and why greater resistance reduces current. Still, electricity is not literally water. Conductors, fields, and AC behaviour are more complex, so the analogy is only a starting point.

Real sources have **internal resistance**. A battery is not an ideal source with zero loss inside it. A long feeder, transformer winding, or battery cell all have some internal resistance. When current increases, some voltage is dropped inside the source or conductor itself. That is one reason voltage at a load can sag under heavy demand.

Resistors in **series** are connected end to end so there is only one current path. Their resistances add directly:
`R_t = R_1 + R_2 + R_3 + ...`
If a circuit has 2 Ω, 3 Ω, and 5 Ω in series, total resistance is 10 Ω. With a 20 V supply, current is `20 / 10 = 2 A`.

Resistors in **parallel** are connected across the same two points, so they share the same voltage. Parallel combinations reduce total resistance because more than one path is available for current. The introductory formula is:
`1 / R_t = 1 / R_1 + 1 / R_2 + 1 / R_3 + ...`
For two equal resistors in parallel, total resistance is half of one resistor. Two 12 Ω resistors in parallel give 6 Ω.

A **voltage divider** is a practical series circuit where source voltage is shared across resistors according to their values. If two equal resistors are in series across 12 V, each drops about 6 V. Voltage dividers are used in electronics, controls, and sensors. Apprentices should remember that a divider works best when the connected load does not significantly disturb the divider current.

### Resistor Colour Codes
Most fixed resistors are marked with colour bands. A common 4-band code uses:
- 1st band = first digit
- 2nd band = second digit
- 3rd band = multiplier
- 4th band = tolerance

Common digits:
- Black 0
- Brown 1
- Red 2
- Orange 3
- Yellow 4
- Green 5
- Blue 6
- Violet 7
- Grey 8
- White 9

Example: **Brown-Black-Red-Gold** = 10 × 100 = **1000 Ω** or **1 kΩ**, ±5%.

Ohm's Law also explains many practical situations. A loose terminal increases resistance. If current still flows, the connection heats because energy is lost at the high-resistance point. A long extension cord causes voltage drop because the conductor resistance is not zero. A meter with very low internal resistance can disturb a sensitive circuit, while a proper digital multimeter has high input resistance when measuring voltage so it affects the circuit less.

In apprentice training, always connect theory to field conditions. On a 120/240 V split-phase service, a kettle or space heater is often close to a resistive load, so Ohm's Law and power formulas apply directly. A motor is more complex because impedance and power factor matter, but the basic V-I-R relationship still gives useful insight.

Good electricians are not just formula users. They check units, compare results to common sense, and ask whether the answer is physically reasonable. If your calculation says a 120 V branch circuit feeds 200 A through a small resistor, you should immediately question whether that resistance value or circuit condition makes sense. Safe work starts with correct understanding.

## Real-World Examples
1. **Portable 12 V work light:** A 12 V lamp with 4 Ω effective resistance draws 3 A. If the battery voltage falls, the current and brightness fall too.
2. **Baseboard heater branch circuit:** A 240 V resistive heater draws current based on its element resistance. Measuring resistance with the power isolated can help confirm whether the element is intact.
3. **Long temporary cord on a job site:** The tool still runs, but low voltage at the far end causes poor performance because conductor resistance creates voltage drop.

## Diagrams
### 1. Water Analogy
```text
Electrical circuit        Water system analogy
Voltage (V)      <-->    Pressure
Current (I)      <-->    Flow rate
Resistance (R)   <-->    Pipe restriction
```

### 2. Simple Voltage Divider
```text
 +12 V o----[ R1 1000 Ω ]----o----[ R2 1000 Ω ]----o 0 V
                             |
                          Vout ≈ 6 V
```

## Practice Problems
### 1. A circuit has 24 V applied across 8 Ω. What is the current?
**Solution:** `I = V / R = 24 / 8 = 3 A`.

### 2. A load draws 2 A on a 120 V circuit. What is its resistance?
**Solution:** `R = V / I = 120 / 2 = 60 Ω`.

### 3. Two resistors, 3 Ω and 5 Ω, are connected in series. What is total resistance?
**Solution:** `R_t = 3 + 5 = 8 Ω`.

### 4. Two 12 Ω resistors are connected in parallel. What is total resistance?
**Solution:** Equal parallel resistors divide by the number of branches: `12 / 2 = 6 Ω`.

### 5. A 12 V source feeds two equal series resistors. What is the voltage across one resistor?
**Solution:** Equal resistors share voltage equally, so each drops `12 / 2 = 6 V`.

## 3D Interactive Description
**Ohm's Law Slider Tool** shows three large sliders labeled V, I, and R with colour-coded digital meter displays. When the learner changes any one quantity, the interactive recalculates the others using Ohm's Law and updates the meter faces in real time. A side panel displays the active formula and unit conversions. Learners can load preset examples such as 12 V with 4 Ω, 120 V with 12 Ω, and 50 V with 10 Ω to see how the numbers match worked trade examples.
