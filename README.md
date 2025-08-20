# historical-places-explorer
A scalable React/React Native app to explore historical places with visited tracking, navigation, and interactive features.


Getting Started
1. Clone & Install
git clone https://github.com/MazenUit/historical-places-explorer.git
cd historical-places-explorer
npm install

2. Install Expo CLI

Make sure you have Expo CLI installed globally:

npm install -g expo-cli

3. Start Project
npm run start


This opens the Metro bundler in your terminal/browser.

4. Run the App

📱 On device:

Install Expo Go from the App Store
 or Google Play
.

Ensure your phone and computer are on the same Wi-Fi network.

Scan the QR code from Metro bundler with Expo Go.

🖥 On emulator/simulator:

npm run android   # for Android
npm run ios       # for iOS (Mac only)
npm run web       # for Web


📂 Project Structure
app/
 ├── _layout.tsx        # Root navigation stack
 ├── tabs/              # Tab navigation screens
 │    ├── index.tsx     # Places list
 │    ├── visited.tsx   # Visited places
 │    └── explore.tsx   # Random suggestion
 ├── [id].tsx           # Place details
components/
 ├── PlaceCard.tsx
data/
 └── places.ts
store/
 ├── usePlacesStore.ts  # Zustand store
 └── redux/             # Redux Toolkit + Epics
 
## License
This repository is for technical assessment purposes only.  
Licensed under the **CC BY-NC 4.0** license.  
Unauthorized commercial use is strictly prohibited.  