// רשימה של התוצרים
const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "מערכת ניהול למידה",
            "img":"./images/מערכת ניהול למידה.png"
           
        },
        {
            "id": 2,
            "title": "משחוק",
            "img":"./images/משחוק.png"
         
        },
        {
            "id": 3,
            "title": "פיתוח לומדות",
            "img":"./images/פיתוח לומדות.png"
        
        },
        {
            "id": 4,
            "title": "חדרי בריחה",
            "img":"./images/חדרי בריחה.png"
         
        },
        {
            "id": 5,
            "title": "מציאות מדומה",
            "img":"./images/מציאות מדומה.png"
         
        },
        {
            "id": 6,
            "title": "מארזי הדרכה",
            "img":"./images/מארזי הדרכה.png"
         
        },   {
            "id": 7,
            "title": "סרטוני סמן",
            "img":"./images/סרטוני סמן.png"
         
        },
        {
            "id": 8,
            "title": "סרטוני אנימציה",
            "img":"./images/סרטוני אנימציה.png"
        
        },
        {
            "id": 9,
            "title": "קורסים מקוונים",
            "img":"./images/קורסים מקוונים.png"
         
        },
        {
            "id": 10,
            "title": "Job aids",
            "img":"./images/עיצוב מצגות.png"
         
        }
  
    ]
}

// יצירת משתנים עבור  הקרוסלה 

let slideIndex;

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems();
    // startSlide();
    slideIndex = 1;
    showSlides(slideIndex);
  });


// פונקציה ליצירת הרשימה
function createItems() {
    // הבאת האלמנט בו ניצור את הרשימה בדף
    const itemsContainer = document.getElementById('itemsContainer');
    // איפוס של האלמנט
    itemsContainer.innerHTML = "";
    // יצירת תגית של רשימה
    const list = document.createElement("ul");
    // השמת מזהה לתגית
    list.setAttribute("id", "topics-list");

    // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
    jsonData.generators.forEach(generator => {
        // יצירה של תגית הפריט
        const listItem = document.createElement("li");
        const imgItem=document.createElement("img");
         imgItem.setAttribute("src",`${generator.img}`)
         listItem.appendChild(imgItem);
        // הוספת מזהה לתגית
        listItem.setAttribute("id", `li_${generator.id}`);
        // הוספת אירועים
        // מעבר עכבר
        listItem.addEventListener("mouseover", hoverTopic);
        // יציאת עכבר
        listItem.addEventListener("mouseout", outTopic);

        // יצירת הטקסט של הפריט
        const listItemTitle = document.createTextNode(`${generator.title}`)
        // הוספת הטקסט לפריט
        listItem.appendChild(listItemTitle);
        // הוספת הפריט לרשימה
        list.appendChild(listItem);
    });
    // הוספת הרשימה לאלמנט בדף
    itemsContainer.appendChild(list);
}

// פונקציית מעבר עכבר
function hoverTopic(e) {
    // נמצא את המזהה של הפריט עליו עברנו
    const currentId = e.target.id.split("_")[1];
    // נמצא את הפריט ברשימה מעלה ונשמור את הטאג שלו
    const currentTag = jsonData.generators.find(g => g.id == currentId).tag;

}

// פונקצייה לפתיחה וסגירה של תפריט ההמבורגר
function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

// פונקציית יציאת עכבר
function outTopic() {
    // נעבור על כלל האלמנטים ברשימה מעלה ונסיר מהאלמנטים שמציגים אותם את המחלקה
    jsonData.generators.forEach(generator => {
        // נפנה לאלמנט בדף לפי המזהה ונסיר ממנו את המחלקה
        document.getElementById(`li_${generator.id}`).classList.remove("red");
    });
}



// הפעלת הדארק מוד

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    // שומר על בחירת המשתמש
    var isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);

    // מעדכן את הטקסט שבתוך הכפתור משתנה לפי המצב 
    var darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.textContent = isDarkMode ? "האר מסך" : "החשך מסך";
    
    // מעדכן את הטקסט של הarialable 
    darkModeToggle.setAttribute("aria-label", isDarkMode ? "החשך מסך (מופעל)" : "החשך מסך (מושבת)");
}

// בודק באיזה מוד האתר נמצא 
var isDarkModePreferred = localStorage.getItem("darkMode") === "true";
if (isDarkModePreferred) {
    document.body.classList.add("dark-mode");
}




// פונקציה המפעילה את טופס צור קשר

function openPopup() {
    document.getElementById('overlay').style.display = 'block';
}
// פונקציה הסוגרת את טופס צור קשר

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}

// הפונקציה הבודקת שהמידע שהמשתמש הכניס בתיבות הטקסט תקינות
function validateForm() {
    var fullname = document.getElementById('fname').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    if (fullname === '' || phone === '' || message=='') {
        alert('כתוב את שם המלא שלך, מספר טלפון לחזרה ואת ההודעה שלך');
        return false;
    }
    // סוגר את החלונית פופ אפ לאחר לחיצה על כפתור שלח
    closePopup();
    return true;
}

// קרוסלת תמונות של טעימות מהמוצרים

// פונקציה הקשורה לכפתורי החצים קדימה ואחורה של הקרוסלה
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// פונקציה המחליפה את הכותרת של הסליידר לפי המידע של אותה תמונה
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// פונקציה זו מנהלת מצגת שקופיות שבתוכה תמונות ומאפשרת למשתמשים לנווט בין שקופיות.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}