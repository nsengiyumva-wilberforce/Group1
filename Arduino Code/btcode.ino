
#define ledPin 7
String state;

void setup() {
 pinMode(ledPin, OUTPUT);
 digitalWrite(ledPin, LOW);
 Serial.begin(9600); // Default communication rate of the Bluetooth module
}

void loop() {
 if(Serial.available() > 0){ // Checks whether data is comming from the serial port
 state = Serial.readString(); // Reads the data from the serial port
 Serial.println(state); // Send back, to the phone, the String "LED: ON"
 }

 if (state == "OFF") {
 digitalWrite(ledPin, LOW); // Turn LED OFF
 Serial.println("LED: OFF"); // Send back, to the phone, the String "LED: ON"
 }
 else if (state == "ON") {
 digitalWrite(ledPin, HIGH);
 Serial.println("LED: ON");
 } 
}
