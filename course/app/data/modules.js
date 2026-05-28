/* Auto-generated module content data */
window.MODULES = [
  {
    id: 1,
    title: `Introduction to Electricity & Safety`,
    sceneFile: `course/3d/scene01.html`,
    objectives: [
      `Explain electricity as the movement of charge and distinguish electron flow from conventional current.`,
      `Identify major electrical hazards including shock, arc flash, arc blast, and fire.`,
      `Describe required PPE for common apprentice-level electrical tasks.`,
      `Follow a step-by-step lockout/tagout (LOTO) procedure before working on equipment.`,
      `Recognize electrical safety zones and explain why boundaries must be respected.`,
      `Outline first-aid priorities after an electrical shock incident.`,
      `Summarize grounding, bonding, and key Canadian Electrical Code safety expectations.`
    ],
    lesson: `Electricity is the movement of electrical charge. In metal conductors, the charge carriers are usually electrons. Electrons are tiny negatively charged particles that can move from atom to atom when a conductive path is available. In practical wiring, this movement happens because a source such as a battery or transformer creates a difference in electrical potential, or voltage. That difference pushes charge through a complete circuit.

Apprentices must understand two ways current is described. **Electron flow** is the actual movement of electrons from the negative side of a source toward the positive side. **Conventional current** is the historical model used in most drawings and formulas. It assumes current flows from positive to negative. In trade work, both ideas appear. Schematics usually use conventional current, while theory discussions may mention electron flow. The important point is that both describe the same circuit action from different viewpoints.

Electricity is useful because it can do work: lighting lamps, heating elements, and driving motors. It is dangerous for the same reason. When current passes through the human body, it can interfere with muscles, nerves, breathing, and heart rhythm. Even a circuit that seems familiar, such as a 120 V branch circuit, can injure or kill under the wrong conditions. Wet skin, metal contact, confined spaces, and poor grounding all increase risk.

The main electrical hazards are **shock**, **arc flash**, and **fire**. Shock occurs when the body becomes part of a circuit. Current may enter through one hand and leave through the other, or travel from hand to foot through the chest. Arc flash is a sudden release of energy through the air caused by a fault between energized conductors or between a conductor and ground. It produces intense heat, bright light, molten metal, pressure, and sound. Arc blast refers to the pressure wave and flying debris that may accompany the arc. Fire can result from overloaded conductors, loose terminations, damaged insulation, or faults that ignite nearby material.

Because hazards vary, PPE must match the task. Basic apprentice PPE often includes **safety glasses**, **a hard hat**, and **CSA-approved footwear**. When shock protection is required, properly rated **rubber insulating gloves** with leather protectors are used after inspection and testing intervals are confirmed. For higher incident-energy tasks, workers may need an **arc flash suit**, arc-rated face shield or hood, hearing protection, and arc-rated clothing. PPE does not make unsafe work safe by itself. It is the last line of defence after de-energizing, isolating, locking out, and verifying absence of voltage.

A safe electrical job begins with planning. Read the drawing, identify all sources, review the equipment, and talk through the procedure. Then apply **lockout/tagout (LOTO)**:
1. Identify every energy source, including normal supply, backup supply, generator, UPS, and stored mechanical energy.
2. Notify affected persons that the equipment will be shut down.
3. Shut the equipment down using normal controls.
4. Isolate the equipment at the disconnect, breaker, switch, or other approved device.
5. Apply a personal lock and a durable tag showing name, date, and reason.
6. Release stored energy such as capacitors, spring tension, or rotating motion.
7. Verify isolation using an approved tester: test the meter on a known live source, test the circuit, then re-test on a known live source.
8. Only begin work after zero-energy state is confirmed.
9. When work is complete, inspect the area, remove tools, ensure guards are back in place, and remove locks/tags according to company procedure.

Safety zones help workers control exposure. Training materials often describe **limited**, **restricted**, and **prohibited** approach zones around energized parts. The farther zone warns that a shock hazard exists; the closer zone is for qualified persons using specific controls; the innermost zone represents extreme danger and should be avoided unless a justified energized procedure exists. In addition, arc-flash boundaries may be marked so workers know where arc-rated PPE is required. On many sites these areas are colour-coded, for example green for safe access, yellow for caution, and red for danger.

If electrical shock occurs, protect yourself first. Do **not** touch the victim until the power is disconnected or the person is separated from the source with a dry, non-conductive object when safe to do so. Call emergency services immediately. Once the scene is safe, check responsiveness, breathing, and pulse. Begin CPR if trained and required, and use an AED if available. Treat burns with clean, dry coverings. Even when the person seems recovered, medical assessment is necessary because internal injuries and irregular heartbeat may not be obvious.

The Canadian Electrical Code (CEC) focuses on safe installation, equipment approval, conductor sizing, bonding, grounding, and protection from overcurrent and faults. Apprentices should treat the CEC as the minimum standard, not a shortcut. Follow approved methods, use equipment as listed, maintain conductor colour identification, and never defeat bonding or grounding connections.

Grounding and bonding are related but different. **Grounding** connects a system to earth to stabilize voltage and limit overvoltage. **Bonding** connects non-current-carrying metal parts together and back to the source so a fault current has a low-impedance path. In Canadian residential work, black and red conductors are commonly used as ungrounded (hot) conductors, white as the grounded neutral conductor, and green or bare as bonding/ground. If a metal box becomes energized because of a fault, a proper bonding path allows enough current to flow to trip the breaker quickly.

A safe electrician combines theory, procedure, and discipline. Respect every conductor until proven de-energized. Wear the right PPE, follow LOTO every time, verify with a meter, and understand that good workmanship is part of safety. A neat, code-compliant installation is easier to inspect, troubleshoot, and protect over its service life.`,
    examples: `1. **Residential panel service call:** An apprentice helps replace a 15 A breaker in a 120/240 V split-phase panel. The feeder remains energized, so the crew sets boundaries, wears PPE, identifies adjacent live parts, and follows the supervisor's safe work plan before touching the branch circuit.
2. **Rooftop unit disconnect:** A technician locks out the rooftop HVAC disconnect, tests the line side and load side for absence of voltage, then confirms the meter on a known live source before changing a failed contactor.
3. **Damaged extension cord on site:** A cracked cord jacket exposes copper strands. The supervisor removes it from service immediately because damaged insulation can cause shock, arc, or fire.`,
    diagrams: `### 1. Basic Current Views
\`\`\`text
Electron flow:      (-) source -------- conductor -------- (+) source
                         e- e- e- e-  move this direction --->

Conventional current:(+) source -------- conductor -------- (-) source
                         I I I I I    shown this direction --->
\`\`\`

### 2. Colour-Coded Hazard Zone Concept
\`\`\`text
[ GREEN ]    Safe approach / outside boundary
[ YELLOW ]   Limited approach / caution zone
[ RED ]      Restricted or prohibited zone / energized hazard

Worker path ---> GREEN -> YELLOW -> RED
                 more controls and PPE required as risk increases
\`\`\`

### 3. Grounding and Bonding Basics
\`\`\`text
Utility transformer
      | 120/240 V split-phase
      |
   [Panel]
    |  |\\
    |  | \\__ black/red = hot conductors
    |  \\____ white = neutral
    \\_______ green/bare = bond/ground to metal parts
\`\`\``,
    practice: `### 1. What is the difference between electron flow and conventional current?
**Solution:** Electron flow describes electrons moving from negative to positive. Conventional current is the diagram convention showing current from positive to negative.

### 2. Name three major electrical hazards.
**Solution:** Shock, arc flash/arc blast, and fire.

### 3. Put these LOTO steps in the correct order: verify absence of voltage, notify affected persons, apply lock and tag, isolate equipment.
**Solution:** Notify affected persons → isolate equipment → apply lock and tag → verify absence of voltage.

### 4. What conductor colours are commonly used in Canadian 120/240 V residential wiring for hot, neutral, and bonding conductors?
**Solution:** Black or red for hot, white for neutral, and green or bare for bonding/ground.

### 5. Why is bonding important if a metal box becomes energized?
**Solution:** Bonding provides a low-impedance fault path back to the source so fault current rises quickly and the overcurrent device trips, clearing the fault.`,
    desc3d: `**PPE & Hazard Zone 3D Scene** places the learner in a mechanical/electrical room with a worker standing near energized equipment. The floor is divided into green, yellow, and red safety zones. The user can rotate the camera, move between viewpoints, and click PPE items such as safety glasses, rubber gloves, hard hat, arc-rated face shield, and arc flash suit. Each click opens a short explanation of what the item protects against and when it is required. Clicking the panel boundary markers highlights the limited, restricted, and prohibited danger areas so apprentices can connect theory to field spacing and safe approach behaviour.`,
  },
  {
    id: 2,
    title: `Voltage, Current, Resistance (Ohm's Law)`,
    sceneFile: `course/3d/scene02.html`,
    objectives: [
      `Define voltage, current, and resistance using correct units and symbols.`,
      `Apply Ohm's Law to calculate unknown values in simple DC and basic AC-resistive circuits.`,
      `Interpret resistor colour bands and estimate resistor values.`,
      `Explain internal resistance and why real sources are not ideal.`,
      `Calculate total resistance in simple series circuits and describe parallel behaviour.`,
      `Use voltage-divider reasoning in practical apprentice-level examples.`,
      `Relate circuit behaviour to the water analogy without confusing the limits of the analogy.`
    ],
    lesson: `Three of the most important ideas in electrical theory are **voltage (V)**, **current (I)**, and **resistance (R)**. These quantities appear in almost every circuit calculation an apprentice will make. When you understand how they work together, troubleshooting and sizing become much easier.

**Voltage** is electrical potential difference. It is measured in **volts (V)** and can be thought of as the push that encourages charge to move through a circuit. In Canadian residential systems, a common branch-circuit voltage is 120 V from line to neutral, while many large household loads use 240 V line to line on a split-phase system.

**Current** is the rate of flow of electrical charge. It is measured in **amperes (A)**. If voltage is the push, current is the amount of charge actually moving. Loads such as heaters, motors, and lamps draw current when a circuit is complete.

**Resistance** is opposition to current flow. It is measured in **ohms (Ω)**. Long, small, or poor-conducting paths have more resistance. Short, large copper conductors have less. Resistance can be useful, as in a heating element, or undesirable, as in loose or corroded connections.

These three quantities are connected by **Ohm's Law**:

| Formula | Meaning |
|---|---|
| \`V = I × R\` | Voltage equals current times resistance |
| \`I = V / R\` | Current equals voltage divided by resistance |
| \`R = V / I\` | Resistance equals voltage divided by current |

A good habit is to write down what is known, write the correct formula, substitute units, and solve neatly.

### Worked Examples
1. Given **V = 12 V** and **R = 4 Ω**:
   \`I = V / R = 12 / 4 = 3 A\`
2. Given **I = 5 A** and **R = 10 Ω**:
   \`V = I × R = 5 × 10 = 50 V\`
3. Given **V = 120 V** and **I = 10 A**:
   \`R = V / I = 120 / 10 = 12 Ω\`

These examples look simple, but they are the basis for many field calculations. If a 120 V heater draws 10 A, its effective resistance is 12 Ω. If a test load across 12 V has 4 Ω resistance, you should expect 3 A of current.

A common teaching tool is the **water analogy**. Voltage is like pressure in a water pipe, current is like flow rate, and resistance is like restriction in the pipe. This analogy helps beginners picture why higher voltage can push more current and why greater resistance reduces current. Still, electricity is not literally water. Conductors, fields, and AC behaviour are more complex, so the analogy is only a starting point.

Real sources have **internal resistance**. A battery is not an ideal source with zero loss inside it. A long feeder, transformer winding, or battery cell all have some internal resistance. When current increases, some voltage is dropped inside the source or conductor itself. That is one reason voltage at a load can sag under heavy demand.

Resistors in **series** are connected end to end so there is only one current path. Their resistances add directly:
\`R_t = R_1 + R_2 + R_3 + ...\`
If a circuit has 2 Ω, 3 Ω, and 5 Ω in series, total resistance is 10 Ω. With a 20 V supply, current is \`20 / 10 = 2 A\`.

Resistors in **parallel** are connected across the same two points, so they share the same voltage. Parallel combinations reduce total resistance because more than one path is available for current. The introductory formula is:
\`1 / R_t = 1 / R_1 + 1 / R_2 + 1 / R_3 + ...\`
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

Good electricians are not just formula users. They check units, compare results to common sense, and ask whether the answer is physically reasonable. If your calculation says a 120 V branch circuit feeds 200 A through a small resistor, you should immediately question whether that resistance value or circuit condition makes sense. Safe work starts with correct understanding.`,
    examples: `1. **Portable 12 V work light:** A 12 V lamp with 4 Ω effective resistance draws 3 A. If the battery voltage falls, the current and brightness fall too.
2. **Baseboard heater branch circuit:** A 240 V resistive heater draws current based on its element resistance. Measuring resistance with the power isolated can help confirm whether the element is intact.
3. **Long temporary cord on a job site:** The tool still runs, but low voltage at the far end causes poor performance because conductor resistance creates voltage drop.`,
    diagrams: `### 1. Water Analogy
\`\`\`text
Electrical circuit        Water system analogy
Voltage (V)      <-->    Pressure
Current (I)      <-->    Flow rate
Resistance (R)   <-->    Pipe restriction
\`\`\`

### 2. Simple Voltage Divider
\`\`\`text
 +12 V o----[ R1 1000 Ω ]----o----[ R2 1000 Ω ]----o 0 V
                             |
                          Vout ≈ 6 V
\`\`\``,
    practice: `### 1. A circuit has 24 V applied across 8 Ω. What is the current?
**Solution:** \`I = V / R = 24 / 8 = 3 A\`.

### 2. A load draws 2 A on a 120 V circuit. What is its resistance?
**Solution:** \`R = V / I = 120 / 2 = 60 Ω\`.

### 3. Two resistors, 3 Ω and 5 Ω, are connected in series. What is total resistance?
**Solution:** \`R_t = 3 + 5 = 8 Ω\`.

### 4. Two 12 Ω resistors are connected in parallel. What is total resistance?
**Solution:** Equal parallel resistors divide by the number of branches: \`12 / 2 = 6 Ω\`.

### 5. A 12 V source feeds two equal series resistors. What is the voltage across one resistor?
**Solution:** Equal resistors share voltage equally, so each drops \`12 / 2 = 6 V\`.`,
    desc3d: `**Ohm's Law Slider Tool** shows three large sliders labeled V, I, and R with colour-coded digital meter displays. When the learner changes any one quantity, the interactive recalculates the others using Ohm's Law and updates the meter faces in real time. A side panel displays the active formula and unit conversions. Learners can load preset examples such as 12 V with 4 Ω, 120 V with 12 Ω, and 50 V with 10 Ω to see how the numbers match worked trade examples.`,
  },
  {
    id: 3,
    title: `Series & Parallel Circuits`,
    sceneFile: `course/3d/scene03.html`,
    objectives: [
      `State the defining rules for series circuits and parallel circuits.`,
      `Calculate total resistance, current, and voltage in simple series networks.`,
      `Calculate branch currents and total current in simple parallel networks.`,
      `Apply Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL).`,
      `Recognize open circuits, short circuits, and their effects on system behaviour.`,
      `Analyze basic combination circuits used in practical installations.`,
      `Relate circuit theory to residential wiring and troubleshooting situations.`
    ],
    lesson: `Most practical electrical systems are built from combinations of two basic arrangements: **series circuits** and **parallel circuits**. Understanding how each behaves is essential for apprentices because the same ideas appear in lighting circuits, controls, electronic boards, and residential wiring.

In a **series circuit**, components are connected one after another so there is only **one path** for current. Because there is only one path, the **same current** flows through every series component. The source voltage is shared among the loads, and the individual voltage drops add up to the source voltage. Total resistance is simply the sum of all series resistances:
\`R_t = R_1 + R_2 + R_3 + ...\`

### Series Rules
- Same current through all components
- Voltage drops add to the source voltage
- Total resistance is the sum of all resistances
- Opening any part of the circuit stops current everywhere in that loop

A simple string of lamps is a classic series example. If one lamp opens, the entire string goes out because the single path is broken.

In a **parallel circuit**, each branch is connected across the same source points. That means each branch has the **same voltage** across it. Current divides among the branches according to branch resistance. Lower-resistance branches take more current. The total source current is the sum of all branch currents. Total resistance in parallel is found by:
\`1 / R_t = 1 / R_1 + 1 / R_2 + 1 / R_3 + ...\`

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
- \`R_t = 2 + 4 + 6 = 12 Ω\`
- \`I = V / R_t = 24 / 12 = 2 A\`
- Voltage drops:
  - \`V1 = I × R1 = 2 × 2 = 4 V\`
  - \`V2 = 2 × 4 = 8 V\`
  - \`V3 = 2 × 6 = 12 V\`
Check with KVL: \`4 + 8 + 12 = 24 V\`

### Worked Example 2 — Parallel Circuit
A 120 V source feeds two parallel resistors: 30 Ω and 20 Ω.
- Branch currents:
  - \`I1 = 120 / 30 = 4 A\`
  - \`I2 = 120 / 20 = 6 A\`
- Total current by KCL:
  - \`I_t = 4 + 6 = 10 A\`
- Total resistance:
  - \`R_t = V / I_t = 120 / 10 = 12 Ω\`
Notice total resistance, 12 Ω, is lower than either branch resistor.

### Worked Example 3 — Combination Circuit
A 120 V circuit feeds a 10 Ω resistor in series with two 20 Ω resistors in parallel.
- Parallel portion: two equal 20 Ω resistors in parallel give \`10 Ω\`
- Total resistance: \`10 + 10 = 20 Ω\`
- Total current: \`I_t = 120 / 20 = 6 A\`
- Voltage drop on the series 10 Ω resistor: \`V = 6 × 10 = 60 V\`
- Voltage across the parallel network: \`120 - 60 = 60 V\`
- Each 20 Ω branch current: \`60 / 20 = 3 A\`
KCL check: \`3 A + 3 A = 6 A\`

### ASCII Layouts
\`\`\`text
Series circuit
 +V o----[R1]----[R2]----[R3]----o 0 V
        same current everywhere
\`\`\`

\`\`\`text
Parallel circuit
 +V o----+----[R1]----+
         |            |
         +----[R2]----+----o 0 V
         |            |
         +----[R3]----+
      same voltage across every branch
\`\`\`

An **open circuit** is a broken path. Current becomes zero in that path. An open switch, broken wire, blown fuse, or failed lamp filament creates an open circuit. In a series loop, one open stops all current. In a parallel system, one open branch may only affect that branch.

A **short circuit** is an unintended low-resistance path. Because resistance becomes very small, current can rise to dangerous values. Shorts can cause breaker trips, arcing, heat, or fire. A short across a source bypasses the intended load. For example, if the insulation between hot and neutral fails, current may surge sharply until the protective device operates.

Combination circuits are common in the field. A panel feeds branch circuits in parallel, yet each branch may contain series elements such as switches, thermal protectors, or control contacts. A lighting control circuit may use a series switch to control a lamp that is itself on a parallel branch relative to other loads.

For apprentices, the biggest practical lesson is this: **houses are wired in parallel for utilization loads**, but troubleshooting often requires recognizing local series elements within those branches. If a light will not turn on, the open may be in a series switch, neutral splice, lamp holder, or failed lamp, even though the building distribution is a parallel system.

Correct circuit analysis helps with safe measurement too. If current should be equal everywhere in a series loop but is not, your assumption about the circuit may be wrong or a branch may exist. If two parallel loads should both see 120 V but one does not, there may be an open conductor or faulty connection.`,
    examples: `1. **Christmas light string:** Older decorative strings often behave like series circuits. One failed lamp can darken a section because the current path is interrupted.
2. **Residential receptacles and lights:** Branch-circuit devices are connected in parallel so each load receives full system voltage and can operate independently.
3. **Control transformer circuit:** A stop button, overload contact, and coil may be wired in series within a control branch, while other control branches operate in parallel.`,
    diagrams: `### 1. Series Path and Open Circuit
\`\`\`text
 +120 V o----[switch closed]----[lamp]----o neutral

If switch opens:
 +120 V o----[switch open]      [lamp]----o neutral
                no current flows anywhere in loop
\`\`\`

### 2. Parallel Branches and KCL
\`\`\`text
           I1=2 A
 +120 V o----[Load 1]----+
                         |
           I2=3 A        +----o neutral
 +120 V o----[Load 2]----+

Source current It = I1 + I2 = 5 A
\`\`\``,
    practice: `### 1. Three resistors of 5 Ω, 7 Ω, and 8 Ω are in series. Find total resistance.
**Solution:** \`R_t = 5 + 7 + 8 = 20 Ω\`.

### 2. A 120 V source feeds a series resistance of 20 Ω. Find current.
**Solution:** \`I = 120 / 20 = 6 A\`.

### 3. Two parallel branches are 60 Ω and 30 Ω on 120 V. Find branch currents.
**Solution:** \`I1 = 120 / 60 = 2 A\`, \`I2 = 120 / 30 = 4 A\`.

### 4. What is total current for Problem 3?
**Solution:** By KCL, \`I_t = 2 + 4 = 6 A\`.

### 5. What happens if one lamp opens in a simple series lamp circuit?
**Solution:** The only current path is broken, so current becomes zero and all lamps in that series loop go out.`,
    desc3d: `**Series/Parallel Circuit Builder** gives the learner a virtual circuit board with a source, resistors, switches, and lamps. Components can be dragged into one path to create a series circuit or onto separate branches to create a parallel circuit. As the learner snaps parts into place, animated meters update voltage, current, and total resistance in real time. Opening a switch instantly shows what happens to current paths, while adding a short branch demonstrates why total resistance drops and current rises. This helps apprentices visualize KVL, KCL, opens, and shorts instead of treating them as abstract formulas.`,
  },
  {
    id: 4,
    title: `Electrical Power & Energy`,
    sceneFile: `course/3d/scene04.html`,
    objectives: [
      `Define electrical power and energy using proper SI units.`,
      `Use \`P = V × I\`, \`P = I²R\`, and \`P = V² / R\` in basic calculations.`,
      `Convert watts, kilowatts, watt-hours, and kilowatt-hours.`,
      `Explain the difference between real power, reactive power, and apparent power.`,
      `Describe power factor and why it matters for motors and AC systems.`,
      `Estimate electricity usage and cost from common household loads.`,
      `Connect efficiency concepts to real electrical equipment and losses.`
    ],
    lesson: `Electrical systems are built to deliver **power** so loads can do useful work. Power tells us how quickly electrical energy is being converted into light, heat, motion, or another form. The SI unit of power is the **watt (W)**. When the numbers are larger, we often use **kilowatts (kW)**, where \`1 kW = 1000 W\`.

The most common power formula is:
\`P = V × I\`
This means power equals voltage multiplied by current. If a load uses 120 V and draws 10 A, its power is \`120 × 10 = 1200 W\`, or \`1.2 kW\`.

**Energy** is power used over time. If power tells us how fast work is being done, energy tells us how much total work is done during a period. The basic relationship is:
\`E = P × t\`
If a 1000 W heater runs for 2 h, it uses \`1000 × 2 = 2000 Wh\`, or \`2 kWh\`.

Utilities bill customers in **kilowatt-hours (kWh)**. One kilowatt-hour means using 1000 W for 1 hour. A 100 W lamp running for 10 h also uses 1 kWh. Apprentices should be comfortable converting between W, kW, Wh, and kWh because energy cost discussions are common with customers and supervisors.

For resistive circuits, power can also be found using Ohm's Law substitutions:
- \`P = I²R\`
- \`P = V² / R\`
These formulas are especially useful when voltage or current is not directly given. For example, if a heating element has resistance of 12 Ω on 120 V, power is \`V² / R = 120² / 12 = 1200 W\`.

In AC systems with motors, transformers, and coils, power is more complicated. Not all current contributes directly to useful work. We divide AC power into three ideas:
- **Real power (P)** in watts: actual working power doing useful work or heat.
- **Reactive power (Q)** in vars: power that moves back and forth due to magnetic or electric fields.
- **Apparent power (S)** in volt-amperes (VA): total \`V × I\` without considering phase angle.

**Power factor (PF)** is the ratio of real power to apparent power:
\`PF = P / S\`
A purely resistive heater has PF close to 1.0. Many motors have lower PF because some current is used to establish magnetic fields. Lower PF means the system carries more current for the same useful power, increasing conductor and equipment loading.

### Formula Table
| Quantity | Formula | Unit |
|---|---|---|
| Power | \`P = V × I\` | W |
| Energy | \`E = P × t\` | Wh or kWh |
| Resistive power | \`P = I²R\` | W |
| Resistive power | \`P = V² / R\` | W |
| Apparent power | \`S = V × I\` | VA |
| Power factor | \`PF = P / S\` | ratio |

### Common Household Load Table
| Load | Typical Voltage | Typical Power | Approx. Daily Use | Daily Energy | Daily Cost at $0.15/kWh |
|---|---:|---:|---:|---:|---:|
| LED lamp | 120 V | 10 W | 5 h | 0.05 kWh | $0.01 |
| Refrigerator | 120 V | 150 W average | 8 h equivalent cycling | 1.2 kWh | $0.18 |
| Space heater | 120 V | 1500 W | 4 h | 6.0 kWh | $0.90 |
| Microwave oven | 120 V | 1200 W | 0.25 h | 0.30 kWh | $0.05 |
| Baseboard heater | 240 V | 2000 W | 6 h | 12.0 kWh | $1.80 |
| Small motor load | 120 V | 500 W | 2 h | 1.0 kWh | $0.15 |

If electricity costs **$0.15/kWh**, then a 6.0 kWh daily heater load costs:
- Daily cost: \`6.0 × 0.15 = $0.90\`
- 30-day month: \`$0.90 × 30 = $27.00\`

### Worked Example 1
A 120 V kettle draws 12 A.
- \`P = V × I = 120 × 12 = 1440 W\`
If it runs for 0.2 h:
- \`E = 1.44 kW × 0.2 h = 0.288 kWh\`

### Worked Example 2
A 240 V heater has resistance of 24 Ω.
- \`P = V² / R = 240² / 24 = 2400 W\`
- Current is \`I = P / V = 2400 / 240 = 10 A\`

### Worked Example 3
A motor uses 1200 W real power at 120 V and 12 A.
- Apparent power: \`S = 120 × 12 = 1440 VA\`
- \`PF = 1200 / 1440 = 0.83\`
This shows why current can be higher than a simple resistive-load estimate would suggest.

**Efficiency** compares useful output to input. No real device is 100% efficient. A motor converts electrical input into mechanical output, but some energy is lost as heat, sound, and friction. If a motor takes in 1000 W and produces 850 W of mechanical output, efficiency is \`850 / 1000 = 85%\`.

In practical work, power calculations help size branch circuits, estimate operating costs, and understand loading. A 1500 W portable heater on 120 V draws about 12.5 A, which is already close to the full rating of a 15 A circuit. Add another large load and nuisance tripping becomes likely. At 240 V, large heating loads can deliver more power with lower current than an equivalent 120 V arrangement.

Reactive power becomes important in larger commercial and industrial work, especially with motors, ballasts, and transformers. Even at the apprentice prep level, it is useful to know that high current is not always equal to high useful output. Power factor correction equipment is used in some systems to reduce wasted current flow.

Power and energy concepts also help with sustainability. Customers may ask whether replacing incandescent lamps with LEDs saves money. The answer comes from power and time. Lower wattage over many hours means lower kWh and lower cost. Similarly, insulation and thermostat control reduce heater run time, lowering total energy use even if the heater wattage itself does not change.`,
    examples: `1. **Portable heater on a bedroom circuit:** A 1500 W heater on 120 V draws about 12.5 A. If the same circuit also feeds a vacuum cleaner, the breaker may trip.
2. **Electric water heater:** A 240 V resistive element converts electrical energy directly into heat with a power factor close to 1.0.
3. **Fridge compressor motor:** Nameplate watts and running current do not tell the whole story unless power factor and cycling time are considered.`,
    diagrams: `### 1. Power and Energy Relationship
\`\`\`text
Power (W) x Time (h) = Energy (Wh)

Example:
1500 W x 4 h = 6000 Wh = 6 kWh
\`\`\`

### 2. AC Power Triangle
\`\`\`text
           Apparent Power (S, VA)
                /|
               / |
              /  | Reactive Power (Q, var)
             /   |
            /____|
   Real Power (P, W)

Power factor = P / S
\`\`\``,
    practice: `### 1. A 120 V load draws 8 A. Find power.
**Solution:** \`P = 120 × 8 = 960 W\`.

### 2. A 2000 W heater runs for 3 h. Find energy used.
**Solution:** \`E = 2000 × 3 = 6000 Wh = 6 kWh\`.

### 3. Electricity costs $0.15/kWh. What is the cost of 6 kWh?
**Solution:** \`6 × 0.15 = $0.90\`.

### 4. A 240 V resistive load has 48 Ω resistance. Find power.
**Solution:** \`P = V² / R = 240² / 48 = 1200 W\`.

### 5. A device uses 900 W real power and 1000 VA apparent power. What is power factor?
**Solution:** \`PF = 900 / 1000 = 0.90\`.`,
    desc3d: `**Power Calculator with Load Toggles** presents a virtual panelboard and a set of selectable household and light-commercial loads: lights, fridge, heater, and motor. Toggling a load on instantly updates total watts, branch current, daily kWh, and estimated monthly cost based on a chosen utility rate. Loads can be viewed individually or in combination so apprentices can see why a heater dominates the energy bill while a small LED lamp has little effect. A side graph separates real power and apparent power for the motor load to introduce power factor visually.`,
  },
  {
    id: 5,
    title: `Conductors, Insulators & Materials`,
    sceneFile: `course/3d/scene05.html`,
    objectives: [
      `Compare the electrical properties of common conductors, insulators, and semiconductors.`,
      `Identify practical differences between copper, aluminum, steel, and silver in electrical work.`,
      `Use the resistivity formula \`R = ρL / A\` conceptually to explain conductor behaviour.`,
      `Select common conductor sizes using introductory AWG ampacity values and use cases.`,
      `Explain how temperature affects resistance and ampacity.`,
      `Calculate basic voltage drop and relate it to conductor length and size.`,
      `Recognize Canadian wire colour codes and common building wire types.`
    ],
    lesson: `Electrical installations depend on choosing the right material for the job. Some materials let current flow easily, some strongly resist it, and some can be controlled to behave in special ways. For an apprentice, material knowledge is not just science; it affects safety, voltage drop, temperature rise, and code compliance.

A **conductor** is a material that allows current to flow with relatively low resistance. The most common conductor in building wiring is **copper** because it has low resistance, good mechanical strength, and reliable terminations. **Aluminum** is also widely used, especially for feeders and service conductors, because it is lighter and less expensive than copper, though it needs larger sizes for the same current and correct termination methods to deal with oxide formation and thermal expansion. **Silver** is an excellent conductor, but it is too expensive for normal building wiring. **Steel** conducts far less effectively than copper and is usually chosen for strength or enclosure use rather than for main current-carrying conductors.

An **insulator** is a material that resists current flow. Common examples are **rubber**, **plastic**, **glass**, porcelain, and dry air. Insulation keeps current on its intended path and protects people from energized conductors. Cable jackets and conductor insulation are selected based on temperature rating, environment, and installation method.

A **semiconductor** falls between a conductor and an insulator. Silicon is the most common example. Semiconductors are used in diodes, transistors, sensors, and electronic controls. Apprentices do not need advanced device physics at this stage, but they should recognize that modern electrical systems often combine power wiring with semiconductor-based control equipment.

The resistance of a conductor depends on **material**, **length**, and **cross-sectional area**. The relationship is:
\`R = ρL / A\`
where \`ρ\` is resistivity, \`L\` is length, and \`A\` is area. This means:
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
\`V_d = 2 × I × R_conductor\`
The factor of 2 accounts for the outgoing and returning conductor path. A practical summary is:
- More current = more voltage drop
- Longer run = more voltage drop
- Smaller conductor = more voltage drop

If the load voltage drops too far, heaters produce less heat, lights dim, and motors may struggle or overheat. Good design keeps voltage drop within acceptable limits.

### Worked Example — Voltage Drop
Assume a 120 V single-phase circuit draws \`15 A\` and each conductor has resistance of \`0.20 Ω\`.
- Total loop resistance = \`0.20 + 0.20 = 0.40 Ω\`
- Using the same idea, \`V_d = I × R_total = 15 × 0.40 = 6 V\`
- Load voltage = \`120 - 6 = 114 V\`
- Percentage drop = \`(6 / 120) × 100 = 5%\`
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

A skilled apprentice learns to look at the entire installation: source voltage, load current, distance, environment, and code rules. A conductor that is electrically adequate but mechanically unsuitable is still the wrong choice. A cable that fits the amperage but not the wet location is still the wrong choice. Material knowledge supports both safe installation and long-term reliability.`,
    examples: `1. **Kitchen receptacle circuit:** A 20 A small-appliance branch circuit commonly uses 12 AWG copper conductors to match the breaker rating and expected load.
2. **Detached garage feeder:** A longer run may require upsizing conductors to control voltage drop, especially if tools or heaters operate at the far end.
3. **Aluminum service conductors:** Large residential services often use aluminum because it lowers cost and weight while still meeting design needs when properly terminated.`,
    diagrams: `### 1. Effect of Length and Size on Resistance
\`\`\`text
Long, small conductor:   [ thin ------------------------- ]  higher R
Short, large conductor:  [ thick ------- ]                 lower R
\`\`\`

### 2. Split-Phase Cable Identification
\`\`\`text
Panel ---- black ---------> load hot
      ---- red -----------> second hot (if used)
      ---- white ---------> neutral
      ---- green/bare ----> bond/ground
\`\`\``,
    practice: `### 1. Which material is more commonly used for branch-circuit conductors in buildings: copper or glass?
**Solution:** Copper. Glass is an insulator.

### 2. What happens to conductor resistance if length increases and area stays the same?
**Solution:** Resistance increases because \`R = ρL / A\`.

### 3. What conductor size is commonly associated with a 20 A copper branch circuit in this module?
**Solution:** 12 AWG.

### 4. Name the common Canadian colour for neutral and for bonding conductors.
**Solution:** White for neutral, green or bare for bonding/ground.

### 5. Why can a long conductor run cause equipment problems even if the wire is not open?
**Solution:** The conductor resistance causes voltage drop, so the load may receive less than its intended voltage.`,
    desc3d: `**Material Conductivity Tester** presents a bench with sample pieces of copper wire, aluminum, steel, wood, rubber, and glass. The learner connects a virtual source across each sample and sees a current meter respond. High-conductivity materials show strong current flow, poor conductors show small current, and insulators show nearly none. A temperature slider lets the learner raise conductor temperature to see resistance increase and meter current drop. The scene reinforces why conductor choice, size, and environment matter in real installations.`,
  },
  {
    id: 6,
    title: `Tools, Meters & Measurement`,
    sceneFile: `course/3d/scene06.html`,
    objectives: [
      `Identify the purpose of common electrical hand tools and test instruments.`,
      `Use a digital multimeter (DMM) safely for voltage, current, resistance, and continuity checks.`,
      `Distinguish between a DMM, clamp meter, voltage tester, continuity tester, and oscilloscope.`,
      `Follow safe measurement practices on live and de-energized circuits.`,
      `Read multimeter displays and select the correct function and range.`,
      `Perform step-by-step measurements for AC voltage, DC current, continuity, and resistance.`,
      `Recognize common measurement mistakes and how to avoid them.`
    ],
    lesson: `A good electrician does not guess. Safe, accurate work depends on using the right tools and knowing what the readings mean. Apprentices should become comfortable with both hand tools and measuring instruments because troubleshooting is a large part of electrical work.

The most common instrument is the **digital multimeter (DMM)**. A DMM can measure voltage, current, resistance, and often continuity, frequency, capacitance, and diode function. A typical meter has a display, a rotary selector, input jacks, and test leads. The black lead usually goes in the **COM** jack. The red lead goes in the voltage/resistance jack for most measurements, but must be moved to a current jack when measuring current. Forgetting this is a common and dangerous mistake.

A **clamp meter** measures current by clamping around a conductor and sensing the magnetic field. This is useful because the circuit does not need to be opened. Clamp meters are especially practical for measuring AC current on branch circuits, feeders, and motor loads.

A **voltage tester** quickly indicates whether voltage is present. Some are non-contact; others are two-pole contact testers. They are convenient for quick checks, but they do not replace a proper meter and full verification method.

A **continuity tester** checks whether a path is electrically continuous. It should be used only on de-energized circuits. Many DMMs include a continuity setting with an audible tone.

An **oscilloscope** displays voltage as a waveform over time. At the apprentice-prep level, the key idea is that a scope lets you see AC wave shape, ripple, frequency, and signal changes that a normal meter may hide.

Important hand tools include the **wire stripper**, **conduit bender**, **fish tape**, and **torque screwdriver**. A wire stripper removes insulation without nicking the conductor. A conduit bender forms raceway bends to the correct angle and offset. Fish tape pulls conductors through conduit. A torque screwdriver tightens terminals to manufacturer specifications so connections are neither loose nor over-tightened.

### Safety Precautions for Measuring Live Circuits
1. Plan the test before touching the circuit.
2. Inspect the meter, leads, insulation, and probe tips for damage.
3. Confirm the meter category and rating are suitable for the circuit.
4. Select the correct function and jack positions before contact.
5. Use one hand where practical and keep the other away from grounded surfaces.
6. Wear required PPE and respect energized boundaries.
7. Stand on a dry surface and avoid metal contact.
8. Test the meter on a known live source before and after proving a circuit dead.

### Reading a Multimeter Display
A DMM display may show units such as VAC, VDC, Ω, A, mA, or continuity symbols. A reading of **119.8 VAC** on a nominal 120 V circuit is normal. An over-range display such as **OL** during resistance testing usually means resistance is beyond range or the circuit is open. In continuity mode, a tone usually indicates a low-resistance path.

### Step-by-Step: Measuring AC Voltage
1. Inspect meter and leads.
2. Set the dial to **VAC**.
3. Place black lead in **COM** and red lead in **V/Ω** jack.
4. Verify the meter on a known live source.
5. Place probes across the points of interest, such as hot and neutral on a 120 V receptacle.
6. Read the display.
7. Remove probes carefully.
8. Re-check on a known live source if you were proving absence of voltage.

### Step-by-Step: Measuring DC Current
1. De-energize the circuit if possible before inserting the meter.
2. Move the red lead to the correct **A** or **mA** jack.
3. Set the dial to **ADC**.
4. Open the circuit and connect the meter **in series** with the load.
5. Re-energize if required and read the display.
6. De-energize, remove meter, and return the red lead to the voltage jack afterward.

### Step-by-Step: Testing Continuity
1. Ensure the circuit is fully de-energized and isolated.
2. Set the dial to continuity mode.
3. Confirm the tester works by touching the probe tips together; the meter should beep.
4. Touch probes across the conductor, switch, or device being tested.
5. A tone or very low resistance indicates continuity.

### Step-by-Step: Measuring Resistance
1. De-energize and isolate the component.
2. Discharge stored energy, especially capacitors.
3. Set the meter to **Ω** and keep the red lead in the voltage/resistance jack.
4. Place probes across the component.
5. Read the resistance value and compare it with expected values.

### Common Measurement Mistakes
- Measuring voltage with leads in the current jack
- Trying to measure resistance on an energized circuit
- Using a clamp meter around an entire cable containing both outgoing and return conductors, which cancels the magnetic field
- Selecting AC instead of DC, or vice versa
- Forgetting to zero or verify the test instrument
- Pushing probe tips into unsafe positions near energized parts

Accurate measurement supports troubleshooting. If a 120 V receptacle reads 0 V hot-to-neutral but 120 V hot-to-ground, the neutral may be open. If a motor branch shows normal voltage but high current, the load or motor condition may be the problem. If continuity is absent through a switch that should be closed, the switch may be faulty.

Tool skill is also about workmanship. A nicked conductor from a poor stripping technique can become a future failure point. An under-torqued terminal can overheat. A badly bent conduit run can make pulling conductors difficult and may violate installation requirements. Measurement and installation go together: the same discipline that produces neat work also produces reliable test results.`,
    examples: `1. **Checking a 120 V receptacle:** A DMM is used on VAC to verify hot-to-neutral voltage before troubleshooting a lamp complaint.
2. **Measuring motor current:** A clamp meter checks branch current without opening the circuit, helping compare actual load to nameplate information.
3. **Testing a disconnected switch:** With power isolated, a continuity test confirms whether the switch closes properly.`,
    diagrams: `### 1. DMM Lead Setup
\`\`\`text
Black lead -> COM
Red lead   -> V/Ω   for voltage, resistance, continuity
Red lead   -> A/mA  for current only
\`\`\`

### 2. Meter Connection Methods
\`\`\`text
Voltage measurement:  meter placed across two points (parallel)
Current measurement:  meter inserted into circuit path (series)
Clamp measurement:    clamp around one conductor only
\`\`\``,
    practice: `### 1. Which DMM jack usually receives the black lead?
**Solution:** The COM jack.

### 2. Should resistance be measured on an energized circuit?
**Solution:** No. The circuit must be de-energized and isolated.

### 3. What is the correct meter mode for checking a 120 V branch circuit receptacle?
**Solution:** VAC mode.

### 4. Why should a clamp meter be placed around only one conductor?
**Solution:** If it surrounds both outgoing and return conductors together, the magnetic fields cancel and the current reading becomes incorrect.

### 5. After measuring current with a DMM, why should the red lead be moved back to the voltage jack?
**Solution:** To prevent accidentally trying to measure voltage with the lead still in the current jack, which can blow the meter fuse or create a hazard.`,
    desc3d: `**Multimeter 3D Simulation** shows a realistic digital multimeter with a rotating dial, removable probe leads, and selectable circuit scenes. The learner chooses VAC, VDC, Ω, or A, then places the probes on terminals in the correct configuration. If the probes or dial are wrong, the interactive warns the learner and explains the mistake. Correct setup produces a live display reading that changes with the selected circuit. This lets apprentices practise lead placement, mode selection, and reading interpretation before working on real equipment.`,
  },
  {
    id: 7,
    title: `AC vs DC Fundamentals`,
    sceneFile: `course/3d/scene07.html`,
    objectives: [
      `Explain the difference between direct current (DC) and alternating current (AC).`,
      `Identify common DC and AC sources used in electrical systems.`,
      `Describe sinusoidal AC waveforms using frequency, period, peak value, and RMS value.`,
      `Apply the formulas \`Vpeak = Vrms × √2\` and \`T = 1 / f\` to practical calculations.`,
      `Define phase angle and recognize how phasors represent AC quantities.`,
      `Compare single-phase and three-phase AC systems at an introductory level.`,
      `Explain why AC is widely used for generation, transmission, and distribution.`
    ],
    lesson: `Electric current can be delivered in two basic forms: **direct current (DC)** and **alternating current (AC)**. Apprentices need to understand both because modern electrical work includes battery systems, controls, electronics, power supplies, residential wiring, and utility distribution. The source, behaviour, and measurement of voltage and current depend on whether the circuit is AC or DC.

**DC** means current flows in one direction only, and the polarity stays constant. A battery is the most familiar example. If a 12 V battery has a positive and negative terminal, the polarity does not swap back and forth. In a simple DC circuit with a lamp, electrons move through the circuit in one overall direction and the voltage remains steady, or nearly steady, over time. DC is commonly used in batteries, vehicles, solar systems, control circuits, emergency lighting, electronics, and communication equipment.

**AC** means the voltage and current reverse direction periodically. In North American power systems, the standard frequency is **60 Hz**, meaning the waveform completes 60 cycles every second. In a household 120/240 V split-phase system, the voltage rises from zero to a positive peak, returns to zero, falls to a negative peak, and returns to zero again. That complete pattern is one cycle.

The most common AC waveform is the **sine wave**. It is smooth, repeating, and well suited to generation and transformer operation. AC can be generated by rotating a magnetic field past conductors, or rotating conductors within a magnetic field. In practical generators, the mechanical rotation of a turbine or engine causes the magnetic relationship to change continuously, producing a sinusoidal voltage.

Several terms are used to describe AC:

- **Frequency (f):** number of cycles per second, measured in hertz (Hz)
- **Period (T):** time for one complete cycle
- **Peak voltage (Vpeak):** maximum instantaneous voltage above zero
- **Root mean square voltage (Vrms):** effective heating value of AC compared with DC
- **Phase angle:** angular position of one waveform compared with another

The period and frequency are related by:

\`T = 1 / f\`

Worked example:

If \`f = 60 Hz\`, then:

\`T = 1 / 60 = 0.01667 s = 16.67 ms\`

So a 60 Hz waveform completes one cycle every **16.67 ms**.

Residential and commercial voltage values are normally stated as **RMS values**, not peak values. RMS is important because it tells us the equivalent DC value for heating effect in a resistor. For a sine wave:

\`Vrms = Vpeak / √2\`

and rearranging:

\`Vpeak = Vrms × √2\`

Worked example:

For a nominal \`120 Vrms\` circuit:

\`Vpeak = 120 × 1.414 = 169.7 V\`

So a 120 V AC branch circuit actually reaches about **+169.7 V** and **-169.7 V** at its peaks.

This surprises many beginners. A meter may read 120 V because it displays RMS, but the instantaneous waveform is constantly changing. Understanding that difference matters when working with oscilloscopes, rectifiers, insulation, and electronics.

Another useful concept is **wavelength**. Wavelength is the physical distance one cycle occupies in space and depends on both frequency and propagation speed:

\`λ = v / f\`

where \`λ\` is wavelength, \`v\` is wave speed, and \`f\` is frequency. In power wiring, apprentices do not usually calculate wavelength for branch circuit installations, but the concept is important when discussing signals, radio, long transmission lines, and electromagnetic behaviour.

### Why AC Is Used for Power Distribution
AC became the standard for electrical power distribution because it can be transformed easily from one voltage to another using a transformer. High voltages allow the same power to be transmitted at lower current, reducing \`I²R\` losses in conductors. Utilities can generate power, step the voltage up for transmission, then step it down again for safe local distribution and end use. That flexibility is one of AC's biggest advantages.

DC also has important uses. Electronics, battery systems, control circuits, and many modern drives operate internally on DC. In fact, much equipment connected to AC power first rectifies the AC into DC. So apprentices should think of AC and DC as complementary, not competing, technologies.

### Single-Phase and Three-Phase AC
In residential work, the most common system is **single-phase 120/240 V split-phase**. This system is derived from a transformer with a centre-tapped secondary. Each hot conductor to neutral measures about 120 V, and hot-to-hot measures about 240 V.

In commercial and industrial work, **three-phase AC** is common. Three sinusoidal voltages are separated by **120 electrical degrees**. Three-phase systems provide smoother power delivery, better motor performance, and more efficient distribution of large loads.

### Phase Angle and Phasors
A **phase angle** describes how far one waveform is shifted relative to another. If two sine waves rise and fall together, they are in phase. If one reaches its peak later, it lags the other.

A **phasor** is a rotating-vector style drawing used to represent the magnitude and angle of an AC voltage or current. At the apprentice level, phasors are mainly a visual tool. They help explain why two AC quantities can have the same frequency but different timing.

For example, in a resistive circuit, voltage and current are essentially in phase. In an inductive circuit, current lags voltage. In a capacitive circuit, current leads voltage. This becomes very important later when studying motors, transformers, and power factor.

### AC vs DC Comparison
| Feature | DC | AC |
|---|---|---|
| Direction of current | One direction | Reverses periodically |
| Polarity | Constant | Alternates positive/negative |
| Common sources | Batteries, solar, rectifiers | Generators, utility supply |
| Typical waveform | Steady or pulsating | Usually sinusoidal |
| Frequency | 0 Hz for steady DC | 60 Hz in North America |
| Voltage transformation | Requires electronic converters | Easy with transformers |
| Common uses | Electronics, controls, batteries | Buildings, motors, distribution |

A solid understanding of AC and DC helps apprentices read meters correctly, choose test methods, and understand why building systems are designed the way they are. DC introduces the idea of fixed polarity and steady current flow. AC introduces changing values, frequency, phase, RMS measurement, and transformer-based distribution. Both forms of electricity appear in modern installations, and safe, accurate work depends on knowing how each one behaves.`,
    examples: `1. **Automotive battery circuit:** A 12 V vehicle battery supplies DC to starter controls, lights, and electronics. The polarity remains fixed from positive to negative.
2. **Residential receptacle circuit:** A Canadian 120 V branch circuit supplies AC at 60 Hz. A meter reads 120 Vrms, while the waveform peaks at about 169.7 V.
3. **Utility distribution system:** Power is generated as AC, stepped up to high voltage for transmission, then stepped down by transformers to 120/240 V split-phase service for homes.`,
    diagrams: `### 1. DC vs AC Waveform
\`\`\`text
DC:   +12 V ─────────────────────────────
       0 V

AC:   +Vpk      /\\      /\\      /\\
              /    \\  /    \\  /    \\
       0 V ---      --      --      ---
              \\    /  \\    /  \\    /
           -Vpk \\/      \\/      \\/
\`\`\`

### 2. AC Terms on a Sine Wave
\`\`\`text
Voltage
  ^
  |        +Vpeak
  |          |
  |         / \\
  |        /   \\
  |-------/-----\\-------> time
  |      /       \\
  |     /         \\
  |    /           \\
  |  -Vpeak

One full cycle = Period T
Frequency f = cycles per second
Vrms = Vpeak / √2
\`\`\`

### 3. Introductory Phasor Idea
\`\`\`text
           I
          /
         /
        /  angle φ
-------/----------------> V reference
\`\`\``,
    practice: `### 1. What is the main difference between DC and AC?
**Solution:** DC flows with constant polarity in one direction. AC reverses direction and polarity periodically.

### 2. A circuit is rated at \`120 Vrms\`. What is its peak voltage?
**Solution:** \`Vpeak = Vrms × √2 = 120 × 1.414 = 169.7 V\`.

### 3. What is the period of a \`60 Hz\` waveform?
**Solution:** \`T = 1 / f = 1 / 60 = 0.01667 s = 16.67 ms\`.

### 4. Why is AC widely used for power distribution?
**Solution:** AC can be stepped up or down efficiently with transformers, allowing high-voltage transmission and lower conductor losses.

### 5. What is the frequency of standard utility power in North America?
**Solution:** \`60 Hz\`.`,
    desc3d: `**AC Waveform Visualizer** displays a live sine wave in a 3D graph space with a frequency slider from **1 Hz to 120 Hz** and an amplitude slider from **0 V to 340 V peak**. As the learner changes settings, labels update instantly to show **Vpeak**, **Vrms**, **frequency**, and **period** on the waveform. A marker traces the sine wave through one full cycle, helping the learner see how a higher frequency shortens the period and how changing peak voltage changes RMS voltage. The interactive can pause at any point on the wave so the learner can compare instantaneous value, peak value, and RMS value in real time.`,
  },
  {
    id: 8,
    title: `Transformers & Induction`,
    sceneFile: `course/3d/scene08.html`,
    objectives: [
      `Describe electromagnetic induction using Faraday's Law.`,
      `Explain how mutual inductance allows transformers to transfer energy between windings.`,
      `Calculate transformer voltage and current relationships using turns ratio formulas.`,
      `Distinguish between step-up, step-down, isolation, and autotransformers.`,
      `Identify common transformer core types and explain basic losses.`,
      `Interpret transformer ratings such as voltage, current, and kVA.`,
      `Relate transformer operation to utility and building distribution systems.`
    ],
    lesson: `Transformers are one of the most important devices in electrical systems. They make modern power distribution practical by allowing voltage to be increased for transmission and decreased for utilization. To understand transformers, apprentices must first understand **electromagnetic induction**.

When a conductor is exposed to a changing magnetic field, a voltage is induced in that conductor. This principle is expressed by **Faraday's Law**: the induced voltage depends on how quickly the magnetic flux changes and on the number of turns linked by that flux. The key apprentice-level idea is simple: **a changing magnetic field can produce voltage**.

In a transformer, an AC voltage applied to the **primary winding** causes AC current to flow. That current creates a changing magnetic flux in the iron or steel core. Because the flux is changing continuously, it links the **secondary winding** and induces a voltage there. Energy is transferred magnetically through the core rather than by direct electrical connection between the windings.

This process is called **mutual inductance**. The primary winding creates the changing magnetic field, and the secondary winding receives energy from that field. Transformers require changing flux, which is why ordinary transformers operate on **AC**, not steady DC. If steady DC is applied to a transformer, the flux stops changing after the initial moment and no useful secondary voltage is induced. Instead, the primary may draw excessive current and overheat.

### Basic Transformer Relationships
An ideal transformer follows these ratio relationships:

\`Vp / Vs = Np / Ns = Is / Ip\`

Where:
- \`Vp\` = primary voltage
- \`Vs\` = secondary voltage
- \`Np\` = number of primary turns
- \`Ns\` = number of secondary turns
- \`Ip\` = primary current
- \`Is\` = secondary current

If the secondary has fewer turns than the primary, the transformer is **step-down**. If the secondary has more turns, it is **step-up**.

Worked example:

Given \`Vp = 2400 V\`, \`Np = 200\`, and \`Ns = 20\`:

\`Vp / Vs = Np / Ns\`

\`2400 / Vs = 200 / 20 = 10\`

\`Vs = 2400 / 10 = 240 V\`

So the secondary voltage is **240 V**.

This is a classic step-down transformer.

Current changes in the opposite direction of voltage ratio. If voltage is stepped down, available current increases. In an ideal transformer, power in equals power out:

\`Pp = Ps\`

In a real transformer, there are losses, so output power is slightly less:

\`Ps = Pp × efficiency\`

Worked example:

If \`Pp = 1000 W\` and efficiency is \`95%\`:

\`Ps = 1000 × 0.95 = 950 W\`

So the output power is **950 W**, with **50 W** lost as heat and magnetic losses.

### Transformer Efficiency and Ratings
Transformers are generally efficient devices. Many operate above 95% efficiency, especially at moderate to large sizes. Their capacity is usually rated in **volt-amperes (VA)** or **kilovolt-amperes (kVA)** because transformer heating depends on voltage and current, regardless of load power factor.

For example, a 25 kVA transformer can supply 25 000 VA of load within its design limits. Apprentices should understand that the transformer nameplate gives the safe operating limits for voltage, frequency, impedance, temperature rise, and capacity.

### Core Types
Two common transformer core arrangements are **core type** and **shell type**.

- In a **core-type transformer**, the windings are placed around sections of the core.
- In a **shell-type transformer**, the core surrounds more of the windings.

Both styles guide magnetic flux efficiently, but their construction, cooling, and mechanical arrangement differ.

### Transformer Losses
Real transformers are not perfect. Important losses include:

1. **Copper losses:** Caused by resistance in the windings. Higher current means more \`I²R\` heating.
2. **Iron losses:** Also called core losses. These occur in the magnetic core.
3. **Eddy current losses:** Circulating currents induced in the core material. Laminated cores reduce these losses.
4. **Hysteresis losses:** Energy used as the magnetic domains in the core reverse with each AC cycle.

These losses explain why a transformer gets warm even when it is operating properly.

### Distribution Transformers
A familiar real-world example is the utility **distribution transformer**. In many systems, medium-voltage distribution such as **25 kV** is stepped down to **120/240 V split-phase** for residential service. The secondary winding is centre-tapped. Each hot conductor to the centre tap measures about **120 V**, while hot-to-hot measures **240 V**. This allows the same transformer to supply lighting and receptacle loads at 120 V and larger appliances such as ranges, dryers, and water heaters at 240 V.

### Isolation Transformers and Autotransformers
An **isolation transformer** has separate primary and secondary windings with no direct conductive connection. It is used to isolate circuits for safety, noise reduction, and equipment protection.

An **autotransformer** uses a single winding with taps. It is lighter and often more economical than a two-winding transformer, but it does not provide the same isolation because primary and secondary share part of the same winding.

### Practical Apprentice View
When working around transformers, apprentices should pay attention to the nameplate, voltage ratings, polarity or terminal markings, grounding and bonding method, overcurrent protection, ventilation, and enclosure requirements. Even a small control transformer can fail if overloaded, poorly fused, or installed in a hot location. Larger dry-type and liquid-filled transformers must also be installed with proper clearances and in accordance with code and manufacturer instructions.

Transformers are everywhere: doorbell circuits, lighting controls, HVAC systems, panelboard distribution, industrial machines, and utility systems all rely on induction. Understanding induction explains not only transformers, but also the operating principles of motors, relays, and many measuring devices. Once apprentices understand that changing magnetic flux can create voltage, many later topics become easier to learn.`,
    examples: `1. **Pole-mounted utility transformer:** A distribution transformer reduces about 25 kV utility voltage to 120/240 V split-phase service for a house.
2. **Control transformer in a furnace panel:** A transformer steps 120 V AC down to 24 V AC for the thermostat and control circuit.
3. **Isolation transformer for sensitive equipment:** An isolation transformer separates the supply from the load to reduce noise transfer and improve safety during servicing.`,
    diagrams: `### 1. Basic Transformer Layout
\`\`\`text
 Primary winding           Core            Secondary winding
   ~~~ Np ~~~        [ magnetic path ]       ~~~ Ns ~~~
      |                                         |
     Vp                                        Vs

AC on primary -> changing flux in core -> induced voltage on secondary
\`\`\`

### 2. Step-Down Distribution Transformer
\`\`\`text
25 kV primary  ---> [ Transformer ] ---> 240/120 V secondary
                                      X1 -----120 V----- X0 -----120 V----- X2
                                                hot       neutral       hot
\`\`\`

### 3. Core vs Shell Type
\`\`\`text
Core type:               Shell type:
[coil]   [coil]          [ core around coil ]
  ||       ||                  [ winding ]
\`\`\``,
    practice: `### 1. What principle allows a transformer to induce voltage in the secondary winding?
**Solution:** Electromagnetic induction through changing magnetic flux, described by Faraday's Law.

### 2. A transformer has \`Vp = 2400 V\`, \`Np = 200\`, and \`Ns = 20\`. What is \`Vs\`?
**Solution:** \`Vs = 240 V\` using \`Vp / Vs = Np / Ns\`.

### 3. If transformer input power is \`1000 W\` and efficiency is \`95%\`, what is output power?
**Solution:** \`Ps = 1000 × 0.95 = 950 W\`.

### 4. What happens to current when a transformer steps voltage down?
**Solution:** Available current increases in inverse proportion, assuming the transformer is operating within its rating.

### 5. Name two common transformer losses.
**Solution:** Any two of: copper loss, eddy current loss, hysteresis loss, or other core/iron loss.`,
    desc3d: `**Transformer Core Animation** presents a 3D transformer with visible primary and secondary windings wrapped around a laminated core. Animated magnetic flux lines pulse through the core as AC is applied to the primary. Sliders let the learner change the **primary turns** and **secondary turns** ratio, and the display updates the calculated output voltage instantly. A readout shows \`Vp\`, \`Vs\`, turns ratio, and current relationship, while an optional loss overlay highlights copper heating and core losses. The learner can switch between step-up, step-down, isolation, and autotransformer views to see how construction and performance change.`,
  },
  {
    id: 9,
    title: `Residential Wiring Basics`,
    sceneFile: `course/3d/scene09.html`,
    objectives: [
      `Explain how a 120/240 V split-phase residential service operates.`,
      `Identify the main parts of a residential service entrance, meter base, and panelboard.`,
      `Match common branch-circuit ratings with practical conductor sizes and uses.`,
      `Describe typical residential wiring methods including NMD90 cable and conduit systems.`,
      `Apply introductory box fill and device box planning concepts.`,
      `Identify common Canadian wire colours and basic switch and receptacle wiring methods.`,
      `Recognize where GFCI and AFCI protection is commonly required by the CEC.`
    ],
    lesson: `Residential wiring starts at the service and branches out to lighting, receptacles, appliances, and dedicated loads. Apprentices must understand not only where conductors go, but why they are sized, protected, and installed in a certain way. In Canada, residential systems commonly use a **120/240 V split-phase** service supplied from a utility transformer with a centre-tapped secondary.

The transformer secondary has three conductors connected to the home: **hot A**, **hot B**, and the **neutral**. Each hot conductor to neutral measures about **120 V**. Hot A to hot B measures about **240 V** because the two hot legs are opposite in phase. This arrangement allows 120 V loads such as lighting and receptacles, and 240 V loads such as ranges, water heaters, baseboard heat, dryers, and air-conditioning equipment.

The service equipment begins where utility conductors enter the building. Typical components include the **service mast or service conductors**, **meter base**, and **main panel**. The meter records electrical energy use. The main panel contains the **main disconnect**, bus bars, breaker spaces, neutral termination bar, and bonding/grounding connections as required by the system design and code rules. From this panel, **branch circuits** distribute power to loads around the home.

### Branch Circuits and Common Ratings
Branch circuits are protected by overcurrent devices and must be matched to conductor size and load type. Common residential examples include:

- **15 A branch circuits with 14 AWG copper** for many lighting and general-use circuits
- **20 A branch circuits with 12 AWG copper** for kitchen counter receptacles and other higher-demand circuits
- **30 A branch circuits with 10 AWG copper** for dryers or water heaters, depending on load and code requirements

These are common apprentice reference values, but final selection must match the current **Canadian Electrical Code (CEC)**, equipment nameplate, termination ratings, and installation conditions.

### Wiring Methods
In dry residential construction, **NMD90 cable** is a standard wiring method. It contains insulated conductors and a bare bonding conductor in a non-metallic jacket. NMD90 is commonly used for concealed branch-circuit wiring in walls, floors, and ceilings. In exposed areas such as unfinished basements, garages, service spaces, or where mechanical protection is needed, conductors may be run in **conduit** or other approved raceways.

Typical Canadian conductor colours in homes are:

- **Black or red** = ungrounded (hot) conductors
- **White** = grounded conductor (neutral)
- **Green or bare** = bonding conductor

Always identify conductors correctly and re-identify any permitted white conductor used as an ungrounded conductor where code allows.

### Service to Branch Circuit Layout
The panel distributes power through single-pole and two-pole breakers. A single-pole breaker connects to one bus stab and supplies a 120 V circuit. A two-pole breaker connects across both hot legs and supplies 240 V loads, or 120/240 V loads if a neutral is also required.

Apprentices should learn the physical flow:

1. Utility service feeds the meter.
2. Meter feeds the main panel.
3. Main breaker or main disconnect feeds panel bus bars.
4. Individual branch breakers feed circuit conductors.
5. Conductors run to outlet boxes, switches, luminaires, and equipment.

### Box Fill Basics
A device box must be large enough for the number of conductors, devices, clamps, and fittings inside it. Overfilled boxes create mechanical stress, overheating risk, and poor workmanship. Box fill calculations depend on conductor size and the number of conductor equivalents in the box. Apprentices do not need every table memorized immediately, but they must understand the principle: **more conductors and devices require more box volume**. A crowded switch box is not acceptable just because the cover fits.

### Receptacle Wiring
A typical 120 V receptacle is wired with a hot conductor to the **brass-coloured terminal**, neutral to the **silver-coloured terminal**, and the bonding conductor to the **green grounding screw**. Connections should be tight, correctly stripped, and made according to manufacturer instructions. On multi-wire branch circuits or split receptacle arrangements, additional rules apply for handle ties, common disconnecting means, and neutral continuity.

### Switch Wiring
A **single-pole switch** controls a load from one location by opening or closing the ungrounded conductor. The white conductor in a switch loop may need re-identification if it is used as a hot conductor.

A **3-way switch** arrangement controls one load from two locations, such as the top and bottom of a stairway. It uses two 3-way switches, a common terminal on each switch, and traveller conductors between them. Apprentices should understand the traveller concept rather than simply memorizing colours, because the actual cable arrangement can vary.

### GFCI Protection
A **ground fault circuit interrupter (GFCI)** protects people by opening the circuit when it detects a small difference between outgoing and returning current. In residential work, GFCI protection is commonly required for receptacles in areas with increased shock risk, including:

- **Bathrooms**
- **Kitchen countertop receptacles**
- **Outdoor receptacles**
- **Garage receptacles**
- **Locations near sinks, tubs, or damp areas**, depending on the applicable rule

Always verify exact CEC wording for the edition in force.

### AFCI Protection
An **arc-fault circuit interrupter (AFCI)** is intended to detect dangerous arcing conditions that standard breakers may not recognize. In modern residential wiring, AFCI protection is commonly required on many dwelling-unit branch circuits supplying outlets in habitable areas such as bedrooms, living rooms, and similar spaces. Some circuits may be exempt depending on the installation method, equipment type, or code edition. The important apprentice habit is to check the current CEC rule before rough-in and panel terminations.

### Good Residential Wiring Practice
Residential work must be neat, supported, protected from damage, and clearly identified. Staples must not crush cable. Boxes must be accessible. Breakers must be labelled clearly. Splices must be made in approved boxes with approved connectors. Connections must be torqued correctly. A tidy panel and a well-planned rough-in are not just good craftsmanship; they reduce troubleshooting time and improve safety for everyone who works on the system later.`,
    examples: `1. **Kitchen small-appliance circuit:** A 20 A breaker with 12 AWG copper conductors supplies countertop receptacles where toasters, kettles, and microwaves may be used.
2. **Bathroom receptacle:** A receptacle near a sink is protected by GFCI because the location has increased shock risk.
3. **Stairwell lighting:** A 3-way switch setup allows one light to be controlled from the top and bottom of the stairs.`,
    diagrams: `### 1. Service Entrance to Branch Circuits
\`\`\`text
Utility transformer
      |
      v
 [ Meter Base ]
      |
      v
 [ Main Panel ]
   |    |    |
   |    |    +--> 15 A lighting circuit -> 14 AWG -> switches/lights
   |    +-------> 20 A kitchen circuit -> 12 AWG -> receptacles
   +------------> 2-pole 240 V circuit -> appliance load
\`\`\`

### 2. Split-Phase Panel Concept
\`\`\`text
Hot A  --------------------\\
                            ) 120 V to neutral
Neutral -------------------/

Hot B  --------------------\\
                            ) 120 V to neutral
Neutral -------------------/

Hot A to Hot B = 240 V
\`\`\`

### 3. Receptacle Terminal Identification
\`\`\`text
Brass screw  -> hot (black/red)
Silver screw -> neutral (white)
Green screw  -> bond (green/bare)
\`\`\``,
    practice: `### 1. What voltage is measured from either hot leg to neutral in a residential split-phase system?
**Solution:** About \`120 V\`.

### 2. What voltage is measured hot-to-hot in a standard residential split-phase service?
**Solution:** About \`240 V\`.

### 3. What conductor size is commonly used with a \`15 A\` residential lighting branch circuit?
**Solution:** \`14 AWG\` copper.

### 4. Name four common locations where GFCI protection is required.
**Solution:** Bathrooms, kitchen countertop receptacles, outdoor receptacles, and garage receptacles.

### 5. On a standard receptacle, which terminal receives the neutral conductor?
**Solution:** The **silver-coloured** terminal.`,
    desc3d: `**3D House Wiring Map** shows a cutaway house with the service entrance, meter base, main panel, and branch circuits to each room. The learner can click any circuit to highlight its path and display the **breaker rating**, **wire size**, **wire colours**, and **connected loads**. Kitchen, bathroom, garage, bedroom, and appliance circuits are colour-coded so the user can compare where GFCI, AFCI, 15 A, 20 A, and 240 V circuits are used. Clicking a switch box or receptacle box opens a close-up view of the wiring method, terminal connections, and box fill details for that location.`,
  },
  {
    id: 10,
    title: `Breakers, Panels & Protection`,
    sceneFile: `course/3d/scene10.html`,
    objectives: [
      `Explain how a thermal-magnetic circuit breaker detects overloads and short circuits.`,
      `Compare common protective devices including breakers, fuses, GFCI, AFCI, tandem breakers, and SPDs.`,
      `Identify the major parts of a residential panelboard and their functions.`,
      `Apply a basic breaker sizing method using continuous load adjustment.`,
      `Describe service sizing concepts for common 100 A and 200 A residential services.`,
      `Recognize panel labeling, grounding, and safety requirements used in Canadian practice.`,
      `Explain the purpose of surge, ground-fault, and arc-fault protection.`
    ],
    lesson: `Electrical systems need protection from overload, short circuit, arcing, ground fault, and surges. A properly installed panelboard is the centre of that protective system in a home. Apprentices must understand how breakers work, how panels are arranged, and why correct labeling and sizing matter.

A **circuit breaker** is an automatically operated switch that opens the circuit when current exceeds a safe value. The most common residential breaker is a **thermal-magnetic breaker**. It combines two protective actions in one device.

The **thermal element** responds to overloads. It usually uses a bimetal strip that bends as it heats. If current is slightly above the breaker rating for a period of time, the strip bends enough to trip the mechanism. This protects conductors from overheating due to sustained overload.

The **magnetic element** responds quickly to high fault current, such as a short circuit. A strong magnetic field develops almost instantly and trips the breaker with minimal delay. This fast action helps limit damage from severe faults.

### Breakers vs Fuses
A **fuse** also provides overcurrent protection, but it does so by melting a calibrated link that must then be replaced. A breaker can be reset after the fault is cleared. Fuses can react very quickly and still have important applications, but breakers are more common in residential panelboards because they are convenient and reusable.

### Common Breaker Types
- **Standard breaker:** Protects against overload and short circuit.
- **GFCI breaker:** Adds ground-fault protection by comparing outgoing and returning current.
- **AFCI breaker:** Detects arcing signatures associated with damaged conductors or loose connections.
- **Tandem breaker:** Two overcurrent devices in one breaker space, used only where the panel is listed for them.
- **Two-pole breaker:** Connects to both hot legs to supply 240 V loads or 120/240 V loads.

Breakers must match the panel manufacturer and panel listing. Using the wrong breaker type in a panel can create a serious hazard.

### Residential Panel Layout
A typical residential panel contains:

- **Main breaker** or main disconnect
- **Bus bars** fed from the service conductors
- **Branch breakers** connected to the bus
- **Neutral bar** for grounded conductors
- **Ground or bonding bar** for bonding conductors, depending on panel role and system arrangement
- **Cabinet and dead-front cover**

In service equipment, the neutral and bonding arrangement must follow the approved system bonding method. In downstream subpanels, neutral and bonding conductors are generally kept isolated from each other.

### Basic Load and Breaker Sizing
A breaker protects the conductors, not just the load. The conductor ampacity, equipment requirements, and load characteristics all matter. For an introductory continuous-load sizing method, this module uses:

\`breaker rating = load ÷ 0.8\`

This means if a load is expected to run continuously, the breaker should be sized so the continuous load does not exceed 80% of the breaker rating.

Example:

If the continuous load is \`16 A\`:

\`breaker rating = 16 ÷ 0.8 = 20 A\`

So a **20 A breaker** is the typical minimum size, assuming the conductors and equipment are also rated correctly.

### Service Sizing
Many homes are supplied by **100 A** or **200 A** services. Service size depends on calculated demand load, dwelling size, heating type, major appliances, EV charging equipment, and other connected loads. A 100 A service may be adequate for a smaller dwelling with moderate electrical loads, while 200 A service is common for larger homes or homes with electric heat, central air conditioning, hot tubs, or future expansion.

Apprentices should not guess service size from appearance alone. Proper load calculation must be performed in accordance with the CEC.

### Panel Labeling
Panel directories must be clear and accurate. A label such as "plugs" is poor practice. A better entry would be "Kitchen counter receptacles" or "Bedroom 2 lights and receptacles." Clear labeling speeds maintenance, lockout, troubleshooting, and emergency response. Canadian code practice expects circuits and disconnecting means to be legibly and durably identified.

### Ground Fault, Arc Fault, and Surge Protection
**Ground fault protection** reduces shock hazards by detecting imbalance between outgoing and returning current. In residential occupancies, this is commonly provided by GFCI receptacles or GFCI breakers in required locations.

**Arc-fault protection** reduces fire risk from series or parallel arcing caused by damaged insulation, loose terminations, or deteriorated cords and wiring. AFCI devices monitor the waveform and trip when a dangerous arc signature is detected.

**Surge protective devices (SPDs)** protect electrical and electronic equipment from transient overvoltages caused by lightning, utility switching, or internal load switching. SPDs are often installed at the service equipment or distribution panel and work by diverting excess voltage energy away from sensitive loads.

### Arc Flash and Safe Work
Although residential systems are smaller than industrial switchgear, they can still produce dangerous fault energy. Apprentices should understand that opening a panel, removing covers, or working near live parts must be done with proper authorization, PPE, and safe work procedures. De-energize whenever possible. Verify absence of voltage. Never assume a breaker off means everything in the panel is dead, because service lugs ahead of the main breaker may still be energized.

### Overcurrent Protection Rules in Practice
Every conductor and device must have appropriate overcurrent protection. The breaker rating must not exceed what the conductor insulation, termination temperature rating, and code tables allow. A 14 AWG copper residential branch circuit is commonly protected at 15 A, and 12 AWG copper at 20 A. Oversizing the breaker to stop nuisance trips is not a fix; it is a hazard.

A well-installed panel shows good workmanship: straight conductors, proper bending radius, identified neutrals and bonds, no doubled terminals unless listed, correct breaker types, and a clear circuit directory. Apprentices should develop the habit of reading the panel nameplate, respecting manufacturer instructions, and understanding that protective devices are part of a complete safety system, not just hardware in a box.`,
    examples: `1. **Kitchen overload:** Too many countertop appliances on one circuit cause current to rise above the breaker rating, and the thermal element trips after a short delay.
2. **Short circuit in a damaged cord:** The magnetic element trips the breaker almost instantly when fault current rises sharply.
3. **Whole-home surge protection:** An SPD at the panel helps protect appliances and electronics from transient voltage spikes during storms.`,
    diagrams: `### 1. Residential Panel Layout
\`\`\`text
+----------------------------------+
| Main Breaker                     |
+----------------------------------+
| Bus A      | Bus B               |
| [1] Lights | [2] Range 2-pole    |
| [3] Plugs  | [4] Dryer 2-pole    |
| [5] Bath   | [6] Kitchen         |
| [7] Garage | [8] A/C 2-pole      |
|                                  |
| Neutral Bar      Ground/Bond Bar |
+----------------------------------+
\`\`\`

### 2. Breaker Sizing Formula
\`\`\`text
Continuous load = 16 A
Breaker rating = load ÷ 0.8
Breaker rating = 16 ÷ 0.8 = 20 A
\`\`\`

### 3. Thermal-Magnetic Action
\`\`\`text
Moderate overload -> bimetal heats -> delayed trip
Short circuit     -> magnetic coil -> instant trip
\`\`\``,
    practice: `### 1. What two protective actions are combined in a thermal-magnetic breaker?
**Solution:** A thermal overload trip element and a magnetic short-circuit trip element.

### 2. A continuous load is \`24 A\`. Using \`load ÷ 0.8\`, what breaker rating is required?
**Solution:** \`24 ÷ 0.8 = 30 A\`, so a 30 A breaker is the typical minimum, assuming conductor ampacity and equipment ratings match.

### 3. What is the main advantage of a breaker over a fuse in residential service?
**Solution:** A breaker can be reset after the fault is corrected, while a fuse must be replaced.

### 4. What device helps protect equipment from transient overvoltage spikes?
**Solution:** A **surge protective device (SPD)**.

### 5. Why must panel labeling be accurate?
**Solution:** Accurate labeling improves safety, maintenance, lockout, troubleshooting, and emergency identification of circuits.`,
    desc3d: `**Breaker Panel Interactive** presents a realistic 3D residential panel with a main breaker, branch breakers, neutral bar, ground bar, and labeled circuits. The user can click individual breakers to **trip** and **reset** them, open circuit labels, and inspect connected loads. In overload simulation mode, the learner adds appliances to a circuit and watches current rise until the breaker trips automatically. A fault mode demonstrates the difference between overload, short circuit, GFCI trip, and AFCI trip, showing which protective device responds and why. Hover labels identify bus bars, panel spaces, two-pole breakers, tandem breakers, and SPD locations.`,
  },
  {
    id: 11,
    title: `Motors, Loads & Applications`,
    sceneFile: `course/3d/scene11.html`,
    objectives: [
      `Explain how an AC induction motor produces torque using a rotating magnetic field and slip.`,
      `Read the key information shown on a motor nameplate.`,
      `Compare single-phase and three-phase motor characteristics and applications.`,
      `Identify common motor starting methods including DOL, star-delta, soft starter, and VFD.`,
      `Describe overload, thermal, and electrical protection used for motors.`,
      `Distinguish resistive, inductive, and capacitive loads and relate them to power factor.`,
      `Calculate basic motor efficiency and recognize common electrical applications for motors.`
    ],
    lesson: `Motors convert electrical energy into mechanical energy, and they are among the most common loads in electrical systems. Apprentices encounter motors in furnaces, air handlers, pumps, compressors, conveyors, exhaust fans, shop equipment, and many other applications. A strong foundation in motor basics helps with installation, troubleshooting, overload sizing, and equipment selection.

The most common industrial motor is the **AC induction motor**. It works because AC in the stator windings creates a **rotating magnetic field**. That rotating field cuts across the rotor conductors and induces current in the rotor. The rotor current produces its own magnetic field, and the interaction between stator and rotor fields creates torque.

A key term is **slip**. The rotor of an induction motor does not turn at exactly the same speed as the rotating magnetic field. It must lag slightly behind so that induction continues. If rotor speed ever matched the synchronous field speed exactly, there would be no relative motion, no induced rotor current, and no torque. That difference between synchronous speed and actual rotor speed is called slip.

### Motor Nameplate Information
Every motor has a **nameplate** that provides critical installation and operating information. Common nameplate data includes:

- **Horsepower (HP)** or **kilowatts (kW)**
- **Voltage**
- **Full-load current (FLA)**
- **Frequency**
- **Phase**
- **RPM**
- **Service factor**
- **Insulation class**
- **Duty rating**

Example nameplate:

\`\`\`text
3 HP
230 V
12 A
60 Hz
1-phase
1725 RPM
Service Factor 1.15
Efficiency 86%
\`\`\`

From this, an apprentice can see that the motor is a 3 HP single-phase motor intended for 230 V, 60 Hz operation, draws 12 A at full load, and runs near 1725 RPM, which indicates a four-pole style speed at 60 Hz.

### Single-Phase vs Three-Phase Motors
**Single-phase motors** are common in homes and light commercial settings where only 120/240 V split-phase power is available. They are found in fans, compressors, pumps, and appliances. Single-phase motors need special starting arrangements, such as start windings or capacitors, because a single-phase supply does not naturally create a strong rotating magnetic field at standstill.

**Three-phase motors** are preferred in commercial and industrial work because they are simpler, self-starting, efficient, and provide smoother torque. A three-phase supply naturally creates a rotating magnetic field, making the motor reliable and well suited to larger loads.

### Starting Current and Starting Methods
Motors draw a large **inrush current** when starting. A common apprentice rule of thumb is that starting current may be about **6 × FLA**, though actual values vary by motor type and starting method.

For example, if a motor FLA is \`10 A\`, starting current may be about:

\`6 × 10 = 60 A\`

This high current affects conductor sizing, overcurrent protection, voltage drop, and equipment selection.

Common starting methods include:

- **DOL (Direct-On-Line):** Full voltage applied immediately. Simple and common for smaller motors.
- **Star-delta:** Starts the motor with reduced voltage in star connection, then switches to delta for running. Used on suitable three-phase motors.
- **Soft starter:** Electronically reduces starting voltage and current, providing smoother acceleration.
- **VFD (Variable Frequency Drive):** Controls frequency and voltage to vary speed and start smoothly. Common in modern HVAC, pumps, and process systems.

### Motor Protection
Motor circuits need more than just a breaker. Common protective devices include:

- **Overload relay:** Protects the motor from sustained overcurrent and overheating.
- **Thermal protection:** May be built into the motor windings or control circuit.
- **Short-circuit and ground-fault protection:** Provided by fuses or breakers.
- **Phase-loss and phase-imbalance protection:** Important for three-phase systems.

A breaker may protect the conductors from a fault, but the **overload relay** protects the motor windings from overheating during abnormal load conditions.

### Motor Efficiency
Motor efficiency compares mechanical output power with electrical input power:

\`Efficiency = Pout / Pin × 100%\`

Example:

If a motor receives \`4.0 kW\` electrical input and produces \`3.4 kW\` mechanical output:

\`Efficiency = 3.4 / 4.0 × 100% = 85%\`

This means 15% of the input power is lost as heat, friction, windage, and electrical losses.

### Types of Loads
Apprentices also need to understand the type of electrical load connected to a system:

- **Resistive load:** Current and voltage are nearly in phase. Examples: baseboard heaters, toasters, incandescent lamps.
- **Inductive load:** Current lags voltage. Examples: motors, transformers, solenoids.
- **Capacitive load:** Current leads voltage. Examples: capacitor banks, some electronic equipment.

Because motors are inductive, they affect **power factor**. Power factor is the relationship between real power and apparent power. A low power factor means more current is required for the same real power output. Utilities and large facilities may use **power factor correction** with capacitors to offset inductive reactive power.

### Reactive Power
Reactive power is measured in **volt-ampere reactive (VAR)**. It does not perform useful mechanical work directly, but it is required to establish magnetic and electric fields in inductive and capacitive equipment. Motors need reactive power to maintain their magnetic field.

### Common Applications
- **HVAC:** Blowers, condenser fans, circulation pumps, compressors
- **Pumps:** Domestic water systems, sump pumps, irrigation, hydronic heating
- **Compressors:** Refrigeration, shop air, process air systems
- **Conveyors and shop equipment:** Production and maintenance systems

A good apprentice reads the nameplate before energizing a motor, verifies the supply voltage and phase, checks rotation where applicable, confirms overload settings, and understands the starting method. Motor work is not just wiring; it is matching electrical characteristics to mechanical demand and protecting equipment from abnormal conditions.`,
    examples: `1. **Furnace blower motor:** A single-phase motor in a residential air handler starts and runs the blower that moves warm air through ducts.
2. **Three-phase pump motor:** A commercial hydronic system uses a three-phase induction motor for smooth, efficient pump operation.
3. **VFD-controlled fan:** A ventilation system uses a VFD to adjust fan speed based on building demand, reducing energy consumption.`,
    diagrams: `### 1. Induction Motor Concept
\`\`\`text
[ Stator windings ] -> rotating magnetic field -> induces current in rotor
[ Rotor bars      ] -> rotor field interacts with stator field -> torque
\`\`\`

### 2. Slip Idea
\`\`\`text
Synchronous field speed: 1800 RPM
Actual rotor speed:      1725 RPM
Slip: rotor lags field speed so induction continues
\`\`\`

### 3. Load Types
\`\`\`text
Resistive  : V and I in phase
Inductive  : I lags V
Capacitive : I leads V
\`\`\``,
    practice: `### 1. What is slip in an AC induction motor?
**Solution:** Slip is the difference between the synchronous speed of the rotating magnetic field and the actual rotor speed.

### 2. A motor has an FLA of \`8 A\`. Estimate its starting current using \`6 × FLA\`.
**Solution:** \`6 × 8 = 48 A\` starting current.

### 3. What starting method applies full voltage to the motor immediately?
**Solution:** **DOL (Direct-On-Line)** starting.

### 4. If motor input power is \`5.0 kW\` and output power is \`4.2 kW\`, what is efficiency?
**Solution:** \`4.2 / 5.0 × 100% = 84%\`.

### 5. Are motors primarily resistive, inductive, or capacitive loads?
**Solution:** Motors are primarily **inductive** loads.`,
    desc3d: `**Motor Cutaway Model** displays a 3D AC induction motor with the housing removed so the learner can see the **stator**, **rotor**, **shaft**, **bearings**, cooling fan, and terminal box. Animated magnetic field arrows rotate around the stator, while the rotor begins to follow with a visible slip difference between field speed and shaft speed. Clicking any motor part opens a label and description. A control panel lets the learner compare single-phase and three-phase operation, turn on a DOL or VFD starting animation, and watch current, torque, and RPM values change during startup and normal running.`,
  },
  {
    id: 12,
    title: `Troubleshooting & Diagnostics`,
    sceneFile: `course/3d/scene12.html`,
    objectives: [
      `Follow a systematic troubleshooting sequence from symptom to verified repair.`,
      `Identify common electrical faults including open circuits, short circuits, ground faults, overloads, and loose connections.`,
      `Use a multimeter safely for voltage, continuity, and resistance checks during diagnosis.`,
      `Apply test-before-touch and absence-of-voltage verification practices.`,
      `Describe thermal imaging and insulation resistance testing at an apprentice level.`,
      `Relate common residential symptoms to likely causes and corrective actions.`,
      `Understand the importance of documentation, safety, and CEC compliance during troubleshooting.`
    ],
    lesson: `Troubleshooting is one of the most valuable skills an electrician can develop. Good troubleshooting is not guessing. It is a structured process: observe the symptom, isolate the fault, test safely, repair the cause, and verify that the system now operates correctly. Apprentices who learn a disciplined approach solve problems faster and create fewer hazards.

A useful troubleshooting sequence is:

1. **Identify the symptom**
2. **Isolate the section of circuit involved**
3. **Test safely and logically**
4. **Repair the root cause**
5. **Verify operation and document the work**

### Common Fault Types
An **open circuit** is a broken path that stops current flow. A broken conductor, open switch, loose neutral, or failed connection can all create an open circuit. Symptoms include equipment not operating, loss of voltage at the load, or intermittent behaviour.

A **short circuit** occurs when current takes an unintended low-resistance path, often between ungrounded conductors or between hot and neutral. Shorts usually cause a breaker or fuse to operate quickly because current rises sharply.

A **ground fault** occurs when current flows from an energized conductor to ground or bonded metal parts. Ground faults are dangerous because they can energize enclosures and create shock hazards. GFCI devices are designed to detect dangerous imbalance and trip quickly.

An **overload** happens when a circuit or equipment draws more current than it is intended to carry over time. Overloads heat conductors, terminals, and devices, eventually causing breaker trips, insulation damage, or equipment failure.

A **loose connection** may not be fully open or fully shorted. It can create voltage drop, flickering lights, overheating, nuisance tripping, or intermittent equipment operation. Loose terminations are common real-world faults and should never be underestimated.

### Systematic Troubleshooting with a Multimeter
The multimeter is one of the most important troubleshooting tools. Use it carefully and in the correct mode.

- **Voltage testing:** Determines whether supply voltage is present at the source, device, or load.
- **Continuity testing:** Checks whether a conductor or switch path is intact, but only on a de-energized circuit.
- **Resistance testing:** Helps evaluate components such as elements, coils, and conductors when isolated and de-energized.

When troubleshooting a dead receptacle, a logical sequence might be:

1. Confirm the complaint.
2. Check whether the breaker is tripped.
3. Test voltage at the panel.
4. Test voltage at the receptacle hot-to-neutral and hot-to-ground.
5. Compare readings.
6. Inspect upstream devices, splices, and connections.

If hot-to-ground reads 120 V but hot-to-neutral reads 0 V, the likely fault is an **open neutral**. If both readings are 0 V, the hot conductor may be open or the breaker may not be supplying the circuit.

### Test-Before-Touch
One of the most important safety habits is **test-before-touch**. Before touching conductors or equipment, you must verify whether voltage is present. When proving absence of voltage, a common safe practice is to:

1. Test the meter on a known live source.
2. Test the circuit to be worked on.
3. Re-test the meter on a known live source.

This confirms both the circuit condition and that the meter is functioning correctly. Never assume a conductor is dead because a switch is off or because someone said it was isolated.

### Thermal Imaging
**Thermal imaging** helps locate overheating connections, overloaded breakers, unbalanced loads, and failing equipment. A loose lug or overloaded conductor often appears as a hot spot long before complete failure occurs. Thermal imaging is especially useful during preventive maintenance because it can find problems that are not yet obvious electrically.

### Insulation Resistance Testing
**Insulation resistance testing**, often called **megohm testing**, checks the condition of insulation by applying a higher DC test voltage and measuring leakage resistance. Low insulation resistance may indicate moisture, contamination, damaged insulation, or deteriorated cables. This test is not performed on energized circuits and must be used carefully around sensitive electronics because the test voltage may damage some connected components.

### Common Residential Problems
Residential troubleshooting often includes:

- **Breaker trips when a kettle and toaster run together:** likely overload on a 15 A or 20 A kitchen circuit
- **Lights flicker when a vacuum starts:** possible loose connection, voltage drop, or heavily loaded circuit
- **One half of a split receptacle dead:** possible tab issue, open conductor, or breaker problem
- **Bathroom receptacle dead but breaker not tripped:** possible GFCI trip upstream
- **Dryer runs but does not heat:** possible lost leg in a 120/240 V circuit or failed heating element

A skilled troubleshooter uses the symptom to narrow the likely causes before opening anything.

### Documentation and Verification
Troubleshooting does not end when the equipment starts working. The repair must be verified. Voltage, current, operation, and protective functions should be checked. Covers must be replaced, conductors secured, panel directories updated if needed, and findings documented. Documentation is important for service history, customer communication, and future maintenance.

### CEC and Inspection Considerations
Work performed during troubleshooting must still meet the **Canadian Electrical Code**. Replacing a damaged device with the wrong rating, leaving exposed splices, omitting bonding, or failing to maintain box fill and enclosure integrity is not acceptable. If inspected work is involved, the repair must satisfy local authority requirements and approved methods. Safety rules always apply, even during urgent service calls.

The best troubleshooters are calm, methodical, and evidence-based. They do not replace parts at random. They test, think, and verify. That habit saves time, reduces callbacks, and keeps both workers and occupants safe.`,
    examples: `1. **Open neutral at a receptacle:** A homeowner reports a dead plug. Voltage is present hot-to-ground but not hot-to-neutral, leading to a loose neutral splice upstream.
2. **Overheated breaker connection:** A thermal camera shows one breaker lug hotter than the others, revealing a loose terminal that needs correction.
3. **Ground fault in an outdoor receptacle:** Moisture in a weather-exposed device causes GFCI tripping until the damaged receptacle is replaced and sealed properly.`,
    diagrams: `### 1. Troubleshooting Decision Flowchart
\`\`\`text
Symptom reported
      |
      v
Verify complaint
      |
      v
Isolate circuit/equipment
      |
      v
Safe test procedure
      |
      +--> Voltage present? -- no --> trace source / open path
      |
      +--> Voltage abnormal? -- yes -> check loose connection / overload / fault
      |
      +--> Device failed? ---- yes -> repair or replace
      |
      v
Re-energize and verify operation
      |
      v
Document findings and close work
\`\`\`

### 2. Fault Symptom Table
| Symptom | Likely Cause | Test | Fix |
|---|---|---|---|
| Receptacle dead | Open hot or open neutral | Measure hot-neutral and hot-ground voltage | Repair open splice, device, or breaker issue |
| Breaker trips instantly | Short circuit | Isolate load and check continuity/fault path | Repair damaged conductor or device |
| GFCI trips repeatedly | Ground fault or moisture | Disconnect downstream loads and inspect device | Replace damaged device or dry/repair wiring |
| Lights flicker | Loose connection or voltage drop | Check terminal tightness and voltage under load | Retorque or repair connection |
| Motor overheats | Overload, low voltage, bearing issue | Measure current, voltage, and mechanical condition | Correct load, supply, or motor problem |

### 3. Test-Before-Touch Method
\`\`\`text
Known live source -> meter proves live
Target circuit    -> verify absence/presence of voltage
Known live source -> meter proves working again
\`\`\``,
    practice: `### 1. What is the first step in a systematic troubleshooting process?
**Solution:** Identify and verify the symptom or complaint before making repairs.

### 2. A receptacle measures \`120 V\` hot-to-ground and \`0 V\` hot-to-neutral. What is the likely problem?
**Solution:** An **open neutral**.

### 3. What type of test tool is commonly used to find hot spots at loose terminations?
**Solution:** A **thermal imaging camera**.

### 4. Should continuity testing be done on an energized circuit?
**Solution:** No. Continuity testing must only be done on a de-energized and isolated circuit.

### 5. Why should work be documented after troubleshooting?
**Solution:** Documentation records the fault, repair, and verification results for safety, maintenance history, customer communication, and future service work.`,
    desc3d: `**Troubleshooting Arena** places the learner inside a 3D electrical training scene containing a panel, branch circuit wiring, receptacles, switches, and loads. The system injects random faults such as **open circuits**, **short circuits**, **ground faults**, and **loose connections**. The learner uses a virtual multimeter to test points in the circuit, following proper **test-before-touch** steps before opening boxes or panels. Correct diagnosis unlocks a repair action, and the scoring system rewards accurate fault isolation, safe probe placement, and proper verification after repair. Unsafe actions, skipped safety steps, or incorrect repairs reduce the score and trigger coaching feedback.`,
  },
];