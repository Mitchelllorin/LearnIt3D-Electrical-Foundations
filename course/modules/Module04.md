# LearnIt3D — Electrical Foundations Apprentice Prep
### Learn IT3D — STEM · SIMULATED · 3D
---

## Module 4 — Electrical Power & Energy

### Learning Objectives
- Define electrical power and energy using proper SI units.
- Use `P = V × I`, `P = I²R`, and `P = V² / R` in basic calculations.
- Convert watts, kilowatts, watt-hours, and kilowatt-hours.
- Explain the difference between real power, reactive power, and apparent power.
- Describe power factor and why it matters for motors and AC systems.
- Estimate electricity usage and cost from common household loads.
- Connect efficiency concepts to real electrical equipment and losses.

## Full Lesson
Electrical systems are built to deliver **power** so loads can do useful work. Power tells us how quickly electrical energy is being converted into light, heat, motion, or another form. The SI unit of power is the **watt (W)**. When the numbers are larger, we often use **kilowatts (kW)**, where `1 kW = 1000 W`.

The most common power formula is:
`P = V × I`
This means power equals voltage multiplied by current. If a load uses 120 V and draws 10 A, its power is `120 × 10 = 1200 W`, or `1.2 kW`.

**Energy** is power used over time. If power tells us how fast work is being done, energy tells us how much total work is done during a period. The basic relationship is:
`E = P × t`
If a 1000 W heater runs for 2 h, it uses `1000 × 2 = 2000 Wh`, or `2 kWh`.

Utilities bill customers in **kilowatt-hours (kWh)**. One kilowatt-hour means using 1000 W for 1 hour. A 100 W lamp running for 10 h also uses 1 kWh. Apprentices should be comfortable converting between W, kW, Wh, and kWh because energy cost discussions are common with customers and supervisors.

For resistive circuits, power can also be found using Ohm's Law substitutions:
- `P = I²R`
- `P = V² / R`
These formulas are especially useful when voltage or current is not directly given. For example, if a heating element has resistance of 12 Ω on 120 V, power is `V² / R = 120² / 12 = 1200 W`.

In AC systems with motors, transformers, and coils, power is more complicated. Not all current contributes directly to useful work. We divide AC power into three ideas:
- **Real power (P)** in watts: actual working power doing useful work or heat.
- **Reactive power (Q)** in vars: power that moves back and forth due to magnetic or electric fields.
- **Apparent power (S)** in volt-amperes (VA): total `V × I` without considering phase angle.

**Power factor (PF)** is the ratio of real power to apparent power:
`PF = P / S`
A purely resistive heater has PF close to 1.0. Many motors have lower PF because some current is used to establish magnetic fields. Lower PF means the system carries more current for the same useful power, increasing conductor and equipment loading.

### Formula Table
| Quantity | Formula | Unit |
|---|---|---|
| Power | `P = V × I` | W |
| Energy | `E = P × t` | Wh or kWh |
| Resistive power | `P = I²R` | W |
| Resistive power | `P = V² / R` | W |
| Apparent power | `S = V × I` | VA |
| Power factor | `PF = P / S` | ratio |

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
- Daily cost: `6.0 × 0.15 = $0.90`
- 30-day month: `$0.90 × 30 = $27.00`

### Worked Example 1
A 120 V kettle draws 12 A.
- `P = V × I = 120 × 12 = 1440 W`
If it runs for 0.2 h:
- `E = 1.44 kW × 0.2 h = 0.288 kWh`

### Worked Example 2
A 240 V heater has resistance of 24 Ω.
- `P = V² / R = 240² / 24 = 2400 W`
- Current is `I = P / V = 2400 / 240 = 10 A`

### Worked Example 3
A motor uses 1200 W real power at 120 V and 12 A.
- Apparent power: `S = 120 × 12 = 1440 VA`
- `PF = 1200 / 1440 = 0.83`
This shows why current can be higher than a simple resistive-load estimate would suggest.

**Efficiency** compares useful output to input. No real device is 100% efficient. A motor converts electrical input into mechanical output, but some energy is lost as heat, sound, and friction. If a motor takes in 1000 W and produces 850 W of mechanical output, efficiency is `850 / 1000 = 85%`.

In practical work, power calculations help size branch circuits, estimate operating costs, and understand loading. A 1500 W portable heater on 120 V draws about 12.5 A, which is already close to the full rating of a 15 A circuit. Add another large load and nuisance tripping becomes likely. At 240 V, large heating loads can deliver more power with lower current than an equivalent 120 V arrangement.

Reactive power becomes important in larger commercial and industrial work, especially with motors, ballasts, and transformers. Even at the apprentice prep level, it is useful to know that high current is not always equal to high useful output. Power factor correction equipment is used in some systems to reduce wasted current flow.

Power and energy concepts also help with sustainability. Customers may ask whether replacing incandescent lamps with LEDs saves money. The answer comes from power and time. Lower wattage over many hours means lower kWh and lower cost. Similarly, insulation and thermostat control reduce heater run time, lowering total energy use even if the heater wattage itself does not change.

## Real-World Examples
1. **Portable heater on a bedroom circuit:** A 1500 W heater on 120 V draws about 12.5 A. If the same circuit also feeds a vacuum cleaner, the breaker may trip.
2. **Electric water heater:** A 240 V resistive element converts electrical energy directly into heat with a power factor close to 1.0.
3. **Fridge compressor motor:** Nameplate watts and running current do not tell the whole story unless power factor and cycling time are considered.

## Diagrams
### 1. Power and Energy Relationship
```text
Power (W) x Time (h) = Energy (Wh)

Example:
1500 W x 4 h = 6000 Wh = 6 kWh
```

### 2. AC Power Triangle
```text
           Apparent Power (S, VA)
                /|
               / |
              /  | Reactive Power (Q, var)
             /   |
            /____|
   Real Power (P, W)

Power factor = P / S
```

## Practice Problems
### 1. A 120 V load draws 8 A. Find power.
**Solution:** `P = 120 × 8 = 960 W`.

### 2. A 2000 W heater runs for 3 h. Find energy used.
**Solution:** `E = 2000 × 3 = 6000 Wh = 6 kWh`.

### 3. Electricity costs $0.15/kWh. What is the cost of 6 kWh?
**Solution:** `6 × 0.15 = $0.90`.

### 4. A 240 V resistive load has 48 Ω resistance. Find power.
**Solution:** `P = V² / R = 240² / 48 = 1200 W`.

### 5. A device uses 900 W real power and 1000 VA apparent power. What is power factor?
**Solution:** `PF = 900 / 1000 = 0.90`.

## 3D Interactive Description
**Power Calculator with Load Toggles** presents a virtual panelboard and a set of selectable household and light-commercial loads: lights, fridge, heater, and motor. Toggling a load on instantly updates total watts, branch current, daily kWh, and estimated monthly cost based on a chosen utility rate. Loads can be viewed individually or in combination so apprentices can see why a heater dominates the energy bill while a small LED lamp has little effect. A side graph separates real power and apparent power for the motor load to introduce power factor visually.
