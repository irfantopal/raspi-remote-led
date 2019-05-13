# raspi-remote-led
A remote USB LED, with Raspberry pi. Programmed in node.js

# Requirements
  - Linux
  - Node.js
  - Raspberry pi ( tested with Raspberry Pi 3 b+ )
  - Uhubctl ( github: https://github.com/mvp/uhubctl )
  
# How to install it
  1. Clone the project using `git clone https://github.com/irfantopal/raspi-remote-led.git`
  2. Change the directory to the project `cd ~/raspi-remote-led/`
  3. Type `npm install` to install the packages
  4. Use `npm start` to start the app
  5. Connect your USB LED to the USB Port 2 in your Raspberry pi, you can change the USB Port in the app.js file
  6. Go `http://(raspberry's ip):8080 ` in your browser ( you must be in the same internet with raspberry pi )
  
# Usage of the project
 You can use it in your school projects etc. ( look to the LICENSE )
