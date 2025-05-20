 
        // Sample therapist data - in a real implementation, this would come from a database
        const therapists = [
            {
                id: 1,
                name: "Dr. Sarah Murphy",
                membership: "Member - Accredited",
                location: "Dublin",
                areas: ["Anxiety", "Depression", "Trauma"],
                email: "sarah.murphy@example.com",
                phone: "085 123 4567",
                languages: "English, Irish",
                sessions: "In-person, Online"
            },
            {
                id: 2,
                name: "Michael O'Connor",
                membership: "Member - Accredited and Supervisor",
                location: "Cork",
                areas: ["Relationships", "Self-esteem", "Grief"],
                email: "michael.oconnor@example.com",
                phone: "086 987 6543",
                languages: "English",
                sessions: "In-person"
            },
            {
                id: 3,
                name: "Emma Byrne",
                membership: "Member - Accredited",
                location: "Galway",
                areas: ["Addiction", "Trauma", "Family issues"],
                email: "emma.byrne@example.com",
                phone: "083 765 4321",
                languages: "English, Spanish",
                sessions: "In-person, Online"
            },
            {
                id: 4,
                name: "Dr. John Kelly",
                membership: "Member - Accredited and Supervisor",
                location: "Limerick",
                areas: ["Depression", "Anxiety", "LGBTQ+"],
                email: "john.kelly@example.com",
                phone: "087 456 7890",
                languages: "English",
                sessions: "In-person, Online"
            },
            {
                id: 5,
                name: "Aoife Doyle",
                membership: "Member - Accredited",
                location: "Waterford",
                areas: ["Couples therapy", "Relationship issues", "Sexuality"],
                email: "aoife.doyle@example.com",
                phone: "089 234 5678",
                languages: "English",
                sessions: "In-person"
            },
            {
                id: 6,
                name: "David Walsh",
                membership: "Member - Accredited",
                location: "Dublin",
                areas: ["Men's issues", "Anger management", "Stress"],
                email: "david.walsh@example.com", 
                phone: "085 876 5432",
                languages: "English",
                sessions: "In-person, Online"
            }
        ];

        // Function to render therapist cards
        function renderTherapists(therapistsArray) {
            const therapistsGrid = document.getElementById('therapists-grid');
            therapistsGrid.innerHTML = '';
            
            if (therapistsArray.length === 0) {
                therapistsGrid.innerHTML = '<p class="no-results">No therapists found matching your criteria. Please try different search parameters.</p>';
                return;
            }
            
            therapistsArray.forEach(therapist => {
                const card = document.createElement('div');
                card.className = 'therapist-card';
                
                card.innerHTML = `
                    <div class="therapist-header">
                        <div class="therapist-name">${therapist.name}</div>
                        <div class="therapist-qualification">${therapist.membership || 'Member - Accredited'}</div>
                    </div>
                    <div class="therapist-body">
                        <div class="therapist-info">
                            <div class="info-item">
                                <span class="info-label">Location:</span>
                                <span class="info-value">${therapist.location}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Areas of Interest:</span>
                                <span class="info-value">${therapist.areas.join(", ")}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Email:</span>
                                <span class="info-value">${therapist.email || therapist.name.toLowerCase().replace(' ', '.') + '@example.com'}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Work Phone:</span>
                                <span class="info-value">${therapist.phone || '08' + Math.floor(Math.random() * 9 + 1) + ' ' + Math.floor(Math.random() * 900 + 100) + ' ' + Math.floor(Math.random() * 9000 + 1000)}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Languages:</span>
                                <span class="info-value">${therapist.languages}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Sessions:</span>
                                <span class="info-value">${therapist.sessions}</span>
                            </div>
                        </div>
                        <div class="therapist-actions">
                            <a href="#" class="view-profile">View Profile</a>
                            <button class="contact-btn">✉</button>
                        </div>
                    </div>
                `;
                
                therapistsGrid.appendChild(card);
            });
        }

         // Initial rendering
         renderTherapists(therapists);

// Search functionality
document.getElementById('search-btn').addEventListener('click', function() {
    const nameQuery = document.getElementById('name').value.toLowerCase();
    const locationQuery = document.getElementById('location').value.toLowerCase();
    const areasQuery = document.getElementById('areas-of-interest').value.toLowerCase();
    const workAddressQuery = document.getElementById('work-address').value.toLowerCase();
    const languageQuery = document.getElementById('language').value.toLowerCase();
    
    const filteredTherapists = therapists.filter(therapist => {
        // Filter by name
        if (nameQuery && !therapist.name.toLowerCase().includes(nameQuery)) {
            return false;
        }
        
        // Filter by location
        if (locationQuery && !therapist.location.toLowerCase().includes(locationQuery)) {
            return false;
        }
        
        // Filter by areas of interest
        if (areasQuery) {
            const hasAreas = therapist.areas.some(area => 
                area.toLowerCase().includes(areasQuery)
            );
            if (!hasAreas) {
                return false;
            }
        }
        
        // Filter by work address - using location as proxy for now
        if (workAddressQuery && !therapist.location.toLowerCase().includes(workAddressQuery)) {
            return false;
        }
        
        // Filter by language
        if (languageQuery && !therapist.languages.toLowerCase().includes(languageQuery)) {
            return false;
        }
        
        return true;
    });
    
    renderTherapists(filteredTherapists);
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.add('open');
});

document.querySelector('.mobile-menu-close').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('open');
});

// Pagination functionality (simplified for demo)
document.getElementById('pagination').addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const paginationLinks = document.querySelectorAll('.pagination a');
        paginationLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        
        // In a real implementation, this would fetch different pages of results
        // For now, we'll just show the same therapists
        window.scrollTo({
            top: document.querySelector('.therapists-section').offsetTop - 100,
            behavior: 'smooth'
        });
    }
});

// Schema.org structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "IAHIP Psychotherapist Directory",
    "description": "Find qualified, accredited psychotherapists in Ireland. Search by location, specialism, or therapist name.",
    "url": "https://iahip.org/Psychotherapist-Directory",
    "telephone": "(01) 284 1665",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "40 Northumberland Avenue",
        "addressLocality": "Dun Laoghaire",
        "addressRegion": "Co. Dublin",
        "addressCountry": "IE"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    }
};

// Add schema.org JSON-LD
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);
  