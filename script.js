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
        "Blancpain", "Baume & Mercier", 
        "Ulysse Nardin", "Corum", 
        "Eterna", "Arnold & Son", 
        "Ball Watches", "Girard-Perregaux",
        "Glashütte Original",
        "Vulcain (e.g., Cricket models)",
        "Doxa (e.g., Sub models)",
        "Certina (higher-end models)",
        "Favre-Leuba",
        "Montblanc (e.g., Timewalker series)",
        "Frederique Constant (higher-end models)",
        "Seagull 1963 (collectible Chinese chronographs)",
        "Atlantic Worldmaster (vintage models)",
        "Alpina Startimer Pilot watches",
        "Victorinox Swiss Army watches (specific mechanical models)",
        "Stowa Flieger watches",
        "Anonimo watches",
        "MeisterSinger single-hand watches",
        "Junghans Max Bill watches",
        "Marathon watches (military-grade tool watches)",
        "Laco Pilot watches"
    ],
    lowValue: [
        "Timex", "Casio", "Swatch", "Fossil", "Skagen", "Invicta", 
        "Lorus", "Alba", "Addiesdive", "Berny", "Pulsar", 
        "HMT Watches", "Waltham (basic models)", "Obaku", 
        "Armitron", "Relic by Fossil", "Anne Klein", 
        "Peugeot Watches", "Geneva Watches", "Caravelle by Bulova",
        "Stuhrling Original (entry-level)", "Sekonda", 
        "Nautica Watches (basic models)", "DKNY Watches",
        "Guess Watches (basic models)", "Diesel Watches (basic models)",
        "Michael Kors Watches (entry-level)", 
        "Tommy Hilfiger Watches (entry-level)", 
        "Bulova Quartz (basic models)", 
        "Citizen Quartz (entry-level)", 
        "Seiko Quartz (entry-level)", 
        "Casio G-Shock (basic models like DW5600)", 
        "Casio Duro MDV106", 
        "Casio F-91W", 
        "Casio A158WA-1DF", 
        "Casio AE1200WH-1A", 
        "Timex Weekender", 
        "Timex Expedition Scout", 
        "Timex Easy Reader",
        "Timex Ironman Classic 30",
        "Timex T2H281",
        "Lorus Field Watches",
        "Alba Solar AEFD530",
        "Alba Solar AEFD529",
        "Addiesdive Quartz Diver",
        "Berny Railway Watch",
        "Pulsar Solar Watches",
        "Armitron Sport Watches",
        "Relic Sport Watches",
        "Anne Klein Fashion Watches","Miltado", "Pagani Design", "Steeldive", "Escapement Time", "Bertucci",
        "Sanda", "Bergmann", "Sekonda Xpose", "Daniel Wellington", "Vostok",
        "Komandirskie", "Seagull", "Beijing Watch Factory", "Feice", "MarchLAB",
        "Q&Q by Citizen", "Naviforce", "Curren", "MVMT", "Winner",
        "Tevise", "Jaragar", "Forsining", "Megir", "Yazole",
        "Paulareis", "Benyar", "Nibosi", "Sinobi", "Skmei",
        "Starking", "Cadisen", "Nakzen", "Guanqin", "DOM",
        "Torbollo", "Hannah Martin", "Ochstin", "Bobo Bird", "Infantry",
        "Agelocer", "Brigada", "Sewor", "US Polo Assn. watches", "American Exchange",
        "Ferrari branded watches", "Lamborghini branded watches", "Lotus watches", "Rotary (entry-level)", "Festina (entry-level)",
        "J.Springs", "Fila watches", "New Balance watches", "Champion watches", "Reebok watches",
        "Puma watches", "Lacoste watches", "ESQ by Movado", "Kenneth Cole", "Pierre Cardin watches",
        "Cluse", "Liebeskind", "Charles Vogele", "Akribos", "Perry Ellis watches",
        "Joshua & Sons", "Breda", "Avon watches", "Croton", "River Island watches",
        "Superdry watches", "Jacques Lemans (entry-level)", "Grovana (entry-level)", "Police watches", "Firetrap watches",
        "Kahuna", "Limit", "Accurist (entry-level)", "Ben Sherman watches", "Philip Persio",
        "Chenevard", "Sea-Pro", "Smith & Wesson watches", "Shark watches", "Jeep watches",
        "Cherokee watches", "Krug Baumen", "Slazenger watches", "Duck and Cover watches", "Toy Watch",
        "Lucien Piccard (modern versions)", "Ingersoll (entry level)", "Condor", "Welder", "Jubileum",
        "Momentum (entry-level models)", "Cogito", "Duxot", "Maserati watches", "Jazzmaster (entry-level)"// Add low-value brands here...
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
