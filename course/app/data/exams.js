/* Auto-generated exam data — midterm + final, answer keys embedded */
window.EXAMS = {
  midterm: {
    id: "midterm",
    title: "MIDTERM EXAM — Modules 1–6",
    subtitle: "Safety · Ohm's Law · Series/Parallel · Power · Conductors · Meters",
    totalQ: 25,
    sections: [
      {
        name: "Section A: Multiple Choice",
        questions: [
          {type:"mc",q:"Which item is a basic piece of CSA-approved PPE commonly required on an electrical job site?",opts:["Running shoes","CSA-approved safety boots","Open-face sports helmet","Cotton gloves only"],ans:"B",exp:"CSA-approved safety boots are standard PPE on Canadian electrical job sites."},
          {type:"mc",q:"What is the main purpose of lockout/tagout (LOTO)?",opts:["To speed up installation work","To identify wire colours faster","To prevent unexpected energization during servicing","To increase circuit voltage"],ans:"C",exp:"LOTO prevents unexpected energization while equipment is being serviced."},
          {type:"mc",q:"In a simple DC circuit, voltage is best described as:",opts:["The rate of power use","Electrical pressure that pushes charge","The size of the conductor","The colour of insulation"],ans:"B",exp:"Voltage is electrical pressure (potential difference) that drives current."},
          {type:"mc",q:"Using Ohm's Law, which formula is correct?",opts:["R = V × I","I = V / R","V = I / R","P = R / I"],ans:"B",exp:"I = V / R is one of the standard forms of Ohm's Law."},
          {type:"mc",q:"In a series circuit, the same value exists through every load for:",opts:["Voltage","Current","Resistance","Power factor"],ans:"B",exp:"One path means same current everywhere in a series circuit."},
          {type:"mc",q:"In a parallel circuit, the voltage across each branch is:",opts:["Different in every branch","Zero at the source","Equal to the source voltage","Always 240 V"],ans:"C",exp:"Each parallel branch connects directly across the source voltage."},
          {type:"mc",q:"Electrical power is measured in:",opts:["Ohms","Watts","Henries","Coulombs"],ans:"B",exp:"Power is measured in watts (W)."},
          {type:"mc",q:"One kilowatt-hour (kWh) is a measure of:",opts:["Instantaneous current only","Resistance per hour","Energy used over time","Frequency"],ans:"C",exp:"kWh is a unit of energy — power × time."},
          {type:"mc",q:"Which material is commonly used as a conductor because of its low resistance and good mechanical reliability?",opts:["Rubber","Glass","Copper","Dry wood"],ans:"C",exp:"Copper is the most widely used building conductor."},
          {type:"mc",q:"Compared with copper, aluminum conductors generally:",opts:["Have lower resistance for the same size conductor","Are never used in electrical work","Require attention to termination methods and oxidation issues","Are used only for grounding electrodes"],ans:"C",exp:"Aluminum is widely used for feeders/services but requires proper termination."},
          {type:"mc",q:"Which AWG conductor size is commonly associated with a 20 A residential branch circuit in this course?",opts:["14 AWG copper","12 AWG copper","10 AWG copper","8 AWG copper"],ans:"B",exp:"12 AWG copper is the standard 20 A branch-circuit conductor in this course."},
          {type:"mc",q:"To measure voltage with a digital multimeter, the meter should be connected:",opts:["In parallel across the two test points","In series with the load only","Across the bonding conductor only","In continuity mode"],ans:"A",exp:"Voltage is always measured in parallel (across) the two test points."},
          {type:"mc",q:"A clamp meter is especially useful because it can measure current:",opts:["Only on de-energized conductors","Without opening the circuit when clamped around a single conductor","Only on neutral bars","Only when used on resistance scale"],ans:"B",exp:"Clamp meters read the magnetic field of a single conductor without breaking the circuit."},
          {type:"mc",q:"Before performing a continuity test, the circuit must be:",opts:["Energized at 120 V","Energized at 240 V","De-energized and isolated","Loaded to at least 50%"],ans:"C",exp:"Continuity/resistance testing requires a de-energized, isolated circuit."},
          {type:"mc",q:"In common Canadian branch-circuit colour identification, the grounded conductor is usually:",opts:["Red","White","Green","Blue"],ans:"B",exp:"White is the standard grounded (neutral) conductor colour in Canada."}
        ]
      },
      {
        name: "Section B: Calculation Problems",
        questions: [
          {type:"calc",q:"A 120 V circuit supplies a resistor of 24 Ω. Calculate the current using I = V / R.",ans:"5",tol:0.1,work:"I = V / R = 120 / 24 = 5 A",exp:"5 A"},
          {type:"calc",q:"A 240 V baseboard heater draws 12 A. (a) Calculate power using P = V × I. (b) If resistance is 20 Ω, verify using P = I²R.",ans:"2880",tol:5,work:"P = 240 × 12 = 2880 W; also P = 12² × 20 = 144 × 20 = 2880 W",exp:"2880 W (2.88 kW)"},
          {type:"calc",q:"A 1.5 kW portable heater runs 3 h/day for 30 days at $0.14/kWh. (a) Calculate total energy in kWh. (b) Calculate total operating cost.",ans:"135",tol:1,work:"Time = 3 × 30 = 90 h; E = 1.5 × 90 = 135 kWh; Cost = 135 × 0.14 = $18.90",exp:"135 kWh and $18.90"},
          {type:"calc",q:"Three resistors are connected in series: 10 Ω, 15 Ω, and 25 Ω. Find the total resistance.",ans:"50",tol:0.1,work:"RT = 10 + 15 + 25 = 50 Ω",exp:"50 Ω"},
          {type:"calc",q:"Three resistors in parallel: 12 Ω, 6 Ω, and 4 Ω. Find the total resistance.",ans:"2",tol:0.1,work:"1/RT = 1/12 + 1/6 + 1/4 = 1/12 + 2/12 + 3/12 = 6/12 = 1/2; RT = 2 Ω",exp:"2 Ω"},
          {type:"calc",q:"A 120 V source feeds series resistors R1 = 20 Ω and R2 = 40 Ω. Calculate the voltage across R2.",ans:"80",tol:0.5,work:"RT = 60 Ω; I = 120/60 = 2 A; VR2 = 2 × 40 = 80 V",exp:"80 V"},
          {type:"mc",q:"A fixed load draws 24 A. Using the table (14AWG=15A, 12AWG=20A, 10AWG=30A, 8AWG=40A), what is the minimum copper conductor size?",opts:["14 AWG","12 AWG","10 AWG","8 AWG"],ans:"C",exp:"10 AWG (30 A ampacity) is the smallest that exceeds 24 A."}
        ]
      },
      {
        name: "Section C: Short Answer",
        questions: [
          {type:"fill",q:"In the circuit diagram: Panel hot ---- A ----[Switch]---- B ----(Lamp)---- C ---- Panel neutral, with D = metal box bond. What is label A?",ans:"ungrounded conductor",exp:"A is the ungrounded conductor (hot feed) to the switch."},
          {type:"fill",q:"Name the 1st step in the LOTO sequence.",ans:"identify energy sources",exp:"Identify the equipment to be serviced and all energy sources."},
          {type:"fill",q:"In common Canadian residential wiring, a GREEN or BARE COPPER conductor is used for:",ans:"bonding",exp:"Green or bare copper = bonding / equipment grounding conductor."}
        ]
      }
    ]
  },
  final: {
    id: "final",
    title: "FINAL EXAM — Modules 7–12",
    subtitle: "AC/DC · Transformers · Residential Wiring · Breakers · Motors · Troubleshooting",
    totalQ: 40,
    sections: [
      {
        name: "Section A: Multiple Choice",
        questions: [
          {type:"mc",q:"A frequency of 60 Hz means:",opts:["60 volts per cycle","60 cycles per second","60 amps per minute","60 ohms of reactance"],ans:"B",exp:"60 Hz = 60 complete cycles per second."},
          {type:"mc",q:"RMS voltage is important because it represents:",opts:["The peak value only","The effective heating value compared with DC","The turns ratio of a transformer","A conductor colour code"],ans:"B",exp:"RMS = effective heating value equivalent to DC."},
          {type:"mc",q:"Which source is a common example of DC?",opts:["Utility transformer secondary supplying a house","Battery","120/240 V split-phase service","Three-phase alternator output"],ans:"B",exp:"Batteries provide steady DC polarity."},
          {type:"mc",q:"The main advantage of AC for power distribution is that AC:",opts:["Never changes polarity","Eliminates all line losses","Can be transformed easily to different voltages","Requires no insulation"],ans:"C",exp:"AC can be stepped up/down with transformers for efficient transmission."},
          {type:"mc",q:"A transformer works on the principle of:",opts:["Electrolysis","Electromagnetic induction","Friction heating","Static discharge only"],ans:"B",exp:"Transformers use electromagnetic induction — changing flux induces voltage."},
          {type:"mc",q:"A transformer that reduces voltage from primary to secondary is called a:",opts:["Step-up transformer","Step-down transformer","Isolation resistor","Rectifier bridge"],ans:"B",exp:"Step-down transformer reduces secondary voltage."},
          {type:"mc",q:"In a standard Canadian 120/240 V split-phase residential service, the voltage from hot to neutral is approximately:",opts:["24 V","120 V","208 V","347 V"],ans:"B",exp:"Either hot leg to neutral ≈ 120 V."},
          {type:"mc",q:"On a standard 120 V receptacle, the neutral conductor normally terminates on the:",opts:["Brass screw","Green screw","Silver screw","Black screw"],ans:"C",exp:"Neutral lands on the silver (wide-blade) screw."},
          {type:"mc",q:"Which conductor is normally used for bonding or equipment grounding?",opts:["White","Green or bare copper","Red only","Blue only"],ans:"B",exp:"Green or bare copper = equipment grounding / bonding conductor."},
          {type:"mc",q:"GFCI protection is commonly used to reduce shock risk in locations such as:",opts:["Bathrooms and outdoor receptacles","Service transformer primaries only","Motor control centres only","Dry wall cavities only"],ans:"A",exp:"GFCI is required where moisture increases shock risk."},
          {type:"mc",q:"AFCI protection is commonly associated with many dwelling-unit branch circuits supplying:",opts:["Habitable spaces such as bedrooms and living areas","Utility primary feeders only","Fire alarm batteries only","Distribution substations only"],ans:"A",exp:"AFCI is commonly required for habitable area circuits."},
          {type:"mc",q:"The thermal element of a breaker primarily responds to:",opts:["Sustained overload current","Conductor insulation colour","Normal neutral current only","Ambient sound level"],ans:"A",exp:"Thermal (bimetal) element responds to sustained overload heating."},
          {type:"mc",q:"The magnetic element of a thermal-magnetic breaker is designed to trip quickly on:",opts:["Voltage drop","Short-circuit current","Minor lighting load changes","Low frequency only"],ans:"B",exp:"Magnetic element trips instantly on high fault / short-circuit current."},
          {type:"mc",q:"In a downstream subpanel, neutral bars and bonding bars are generally:",opts:["Bonded together intentionally","Isolated from each other","Removed completely","Used interchangeably"],ans:"B",exp:"Subpanels keep neutral and bonding isolated to avoid parallel fault paths."},
          {type:"mc",q:"An AC induction motor produces torque because the stator creates a:",opts:["Rotating magnetic field","Fixed neutral point","Pure DC field with no rotation","Mechanical resonance only"],ans:"A",exp:"The rotating magnetic field induces rotor current and torque."},
          {type:"mc",q:"Motors are primarily what type of load?",opts:["Purely resistive","Inductive","Capacitive only","Chemical only"],ans:"B",exp:"Motors are inductive loads — they rely on magnetic fields."},
          {type:"mc",q:"A VFD controls motor speed mainly by varying:",opts:["Wire colour and breaker frame size","Frequency and voltage","Conductor metal only","Bonding impedance only"],ans:"B",exp:"VFDs vary frequency and voltage to control motor speed."},
          {type:"mc",q:"The first step in systematic troubleshooting is to:",opts:["Replace parts at random","Identify and verify the symptom","Disconnect every branch circuit","Megger energized equipment immediately"],ans:"B",exp:"Always identify and verify the symptom before acting."},
          {type:"mc",q:"A breaker that trips instantly when a load is energized most often suggests a:",opts:["Normal operating condition","Short circuit or severe fault","Slight voltage drop","Correctly balanced circuit"],ans:"B",exp:"Instant tripping = short circuit or severe fault (magnetic trip element)."},
          {type:"mc",q:"Safe meter verification before absence-of-voltage testing follows which sequence?",opts:["Target circuit, known live source, target circuit again","Known live source, target circuit, known live source","Neutral bar, target circuit, panel cover","Ground rod, breaker handle, target circuit"],ans:"B",exp:"Live-dead-live: verify meter on known live, test target, verify again on known live."}
        ]
      },
      {
        name: "Section B: Calculations",
        questions: [
          {type:"calc",q:"Convert 120 Vrms to peak voltage using Vpeak = Vrms × √2.",ans:"169.7",tol:1,work:"Vpeak = 120 × 1.414 = 169.7 V",exp:"169.7 V peak"},
          {type:"calc",q:"Find the period of a 60 Hz waveform using T = 1 / f.",ans:"0.01667",tol:0.001,work:"T = 1 / 60 = 0.01667 s (16.67 ms)",exp:"0.0167 s or 16.7 ms"},
          {type:"calc",q:"A transformer has Np = 1000, Ns = 50, Vp = 240 V. Calculate secondary voltage Vs.",ans:"12",tol:0.1,work:"Vs = Vp × (Ns/Np) = 240 × (50/1000) = 12 V",exp:"12 V"},
          {type:"calc",q:"An ideal transformer: Vs = 24 V, Is = 4 A, Vp = 240 V. Calculate primary current Ip.",ans:"0.4",tol:0.01,work:"Ip = (Vs × Is) / Vp = (24 × 4) / 240 = 0.4 A",exp:"0.4 A"},
          {type:"calc",q:"A 120 V branch circuit supplies: lighting 180 W, vacuum 1200 W, fan 120 W. (a) Total W? (b) Branch current?",ans:"12.5",tol:0.1,work:"Total = 180 + 1200 + 120 = 1500 W; I = 1500 / 120 = 12.5 A",exp:"1500 W total; 12.5 A"},
          {type:"calc",q:"A continuous load draws 16 A. Using breaker size = load ÷ 0.8, what is the minimum breaker rating?",ans:"20",tol:0.5,work:"16 ÷ 0.8 = 20 A",exp:"20 A breaker"},
          {type:"calc",q:"A single-phase motor draws 1500 W from 240 V. Calculate current using I = P / V.",ans:"6.25",tol:0.1,work:"I = 1500 / 240 = 6.25 A",exp:"6.25 A"},
          {type:"calc",q:"A 2.0 kW motor runs 8 h/day for 20 days at $0.15/kWh. (a) Total energy? (b) Total cost?",ans:"320",tol:1,work:"E = 2.0 × 8 × 20 = 320 kWh; Cost = 320 × 0.15 = $48.00",exp:"320 kWh and $48.00"},
          {type:"calc",q:"A 240 V load uses 2000 W at PF = 0.80. (a) Current before correction? (b) Current at PF = 0.95? (c) Reduction?",ans:"10.42",tol:0.1,work:"I_before = 2000/(240×0.80) = 10.42 A; I_after = 2000/(240×0.95) = 8.77 A; reduction = 1.65 A",exp:"10.42 A → 8.77 A; reduction 1.65 A"},
          {type:"calc",q:"A 120 V load draws 12 A over 30 m one-way run of 12 AWG (5.21 Ω/1000 m). (a) Total circuit length? (b) Total R? (c) Voltage drop? (d) % drop?",ans:"3.75",tol:0.2,work:"L = 60 m; R = 5.21/1000 × 60 = 0.3126 Ω; Vdrop = 12 × 0.3126 = 3.75 V; % = 3.75/120 × 100 = 3.13%",exp:"3.75 V drop; 3.1% voltage drop"}
        ]
      },
      {
        name: "Section C: Troubleshooting",
        questions: [
          {type:"fill",q:"Receptacles downstream of the first receptacle are dead, breaker is on. Most likely fault?",ans:"open connection",exp:"Open splice or back-stab connection at the transition point cuts power to downstream devices."},
          {type:"fill",q:"240 V baseboard heater shows 120 V each leg to bond but 0 V across heater terminals. Most likely fault?",ans:"open leg",exp:"Both heater terminals are at the same potential — one hot leg is open upstream."},
          {type:"fill",q:"Single-phase motor hums, struggles to start, trips overload. Most likely fault?",ans:"failed start capacitor",exp:"A failed start capacitor prevents the motor from developing enough starting torque."},
          {type:"fill",q:"Lighting breaker trips instantly every time a new luminaire is turned on. Most likely fault?",ans:"short circuit",exp:"A wiring error during installation created a short — magnetic trip responds instantly."},
          {type:"fill",q:"Outdoor GFCI keeps tripping after heavy rain. Most likely fault?",ans:"moisture intrusion",exp:"Water inside the box or receptacle creates leakage current to ground, tripping the GFCI."}
        ]
      },
      {
        name: "Section D: Diagram Interpretation",
        questions: [
          {type:"mc",q:"A 25 kV primary / 240/120 V centre-tapped transformer — is it step-up or step-down?",opts:["Step-up","Step-down","1:1 isolation","Autotransformer"],ans:"B",exp:"It reduces voltage from 25 kV to 240/120 V — step-down."},
          {type:"mc",q:"In the split-phase distribution transformer, what is the purpose of the centre tap?",opts:["To reduce flux","To provide the neutral point for both 120 V and 240 V loads","To increase frequency","To eliminate eddy currents"],ans:"B",exp:"Centre tap = neutral, enabling 120 V from either leg and 240 V across both."},
          {type:"mc",q:"In the panelboard diagram, which breaker supplies the 240 V water heater?",opts:["A 15 A single-pole breaker","A 20 A single-pole breaker","The two-pole 30 A breaker","A tandem 15 A breaker"],ans:"C",exp:"240 V loads require a two-pole breaker connecting to both hot legs."},
          {type:"mc",q:"In the motor control diagram, what does the auxiliary sealing contact do?",opts:["Opens when START is pressed","Keeps the contactor coil energized after START is released","Trips the overload relay","Reduces motor speed"],ans:"B",exp:"The sealing (hold-in) contact latches the contactor on after the START button is released."},
          {type:"mc",q:"In the switch-loop wiring diagram, why must the white conductor be re-identified?",opts:["It is the bonding conductor","White is normally reserved for the grounded conductor","White must always be used for hot","Colours have no meaning in switch loops"],ans:"B",exp:"White is the grounded conductor colour — when used as hot in a switch loop, re-identification is required."}
        ]
      }
    ]
  }
};
