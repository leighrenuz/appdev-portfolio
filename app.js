document.addEventListener('DOMContentLoaded', function() {
    const jsonUrl = 'https://raw.githubusercontent.com/leighrenuz/appdev-portfolio/refs/heads/main/courses.json';  // URL of the JSON file

    // Function to fetch and display the data
    fetch(jsonUrl)
      .then(response => response.json())  // Convert the response to JSON
      .then(data => {
        const subjectList = document.getElementById('subject-list');

        // Loop through each subject in the data and create an HTML list item
        data.subjects.forEach(subject => {
          const subjectItem = document.createElement('div');  // Create a <div> for each subject's yearTerm
          subjectItem.classList.add('subject-item');  // Add the class to use grid styling

          // Add the yearTerm to the first column
          subjectItem.innerHTML = `<strong>${subject.yearTerm}</strong>`;

          // Create a list of courses for the second column
          const courseList = document.createElement('ul');
          subject.courses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course;  // Add course name to the list item
            courseList.appendChild(listItem);  // Append the list item
          });

          // Append the course list to the subjectItem
          subjectItem.appendChild(courseList);

          // Append the subjectItem to the list of subjects
          subjectList.appendChild(subjectItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);  // Handle any errors
      });

    // Search functionality
    const searchBar = document.getElementById('searchBar'); // Reference to search bar
    searchBar.addEventListener('input', function() {
        const filter = searchBar.value.toLowerCase();  // Get search input value
        const subjectItems = document.querySelectorAll('.subject-item');  // Get all subject items

        // Loop through each subject item
        subjectItems.forEach(item => {
            const subjectText = item.textContent.toLowerCase();  // Get the text content of each subject item
            if (subjectText.includes(filter)) {
                item.style.display = '';  // Show item if it matches
            } else {
                item.style.display = 'none';  // Hide item if it doesn't match
            }
        });
    });
});
