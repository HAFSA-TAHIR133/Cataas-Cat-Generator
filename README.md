#  CATAAS Cat Generator

A React-based web application that generates random cat images using the Cataas API. Users can explore cats by tags, custom text, and styling options like font size and color.

---

##  Features

*  Generate random cat images
*  Search cats by tags (cute, funny, sleepy, etc.)
*  Display cats with custom text
*  Customize text with font size and color
*  Loading indicator while fetching images
*  Error handling for invalid inputs or failed requests
*  Reusable components (Loader, Error, CatImage)

---

##  Tech Stack

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Cataas API

---

##  Installation

```bash
git clone https://github.com/your-username/random-cat-explorer.git
cd random-cat-explorer
pnpm install
pnpm run dev
```

---

##  API Used

[Cataas API](https://cataas.com/#/)
Used for fetching random and customized cat images.

---

##  Project Structure

```
src/
│
├── components/
│   ├── CatImage.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── RandomCat.jsx
│   ├── TagCat.jsx
│   ├── CatSays.jsx
│   └── CustomCat.jsx
│   └── gifCat.jsx
│
├── services/
│   └── catServices.js
│
└── App.jsx
```

---

##  What I Learned

* React state management using useState
* Handling side effects using useEffect
* API integration in React
* Component reusability
* Error and loading state handling
* Clean project structure with service layer

---

##  Preview

# Home Page

<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/192369bf-cfc1-4955-8f20-208fd7eb0c4f" />

# Cat Says Component (saying Hello Hafsa)

<img width="1920" height="973" alt="image" src="https://github.com/user-attachments/assets/4b354daf-bdbc-4591-968d-ef08d8147e55" />

# Generate Cat By Tag(cute)

<img width="1920" height="1561" alt="image" src="https://github.com/user-attachments/assets/09bc22e0-287c-4e14-8801-0fd743e7dfaa" />

# Custom Cat (text="Hello Hafsa" FontSize=50 Color="Orange")

<img width="1920" height="1528" alt="image" src="https://github.com/user-attachments/assets/3034a197-5b6a-497d-9870-c815d1ffb69c" />

# Random Cat Generate

<img width="1920" height="1278" alt="image" src="https://github.com/user-attachments/assets/c40960d7-f6ba-4923-80fd-41f974b108d5" />

# Get a Gif Cat

<img width="1920" height="972" alt="image" src="https://github.com/user-attachments/assets/d27dfcc6-7917-45f1-ad00-d1e051bf2a0e" />

# Generate a random image with Tag "Cute" & Say "A Little Star"

<img width="1920" height="1342" alt="image" src="https://github.com/user-attachments/assets/0074cecc-8fac-4e9d-89ab-ca216bf867fe" />

---

##  Author

**Hafsa**
GitHub: https://github.com/HAFSA-TAHIR133
