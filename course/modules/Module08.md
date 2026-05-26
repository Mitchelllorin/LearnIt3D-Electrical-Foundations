# LearnIt3D — Electrical Foundations Apprentice Prep
### Learn IT3D — STEM · SIMULATED · 3D
---

## Module 8 — Transformers & Induction

### Learning Objectives
- Describe electromagnetic induction using Faraday's Law.
- Explain how mutual inductance allows transformers to transfer energy between windings.
- Calculate transformer voltage and current relationships using turns ratio formulas.
- Distinguish between step-up, step-down, isolation, and autotransformers.
- Identify common transformer core types and explain basic losses.
- Interpret transformer ratings such as voltage, current, and kVA.
- Relate transformer operation to utility and building distribution systems.

## Full Lesson
Transformers are one of the most important devices in electrical systems. They make modern power distribution practical by allowing voltage to be increased for transmission and decreased for utilization. To understand transformers, apprentices must first understand **electromagnetic induction**.

When a conductor is exposed to a changing magnetic field, a voltage is induced in that conductor. This principle is expressed by **Faraday's Law**: the induced voltage depends on how quickly the magnetic flux changes and on the number of turns linked by that flux. The key apprentice-level idea is simple: **a changing magnetic field can produce voltage**.

In a transformer, an AC voltage applied to the **primary winding** causes AC current to flow. That current creates a changing magnetic flux in the iron or steel core. Because the flux is changing continuously, it links the **secondary winding** and induces a voltage there. Energy is transferred magnetically through the core rather than by direct electrical connection between the windings.

This process is called **mutual inductance**. The primary winding creates the changing magnetic field, and the secondary winding receives energy from that field. Transformers require changing flux, which is why ordinary transformers operate on **AC**, not steady DC. If steady DC is applied to a transformer, the flux stops changing after the initial moment and no useful secondary voltage is induced. Instead, the primary may draw excessive current and overheat.

### Basic Transformer Relationships
An ideal transformer follows these ratio relationships:

`Vp / Vs = Np / Ns = Is / Ip`

Where:
- `Vp` = primary voltage
- `Vs` = secondary voltage
- `Np` = number of primary turns
- `Ns` = number of secondary turns
- `Ip` = primary current
- `Is` = secondary current

If the secondary has fewer turns than the primary, the transformer is **step-down**. If the secondary has more turns, it is **step-up**.

Worked example:

Given `Vp = 2400 V`, `Np = 200`, and `Ns = 20`:

`Vp / Vs = Np / Ns`

`2400 / Vs = 200 / 20 = 10`

`Vs = 2400 / 10 = 240 V`

So the secondary voltage is **240 V**.

This is a classic step-down transformer.

Current changes in the opposite direction of voltage ratio. If voltage is stepped down, available current increases. In an ideal transformer, power in equals power out:

`Pp = Ps`

In a real transformer, there are losses, so output power is slightly less:

`Ps = Pp × efficiency`

Worked example:

If `Pp = 1000 W` and efficiency is `95%`:

`Ps = 1000 × 0.95 = 950 W`

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

1. **Copper losses:** Caused by resistance in the windings. Higher current means more `I²R` heating.
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

Transformers are everywhere: doorbell circuits, lighting controls, HVAC systems, panelboard distribution, industrial machines, and utility systems all rely on induction. Understanding induction explains not only transformers, but also the operating principles of motors, relays, and many measuring devices. Once apprentices understand that changing magnetic flux can create voltage, many later topics become easier to learn.

## Real-World Examples
1. **Pole-mounted utility transformer:** A distribution transformer reduces about 25 kV utility voltage to 120/240 V split-phase service for a house.
2. **Control transformer in a furnace panel:** A transformer steps 120 V AC down to 24 V AC for the thermostat and control circuit.
3. **Isolation transformer for sensitive equipment:** An isolation transformer separates the supply from the load to reduce noise transfer and improve safety during servicing.

## Diagrams
### 1. Basic Transformer Layout
```text
 Primary winding           Core            Secondary winding
   ~~~ Np ~~~        [ magnetic path ]       ~~~ Ns ~~~
      |                                         |
     Vp                                        Vs

AC on primary -> changing flux in core -> induced voltage on secondary
```

### 2. Step-Down Distribution Transformer
```text
25 kV primary  ---> [ Transformer ] ---> 240/120 V secondary
                                      X1 -----120 V----- X0 -----120 V----- X2
                                                hot       neutral       hot
```

### 3. Core vs Shell Type
```text
Core type:               Shell type:
[coil]   [coil]          [ core around coil ]
  ||       ||                  [ winding ]
```

## Practice Problems
### 1. What principle allows a transformer to induce voltage in the secondary winding?
**Solution:** Electromagnetic induction through changing magnetic flux, described by Faraday's Law.

### 2. A transformer has `Vp = 2400 V`, `Np = 200`, and `Ns = 20`. What is `Vs`?
**Solution:** `Vs = 240 V` using `Vp / Vs = Np / Ns`.

### 3. If transformer input power is `1000 W` and efficiency is `95%`, what is output power?
**Solution:** `Ps = 1000 × 0.95 = 950 W`.

### 4. What happens to current when a transformer steps voltage down?
**Solution:** Available current increases in inverse proportion, assuming the transformer is operating within its rating.

### 5. Name two common transformer losses.
**Solution:** Any two of: copper loss, eddy current loss, hysteresis loss, or other core/iron loss.

## 3D Interactive Description
**Transformer Core Animation** presents a 3D transformer with visible primary and secondary windings wrapped around a laminated core. Animated magnetic flux lines pulse through the core as AC is applied to the primary. Sliders let the learner change the **primary turns** and **secondary turns** ratio, and the display updates the calculated output voltage instantly. A readout shows `Vp`, `Vs`, turns ratio, and current relationship, while an optional loss overlay highlights copper heating and core losses. The learner can switch between step-up, step-down, isolation, and autotransformer views to see how construction and performance change.
