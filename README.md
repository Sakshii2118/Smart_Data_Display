# 📚 Smart Data Display – Popular Books

A simple web app that displays a curated list of **Highly Recommended Books** using a structured dataset.  
Built as part of the **Maketronics Tech Challenge – Smart Data Display**.

---

## 🎯 Objective

This app collects structured book data and displays the **Top 10 highest-rated** books in a visually appealing layout.  
It also allows users to **search** and **filter** by **Author**, **Year**, and **Rating**.

---

## 📦 Features

✅ Displays Top 10 Highly Rated Books  
✅ Search by Book Title or Author  
✅ Filter by:
- ⭐ Rating  
- 📅 Year  
- 🖋️ Author  

✅ Clean, card-based layout  
✅ Fully frontend – no backend or setup required

---

## 🗂 Folder Structure

```
smart-data-display/
├── books.json ← 50 Books data (structured JSON)
├── index.html ← Main web interface
├── Popular-Books.csv ← Full Book data (csv)
├── style.css ← Custom styles
├── script.js ← JavaScript logic
├── full_books.json ← Whole book data (structured JSON)
```

---

## 🧪 How to Run

No setup required:

1. Download or clone the folder
2. Open `index.html` in any browser
3. Done ✅

💡 **Note**:  
By default, only the **Top 10 books** (from a dataset of **50 books**) are shown on the homepage.  
If you want to run the project using the **complete dataset**, just:

1. Replace the current JSON file (`books.json`) with `full_books.json`
2. Update the filename in `script.js`:
   ```javascript
   fetch('full_books.json') // instead of books.json

---

## 📊 Dataset & Assumptions

- Source: Public CSV of **Popular Books** (cleaned and converted)
- Structured as JSON with:
  - `Title`
  - `Author`
  - `Score` (Rating)
  - `Published` (Year)
  - `Image` (Cover URL)
- Only top 10 books shown, ranked by highest rating (`Score`)

---

## 🖼️ Screenshot

<img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/bcc3ab49-a3d9-4a65-a026-6c29dd5a636a" />
<img width="1891" height="862" alt="image" src="https://github.com/user-attachments/assets/c285dbe0-6136-4813-aff6-cdcc29c8287f" />
<img width="1918" height="861" alt="image" src="https://github.com/user-attachments/assets/816e9cb4-5348-43b3-b5d6-327981d7671b" />
<img width="1906" height="858" alt="image" src="https://github.com/user-attachments/assets/d86a6f70-a3c8-4d5d-b7aa-39caa492026b" />
<img width="1919" height="856" alt="image" src="https://github.com/user-attachments/assets/7af095da-e9b7-4120-afbb-42425ec2a37e" />
<img width="1889" height="854" alt="image" src="https://github.com/user-attachments/assets/bb3773b6-1a32-4dd1-aa52-40253f777c79" />
<img width="1916" height="864" alt="image" src="https://github.com/user-attachments/assets/f1115e8a-a441-49e8-b3d2-4b126c25ef74" />





---

## 👩‍💻 Tools & Stack

- HTML, CSS, JavaScript  
- JSON for data  
- GitHub for version control / optional hosting

---

## 📮 Contact

**Sakshi Gupta**  
Maketronics Tech Challenge – Smart Data Display  
Submitted on: **11-07-2025**

---





