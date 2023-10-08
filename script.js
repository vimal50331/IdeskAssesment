// Fetch user info from the mock API
fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        // Populate user info section with user data
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-username').textContent = `@${user.username}`;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-phone').textContent = user.phone;
        document.getElementById('user-website').innerHTML = `<a href="${user.website}" target="_blank">${user.website}</a>`;
        document.getElementById('company-name').textContent = user.company.name;
        document.getElementById('company-catchPhrase').textContent = user.company.catchPhrase;
        document.getElementById('company-bs').textContent = user.company.bs;
        
        const addressElement = document.getElementById('user-address');
        addressElement.innerHTML = `
            ${user.address.street}, ${user.address.suite}<br>
            ${user.address.city}, ${user.address.zipcode}<br>
            Latitude: ${user.address.geo.lat}, Longitude: ${user.address.geo.lng}
        `;
    })
    .catch(error => console.error('Error fetching user data:', error));

// Fetch photos from the mock API and populate the photos grid similarly
// Function to fetch and populate the photos grid
function populatePhotosGrid() {
    fetch('http://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            // Get the photos grid container
            const photosGrid = document.getElementById('photos-grid');
            
            // Loop through photos and create thumbnails
            photos.forEach(photo => {
                // Create a div for the photo thumbnail
                const photoThumbnail = document.createElement('div');
                photoThumbnail.classList.add('photo-thumbnail');
                
                // Create an image element for the photo
                const image = document.createElement('img');
                image.src = photo.thumbnailUrl;
                image.alt = photo.title;
                
                // Create a caption for the photo
                const caption = document.createElement('p');
                caption.textContent = photo.title;
                
                // Append the image and caption to the thumbnail
                photoThumbnail.appendChild(image);
                photoThumbnail.appendChild(caption);
                
                // Append the thumbnail to the photos grid
                photosGrid.appendChild(photoThumbnail);
            });
        })
        .catch(error => console.error('Error fetching photo data:', error));
}
document.addEventListener('DOMContentLoaded', function() {
    const postsCollapse = new bootstrap.Collapse(document.getElementById('collapseExample'), {
        toggle: true
    });
});



// Call the function to populate the photos grid when the page loads
window.addEventListener('load', populatePhotosGrid);
