// URL of the JSON file
const jsonUrl = 'https://raw.githubusercontent.com/leighrenuz/appdev-portfolio/refs/heads/main/courses.json';  // Fixed the missing quotation mark

// Function to fetch and display the data
fetch(jsonUrl)
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    const subjectList = document.getElementById('subject-list');  // Get the list element

    // Loop through each subject in the data and create an HTML list item
    data.forEach(subject => {
      const listItem = document.createElement('li'); // Create a new list item
      listItem.textContent = `${subject.yearTerm} - ${subject.subjectCode}: ${subject.descriptiveTitle} (${subject.credit} credits)`; // Format the display text
      listItem.classList.add('subject-item');  // Add a class for easier targeting in search
      subjectList.appendChild(listItem);  // Add the list item to the list
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);  // Handle any errors
  });

// Search functionality
document.getElementById("search").addEventListener("input", function() {
  let searchTerm = this.value.toLowerCase();  // Get the search term in lowercase
  let subjectItems = document.querySelectorAll(".subject-item");  // Get all subject items

  subjectItems.forEach(function(subject) {
    let subjectText = subject.textContent.toLowerCase();  // Get the subject text and make it lowercase
    
    // Check if the search term matches the subject text
    if (subjectText.includes(searchTerm) && searchTerm !== "") {
      subject.classList.add("highlight");  // Highlight this subject
    } else {
      subject.classList.remove("highlight");  // Remove highlight if not a match
    }
  });
});
