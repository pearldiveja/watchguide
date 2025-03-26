/ Function to show specific step
function showStep(stepId) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });

    // Show the selected step
    document.getElementById(stepId).classList.remove('hidden');
}
// List of watch brands categorized by value
const watchDatabase = {
    highValue: [
        "Rolex", "Patek Philippe", "Audemars Piguet", "Cartier", "Omega",
        // Add more high-value brands here...
    ],
    lowValue: [
        "Timex", "Casio", "Swatch", "Fossil", "Skagen",
        // Add more low-value brands here...
    ],
    mixedValue: {
        Bulova: {
            highValueModels: ["Precisionist", "Marine Star", "Accutron"],
            lowValueModels: ["Classic Quartz", "Crystal Collection"],
            identificationTips: `
                High-value models include Precisionist, Marine Star, and Accutron.
                Low-value models include Classic Quartz and Crystal Collection.
                You can differentiate them by checking movement type, case material, or historical significance.
            `
        },
        Casio: {
            highValueModels: ["G-Shock Limited Editions", "Pro Trek Series"],
            lowValueModels: ["F91W", "A158WA"],
            identificationTips: `
                High-value models include G-Shock Limited Editions and Pro Trek Series.
                Low-value models include basic digital watches like F91W and A158WA.
                Look for advanced features like GPS or solar charging in high-value models.
            `
        },
        Seiko: {
            highValueModels: ["Grand Seiko", "Prospex Diver Watches"],
            lowValueModels: ["Seiko Quartz", "Seiko 5"],
            identificationTips: `
                High-value models include Grand Seiko and Prospex Diver Watches.
                Low-value models include entry-level quartz watches like Seiko Quartz or Seiko 5.
                Look for premium movements or vintage chronographs in high-value models.
            `
        },
        Citizen: {
            highValueModels: ["Eco-Drive Titanium Watches", "Promaster Series"],
            lowValueModels: ["Basic Quartz Watches"],
            identificationTips: `
                High-value models include Eco-Drive Titanium Watches and Promaster Series.
                Low-value models include basic quartz watches without advanced features.
                Look for Eco-Drive technology in high-value models.
            `
        },
        Orient: {
            highValueModels: ["Orient Star", "Vintage Chronographs"],
            lowValueModels: ["Basic Automatic Watches"],
            identificationTips: `
                High-value models include Orient Star and vintage chronographs.
                Low-value models include basic automatic watches without premium finishes.
                Look for higher-quality movements in Orient Star models.
            `
        }
    }
};
// Function to normalize input (handles typos and partial matches)
function normalizeInput(input) {
    return input.trim().toLowerCase();
}

// Function to find close matches in the database
function findCloseMatches(input) {
    const normalizedInput = normalizeInput(input);
    const matches = [];

    // Check highValue brands
    watchDatabase.highValue.forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    // Check lowValue brands
    watchDatabase.lowValue.forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    // Check mixedValue brands
    Object.keys(watchDatabase.mixedValue).forEach(brand => {
        if (brand.toLowerCase().includes(normalizedInput)) {
            matches.push(brand);
        }
    });

    return matches;
}

// Main search function
function searchWatch() {
    const brandName = document.getElementById('brand-name').value.trim();

    if (!brandName) {
        alert("Please enter a brand name.");
        return;
    }

    const resultsDiv = document.getElementById("search-results");
    
    let message;

    // Check if the brand is in highValue, lowValue, or mixedValue categories
    if (watchDatabase.highValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a high-value brand! Set this watch aside for further research or listing.</p>`;
    } else if (watchDatabase.lowValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a low-value brand and may not be worth setting aside.</p>`;
    } else if (watchDatabase.mixedValue[brandName]) {
        const brandInfo = watchDatabase.mixedValue[brandName];
        message = `
            <p><strong>${brandName}</strong> has both high-value and low-value models.</p>
            <p>${brandInfo.identificationTips}</p>
            <p><strong>High-Value Models:</strong> ${brandInfo.highValueModels.join(", ")}</p>
            <p><strong>Low-Value Models:</strong> ${brandInfo.lowValueModels.join(", ")}</p>
        `;
    } else {
        // If no exact match is found, suggest close matches
        const closeMatches = findCloseMatches(brandName);

        if (closeMatches.length > 0) {
            message = `<p><strong>${brandName}</strong> is not an exact match, but here are some close matches:</p>`;
            message += `<ul>${closeMatches.map(match => `<li>${match}</li>`).join("")}</ul>`;
            message += `<p>Consider researching these brands further.</p>`;
        } else {
            message = `<p><strong>${brandName}</strong> is not in our database. Consider researching further.</p>`;
        }
    }

    resultsDiv.innerHTML = message;
    resultsDiv.classList.remove("hidden");
}
    resultsDiv.innerHTML = message;
    resultsDiv.classList.remove("hidden");
}
