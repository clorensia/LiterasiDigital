# Digital Literacy Campaign Website
This project is a comprehensive website dedicated to promoting digital literacy and combating misinformation in Indonesia. The platform educates users about identifying hoaxes, provides statistics on misinformation, offers practical tips, and includes a registration form for digital literacy programs.
## Features Overview

### **Responsive Design**
- Developed a fully responsive layout that works across mobile, tablet, and desktop devices
- Implemented mobile-first approach with progressive enhancement
- Used CSS Flexbox and Grid for flexible layouts

### **Interactive Sections**
- Created an engaging hero section with call-to-action button
- Designed an informative "About Digital Literacy" section with visual elements
- Developed a statistics dashboard showing hoax prevalence data
- Built a registration form with client-side validation
- Implemented a tips section with actionable advice cards

### **User Experience Enhancements**
- Implemented smooth scrolling navigation with sticky header
- Added hover effects and transitions for interactive elements
- Designed a cohesive color scheme with gradient accents
- Ensured accessibility through semantic HTML and proper contrast

## Technical Implementation

### **Responsive Design Implementation**
- Used CSS media queries for device-specific styling
- Implemented flexible units (rem, %) for scalable layouts
- Created responsive navigation that collapses on mobile
- Optimized images and assets for fast loading

### **Form Validation System**
```javascript
function validateFormData(obj) {
  return obj !== null &&
         !isNaN(obj.zipCode) &&
         document.getElementById('status')?.checked === true;
}

function submit() {
  event.preventDefault();
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  
  if (!isValid) {
    document.getElementById('warning').textContent = 
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById('warning').textContent = "";
    // Form submission logic
  }
}
```

### **Navigation and Scrolling**
- Implemented scroll-margin-top to prevent content overlapping
- Created smooth scrolling behavior for anchor links
- Developed sticky navigation that remains visible during scrolling
- Designed responsive navigation that collapses on mobile devices

## Skills Demonstrated
- **Responsive Web Design**: Created adaptable layouts for all devices
- **CSS Architecture**: Implemented maintainable CSS with variables and modular structure
- **JavaScript DOM Manipulation**: Developed interactive form validation
- **UI/UX Design**: Designed intuitive user interfaces with clear visual hierarchy
- **Accessibility**: Ensured website usability for diverse audiences

## Tools and Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **CSS Features**: Flexbox, Grid, CSS Variables, Media Queries
- **Design Tools**: Visual Studio Code, Browser Developer Tools
- **Version Control**: Git

## File Structure

```bash
digital-literacy-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and icons (if used)
```

## How to Use
1. Clone the repository:
```bash
git clone https://github.com/your-username/digital-literacy-website.git
```

2. Open the project directory and launch `index.html` in any modern web browser

3. Explore the different sections using the navigation menu

## Future Improvements
1. Implement backend functionality for form submissions
2. Add multilingual support (English/Indonesian)
3. Create interactive hoax identification exercises
4. Develop a content management system for tips/articles
5. Add dark mode option
6. Implement user accounts for progress tracking

## License
This project is open-source, created for educational purposes. Released under the MIT License.

## Credits
Created by **Candra Lorensia A.** as part of Skilvul x Perempuan Inovasi's web development program.


