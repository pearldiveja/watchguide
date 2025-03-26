// List of watch brands categorized by value
const watchDatabase = {
    highValue: [
        "Rolex", "Patek Philippe", "Audemars Piguet", "Cartier", "Omega", 
        "Vacheron Constantin", "Jaeger-LeCoultre", "IWC Schaffhausen", 
        "Panerai", "Tudor", "Breitling", "Grand Seiko", "TAG Heuer", 
        "Richard Mille", "FP Journe", "Hublot", "Chopard", 
        "Parmigiani Fleurier", "Zenith", "Breguet", "Longines", 
        "Maurice Lacroix", "Oris", "Sinn Watches", "Bell & Ross", 
        "Norqain Watches", "Bremont Watches", "Alpina Watches", 
        "Nomos Glashütte", "Rado", "Universal Genève", 
        "Heuer (pre-TAG era)", "Bulova Accutron (specific models)", 
        "Hamilton (vintage models)", "Seiko (specific models like SKX007, Prospex, Grand Seiko)", 
        "Akrivia Watches", "Laurent Ferrier Watches", 
        "De Bethune Watches", "Fortis Watches (e.g., Flieger series)", 
        "Glycine Watches (e.g., Airman series)", 
        "Ming Watches (modern boutique brand)", 
        "Baltic Watches (vintage-inspired designs)", 
        // Add more brands as needed...
    ],
    lowValue: [
        // Add low-value brands here...
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    // Hide all steps except main menu on load
    document.querySelectorAll('.step').forEach(step => {
        if (step.id !== 'main-menu') {
            step.classList.add('hidden');
        } else {
            step.classList.remove('hidden');
        }
    });
});

function showStep(stepId) {
    console.log(`Attempting to show step: ${stepId}`); // Debugging log

    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });

    // Show target step
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.remove('hidden');
        console.log(`Successfully displayed step: ${stepId}`); // Debugging log
    } else {
        console.error(`Step not found: ${stepId}`); // Debugging log
    }
}

function searchWatch() {
    const brandName = document.getElementById('brand-name').value.trim();
    
    if (!brandName) {
        alert("Please enter a brand name.");
        return;
    }

    const resultsDiv = document.getElementById("search-results");
    
    let message;
    
    if (watchDatabase.highValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a high-value brand! Set this watch aside for further research or listing.</p>`;
    } else if (watchDatabase.lowValue.includes(brandName)) {
        message = `<p><strong>${brandName}</strong> is a low-value brand and may not be worth setting aside.</p>`;
    } else {
        message = `<p><strong>${brandName}</strong> is not in our database. Consider researching further.</p>`;
    }

    resultsDiv.innerHTML = message;
    resultsDiv.classList.remove("hidden");
}
